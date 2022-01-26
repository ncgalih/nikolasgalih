import Link from "next/link";
import { useRouter } from "next/router";
import DarkMode from "./DarkMode";

const MenuItem = ({href, title, active}) => {
    return (
        <Link href={href}>
            <button 
                className={`py-1 rounded-full outline-red-500  outline-1
                    ${active
                        ?'bg-red-500 px-4 text-white'
                        :'px-3 bg-none text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-500'}`}>
                {title}
            </button>
        </Link>
    )
}

const Menu = () => {
    const router = useRouter();
    const NavList = [
        {title: 'Home', href: '/'},
        {title: 'Project', href: '/project'},
        {title: 'about', href: '/about'},
        {title: 'contact', href: '/about#contact'}
    ]
    return (
        <div className="fixed bottom-8 w-full flex justify-center">
            <nav className="rounded-full shadow mx-auto flex flex-row bg-gray-100 dark:bg-gray-800 p-1.5">
                {NavList.map(({title, href}, key) => <MenuItem title={title} href={href} active={router.asPath===href} key={key} />)}
                <DarkMode />
                {router.query.name}
            </nav>
        </div>
    )
}

export default Menu;