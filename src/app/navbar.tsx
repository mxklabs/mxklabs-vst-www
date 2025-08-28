import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import React from "react";

const Navbar = () => {
  return (

    <Disclosure
      as="nav"
      className="relative bg-gray-200/90 after:pointer-events-none after:absolute
                 after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-12 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex shrink-0 items-center space-x-4">
          <img
            alt="mxklabs Logo"
            src="logo.svg"
            className="h-8 w-auto"
          />
          <span className="mxklabs-wide-logo text-lg font-roboto font-bold text-gray-800">
            <span className="mxklabs-logo-mxk">mxk</span>
            <span className="mxklabs-logo-labs">labs</span>
            {/* <span className="mxklabs-logo-normal">.co.uk</span> */}
            <span className="mxklabs-logo-slash">/</span>
            <span className="mxklabs-logo-page">vst</span>
          </span>
        </div>
      </div>
    </div>
  </Disclosure>
  );
};

export default Navbar;