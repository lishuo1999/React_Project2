import React from "react";
import Component from "./component";
const comments = [
  {
    name: "사용자1",
    comment: "안녕하세요, 사용자1입니다."
  },
  {
    name: "사용자2",
    comment: "안녕하세요, 사용자2입니다."
  }  
];
function Component_list(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Component name={comment.name} comment={comment.comment}/>
                );
            })}
            
        </div>

    );
}

export default Component_list;