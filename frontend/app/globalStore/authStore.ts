import { create } from 'zustand';

interface AuthState {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
}


/**
 * Zustand store for managing authentication state.
 *
 * #### Example:
 * ```js
 * // Random Auth related screen component
 * const { phoneNumber, setPhoneNumber } = useAuthStore();
 * setPhoneNumber('1234567890');
 * ```
 */
export const useAuthStore = create<AuthState>((set) => ({
  phoneNumber: '',
  setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
}));
