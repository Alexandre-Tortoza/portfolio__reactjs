
import styles from "./Works.module.css"
import safeMailIMG from "./../images/teste1.png"
import WorkGroup from "./WorkGroup";
import Works__LoginPage from "../pages/Works__LoginPage";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
    } from 'react-router-dom'


function Works() {
    return (
        <>
        <h2 className={styles.works__tittle}>Alguns Projetos:</h2>
    <Router>
        <Routes>
            <Route path="/" element={<WorkGroup/>} />
            <Route path="/Works/LoginPage" element={<Works__LoginPage/>} />
        </Routes>
    </Router>
        </>
    );
}

export default Works;
