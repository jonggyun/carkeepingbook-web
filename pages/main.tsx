import { signOut } from 'next-auth/react';

function Main() {
  return (
    <div>
      <button type="button" onClick={() => signOut()}>
        로그아웃
      </button>
    </div>
  );
}

export default Main;
