import { useQuery, DocumentNode, OperationVariables } from '@apollo/client';

/**
 * Options for configuring the useAppQuery hook
 */
type UseAppQueryOptions = {
  /** If true, the query will not be executed */
  skip?: boolean;
};

/**
 * A custom hook that wraps Apollo's useQuery
 *
 * @template TData - The expected type of the query response data
 * @template TVariables - The type of variables the query accepts
 *
 * @param query - The GraphQL query document
 * @param variables - Variables to pass to the query (optional)
 * @param options - Additional options for the query (optional)
 *
 * @returns An object containing:
 * - data: The transformed query response
 * - loading: Boolean indicating if the query is in flight
 * - error: Any error that occurred during the query
 * - refetch: Function to refetch the query
 * - isEmpty: Boolean indicating if the response is empty
 *
 * @example
 * ```typescript
 * const { data, loading, error } = useAppQuery<Problem[]>(
 *   QUERY_PROBLEMS,
 *   { status: 'OPEN' },
 *   { skip: !isAuthenticated }
 * );
 * ```
 */
export const useAppQuery = <
  TData,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode,
  variables?: TVariables,
  options: UseAppQueryOptions = {}
) => {
  // Execute the Apollo useQuery hook with our configuration
  const { data, loading, error, refetch } = useQuery<TData, TVariables>(query, {
    variables: variables || ({} as TVariables),
    skip: options.skip,
  });

  // Transform the response data by extracting it from the query result
  const transformedData = data ? extractResponse(data) : null;

  return {
    data: transformedData as TData | null,
    loading,
    error,
    refetch,
    // isEmpty is true when we're not loading, have no error, but also no data
    isEmpty: !loading && !error && !transformedData,
  };
};

// TODO: duplicated. move to utils
const extractResponse = (data: any): any => {
  const [firstKey] = Object.keys(data);
  return data[firstKey];
};
