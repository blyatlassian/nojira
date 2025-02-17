import { useMutation, DocumentNode } from '@apollo/client';

/**
 * Options for configuring the useAppMutation hook
 */
type UseAppMutationOptions<TData> = {
  /** Callback function called when the mutation completes successfully */
  onCompleted?: (data: TData) => void;
  /** Callback function called when the mutation encounters an error */
  onError?: (error: any) => void;
};

/**
 * A custom hook that wraps Apollo's useMutation
 *
 * @template TData - The expected type of the mutation response data
 * @template TVariables - The type of variables the mutation accepts
 *
 * @param mutation - The GraphQL mutation document
 * @param options - Configuration options including callbacks
 *
 * @returns An object containing:
 * - execute: Promise-based function to execute the mutation
 * - data: The transformed mutation response
 * - loading: Boolean indicating if the mutation is in flight
 * - error: Any error that occurred during the mutation
 *
 * @example
 * ```typescript
 * const { execute } = useAppMutation<Problem, { input: UpdateProblemInput }>(
 *   UPDATE_PROBLEM,
 *   {
 *     onCompleted: (problem) => toast.success(`Updated: ${problem.title}`),
 *     onError: (error) => toast.error(error.message)
 *   }
 * );
 *
 * // Execute the mutation
 * try {
 *   const result = await execute({
 *     input: { filter: { id }, set: { title } }
 *   });
 * } catch (error) {
 *   console.error('Mutation failed:', error);
 * }
 * ```
 */
export const useAppMutation = <TData, TVariables = Record<string, any>>(
  mutation: DocumentNode,
  options: UseAppMutationOptions<TData> = {}
) => {
  // Execute Apollo's useMutation hook with our configuration
  const [mutate, { data, loading, error }] = useMutation<TData, TVariables>(
    mutation,
    {
      // Transform the response data before calling onCompleted
      onCompleted: (data) => options.onCompleted?.(extractResponse(data)),
      onError: options.onError,
    }
  );

  /**
   * Executes the mutation with the provided variables.
   * Returns a promise that resolves with the transformed response data.
   *
   * @param variables - Variables to pass to the mutation
   * @returns Promise resolving to the mutation response
   */
  const execute = async (variables?: TVariables) => {
    const result = await mutate({ variables });
    return extractResponse(result.data);
  };

  // Transform any existing data using the same extraction logic
  const transformedData = data ? extractResponse(data) : null;

  return {
    execute,
    data: transformedData as TData | null,
    loading,
    error,
  };
};

// TODO: duplicated. move to utils
const extractResponse = (data: any): any => {
  const [firstKey] = Object.keys(data);
  return data[firstKey];
};
