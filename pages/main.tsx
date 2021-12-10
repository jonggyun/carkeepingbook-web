import { signOut, useSession } from 'next-auth/react';

function Main() {
  const { data } = useSession();
  console.log('!!', data?.user);
  return (
    <div>
      <button type="button" onClick={() => signOut()}>
        로그아웃
      </button>
    </div>
  );
}

export default Main;
