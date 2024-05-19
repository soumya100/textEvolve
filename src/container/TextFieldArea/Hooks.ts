import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast"

export interface checkBoxDataProps {
    title: string
    state: boolean
}

export const TextFieldAreaHooks = () => {
    const [textData, setTextData] = useState<string>('')
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [rangeLength, setRangeLength] = useState<number>(4)

    const [checkBoxData, setCheckBoxData] = useState<checkBoxDataProps[]>([{
        title: "Include Uppercase letters",
        state: false
    },
    {
        title: "Include Lowercase letters",
        state: false
    },
    {
        title: "Include Numbers",
        state: false
    },
    {
        title: "Include Symbols",
        state: false
    }
    ]);

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
            toast.error('Please enter text to convert it to uppercase.')
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
        if(!textData.length){
            toast.error('Please enter text to copy the text to clipboard.')
            return;
        }
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

            toast.success('Text copied to clipboard.');
        } catch (error) {
            toast.error('Something went wrong.');
        }
    }

    //handle remove extra spaces
    const handleRemoveExtraSpaces = () => {
        if(!textData.length){
            toast.error('Please enter some text to remove the extra spaces.');
            return;
        }
        let newText = textData.split(/[ ]+/);
        setTextData(newText.join(" "))
    }

    //handle alternating text
    const handleAlternatingText = () => {

        if(!textData.length){
            toast.error('Please enter some text to alternate it.')
        }

        setTextData(prev => prev.split('').map((char, index) => {
            // Toggle the case based on the index
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join(''))
    }


    //handle clear data
    const handleClearText = () => {
        if(!textData.length){
            toast.error('Please enter some text to clear it.')
            return;
        }
        setTextData('')
        toast.success('Text cleared.')
    }


    //handle passowrd state open
    const handlePasswordState = () => {
        setOpenDialog(prev => !prev)
    }

    // handle range length
    const handleCharacterLength = (e: ChangeEvent<HTMLInputElement>) => {
        setRangeLength(+e.target.value)
    }

    //handle password checkbox
    const handlePasswordCheckBoxChange = (i: number) => {
        const updatedCheckBoxData = [...checkBoxData];
        updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state;
        setCheckBoxData(updatedCheckBoxData);
    }

    //handle generate password
    const resetModalData = () => {
        setCheckBoxData([{
            title: "Include Uppercase letters",
            state: false
        },
        {
            title: "Include Lowercase letters",
            state: false
        },
        {
            title: "Include Numbers",
            state: false
        },
        {
            title: "Include Symbols",
            state: false
        }
        ]);
        setRangeLength(0);
    }

    const handleGeneratePassword = () => {
        let charset = "", generatedPassword = "";

        const selectedOption = checkBoxData.filter((checkbox: checkBoxDataProps) => checkbox.state);
        if (!selectedOption.length) {
            toast.error('Select atleast one option.');
            setTextData("");
            return;
        }

        if(!rangeLength){
            toast.error('Selected password should be length more than zero.');
            setTextData("");
            return;
        }


        selectedOption.forEach((option: checkBoxDataProps) => {
            const title = option.title.toLowerCase()
            switch (title) {
                case "include uppercase letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "include lowercase letters":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "include numbers":
                    charset += "0123456789";
                    break;
                case "include symbols":
                    charset += "!@#$%^&*()+_-{}[]|/;<>=,.':`~";
                    break;
            }
        })

        for (let i = 0; i < rangeLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setTextData(generatedPassword);
        toast.success("Password generated successfully.");
        handlePasswordState();
        resetModalData();
    }



    return {
        textData, handleTextChange,
        handleUpperCaseClick, handleClearText,
        handleLowerCaseClick, handleCopyToClipBoard,
        handleRemoveExtraSpaces, handleAlternatingText,
        handlePasswordState, setOpenDialog, openDialog,
        handleCharacterLength, rangeLength, checkBoxData,
        handlePasswordCheckBoxChange, handleGeneratePassword
    }
}