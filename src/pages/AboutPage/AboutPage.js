import styles from './AboutPage.module.scss';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {asyncAboutActions} from "../../modules/Cards/store/actions";
import Cards from "../../modules/Cards/Cards";
import {Button} from "react-bootstrap";
import AboutContent from "../../components/AboutContent/AboutContent";


const AboutPage = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(asyncAboutActions.getAsyncWorks())
    },[])

    const [open, setOpen] = useState(false)

    return (<div className={styles.container}>
        <div className={styles.main_content}>
            <AboutContent/>
            <div>
                <Button variant='primary'
                        onClick={()=>setOpen(!open)}>
                        GetWorks
                </Button>
                {
                    open ? <Cards/>: null
                }
            </div>
        </div>
    </div>)
}

export default AboutPage