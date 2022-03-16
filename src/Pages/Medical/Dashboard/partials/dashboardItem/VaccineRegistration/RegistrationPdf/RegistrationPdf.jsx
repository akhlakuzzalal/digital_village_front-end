import React from 'react';

const RegistrationPdf = (props) => {
  const {
    name,
    email,
    fatherName,
    motherName,
    date,
    nid,
    mobile,
    address,
    center,
  } = props?.info;
  console.log(props.info);
  return (
    <div className="flex justify-center items-center my-5 ">
      {props.length === 0 ? (
        'You currently have no tickets created'
      ) : (
        <div className="w-2/3   flex-col justify-start items-center">
          <h3>Name : {name}</h3>
          <p>Email: {email}</p>
          <p> Father's Name: {fatherName}</p>
          <p> Mother's Name: {motherName}</p>
          <p>Birth Date: {date}</p>
          <p>NID: {nid}</p>
          <p>Contact: {mobile}</p>
          <p> Address: {address}</p>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <h3 className="text-blue-900 text-center my-2">Center Information</h3>
          <p>Center Name: {center}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationPdf;
