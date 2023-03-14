// import 所有需要的檔案
import React, {
  useEffect,
  useState,
  Fragment,
} from "react";
import PropTypes from 'prop-types';
import TodoInput from './TodoInput';
import CreateTodoButton from './CreateTodoButton';

// functional component本體
const CreaetTodo = (props) => {
  
  // 宣告state(state是一個component私人的儲存空間, 可以當成是angularjs的scope)
  const [inputText, setInputText] = useState('')

  // 定義任何你需要用到的func
  const updateInputText = (event) => {
    setInputText(event.target.value)
  }
  
  // 監聽器(func都在這執行)
  useEffect(() => {
    return () => {
      // componentWillUnmount
    }
  },[props.todos]);

  // component畫面
  return (
    <Fragment>
        <TodoInput inputText={inputText}
             updateInputText={(event)=>updateInputText(event)} /> 
        <CreateTodoButton inputText={inputText} addTodo={props.createTodo}/>
    </Fragment>
  );
}
// Props的型態和成員定義, 也就是來自引用這個component的父層傳進來的屬性 
// 長得像這樣: <CreateTodo createTodo={xxx} todos={ooo} ></CreateTodo>
// 下面這段就是要定義xxx ooo的型態, 是否必填, 有哪些?
CreaetTodo.propTypes = {
  createTodo: PropTypes.func,
  todos: PropTypes.array,
}
// 輸出component
export default CreaetTodo;