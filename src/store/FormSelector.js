export const getOrganizationName = state => state.organizationName;
export const getSubmitButtonText = state => state.submitButtonText;
export const getTitle = state => state.title;
export const getYourName = state => state.your_name;
export const getYourBio = state => state.your_bio;
export const getPrimarySkill = state => state.primary_skill;
export const getJavascriptLibraryOfChoice = state =>
  state.javascript_library_of_choice;
export const getAdditionalExperience = state => state.additional_experience;
export const getStartDate = state => state.start_date;

//** DEPRECATE ABOVE */

export const getFormData = (key, state) => state.formData[key];
export const getFormFullData = state => state.formData;
