import styles from "./NavBar.module.css"

function NavBar(){
    return(
        <>
        <nav className={styles.navigation}>
        <h1>Alexmrqr</h1>

        <ul>
            <li><a>Sobre mim </a></li>
            <li><a>Portfolio</a></li>
            <li><a>Contato</a></li>
        </ul>

        <div>Linkedin</div>

        </nav>
        </>
    )
};
export default NavBar;