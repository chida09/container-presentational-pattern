/** @jsxImportSource @emotion/react */
'use client'

import { useForm } from "react-hook-form"
import { Wrapper, Table, TaskAddButton, Td, Th, Thead, FormSubmitWrapper, TextInput, SectionTitle } from "./todo-list.style"
import { useCallback } from "react";
import { ErrorMessage } from '@hookform/error-message';
import { ERROR_MESSAGE_STYLE } from "../../lib/styles";

type Todo = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
};

type FormValue = Omit<Todo, 'id' | 'isCompleted'>;

type Props = {
  todo: Todo[];
  onSave?: (value: FormValue) => void;
}

export const TodoListComponent = (props: Props) => {
  const { todo, onSave } = props;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValue>();

  const onSubmit = useCallback((value: FormValue) => {
    onSave?.(value);
    reset();
  }, [onSave, reset]);

  return (
    <Wrapper >
      <section>
        <form onSubmit={handleSubmit(onSubmit)} aria-label="新規タスク追加フォーム">
          <SectionTitle>新規作成</SectionTitle>
          <Table>
            <Thead>
              <tr>
                <Th>
                  <label htmlFor="title">タイトル</label>
                </Th>
                <Th>
                  <label htmlFor="description">説明</label>
                </Th>
                <Th>
                  <label htmlFor="dueDate">期限</label>
                </Th>
              </tr>
            </Thead>
            <tbody>
              <tr>
                <Td>
                  <TextInput id="title" type="text" {...register("title", { required: 'titleは必須です' })} placeholder="買い物に行く" />
                </Td>
                <Td>
                  <TextInput id="description" type="text" {...register("description")} placeholder="牛乳、卵を購入する" />
                </Td>
                <Td>
                  <TextInput id="dueDate" type="date" {...register("dueDate", { required: 'dueDateは必須です' })} />
                </Td>
              </tr>
            </tbody>
          </Table>
          <ErrorMessage errors={errors} name="title" render={({ message }) => <p style={ERROR_MESSAGE_STYLE}>{message}</p>} />
          <ErrorMessage errors={errors} name="dueDate" render={({ message }) => <p style={ERROR_MESSAGE_STYLE}>{message}</p>} />
          <FormSubmitWrapper >
            <TaskAddButton type="submit">タスクを追加</TaskAddButton>
          </FormSubmitWrapper>
        </form>
      </section>

      <section>
        <SectionTitle>一覧</SectionTitle>
        <Table>
          <Thead>
            <tr>
              <Th>ID</Th>
              <Th>タイトル</Th>
              <Th>説明</Th>
              <Th>期限</Th>
              <Th>完了状況</Th>
            </tr>
          </Thead>
          <tbody>
            {
              todo.map((t) => (
                <tr key={t.id}>
                  <Td>{t.id}</Td>
                  <Td>{t.title}</Td>
                  <Td>{t.description}</Td>
                  <Td>{t.dueDate}</Td>
                  <Td>{t.isCompleted ? '完了' : '未完了'}</Td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </section>
    </Wrapper>
  )
}
