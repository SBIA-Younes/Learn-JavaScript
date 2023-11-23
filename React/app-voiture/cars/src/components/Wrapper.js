import Cars from "./Cars";
import Mycars from "./Mycars";

function Wrapper(props){
  // console.log(props);
  return (
    <div  style={{ backgroundColor: 'pink', width: '400px', padding: '10px',margin: '10px auto', borderRadius: '5px' }}>
  
      {props.children}
    </div>
  );
}

export default Wrapper;