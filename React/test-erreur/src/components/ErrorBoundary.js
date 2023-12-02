import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {    
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.    
    return { hasError: true };  }
  // componentDidCatch(error, errorInfo) {    // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.    
  //   logErrorToMyService(error, errorInfo);  }
  render() {
    if (this.state.hasError) {   
       return(
       <div className={`col bg-danger`}>
      <p>Oups nous avons un probleme :-)</p>
      <br />
    </div>  )
    }
    return this.props.children;
  }
}

export default ErrorBoundary