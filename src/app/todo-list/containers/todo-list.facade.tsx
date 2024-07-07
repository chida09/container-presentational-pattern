import { useCallback } from "react";

type Todo = {
  title: string;
  description: string;
  dueDate: string;
}

export const useTodoListFacade = () => {
  // TODO: 一時的に固定値を渡しているため、BEの実装が終わったらAPI通信する
  const todo = [
    {
      id: 1,
      title: "買い物に行く",
      description: "牛乳、卵を購入する",
      dueDate: "2024-07-08",
      isCompleted: false
    },
    {
      id: 2,
      title: "レポートを書く",
      description: "プロジェクトの進捗レポートを作成する",
      dueDate: "2024-07-10",
      isCompleted: false
    }
  ];

  const handleSave = useCallback((value: Todo) => {
    // TODO: 一時的に固定値を表示しているだけなので、BEの実装が終わったらAPI通信する
    window.alert(`
        title: ${value.title}
        description: ${value.description}
        dueDate: ${value.dueDate}
      `)
  }, [])

  return {
    todo,
    handleSave
  } as const
}
