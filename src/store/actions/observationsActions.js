import * as types from "./observationsTypes";

const observationsRequest = (settings) => {
  return {
    type: types.OBSERVATIONS_LIST_REQUEST,
    settings
  };
};

export { observationsRequest };
