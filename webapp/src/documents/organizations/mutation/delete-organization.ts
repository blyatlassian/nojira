// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const DELETE_ORGANIZATION = gql`
  mutation DeleteOrganization($filter: OrganizationFilter!) {
    deleteOrganization(filter: $filter) {
      organization {
        name
        githubOrg
      }
      msg
      numUids
    }
  }
`;
