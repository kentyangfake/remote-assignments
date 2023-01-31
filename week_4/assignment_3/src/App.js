import React, { useState } from 'react';
import styled from 'styled-components';

//components
import Navbar from './component/Navbar.js'
import Content from './component/Content.js'

const Banner = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  background-color: lightsteelblue;
  height: 200px;
  font-size: 2rem;
`
const Welcomebanner = () => {
  const [text, setText] = useState('Welcome Message')

  return(
    <Banner onClick={ ()=> setText("Have a Good Time!") }><h2>{ text }</h2></Banner>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Welcomebanner />
      <Content />
    </div>
  );
}

export default App;
