import React, { FC, ReactNode } from 'react'

interface toolTipInterface{
    children: ReactNode
    toolTipText: string
    extraCls?: string
}
const Tooltip:FC<toolTipInterface> = ({children, toolTipText, extraCls}) => {
  return (
    <div className='has-tooltip'>
    <span className={`tooltip rounded shadow-lg p-1 w-fit bg-gray-100 ${extraCls} -mt-8 text-xs`}>{toolTipText}</span>
    {children}
  </div>
  )
}

export default Tooltip
