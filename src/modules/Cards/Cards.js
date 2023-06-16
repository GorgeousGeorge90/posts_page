import styles from './Cards.module.scss';
import {useSelector} from "react-redux";
import CardItem from "./components/CardItem/CardItem";
import {getIsLoading, getWorks} from "./selectors/selectors";
import Preloader from "../../UI/Preloader/Preloader";


const Cards = () => {
    const works = useSelector(getWorks)
    const isLoading = useSelector(getIsLoading)

    if (isLoading) {
        return <Preloader/>
    }

    return (<div className={styles.container}>
        <ul>
            {
                works.map(work =><CardItem key={work.id}
                                                {...work}
                />)
            }
        </ul>
        </div>)
}

export default Cards