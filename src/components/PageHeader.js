import NavBar from "./NavBar";
import styles from "./PagerHeader.module.css"
import photo from './../images/foto.png'
import {AiOutlineInstagram,AiOutlineGithub,AiOutlineYoutube} from 'react-icons/ai'


function PageHeader(){
    return(
        <header className={styles.header}>
        <NavBar/>
        <br/>
        <div className={styles.aboutMe}>

        <div className={styles.aboutMe__container}>

            <h2 className={styles.aboutMe__myName}>  

                <span className={styles.span}>Meu nome</span><br/>
                Alexandre Marques
            </h2>

        <p>Olá! Eu sou um desenvolvedor Front-end apaixonado por tecnologia e movido por desafios. Estou sempre buscando novas oportunidades para consolidar meus conhecimentos e contribuir para soluções que transformem a vida das pessoas. Meu objetivo é utilizar meus conhecimentos para criar experiências incríveis e inovadoras para os usuários, melhorando assim sua qualidade de vida. Estou animado para trabalhar em projetos desafiadores e fazer parte de uma equipe de sucesso!</p>

        <div className={styles.icons}>
        <a target="_blank" href="https://www.instagram.com/alexmrtr2001/" ><AiOutlineInstagram size={30} style={{ fill: '#F2C49B' }}/></a>
        <a target="_blank" href="https://github.com/Alexandre-Tortoza" ><AiOutlineGithub size={30} style={{ fill: '#F2C49B' }}/></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCHL4tI0MMd4uXfglWxh_4mg" ><AiOutlineYoutube size={30} style={{ fill: '#F2C49B' }}/></a>
        </div>
        </div>


        <div className={styles.aboutMe__image}>
            <img width='300' className={styles.img} src={photo}/>
            <div className={styles.block}/>
        </div>
        </div>
    
        </header>
    )
};
export default PageHeader;