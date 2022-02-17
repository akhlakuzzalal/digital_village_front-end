import React from 'react';

const AboutUs = () => {
  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div class="bg-slate-200 pb-10">
        <div>
          <img
            src="https://www.digital-village.in/static/dist/images/banners/inner/about-digital-village.png"
            alt=""
          />
        </div>
        <div class="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
          <div class="container  col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-3">
            <h1 class="text-3xl font-bold bg-indigo-500 text-white py-2 mt-5 pl-2 ml-3">
              ABOUT
            </h1>
            <p class="text-justify px-8 py-2">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              corrupti perferendis quam voluptas adipisci, odit ea vero tempore
              maiores laborum.
            </p>
            <p class="text-justify px-8 py-2">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              corrupti perferendis quam voluptas adipisci, odit ea vero tempore
              maiores laborum.
            </p>
            <p class="text-justify px-8 py-2">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              corrupti perferendis quam voluptas adipisci, odit ea vero tempore
              maiores laborum.
            </p>
            <p class="text-justify px-8 py-2">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              corrupti perferendis quam voluptas adipisci, odit ea vero tempore
              maiores laborum.
            </p>
            <div>
              <h1 class="text-3xl pl-2 font-bold text-white ml-3 bg-indigo-500 py-2">
                VISION & MISSION
              </h1>
              <p class="text-justify px-8 py-2">
                {' '}
                Creating a One Stop Service Solution for the village area
                citizens, providing them with qualityservices like telemedicine,
                Financial Services, Internet Connectivity and other G2C/B2C
                services which are easily accessibleat an affordable price round
                the year.
              </p>
              <div>
                <div class="flex pl-7 my-3">
                  <div>
                    <span class="bg-amber-600 px-2 py-1 m-1 flex-item-center rounded-full text-white">
                      a
                    </span>
                  </div>
                  <div>
                    <h3 class="text-justify px-2">
                      The aim of the Project is to support techno economic
                      viability of digital technology, projects for productive
                      applications in village area livelihoods; standardize the
                      technology packages for future applications; create
                      awareness and capacity building activities on Information
                      Technology systems.
                    </h3>
                  </div>
                </div>
                <div class="flex pl-7 mb-5">
                  <div>
                    <span class="bg-amber-600 px-2 py-1 m-1 flex-item-center rounded-full text-white">
                      b
                    </span>
                  </div>
                  <div>
                    <h3 class="text-justify px-2">
                      Creation of employment opportunities for the youth, by
                      promoting the IT/ITES Industry.
                    </h3>
                  </div>
                </div>
                <div class="flex pl-7">
                  <div>
                    <span class="bg-amber-600 px-2 py-1 m-1 flex-item-center rounded-full text-white">
                      c
                    </span>
                  </div>
                  <div>
                    <h3 class="text-justify px-2">
                      The aim of the Project is to support techno economic
                      viability of digital technology, projects for productive
                      applications in village area livelihoods; standardize the
                      technology packages for future applications; create
                      awareness and capacity building activities on Information
                      Technology systems.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 md:col-span-1  sm:col-span-3">
            <ul>
              <li class="text-3xl font-bold bg-amber-600 text-white py-2 mt-5 pl-2 ml-3">
                Important Links
              </li>
              <li class="text-1xl active py-2 my-1 font-bold bg-indigo-500 text-white pl-2 ml-3 ">
                About
              </li>
              <li class="text-1xl py-2 font-bold my-1 hover:bg-sky-500 hover:text-white text-gray-700 pl-2 ml-3 ">
                Services
              </li>
              <li class="text-1xl py-2 font-bold my-1 hover:bg-sky-500 hover:text-white  text-gray-700 pl-2 ml-3 ">
                Degital-E-care
              </li>
              <li class="text-1xl py-2 font-bold my-1 hover:bg-sky-500 hover:text-white  text-gray-700 pl-2 ml-3 ">
                News
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
