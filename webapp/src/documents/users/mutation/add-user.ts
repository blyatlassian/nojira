// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($input: [AddUserInput!]!, $upsert: Boolean) {
    addUser(input: $input, upsert: $upsert) {
      user {
        name
        github
        email
        telegram
        rate
        actionHistory
      }
      numUids
    }
  }
`;
