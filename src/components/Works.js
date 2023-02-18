
import styles from "./Works.module.css"
import safeMailIMG from "./../images/teste1.png"
function Works() {
    return (
        <>
        <h2 className={styles.works__tittle}>Alguns Projetos:</h2>
        <div className={styles.works__group}>

            <img width="300" src={safeMailIMG}/>
            <img width="300" src={safeMailIMG}/>
            <img width="300" src={safeMailIMG}/>

        </div>
        </>
    );
}

export default Works;
