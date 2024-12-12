import { navigation } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import Link from "next/link";
import React from "react";

const FlyoutMenus = () => {
  return (
    <div>
      {" "}
      <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
        <div className="flex h-full space-x-8">
          {navigation.categories.map((category) => (
            <Popover key={category.name} className="flex z-10">
              <div className="relative flex">
                <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                  {category.name}
                </PopoverButton>
              </div>

              <PopoverPanel
                transition
                className="absolute inset-x-1 top-16 text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 top-1/2 bg-gray-50 shadow"
                />

                <div className="relative bg-gray-50">
                  <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                      <div className="col-start-2 grid grid-cols-2 gap-x-8">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-base sm:text-sm"
                          >
                            <img
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                            />
                            <a
                              href={item.href}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 z-10"
                              />
                              {item.name}
                            </a>
                          </div>
                        ))}
                      </div>
                      <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${section.name}-heading`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${section.name}-heading`}
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flex">
                                  <a
                                    href={item.href}
                                    className="hover:text-gray-800"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
          ))}

          {navigation.pages.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
            >
              {page.name}
            </a>
          ))}

          <SignedIn>
            {/* Link đến hóa đơn */}
            <Link
              href="/orders"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
            >
              <span> Hóa đơn</span>
            </Link>
          </SignedIn>
        </div>
      </PopoverGroup>
    </div>
  );
};

export default FlyoutMenus;
