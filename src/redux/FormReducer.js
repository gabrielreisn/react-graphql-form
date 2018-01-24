import update from 'immutability-helper';

import {FormAction} from './FormAction';

export const initialFormState = {
  organizationName: '',
  submitButtonText: '',
  title: '',

  your_name: '',
  primary_skill: '',
  javascript_library_of_choice: '',
  additional_experience: [],
  start_date: '',
};

const FormReducer = (state = initialFormState, action) => {
  if (!action) return state;
  //action.payload
  switch (action.type) {
    case 'INITIALIZE_STORE': {
      return update(state, {
        organizationName: {$set: action.payload.publicFormSettings.organizationName},
        submitButtonText: {$set: action.payload.publicFormSettings.submitButtonText},
        title: {$set: action.payload.publicFormSettings.title},
      });
    }
    case 'FormAction.DECREMENT': {
      return null;
    }
    case 'INCREMENT': {
      return null;
    }
    default:
      return state;
  }
};

export default FormReducer;

/* imutability helpers!!
    case SearchAction.SET_QUERY: {
      return update(state, {
        query: {$set: action.value},
      });
    }
*/

/*

   case SearchAction.EXPAND_COLLAPSE_INITIAL_STATE: {
      return Object.assign({}, state, {
        areAllEpisodesExpanded: true,
        areAllEpisodesCollapsed: false,
      });
    }

*/
