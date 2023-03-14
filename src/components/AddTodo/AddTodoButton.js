import React, {
  useEffect,
  useState,
  Fragment,
} from "react";
import PropTypes from 'prop-types';

const AddTodoButton = (props) => {

  useEffect(() => {
    return () => {
      // componentWillUnmount
    }
  },[props]);

  return (
    <button type="button" className="btn btn-primary" onClick={()=>props.addTodo(props.inputText)}>新增</button>
  );

}
AddTodoButton.propTypes = {
  inputText: PropTypes.string,
  addTodo: PropTypes.func
}
export default AddTodoButton;
