import { LOADER_ON, LOADER_OFF } from "../operationsTaskConstant/index";

export const loaderOn = () => ({
  type: LOADER_ON,
});

export const loaderOff = () => ({
  type: LOADER_OFF,
});
