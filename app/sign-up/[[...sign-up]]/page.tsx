"use client";

import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-screen bg-[url('/images/hero-image.png')] bg-fixed bg-cover bg-gray-100 flex flex-col justify-center items-center">
            <div className="flex-grow flex justify-center items-center">
                <div className="w-full flex flex-col items-center justify-center p-8">
                    <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
                        Create Account
                    </h1>
                    <p className="text-center text-gray-500 mb-6">
                        Sign up to get started
                    </p>
                    <SignUp />
                    <p className="text-center mt-4 text-gray-600 p-4 shadow-xl w-full bg-white rounded-md">
                        Already have an account?{" "}
                        <Link
                            href="/sign-in"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
