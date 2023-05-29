import Posts from "../../modules/Posts/Posts";
import styles from './PostsPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../modules/Posts/selectors/selectors";
import {asyncPostsActions} from "../../modules/Posts/store/actions";



const PostsPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state=>getPosts(state))

    return (<div className={styles.container}>
        <button onClick={()=>dispatch(asyncPostsActions.asyncGetPosts())}>GetPosts</button>
        {
            posts ?  <Posts/>: null
        }
    </div>)
}

export default PostsPage