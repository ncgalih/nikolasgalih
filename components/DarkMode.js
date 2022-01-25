import { useState, useEffect } from 'react';
//import { ReactComponent as DarkIcon } from '../assets/dark_icon.svg';
import DarkIcon from '../assets/dark_icon.svg'
import { FaMoon } from 'react-icons/fa'

function DarkMode () {
    const [dark, setDark] = useState(true);
    useEffect(() => {
        const theme = document.querySelector('html').classList;
        dark
        ? theme.add('dark') 
        : theme.remove('dark')
    }, [dark])
    return (
        <button className='py-1 px-2 group hover:bg-red-500 rounded-full' onClick={()=>setDark(!dark)}>
            <FaMoon className="fill-gray-600 dark:fill-gray-400 group-hover:fill-white" />
        </button>
    )
}

export default DarkMode;