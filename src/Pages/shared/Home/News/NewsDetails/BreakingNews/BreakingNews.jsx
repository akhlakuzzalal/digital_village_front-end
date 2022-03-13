import React from 'react';

const BreakingNews = () => {
  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-5 md:border-b-8 my-2 md:my-8 border-black">
        <div className="col-span-3 md:grid-cols-1 mx-5 md:border-r-4">
          <h1 className=" text-2xl md:text-4xl md:mb-10  w-full ">BREAKING NEWS</h1>
          <hr className="md:border-b-8 mb-8" />
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOasSJt4tnq6Tvl_rIcG40kZ0GSvGi_NGQwQ&usqp=CAU"
            alt=""
          />

          <div className="my-5">
            <span className="text-gray-500">February,28,2022 / by </span>
            <span className="text-red-400"> Digital Village Authority</span>
            <h1 className="md:text-3xl text-sm font-bolder my-3">
              The Impact of Family Structure on the Health of Children: Effects
              of Divorce
            </h1>
            <p>
              className aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos sociosqu ad litora.
            </p>
            <hr className="my-8" />
          </div>
          <div className="md:my-5">
            <span className="text-gray-500">January,01,2022 / by </span>
            <span className="text-red-400"> Digital Village Authority</span>
            <h1 className="text-sm hover:text-blue-600 md:text-3xl my-3">
              Sex Education Based on Abstinence? There’s a Real Absence of
              Evidence
            </h1>
            <p>
              Sed sapien tortor, aliquet a velit ut, lacinia molestie velit.
              Maecenas ornare consequat massa ullamcorper dapibus.
            </p>
            <hr className="md:my-8 my-2" />
          </div>
        </div>

        <div>
          <h1 className="my-2 md:text-4xl text-2xl  mx-auto text-center  md:mb-10">
            DAILY FEED
          </h1>
          <hr className="md:border-b-8 md:mb-8" />
          <ul>
            <div className="border my-6 px-2 hover:bg-gray-100 hover:opacity-80">
              <li>
                <h4 className="font-bolder text-base md:text-2xl text-left mb-2 hover:text-blue-600">
                  LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS PLAYOFF
                </h4>
              </li>
              <li>
                <p>
                  The Impact of Family Structure on the Health of Children:
                  Effects of Divorce
                </p>
              </li>
            </div>

            <div className="border my-6 px-2 hover:bg-gray-100 hover:opacity-80">
              <li>
                <h4 className="font-bolder text-base md:text-2xl text-left mb-2 hover:text-blue-600">
                  LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS PLAYOFF
                </h4>
              </li>
              <li>
                <p>
                  The Impact of Family Structure on the Health of Children:
                  Effects of Divorce
                </p>
              </li>
            </div>

            <div className="border my-6 px-2 hover:bg-gray-100 hover:opacity-80">
              <li>
                <h4 className="font-bolder text-base md:text-2xl text-left mb-2 hover:text-blue-600">
                  LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS PLAYOFF
                </h4>
              </li>
              <li>
                <p>
                  The Impact of Family Structure on the Health of Children:
                  Effects of Divorce
                </p>
              </li>
            </div>
            <div className="border my-6 px-2 hover:bg-gray-100 hover:opacity-80">
              <li>
                <h4 className="font-bolder text-base md:text-2xl text-left mb-2 hover:text-blue-600">
                  LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS PLAYOFF
                </h4>
              </li>
              <li>
                <p>
                  The Impact of Family Structure on the Health of Children:
                  Effects of Divorce
                </p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
