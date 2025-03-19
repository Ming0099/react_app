import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "김민곤",
        comment : "안녕하세요, 김민곤입니다.",
    },
    {
        name : "김민준",
        comment : "안녕하세요, 김민준입니다.",
    },
    {
        name : "김민석",
        comment : "안녕하세요, 김민석입니다.",
    },
];

function CommentList(props){
    return(
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment}/>
                    );
                })
            }
        </div>
    );
}

export default CommentList;