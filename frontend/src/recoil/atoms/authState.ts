import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    id: null,
    name: null,
    email: null,
  },
});
