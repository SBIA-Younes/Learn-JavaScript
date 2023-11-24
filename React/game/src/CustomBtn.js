// import styled from 'styled-components'


const CustomBtn = ({children, backgroundColor, borderRadius})=> {

  const custombackground = backgroundColor ? backgroundColor :'gray';
  const customborderRadius = borderRadius ? borderRadius : '7px';

  const styleBtn = {
  backgroundColor: custombackground,
  border: 'none',
  color: '#fff',
  fontSize: '19px',
  padding: '15px 65px',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: customborderRadius,
  display: 'block',
  margin: '5px auto'
  };
  return (
    <button style={styleBtn}>{children}</button>
  )

}

export default CustomBtn;