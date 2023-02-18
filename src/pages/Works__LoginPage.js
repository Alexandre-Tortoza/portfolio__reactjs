
import {Link} from "react-router-dom"
import img from "./../images/foto.png"
import styles from "./pages.module.css"


function Works__LoginPage (){
    return(
        <div className={styles.container}>

        <h1>Login Pagr</h1>
        <p>Este projeto é página de login, simulando um back-end, com algumas funcionalidades como: travar o botão de envio em caso de campos vazio, senha menor que 8 dígitos, e apos uma resposta do servidor e exigir uma senha correta.
        </p>
        <div><iframe width="532" height="300" src="https://www.youtube.com/embed/bVAdTovyOKE" ></iframe></div>

        <div><Link to="/"><span className={styles.bnt}>Voltar</span></Link></div>
        </div>
    )
}
export default Works__LoginPage;