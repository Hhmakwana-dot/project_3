import { create } from "zustand";

const userProfileStore = create((set) => ({
  userProfile: null,
  //  posts: [],
  setUserProfile: (userProfile) => set({ userProfile }),
  // this is used to update the user profile in the store

  // new post
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [post.id, ...state.userProfile.posts],
      },
    })),

  //delete post
  deletePost: (postId) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: state.userProfile.posts.filter((id) => id !== postId),
      },
    })),
  //set post

  // setPosts: (posts) => set({ posts }),
  // add comment
}));

export default userProfileStore;
