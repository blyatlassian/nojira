import { useMutation, DocumentNode } from '@apollo/client';

type UseAppMutationOptions<TData> = {
  onCompleted?: (data: TData) => void;
  onError?: (error: any) => void;
};

export const useAppMutation = <TData, TVariables = Record<string, any>>(
  mutation: DocumentNode,
  options: UseAppMutationOptions<TData> = {}
) => {
  const [mutate, { data, loading, error }] = useMutation<TData, TVariables>(
    mutation,
    {
      onCompleted: (data) => options.onCompleted?.(extractResponse(data)),
      onError: options.onError,
    }
  );

  const execute = async (variables?: TVariables) => {
    const result = await mutate({ variables });
    return extractResponse(result.data);
  };

  const transformedData = data ? extractResponse(data) : null;

  return {
    execute,
    data: transformedData as TData | null,
    loading,
    error,
  };
};

const extractResponse = (data: any): any => {
  const [firstKey] = Object.keys(data);
  return data[firstKey];
};
