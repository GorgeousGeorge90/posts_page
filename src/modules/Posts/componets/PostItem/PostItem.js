import styles from './PostItem.module.scss';
import gamer from './../../assets/img/gamer.png';
import {useDispatch} from "react-redux";
import {asyncPostsActions} from "../../store/actions";


const PostItem = ({userId, id, title, body}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(asyncPostsActions.asyncGetComments(userId))
    }

    return (<li className={styles.post_item}>
        <div className={styles.avatar}>
            <img src={gamer}
                 alt="ava"
                 onClick={onClick}
            />
        </div>
        <div className={styles.info}>
            <p><b>{title}</b></p>
            <p>{body}</p>
        </div>
    </li>)
}

export default PostItem