import React from 'react';
const EventPhotoGallary = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h4 className="text-3xl dark:text-white">
          Our Photo gallery of Events
        </h4>
        <p className="px-300px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ipsa!
          Quis ex sapiente possimus quisquam atque fuga aliquid beatae quos?
        </p>
      </div>
      <section class="overflow-hidden text-gray-700">
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://res.cloudinary.com/randomone/image/upload/v1654199600/digitalVillage/conference_temhhy.png"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://res.cloudinary.com/randomone/image/upload/v1654199897/digitalVillage/img5_jzrcht.jpg"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://res.cloudinary.com/randomone/image/upload/v1654199673/digitalVillage/img1_jfscsx.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://res.cloudinary.com/randomone/image/upload/v1654199704/digitalVillage/img2_vz3twd.webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://res.cloudinary.com/randomone/image/upload/v1654199798/digitalVillage/img3_ksxdms.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://res.cloudinary.com/randomone/image/upload/v1654199850/digitalVillage/img4_e3flcy.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPhotoGallary;
