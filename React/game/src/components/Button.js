import {Alert} from 'react-bootstrap';
function Button (){
  const bootstrapClass = ['primary', 'secondary', 'success', 'danger', 'warning','info', 'light', 'dark']

  return (
    <div className="container">
      <h1>Hellow World</h1>

      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}

      {bootstrapClass.map((item, index) => (
        <button className={`btn-${item}`} key={index}>
          {item}
        </button>
      ))}
    </div>
    
  )
}

export default Button;