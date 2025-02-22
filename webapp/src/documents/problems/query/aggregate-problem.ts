// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const AGGREGATE_PROBLEM = gql`
  query AggregateProblem($filter: ProblemFilter) {
    aggregateProblem(filter: $filter) {
      count
      titleMin
      titleMax
      shortDescriptionMin
      shortDescriptionMax
      detailedDescriptionMin
      detailedDescriptionMax
      claimedAtMin
      claimedAtMax
      created_atMin
      created_atMax
      updated_atMin
      updated_atMax
    }
  }
`;
