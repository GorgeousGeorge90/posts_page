import styles from './AboutContent.module.scss';


const AboutContent = () => {

    return (<div className={styles.container}>
        <h3>About me</h3>
        <article>
            <p>
                <i>
                    Greetings! My name is Egor! I am Junior Frontend Developer from Moscow!
                </i>
            </p>
            <p>
                <i>
                    I don't have much experience, but I want to get it and improve my skills!
                    Here some examples of my projects:
                </i>
            </p>
        </article>
    </div>)
}

export default AboutContent