// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const ADD_REPOSITORY = gql`
  mutation AddRepository($input: [AddRepositoryInput!]!) {
    addRepository(input: $input) {
      repository {
        http
        git
      }
      numUids
    }
  }
`;
