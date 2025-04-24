import styles from "../screenStyles/HomeScreen.module.css";

const Experience = ()=> {
    return(
        <div className={styles.educationContainer}>
                <div className={styles.rowContainer}>
                    {/* logo + line*/}
                    <div className={styles.logoLine}>
                        <img width='50px' src={`${process.env.PUBLIC_URL}/images/BIFOLD-Logo-removebg-preview.png`} alt="TU Logo" />
                        {/* vertical line: */}
                        <div className={styles.verticalLine}></div>
                    </div>
                    
                    {/* BIFOLD */}
                    <div className={styles.informationContainer}>
                        {/* BIFOLD */}
                        <div >
                                {/* Company Name */}
                                <h4>BIFOLD</h4>
                                {/* job type internship/fulltime/partime etc...*/}
                                <p>Internship</p>
                                {/* city * hybrid/ remote/ x*/}
                                <p>Berlin, Germany * Hybrid</p>
                        </div>
                        
                        {/* Team Lead */}
                        <div style={{marginBottom: '10px'}}>
                                <h4>Research Assistant Team Lead (UI)</h4>
                                <p style={{marginBottom: '10px'}}>January 2025 - Present * Ongoing</p>
                                <div style={{marginLeft: "14px"}}>
                                    <li>
                                        Leading the development and design of the XDB-UI project
                                    </li>
                                    <li>
                                        Managing team workflows and prioritizing tasks
                                    </li>
                                    <li>
                                        Coordinating with cross-functional teams
                                    </li>
                                </div>
                        </div>
                        {/* Research Assistant */}
                        <div>
                                <h4>Research Assistant (UI)</h4>
                                <p style={{marginBottom: '10px'}}>March 2024 - January 2025 * 11 mos</p>
                                <div style={{marginLeft: "14px"}}>
                                    <li>
                                        Building the front end of a Cross-Database Query Processing System using React and
                                        TypeScript and MUI.
                                    </li>
                                    <li>
                                        Constructed a mock-back-end server to provide API endpoints and perform query calculations, 
                                        ensuring efficient data handling for front-end integration.
                                    </li>
                                    <li>
                                        Assisted the back end team with code reviews and actively participated in team meetings.
                                    </li>
                                </div>
                        </div>
                    </div>
                </div>

                {/* Lacoste */}
                <div className={styles.rowContainer}>
                    {/* logo + line*/}
                    <div className={styles.logoLine}>
                        <img width='50px' src={`${process.env.PUBLIC_URL}/images/lacoste-logo.png`} alt="Lacoste Logo" />
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
                                <p style={{marginBottom: '10px'}}>March 2024 - Present * Ongoing</p>
                                <div style={{marginLeft: "14px"}}>
                                    <li>
                                        Focused on improving sales skills and customer relations
                                    </li>
                                    <li>
                                        Implemented Organizational designs to decrease employee onboarding time and increase other KPIs
                                    </li>
                                    <li>
                                        Increased sales by improving customer interaction
                                    </li>
                                    <li>
                                        Created a visually welcoming store with innovative designs
                                    </li>
                                    <li>
                                        Educated employees to provide customers with 
                                        inspiring information about clothes or general Lacoste history
                                    </li>
                                </div>
                        </div>
                    </div>

                
                </div>
                {/* Pret A Manger */}
                <div className={styles.rowContainer}>
                    <div className={styles.logoLine}>
                        <img width='50px' src={`${process.env.PUBLIC_URL}/images/pret-a-manger-logo.png`} alt="Pret A Manger Logo" />
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
                                        Managed team schedules, reduced onboarding time by 20%, demonstrating leadership and organizational skills
                                    </li>
                                    <li>
                                        Created a cohesive and efficient working environment for the team, resulting in improved performance and morale
                                    </li>
                                    
                                </div>
                        </div>
                    </div>
                    </div>
        </div>
    )
}
export default Experience