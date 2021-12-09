import { signIn, useSession } from 'next-auth/react';

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

export default Home;
