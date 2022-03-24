import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiLightBulb } from 'react-icons/hi';
import { ImCheckmark } from 'react-icons/im';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import mediBanner from './../../../assets/medical/mediBanner.png';

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
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center my-10 items-center pl-10 pr-0 md:pr-4">
        <div className="">
          <img src={mediBanner} alt="" />
        </div>
        <div className="px-5 mt-6 md:mt-0">
          <h3 className=" text-center md:text-5xl text-blue-700 ">
            Our Services
          </h3>
          <p className="my-5 text-justify px-2 md:px-5  text-lg ">
            Treatment here, truly human experience. You’re cared for as a person
            first.The more patients we treat each year prepares us to treat the
            one who matters most—you.Count on our experts to deliver an accurate
            diagnosis and the right plan for you the first time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center mx-6">
            <div className="px-2 ">
              <div className="  flex justify-start items-center my-3">
                <ImCheckmark
                  className="text-blue-700"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Online Consultation
                  </span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  className="text-blue-700"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Offline Consultation
                  </span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  className="text-blue-700"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Online Appointment
                  </span>
                </div>
              </div>

              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  className="text-blue-700"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Lab Test
                  </span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  className="text-blue-700"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Ambulance facilities
                  </span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  className="text-blue-700"
                  style={{
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span
                    className="dark:text-dark_text"
                    style={{ fontSize: '18px' }}
                  >
                    Emergency Department
                  </span>
                </div>
              </div>
            </div>
            <div className="  flex justify-end">
              <ul class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-center">
                <li
                  class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 bg-primary"
                  style={{
                    color: 'white',
                    fontSize: '1.5em',
                  }}
                >
                  Time Table
                </li>
                <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                  Sat 11am to 5 pm
                </li>
                <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                  Sun 10am to 8 pm
                </li>
                <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                  Mon 10am to 8 pm
                </li>
                <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                  Tues 10am to 10 pm
                </li>
                <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                  wed 10am to 10 pm
                </li>
                <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                  thus 11am to 5 pm
                </li>
                <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                  Fri 12am to 5 pm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
        <div className=" ">
          <section class="text-gray-700">
            <div class="container  pl-10 pr-0 md:pr-4 py-8 ">
              <div class="text-center flex flex-col justify-center items-center">
                <h3 class=" text-xl md:text-3xl font-bold text-center title-font pb-6 text-blue-700">
                  Our Departments
                </h3>
              </div>
              <div className=" flex  flex-col justify-center item-center pl-5 pr-1 md:full  w-full md:mt-0 sm:mt-14 mt-10">
                {/* <!-- Digital Section --> */}

                {datas.map((data) => (
                  <div>
                    <div>
                      <div className=" flex justify-between items-center cursor-pointer bg-primary  p-4 my-1  rounded-lg">
                        {active && data.id === active ? (
                          <div className="flex justify-between items-center">
                            <HiLightBulb
                              className="  transition duration-700 ease-in-out text-[#ffff00]"
                              size={30}
                              onClick={() => setActive('')}
                            />
                            <h3 className=" w-11/12 inline font-semibold text-lg text-white">
                              {data.title}
                            </h3>
                          </div>
                        ) : (
                          <div
                            onClick={() => setActive(data?.id)}
                            className="flex items-center"
                          >
                            <HiLightBulb
                              className=" transition duration-700 ease-in-out text-white"
                              size={30}
                            />
                            <h3 className="  w-11/12  font-semibold text-lg text-white">
                              {data.title}
                            </h3>
                          </div>
                        )}
                      </div>
                      <p
                        className={
                          'font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 ' +
                          (data.id === active ? 'block' : 'hidden')
                        }
                      >
                        {data?.description}
                      </p>
                    </div>
                    <hr className="  bg-gray-200" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="pl-10 md:pl-0  ">
          <p class="text-center  text-sm  font-bolder text-blue-700">
            We are here to hear from you
          </p>
          <div className=" flex justify-center md:px-8 ">
            <form
              className=" space-y-6 mx-10 mt-10"
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
                  <small className="text-danger">
                    {errors.message.message}
                  </small>
                )}
              </div>

              <input
                className="bg-primary  px-6 md:w-2/6   py-2 text-white mx-auto lg:ml-0 rounded-md"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
