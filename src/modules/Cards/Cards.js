import styles from './Cards.module.scss';
import {useSelector} from "react-redux";
import CardItem from "./components/CardItem/CardItem";
import {getIsloading, getWorks} from "./selectors/selectors";
import Preloader from "../../UI/Preloader/Preloader";


const Cards = () => {
    const works = useSelector(state => getWorks(state))
    const isLoading = useSelector(state => getIsloading(state))

    if (isLoading) {
        return <Preloader/>
    }

    return (<div className={styles.container}>
        <ul>
            {
                works.map(work =><li><CardItem key={work.id}
                                                {...work}
                /></li>)
            }
        </ul>
        </div>)
}

export default Cards