import styles from './MyInfo.module.scss';
import avatar from './../../assets/img/avatar.jpg';


const MyInfo = () => {

    return (<div className={styles.container}>
        <div className={styles.avatar}>
            <img src={avatar} alt='ava'/>
        </div>
        <div className={styles.info}>
            <p>Egor</p>
            <p>Gambit47@ya.ru</p>
        </div>
    </div>)
}

export default MyInfo