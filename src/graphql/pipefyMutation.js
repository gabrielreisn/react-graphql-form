import gql from 'graphql-tag';

export const PIPEFY_MUTATION = gql`
  mutation PipefyMutation(
    $name: [UndefinedInput]
    $bio: [UndefinedInput]
    $primary_skill: [UndefinedInput]
    $jsLibrary: [UndefinedInput]
    $additionalExp: [UndefinedInput]
    $start_date: [UndefinedInput]
  ) {
    submitPublicForm(
      input: {
        formId: "1lf_E0x4"
        filledFields: [
          { fieldId: "your_name", fieldValue: $name }
          { fieldId: "your_bio", fieldValue: $bio }
          { fieldId: "primary_skill", fieldValue: $primary_skill }
          { fieldId: "javascript_library_of_choice", fieldValue: $jsLibrary }
          { fieldId: "additional_experience", fieldValue: $additionalExp }
          { fieldId: "start_date", fieldValue: $start_date }
        ]
      }
    ) {
      repoItem {
        id
        title
      }
    }
  }
`;
