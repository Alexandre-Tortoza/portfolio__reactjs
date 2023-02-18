
import loginPage from "./../images/loginPage.jpg"
import vetcare from "./../images/vetcare.jpg"
import {Link} from "react-router-dom"
import styles from "./WorksGroup.module.css"

function WorkGroup(){
    return(
        <>
        <div className={styles.works__group}>
            <Link to="/Works/LoginPage"><img src={loginPage}/></Link>
            
            <img src={vetcare}/>

        </div>
        
        </>
    )
}   export default WorkGroup;


{/* <Link to="/Works/LoginPage"><img src={img}/></Link> */}
        