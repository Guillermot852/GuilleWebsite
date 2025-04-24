import styles from "../screenStyles/HomeScreen.module.css";

const Details = ()=> {
    return(
        <div>
            {/* Title */}
            <div className={styles.titleContainer}>
                <h1>
                    Guillermo Trigo
                </h1>
            </div>
            {/* Description of contents of website */}
            <div className={styles.descriptionContainer}>
                <p>
                Welcome to my personal website! I’m Guillermo Trigo, a Software Engineering student with a passion for 
                building innovative solutions. Here, you’ll find details about my education, including high school and 
                university courses, grades, and online certifications.
                 {/* Explore my skills in programming and software 
                development, personal projects like the TU Berlin XDB UI, and other exciting work. You can also view my 
                professional achievements and contact details to connect or collaborate. */}
                </p>
            </div>
            {/* personal summary  text + image*/}
            <div className={styles.summary_imgContainer}>
                <p>
                I am Guillermo Trigo, a Software Engineering student with a diverse international background and a 
                strong passion for technology and innovation. With hands-on experience in software development and UI 
                design, including my role in the TU Berlin XDB project, I thrive on creating efficient and user-focused 
                solutions. My academic journey, complemented by online courses and personal projects, has equipped me with 
                skills in programming, frontend development, and collaborative problem-solving. I am driven by a commitment 
                to continuous learning and a desire to contribute meaningfully to impactful projects.
                </p>
                <img src={`${process.env.PUBLIC_URL}/images/guillermoTrigoImg.jpeg`} alt="Photo of Guillermo Trigo" />
                </div>
            {/* goal */}
            <div className={styles.goalContainer}>
                <p>
                    My goal in life is, to lead an excellent example, to innovate, and to provide for my community. 
                </p>
            </div>
        </div>
    )
}
export default Details