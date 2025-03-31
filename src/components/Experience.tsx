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
                    
                    {/* information */}
                    <div className={styles.informationContainer}>
                        {/* Company/general info */}
                        <div >
                                {/* Company Name */}
                                <h4>Technische Universitet Berlin</h4>
                                {/* job type internship/fulltime/partime etc...*/}
                                <p>Internship</p>
                                {/* city * hybrid/ remote/ x*/}
                                <p>Berlin, Germany * Hybrid</p>
                        </div>

                        {/* Position information */}
                        <div>
                                <h4>Research Team Lead (UI)</h4>
                                <p style={{marginBottom: '10px'}}>January 2025 - Present * 3 mos</p>
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
                    </div>
                </div>
        </div>
    )
}
export default Experience