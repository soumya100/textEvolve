import { Activity, ArrowBigDown, ArrowBigUp, Copy, KeyRound, ShieldPlus, Space, Trash2 } from 'lucide-react'
import { ChangeEvent, FC } from 'react'
import Tooltip from '../Tootip'
import Dialogue from '../Dialogue'
import GeneratePassword from '../GeneratePassword'
import { checkBoxDataProps } from '@/container/TextFieldArea/Hooks'

interface TextFieldAreaProps {
    textData: string
    onChange(e: ChangeEvent<HTMLTextAreaElement>): void
    handleUpperCaseClick(): void
    handleLowerCaseClick(): void
    handleClearText(): void
    handleCopyToClipBoard(): void
    handleRemoveExtraSpaces(): void
    handleAlternatingText(): void
    handlePasswordState(): void
    setOpenDialog(value: boolean): void
    openDialog: boolean
    handleCharacterLength(e: ChangeEvent<HTMLInputElement>): void
    rangeLength: number
    checkBoxData: checkBoxDataProps[]
    handlePasswordCheckBoxChange(i: number): void
    handleGeneratePassword(): void
}

const TextFieldArea: FC<TextFieldAreaProps> = (props) => {

    const { onChange, textData, handleUpperCaseClick, handleLowerCaseClick,
        handleClearText, handleCopyToClipBoard, handleRemoveExtraSpaces, handleAlternatingText, handlePasswordState,
         openDialog, setOpenDialog, handleCharacterLength, rangeLength, checkBoxData, handlePasswordCheckBoxChange, 
         handleGeneratePassword  }=props;

    const buttonCommonCls = `flex gap-1 items-center text-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-500`
    const iconCommonCls = `!cursor-pointer focus:ring-1 focus:ring-blue-500`

    return <>
        <div className='flex flex-col gap-5 w-full'>
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
                            <Trash2 color='#ff0000' size={'20px'} className={`${iconCommonCls}`} />
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
            <div className='flex gap-5 w-full justify-end flex-wrap'>
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
                <button type='button' className={`${buttonCommonCls} bg-teal-500`} onClick={handlePasswordState}>
                    <ShieldPlus />
                    Generate Secure passwords
                </button>
            </div>
        </div>
        <Dialogue open={openDialog} cancelButtonName='Cancel' dialogueTitle='Generate your password'
            handleSuccessClick={handleGeneratePassword} handleCancelClick={handlePasswordState} setOpen={setOpenDialog}
            successButtonName='Generate' icon={<KeyRound className='text-green-500' />}
             iconCls='bg-teal-100' successExtraBtn='bg-green-400 hover:bg-green-500'
            dialogueSubTitle='Generate safe and secure passwords using Evolve Text'>
            <GeneratePassword rangeLength={rangeLength} handleRangeChange={handleCharacterLength}
             checkBoxData={checkBoxData} handlePasswordCheckBoxChange={handlePasswordCheckBoxChange}/>
        </Dialogue>
    </>
}

export default TextFieldArea