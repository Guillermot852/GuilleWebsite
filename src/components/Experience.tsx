import styles from "../screenStyles/HomeScreen.module.css";

const Experience = ()=> {
    return(
        <div className={styles.educationContainer}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {/* logo + line*/}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                        <img width='50px' src="/images/TU-Berlin-Logo.svg.png" alt="TU Logo" />
                        {/* vertical line: */}
                        <div style={{ width: "2px", backgroundColor: "#ACACAC", height: "100%",}}></div>
                    </div>
                    
                    {/* information */}
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '8px', gap: '10px'}} >
                        {/* Company/general info */}
                        <div >
                                {/* Company Name */}
                                <h4 style={{margin: 0}}>Technische Universitet Berlin</h4>
                                {/* job type internship/fulltime/partime etc...*/}
                                <p style={{margin: 0}}>Internship</p>
                                {/* city * hybrid/ remote/ x*/}
                                <p style={{margin: 0}}>Berlin, Germany * Hybrid</p>
                        </div>

                        {/* Position information */}
                        <div>
                                <h4 style={{margin: 0}}>Research Team Lead (UI)</h4>
                                <p style={{margin: 0, marginBottom: '10px'}}>January 2025 - Present * 3 mos</p>
                                <div style={{marginLeft: "14px"}}>
                                    <li>
                                        <p style={{margin: 0}}>Leading the development and design of the XDB-UI project</p>
                                    </li>
                                    <li>
                                        <p style={{margin: 0}}>Managing team workflows and prioritizing tasks</p>
                                    </li>
                                    <li>
                                        <p style={{margin: 0}}>Coordinating with cross-functional teams</p>
                                    </li>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Experience