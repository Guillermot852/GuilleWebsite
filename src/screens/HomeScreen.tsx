import Details from "../components/Details";
import Education from "../components/Education";
import styles from "../screenStyles/HomeScreen.module.css";
import HardSkills from "../components/HardSkills"
const HomeScreen = ()=> {
    return(
        <div className={styles.mainContainer}>
            <Details/>
            <HardSkills/>
            <Education/>
        </div>
    )
}
export default HomeScreen