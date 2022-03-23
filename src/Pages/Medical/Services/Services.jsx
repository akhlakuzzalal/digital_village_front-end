import React, { useState } from 'react';
import { HiLightBulb } from 'react-icons/hi';
import { ImCheckmark } from 'react-icons/im';
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
  const [active, setActive] = useState('');
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center my-10 items-center">
        <div className="">
          <img src={mediBanner} alt="" />
        </div>
        <div className="px-5 mt-6 md:mt-0">
          <h3 className=" text-center md:text-5xl text-blue-600">
            Our Services
          </h3>
          <p
            className="my-5 text-justify px-2 md:px-5  "
            style={{ fontSize: '20px' }}
          >
            Treatment here, truly human experience. You’re cared for as a person
            first.The more patients we treat each year prepares us to treat the
            one who matters most—you.Count on our experts to deliver an accurate
            diagnosis and the right plan for you the first time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center mx-6">
            <div className="px-2 ">
              <div className="  flex justify-start items-center my-3">
                <ImCheckmark
                  style={{
                    color: '#10217d',
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px' }}>Online Consultation</span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  style={{
                    color: '#10217d',
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px' }}>Offline Consultation</span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  style={{
                    color: '#10217d',
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px' }}>Online Appointment</span>
                </div>
              </div>

              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  style={{
                    color: '#10217d',
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px' }}>Lab Test</span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  style={{
                    color: '#10217d',
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px' }}>Ambulance facilities</span>
                </div>
              </div>
              <div className=" flex justify-start items-center my-3">
                <ImCheckmark
                  style={{
                    color: '#10217d',
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px' }}>Emergency Department</span>
                </div>
              </div>
            </div>
            <div className="  flex justify-end">
              <ul class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-center">
                <li
                  class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
                  style={{
                    backgroundColor: '#10217d',
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
        <div className="">
          <section class="text-gray-700">
            <div class="container px-5 py-8 mx-auto">
              <div class="text-center">
                <h3 class=" text-3xl font-bold text-center title-font pb-6 text-blue-900 ">
                  Our Departments
                </h3>
              </div>
              <div className=" flex  flex-col justify-center md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                {/* <!-- Digital Section --> */}

                {datas.map((data) => (
                  <div>
                    <div>
                      <div className=" flex justify-between items-center cursor-pointer bg-blue-900 p-4 my-1  rounded-lg">
                        {active && data.id === active ? (
                          <div>
                            <HiLightBulb
                              className="inline  transition duration-700 ease-in-out text-[#ffff00]"
                              size={30}
                              onClick={() => setActive('')}
                            />
                            <h3 className=" inline font-semibold text-xl text-white">
                              {data.title}
                            </h3>
                          </div>
                        ) : (
                          <div onClick={() => setActive(data?.id)}>
                            <HiLightBulb
                              className=" inline transition duration-700 ease-in-out text-white"
                              size={30}
                            />
                            <h3 className=" inline font-semibold text-xl text-white">
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
        <div className=" flex justify-center px-8 ">
          <form class="">
            <p class="text-center pb-4 text-base  font-bolder text-gray-600">
              We are here to hear from you
            </p>
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
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <textarea
                  class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                  class="shadow focus:shadow-outline focus:outline-none  text-white font-bold py-3 px-6 rounded-full"
                  type="button"
                  style={{ backgroundColor: '#10217d' }}
                >
                  Send Message
                </button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
