import React, { useEffect, useState } from 'react';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';

const UpvoteDownvote = ({ developmentProposalId, uId }) => {
  const [Upvotes, setUpvotes] = useState(0);
  const [Downvotes, setDownvotes] = useState(0);
  const [UpvoteAction, setUpvoteAction] = useState(null);
  const [DownVoteAction, setDownVoteAction] = useState(null);

  let data = { developmentProposalId, uId };

  useEffect(() => {
    axios.post('/upvote/all', data).then((response) => {
      if (response.data.success) {
        // set the number of upvotes for this development proposal
        setUpvotes(response.data.length);

        if (response.data.length === 0) {
          setUpvoteAction(null);
        }

        // change upvote action
        response.data.map((upvote) => {
          if (upvote.uId === uId) {
            setUpvoteAction('upvoted');
          } else {
            setUpvoteAction(null);
          }
        });
      } else {
        Swal.fire({
          title: 'Something went wrong',
          confirmButtonText: 'Try again',
        });
      }
    });

    axios.post('/downvote/all', data).then((response) => {
      if (response.data.success) {
        // set the number of downvotes for this development proposal
        setDownvotes(response.data.length);

        if (response.data.length === 0) {
          setDownVoteAction(null);
        }

        //if I already click this upvote button or not
        response.data.map((downvote) => {
          if (downvote.uId === uId) {
            setDownVoteAction('downvoted');
          } else {
            setDownVoteAction(null);
          }
        });
      } else {
        Swal.fire({
          title: 'Something went wrong',
          confirmButtonText: 'Try again',
        });
      }
    });
  }, [data, uId]);

  const onUpvote = () => {
    if (UpvoteAction === null) {
      axios.post('/upvote/add', data).then((response) => {
        if (response.data.success) {
          setUpvotes(Upvotes + 1);
          setUpvoteAction('upvoted');

          //If upvote button is already clicked
          if (DownVoteAction !== null) {
            setDownVoteAction(null);
            setDownvotes(Downvotes - 1);
          }
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    } else {
      axios.post('/upvote/remove', data).then((response) => {
        if (response.data.success) {
          setUpvotes(Upvotes - 1);
          setUpvoteAction(null);
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    }
  };

  const onDownvote = () => {
    if (DownVoteAction === null) {
      axios.post('/downvote/add', data).then((response) => {
        if (response.data.success) {
          setDownvotes(Downvotes + 1);
          setDownVoteAction('downvoted');

          // if upvote button is allready clicked
          if (UpvoteAction !== null) {
            setUpvoteAction(null);
            setUpvotes(Upvotes - 1);
          }
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    } else {
      axios.post('/downvote/remove', data).then((response) => {
        if (response.data.success) {
          setDownvotes(Downvotes - 1);
          setDownVoteAction(null);
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    }
  };

  return (
    <>
      {/* upvote and downvote buttons */}
      <div className="flex items-center justify-between">
        {/* upvote button */}
        <button
          className="btn py-2 bg-success flex items-center space-x-2"
          onClick={onUpvote}
        >
          <span>{Upvotes}</span> <BiUpvote size={30} />
        </button>

        {/* downvote button */}
        <button
          className="btn py-2 bg-danger flex items-center space-x-2"
          onClick={onDownvote}
        >
          <span>{Downvotes}</span> <BiDownvote size={30} />
        </button>
      </div>
    </>
  );
};

export default UpvoteDownvote;
