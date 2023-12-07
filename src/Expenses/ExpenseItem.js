import React, {useState} from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    // const month =props.date.toLocalString('en-US', {month:'long'});
    // const day =props.date.toLocalString('en-US', {month:'2-digit'});
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
      setTitle("Udated");
      console.log(title);
    };

  return (
    <div className='expense-item'>

    <ExpenseDate date={props.date} />      
      <div className='expense-item_description'>
        <div id='title'>{title}</div>
        
      </div>
      <div className='expense-item_price'><span>$</span>{props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
