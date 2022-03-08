import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { deleteAProduct } from '../../../../../redux/slices/eMarket/productsSlice';

const useMarketAdminDashboard = () => {
  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        dispatch(deleteAProduct(id));
        swal('Confirmed!', {
          icon: 'success',
        });
      }
    });
  };
  const editProduct = (id) => {};
  return {
    deleteProduct,
    editProduct,
  };
};

export default useMarketAdminDashboard;
