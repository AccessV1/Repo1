import { create } from 'zustand';

export interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (bool: boolean) => void;
}

/**
 * Zustand store for managing user data / auth
 */
export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (bool: boolean) => set({ isLoggedIn: bool }),
}));
