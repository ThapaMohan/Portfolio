import React from 'react';

const Contact = () => {
    return (
        <>
            {/* Contact Section */}
            <section id="contact" className="py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center">Contact Me</h2>
                    <form className="mt-8 max-w-2xl mx-auto">
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded focus:bg-white focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded focus:bg-white focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Message</label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded focus:bg-white focus:border-blue-500"
                                rows="5"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;