import styles from './PostInfo.module.scss';
import gamer  from './../../assets/img/gamer.png';
import users from './../../assets/img/users.png';
import {useDispatch, useSelector} from "react-redux";
import {getComments, getCurrentPost} from "../../selectors/selectors";
import {Button, ButtonGroup} from "react-bootstrap";
import {useState} from "react";
import {postsActions} from "../../store/actions";
import Posts from "../../Posts";


const PostInfo = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => getComments(state))
    const {title, body} = useSelector(state=> getCurrentPost(state))
    const [show,setShow] = useState(false)

    const onClick = () => {
        dispatch(dispatch(postsActions.getClearPost()))
    }

    if (!comments) {
        return <Posts/>
    }

    return (<div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.info_content}>
                <img src={gamer}
                     alt='gamer'
                />
                <p><b>{title}</b></p>
                <p>{body}</p>
                <ButtonGroup className='mb-2'
                             size='sm'>
                    <Button onClick={() => setShow(prev => !prev)}>Comments</Button>
                    <Button onClick={onClick}>Back</Button>
                </ButtonGroup>
            </div>
            {
                show ? <div className={styles.comments}>
                    <ul>
                        {
                            comments.map(comment => <li key={comment.id}>
                                <img src={users} alt='user'/>
                                <div>
                                    <p>{comment.body}</p>
                                    <p><b>{comment.email}</b></p>
                                </div>
                            </li>)
                        }
                    </ul>
                </div> : null
            }
        </div>
    </div>)
}

export default PostInfo