import { Component } from "react";
import Wrapper from "./Wrapper";



const Cars = ({color, marque, proprietaire}) =>{
    
    // const colorInfo = color ? <p>Couleur : {color} </p> : <p>Couleur : orange </p>; // option 1
    
        

        return marque && (
          <Wrapper >
            {proprietaire ? <p>proprietaire : {proprietaire} </p> : <p>proprietaire : SBIA </p>} {/* Option 1 */}
      
            {/* color ? <p>Couleur : {color} </p> : <p>Couleur : orange </p>  */} {/* Option 2 */} 

            <p>Couleur : {color ? color : 'Orange'} </p>{/* Option 3 */}
            
            <p>Marque : {marque} </p>

          </Wrapper> 
        );

}

export default Cars;