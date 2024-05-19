'use client'
import TextArea from '@/components/textFieldArea'
import React from 'react'
import { TextFieldAreaHooks } from './Hooks'
import TextInfo from '@/components/TextInfoComponent'

const TextFieldAreaContainer = () => {

  const { textData, handleTextChange, handleUpperCaseClick,handleLowerCaseClick, handleClearText,
     handleCopyToClipBoard, handleRemoveExtraSpaces,handleAlternatingText, setOpenDialog, openDialog,
      handlePasswordState, handleCharacterLength, rangeLength,checkBoxData, handlePasswordCheckBoxChange,
       handleGeneratePassword } = TextFieldAreaHooks()

  return (
    <>
      <TextArea onChange={handleTextChange} textData={textData}
       handleUpperCaseClick={handleUpperCaseClick} handleLowerCaseClick={handleLowerCaseClick}
      handleClearText={handleClearText} handleCopyToClipBoard={handleCopyToClipBoard}
       handleRemoveExtraSpaces={handleRemoveExtraSpaces} handleAlternatingText={handleAlternatingText}
       handlePasswordState={handlePasswordState} openDialog={openDialog} setOpenDialog={setOpenDialog} handleCharacterLength={handleCharacterLength} 
       rangeLength={rangeLength} checkBoxData={checkBoxData} handlePasswordCheckBoxChange={handlePasswordCheckBoxChange}
       handleGeneratePassword={handleGeneratePassword}
       />
      <TextInfo charNo={textData.length} wordNo={textData.length > 0 ? textData.trim().split(/\s+/).length : 0} 
        lowerCaseNumber={textData.split('').filter(char => char!==' ' && char === char.toLowerCase()).length} 
        upperCaseNumber={textData.split('').filter(char => char!==' ' && char === char.toUpperCase()).length}
      />
    </>
  )
}

export default TextFieldAreaContainer
