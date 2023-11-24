import { Component } from "react";
import styled from 'styled-components';

const Title  = styled.h1`
  color:red;
  font-size:80px
`;

const Button = styled.button`
  background: black;
  color: #ffffff;
  padding: 7px 9px;
`;



class Form extends Component {

  render() {
   

    return (
    <div>
       <Title >Commentaire</Title>
      <button >Valider</button>
      <Button>Valider 2</Button>
    </div>
    )
}}

export default Form;