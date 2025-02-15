import React from 'react';

import Title from './Title';
import { useProblemsQuery } from './types/problems.gen';
import { useAppQuery } from '@/hooks/useAppQuery';
import { Problem } from '@/types/graphql.gen';
import { QUERY_PROBLEM } from '@/documents/problems/query';

export const Problems: React.FC = () => {
  const { data: problemsData } = useAppQuery<Problem[]>(QUERY_PROBLEM);
  const { data, loading, error } = useProblemsQuery();
  const problems = data?.queryProblem
    ?.map((problem) => {
      if (problem) {
        return problem;
      }
    })
    .filter((problem) => problem !== undefined);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading problems.</div>;

  console.log({ problemsData });

  if (problems)
    return (
      <div>
        {problems.map((problem) => (
          <Title key={problem.id} title={problem.title} id={problem.id} />
        ))}
      </div>
    );
};
