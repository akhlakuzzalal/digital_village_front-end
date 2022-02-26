import React from 'react';
import { useForm } from 'react-hook-form';
import img from '../../../assets/events/contact.jpg';
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      <div
        className="bg-cover bg-no-repeat h-[400px]"
        style={{
          backgroundImage: `url(https://cdn01.grameenphone.com/sites/default/files/contact_us_1692_490.jpg)`,
        }}
      >
        <div className="bg-primary w-[500px]  mx-auto relative top-[330px] py-5">
          <h1 className="text-3xl md:text-5xl lg:text-5xl text-center text-white pt-16 font-bold">
            Contact With Us
          </h1>
          <h3 className="text-center font-semibold my-3 text-xl md:text-2xl lg:text-2xl text-white ">
            Home / Contact Us
          </h3>
        </div>
      </div>

      <div className="pt-52">
        <div className="pr-8">
          <h3 className="text-center ml-2 md:ml-0 lg:ml-0 text-2xl font-semibold mt-16 mb-3 text-gray-500 hover:text-red-500">
            FOLLOW OUR INFO
          </h3>
          <h1 className="text-3xl md:text-5xl lg:text-5xl text-center font-bold ml-4 md:ml-0 lg:ml-0 hover:text-blue-600">
            Contact information
          </h1>
          <h4 className="text-center px-[300px] ">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days.We will be happy to
            answer your questions.enquiries within 24 hours on business days.We
            will be happy to answer your questions.
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 px-[200px]">
          <div className="flex flex-col items-center bg-gray-100 rounded-lg pl-10  md:flex-row pl-15     container md:max-w-xl ">
            <div className=" rounded-full">
              <img
                className="object-cover  lg:mr-0object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0 lg:mr-0"
                src="https://freepngimg.com/thumb/clock/58348-alarm-icon-cartoon-timer-clock-free-photo-png-thumb.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between mr-7 leading-normal py-10 ml-5 ">
              <p className="mb-3 font-semibold  text-gray-700 dark:text-gray-400">
                10:00am to 6:00pm
              </p>
              <p className="mb-3 font-semibold text-red-600 dark:text-gray-400mb-3 ">
                Sunday Closed
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-lg pl-5 md:flex-row  ml-15 container md:max-w-xl   bg-gray-100">
            <img
              className="object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0 lg:mr-0"
              src="https://image.pngaaa.com/23/203023-middle.png"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 mr-3 md:mr-0 lg:mr-0 font-semibold text-gray-700 dark:text-gray-400">
                13005 Greenville Avenue
              </p>
              <p className="mb-3 font-semibold text-red-600 dark:text-gray-400">
                California, TX 70240
              </p>
            </div>
          </div>

          <div className="flex flex-col   md:flex-row pl-10  container md:max-w-xl bg-gray-100 py-5">
            <img
              className="object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0 lg:mr-0"
              src="https://www.kindpng.com/picc/m/336-3369375_contact-flower-mound-electrician-today-phone-icon-png.png"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal pt-10">
              <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                +1 000999 0099
              </p>
              <p className=" font-semibold text-red-600">info@themerange.net</p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg  md:flex-row      container md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h3 className="mb-3  text-gray-700 dark:text-gray-400 text-2xl md:text-3xl lg:text-3xl font-bold">
                Our Socials Links
              </h3>
              <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                Print this page to PDF for the complete set of vectors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* map */}

      <div className="mt-20 lg:mx-[100px] ">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="google map"
              className="lg:w-[100%] lg:h-[500px]"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=bashundhara&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-20 mx-auto bg-white pt-10">
        <h5 className="text-center">DON’T HASITATE TO CONTACT WITH US</h5>
        <h1 className="text-3xl md:text-5xl lg:text-5xl text-center font-bold hover:text-blue-600">
          Now Very Easy
        </h1>
        <h4 className=" mt-5 px-[300px] container text-center">
          Our approach to SEO is uniquely built around what we know works…and
          what we know doesn’t work. With over 200 verified factors in
          playworks…and what we know doesn’t work. With over 200 verified
          factors in play.
        </h4>
      </div>

      <div className="lg:flex px-20 py-20 bg-white">
        <div>
          <img className="h-[500px]" src={img} alt="" />
        </div>
        <form
          className=" md:grid grid-cols-1 md:grid-cols-2 gap-5 mt-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className=" w-full  bg-gray-100 px-20 py-5 rounded "
            {...register('name', { required: true, maxLength: 20 })}
            placeholder="Your Name"
          />

          <input
            className=" w-full   bg-gray-100 px-20 rounded"
            type="number"
            {...register('number', { required: true, maxLength: 20 })}
            placeholder="Your Phone Number"
          />

          <input
            className=" w-full  bg-gray-100 px-20 rounded py-5 "
            type="email"
            {...register('email')}
            placeholder="Enter Your Email"
          />

          <input
            className=" w-full bg-gray-100 px-20 rounded"
            type="email"
            {...register('email')}
            placeholder="Write your Subject"
          />

          <div className=" col-span-2">
            <textarea
              placeholder="Please Write Your Message"
              className=" w-full bg-gray-100 py-8 px-5"
              {...register('firstName', { required: true, maxLength: 20 })}
            />
          </div>

          <input
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 btn mx-auto col-span-2 font-bold rounded-lg  px-6 md:w-2/6   py-2 text-white"
            type="submit"
            value="Submit Now"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
