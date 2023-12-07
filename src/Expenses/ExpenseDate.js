import './ExpenseItem.css';
import './ExpanseDate.css';

function ExpenseDate(props) {
    const year =props.date.getFullYear();
    return (
        <div className='expense-date'>
      <h2 id='date'>{year}</h2>
      </div>
    )
}

export default ExpenseDate;