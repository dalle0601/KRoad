import React from 'react';
import HomeSwiper from '@/components/homeSwiper/HomeSwiper';
import MyHotPlace from '@/components/myHotPlace/MyHotPlace';
import TourPackage from '@/components/tourPackage/TourPackage';
const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const serviceKey =
  'mhjUbuEkb7p91IrfK9qadCMCyzCB8n%2BUqDTuFrjS%2FCu%2FjLC1SUxGJiFT9P6PJEwn8w7mhP4gHC0EUWlxXs95jA%3D%3D';
let areaCodeparam = '';

const areaArray = [
  { rnum: 1, code: '1', name: '서울' },
  { rnum: 2, code: '2', name: '인천' },
  { rnum: 3, code: '3', name: '대전' },
  { rnum: 4, code: '4', name: '대구' },
  { rnum: 5, code: '5', name: '광주' },
  { rnum: 6, code: '6', name: '부산' },
  { rnum: 7, code: '7', name: '울산' },
  { rnum: 8, code: '8', name: '세종특별자치시' },
  { rnum: 9, code: '31', name: '경기도' },
  { rnum: 10, code: '32', name: '강원특별자치도' },
  { rnum: 11, code: '33', name: '충청북도' },
  { rnum: 12, code: '34', name: '충청남도' },
  { rnum: 13, code: '35', name: '경상북도' },
  { rnum: 14, code: '36', name: '경상남도' },
  { rnum: 15, code: '37', name: '전북특별자치도' },
  { rnum: 16, code: '38', name: '전라남도' },
  { rnum: 17, code: '39', name: '제주도' },
];

let tripData: any[] = [];

async function getData(tripArea: string) {
  let URLs = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?MobileOS=ETC&MobileApp=test&_type=json&arrange=R&contentTypeId=12&keyword=${tripArea}&serviceKey=${serviceKey}`;
  let localURl = `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?MobileOS=ETC&MobileApp=test&_type=json&arrange=R&contentTypeId=12&areaCode=${tripArea}&serviceKey=${serviceKey}`;
  let res_areaCode = '';
  let res_sigunguCode = '';
  const response = await fetch(localURl).then((res) => {
    res.json().then(async (data) => {
      let random_trip = Math.floor(
        Math.random() * (data.response.body.items.item.length - 1) + 1,
      );
      let res_data = data.response.body.items.item[random_trip];
      res_areaCode = res_data.areacode;
      res_sigunguCode = res_data.sigungucode;

      const sigungu = await localGetData(res_areaCode, res_sigunguCode);
      // // sigungu[0] = 지역 (서울, 경기 .....)
      // // sigungu[1] = 시군구 (강남구, 중구 .....)
      let datas = Object.assign(res_data, sigungu);
      tripData.push(datas);
    });
  });
}

async function localGetData(area: any, sigunguCode: any) {
  const localURL = `https://apis.data.go.kr/B551011/KorService1/areaCode1?numOfRows=30&MobileOS=ETC&MobileApp=test&areaCode=${area}&_type=json&serviceKey=${serviceKey}`;
  const localResponse = await fetch(localURL);

  const localJson = await localResponse.json();

  let areaText = '';
  areaArray.map((x: any) => {
    if (x.code === area) {
      areaText = x.name;
    }
  });
  let sigunguText = '';
  localJson.response.body.items.item.map((x: any) => {
    if (x.code === sigunguCode) {
      sigunguText = x.name;
    }
  });

  return { areaText: areaText, sigunguText: sigunguText };
}

const MainPage = async () => {
  tripData = [];
  for (let i = 0; i < areaArray.length; i++) {
    await getData(areaArray[i].code);
  }

  // navigator.geolocation.getCurrentPosition(function (pos) {
  //   console.log(pos);
  //   var latitude = pos.coords.latitude;
  //   var longitude = pos.coords.longitude;
  //   alert('현재 위치는 : ' + latitude + ', ' + longitude);
  // });
  return (
    <>
      <HomeSwiper />
      <TourPackage tripdata={tripData} />
      <MyHotPlace tripdata={tripData} />
    </>
  );
};

export default MainPage;
