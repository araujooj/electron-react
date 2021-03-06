import React, {
  useState, useCallback, FormEvent, useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Container, TodoList, Title, Form, Card,
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

  const [error, setError] = useState('');

  const handleNewTodo = useCallback((todo: string) => {
    setError('');
    setNewTodo(todo);
  }, []);

  const handleSetTodos = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();

      if (!newTodo) {
        setError('A tarefa não pode ser vazia');
        return;
      }

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
      <Form onSubmit={(e) => handleSetTodos(e)} hasError={!!error}>
        <input
          value={newTodo}
          placeholder="Exemplo: Fazer as compras..."
          onChange={({ target }) => handleNewTodo(target.value)}
        />
        <button type="submit"> Enviar Todo</button>
      </Form>
      {error && <Title>{error}</Title>}
      <TodoList>
        {todos.map((todo: Todo) => (
          <Card>
            <span key={todo.id}>{todo.title}</span>
          </Card>
        ))}
      </TodoList>
    </Container>
  );
};

export default Main;
