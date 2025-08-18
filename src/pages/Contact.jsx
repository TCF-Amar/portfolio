import React, { useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { sendEmail } from '../lib/sendEmail';
import { motion } from 'framer-motion'

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const handleEmailSend = async(e) => {
        e.preventDefault();

        setLoading(true);
        await sendEmail(form)
        setLoading(false);
    }


    return (
        <div className='flex flex-col-reverse md:flex-row gap-6 mt-30 px-4'>
            {/* Contact Form */}
            <motion.div
            
                initial={{ opacity: 0, }}
                animate={{ opacity: 1,  }}
                transition={{ duration: 2 }}
                className='flex-1 flex justify-center px-4'>
                <div className='bg-[#31343855] p-6 flex flex-col gap-6 rounded w-full max-w-2xl'>
                    <h2 className='text-2xl text-[#00ff99] font-semibold'>Let's work together</h2>
                    <p className='text-gray-400 text-sm'>
                        I'm open to freelance projects, collaborations, or full-time roles. Just drop your message!
                    </p>
                    <form ref={form} onSubmit={handleEmailSend} className='flex flex-col gap-4'>

                        {/* Name Fields */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='w-full relative'>
                                <input
                                    type='text'
                                    name="firstname"
                                    placeholder='Firstname'
                                    className='w-full text-sm border border-gray-600 bg-[#1D232A] text-white px-3 py-2 rounded outline-none focus:border-[#00ff99]'
                                    required
                                />
                            </div>
                            <div className='w-full relative'>
                                <input
                                    type='text'
                                    name="lastname"
                                    placeholder='Lastname'
                                    className='w-full text-sm border border-gray-600 bg-[#1D232A] text-white px-3 py-2 rounded outline-none focus:border-[#00ff99]'
                                    required
                                />
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='w-full relative'>
                                <input
                                    type='email'
                                    name="email"
                                    placeholder='Email'
                                    className='w-full text-sm border border-gray-600 bg-[#1D232A] text-white px-3 py-2 rounded outline-none focus:border-[#00ff99]'
                                    required
                                />
                            </div>
                            <div className='w-full relative'>
                                <input
                                    type='text'
                                    name="phone"
                                    placeholder='Phone Number'
                                    className='w-full text-sm border border-gray-600 bg-[#1D232A] text-white px-3 py-2 rounded outline-none focus:border-[#00ff99]'
                                    required
                                />
                            </div>
                        </div>

                        {/* Service Dropdown */}
                        <div className='w-full relative'>
                            <select
                                name="service"
                                className='w-full text-sm border bg-[#1D232A]  border-gray-600 text-white px-3 py-2 rounded outline-none focus:border-[#00ff99]'
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Fullstack Development">Full Stack Development</option>
                                <option value="Backend Development">Backend Development</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Message Box */}
                        <div className='w-full relative'>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder='Type your message...'
                                className='w-full text-sm border bg-[#1D232A] border-gray-600 text-white px-3 py-2 rounded outline-none focus:border-[#00ff99]'
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type='submit'
                                className='bg-[#00ff99] text-black/60 text-sm px-6 py-2 rounded-full font-semibold hover:bg-[#00cc77] transition-all'
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>

                    </form>

                </div>
            </motion.div>

            {/* Contact Info */}
            <div className='flex-1 flex flex-col justify-center gap-10 text-white px-4'>
                <motion.div
                    initial={{ opacity: 0,y:20 }}
                    animate={{ opacity: 1, y:0 }}
                    transition={{duration:.5}}
                    className='flex items-center gap-3'>
                    <div className='bg-[#37393a] p-4 rounded'>
                        {/* #1D232A */}
                        <FaPhone className='text-[#00ff99]' />
                    </div>
                    <div>
                        <p className='text-gray-400 text-sm'>Phone</p>
                        <span>+91 8435876461</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 , delay:.5}}
                    className='flex items-center gap-3'>
                    <div className='bg-[#37393a] p-4 rounded'>

                        <FaEnvelope className='text-[#00ff99]' />
                    </div>
                    <div>
                        <p className='text-sm text-gray-400'>Email</p>
                        <span>amarjeet@example.com</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 ,delay:1}}
                    className='flex items-center gap-3'>
                    <div className='bg-[#37393a] p-4 rounded'>

                        <FaMapMarkerAlt className='text-[#00ff99]' />
                    </div>
                    <div>
                        <p className='text-sm text-gray-400'>Address</p>
                        <span>Satna, Madhya Pradesh, India</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
