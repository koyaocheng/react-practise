import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = (props) => {

    useEffect(() => {
      return () => {
        // componentWillUnmount
      }
    },[props.todos]);

    return (
      <div className='p-3'>
          {props.todos.map((todo,index)=>{
            return <Todo key={index} todo={todo} />;
          })}
      </div>
    );
}
TodoList.propTypes = {
  todos: PropTypes.array,
}
export default TodoList;
