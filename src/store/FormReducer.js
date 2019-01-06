import { UPDATE_FORM_DATA, UPDATE_ARRAY_FIELD } from './actionTypes';

export const initialState = {
  formData: {},
};

const FormReducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case UPDATE_FORM_DATA: {
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.key]: action.payload,
        },
      };
    }

    case UPDATE_ARRAY_FIELD: {
      const previousArray = state.formData[action.key]
        ? state.formData[action.key]
        : [];
      const newArray = previousArray
        .filter(elem => elem.label !== action.payload.label)
        .concat(action.payload);

      return {
        ...state,
        formData: {
          ...state.formData,
          [action.key]: newArray,
        },
      };
    }

    default:
      return state;
  }
};

export default FormReducer;
