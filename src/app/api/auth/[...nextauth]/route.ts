import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const cookiePrefix = "test";

const handler = NextAuth({
  pages: {
    signIn: "/message/start",
  },
  providers: [
    KakaoProvider({
      clientId: process.env.REACT_APP_KAKAO_API_KEY ? process.env.REACT_APP_KAKAO_API_KEY : "",
      clientSecret: process.env.REACT_APP_KAKAO_SECRET_KEY ? process.env.REACT_APP_KAKAO_SECRET_KEY : "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log("session  ", session, user, token);
      session.accessToken = `${token.accessToken}`;
      return session;
    },
  },
  secret: process.env.REACT_APP_AUTH_SECRET,
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: true,
  //     },
  //   },
  //   callbackUrl: {
  //     name: `__Secure-next-auth.callback-url`,
  //     options: {
  //       sameSite: "lax",
  //       path: "/",
  //       secure: true,
  //     },
  //   },
  //   csrfToken: {
  //     name: `__Host-next-auth.csrf-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: true,
  //     },
  //   },
  //   pkceCodeVerifier: {
  //     name: `${cookiePrefix}next-auth.pkce.code_verifier`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: true,
  //       maxAge: 900,
  //     },
  //   },
  //   state: {
  //     name: `${cookiePrefix}next-auth.state`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: true,
  //       maxAge: 900,
  //     },
  //   },
  //   nonce: {
  //     name: `${cookiePrefix}next-auth.nonce`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: true,
  //     },
  //   },
  // },
});

export { handler as GET, handler as POST };
