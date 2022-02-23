import jsPDF from 'jspdf';
import 'jspdf-autotable';
import React, { useEffect, useState } from 'react';
import RegistrationPdf from './src/Pages/Medical/Dashboard/partials/dashboardItem/VaccineRegistration/RegistrationPdf/RegistrationPdf';

const VaccineInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('./fakeVaccineRegistration.json')
      .then((res) => res.json())
      .then((data) => setInfo(data[0]));
  }, []);
  console.log(info);
  const generatePDF = (singleInfo) => {
    // initialize jsPDF
    // initialize jsPDF
    const doc = new jsPDF();

    // // define the columns we want and their titles

    const data = [
      singleInfo.id,
      singleInfo.name,
      singleInfo.fatherName,
      singleInfo.MotherName,
      singleInfo.birthDate,
      singleInfo.nidNo,
      singleInfo.place,
    ];

    const date = Date().split(' ');
    console.log(date);

    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    doc.text(20, 10, `YOUR INFORMATION:`);

    doc.text(20, 20, `Your ID: ${data[0]}`);

    doc.text(20, 30, `Name: ${data[1]}`);
    doc.text(20, 40, `Father's Name: ${data[2]}`);
    doc.text(20, 50, `Mother's Name: ${data[3]}`);
    doc.text(20, 60, `Birth date: ${data[4]}`);
    doc.text(20, 70, `Place: ${data[6]}`);

    // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`);
  };

  return (
    <div>
      <div className="  mt-20 p-3">
        <RegistrationPdf info={info} />
        <div className="mt-5 flex justify-center ">
          <button
            className="border-2 bg-primary text-white py-2 px-5"
            onClick={() => generatePDF(info)}
          >
            Generate pdf
          </button>
        </div>
      </div>
    </div>
  );
};

export default VaccineInfo;
