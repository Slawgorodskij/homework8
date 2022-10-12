import React, {useEffect} from 'react';
import Performance from "../components/Performance";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/UI/Loader/Loader";
import {getPosts} from "../store/posts/postsReducer";

const title = 'Статьи';
const Posts = () => {
    const posts = useSelector(state => state.posts);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const repeat = () => {
        dispatch(getPosts())
    }

    if (loading) {
        return (
            <div>
                <Performance title={title}/>
                <div className="main container">
                    <Loader/>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <Performance title={title}/>
                <div className="main container">
                    <div>
                        <p>Что-то пошло не так.</p>
                        <p>Стоит попробовать <button onClick={repeat}>нажать</button>для повтора</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Performance title={title}/>
            <div className="main container">
                {posts.map(post => {
                    return (<div key={post.id}>{post.title}</div>)
                })}
            </div>
        </div>
    );
};

export default Posts;