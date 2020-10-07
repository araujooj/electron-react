import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  flex-direction: column;
`;

export const TodoList = styled.div`
  display: flex;
  width: 800px;
  margin-top: 2%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  width: 800px;
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
    ${(props) => props.hasError
      && css`
        border: 2px solid rgb(255, 85, 85);
        border-right: 0px;
      `}
  }
  button {
    width: 210px;
    height: 60px;
    background: #7c48ad;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.5s;
    &:hover {
      background: ${shade(0.2, '#7C48AD')};
    }
    ${(props) => props.hasError
      && css`
        border: 2px solid rgb(255, 85, 85);
        border-right: 0px;
      `}
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 2%;
`;

export const Card = styled.div`
  width: 150px;
  margin-left: 2%;
  margin-top: 2%;
  height: 150px;
  border: 3px solid;
  border-image-source: linear-gradient(45deg, rgb(189, 147, 249), rgb(255, 85, 85));
  border-image-slice: 1;
  padding: 48px;
`;
