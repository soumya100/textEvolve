import { useTheme } from 'next-themes'
import { FC } from 'react'

interface TextInfoProps {
    wordNo: number
    charNo: number
    upperCaseNumber: number
    lowerCaseNumber: number
}

const TextInfo: FC<TextInfoProps> = ({ charNo, wordNo, upperCaseNumber, lowerCaseNumber }) => {

    const {resolvedTheme: theme}=useTheme()
    const spanTxtCls = `font-bold p-2 border-2  ${theme === 'dark' ? 'border-white text-white' : 'border-black text-black'}`

    return <>
        <h3 className='text-xl font-extrabold underline '>
            Text Information
        </h3>
        <p className='text-sm font-semibold text-zinc-400 leading-9'>
            There are <span className={spanTxtCls}>
                {charNo}
            </span>
            &nbsp;characters,&nbsp;
            <span className={spanTxtCls}>
                {wordNo}
            </span>&nbsp;words,&nbsp;
            <span className={spanTxtCls}>
                {upperCaseNumber}
            </span>&nbsp;capital letters,&nbsp;
            and <span className={spanTxtCls}>
                {lowerCaseNumber}
            </span> number of lowercase letters.
        </p>
    </>
}

export default TextInfo