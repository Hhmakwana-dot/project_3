import { create } from "zustand";
const userProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // addPost: (post) => set((state) => ({
}));
export default userProfileStore;
