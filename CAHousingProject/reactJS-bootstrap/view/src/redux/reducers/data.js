import { ActionTypes } from "../actions/index";
import { convertToNumberField } from "../../util/housingData";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

export const housingData = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOADED: {
      return { ...state, items: convertToNumberField(action.payload) };
    }
    default: {
      return state;
    }
  }
};
