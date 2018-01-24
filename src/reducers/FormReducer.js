import update from 'immutability-helper';

import * as FormAction from '../actions/FormAction';

export const initialFormState = {
  organizationName: '',
  submitButtonText: '',
  title: '',

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
    default:
      return state;
  }
};

export default FormReducer;
