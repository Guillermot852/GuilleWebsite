import styles from "../screenStyles/HomeScreen.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const Education = ()=> {
    const [showMore, setShowMore] = useState(false);

    return(
        <div className={styles.hardSkillsComponent}>

        <div className={styles.hardSkillsContainer}>
            <p>Hard Skills</p>
            
            {/* accordions of subsections of hard Skills */}
            <div className={styles.gridContainer}>
                {/* Backend Languages */}
                <Accordion sx={{
                        backgroundColor: "#f2eedd",
                        width: "270px"
                    }}>

                    <AccordionSummary expandIcon={<ExpandMoreIcon />} 
                    style={{backgroundColor: "white", borderRadius: "8px"}}>
                    <p>BackEnd Languages</p>
                        </AccordionSummary>
                        <AccordionDetails  style={{backgroundColor: "#bbbbbb"}}>
                            <p>Python</p>
                            <p>Java</p>
                            <p>C++</p>
                            {!showMore ? (
                                <button
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        // color: "black",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setShowMore(true)}
                                >
                                    ...
                                </button>
                            ) : (
                                <>
                                    <p>Kotlin</p>
                                    <p>C#</p>
                                </>
                            )}
                        </AccordionDetails>
                </Accordion>
                  
                {/* Frontend Languages */}
                <Accordion sx={{
                        backgroundColor: "#f2eedd",
                        width: "270px"
                    }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} 
                    style={{backgroundColor: "white", borderRadius: "8px"}}>
                    <p>Frontend Languages</p>
                        </AccordionSummary>
                        <AccordionDetails  style={{backgroundColor: "#bbbbbb"}}>
                            <p>TypeScript</p>
                            <p>JavaScript</p>
                            {!showMore ? (
                                <button
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        // color: "black",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setShowMore(true)}
                                >
                                    ...
                                </button>
                            ) : (
                                <>
                                    <p>HTML</p>
                                    <p>CSs</p>
                                </>
                            )}
                        </AccordionDetails>
                </Accordion>

                {/* Development  Models/ Methods */}
                <Accordion sx={{
                        backgroundColor: "#f2eedd",
                        width: "270px"
                    }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} 
                    style={{backgroundColor: "white", borderRadius: "8px"}}>
                    <p>Development Methods/ Models</p>
                        </AccordionSummary>
                        <AccordionDetails  style={{backgroundColor: "#bbbbbb"}}>
                            <p>Agile Development</p>
                            <p>Scrum Methodologies</p>
                            {!showMore ? (
                                <button
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        // color: "black",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setShowMore(true)}
                                >
                                    ...
                                </button>
                            ) : (
                                <>
                                    <p>Waterfall Method</p>
                                    <p>Quantitative and Qualitative Analysis</p>
                                    <p>CI / CD</p>
                                </>
                            )}
                        </AccordionDetails>
                </Accordion>

                {/* BackEnd tools/ other*/}
                <Accordion sx={{
                        backgroundColor: "#f2eedd",
                        width: "270px"
                    }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} 
                    style={{backgroundColor: "white", borderRadius: "8px"}}>
                    <p>Backend/ Data, Tools/ Other</p>
                        </AccordionSummary>
                        <AccordionDetails  style={{backgroundColor: "#bbbbbb"}}>
                            <p>Go Lang</p>
                            <p>Docker</p>
                            <p>AWS</p>
                            <p>SQL</p>
                            <p>Node.js</p>
                            {!showMore ? (
                                <button
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        // color: "black",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setShowMore(true)}
                                >
                                    ...
                                </button>
                            ) : (
                                <>
                                    <p>LinuxOS</p>
                                    <p>MySQL</p>
                                    <p>NoSQL</p>
                                </>
                            )}
                        </AccordionDetails>
                </Accordion>

                {/* FrontEnd tools/ other*/}
                <Accordion sx={{
                        backgroundColor: "#f2eedd",
                        width: "270px"
                    }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} 
                    style={{backgroundColor: "white", borderRadius: "8px"}}>
                    <p>FrontEnd/ Design Tools/ Other</p>
                        </AccordionSummary>
                        <AccordionDetails  style={{backgroundColor: "#bbbbbb"}}>
                            <p>Figma</p>
                            <p>React</p>
                            <p>Jest</p>
                            <p>Next.js</p>
                            {!showMore ? (
                                <button
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        // color: "black",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setShowMore(true)}
                                >
                                    ...
                                </button>
                            ) : (
                                <>
                                    <p>MUI</p>
                                </>
                            )}
                        </AccordionDetails>
                </Accordion>

                {/* Modern Practices/ Tools*/}
                <Accordion sx={{
                        backgroundColor: "#f2eedd",
                        width: "270px"
                    }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} 
                    style={{backgroundColor: "white", borderRadius: "8px"}}>
                    <p>Modern Practices/ Tools</p>
                        </AccordionSummary>
                        <AccordionDetails  style={{backgroundColor: "#bbbbbb"}}>
                            <p>OOP</p>
                            <p>Pair Programming</p>
                            <p>Git Platform</p>
                            <p>Jira/ Kubernetes Environment</p>
                        </AccordionDetails>
                </Accordion>
            </div>

        </div>
        </div>

    )
}
export default Education