import styled, { css } from 'styled-components'

const Container = styled.div`
  margin-top: 10vh;
  border-radius: 10px;
  background-color: #ffb3ba;
  display: flex;
  flex-direction: column;
  width: 80vw;
  justify-content: flex-start;
  text-align: center;
`

const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Karla&display=swap');
  font-family: 'Karla', sans-serif;
  font-size: 36px;
  color: #f5f5dc;
`

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 80vw;
`
const ListItem = styled.li`
  @import url('https://fonts.googleapis.com/css?family=Karla&display=swap');
  list-style: none;
  text-decoration: none;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f5f5dc;

  .pointer {
    cursor: pointer;
    margin-right: 50px;
    margin-left: -40px;
  }

  .todo_item {
    margin-left: 10px;
    cursor: pointer;
    font-size: 24px;
    font-family: 'Karla', sans-serif;
    text-align: left;
    animation: all 1s;
  }

  ${props =>
    props.line &&
    css`
      text-decoration: line-through;
    `};
`

export { Container, Title, TodosContainer, ListItem }
