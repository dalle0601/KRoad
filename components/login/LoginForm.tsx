'use client'
import CustomButton from '../common/button/CustomButton';
import CustomInput from '../common/input/CustomInput';
import { useImmer } from 'use-immer'

function LoginForm() {
  const [login, setLogin] = useImmer({
    id: '',
    password: ''
  })

  const handleChangeId = (value:string) => {
    setLogin((draft) => {
      draft.id = value
    })
  }

  const handleChangePassword = (value: string) => {
    setLogin((draft) => {
      draft.password = value
    })
  }

  const handleLogin = () => {
    console.log('login')
  }

  return (
    <form className='w-[585px] m-auto border-2 border-gray-100 rounded-lg px-10 py-8'>
      <h1>로그인</h1>
      <p className='text-info'>로그인시 더 많은 서비스를 사용할 수 있어요.</p>
      <div className='w-full my-6'>
        <CustomInput value={login.id} onChange={handleChangeId} placeholder='아이디를 입력하세요.' style='rounded-md border-gray-100 mb-2' />
        <CustomInput value={login.password} onChange={handleChangePassword} placeholder='비밀번호를 입력하세요.' style='rounded-md  border-gray-100 mb-2'/>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <p className='text-info'>소셜 계정으로 로그인</p>
        <div className='min-h-[1px] flex-grow bg-gray-100'></div>
      </div>
      <div className='w-full'>
        <CustomInput value={login.id} onChange={handleChangeId} placeholder='아이디를 입력하세요.' style='rounded-md border-gray-100 mb-2' />
        <CustomInput value={login.password} onChange={handleChangePassword} placeholder='비밀번호를 입력하세요.' style='rounded-md  border-gray-100 mb-2'/>
      </div>
      <CustomButton name='로그인' onClick={handleLogin} />
    </form> 
  );
}

export default LoginForm;
