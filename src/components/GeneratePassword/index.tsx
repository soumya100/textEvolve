import { checkBoxDataProps } from '@/container/TextFieldArea/Hooks'
import { Checkbox, Input } from '@headlessui/react'
import { ChangeEvent, FC } from 'react'

interface GeneratePasswordProps {
    rangeLength: number
    handleRangeChange(e: ChangeEvent<HTMLInputElement>): void
    checkBoxData: checkBoxDataProps[]
    handlePasswordCheckBoxChange(i: number): void
}




const GeneratePassword: FC<GeneratePasswordProps> = (props) => {

    const { rangeLength, handleRangeChange, checkBoxData,handlePasswordCheckBoxChange }= props;

    return <div className='p-5 space-y-5'>
        <div>
            <div className='flex justify-between'>
                <h3 className='text-lg font-semibold'>
                    Character Length
                </h3>
                <p className='text-lg fornt-font-semibold'>
                    {rangeLength}
                </p>
            </div>
            <Input
                type='range'
                min="0"
                max="20"
                value={rangeLength}
                onChange={handleRangeChange}
                className={'w-full cursor-pointer'}
            />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {checkBoxData && checkBoxData.length > 0 && checkBoxData.map((data: checkBoxDataProps, idx: number) => (<div key={data.title} className='flex gap-2 items-center h-5'>
                <Checkbox
                    checked={data.state}
                    onChange={()=> handlePasswordCheckBoxChange(idx)}
                    className="group block size-5 rounded border bg-white data-[checked]:bg-blue-500"
                >
                    {/* Checkmark icon */}
                    <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Checkbox>
                <p className='text-sm font-medium '>
                    {data.title}
                </p>
            </div>))}
        </div>
    </div>
}

export default GeneratePassword