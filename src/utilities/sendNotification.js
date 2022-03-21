import axios from '../api/axios';

const sendNotification = async ({ title, email, message }) => {
  const response = await axios
    .post('/notification/add')
    .then((resposne) => resposne.data);

  console.log(response);
  if (response.title) {
    console.log('Notification send successfully');
  }
};

export default sendNotification;
