import Posts from "../../modules/Posts/Posts";
import styles from './PostsPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPost, getIsFetching, getPosts} from "../../modules/Posts/selectors/selectors";
import {asyncPostsActions} from "../../modules/Posts/store/actions";
import PostInfo from "../../modules/Posts/componets/PostInfo/PostInfo";
import {useLayoutEffect} from "react";
import Preloader from "../../UI/Preloader/Preloader";



const PostsPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state=>getPosts(state))
    const isFetching = useSelector(state=>getIsFetching(state))
    const currentPost = useSelector(state=>getCurrentPost(state))
    useLayoutEffect(()=> {
        dispatch(asyncPostsActions.asyncGetPosts())
    },[])

    if (currentPost !== null) {
        return <PostInfo/>
    }

    if (isFetching) {
        return <Preloader/>
    }

    return (<div className={styles.container}>
        {
            posts ?  <Posts/>: null
        }
    </div>)
}

export default PostsPage