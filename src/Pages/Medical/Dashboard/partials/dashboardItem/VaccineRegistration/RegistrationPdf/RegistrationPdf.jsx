import React from 'react';
const RegistrationPdf = (props) => {
  const { name, email, fatherName, motherName, date, nid, mobile, address } =
    props.info;
  return (
    <div className="flex justify-center items-center my-5 ">
      {props.length === 0 ? (
        'You currently have no tickets created'
      ) : (
        <div className="w-2/3   flex-col justify-start items-center">
          <h3>Name : user1</h3>
          <p>Email: user1@gmail.com</p>
          <p> Father's Name: user2</p>
          <p> Mother's Name: user3</p>
          <p>Birth Date: 01-02-1998 </p>
          <p>NID: 123456789</p>
          <p>Contact: 0171111111</p>
          <p> Address: abc</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationPdf;
