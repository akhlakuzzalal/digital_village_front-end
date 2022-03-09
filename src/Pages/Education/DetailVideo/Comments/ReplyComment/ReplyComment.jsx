import React, { useEffect, useState } from 'react';
import SingleComment from '../SingleComment/Singlecomment';

function ReplyComment({
  commentLists,
  parentCommentId,
  updateComment,
  postId,
}) {
  const [ChildCommentNumber, setChildCommentNumber] = useState(0);
  const [OpenReplyComments, setOpenReplyComments] = useState(false);
  useEffect(() => {
    let commentNumber = 0;
    commentLists &&
      commentLists.map((comment) => {
        if (comment.responseTo === parentCommentId) {
          commentNumber++;
        }
      });
    setChildCommentNumber(commentNumber);
  }, [commentLists, parentCommentId]);

  let renderReplyComment = (parentCommentId) =>
    commentLists &&
    commentLists.map((comment, index) => (
      <React.Fragment>
        {comment.responseTo === parentCommentId && (
          <div style={{ width: '80%', marginLeft: '40px' }}>
            <SingleComment
              comment={comment}
              postId={postId}
              updateComment={updateComment}
            />
            <ReplyComment
              CommentLists={commentLists}
              parentCommentId={comment._id}
              postId={postId}
              updateComment={updateComment}
            />
          </div>
        )}
      </React.Fragment>
    ));

  const handleOpenReplyComments = () => {
    setOpenReplyComments(!OpenReplyComments);
  };

  return (
    <div>
      {ChildCommentNumber > 0 && (
        <p onClick={handleOpenReplyComments} className="cursor-pointer">
          View {ChildCommentNumber} more comment(s)
        </p>
      )}

      {OpenReplyComments && commentLists && renderReplyComment(parentCommentId)}
    </div>
  );
}

export default ReplyComment;
