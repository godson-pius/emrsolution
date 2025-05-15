'use client'

import Link from 'next/link'
import {IoArrowForward} from 'react-icons/io5'
import axios from 'axios'
import {redirect} from "next/navigation";
import {toast} from "react-toastify";

export default function Home() {

    const handleSubmit = async (formData: FormData) => {
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

        const res = await toast.promise(axios.post('https://jsonplaceholder.typicode.com/posts', data), {pending: 'Please wait...', success: 'Welcome back!'})
        if (res.status === 201) {
            return redirect('/dashboard');
        }

        toast.error('Please check inputs and try again!')
    }

    return (
        <main className={'w-full h-screen flex flex-col items-center justify-center px-10 lg:px-10'}>
            <form action={handleSubmit} className='w-full lg:w-[30rem] shadow-lg h-max rounded-xl ring-1 ring-gray-300 bg-base-100 p-5 mb-6'>
                <h2 className='font-semibold text-xl mb-3'>Login to your account</h2>

                <div className="flex flex-col my-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email"
                           placeholder='Enter your email address'
                           className='ring-1 ring-gray-200 p-3 rounded-lg font-thin mt-1 text-sm border-none outline-none focus:ring-blue-700 duration-500'/>
                </div>

                <div className="flex flex-col mt-5 mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"
                           id="password" placeholder='Enter your password'
                           className='ring-1 ring-gray-200 p-3 rounded-lg font-thin mt-1 text-sm border-none outline-none focus:ring-blue-700 duration-500'/>
                </div>

                <Link href={'#'} className='text-sm link flex items-center gap-1 text-blue-800'>Forgot
                    password <IoArrowForward/> </Link>

                <button type="submit"
                        className='w-full btn bg-blue-500 hover:bg-blue-500 text-white my-5 rounded-xl p-2 cursor-pointer'>Sign
                    in
                </button>
            </form>
            <hr className={'my-2 w-34 opacity-10'} />
            <p className={'opacity-20 text-sm'}>secured by <span className={'font-medium'}>EMR-SOLUTION</span></p>
        </main>
    );
}
