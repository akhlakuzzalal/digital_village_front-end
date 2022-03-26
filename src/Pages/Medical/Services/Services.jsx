import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImCheckmark } from 'react-icons/im';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import OurDoctors from '../OurDoctors/OurDoctors';
import TimeTable from './../../../assets/events/time table.jpg';
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
      <div className="">
        <div className="">
          <h3 className=" text-center md:text-5xl text-blue-600 ">
            Our Services
          </h3>
          <p className="my-5 lg:mx-[300px] text-center px-2 md:px-5  text-lg ">
            Treatment here, truly human experience. You’re cared for as a person
            first.The more patients we treat each year prepares us to treat the
            one who matters most—you.Count on our experts to deliver an accurate
            diagnosis and the right plan for you the first time.
          </p>
        </div>
        <div className="lg:flex lg:mx-[150px] justify-between">
          <img src={mediBanner} alt="" />

          <div className="px-2 mt-10">
            <div className="  flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
              <ImCheckmark
                style={{
                  color: '#10217d',
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
            <div className=" flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
              <ImCheckmark
                style={{
                  color: '#10217d',
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
            <div className=" flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
              <ImCheckmark
                style={{
                  color: '#10217d',
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

            <div className=" flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
              <ImCheckmark
                style={{
                  color: '#10217d',
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

            <div className=" flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
              <ImCheckmark
                style={{
                  color: '#10217d',
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
        </div>

        <div className=" lg:my-20">
          <div className="text-center">
            <h3>Our Time Table</h3>
            <p className="lg:px-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem animi, qui voluptatibus omnis quod unde officia
              delectus consequatur hic iure.
            </p>
          </div>
          <div className="lg:flex lg:mx-[150px] justify-between">
            <div className="px-2 mt-10">
              <div className="  flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
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
                    Saturday 11am to 5 pm
                  </span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
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
                    Sunday 10am to 8 pm
                  </span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
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
                    Monday 10am to 8 pm
                  </span>
                </div>
              </div>

              <div className=" flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
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
                    Tuesday 10am to 8 pm
                  </span>
                </div>
              </div>

              <div className=" flex justify-start items-center my-3 bg-gray-100 px-40 py-10">
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
                    wednesday 10am to 8 pm
                  </span>
                </div>
              </div>
            </div>
            <img className="w-[500px]" src={TimeTable} alt="" />
          </div>
          <div className=""></div>
        </div>

        {/* end */}
      </div>
      <OurDoctors />
      <div className=" items-center lg:mt-[100px] lg:mb-10">
        <div className=" flex justify-center md:px-8 ">
          <form class=" pl-10 md:0 w-full lg:mx-[200px]">
            <h3 class="text-center pb-4 text-3xl font-bolder text-gray-600">
              We are here to hear from you
            </h3>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div class="w-full px-3">
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
              className="bg-primary  px-6 md:w-2/6   py-2 text-white mx-auto lg:ml-0 rounded-md"
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
