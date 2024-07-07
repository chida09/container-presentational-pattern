import { TodoListContainer } from "./todo-list/containers";
import "./page.css";

export default function Home() {
  return (
    <main className="wrapper">
      <TodoListContainer/>
    </main>
  );
}
