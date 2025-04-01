import styles from "../screenStyles/HomeScreen.module.css";

const Experience = ()=> {
    return(
        <div className={styles.educationContainer}>
                <div className={styles.rowContainer}>
                    {/* logo + line*/}
                    <div className={styles.logoLine}>
                        <img width='50px' src="/images/TU-Berlin-Logo.svg.png" alt="TU Logo" />
                        {/* vertical line: */}
                        <div className={styles.verticalLine}></div>
                    </div>
                    
                    {/* TU */}
                    <div className={styles.informationContainer}>
                        {/* TU Dima Labs */}
                        <div >
                                {/* Company Name */}
                                <h4>Technische Universitet Berlin</h4>
                                {/* job type internship/fulltime/partime etc...*/}
                                <p>Internship</p>
                                {/* city * hybrid/ remote/ x*/}
                                <p>Berlin, Germany * Hybrid</p>
                        </div>
                        
                        {/* Team Lead */}
                        <div style={{marginBottom: '10px'}}>
                                <h4>Research Team Lead (UI)</h4>
                                <p style={{marginBottom: '10px'}}>January 2025 - Present * Ongoing</p>
                                <div style={{marginLeft: "14px"}}>
                                    <li>
                                        <p>Leading the development and design of the XDB-UI project</p>
                                    </li>
                                    <li>
                                        <p>Managing team workflows and prioritizing tasks</p>
                                    </li>
                                    <li>
                                        <p>Coordinating with cross-functional teams</p>
                                    </li>
                                </div>
                        </div>
                        {/* Research Assistant */}
                        <div>
                                <h4>Research Assistant (UI)</h4>
                                <p style={{marginBottom: '10px'}}>March 2024 - January 2025 * 11 mos</p>
                                <div style={{marginLeft: "14px"}}>
                                    <li>
                                        <p>Building the front end of a Cross-Database Query Processing System using React and
                                        TypeScript and MUI.</p>
                                    </li>
                                    <li>
                                        <p>Constructed a mock-back-end server to provide API endpoints and perform query calculations, 
                                            ensuring efficient data handling for front-end integration.</p>
                                    </li>
                                    <li>
                                        <p>Assisted the back end team with code reviews and actively participated in team meetings.</p>
                                    </li>
                                </div>
                        </div>
                    </div>
                </div>

                {/* Lacoste */}
                <div className={styles.rowContainer}>
                    {/* logo + line*/}
                    <div className={styles.logoLine}>
                        <img width='50px' src="/images/lacoste-logo.png" alt="Lacoste Logo" />
                        {/* vertical line: */}
                        <div className={styles.verticalLine}></div>
                    </div>
                    
                    {/* Lacoste */}
                    <div className={styles.informationContainer}>
                        <div >
                                <h4>Lacoste</h4>
                                <p>Part Time</p>
                                <p>Berlin, Germany</p>
                        </div>
                        
                        <div style={{marginBottom: '10px'}}>
                                <h4>Sales Assistant</h4>
                                <p style={{marginBottom: '10px'}}>March 2024 - January 2025 * 11 mos</p>
                                <div style={{marginLeft: "14px"}}>
                                    <li>
                                        <p>Focused on improving sales skills and customer relations</p>
                                    </li>
                                    <li>
                                        <p>Implemented Organizational designs to decrease employee onboarding time and increase other KPIs</p>
                                    </li>
                                    <li>
                                        <p>Increased sales by improving customer interaction</p>
                                    </li>
                                    <li>
                                        <p>Created a visually welcoming store with innovative designs</p>
                                    </li>
                                    <li>
                                        <p>Educated employees to provide customers with 
                                        inspiring information about clothes or general Lacoste history</p>
                                    </li>
                                </div>
                        </div>
                    </div>

                
                </div>
                {/* Pret A Manger */}
                <div className={styles.rowContainer}>
                    <div className={styles.logoLine}>
                        <img width='50px' src="/images/pret-a-manger-logo.png" alt="Pret A Manger Logo" />
                        <div className={styles.verticalLine}></div>
                    </div>
                    
                    <div className={styles.informationContainer}>
                        <div >
                                <h4>Pret A Manger</h4>
                                <p>Part Time</p>
                                <p>Berlin, Germany</p>
                        </div>
                        
                        <div style={{marginBottom: '10px'}}>
                                <h4>Shift Leader</h4>
                                <p style={{marginBottom: '10px'}}>Oct 2023 - March 2024 * 6 mos</p>
                                <div style={{marginLeft: "14px"}}>
                                    <li>
                                        <p>Managed team schedules, reduced onboarding time by 20%, demonstrating leadership and organizational skills</p>
                                    </li>
                                    <li>
                                        <p>Created a cohesive and efficient working environment for the team, resulting in improved performance and morale</p>
                                    </li>
                                    
                                </div>
                        </div>
                    </div>
                    </div>
        </div>
    )
}
export default Experience