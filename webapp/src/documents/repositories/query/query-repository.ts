// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const QUERY_REPOSITORY = gql`
  query QueryRepository(
    $filter: RepositoryFilter
    $order: RepositoryOrder
    $first: Int
    $offset: Int
  ) {
    queryRepository(
      filter: $filter
      order: $order
      first: $first
      offset: $offset
    ) {
      http
      git
    }
  }
`;
