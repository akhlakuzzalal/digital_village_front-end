import React from 'react';
import { Link } from 'react-router-dom';
import HelpRequest from '../HelpRequest/HelpRequest';

const DonateTap = () => {
    const [openTab, setOpenTab] = React.useState(1);
    var color = 'green';
    return (
        <>
      <div className="flex flex-wrap w-full">
        <div className="w-full items-center justify-center">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Donation Payment
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Donation Help Request
              </a>
            </li>
           
          </ul>
          <div className="flex flex-cols-1">
            <div className="px-3 py-3  w-full  flex items-center justify-center content-center">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <form class="max-w-xl m-4 p-6 bg-white rounded shadow-xl">
                <p class="text-gray-800 font-medium">Donar information</p>
                <div class="">
                <label class="block text-sm text-gray-00" for="cus_name">Name</label>
                <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"/>
                </div>
                <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_email">Email</label>
                <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"/>
                </div>
                <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_email">Your Massege</label>
                <textarea class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your  Massege" aria-label="Email"/>
                </div>
                <div class="mt-2">
                <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
                <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email"/>
                </div>
                <div class="mt-2">
                <label class="text-sm block text-gray-600" for="cus_email">City</label>
                <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email"/>
                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                <label class="block text-sm text-gray-600" for="cus_email">Country</label>
                <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email"/>
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label class="block text-sm text-gray-600" for="cus_email">Zip</label>
                <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email"/>
                </div>
                <p class="mt-4 text-gray-800 font-medium">Payment information</p>
                <div class="">
                <label class="block text-sm text-gray-600" for="cus_name">Card</label>
                <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"/>
                </div>
                <div class="mt-4">
                  <Link to="/dashboard">
                  <button class="px-4 py-1 text-white font-light tracking-wider bg-green-900 rounded" type="submit">5000.00</button>
                  </Link>
                
                </div>
                </form>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  {/* tab 2 */}
                <HelpRequest></HelpRequest>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default DonateTap;
