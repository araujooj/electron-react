import React, {
  useState, useCallback, FormEvent, useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Container, TodoList, Title, Form,
} from './styles';

interface Todo {
  id: string;
  title: string;
}

const Main: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storagedItems = localStorage.getItem('@Todo:list');

    if (storagedItems) {
      return JSON.parse(storagedItems);
    }

    return [];
  });

  const [newTodo, setNewTodo] = useState('');

  const handleNewTodo = useCallback((todo: string) => {
    setNewTodo(todo);
  }, []);

  const handleSetTodos = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();

      const todo = {
        id: uuidv4(),
        title: newTodo,
      };

      setNewTodo('');
      setTodos([...todos, todo]);
    },
    [newTodo, todos],
  );

  useEffect(() => {
    localStorage.setItem('@Todo:list', JSON.stringify(todos));
  }, [todos]);

  return (
    <Container>
      <Title> Cadastre um Todo </Title>
      <Form onSubmit={(e) => handleSetTodos(e)}>
        <input
          value={newTodo}
          placeholder="Exemplo: Fazer as compras..."
          onChange={({ target }) => handleNewTodo(target.value)}
        />
        <button type="submit"> Enviar Todo</button>
      </Form>
      <TodoList>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </TodoList>
    </Container>
  );
};

export default Main;
