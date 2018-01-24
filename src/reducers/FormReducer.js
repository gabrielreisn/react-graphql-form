import update from 'immutability-helper';

import * as FormAction from '../actions/FormAction';

export const initialFormState = {
  your_name: '',
  your_bio: '',
  primary_skill: '',
  javascript_library_of_choice: '',
  additional_experience: [],
  start_date: '',
};

const FormReducer = (state = initialFormState, action) => {
  if (!action) return state;
  switch (action.type) {
    case FormAction.SET_YOUR_BIO: {
      return update(state, {
        your_bio: {$set: action.value},
      });
    }
    case FormAction.SET_YOUR_NAME: {
      return update(state, {
        your_name: {$set: action.value},
      });
    }
    case FormAction.SET_PRIMARY_SKILL: {
      return update(state, {
        primary_skill: {$set: action.value},
      });
    }
    case FormAction.SET_JAVASCRIPT_LIBRARY_OF_CHOICE: {
      return update(state, {
        javascript_library_of_choice: {$set: action.value},
      });
    }
    case FormAction.SET_START_DATE: {
      return update(state, {
        start_date: {$set: action.value},
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
        additional_experience: {$set: experience},
      });
    }
    default:
      return state;
  }
};

export default FormReducer;
