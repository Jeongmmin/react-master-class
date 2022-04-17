import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
  effects_UNSTABLE: [persistAtom],
});


export const CheckedState = atom({
  key: "checked",
  default: false,
  effects_UNSTABLE: [persistAtom],
})