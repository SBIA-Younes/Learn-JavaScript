const Welcome = () => {

  function bonjour () {
    console.log("Bonjour")
  }

  const bonsoir = (param) => {
    console.log(param);
  }
  return (
    <div>
      <button onClick={bonjour}>Invoquer une fonction</button>
      <button onClick={() =>  bonsoir('bonsoir')}>Invoquer une fonction avec arg "Bonsoir"</button>
      <button onClick={()=> console.log("Bonne nuit")}>Clg sur le bouton</button>
    </div>
  )
}

export default Welcome