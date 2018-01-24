export const SET_ORGANIZATION_NAME = 'SET_ORGANIZATION_NAME';
export const SET_SUBMIT_BUTTON_TEXT = 'SET_SUBMIT_BUTTON_TEXT';
export const SET_TITLE = 'SET_TITLE';

export const SET_YOUR_NAME = 'SET_YOUR_NAME';
export const SET_PRIMARY_SKILL = 'SET_PRIMARY_SKILL';
export const SET_JAVASCRIPT_LIBRARY_OF_CHOICE = 'SET_JAVASCRIPT_LIBRARY_OF_CHOICE';
export const SET_ADDITIONAL_EXPERIENCE = 'SET_ADDITIONAL_EXPERIENCE';
export const SET_START_DATE = 'SET_START_DATE';

/** actions */

export function setOrganizationName(value) {
  return {
    type: SET_ORGANIZATION_NAME,
    value,
  };
}

export function setSubmitButtonText(value) {
  return {
    type: SET_SUBMIT_BUTTON_TEXT,
    value,
  };
}

export function setTitle(value) {
  return {
    type: SET_TITLE,
    value,
  };
}

export function setYourName(value) {
  return {
    type: SET_YOUR_NAME,
    value,
  };
}

export function setPrimarySkill(value) {
  return {
    type: SET_PRIMARY_SKILL,
    value,
  };
}

export function setJavascriptLibraryOfChoice(value) {
  return {
    type: SET_JAVASCRIPT_LIBRARY_OF_CHOICE,
    value,
  };
}

export function setAdditionalExperience(value) {
  return {
    type: SET_ADDITIONAL_EXPERIENCE,
    value,
  };
}

export function setStartDate(value) {
  return {
    type: SET_START_DATE,
    value,
  };
}
