import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import {
  addDownvote,
  addUpvote,
} from '../../../redux/slices/Developmet/DevelopmentSlice';

const useDevelopment = () => {
  const proposals = useSelector((state) => state.development.proposals);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  //   handle upvote for a User
  const handleUpvote = (proposal) => {
    user.email
      ? dispatch(addUpvote({ id: proposal._id, email: user.email }))
      : swal({
          position: 'top-end',
          icon: 'error',
          title: 'Your Have to log in first',
        });
  };
  //   handle downvote for a User
  const handleDownvote = (proposal) => {
    user.email
      ? dispatch(addDownvote({ id: proposal._id, email: user.email }))
      : swal({
          position: 'top-end',
          icon: 'error',
          title: 'Your Have to log in first',
        });
  };
  return {
    handleDownvote,
    handleUpvote,
  };
};

export default useDevelopment;
