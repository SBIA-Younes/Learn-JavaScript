import { Fragment } from "react";
const Car = ({color,  marque, year}) => {

  const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;
  

  if (marque) {
      return (
          <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
              <p>Marque: { marque }</p>
              <p>Age: {year}</p>
              {colorInfo}
          </div>
      )
  }

  // return null // ce return est Facultatif
}

export default Car
