import styles from "../screenStyles/HomeScreen.module.css";
import python  from "../images/python.png"
import jsHTMLcss  from "../images/jsHTMLcss.png"
import Vuejs3  from "../images/Vuejs3.png"
import Flutter_Dart  from "../images/Flutter&Dart.png"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Typography } from "@mui/material";

const Education = ()=> {
    return(
        <div className={styles.educationContainer}>
            <div>
                <h1>Education</h1>
            </div>
            <div>
                <Accordion>
                    <AccordionSummary>
                        <Typography>Summary 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>some randome text HomeScreen</p>
                        <Accordion>
                    <AccordionSummary>
                        <Typography>Summary 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>some randome text HomeScreen</p>
                    </AccordionDetails>
                </Accordion>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                {/* dropdown */}
                <div>
                    <p>Highschool: CIC + IDEA</p>
                    {/* sports, math MAP tests, */}
                </div>
                <div >
                    <p>University: UE</p>
                    {/* display grades */}
                    {/* discribe projcts with links to porjects */}
                    <div>
                    
                    </div>
                    <div>
                        <p>Grades: </p>
                        <div className={styles.universityContainer}>
                            <div>
                                <p>Levels of Programming - 81.2%</p>
                            </div>
                            <div>
                                <p>Information Technology - 93.5%</p>
                            </div>
                            <div>
                                <p>Development Strategies - 85%</p>
                            </div>
                            <div>
                                <p>Management - 87%</p>
                            </div>
                            <div>
                                <p>Data Analytics - 83%</p>
                            </div>
                            <div>
                                <p>Front End Development - 93%</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Projects: </p>
                        <div className={styles.universityContainer}>
                            <div>
                                <p>Hybrid Weather App</p>
                            </div>
                            <div>
                                <p>Emotion Detection Deep Learning Model</p>
                            </div>
                            <div>
                                <p>Iris Plant Classification</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <p>Online Course</p>
                    {/* udemy */}
                    {/* harvard course */}
                    <div className={styles.onlineCoursesContainer}>
                        <div>
                            <img src={python} alt="Photo of Guillermo Trigo" />
                            <p>The complete Python Developer;</p>
                            <p>Andri Neagoie</p>
                        </div>
                        <div>
                            <img src={jsHTMLcss} alt="Photo of Guillermo Trigo" />
                            <p>Javascript, HTML and CSS;</p>
                            <p>OAK Academy, OAK Academy Team</p>
                        </div>
                        <div>
                            <img src={Vuejs3} alt="Photo of Guillermo Trigo" />
                            <p>Vue js 3;</p>
                            <p>Ignacio bluuweb</p>
                        </div>
                        <div>
                            <img src={Flutter_Dart} alt="Photo of Guillermo Trigo" />
                            <p>Flutter & Dart;</p>
                            <p>Academind by Maximilian Schwarzmüller</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education