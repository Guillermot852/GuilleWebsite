import styles from "../screenStyles/HomeScreen.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Education = ()=> {
    return(
        <div className={styles.educationContainer}>
            <p>Education</p>
            {/* Highschools */}
                <Accordion sx={{
                    backgroundColor: "#f2eedd",
                    marginBottom: "10px",
                }}>
                 <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{backgroundColor: "white", borderRadius: "8px"}}>
                 <p>Highschool: CIC + IDEA</p>
                        {/* sports, math MAP tests, */}
                    </AccordionSummary>
                    <AccordionDetails  style={{backgroundColor: "#bbbbbb"}}>
                        <p>sports, math map tests, etc..</p>
                    </AccordionDetails>
                </Accordion>
            {/* University */}
                <Accordion 
                sx={{
                    backgroundColor: "#f2eedd",
                    marginBottom: "10px",
                }}>
                 <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{backgroundColor: "white", borderRadius: "8px"}}>
                        <p>University: UE</p>
                        {/* display grades */}
                        {/* discribe projcts with links to porjects */}
                    </AccordionSummary>
                    <AccordionDetails  style={{backgroundColor: "#D9D9D9"}}>
                        <Accordion 
                        defaultExpanded 
                        sx={{
                            backgroundColor: "#f2eedd", 
                        }}>
                         <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{backgroundColor: "#eeeeee", borderRadius: "8px"}}>
                            Grades: 
                            </AccordionSummary>
                            <AccordionDetails  style={{backgroundColor: "#D9D9D9"}}>
                                <div className={styles.universityContainer}>
                                            <div>
                                                <img src='${process.env.PUBLIC_URL}/images/Programming.png' alt="Programming Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/Comp-Architecture.png" alt="Computer Architecture Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/IT-Platforms.png" alt="IT Platforms Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/IT-Security.png" alt="It Security Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/Software-Engineering.png" alt="Software Engineering 1 & 2 Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/IT-Agile-Dev.png" alt="IT Agile Development Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/QQ-Methods.png" alt="Quantitative and Qualitative Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/Cloud-Comp.png" alt="Cloud Computing & Distributed Systems Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/Math-Stats.png" alt="Mathematics & Statistics Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/AI.png" alt="Artifitial Intelligence Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/Front-End.png" alt="Front End Programming Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/GUI-Web-Design.png" alt="GUI Design and Web Optimization Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/Corporate-Management.png" alt="Corporate Management Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/Management-Basics.png" alt="Management Basics Grade" />
                                            </div>
                                            <div>
                                                <img src="/images/Digital-Media-Comms.png" alt="Digital Media & Communication Grade" />
                                            </div>
                                </div>
                            </AccordionDetails>
                        </Accordion >
                        {/* Projects */}
                        <Accordion 
                        sx={{
                            backgroundColor: "#f2eedd", 
                        }}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{backgroundColor: "#eeeeee", borderRadius: "8px"}}>
                             Projects: </AccordionSummary>
                                <AccordionDetails  style={{backgroundColor: "#D9D9D9"}}>
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
                                </AccordionDetails>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                <div>
                    <Accordion sx={{
                            backgroundColor: "#f2eedd", 
                            marginBottom: "10px",
                            borderRadius: "20px",
                        }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{backgroundColor: "white", borderRadius: "8px"}}>
                            <p>Online Courses</p>
                            {/* udemy */}
                            {/* harvard course */}
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor: "#D9D9D9"}}>
                            <div className={styles.onlineCoursesContainer} >
                            <div>
                                <img src="/images/python.png" alt="Python Course" />
                                <p>The complete Python Developer;</p>
                                <p>Andri Neagoie</p>
                            </div>
                            <div>
                                <img src="/images/jsHTMLcss.png" alt="Front End Course" />
                                <p>Javascript, HTML and CSS;</p>
                                <p>OAK Academy, OAK Academy Team</p>
                            </div>
                            <div>
                                <img src="/images/Vuejs3.png" alt="Vue js Course" />
                                <p>Vue js 3;</p>
                                <p>Ignacio bluuweb</p>
                            </div>
                            <div>
                                <img src="/images/Flutter&Dart.png" alt="Flutter & Dart Course" />
                                <p>Flutter & Dart;</p>
                                <p>Academind by Maximilian Schwarzmüller</p>
                            </div>
                        </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
        </div>
    )
}
export default Education