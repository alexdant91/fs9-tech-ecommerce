import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../store/features/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <nav className="bg-white dark:bg-gray-800 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                    <div className="flex">

                        <div className="flex items-center space-x-8 w-full">
                            <div className="shrink-0">
                                <Link to="/" title="" className="">
                                    <img className="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="" />
                                    <img className="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="" />
                                </Link>
                            </div>

                            <div className="flex justify-between flex-grow">
                                <div className="flex gap-6">
                                    <Link to="/" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Home
                                    </Link>
                                    <Link to="/categories" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Categories
                                    </Link>
                                    <Link to="/search" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Search
                                    </Link>
                                </div>
                                <div className="flex gap-6">
                                    <Link to="/cart" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Cart
                                    </Link>
                                    {
                                        user ? (
                                            <>
                                                <Link to="/dashboard" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                                    {user.first_name} {user.last_name}
                                                </Link>
                                                <button onClick={handleLogout} className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                                    Logout
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <Link to="/login" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                                    Login
                                                </Link>
                                                <Link to="/register" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                                    Register
                                                </Link>
                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar