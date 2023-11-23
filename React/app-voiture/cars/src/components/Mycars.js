import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

  state = {
    voiture: [
      { couleur: 'rouge', marque: 'Audi', year: 2022 },
      { couleur: 'bleu', marque: 'BMW', year: 1994 },
      { couleur: 'vert', marque: 'Mercedes', year: 2023 },
    ],
    titre: 'Mon Catalogue Voitures'
  }
  addTenYears = () => {
    const updatedState = this.state.voiture.map((param) => {
      return param.year -= 10;
      
    })

    
    this.setState({ updatedState })
  }

  getAge = year => {
    const now = new Date().getFullYear();
    const age = now - year;
    
    // ans, an
    let frenchYearStr = '';
    if (age === 1 ) {
      frenchYearStr = ' an';
    } else if (age > 1) {
      frenchYearStr = ' ans';

    }
    return age + frenchYearStr

  }

  render() {
    const year = new Date().getFullYear() // renvoie de la date renseignée
    return (
        <div>
            <h1>{this.state.titre}</h1>

            <button onClick={this.addTenYears}> + 10 ans</button>

            {/* <Car color={this.state.voiture[0].couleur} year={year - this.state.voiture[0].year + ' ans'} > {this.state.voiture[0].marque}</Car>

            <Car color={this.state.voiture[1].couleur} year={year - this.state.voiture[1].year + ' ans'}> {this.state.voiture[1].marque} </Car>

            <Car color={this.state.voiture[2].couleur} year={year - this.state.voiture[2].year + ' ans'}> {this.state.voiture[2].marque} </Car> */}

          {
            this.state.voiture.map( ({marque, couleur, year}, index) => {
              
              // const years = year - voiture.year > 1 ? ' ans' : ' an';
              
              return <Car key={index} marque={marque} color={couleur} year={this.getAge(year)}/>
            })
          }

        </div>
        
    )
  }
}

export default Mycars