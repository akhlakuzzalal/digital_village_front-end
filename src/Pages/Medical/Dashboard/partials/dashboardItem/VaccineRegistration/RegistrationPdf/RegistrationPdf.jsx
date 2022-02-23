import React from 'react';
const RegistrationPdf = (props) => {
  const { id, name, fatherName, MotherName, birthDate, place } = props.info;
  return (
    <div className="flex justify-center items-center">
      {props.length === 0 ? (
        'You currently have no tickets created'
      ) : (
        <div className="w-2/3   flex-col justify-start items-center">
          <h3>Name : {name}</h3>
          <h6> Father's Name:{fatherName}</h6>
          <h6> Mother's Name: {MotherName}</h6>
          <p>Birth Date: {birthDate} </p>
          <small> Place: {place} </small>
        </div>
      )}
    </div>
  );
};

export default RegistrationPdf;
