import React from 'react'

type Props = {}

const RightSideBar = (props: Props) => {
  return (
    <section className='flex flex-col border-t sticky left-0 h-full max-sm:hidden select-none
    border-primary-grey-200 bg-primary-black text-primary-grey-300 min-2-[227px]
    overflow-y-auto pb-20'>
    <h3 className='px-5 pt-4 tex-xs uppercase'>Design</h3>
    </section>
  )
}

export default RightSideBar