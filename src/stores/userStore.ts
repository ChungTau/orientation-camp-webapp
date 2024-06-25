import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { signOut } from 'next-auth/react';
import PocketBase from 'pocketbase';

const pocketbase = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_API_URL);

interface User {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  username?: string;
  verified?: boolean;
  emailVisibility?: boolean;
  email?: string;
  created?: string;
  updated?: string;
  name?: string;
  avatar?: string;
  role?: string;
  group?: string;
  gender?: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  signout: () => void;
}

export const useUserStore = create<UserStore>()(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    signout: () => {
      // Clear the PocketBase authentication store
      pocketbase.authStore.clear();
      // Sign out from NextAuth
      signOut({ callbackUrl: '/' });
      // Clear the user state in Zustand
      set({ user: null });
    },
  }))
);