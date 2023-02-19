
import {Link} from "react-router-dom"
import styles from "./pages.module.css"


function Works__LoginPage (){
    return(
        <div className={styles.container}>
        <h3>Login Page</h3>
        <p>Este projeto é uma simulação de uma página de Login, também simula um back-end para as resposta do servidor, o login não é liberado a menos que a senha tenha 8 dígitos ou mais, além de um e-mail, apos o envio os dados são tratados, caso a senha esteja certa é liberado o acesso.</p> 
        <a className={styles.link} href="https://github.com/Alexandre-Tortoza/login__page">GitHub</a>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bVAdTovyOKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div><Link to="/"><span className={styles.bnt}>Voltar</span></Link></div>
        </div>




    )
}
export default Works__LoginPage;