import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div  key={index}>
          <Comment data={comment} />
          <div className=" pl-5 border border-l-black ml-5">
            {/* this is recursion, n level nesting for comments */}
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
