import styles from './Posts.module.scss';
import {useSelector} from "react-redux";
import {getPosts} from "./selectors/selectors";
import PostItem from "./componets/PostItem/PostItem";


const Posts = ({currentPage, pagePortion}) => {
    const posts = useSelector(getPosts)
    let lastIndex = currentPage * pagePortion
    let firstIndex = lastIndex - pagePortion

    return (<div className={styles.container}>
        <ul>
            {
                posts.slice(firstIndex,lastIndex).map(post => <PostItem key={post.id}
                                                {...post}
                />)
            }
        </ul>
    </div>)
}

export default Posts