import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../redux/ducks/post";
import Post from "./Post";

const Posts = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const posts = useSelector((state) => state.post.posts);

    useEffect(() => {
        dispatch(getPost());
    }, [dispatch]);

    return (
        <div>
            <h1>Posts</h1>
            <div className="postContainer">
                {Boolean(posts?.length) && (
                    posts.map((post: any) => <Post key={post.body} title={post.title} body={post.body}/>)
                )}
            </div>
        </div>

    );
};

export default Posts;