// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const DELETE_PROBLEM = gql`
  mutation DeleteProblem($filter: ProblemFilter!) {
    deleteProblem(filter: $filter) {
      problem {
        id
        title
        shortDescription
        detailedDescription
        status
        claimedAt
        requiredSkills
        created_at
        updated_at
      }
      msg
      numUids
    }
  }
`;
