'use client'
import TextFieldAreaContainer from '@/container/TextFieldArea'
import { FC, useEffect, useState } from 'react'

interface MainComponentProps {

}

const MainComponent: FC<MainComponentProps> = ({ }) => {
  const [mounted, setMounted]=useState(false)
  useEffect(()=>{
    setMounted(true)
  },[])
 if(mounted) return (<div className='flex w-full h-[90vh] items-center justify-center p-10 flex-col gap-5'>
    <TextFieldAreaContainer />
  </div>)
}

export default MainComponent