import { useContext } from "react"
import {UserContext, ColorContext} from "./MyContext"


function ContentData() {

  // return (
  //   <UserContext.Consumer>
  //   {
  //     user => {
  //       return (
  //         <ColorContext.Consumer>
  //         {
  //           color => {
  //             return (
  //               <div style={{color:color}}>
  //               <ul>
  //                 <li>Nom: {user.name}</li>
  //                 <li>Age: {user.age} </li>
  //               </ul>
  //             </div> 
  //               )
  //           }
  //         }
  //         </ColorContext.Consumer>
  //       )
  //     }
  //   }
  //   </UserContext.Consumer>
  // )

  const user = useContext(UserContext);
  const color = useContext(ColorContext);

  return (
    <div style={{color:color}}>
      <ul>
        <li>Nom: {user.name}</li>
        <li>Age: {user.age} </li>
      </ul>
    </div> 
  )
}

export default ContentData