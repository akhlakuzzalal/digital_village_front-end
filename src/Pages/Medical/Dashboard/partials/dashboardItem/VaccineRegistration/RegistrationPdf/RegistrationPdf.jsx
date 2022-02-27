import React from 'react';
const RegistrationPdf = (props) => {
  const { name, fatherName, MotherName, birthDate, nidNo, place } = props.info;
  return (
    <div className="flex justify-center items-center my-5 ">
      {props.length === 0 ? (
        'You currently have no tickets created'
      ) : (
        <div className="w-2/3   flex-col justify-start items-center">
          <h3>Name : {name}</h3>
          <p> Father's Name: {fatherName}</p>
          <p> Mother's Name: {MotherName}</p>
          <p>Birth Date: {birthDate} </p>
          <p>NID: {nidNo}</p>
          <small> Place: {place} </small>
        </div>
      )}
    </div>
  );
};

export default RegistrationPdf;
