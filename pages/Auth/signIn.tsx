import Image from 'next/image';
import { signIn } from 'next-auth/react';

import KakaoLoginImage from '../../public/images/kakao_login_large_narrow.png';

function SignIn() {
  return (
    <div className="h-full flex justify-center items-center">
      <button type="button" onClick={() => signIn('kakao')}>
        <Image className="hover:" src={KakaoLoginImage} alt="sign-in" />
      </button>
    </div>
  );
}

export default SignIn;
