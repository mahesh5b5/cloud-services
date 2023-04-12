import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";

const user = {
  name: 'Tom Cook',
  email: 'tom@synitidata.com',
  tenant: 'Syniti data services',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Sign out', href: '/logout' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}

      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {(_) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <NavLink to="/">
                        <img className=' inline-block' src={require('../assets/syniti_logo.png')} width={'100'} alt="logo" />
                        <span className='text-violet-500 mx-1 align-bottom'>Cloud</span>
                      </NavLink>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">

                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className=" mx-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <CommandLineIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className=" mx-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className=" text-left border-r-0 flex max-w-xs bg-gray-800 text-sm focus:outline-none ">
                            <div className='flex flex-col mr-2 justify-start'>
                              <h1 className='text-white text-sm'>{user.name}</h1>
                              <h3 className=' text-gray-400 text-xs'>{user.tenant}</h3>
                            </div>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className='mx-4 text-gray-700'>
                              {user.email}
                              <NavLink to="/" className='block text-xs mt-1 mb-2 text-blue-700 underline underline-offset-1'>Switch account</NavLink>
                            </div>
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <NavLink
                                    to={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </NavLink>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>

    </>
  )
}
