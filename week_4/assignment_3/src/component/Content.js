import React, { useState } from 'react';
import styled from 'styled-components';

const Container =styled.div`
  text-align:center;
  margin: 1em;
  font-size: 16px;
  box-sizing: border-box;
  @media screen and (min-width: 1200px){
    max-width: 1200px;
    margin: auto;
  }
`

const Column = styled.div`
  padding: 20px;
  margin: 10px;
	background: slategray;
  height: 200px;
  font-size: 1rem;
  @media screen and (orientation:landscape),
    screen and (min-width: 500px) and (max-width:799px),
    screen and (min-width: 800px) and (max-width:1199px),
    screen and (min-width: 1200px){
      flex: 1 42.18%;
    }
`
const Columns = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:100%;
  @media screen and (orientation:landscape),
    screen and (min-width: 500px) and (max-width:799px),
    screen and (min-width: 800px) and (max-width:1199px),
    screen and (min-width: 1200px){
      display:flex;
      flex-direction: row;
      justify-content: center;
    }
`
const Button = styled.button`
  border: none;
  background-color: rgb(223, 239, 255);
  font-size: 1rem;
  padding:20px;
`

const AddColumns = (props) => {
  if(props.Add){
    return(
      <Columns>
        <Column>Content Box 1</Column>
        <Column>Content Box 2</Column>
        <Column>Content Box 3</Column>
        <Column>Content Box 4</Column>
      </Columns>
    );
  } else {
    return('');
  }
}

const Content = () => {
  const [Add, setAddColumns] = useState(false);
  
  return(
    <Container>
        <h3>Section title</h3>
        <Columns>
          <Column>Content Box 1</Column>
          <Column>Content Box 2</Column>
          <Column>Content Box 3</Column>
          <Column>Content Box 4</Column>
        </Columns>
        <Button onClick={() => setAddColumns(true)}>Call to Action</Button>
        <AddColumns Add={Add}/>
    </Container>
  );
  }


export default Content;