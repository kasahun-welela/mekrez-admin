import React from "react";
import "./style.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { MdKeyboardArrowDown, MdManageAccounts } from "react-icons/md";
function SideBar() {
  return (
    <>
      <aside class="w-64  mt-1" aria-label="Sidebar">
        {" "}
        <div
          class="overflow-y-auto  h-screen py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"
          id="mobile-menu"
        >
          <ul class="space-y-2">
            <li>
              <a
                href="/dashboard"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiOutlineDashboard className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MdManageAccounts className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item=""
                >
                  Manage User
                </span>
                <MdKeyboardArrowDown className="w-6 h-6" />
              </button>
              <ul id="dropdown-example" class="hidden py-2 space-y-2">
                <li>
                  <a
                    href="/create-account"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Create Account
                  </a>
                </li>
                <li>
                  <a
                    href="/update-account"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    XXXXXXX
                  </a>
                </li>
              </ul>
            </li>
            {/* manage product start */}
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-product"
                data-collapse-toggle="dropdown-product"
              >
                <MdManageAccounts className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item="dropdown"
                >
                  Manage Products
                </span>
                <MdKeyboardArrowDown className="w-6 h-6" />
              </button>
              <ul id="dropdown-product" class="hidden py-2 space-y-2">
                <li>
                  <a
                    href="/create-account"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add Products
                  </a>
                </li>
                <li>
                  <a
                    href="/update-account"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update products
                  </a>
                </li>
                <li>
                  <a
                    href="/view-product"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    View product
                  </a>
                </li>
              </ul>
            </li>
            {/* manage product end */}

            {/* manage catagories start */}
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-catagory"
                data-collapse-toggle="dropdown-catagory"
              >
                <BiCategory className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item="dropdown"
                >
                  Manage Catagory
                </span>
                <MdKeyboardArrowDown className="w-6 h-6" />
              </button>
              <ul id="dropdown-catagory" class="hidden py-2 space-y-2">
                <li>
                  <a
                    href="/create-category"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Create category
                  </a>
                </li>
                <li>
                  <a
                    href="/update-category"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update category
                  </a>
                </li>
                <li>
                  <a
                    href="/view-category"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    View category
                  </a>
                </li>
              </ul>
            </li>

            {/* manage category end */}

            {/* manage shop start */}
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-shop"
                data-collapse-toggle="dropdown-shop"
              >
                <BsShop className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item="dropdown"
                >
                  Manage shop
                </span>
                <MdKeyboardArrowDown className="w-6 h-6" />
              </button>
              <ul id="dropdown-shop" class="hidden py-2 space-y-2">
                <li>
                  <a
                    href="/create-shop"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Create shop
                  </a>
                </li>
                <li>
                  <a
                    href="/update-shop"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update shop
                  </a>
                </li>
              </ul>
            </li>

            {/* manage shop end */}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
