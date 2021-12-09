import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import KakaoProvider from 'next-auth/providers/kakao';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SECRET,
      authorization: {
        url: 'https://kauth.kakao.com/oauth/authorize',
        params: {
          // 카카오 로그인은 OIDC를 지원하지 않는데, scope에 openid 값이 넘어가서 제거
          scope: undefined,
        },
      },
      token: {
        url: 'https://kauth.kakao.com/oauth/token',
        async request({ client, params, checks, provider }) {
          const tokens = await client.oauthCallback(
            provider.callbackUrl,
            params,
            checks,
            {
              // token 발급에 client_id, client_secret 값이 필요
              exchangeBody: {
                client_id: process.env.KAKAO_ID,
                client_secret: process.env.KAKAO_SECRET,
              },
            },
          );
          return {
            tokens,
          };
        },
      },
    }),
  ],

  secret: process.env.SECRET,
});
