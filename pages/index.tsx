import { signIn, useSession } from 'next-auth/react';
import { findUser } from 'helpers/prisma';

import SignIn from './Auth/signIn';
import Main from './main';

function Home() {
  const { status } = useSession();

  if (status === 'loading') {
    return null;
  }
  return (
    <main className="w-full h-screen">
      {status === 'unauthenticated' ? <SignIn /> : <Main />}
    </main>
  );
}

export async function getServerSideProps() {
  console.log('?????????????????????');
  const result = await findUser();
  console.log('@@@@@@@', result);
  return {
    props: { test: '1111' },
  };
}

export default Home;
