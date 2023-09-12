import { useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const URLpathsProperties = [
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const CSSnavbar =
  "text-lg font-semibold leading-6 text-white transition duration-150 ease-in-out delay-75 hover:text-purple-500";
const CSSnavbarMobile =
  "transition duration-150 ease-in-out delay-75 hover:text-purple-500 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <a
              href="/"
              className="text-white text-4xl transition duration-150 ease-in-out delay-75 hover:text-purple-500"
            >
              ANDREA<span className="font-semibold">ANZA</span>
            </a>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {URLpathsProperties.map((property) => (
            <a key={property.path} href={property.path} className={CSSnavbar}>
              {property.name}
            </a>
          ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p className="text-white">
                ANDREA<span className="font-semibold">ANZA</span>
              </p>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="transition duration-150 ease-in-out delay-75 hover:text-purple-500 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white"
                >
                  About me
                </a>
                {URLpathsProperties.map((property) => (
                  <a
                    key={property.path}
                    href={property.path}
                    className={CSSnavbarMobile}
                  >
                    {property.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
