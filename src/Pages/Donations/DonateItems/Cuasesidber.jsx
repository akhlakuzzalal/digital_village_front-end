import React from 'react';

const Cuasesidber = () => {
    return (
        <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
            {/* About */}
          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">About Us</p>
            <p class="pb-2 text-gray-700 ">
              Digital village is a more service online platform.sit amet,
              consectetur adipiscing elit. Maecenas mattis est eu odio sagittis
              tristique. Vestibulum ut finibus leo. In hac habitasse platea
              dictumst.
            </p>
            <a
              href="/about"
              class="w-full bg-primary hover:bg-opacity-80 text-white font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>
            {/* Donation card */}
          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">Donation</p>
            <div class="grid grid-cols-1 gap-3 overflow-y-auto h-96">
              <div class="hover:bg-slate-100 hover:ring-gray-800  w-full flex items-center p-2 rounded-xl shadow border">
                {/* Card siderbar */}
                <div class="flex items-center space-x-4">
                  <img
                    src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                    alt="My profile"
                    class="w-16 h-16 rounded-full"
                  />
                </div>
                <div class="flex-grow p-3">
                  <div class="font-semibold text-gray-700">
                    Antério Vieira da Silva Lima
                  </div>
                  <div class="text-sm text-gray-500">
                    You: Thanks, sounds good! . 8hr
                  </div>
                </div>
                <div class="p-2">
                  <img
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt="My profile"
                    class="w-4 h-4 rounded-full order-1"
                  />
                </div>
              </div>

              <div class=" hover:bg-slate-100 hover:ring-gray-800 w-full flex items-center p-2 rounded-xl shadow border">
                <div class="relative flex items-center space-x-4">
                  <img
                    src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                    alt="My profile"
                    class="w-16 h-16 rounded-full"
                  />
                  <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                </div>
                <div class="flex-grow p-3">
                  <div class="font-semibold text-gray-700">
                    Antério Vieira da Silva Lima
                  </div>
                  <div class="text-sm text-gray-500">
                    @ktquez sent a image . 2hr
                  </div>
                </div>
                <div class="p-2">
                  <span class="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
                </div>
              </div>
              <div class="hover:bg-slate-100 hover:ring-gray-800  w-full flex items-center p-2 rounded-xl shadow border">
                <div class="flex items-center space-x-4">
                  <img
                    src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                    alt="My profile"
                    class="w-16 h-16 rounded-full"
                  />
                </div>
                <div class="flex-grow p-3">
                  <div class="font-semibold text-gray-700">
                    Antério Vieira da Silva Lima
                  </div>
                  <div class="text-sm text-gray-500">
                    You: Thanks, sounds good! . 8hr
                  </div>
                </div>
                <div class="p-2">
                  <img
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt="My profile"
                    class="w-4 h-4 rounded-full order-1"
                  />
                </div>
              </div>

              <div class="hover:bg-slate-100 hover:ring-gray-800  w-full flex items-center p-2 rounded-xl shadow border">
                <div class="relative flex items-center space-x-4">
                  <img
                    src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                    alt="My profile"
                    class="w-16 h-16 rounded-full"
                  />
                  <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                </div>
                <div class="flex-grow p-3">
                  <div class="font-semibold text-gray-700">
                    Antério Vieira da Silva Lima
                  </div>
                  <div class="text-sm text-gray-500">
                    @ktquez sent a image . 2hr
                  </div>
                </div>
                <div class="p-2">
                  <span class="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
                </div>
              </div>
            </div>
            <a
              href="/"
              class="w-full bg-primary hover:bg-opacity-80  text-white font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-6"
            >
              <i class="fab fa-instagram mr-2"></i>Follow @Digital_Village
            </a>
          </div>
          {/* photo */}
          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">Instagram Photo</p>
            <div class="grid grid-cols-3 gap-3">
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                alt="fgdg"
              />
            </div>
            <a
              href="/"
              class="w-full bg-primary hover:bg-opacity-80 text-white font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-6"
            >Follow @digital-village</a>
          </div>
        </aside>
    );
};

export default Cuasesidber;