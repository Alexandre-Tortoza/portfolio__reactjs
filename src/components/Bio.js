import styles from "./Bio.module.css"
import {AiOutlineHtml5} from "react-icons/ai"
import {DiCss3, DiJavascript1, DiReact,DiMsqlServer} from "react-icons/di"
import {FaNodeJs} from "react-icons/fa"

function Bio(){
    return(
    <div className={styles.bioAndSkills}>
        <div className={styles.bio}>
        <h2 id="bio" className={styles.bio__tittle}>
            Bio
        </h2>
        <p>Desde os meus nove anos, sou apaixonado por computadores. Com o apoio dos meus pais, comecei a me fascinar com o funcionamento de tudo aquilo. Foi somente em 2020, com o início da pandemia, que decidi aprender coisas novas e foi aí que o meu interesse pela programação surgiu. De imediato, soube que era o caminho que queria seguir na minha carreira. Em 2022, comecei a faculdade e desde então tenho me dedicado a aprimorar meus conhecimentos e habilidades em programação.</p>
        
        </div>
        <div className={styles.skills}>
            <h2 className={styles.bio__tittle}>Skills</h2>
            <h3 className={styles.skills__tittle}>Principais</h3>
            <ul className={styles.main__skills}>
                <li><AiOutlineHtml5 size={30} style={{ fill: '#4A1B8C' }}/>Html</li>
                <li><DiCss3 size={30} style={{ fill: '#4A1B8C' }}/>Css</li>
                <li><DiJavascript1 size={30} style={{ fill: '#4A1B8C' }}/>JavaScript</li>
                <li><DiReact size={30} style={{ fill: '#4A1B8C' }}/>ReactJS</li>
            </ul>
            <br/>
            <h3 className={styles.skills__tittle}>Estudando</h3>
            <ul className={styles.main__skills}>
                <li><DiMsqlServer size={30} style={{ fill: '#4A1B8C' }}/>SQL server</li>
                <li><span className={styles.C}>C</span>C#</li>
                <li><FaNodeJs size={30} style={{ fill: '#4A1B8C' }}/>NodeJS</li>
            </ul>


        </div>
    </div>
    )
}

export default Bio;