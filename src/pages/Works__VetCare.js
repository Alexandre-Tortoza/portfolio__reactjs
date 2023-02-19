
import {Link} from "react-router-dom"
import styles from "./pages.module.css"
import vetcare from "./../images/vetcare.jpg"

function Works__LoginPage (){
    return(
        <div className={styles.container}>
        <h3>VerCare</h3>
        <p>Projeto de uma landing page feita para uma clínica veterinária.</p> 
        <a className={styles.link} href="https://github.com/Alexandre-Tortoza/VetCare__2023">GitHub</a>
        <div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/bVAdTovyOKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <img src={vetcare}/>
        </div>
        <div><Link to="/"><span className={styles.bnt}>Voltar</span></Link></div>
        </div>




    )
}
export default Works__LoginPage;