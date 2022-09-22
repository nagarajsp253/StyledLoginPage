import { PinDropSharp } from '@material-ui/icons';
import React from 'react'
import '../../../../App.css';

const CourseGoalItem = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id);
      };

  return (
    <>
        <li className='goal-item' onClick={deleteHandler}>
            {props.children}
        </li>
    </>
  );
};

export default CourseGoalItem
