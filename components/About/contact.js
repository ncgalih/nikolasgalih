import { FaEnvelope } from 'react-icons/fa'

const Contact = ({title, sub, email}) => {
 return (
     <section className="mt-8" id="contact">
         <h2 className="text-gray-800 dark:text-gray-100 text-xl">{title}</h2>
         <p className="text-gray-700 dark:text-gray-300">{sub}</p>
         
         <a href={`mailto:${email}`} className='text-gray-100'>
            <button 
                className='rounded bg-red-500 dark:bg-gray-700 pt-1 pb-2 px-4 mt-3 hover:bg-red-600 dark:hover:bg-red-500'>
            <FaEnvelope className='fill-white mr-2 inline-block' />
            Email Me
            </button>
        </a>
     </section>
 )
}

export default Contact;