import swal from 'sweetalert';

const handleCart = () => {
  const handleAlert = () => {
    swal({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleAddCart = (id, name, img, price) => {
    const cartItem = {
      id: id,
      name: name,
      img: img,
      price: price,
      quantity: 1,
      quantityBasePrice: price,
    };
    return cartItem;
  };

  return {
    handleAlert,
    handleAddCart,
  };
};

export default handleCart;
