import React, { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRequest } from '../../../../redux/slices/Donations/donationSlice';
import Request from './Request';

const AllHelpRequests = () => {
  const [showModal, setShowModal] = useState(false);
  const applys = useSelector((state) => state.donation.applys);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRequest());
    console.log('applys show');
  }, []);
  console.log(applys, 'applys');
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto  max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue Gray-200 rounded-t">
                  <h3 className="text-2xl font-semibold ">
                    Details of! <span>Help Request</span>
                  </h3>
                  <button
                    className="p-2 ml-auto bg-transparent border-0 text-pink-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-80 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis incidunt numquam voluptate, laborum voluptates
                    minus itaque? Dolores maiores veritatis eaque consequuntur
                    iure est aspernatur ab error quia animi, ipsum id minus
                    beatae laboriosam! Ducimus voluptates eos error labore
                    voluptatibus hic, perferendis laudantium facere praesentium
                    dicta provident adipisci voluptatem. Suscipit voluptatem
                    numquam voluptatum porro quaerat vel repellat ipsa,
                    repudiandae alias nobis doloremque nam exercitationem vero
                    soluta repellendus sint nihil ducimus reiciendis! Voluptatem
                    similique consequatur esse nihil autem in, sequi libero ad
                    est enim, architecto excepturi quas modi neque soluta.
                    Impedit omnis ipsa perferendis animi sed nemo sint? Hic,
                    minima id porro fugiat ipsam eos voluptatem quidem maiores
                    nesciunt. Praesentium rem, voluptatibus doloribus quo
                    laborum cupiditate fugit odio! Quidem vel odit consectetur
                    quod dolore, explicabo quis amet alias quia beatae ducimus
                    laudantium quam quo odio! Doloremque quam illum minima
                    perspiciatis pariatur mollitia sed nesciunt voluptas cum,
                    maiores dolorum eius. Cumque modi quisquam accusamus impedit
                    libero, dolore veniam? Vel quam at iusto eius, delectus
                    libero dignissimos aliquid accusamus, cumque nisi quaerat
                    dolores veritatis perferendis dolore deleniti tempore a
                    error nesciunt iste, rem aperiam porro odio sit! Atque sint
                    saepe debitis accusantium, minus magnam consequuntur
                    officiis voluptas quam et at quas temporibus quos illo
                    consequatur labore porro mollitia incidunt amet quasi. Error
                    deserunt obcaecati voluptatem reiciendis, libero excepturi
                    quod! Cumque dolor modi, a debitis corporis iure! Dolorum
                    totam dolores necessitatibus molestias aliquid quos eligendi
                    consequuntur placeat, odio sapiente debitis repudiandae
                    numquam fuga doloribus quisquam asperiores tempore explicabo
                   
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="flex flex-col my-3">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <h3 className="text-center text-gray-800 text-sm md:text-lg lg:text-2xl">
            All User Request Apply
          </h3>
          <p className="text-center text-gray-600 font-normal text-sm lg:text-lg">
            Admin can any request dynamically delete and update.
          </p>
          <div class="flex items-center justify-between ml-20">
            <div class="flex bg-gray-50 items-center p-2 rounded-md border-blue-500 border-1">
              <FcSearch class="h-6 w-6 text-gray-400" />
              <input
                class="bg-gray-50 outline-none ml-6 w-full rounded-sm md:rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 flex items-center"
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
          </div>
          <div className="py-2 inline-block min-w-full sm:px-4 lg:px-8">
            <div className="rounded-lg">
              <table className="max-w-screen-xl mx-auto">
                <thead className="hidden lg:block bg-indigo-500 font-primary">
                  <tr className="grid grid-cols-1 lg:grid-cols-6 place-items-center">
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Details
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Message
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                        Action
                      </span>
                    </th>
                  </tr>
                </thead>
                {applys?.map((apply) => {
          return <Request key={apply._id} {...apply} />;
        })}
                
      
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllHelpRequests;
