import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null, // 초기 상태를 null로 설정
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;