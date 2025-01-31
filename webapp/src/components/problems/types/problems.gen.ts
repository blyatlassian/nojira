import * as Types from '../../../types/graphql.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProblemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProblemsQuery = { __typename?: 'Query', queryProblem?: Array<{ __typename?: 'Problem', id: string, created_at: any, title: string, status: Types.ProblemStatus, updated_at: any } | null> | null };


export const ProblemsDocument = gql`
    query Problems {
  queryProblem {
    id
    created_at
    title
    status
    updated_at
  }
}
    `;

/**
 * __useProblemsQuery__
 *
 * To run a query within a React component, call `useProblemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProblemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProblemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProblemsQuery(baseOptions?: Apollo.QueryHookOptions<ProblemsQuery, ProblemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProblemsQuery, ProblemsQueryVariables>(ProblemsDocument, options);
      }
export function useProblemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProblemsQuery, ProblemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProblemsQuery, ProblemsQueryVariables>(ProblemsDocument, options);
        }
export function useProblemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProblemsQuery, ProblemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProblemsQuery, ProblemsQueryVariables>(ProblemsDocument, options);
        }
export type ProblemsQueryHookResult = ReturnType<typeof useProblemsQuery>;
export type ProblemsLazyQueryHookResult = ReturnType<typeof useProblemsLazyQuery>;
export type ProblemsSuspenseQueryHookResult = ReturnType<typeof useProblemsSuspenseQuery>;
export type ProblemsQueryResult = Apollo.QueryResult<ProblemsQuery, ProblemsQueryVariables>;
export const namedOperations = {
  Query: {
    Problems: 'Problems'
  }
}