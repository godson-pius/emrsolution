'use client'

import React from 'react'
import {toast} from "react-toastify";
import axios from "axios";
import {BASE_URL} from "@/util/nonServer";
import {getCookie} from "@/util";

const ClaimForm = () => {

    const handleSubmit = async (formData: FormData) => {
        try {
            const token = await getCookie('entityToken');
            const data = {
                fullname: formData.get('name') as string,
                identityNum: formData.get('idNum') as string,
                phone: formData.get('phone') as string,
                services: formData.get('services') as string,
                admissionDate: formData.get('admDate') as string,
                date: new Date().toLocaleString(),
            }

            const res = await toast.promise(axios.post(`${BASE_URL}/api/claim`, data, {
                headers: {'Authorization': `Bearer ${token}`},
            }), {pending: 'Please wait...'})

            if (res.status === 201) {
                toast.success("Claimed Successfully!")
                return;
            }
            toast.error('Please check inputs and try again!')
        } catch (e) {
            if (e instanceof Error) {
                toast.error(`${e.message}`)
            }
        }
    }

    return (
        <main className={'w-full mt-8 flex flex-col justify-center'}>
            {/*<h2 className={'font-medium text-lg'}>Start Processing<span className={'animate-pulse'}>...</span></h2>*/}
            <form action={handleSubmit} className='w-full shadow-lg h-max rounded-xl ring-1 ring-gray-300 bg-base-100 p-5 mt-3'>

                <div className={'w-full grid lg:grid-cols-2 gap-4'}>
                    <div className="flex flex-col">
                        <label htmlFor="name">Patient Name</label>
                        <input type="name" name="name" id="name" required={true} placeholder='Enter your patient name'
                               className='ring-1 ring-gray-200 p-3 rounded-lg font-thin mt-1 text-sm border-none outline-none focus:ring-blue-700 duration-500'/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="idNum">Identity Number</label>
                        <input type="text" name="idNum"
                               id="idNum" placeholder='Enter Identity Number'
                               required={true}
                               className='ring-1 ring-gray-200 p-3 rounded-lg font-thin mt-1 text-sm border-none outline-none focus:ring-blue-700 duration-500'/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" name="phone"
                               id="phone" placeholder='Enter Phone Number'
                               required={true}
                               className='ring-1 ring-gray-200 p-3 rounded-lg font-thin mt-1 text-sm border-none outline-none focus:ring-blue-700 duration-500'/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="services">Services</label>
                        <select name="services" id="services" required={true}
                                className='ring-1 ring-gray-200 p-3 rounded-lg font-thin mt-1 text-sm border-none outline-none focus:ring-blue-700 duration-500'>
                            <option value="" defaultValue={'Choose Service'}>Select Service</option>
                            <option value="Consultancy">Consultancy</option>
                            <option value="Medication">Medication</option>
                            <option value="Admission">Admission</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="admDate">Admission Date</label>
                        <input type="date" name="admDate"
                               required={true}
                               id="admDate" placeholder='Enter Admission Date'
                               className='ring-1 ring-gray-200 p-3 rounded-lg font-thin mt-1 text-sm border-none outline-none focus:ring-blue-700 duration-500'/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="date">Today Date</label>
                        <input type="text" name="date" disabled={true} value={new Date().toString()}
                               id="date" placeholder='Enter Admission Date'
                               required={true}
                               className='ring-1 ring-gray-200 text-gray-500 p-3 rounded-lg font-thin mt-1 text-sm border-none outline-none focus:ring-blue-700 duration-500'/>
                    </div>
                </div>

                <button type="submit" className='w-full btn bg-blue-500 hover:bg-blue-500 text-white my-10 rounded-lg p-2 cursor-pointer'>Claim</button>
            </form>
        </main>
    )
}
export default ClaimForm
