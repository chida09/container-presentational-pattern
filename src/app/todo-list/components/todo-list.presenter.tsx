import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1, { message: 'titleを入力してください' }),
  description: z.string().optional(),
  dueDate: z.string().min(1, { message: 'dueDateを入力してください' }),
});

export type FormValue = z.infer<typeof schema>;

export const useTodoListPresenter = () => {
  const form = useForm<FormValue>({
    defaultValues: {
      title: '',
      description: '',
      dueDate: ''
    },
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: zodResolver(schema),
  });



  return {
    ...form,
  };
};
