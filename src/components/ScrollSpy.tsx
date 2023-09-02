export default function ScrollSpy() {
  return (
    <div
      id='scrollspy-scrollable-parent-1'
      className='max-h-[340px] overflow-y-auto scrollbar-y bg-white rounded-md pb-4 px-6'
    >
      <header className='sticky inset-x-0 top-0 z-40 flex flex-wrap w-full py-4 text-sm bg-white sm:justify-start sm:flex-nowrap'>
        <nav
          className='max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between'
          aria-label='Global'
        >
          <div className='flex items-center justify-between'>
            <a className='flex-none text-xl font-semibold' href='#'>
              Brand
            </a>
            <div className='sm:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600'
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
            className='hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
          >
            <div
              data-hs-scrollspy='#scrollspy-1'
              data-hs-scrollspy-scrollable-parent='#scrollspy-scrollable-parent-1'
              className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 [--scrollspy-offset:-70]'
            >
              <a
                className='text-sm leading-6 text-gray-700 hover:text-gray-500 active'
                href='#first'
              >
                First
              </a>
              <a
                className='text-sm leading-6 text-gray-700 hover:text-gray-500'
                href='#second'
              >
                Second
              </a>

              <div
                data-hs-scrollspy-group
                className='hs-dropdown [--placement:bottom-right]'
              >
                <a
                  id='hs-mega-menu-basic-dr'
                  className='inline-flex items-center justify-center gap-2 mb-3 text-sm leading-6 text-gray-700 group hs-scrollspy-active:text-blue-600 sm:mb-0 hover:text-gray-500'
                  href='javascript:;'
                >
                  Dropdown
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
                </a>

                <div className='hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden'>
                  <a
                    className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-700 leading-6 hover:text-gray-500'
                    href='#third'
                  >
                    Third
                  </a>
                  <a
                    className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-700 leading-6 hover:text-gray-500'
                    href='#fourth'
                  >
                    Fourth
                  </a>
                  <a
                    className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-700 leading-6 hover:text-gray-500'
                    href='#fifth'
                  >
                    Fifth
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div id='scrollspy-1' className='mt-3 space-y-4'>
        <div id='first'>
          <h3 className='text-lg font-semibold'>First</h3>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </div>

        <div id='second'>
          <h3 className='text-lg font-semibold'>Second</h3>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </div>

        <div id='third'>
          <h3 className='text-lg font-semibold'>Third</h3>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </div>

        <div id='fourth'>
          <h3 className='text-lg font-semibold'>Fourth</h3>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </div>

        <div id='fifth'>
          <h3 className='text-lg font-semibold'>Fifth</h3>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </div>
      </div>
    </div>
  )
}
