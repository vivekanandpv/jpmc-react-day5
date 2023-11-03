import React from 'react';
import { httpService } from '../http-service';

const Playground = (props) => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    httpService
      .get('todos')
      .then((r) => setTodos((_) => r.data))
      .catch((e) => console.log('error', e.message));
  }, []);

  return (
    <>
      <h4>Todo List</h4>
      <table className='table table-bordered table-sm'>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th className='text-center'>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.userId}</td>
              <td>{t.title}</td>
              <td className='text-center'>
                {t.completed ? (
                  <div class='badge bg-success fw-normal w-75 p-2'>Done</div>
                ) : (
                  <div class='badge bg-secondary fw-normal w-75 p-2'>
                    Pending
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Playground;
