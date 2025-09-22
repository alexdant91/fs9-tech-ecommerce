import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav class="bg-white dark:bg-gray-800 antialiased">
                <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                    <div class="flex">

                        <div class="flex items-center space-x-8 w-full">
                            <div class="shrink-0">
                                <Link to="/" title="" class="">
                                    <img class="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="" />
                                    <img class="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="" />
                                </Link>
                            </div>

                            <div class="flex justify-between flex-grow">
                                <div className="flex gap-6">
                                    <Link to="/" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Home
                                    </Link>
                                    <Link to="/categories" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Categories
                                    </Link>
                                    <Link to="/search" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Search
                                    </Link>
                                </div>
                                <div className="flex gap-6">
                                    <Link to="/cart" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Cart
                                    </Link>
                                    <Link to="/login" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Login
                                    </Link>
                                    <Link to="/register" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Register
                                    </Link>
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