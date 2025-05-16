'use client'

import React from 'react'
import Link from "next/link";
import {IoArrowForward} from "react-icons/io5";
import {toast} from "react-toastify";
import axios from "axios";
import {setCookie} from "@/util";
import {BASE_URL, encryptLS} from "@/util/nonServer";
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

        try {
            const res = await toast.promise(axios.post(`${BASE_URL}/api/login`, data), {pending: 'Please wait...', success: 'Welcome back!'})

            if (res.status === 200 && res.data.success) {
                await setCookie('entityToken', res.data.token)
                encryptLS('memo', res.data.entity)
                return router.push('/dashboard')
            } else {
                toast.error(res.data.message)
            }
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.log(e)
                toast.error(`${e.message}`)
            }
        }
    }

    return (
        <form action={handleSubmit}
              className='w-full lg:w-[30rem] shadow-lg h-max rounded-xl ring-1 ring-gray-300 bg-base-100 p-5 mb-6'>
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
    )
}
export default LoginForm
