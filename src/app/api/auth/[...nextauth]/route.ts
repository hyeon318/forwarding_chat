import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  pages: {
    signIn: "/message/start",
  },
  providers: [
    KakaoProvider({
      clientId: "9a37d4fd6cac75055bdedec74bdea7ea",
      clientSecret: "na6RkjqzXR7DwXZxuJENucO16wbae19K",
    }),
  ],
});

export { handler as GET, handler as POST };
