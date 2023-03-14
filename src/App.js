// Core
import React, {
  useEffect,
  useState,
  Fragment,
} from "react";
import Title from './components/Title/Title';
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {

  const [todos, setTodos] = useState(['買牛奶','繳電話費','去銀行'])

  const addTodo = (newtodo) => {
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
      <AddTodo todos={todos} addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </Fragment>
  );
}
export default App;
