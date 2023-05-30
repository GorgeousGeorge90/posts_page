import styles from './Header.module.scss';
import Switcher from '../Switcher/Switcher';
import DropdownElement from "./Dropdown/Dropdown";
import {ReactComponent as Logo} from './../../assets/img/logo.svg';
import {useEffect} from "react";


const Header = () => {

    return (<div className={styles.container}>
        <header>
            <div className={styles.logo}>
                <Logo height='70px'
                      width='70px'
                />
            </div>
            <div className={styles.title}>
                <h4>Database for posts</h4>
                <p><i>It's simple SPA to get info!</i></p>
            </div>
            <nav>
                <Switcher/>
                <div className={styles.drop}>
                    <DropdownElement/>
                </div>
            </nav>
        </header>
    </div>)
}

export default Header