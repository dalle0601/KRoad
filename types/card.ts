import { StaticImageData } from 'next/image';

export interface ICard {
  id: number;
  url?: StaticImageData;
  title?: string;
  content?: string;
  area?: string;
  rating?: number;
  cost?: number;
  spendTime?: number;
  style?: string;
  frameStyle?: string;
  imgStyle?: string;
  contentFrameStyle?: string;
  titleStyle?: string;
  areaStyle?: string;
}

export interface ICardData {
  addr1?: string;
  addr2?: string;
  areacode?: string;
  booktour?: string;
  cat1?: string;
  cat2?: string;
  cat3?: string;
  contentid?: string;
  contenttypeid?: string;
  createdtime?: string;
  firstimage?: string | StaticImageData;
  firstimage2?: string;
  cpyrhtDivCd?: string;
  mapx?: string;
  mapy?: string;
  mlevel?: string;
  modifiedtime?: string;
  sigungucode?: string;
  tel?: string;
  title?: string;
  areaText?: string;
  sigunguText?: string;
  style?: string;
  frameStyle?: string;
  imgStyle?: string;
  contentFrameStyle?: string;
  titleStyle?: string;
  areaStyle?: string;
  rating?: number;
  content?: string;
  id?: string;
}
