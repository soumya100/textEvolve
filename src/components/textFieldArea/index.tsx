import { Activity, ArrowBigDown, ArrowBigUp, Copy, Space, Trash2 } from 'lucide-react'
import { ChangeEvent, FC } from 'react'
import Tooltip from '../Tootip'

interface TextFieldAreaProps {
    textData: string
    onChange(e: ChangeEvent<HTMLTextAreaElement>): void
    handleUpperCaseClick(): void
    handleLowerCaseClick(): void
    handleClearText(): void
    handleCopyToClipBoard(): void
    handleRemoveExtraSpaces(): void
    handleAlternatingText(): void
    handleUnderLine(): void
}

const TextFieldArea: FC<TextFieldAreaProps> = ({ onChange, textData, handleUpperCaseClick, handleLowerCaseClick,
     handleClearText, handleCopyToClipBoard, handleRemoveExtraSpaces, handleAlternatingText,handleUnderLine }) => {

    const buttonCommonCls = `flex gap-1 items-center text-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-500`
    const iconCommonCls= `!cursor-pointer focus:ring-1 focus:ring-blue-500`

    return <div className='flex flex-col gap-5 w-full'>
        <div className='flex justify-between items-center h-10'>
            <h2 className='text-3xl font-semibold text-zinc-500'>
                Enter the text to analyze
            </h2>
            <div className='h-full flex items-center gap-2'>
                <Tooltip toolTipText='Copy' extraCls='!text-green-400'>
                    <button onClick={handleCopyToClipBoard}>
                        <Copy color='#00ff40' size={'20px'} className={`${iconCommonCls}`} />
                    </button>
                </Tooltip>
                <Tooltip toolTipText='Delete' extraCls='text-red-400'>
                    <button onClick={handleClearText}>
                        <Trash2 color='#ff0000' size={'20px'} className={`${iconCommonCls}`}/>
                    </button>
                </Tooltip>
            </div>
        </div>
        <textarea value={textData} onChange={onChange}
            className='border placeholder:text-zinc-300 w-full p-5 
            rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
            placeholder='Enter your text here'
            rows={10}
            autoFocus
            id='myTextArea'
        />
        <div className='flex gap-5 w-full justify-end'>
            <button data-ripple-light="true" type='button'
                className={`${buttonCommonCls} bg-green-400`}
                onClick={handleUpperCaseClick}>
                <ArrowBigUp />
                Convert to uppercase
            </button>
            <button type='button' className={`${buttonCommonCls} bg-red-500`} onClick={handleLowerCaseClick}>
                <ArrowBigDown />
                Convert to lowercase
            </button>
            <button type='button' className={`${buttonCommonCls} bg-blue-600`} onClick={handleAlternatingText}>
                <Activity />
                aLtErNaTe tExT
            </button>
            <button type='button' className={`${buttonCommonCls} bg-indigo-400`} onClick={handleRemoveExtraSpaces}>
                <Space />
                Remove extra spaces
            </button>
        </div>
    </div>
}

export default TextFieldArea