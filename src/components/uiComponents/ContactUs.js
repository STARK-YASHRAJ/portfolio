import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import { CiMail } from 'react-icons/ci'
import { FaPhone } from 'react-icons/fa'
import * as Yup from "yup"

const contactSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    message: Yup.string().required("Message is required"),
})

export default function ContactUs() {
    const initialValues = {
        name: "",
        email: "",
        message: ""

    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: contactSchema,
        onSubmit: (values, action) => {
            toast.success("Message send successfully.")
            action.resetForm("")
        }
    })

    return (
        <section className='bg-white py-10' id="Contact">
            <div className='container flex flex-col gap-8 mx-auto md:px-0 px-5'>

                <div className='flex flex-col items-center gap-1 justify-center'>
                    <h1 className='text-center text-4xl md:text-5xl text-slate-700 font-bold'>GET IN TOUCH</h1>
                    <div className='h-0.5 bg-yellow100 w-32 mt-3' />
                    <div className='h-0.5 bg-yellow100 w-20' />
                </div>


                <p className='text-lg text-[#494747] text-center  '>Looking to Grow Your Business through App Development?
                    Let’s Chat for Tips!
                </p>
                <div className='mt-10 grid grid-cols-1 sm:gap-0 gap-8 md:grid-cols-2'>
                    <div className=''>
                        <ul className='flex items-center gap-2'>
                            <li> <FaPhone className='text-gray-700 text-xl' /> </li>
                            <li className='text-gray-700 font-bold text-xl'>Call Me ( whatsapp)</li>
                        </ul>
                        <h1 className='pl-7 pt-1 text-gray-500 font-semibold'>+91 7266929936</h1>
                        <ul className='items-center flex text-center gap-2 mt-5'>
                            <li> <CiMail className='text-gray-700 text-2xl' /> </li>
                            <li className='text-gray-700 font-bold text-xl'>Gmail Me</li>
                        </ul>
                        <p className='pl-7 text-gray-500 font-semibold'>starkyashraj70@gmail.com</p>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col gap-7'>
                            <h1 className='text-slate-700 text-2xl sm:text-3xl font-bold'>Ready to Share Your Thoughts? Let's Start!</h1>
                            <p className='text-[#515253]'>Got an innovative idea for app development, UI/UX design or web app<br /> development? Share your thoughts and let’s collaborate to turn your vision into reality.</p>
                            <div className='flex sm:flex-row flex-col gap-6 sm:gap-7'>

                                <div className='w-full'>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        id='name'
                                        name='name'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        class="border border-gray-400 placeholder:text-gray-500 placeholder:font-medium px-4 py-2 text-gray-700 w-full"
                                    />
                                    {
                                        formik.errors.name && formik.touched.name &&
                                        <span className='text-xs text-red-500'>{formik.errors.name}</span>
                                    }
                                </div>
                                <div className='w-full'>

                                    <input
                                        id='email'
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="email"
                                        placeholder="Your Email"
                                        class="border border-gray-400 placeholder:text-gray-500 placeholder:font-medium px-4 py-2 text-gray-700 w-full"
                                    />
                                    {
                                        formik.errors.email && formik.touched.email &&
                                        <span className='text-xs text-red-500'>{formik.errors.email}</span>
                                    }
                                </div>


                            </div>
                            <div>
                                <textarea placeholder='Enter Your Message' rows={5}
                                    id='message'
                                    name='message'
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className='placeholder:text-gray-500 placeholder:font-medium border border-gray-400 px-4 py-2 text-gray-700 w-full' />
                                {
                                    formik.errors.message && formik.touched.message &&
                                    <span className='text-xs text-red-500'>{formik.errors.message}</span>
                                }

                            </div>
                            <button type='submit' className='py-3 px-2 w-44 bg-yellow100 rounded transition delay-150 duration-300 ease-in-out text-white hover:bg-slate-700'>Send Me</button>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
