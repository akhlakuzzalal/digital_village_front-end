import React from 'react';
import { ImCheckmark } from 'react-icons/im';
import background from './../../../assets/medical/department.jpg';
import mediBanner from './../../../assets/medical/mediBanner.png';

const Services = () => {
  return (
    <div>
      <div className=" w-full flex justify-center items-center p-10">
        <div className="w-full md:w-1/2">
          <img src={mediBanner} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-center">Our Services</h3>
          <p className="my-5" style={{ fontSize: '20px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            ullam consectetur autem accusantium porro? Aspernatur, totam
            accusamus, molestias est architecto sed laborum officiis atque
            cumque incidunt alias, porro dolor voluptatum quos vero repudiandae
          </p>
          <div className="flex justify-start items-center">
            <div className="px-2 w-full md:w-1/2">
              <div className="  flex justify-start items-center my-3">
                <ImCheckmark
                  style={{
                    color: '#10217d',
                    fontSize: '1.5em',
                    marginRight: '4px',
                  }}
                />
                <div>
                  <span style={{ fontSize: '20px' }}>Online Consultation</span>
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
                  <span style={{ fontSize: '20px' }}>Offline Consultation</span>
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
                  <span style={{ fontSize: '20px' }}>Online Appointment</span>
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
                  <span style={{ fontSize: '20px' }}>Lab Test</span>
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
                  <span style={{ fontSize: '20px' }}>Ambulance facilities</span>
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
                  <span style={{ fontSize: '20px' }}>Emergency Department</span>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-1/2 flex justify-end">
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
      <div
        className="w-full flex justify-center items-center p-10 "
      
      >
        <div className="w-full md:w-1/2">
          <section class="text-gray-700">
            <div class="container px-5 py-24 mx-auto">
              <div class="text-center mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                  Our Departments
                </h1>
              </div>
              <div class="w-full flex flex-wrap  sm:mx-auto sm:mb-2 -mx-2">
                <div class="w-full  py-2">
                  <details class="mb-4">
                    <summary
                      class="font-semibold  bg-gray-200 rounded-md py-2 px-4"
                      style={{
                        backgroundColor: '#10217d',
                        color: 'white',
                        fontSize: '1.5em',
                      }}
                    >
                      Cardiologists
                    </summary>

                    <span>
                      For cardiovascular conditions.They’re experts on the heart
                      and blood vessels. You might see them for heart failure, a
                      heart attack, high blood pressure, or an irregular
                      heartbeat.
                    </span>
                  </details>

                  <details class="mb-4">
                    <summary
                      class="font-semibold bg-gray-200 rounded-md py-2 px-4"
                      style={{
                        backgroundColor: '#10217d',
                        color: 'white',
                        fontSize: '1.5em',
                      }}
                    >
                      Family physician
                    </summary>

                    <span>
                      For people of all ages.They care for the whole family,
                      including children, adults, and the elderly. They do
                      routine checkups and screening tests, give you flu and
                      immunization shots, and manage diabetes and other ongoing
                      medical conditions.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary
                      class="font-semibold  bg-gray-200 rounded-md py-2 px-4"
                      style={{
                        backgroundColor: '#10217d',
                        color: 'white',
                        fontSize: '1.5em',
                      }}
                    >
                      Ophthalmologists
                    </summary>

                    <span>specialize in eye and vision care.</span>
                  </details>
                  <details class="mb-4">
                    <summary
                      class="font-semibold  bg-gray-200 rounded-md py-2 px-4"
                      style={{
                        backgroundColor: '#10217d',
                        color: 'white',
                        fontSize: '1.5em',
                      }}
                    >
                      gynecologists
                    </summary>

                    <span>
                      disease management for female.Often called OB/GYNs, these
                      doctors focus on women's health, including pregnancy and
                      childbirth. They do Pap smears, pelvic exams, and
                      pregnancy checkups. OB/GYNs are trained in both areas. But
                      some of them may focus on women's reproductive health
                      (gynecologists), and others specialize in caring for
                      pregnant women (obstetricians).
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary
                      class="font-semibold bg-gray-200 rounded-md py-2 px-4"
                      style={{
                        backgroundColor: '#10217d',
                        color: 'white',
                        fontSize: '1.5em',
                      }}
                    >
                      Dermatologists
                    </summary>

                    <span>
                      For diseases of the skin.Have problems with your skin,
                      hair, nails? Do you have moles, scars, acne, or skin
                      allergies? Dermatologists can help.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary
                      class="font-semibold  bg-gray-200 rounded-md py-2 px-4"
                      style={{
                        backgroundColor: '#10217d',
                        color: 'white',
                        fontSize: '1.5em',
                      }}
                    >
                      Neurologists
                    </summary>

                    <span>
                      For the nerves, spine, and brain.These are specialists in
                      the nervous system, which includes the brain, spinal cord,
                      and nerves. They treat strokes, brain and spinal tumors,
                      epilepsy, Parkinson's disease, and Alzheimer's disease.
                    </span>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <form class="w-full max-w-lg">
            <p class="text-center my-2 text-gray-400">
              we are here to hear from you
            </p>
            <div class="flex flex-wrap -mx-3 mb-6">
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
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
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
                  class="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  style={{ backgroundColor: '#10217d' }}
                >
                  Send
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
