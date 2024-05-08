import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast"

export const TextFieldAreaHooks = () => {
    const [textData, setTextData] = useState<string>('')

    //handle text change
    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextData(e.target.value)
    }



    //handle uppercase
    const handleUpperCaseClick = () => {
        if (textData.length) {
            setTextData(prev => prev.toUpperCase())
            toast.success('Successfully converted to uppercase.')
            return;
        }
        if (!textData.length) {
            toast.error('Please enter text to convert it to uppercase')
            return;
        }
    }

    //handle lowercase
    const handleLowerCaseClick = () => {
        if (textData.length) {
            setTextData(prev => prev.toLowerCase())
            toast.success('Successfully converted to lowercase.')
            return;
        }
        if (!textData.length) {
            toast.error('Please enter text to convert it to lowercase.')
            return;
        }
    }

    //handle copy to clipboard
    const handleCopyToClipBoard = async () => {
        try {

            // Create a temporary textarea element
            const textarea = document.createElement('textarea');
            textarea.value = textData;
            document.body.appendChild(textarea);

            // Set focus to the textarea
            textarea.focus();
            // Select the text inside the textarea
            textarea.select();

            // Use the newer Clipboard API to copy text
            await navigator.clipboard.writeText(textarea.value);

            // Remove the temporary textarea
            document.body.removeChild(textarea);

            toast.success('Text copied to clipboard');
        } catch (error) {
            toast.error('Something went wrong.');
        }
    }

    //handle remove extra spaces
    const handleRemoveExtraSpaces = () => {
        let newText = textData.split(/[ ]+/);
        setTextData(newText.join(" "))
    }

    //handle alternating text
    const handleAlternatingText = () => {
        setTextData(prev => prev.split('').map((char, index) => {
            // Toggle the case based on the index
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join(''))
    }

    //handle Underline selected text
    const handleUnderLine = () => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            // Get the selected range
            const range = selection.getRangeAt(0);

            // Create a span element with underline style
            const underlineSpan = document.createElement('span');
            underlineSpan.style.textDecoration = 'underline';

            // Wrap the selected range with the underline span
            range.surroundContents(underlineSpan);

            // Update the selected text state
            setTextData(selection.toString());
        }
    }

    //handle clear data
    const handleClearText = () => {
        setTextData('')
        toast.success('Text cleared.')
    }


    return {
        textData, handleTextChange,
        handleUpperCaseClick, handleClearText,
        handleLowerCaseClick, handleCopyToClipBoard,
        handleRemoveExtraSpaces, handleAlternatingText,
        handleUnderLine
    }
}