import React from 'react';
import { FcSearch,FcApproval } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageAllUsers = () => {
    return (
        <div class="bg-white p-8 rounded-md w-full">
	    <div class=" flex items-center justify-between pb-6">
		<div>
			<h2 class="text-gray-600 font-semibold">All Users Panel</h2>
			<span class="text-xs">All user set role</span>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex bg-gray-50 items-center p-2 rounded-md border-blue-500 border-1">
                <FcSearch class="h-6 w-6 text-gray-400" />
				<input class="bg-gray-50 outline-none ml-6 w-full rounded-sm md:rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 flex items-center" type="text" name="" id="" placeholder="search..."/>
          </div>
                {/* <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                            class="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
            </div> */}
			</div>
		</div>
		<div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto overflow-y-auto">
				<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Name
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									products
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Created at
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Role
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Status
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-16 h-16">
											<img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Vera Carpenter
												</p>
												<p class="text-gray-900 whitespace-no-wrap">
													Vera Carpenter
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Admin</p>
									<p class="text-gray-900 whitespace-no-wrap">Admin</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 font-semibold ">
                                <select
                                    class="h-full block appearance-none w-full bg-green-300 border-gray-400 px-3 py-1 leading-tight focus:outline-none inset-0 rounded-full text-gray-900">
                                    <option className='inset-0 bg-green-200  rounded-full'>Inactive</option>
                                    <option>Admin</option>
                                    <option>Editor</option>
                                    <option>User</option>
                                </select>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">Activo</span>
									</span>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0  opacity-70 rounded-full"></span>
									<span class="relative"><FcApproval className='text-green-500 text-2xl'/></span>
									</span>
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight g-4">
                                        <span aria-hidden
                                            class="absolute inset-0 opacity-70 rounded-full"></span>
									<span class="relative"><RiDeleteBin6Line className='text-red-500 text-2xl' /></span>
									</span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-16 h-16">
											<img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Vera Carpenter
												</p>
												<p class="text-gray-900 whitespace-no-wrap">
													Vera Carpenter
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Admin</p>
									<p class="text-gray-900 whitespace-no-wrap">Admin</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 font-semibold ">
                                <select
                                    class="h-full block appearance-none w-full bg-green-300 border-gray-400 px-3 py-1 leading-tight focus:outline-none inset-0 rounded-full text-gray-900">
                                    <option className='inset-0 bg-green-200  rounded-full'>Inactive</option>
                                    <option>Admin</option>
                                    <option>Editor</option>
                                    <option>User</option>
                                </select>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">Activo</span>
									</span>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0  opacity-70 rounded-full"></span>
									<span class="relative"><FcApproval className='text-green-500 text-2xl'/></span>
									</span>
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight g-4">
                                        <span aria-hidden
                                            class="absolute inset-0 opacity-70 rounded-full"></span>
									<span class="relative"><RiDeleteBin6Line className='text-red-500 text-2xl' /></span>
									</span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-16 h-16">
											<img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Vera Carpenter
												</p>
												<p class="text-gray-900 whitespace-no-wrap">
													Vera Carpenter
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Admin</p>
									<p class="text-gray-900 whitespace-no-wrap">Admin</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 font-semibold ">
                                <select
                                    class="h-full block appearance-none w-full bg-green-300 border-gray-400 px-3 py-1 leading-tight focus:outline-none inset-0 rounded-full text-gray-900">
                                    <option className='inset-0 bg-green-200  rounded-full'>Inactive</option>
                                    <option>Admin</option>
                                    <option>Editor</option>
                                    <option>User</option>
                                </select>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">Activo</span>
									</span>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0  opacity-70 rounded-full"></span>
									<span class="relative"><FcApproval className='text-green-500 text-2xl'/></span>
									</span>
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight g-4">
                                        <span aria-hidden
                                            class="absolute inset-0 opacity-70 rounded-full"></span>
									<span class="relative"><RiDeleteBin6Line className='text-red-500 text-2xl' /></span>
									</span>
								</td>
							</tr>
							
						</tbody>
					</table>
					<div
						class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
						<div class="inline-flex mt-2 xs:mt-0">
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-400 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
							&nbsp; &nbsp;
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-400 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default ManageAllUsers;