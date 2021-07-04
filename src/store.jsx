import create from "zustand";

const useStore = create((set, get) => ({
  usersList: [],
  getUsers: () => {
    fetch(`http://localhost:4000/users/`)
      .then((resp) => resp.json())
      .then((users) => set({ usersList: users }));
  },
}));

export default useStore;
