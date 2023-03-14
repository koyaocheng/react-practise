import React, {
  useEffect,
  useState,
  Fragment,
} from "react";
import PropTypes from 'prop-types';

const TodoInput = (props) => {

  useEffect(() => {
    return () => {
      // componentWillUnmount
    }
  },[props]);

      return (<input type="text" class="form-control"
                    placeholder="輸入新待辦事項..."
                    value={props.inputText}
                    onChange={props.updateInputText}/>)

}
TodoInput.propTypes = {
  inputText: PropTypes.string,
  updateInputText: PropTypes.func
}
export default TodoInput;