import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
    return <div className="min-h-screen bg-[url('/images/hero-image.png')] bg-cover bg-gray-100 flex flex-col justify-center items-center">
   
        <div className="flex-grow flex justify-center items-center">
            <div className="w-full flex flex-col items-center justify-center p-8  ">
                <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
                    Welcome Back
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Sign in to access your account
                </p>
                <SignIn />
                <p className="text-center mt-4 text-gray-600 p-4 shadow-xl w-full bg-white rounded-md">
                    Don't have an account?{" "}
                    <Link href="/sign-up" className="text-blue-600 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    </div>

}