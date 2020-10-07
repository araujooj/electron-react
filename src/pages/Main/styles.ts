import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  flex-direction: column;
`;

export const TodoList = styled.ul``;

export const Form = styled.form`
  margin-top: 40px;
  width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border-right: 0px;
    border-radius: 5px 0 0 5px;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 60px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.5s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Card = styled.div``;
