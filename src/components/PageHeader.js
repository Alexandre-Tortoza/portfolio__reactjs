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
        <p>Sou apaixonado por computadores desde os meus nove anos, meus pais sempre me apoiaram, então desde cedo eu me fascinava como tudo aquilo funcionava, mas o meu interesse por programação só foi surgir em 2020, com o início da pandemia decidi aprender coisas novas, e de imediato eu sabia que era o que queria para a minha carreira, em 2022 eu comecei a faculdade.</p>
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