import React from "react";

interface PostProps {
    title: string;
    body: string;
}

const Post: React.FC<PostProps> = ({title, body}) => {
    return (
        <div className="post">
            <h3>{title}</h3>
            <h4 style={{fontWeight: "normal"}}>{body}</h4>
        </div>
    );
};

export default Post;