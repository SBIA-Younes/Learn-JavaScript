
const Tote = ({name, leState,  reponseTotoProps}) => {
  console.log(leState.didabled);
  
  return (
    <div>
      <h1>{name}</h1>
      <button 
      disabled={leState.didabled}
      onClick={()=> reponseTotoProps('Non, je veux regarder la tele')}>Reponse</button>
      <p>{leState.messageToto}</p>
      
    </div>
  );
}

export default Tote