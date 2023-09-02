const Info = () => {
  return (
    <div className='w-full p-20 bg-white'>
      <div className='flex flex-col items-start gap-10'>
        <span>
          <h1 className='font-bold text-[20px]'>XBOX Series S</h1>
          <div className='inline-block px-2 py-1 text-white text-10 bg-gray'>
            Occupied
          </div>
        </span>
        <div className='inline-block leading-none text-12'>
          <b className='text-[40px] text-bold'>127</b>m left
        </div>
      </div>
    </div>
  )
}

export default Info
