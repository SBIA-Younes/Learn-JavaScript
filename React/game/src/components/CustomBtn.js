// import styled from 'styled-components'


const Btn = ({children, styled, onClick})=> {

  const styleBtn = {
  backgroundColor: 'gray',
  border: 'none',
  color: '#fff',
  fontSize: '19px',
  padding: '15px 30px',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: '7px',
  display: 'block',
  margin: '5px auto'
  };
  return (
    <button style={{...styleBtn, ...styled}} onClick={onClick} >{children}</button>
  )

}

export default Btn;