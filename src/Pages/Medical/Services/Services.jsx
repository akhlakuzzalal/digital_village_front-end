import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImCheckmark } from 'react-icons/im';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import OurDoctors from '../OurDoctors/OurDoctors';
import mediBanner from './../../../assets/medical/mediBanner.png';
import TimeTable from './../../../assets/medical/timetable.png';

const datas = [
  {
    id: '1',
    title: ' Cardiologists',
    description:
      'For cardiovascular conditions.They’re experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.',
  },

  {
    id: '2',
    title: 'Family physician',
    description:
      'For people of all ages.They care for the whole family, including children, adults, and the elderly. They do routine checkups and screening tests, give you flu and immunization shots, and manage diabetes and other ongoing medical conditions.',
  },
  {
    id: '3',
    title: 'Ophthalmologists',
    description:
      'An ophthalmologist is a medical or osteopathic doctor who specializes in eye and vision care. Ophthalmologists differ from optometrists and opticians in their levels of training and in what they can diagnose and treat.',
  },
  {
    id: '4',
    title: 'Gynecologists',
    description:
      "disease management for female.Often called OB/GYNs, these doctors focus on women' health, including pregnancy and childbirth. They do Pap smears, pelvic exams, and pregnancy checkups. OB/GYNs are trained in both areas. But some of them may focus on women's reproductive health (gynecologists), and others specialize in caring for pregnant women (obstetricians).",
  },
  {
    id: '5',
    title: 'Dermatologists',
    description:
      ' For diseases of the skin.Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help.',
  },
  {
    id: '6',
    title: 'Neurologists',
    description:
      "For the nerves, spine, and brain.These are specialists in the nervous system, which includes the brain, spinal cord, and nerves. They treat strokes, brain and spinal tumors, epilepsy, Parkinson's disease, and Alzheimer's disease.",
  },
];

const Services = () => {
  const user = useSelector((state) => state.user.user);
  const email = user.email;
  const name = user.name;
  const [active, setActive] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const sendEmail = (formData) => {
    console.log(formData);

    emailjs
      .send(
        'service_nbv08xi',
        'template_qw32pvu',
        formData,
        'user_NT0NiFlR59zCf04Pr6LZF'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    swal('Successfully!', 'Your message is sent successfully!', 'success');
    reset();
  };
  return (
    <div className="my-20">
      <div className="">
        <h3 className=" pl-10 text-center md:text-5xl text-blue-600 ">
          Our Services
        </h3>
        <p className="my-5 lg:mx-[300px]  text-justify md:text-center pl-14 md:px-5  text-lg ">
          Treatment here, truly human experience. You’re cared for as a person
          first.The more patients we treat each year prepares us to treat the
          one who matters most—you.Count on our experts to deliver an accurate
          diagnosis and the right plan for you the first time.
        </p>

        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="w-1/2 md:w-full">
            <img src={mediBanner} alt="" />
          </div>

          <div className="px-2 mt-10 w-1/2 md:w-full">
            <div className=" w-full flex justify-center items-center my-1 bg-gray-100  py-2 ">
              <ImCheckmark
                className="m-2"
                style={{
                  color: '#10217d',
                  fontSize: '1.5em',
                }}
              />
              <div className="w-11/12 p-5">
                <span className="dark:text-dark_text text-sm md:text-lg">
                  Online Consultation
                </span>
              </div>
            </div>
            <div className="  flex justify-center items-center my-1 bg-gray-100  py-2">
              <ImCheckmark
                className="m-2"
                style={{
                  color: '#10217d',
                  fontSize: '1.5em',
                }}
              />
              <div className="w-11/12 p-5">
                <span className="dark:text-dark_text text-sm md:text-lg">
                  Offline Consultation
                </span>
              </div>
            </div>
            <div className=" flex justify-center items-center my-1 bg-gray-100 py-2">
              <ImCheckmark
                className="m-2"
                style={{
                  color: '#10217d',
                  fontSize: '1.5em',
                }}
              />
              <div className="w-11/12 p-5">
                <span className="dark:text-dark_text text-sm md:text-lg">
                  Online Appointment
                </span>
              </div>
            </div>

            <div className=" flex justify-center items-center my-1 bg-gray-100 py-2">
              <ImCheckmark
                className="m-2"
                style={{
                  color: '#10217d',
                  fontSize: '1.5em',
                }}
              />
              <div className="w-11/12 p-5">
                <span className="dark:text-dark_text text-sm md:text-lg">
                  Lab Test
                </span>
              </div>
            </div>

            <div className=" flex justify-center items-center my-1 bg-gray-100 py-2">
              <ImCheckmark
                className="m-2"
                style={{
                  color: '#10217d',
                  fontSize: '1.5em',
                }}
              />
              <div className="w-11/12 p-5">
                <span className="dark:text-dark_text text-sm md:text-lg">
                  Emergency Department
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:my-20 px-20">
          <div className="text-center">
            <h3 className="text-blue-700">Our Time Table</h3>
            <p className="lg:px-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem animi, qui voluptatibus omnis quod unde officia
              delectus consequatur hic iure.
            </p>
          </div>
          <div className=" flex flex-col   justify-center items-center md:flex-row">
            <div className=" w-full md:w-1/2 px-2 mt-10">
              <div className=" w-full flex justify-start items-center my-1 bg-gray-100 py-5">
                <ImCheckmark
                  className="text-blue-700 m-2"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div className="w-11/12">
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Saturday 11am to 5 pm
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-start items-center my-1 bg-gray-100 py-5">
                <ImCheckmark
                  className="text-blue-700 m-2"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div className="w-11/12">
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Sunday 10am to 8 pm
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-start items-center my-1 bg-gray-100 py-5">
                <ImCheckmark
                  className="text-blue-700 m-2"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div className="w-11/12">
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Monday 10am to 8 pm
                  </span>
                </div>
              </div>

              <div className="w-full flex justify-start items-center my-1 bg-gray-100 py-5">
                <ImCheckmark
                  className="text-blue-700 m-2"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div className="w-11/12">
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Tuesday 10am to 8 pm
                  </span>
                </div>
              </div>

              <div className="w-full flex justify-start items-center my-1 bg-gray-100  py-5">
                <ImCheckmark
                  className="text-blue-700 m-2"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div className="w-11/12">
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    wednesday 10am to 8 pm
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-1/2">
              <img src={TimeTable} alt="" />
            </div>
          </div>
        </div>

        {/* end */}
      </div>
      <OurDoctors />
      <div className=" 2 items-center lg:mt-[100px] lg:mb-10">
        <h6 className="text-gray-700 text-center text-lg">
          We are here to hear from you
        </h6>
        <div className=" flex justify-center md:px-8 ">
          <form
            className="w-3/5 space-y-4 mx-10 mt-10"
            onSubmit={handleSubmit(sendEmail)}
          >
            <input
              className=" w-full  bg-gray-100 px-5 outline-none border-2 py-5 focus:border-primary  rounded mb-0 md:mb-5 lg:mb-0"
              {...register('name', { required: 'Name is Required' })}
              value={name}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}

            <input
              className=" w-full mb-0 md:mb-5 lg:mb-0 outline-none border-2 bg-gray-100 focus:border-primary px-5 rounded py-5 "
              type="email"
              {...register('email', {
                required: 'Email is Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              value={email}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}

            <div className="col-span-2">
              <textarea
                className=" w-full bg-gray-100 py-8 px-5 outline-none border-2 focus:border-primary"
                {...register('message', {
                  required: 'Message is Required',
                  minLength: {
                    value: 10,
                    message: 'Minimum Required length is 10',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Maximum allowed length is 50 ',
                  },
                })}
                placeholder="Write your message"
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>

            <input
              className="bg-primary  px-6 md:w-2/6   py-2 text-white mx-auto lg:ml-0 rounded-md f"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
