import { useGitHubUser } from '@/hooks/useGitHubUser';
import { useProblemQuery } from './types/problem.gen';
import Edit from './Edit';
import { useUpdateTitleMutation } from './types/problems.gen';
import { Button } from '../ui/button';
import { Edit2 } from 'lucide-react';
import { useState } from 'react';

type ProblemProps = {
  id: string;
};

export default function Problem({ id }: ProblemProps) {
  const [editing, setEditing] = useState<'title' | 'body' | null>(null);
  let ghu = useGitHubUser();
  const [_updateTitle] = useUpdateTitleMutation();
  let mutateProblem = (title?: string) => {
    if (title) {
      _updateTitle({
        variables: { id: id, title: title },
      });
    }
  };

  const { data, loading, error } = useProblemQuery({ variables: { id } });

  if (loading) return <div>Loading...</div>;
  if (error || !data?.getProblem?.id) return <div>Error loading problem.</div>;

  return (
    <>
      <div>
        <div className={'flex flex-nowrap'}>
          <h1 className="text-3xl">{data.getProblem?.title}</h1>
          <Button
            onClick={() => {
              console.log(39);
              setEditing(editing === 'title' ? null : 'title');
            }}
          >
            <Edit2 />
          </Button>
        </div>
        <hr />
        <hr />
        <hr />
        <pre>{JSON.stringify(data.getProblem, null, 2)}</pre>
        <pre>{JSON.stringify(ghu.data?.login, null, 2)}</pre>
      </div>
      <Edit
        problemId={id}
        editing={editing}
        mutation={mutateProblem}
        title={data.getProblem?.title}
      />
    </>
  );
}
