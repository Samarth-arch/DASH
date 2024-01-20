import PERSON_ICON from './person_icon.png';
import ICM_LOGO from './imc_logo.png';

export default function Navbar(){
    return(
        <nav className="bg-white border-gray-200 dark:bg-gray-900 drop-shadow-2xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={ICM_LOGO} className='w-20' />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Digital Door</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    </svg>
                </button>
                <div className="flex flex-row w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex p-4 items-center ">
                        <li>
                            {/* Add search bar */}
                            <input type="text" placeholder="Search.." className="px-4 py-2 border rounded"/>
                        </li>
                        <li className='ml-4'>
                            <img src={PERSON_ICON} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}