import {Spinner} from 'react-bootstrap';
import styles from './Preloader.module.scss';


const Preloader = () => {

    return (<div className={styles.loader}>
        <Spinner animation="border"/>
    </div>)
}

export default Preloader