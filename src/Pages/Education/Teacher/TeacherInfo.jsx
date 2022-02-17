import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <p>
        Here we will take info from the teacher. after submitting the form
        properly he will enter in the teacher dashboard
      </p>
      <button
        className="btn bg-primary"
        onClick={() => navigate('/teacherDashboard')}
      >
        Go to dashboard
      </button>
    </div>
  );
};

export default TeacherInfo;
