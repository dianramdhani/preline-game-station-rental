export default function Collapse() {
  return (
    <div>
      <button
        type='button'
        className='inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all bg-white border rounded-lg hs-collapse-toggle text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-slate-900 dark:text-white dark:focus:ring-offset-gray-800'
        id='hs-basic-collapse'
        data-hs-collapse='#hs-basic-collapse-heading'
      >
        Collapse
        <svg
          className='hs-collapse-open:rotate-180 w-2.5 h-2.5 text-slate-800 dark:text-white'
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
          />
        </svg>
      </button>
      <div
        id='hs-basic-collapse-heading'
        className='hs-collapse hidden w-full overflow-hidden transition-[height] duration-300'
        aria-labelledby='hs-basic-collapse'
      >
        <div className='px-4 py-3 mt-5 bg-white rounded-lg dark:bg-slate-900'>
          <p className='text-gray-500 dark:text-gray-400'>
            This is a collapse body. It is hidden by default, until the collapse
            plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as
            the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>
    </div>
  )
}
