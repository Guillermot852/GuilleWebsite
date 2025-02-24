import Details from "../components/Details";
import Education from "../components/Education";
import styles from "../screenStyles/HomeScreen.module.css";

const HomeScreen = ()=> {
    return(
        <div className={styles.mainContainer}>
            <Details/>
            <Education/>
        </div>
    )
}
export default HomeScreen