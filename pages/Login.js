import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <div>
      <section className="bg-gray-50 light:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 light:text-white">
            <img className="w-20 h-20 mr-2 rounded-full" src="images/Gardeniary.png" alt="logo" />
            Gardeniary
          </div>
          <div className="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl light:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 light:bg-gray-700 light:border-gray-600 light:focus:ring-primary-600 light:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 light:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <Link href="/Forgot" className="text-sm font-medium text-primary-600 text-lime-400 hover:text-lime-500 hover:underline light:text-primary-500">Forgot password?</Link>
                </div>
                <button type="submit" className="w-full text-white bg-lime-400 hover:bg-lime-500   font-medium rounded-lg text-sm  text-bold px-5 py-2.5 text-center 
                 ">Sign In</button>
                <p className="text-sm font-light text-gray-500 light:text-gray-400">
                  Don’t have an account yet?
                  <Link href={"/Signup"} className="font-medium text-lime-400 hover:text-lime-500 text-primary-600 hover:underline light:text-primary-500">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login