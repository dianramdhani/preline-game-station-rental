export default function MegaMenu() {
  return (
    <header className='relative z-50 flex flex-wrap w-full py-4 text-sm bg-white rounded-md sm:justify-start sm:flex-nowrap dark:bg-gray-800'>
      <nav
        className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <a
            className='flex-none text-xl font-semibold dark:text-white'
            href='#'
          >
            Brand
          </a>
          <div className='sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
              data-hs-collapse='#navbar-collapse-basic'
              aria-controls='navbar-collapse-basic'
              aria-label='Toggle navigation'
            >
              <svg
                className='w-4 h-4 hs-collapse-open:hidden'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
              <svg
                className='hidden w-4 h-4 hs-collapse-open:block'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse-basic'
          className='hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block sm:w-auto sm:basis-auto'
        >
          <div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5'>
            <a
              className='font-medium text-blue-500'
              href='#'
              aria-current='page'
            >
              Active
            </a>

            <div className='hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]'>
              <button
                type='button'
                className='flex items-center w-full font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
              >
                Mega Menu
                <svg
                  className='ml-2 w-2.5 h-2.5 text-gray-600'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </button>

              <div className='hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5'>
                <div className='sm:grid sm:grid-cols-3'>
                  <div className='flex flex-col'>
                    <a
                      className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                      href='#'
                    >
                      About
                    </a>
                    <a
                      className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                      href='#'
                    >
                      Services
                    </a>
                    <a
                      className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                      href='#'
                    >
                      Customer Story
                    </a>
                  </div>

                  <div className='flex flex-col'>
                    <a
                      className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                      href='#'
                    >
                      Careers
                    </a>
                    <a
                      className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                      href='#'
                    >
                      Careers: Overview
                    </a>
                    <a
                      className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                      href='#'
                    >
                      Careers: Apply
                    </a>
                  </div>

                  <div className='flex flex-col'>
                    <a
                      className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                      href='#'
                    >
                      Log In
                    </a>
                    <a
                      className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                      href='#'
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              className='font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
              href='#'
            >
              Link
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
