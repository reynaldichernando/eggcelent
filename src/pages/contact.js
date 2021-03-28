import React from 'react'

const Contact = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-blue-300">
            <h1 className="md:text-9xl text-3xl uppercase font-black">
                Contact Us
            </h1>
            <form className="mt-8 md:w-96 w-3/5" action="#" method="POST" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                    <label htmlFor="name" className="block w-full mt-4">
                        <span className="text-white">Full name</span>
                        <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label htmlFor="email" className="block w-full mt-4">
                        <span className="text-white">Email address</span>
                        <input type="text" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label htmlFor="detail" className="block w-full mt-4">
                        <span className="text-white">Message</span>
                        <textarea name="detail" id="detail" rows="5" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    
                    <input type="submit" value="Submit" className="mt-10 px-4 py-1 rounded-full bg-white text-yellow-500 cursor-pointer border border-yellow-200 hover:bg-yellow-500 hover:border-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2" />
                </div>
            </form>
        </div>
    )
}

export default Contact
