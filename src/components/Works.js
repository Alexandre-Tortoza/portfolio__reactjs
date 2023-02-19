import vetcare from "../images/vetcare.jpg"
import loginpage from "./../images/loginPage.jpg"
import styles from "./Works.module.css"
import WorkGroup from "./WorkGroup";
import Works__VetCare from "../pages/Works__VetCare";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
    } from 'react-router-dom'


function Works() {
    return (
        <>
        <h2 id="work" className={styles.works__tittle}>Alguns Projetos:</h2>
        <div className={styles.mob__groupsON}>
                <a><img src={vetcare}/>a</a>
                <a><img src={loginpage}/>a</a> </div>
        <div className={styles.mob__groupsOFF}>
    <Router>
        <Routes>
            <Route path="/" element={<WorkGroup/>} />
            {/* <Route path="/works/loginpage" element={<Works__LoginPage/>} /> */}
            <Route path="/works/vetcare" element={<Works__VetCare/>} />

        </Routes>
    </Router>
    </div>
        </>
    );
}

export default Works;
