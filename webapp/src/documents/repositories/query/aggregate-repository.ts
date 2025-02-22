// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const AGGREGATE_REPOSITORY = gql`
  query AggregateRepository($filter: RepositoryFilter) {
    aggregateRepository(filter: $filter) {
      count
      httpMin
      httpMax
      gitMin
      gitMax
    }
  }
`;
