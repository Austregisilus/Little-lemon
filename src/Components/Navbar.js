import React from "react";
import Logo from "./Assets/Logo.svg";
import {Dialog} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {NavLink} from "react-router-dom";

export const navigation = [
    {
        name: "Home",
        to: "/"
    }, {
        name: "Reservation",
        to: "/Reservation"
    }, {
        name: "Menu",
        to: "/Menu"
    }, {
        name: "Order online",
        to: "/Order"
    }
]

const Navbar = () => {

    const [mobileMenuOpen,
        setMobileMenuOpen] = React.useState(false)

    return (
        <div className="bg-white h-[10vh]">
            <header className="relative inset-x-0 top-0 z-10">
                <nav className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <img className="h-8 w-auto cursor-pointer" src={Logo} alt="Company logo"/>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}>
                            <Bars3Icon className="h-8 w-8"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                className={({isActive}) => {
                                return ('px-3 py-2 rounded-md text-sm font-bold ' + (!isActive
                                    ? ' text-gray-500 hover:bg-slate-100 hover:text-gray-950'
                                    : 'bg-slate-100 text-gray-900'));
                            }}>
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50"/>
                    <Dialog.Panel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <NavLink to="/" className="-m-1.5 p-1.5">
                                <img className="h-8 w-auto" src={Logo} alt=""/>
                            </NavLink>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}>
                                <XMarkIcon className="h-8 w-8" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default Navbar
