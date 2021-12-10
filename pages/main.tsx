import { signOut, useSession } from 'next-auth/react';

interface Props {
  test?: string;
}
function Main({ test }: Props) {
  const { data: session } = useSession();
  console.log('!!!!!!!!여기요', test);
  return (
    <div>
      <button type="button" onClick={() => signOut()}>
        로그아웃
      </button>
    </div>
  );
}

export default Main;
