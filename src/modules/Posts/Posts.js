import styles from './Posts.module.scss';
import {useSelector} from "react-redux";
import {getPosts} from "./selectors/selectors";
import PostItem from "./componets/PostItem/PostItem";


const Posts = () => {
    const posts = useSelector(state=> getPosts(state))

    return (<div className={styles.container}>
        <ul>
            {
                posts.map(post => <PostItem key={post.id}
                                                {...post}
                />)
            }
        </ul>
    </div>)
}

export default Posts