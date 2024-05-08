'use client'
import TextArea from '@/components/textFieldArea'
import React from 'react'
import { TextFieldAreaHooks } from './Hooks'
import TextInfo from '@/components/TextInfoComponent'

const TextFieldAreaContainer = () => {

  const { textData, handleTextChange, handleUpperCaseClick,handleLowerCaseClick, handleClearText,
     handleCopyToClipBoard, handleRemoveExtraSpaces,handleAlternatingText,handleUnderLine } = TextFieldAreaHooks()

  return (
    <>
      <TextArea onChange={handleTextChange} textData={textData}
       handleUpperCaseClick={handleUpperCaseClick} handleLowerCaseClick={handleLowerCaseClick}
      handleClearText={handleClearText} handleCopyToClipBoard={handleCopyToClipBoard}
       handleRemoveExtraSpaces={handleRemoveExtraSpaces} handleAlternatingText={handleAlternatingText} handleUnderLine={handleUnderLine}/>
      <TextInfo charNo={textData.length} wordNo={textData.length > 0? textData.split(' ').length : 0} 
        lowerCaseNumber={textData.split('').filter(char => char === char.toLowerCase()).length} upperCaseNumber={textData.split('').filter(char => char === char.toUpperCase()).length}
      />
    </>
  )
}

export default TextFieldAreaContainer
