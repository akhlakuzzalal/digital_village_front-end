import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterTeacher = () => {
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  const handleTeacherRegistration = async (data) => {
    const newTeacher = { ...data, isVerified: false };
    // const response = await axios.post('/teacher/addTeacher', newTeacher);
    // console.log(response?.data);

    navigate('/teacher');
    // after getting response from the teacher give him a message that he need to wait for verification.

    // also set the roles in redux store after verifying from admin dashboard
  };

  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <h3 className="text-center mt-3">
        Please fill up the form to be a part of our mission
      </h3>
      <form
        className=" space-y-6 mt-10 w-2/2 md:w-1/2  mx-auto"
        onSubmit={handleSubmit(handleTeacherRegistration)}
      >
        {/* name */}
        <input
          className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
          {...register('name', { required: true, value: user?.name })}
          required
          disabled
        />

        {/* email */}
        <input
          className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
          {...register('email', { required: true, value: user?.email })}
          required
          disabled
        />

        {/* highest qualification */}
        <input
          className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
          {...register('qualification', { required: "Qualification is Required" })}
          
          onKeyUp={() => {
            trigger("qualification");
          }}
          placeholder="Highest qualification: HSC, BSC, MSC or something else"
        />
        {errors.qualification && (
          <small className="text-danger">{errors.qualification.message}</small>
        )}
          
      

        {/* gpa */}
        <input
          className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('gpa', {
            required: "GPA is Required",
                  min: {
                    value: 1,
                    message: "Minimum Required GPA is 1",
                  },
                  max: {
                    value: 5,
                    message: "Maximum allowed age is 5",
                  },
                  pattern: {
                    value: /^[0-5._%+-]*$/,
                    message: "Only numbers are allowed",
                  }
                })}
                placeholder="Acquired GPA"
                required
                onKeyUp={() => {
                  trigger("gpa");
                }}
              />
              
              {errors.gpa && (
                <small className="text-danger">{errors.gpa.message}</small>
              )}

        {/* about yourself */}
        <textarea
          className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
          {...register('about', { required: "Message is Required",
          minLength: {
            value: 10,
            message: "Minimum Required length is 10",
          },
          maxLength: {
            value: 50,
            message: "Maximum allowed length is 150 ",
          }
         })}
         placeholder="Write about yourself"
          required
         onKeyUp={() => {
          trigger("about");
        }}
        ></textarea>
        {errors.about && (
          <small className="text-danger">{errors.about.message}</small>
        )}

        {/* submit button */}
        <input
          type="submit"
          className="bg-primary hover:bg-opacity-80 px-11 md:px-20 lg:px-20 py-2 rounded-lg  sm:mb-20 md:w-full lg:w-full mx-auto mb-20 cursor-pointer text-white"
          value="Register as a teacher"
        />
      </form>
    </div>
  );
};

export default RegisterTeacher;
