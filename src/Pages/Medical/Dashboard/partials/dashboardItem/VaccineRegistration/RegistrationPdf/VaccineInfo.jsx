import jsPDF from 'jspdf';
import 'jspdf-autotable';
import React, { useEffect, useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import axios from '../../../../../../../api/axios';
import useMediaQuery from '../../../../../../../hooks/useMediaQuery';
import animationData from '../../../../../../../lotties/vaccine.json';
import RegistrationPdf from './RegistrationPdf';

const VaccineInfo = () => {
  const user = useSelector((state) => state.user.user);
  const email = user.email;
  const [info, setInfo] = useState([]);
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    axios.get(`/vaccine/findInfo?email=${email}`).then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  }, []);

  const generatePDF = (singleInfo) => {
    // initialize jsPDF

    const doc = new jsPDF();

    // // define the columns we want and their titles

    const data = [
      singleInfo.email,
      singleInfo.name,
      singleInfo.fatherName,
      singleInfo.MotherName,
      singleInfo.date,
      singleInfo.nid,
      singleInfo.mobile,
      singleInfo.address,
    ];

    const date = Date().split(' ');

    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

    doc.text(20, 30, `YOUR INFORMATION:`);

    doc.text(20, 40, `Email: ${data[1]}`);
    doc.text(20, 50, `Name: ${data[2]}`);
    doc.text(20, 60, `Father's Name: ${data[3]}`);
    doc.text(20, 70, `Mother's Name: ${data[4]}`);
    doc.text(20, 80, `Birth date: ${data[5]}`);
    doc.text(20, 90, `NID: ${data[6]}`);
    doc.text(20, 100, `Contact No: ${data[7]}`);
    doc.text(20, 110, `Address: ${data[8]}`);

    // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`);
  };

  return (
    <div className="mt-20  flex justify-center items-center">
      <div className=" w-1/2 p-3">
        <h3 className=" text-center my-2 text-blue-900 ">YOUR INFORMATION</h3>

        <RegistrationPdf info={info} />

        <div className="flex justify-center ">
          <button
            className="border-2 g bg-blue-900  text-white py-2 px-5 "
            onClick={() => generatePDF(info)}
          >
            Download <BsDownload style={{ display: 'inline' }} />
          </button>
        </div>
      </div>
      <div className="w-fit mx-auto">
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
          width={isDesktop ? 500 : isTablet ? 400 : 250}
        />
      </div>
    </div>
  );
};

export default VaccineInfo;
