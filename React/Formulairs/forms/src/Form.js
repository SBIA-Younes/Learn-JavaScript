import { Component } from "react";
import './myCss.css'
import MyHead from "./myHeaderOne";
import styles from './myCss.module.css';



class Form extends Component {

  render() {
    const myClass = this.props.head ? 'blue' : 'red';

    return (
    <div>
      <MyHead/>
      <p className={styles.green}>je suis rouge ou bleu</p>
      <button>Valider</button>
    </div>
    )
}}

export default Form;