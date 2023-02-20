
import loginPage from "./../images/loginPage.jpg"
import vetcare from "./../images/vetcare.jpg"
import {Link} from "react-router-dom"
import styles from "./WorksGroup.module.css"

function WorkGroup(){
    return(
        <>
        <div className={styles.works__group}>
            <Link to="/works/loginpage"><img  src={loginPage}/></Link>
            <Link to="/works/vetcare"><img src={vetcare}/></Link>

        </div>
        
        </>
    )
}   export default WorkGroup;


{/* <Link to="/Works/LoginPage"><img src={img}/></Link> */}
        