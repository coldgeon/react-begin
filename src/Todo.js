import { useState } from 'react';
import { Link } from 'react-router-dom';

function TodoList() {
  const [todo, todoSet] = useState('');
  const [addList, addListSet] = useState([]);

  const onChange = (event) => {
    // console.log(todo);
    todoSet(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    addListSet((currentArray) => [todo, ...currentArray]);
    todoSet('');
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={onSubmit}>
        <h3>Total Todo is :{addList.length}</h3>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="write your to do here"
        />
        <button>add to do</button>
        <hr />
        <ul>
          {addList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default TodoList;
