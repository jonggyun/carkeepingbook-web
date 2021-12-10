import Image from 'next/image';
import { signIn } from 'next-auth/react';

import GithubImage from 'public/images/github_mark_white.png';

function SignIn() {
  return (
    <div className="h-full flex justify-center items-center">
      <button
        className="bg-black flex justify-center items-center text-white p-3 text-lg rounded-lg"
        type="button"
        onClick={() => signIn('github')}
      >
        <Image src={GithubImage} alt="sign-in" />
        <span className="pl-2">Sign In with Github</span>
      </button>
    </div>
  );
}

export default SignIn;
