import update from 'immutability-helper';

import * as FormAction from './FormAction';

import { UPDATE_FORM_DATA, UPDATE_ARRAY_FIELD } from './actionTypes';

export const initialState = {
  your_name: '',
  your_bio: '',
  primary_skill: '',
  javascript_library_of_choice: '',
  additional_experience: [],
  start_date: '',
  formData: {},
};

const FormReducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case FormAction.SET_YOUR_BIO: {
      return update(state, {
        your_bio: { $set: action.value },
      });
    }
    case FormAction.SET_YOUR_NAME: {
      return update(state, {
        your_name: { $set: action.value },
      });
    }
    case FormAction.SET_PRIMARY_SKILL: {
      return update(state, {
        primary_skill: { $set: action.value },
      });
    }
    case FormAction.SET_JAVASCRIPT_LIBRARY_OF_CHOICE: {
      return update(state, {
        javascript_library_of_choice: { $set: action.value },
      });
    }
    case FormAction.SET_START_DATE: {
      return update(state, {
        start_date: { $set: action.value },
      });
    }
    case FormAction.SET_ADDITIONAL_EXPERIENCE: {
      let experience = [...state.additional_experience];

      let index = experience.findIndex(el => el.label === action.value.label);
      if (index !== -1) {
        experience.splice(index, 1);
      }

      experience.push(action.value);

      return update(state, {
        additional_experience: { $set: experience },
      });
    }

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

/**
 * 
 * 
 * 
 import { SET_VIEWED_ITEM, SET_VIEWED_ITEMS } from './actionTypes';

const initialState = {
  viewedItems: {},
};

const pdfTemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEWED_ITEM: {
      return {
        ...state,
        viewedItems: {
          ...state.viewedItems,
          [action.item]: true,
        },
      };
    }

    case SET_VIEWED_ITEMS: {
      return {
        ...state,
        viewedItems: action.items,
      };
    }

    default:
      return state;
  }
};

export default pdfTemplateReducer;



 */
