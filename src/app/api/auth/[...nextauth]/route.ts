import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import PocketBase from 'pocketbase';

const pocketbase = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_API_URL);

interface ExtendedJWT extends JWT {
  accessToken?: string;
  accessTokenExpires?: number;
  refreshToken?: string;
  error?: string;
  user?: any;
}

const refreshAccessToken = async (token: ExtendedJWT): Promise<ExtendedJWT> => {
  try {
    await pocketbase.collection('users').authRefresh();

    return {
      ...token,
      accessToken: pocketbase.authStore.token,
      accessTokenExpires: Date.now() + 3600 * 1000, // Assuming the token is valid for 1 hour
    };
  } catch (error) {
    console.error('Error refreshing access token', error);
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
};

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user, account }) {
      const extendedToken = token as ExtendedJWT;

      // Initial sign in
      if (account && user) {
        const expiresIn = 3600; // Default to 1 hour

        return {
          id: user.id,
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + expiresIn * 1000,
          user,
        };
      }

      // Return previous token if the access token has not expired yet
      if (extendedToken.accessTokenExpires && Date.now() < extendedToken.accessTokenExpires) {
        return extendedToken;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(extendedToken);
    },
    async session({ session, token }) {
      const extendedToken = token as ExtendedJWT;

      session.user = extendedToken.user;
      session.accessToken = extendedToken.accessToken;
      session.error = extendedToken.error;

      return session;
    },
  },
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        try {
          const authData = await pocketbase.collection('users').authWithPassword(email, password);
          console.log('Auth Data:', authData);

          if (authData.record) {
            const user = {
              id: authData.record.id,
              collectionId: authData.record.collectionId,
              collectionName: authData.record.collectionName,
              username: authData.record.username,
              verified: authData.record.verified,
              emailVisibility: authData.record.emailVisibility,
              email: authData.record.email,
              created: authData.record.created,
              updated: authData.record.updated,
              name: authData.record.name,
              avatar: authData.record.avatar,
              role: authData.record.role,
              group: authData.record.group,
              gender: authData.record.gender,
            };

            return {
              accessToken: pocketbase.authStore.token,
              ...user
            };
          } else {
            console.error('No record found in authData:', authData);
            return null;
          }
        } catch (error) {
          console.error('Failed to authorize user:', error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };