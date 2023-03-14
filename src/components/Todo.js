import React, {
  useEffect,
  useState,
  Fragment,
} from "react";
import PropTypes from 'prop-types';

const Todo = (props) => {

  useEffect(() => {
    return () => {
      // componentWillUnmount
    }
  },[props.todo]);

  return <h3>{props.todo}</h3>;
}
Todo.propTypes = {
  todo: PropTypes.array,
}
export default Todo;
