import { create } from 'zustand';

export interface LoginAndRegistrationState {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  countryCode: string;
  setCountryCode: (countryCode: string) => void;
}

/**
 * Zustand store for managing user onboarding.
 *
 * #### Example:
 * ```js
 * // Random LoginAndRegistration related screen component
 * const { phoneNumber, setPhoneNumber } = useAuthStore();
 * setPhoneNumber('1234567890');
 * ```
 */
export const useLoginAndRegistrationStore = create<LoginAndRegistrationState>((set) => ({
  phoneNumber: '',
  setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
  countryCode: '1',
  setCountryCode: (countryCode: string) => set({ countryCode }),
}));
