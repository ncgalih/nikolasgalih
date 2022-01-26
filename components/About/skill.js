import Stack from './item'

const Skill = ({title, tech}) => {
    return (
        <div className='mt-8'>
            <h2 className='text-gray-800 dark:text-gray-100 text-xl mb-4'>{title}</h2>
            <div 
                className={`mx-auto xs:mx-0 sm:mx-0 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 
                    justify-items-center gap-4 w-fit`}>
                {tech.map(({...stack}, key) => <Stack {...stack} key={key} />)}
            </div>
        </div>
    )
}

export default Skill;