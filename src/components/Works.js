
import styles from "./Works.module.css"
import WorkGroup from "./WorkGroup";
import Works__VetCare from "../pages/Works__VetCare";
import Works__LoginPage from './../pages/works__LoginPage'
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
    <Router>
        <Routes>
            <Route path="/" element={<WorkGroup/>} />
            <Route path="/works/loginpage" element={<Works__LoginPage/>} />
            <Route path="/works/vetcare" element={<Works__VetCare/>} />

        </Routes>
    </Router>
        </>
    );
}

export default Works;
