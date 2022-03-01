import React from 'react';
const PageSection = () => {

    return (
    <div class="w-full  bg-gray-400  bg-no-repeat" style={{
        backgroundBlendMode: 'multiply',
        backgroundPosition: 'center center',
        backgroundImage: 'url(https://i.ytimg.com/vi/BCcMhStc0PY/maxresdefault.jpg)'
    }}>
  <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
    <div class=" m-0  p-0  text-3xl  text-white  antialiased  text-center">Donation Details help</div>
    <div class=" m-0  p-0  text-xl  text-white  antialiased  text-center">Find out about Need Help</div>
  </div>
</div>
    );
};

export default PageSection;