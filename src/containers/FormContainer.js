// @flow

import * as React from 'react';
import { Query, Mutation } from 'react-apollo';
import CircularProgress from 'material-ui/CircularProgress';
import FormStoreContainer from './FormStoreContainer';

import { PIPEFY_MUTATION } from '../graphql/pipefyMutation';
import { PIPEFY_QUERY } from '../graphql/pipefyQuery';

const normalizeFields = fields => {
  return fields.reduce((accumulator, currentValue) => {
    accumulator[currentValue.__typename] = currentValue;
    return accumulator;
  }, {});
};

const FormContainer = () => (
  <Mutation mutation={PIPEFY_MUTATION}>
    {pipefyMutation => (
      <Query query={PIPEFY_QUERY} context={{ public: true }}>
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress size={80} thickness={5} />;
          if (error) return alert(`Error!: ${error}`);

          const { publicForm: { publicFormSettings, formFields } } = data;
          return (
            <FormStoreContainer
              formMutation={pipefyMutation}
              publicFormSettings={publicFormSettings}
              formFields={normalizeFields(formFields)}
            />
          );
        }}
      </Query>
    )}
  </Mutation>
);

export default FormContainer;
