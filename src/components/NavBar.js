import styles from "./NavBar.module.css"

function NavBar(){
    return(
        <>
        <nav className={styles.navigation}>
        <h1>Alexmrqr</h1>

        <ul className={styles.menuLinks}>
            <li><a href="#bio">Sobre mim </a></li>
            <li><a href="#work">Portfolio</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>

        <div><a target="_blank" href="https://www.linkedin.com/in/alexandre-marques-a7195724b/">Linkedin</a></div>

        </nav>
        </>
    )
};
export default NavBar;