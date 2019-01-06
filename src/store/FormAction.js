import { UPDATE_FORM_DATA, UPDATE_ARRAY_FIELD } from './actionTypes';

export const setFormData = (key: string, payload: any) => {
  return {
    type: UPDATE_FORM_DATA,
    key,
    payload,
  };
};

export const updateArrayField = (key: string, payload: any) => {
  return {
    type: UPDATE_ARRAY_FIELD,
    key,
    payload,
  };
};
