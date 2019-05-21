import {LOAD_HALL_OF_FAM, LOAD_HALL_OF_FAM_FAIL, LOAD_HALL_OF_FAM_SUCCESS} from "../types";

const init = {
  status : 0,
  hallOfFams : undefined
};
export const hallOfFam =  (state = init, action = {}) => {
  switch (action.type) {
    case LOAD_HALL_OF_FAM:
      return {
        ...state,
      };
    case LOAD_HALL_OF_FAM_SUCCESS:
      return {
        ...state,
        status: 200,
        hallOfFams: action.response
      };
    case LOAD_HALL_OF_FAM_FAIL:
      return {
        ...state,
        status: action.err
      };
    default:
      return state;
  }
};
