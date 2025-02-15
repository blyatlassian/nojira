import { useQuery, DocumentNode, OperationVariables } from '@apollo/client';

type UseAppQueryOptions = {
  skip?: boolean;
};

export const useAppQuery = <
  TData,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode,
  variables?: TVariables,
  options: UseAppQueryOptions = {}
) => {
  const { data, loading, error, refetch } = useQuery<TData, TVariables>(query, {
    variables: variables || ({} as TVariables),
    skip: options.skip,
  });

  const transformedData = data ? extractResponse(data) : null;

  return {
    data: transformedData as TData | null,
    loading,
    error,
    refetch,
    isEmpty: !loading && !error && !transformedData,
  };
};

const extractResponse = (data: any): any => {
  const [firstKey] = Object.keys(data);
  return data[firstKey];
};
