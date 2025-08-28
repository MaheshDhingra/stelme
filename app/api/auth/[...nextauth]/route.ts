import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const providers = [
  GithubProvider({
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
  }),
];

const authOptions = {
  providers,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };