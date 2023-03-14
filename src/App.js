// Core
import React, {
  useEffect,
  useState,
  Fragment,
} from "react";
import Title from './components/Title';
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const App = () => {

  const [todos, setTodos] = useState(['買牛奶','繳電話費','去銀行'])

  const createTodo = (newtodo) => {
    setTodos([...todos, newtodo])
  }

  useEffect(() => {
    return () => {
      // componentWillUnmount
    }
  },[]);

  return(
    <Fragment>
      <Title todos={todos}/>
      <CreateTodo todos={todos} createTodo={createTodo}/>
      <TodoList todos={todos}/>
    </Fragment>
  );
}
export default App;
