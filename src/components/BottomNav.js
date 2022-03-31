import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div>
        <div className="bg-white md:hidden border border-t-2  fixed py-2 bottom-0 left-0 w-full rounded-t-md z-50">
      <nav className="w-full">
        <ul className="flex items-center justify-between gap-x-2 w-full">
          <li className="text-xs flex-auto text-blue-900 font-bold">
            <Link to="/" className="flex items-center justify-center py-2 w-full" href="#">
              <span>
                <svg width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.72 9.094 19.04 3.72c-2.093-1.466-5.307-1.386-7.32.174L5.04 9.107c-1.333 1.04-2.387 3.173-2.387 4.853v9.2c0 3.4 2.76 6.174 6.16 6.174h14.374c3.4 0 6.16-2.76 6.16-6.16v-9.04c0-1.8-1.16-4.014-2.627-5.04ZM17 24c0 .547-.453 1-1 1-.547 0-1-.453-1-1v-4c0-.546.453-1 1-1 .547 0 1 .454 1 1v4Z"></path>
                </svg>
              </span>
              <span className="mr-1">خانه</span>
            </Link>
          </li>

          <li className="text-xs flex-auto text-gray-400">
            <Link to="/category" className="flex items-center justify-center py-2 w-full" href="#">
              <span>
                <svg width="34" height="34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.257 2.833H7.565c-3.102 0-4.732 1.63-4.732 4.718v2.692c0 3.088 1.63 4.717 4.718 4.717h2.692c3.088 0 4.717-1.629 4.717-4.717V7.55c.014-3.088-1.615-4.718-4.703-4.718ZM26.45 2.833h-2.692c-3.089 0-4.718 1.63-4.718 4.718v2.692c0 3.088 1.63 4.717 4.718 4.717h2.691c3.088 0 4.718-1.629 4.718-4.717V7.55c0-3.088-1.63-4.718-4.718-4.718ZM26.45 19.026h-2.692c-3.089 0-4.718 1.629-4.718 4.717v2.692c0 3.088 1.63 4.718 4.718 4.718h2.691c3.088 0 4.718-1.63 4.718-4.718v-2.692c0-3.088-1.63-4.717-4.718-4.717ZM10.257 19.026H7.565c-3.102 0-4.732 1.629-4.732 4.717v2.692c0 3.103 1.63 4.732 4.718 4.732h2.692c3.088 0 4.717-1.63 4.717-4.718v-2.692c.014-3.102-1.615-4.731-4.703-4.731Z"></path>
                </svg>
              </span>
              <span className="mr-1" >دسته بندی</span>
            </Link>
          </li>

          <li className="text-xs flex-auto text-gray-400">
            <Link to="/posts" className="flex items-center justify-center py-2 w-full" href="#">
              <span>
              <svg width="34" height="34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.277 12.693c-.95-1.048-2.38-1.657-4.364-1.87V9.747a6.9 6.9 0 0 0-2.266-5.114c-1.46-1.332-3.358-1.955-5.327-1.771-3.386.326-6.233 3.598-6.233 7.14v.821c-1.984.213-3.415.822-4.364 1.87-1.374 1.53-1.331 3.57-1.176 4.987l.992 7.89c.298 2.763 1.417 5.597 7.508 5.597h7.905c6.092 0 7.211-2.834 7.509-5.582l.992-7.92c.155-1.402.184-3.442-1.176-4.972ZM16.518 4.831c1.417-.128 2.763.312 3.811 1.26a4.925 4.925 0 0 1 1.615 3.656v.991h-9.888v-.736c0-2.522 2.082-4.944 4.462-5.171Zm-4.59 13.798h-.014a1.42 1.42 0 0 1-1.416-1.416 1.424 1.424 0 0 1 2.848 0 1.42 1.42 0 0 1-1.418 1.416Zm9.917 0h-.014a1.42 1.42 0 0 1-1.417-1.416 1.424 1.424 0 0 1 2.848 0 1.42 1.42 0 0 1-1.417 1.416Z"></path>
              </svg>
            </span>
              <span className="mr-1" >پست ها</span>
            </Link>
          </li>

          <li className="text-xs flex-auto text-gray-400">
            <Link to="/" className="flex items-center justify-center py-2 w-full" href="#">
              <span>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.8335 13.3335C31.3224 13.3335 29.0779 14.5557 27.6779 16.4224C26.2779 14.5557 24.0335 13.3335 21.5224 13.3335C17.2779 13.3335 13.8335 16.8002 13.8335 21.0668C13.8335 22.7113 14.1002 24.2446 14.5446 25.6446C16.7224 32.5557 23.4779 36.7113 26.8113 37.8446C27.2779 38.0002 28.0557 38.0002 28.5224 37.8446C31.8557 36.7113 38.6113 32.5779 40.7891 25.6446C41.2557 24.2224 41.5002 22.7113 41.5002 21.0668C41.5224 16.8002 38.0779 13.3335 33.8335 13.3335Z"></path>
                </svg>
              </span>
              <span className="mr-1" >علاقه مندی ها</span>
            </Link>
          </li>
          <li className="text-xs flex-auto text-gray-400">
            <Link to="/create" className="flex items-center justify-center py-2 w-full" href="#">
              <span>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.8335 13.3335C31.3224 13.3335 29.0779 14.5557 27.6779 16.4224C26.2779 14.5557 24.0335 13.3335 21.5224 13.3335C17.2779 13.3335 13.8335 16.8002 13.8335 21.0668C13.8335 22.7113 14.1002 24.2446 14.5446 25.6446C16.7224 32.5557 23.4779 36.7113 26.8113 37.8446C27.2779 38.0002 28.0557 38.0002 28.5224 37.8446C31.8557 36.7113 38.6113 32.5779 40.7891 25.6446C41.2557 24.2224 41.5002 22.7113 41.5002 21.0668C41.5224 16.8002 38.0779 13.3335 33.8335 13.3335Z"></path>
                </svg>
              </span>
              <span className="mr-1" >افزودن پست</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default BottomNav