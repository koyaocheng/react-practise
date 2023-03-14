import React, {
  useEffect,
  useState,
  Fragment,
} from "react";
import PropTypes from 'prop-types';
import './Todo.scss';

const Todo = (props) => {

  useEffect(() => {
    return () => {
      // componentWillUnmount
    }
  },[props.todo]);

  return (
    <div className="todo p-1">
        <h1>{props.todo}</h1>
    </div>
  );
}
Todo.propTypes = {
  todo: PropTypes.array,
}
export default Todo;
