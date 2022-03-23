import emailjs from '@emailjs/browser';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import img from '../../../assets/events/contact.jpg';
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: { yes_i_understand: false },
  });

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
    swal('Successfully!', '!Your Message Send', 'success');
    reset();
  };

  // const sendEmail = (e) => {
  //           e.preventDefault();

  //         };

  return (
    <div className="">
      <div
        className="bg-cover h-[240px] w-[100%]bg-no-repeat  lg:h-[500px]  md:h-[500px]"
        style={{
          backgroundImage: `url(https://cdn01.grameenphone.com/sites/default/files/contact_us_1692_490.jpg)`,
        }}
      >
        {/* <div className="bg-primary lg:w-[500px] md:w-full mx-auto relative top-[200px] md:top-[400px] md:py-5">
          <h1 className="text-2xl text-center text-white md:pt-16 font-bold">
            Contact With Us
          </h1>
          <h3 className="text-center font-semibold my-3 text-xl md:text-2xl lg:text-lg text-white ">
            Home / Contact Us
          </h3>
        </div> */}
      </div>

      <div className="pt-20 md:pt-30">
        <div className="lg:pr-8">
          <h3 className="text-center ml-2 md:ml-0 lg:ml-0 text-2xl font-semibold mt-16 mb-3 text-gray-500 hover:text-red-500">
            FOLLOW OUR INFO
          </h3>
          <h1 className="text-2xl md:text-5xl lg:text-5xl text-center font-bold  hover:text-blue-600">
            Contact information
          </h1>
          <h4 className="text-center lg:px-[300px] px-5 ">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days.We will be happy to
            answer your questions.enquiries within 24 hours on business days.We
            will be happy to answer your questions.
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 mt-10 lg:px-[200px]">
          <div className="flex bg-gray-100 px-7 w-full my-1 ">
            <div className=" rounded-full">
              <img
                className="lg:mr-0 object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0"
                src="https://freepngimg.com/thumb/clock/58348-alarm-icon-cartoon-timer-clock-free-photo-png-thumb.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between mr-7 leading-normal py-10 ml-5  ">
              <p className="mb-3 font-semibold  text-gray-700 dark:text-gray-400">
                10:00am to 6:00pm
              </p>
              <p className="mb-3 font-semibold text-red-600 dark:text-gray-400mb-3 ">
                Sunday Closed
              </p>
            </div>
          </div>

          <div className="flex bg-gray-100 px-7 w-full my-1 ">
            <div className=" rounded-full">
              <img
                className="lg:mr-0 object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0"
                src="https://image.pngaaa.com/23/203023-middle.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between mr-7 leading-normal py-10 ml-5 ">
              <p className="mb-3 font-semibold  text-gray-700 dark:text-gray-400">
                13005 Greenville Avenue
              </p>
              <p className="mb-3 font-semibold text-red-600 dark:text-gray-400mb-3 ">
                California, TX 70240
              </p>
            </div>
          </div>

          <div className="flex bg-gray-100 px-7 w-full my-1 ">
            <div className=" rounded-full">
              <img
                className="lg:mr-0 object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0"
                src="https://www.kindpng.com/picc/m/336-3369375_contact-flower-mound-electrician-today-phone-icon-png.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between mr-7 leading-normal py-10 ml-5 ">
              <p className="mb-3 font-semibold  text-gray-700 dark:text-gray-400">
                +1 000999 0099
              </p>
              <p className="mb-3 font-semibold text-red-600 dark:text-gray-400mb-3 ">
                info@themerange.net
              </p>
            </div>
          </div>

          <div className="flex bg-gray-100 px-7 w-full my-1 ">
            <div className=" rounded-full">
              <img
                className="lg:mr-0 object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0"
                src="https://www.kindpng.com/picc/m/336-3369375_contact-flower-mound-electrician-today-phone-icon-png.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between mr-7 leading-normal py-10 ml-5 ">
              <p className="mb-3 font-semibold  text-gray-700 dark:text-gray-400">
                +1 000999 0099
              </p>
              <p className="mb-3 font-semibold text-red-600 dark:text-gray-400mb-3 ">
                info@themerange.net
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* map */}

      <div className="lg:mt-20 mt-5 lg:mx-[100px]  ">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="google map"
              className="lg:w-[100%] lg:h-[500px] w-full h-[400px]"
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

      <div className=" mx-auto bg-white pt-10">
        <h5 className="text-center">DON’T HASITATE TO CONTACT WITH US</h5>
        <h1 className="text-2xl md:text-5xl lg:text-5xl text-center font-bold hover:text-blue-600">
          Now Very Easy
        </h1>
        <h4 className=" md:mt-5 lg:px-[300px] container text-center px-3">
          Our approach to SEO is uniquely built around what we know works…and
          what we know doesn’t work. With over 200 verified factors in
          playworks…and what we know doesn’t work. With over 200 verified
          factors in play.
        </h4>
      </div>

      <div className="lg:flex lg:px-20 md:py-20 bg-white">
        <div>
          <img className="h-[500px]" src={img} alt="" />
        </div>
        <form
          className=" md:grid grid-cols-1 md:grid-cols-2 gap-5 md:mt-16 mx-10 lg:mx-0"
          onSubmit={handleSubmit(sendEmail)}
        >
          <input
            className=" w-full  bg-gray-100 px-20  outline-none border-2 py-5 focus:border-primary  rounded mb-5 lg:mb-0"
            {...register('name', { required: 'Name is Required' })}
            onKeyUp={() => {
              trigger('name');
            }}
            placeholder="Name"
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}

          <input
            className=" w-full mb-5 lg:mb-0 py-5 lg:py-0 outline-none border-2 focus:border-primary bg-gray-100 px-20 rounded"
            type="number"
            {...register('number', {
              required: 'Phone is Required',
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: 'Invalid phone no',
              },
            })}
            onKeyUp={() => {
              trigger('number');
            }}
            placeholder="Type Your Number"
          />
          {errors.number && (
            <small className="text-danger">{errors.number.message}</small>
          )}
          <input
            className=" w-full mb-5 lg:mb-0 outline-none border-2 bg-gray-100 focus:border-primary px-20 rounded py-5 "
            type="email"
            {...register('email', {
              required: 'Email is Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            onKeyUp={() => {
              trigger('email');
            }}
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}

          <input
            className=" w-full mb-5 lg:mb-0 outline-none border-2 bg-gray-100 px-20 focus:border-primary rounded py-5 lg:py-0"
            type="email"
            {...register('email', { required: true, maxLength: 20 })}
            placeholder="Write your Subject"
          />

          <div className=" col-span-2">
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
              onKeyUp={() => {
                trigger('message');
              }}
            ></textarea>
            {errors.message && (
              <small className="text-danger">{errors.message.message}</small>
            )}
          </div>

          <input
            className="bg-gradient-to-r from-indigo-500 outline-none border-2 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 btn  col-span-2 font-bold rounded-lg  px-6 md:w-2/6   py-2 text-white mx-auto lg:ml-0"
            type="submit"
            value="SEND MESSAGE"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
