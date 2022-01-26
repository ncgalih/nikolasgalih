import { FaReact } from 'react-icons/fa'
import classNames from 'classnames';

const Stack = ({Icon, title, className}) => {
    
    const classStr = classNames("mx-auto h-16 fill-gray-600 dark:fill-gray-400", className)
    return (
        <div className="bg-gray-200 dark:bg-gray-800 rounded h-24 w-24 hover:bg-gray-300 dark:hover:bg-gray-700">
            <Icon size={42} 
                className={classStr} /> 
            <p className="text-gray-600 dark:text-gray-300 text-center">
                {title}
            </p>
        </div>
    )
    
}
export default Stack;