import { createContext, React, useState, useEffect } from 'react'
// import apiRequests from '../api/apiRequests'
// import Popup from 'reactjs-popup';
// import axios from 'axios';

const DataContext = createContext({})

export const Context = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    //const [errors, setErrors] = useState({})
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    // const [errorCard, setErrorCard] = useState(false)
    // //const [displayForErrorCard, setDisplayForErrorCard] = useState('none')

    
    // //Apply form
    // const [ formData, setFormData ] = useState({
    //     row_id:'',
    //     name:'',
    //     email:'',
    //     age:'',
    //     discordID:'',
    //     ytLink:'',
    //     rpExp:'',
    //     charName:'',
    //     charBackStory:'',
    //     isRulesAgreed:false
    // })
    // const handleFormChange = (e) => {
    //     const { name, value } = e.target
    //     //console.log(e.target.name)
    //     let error = ''
    //     if(name === 'name' && value.length < 4)
    //         error = 'Invalid Name'
    //     else if(name === 'email' && value.length < 10)
    //         error = 'Invalid Email Address'
    //     else if(name === 'age' && (value < 0 || value > 100 ))
    //         error = 'Invalid Age'
    //     else if(name === 'discordTag' && value.length <= 0)
    //         error = 'Invalid Discord Tag'
    //     else if(name === 'rpExp' && (value < 0 || value > 7))
    //         error = 'Invalid Experience'
    //     else if(name === 'charName' && value.length <  3)
    //         error = 'Invalid Character Name'
    //     else if(name === 'charBackStory')
    //     {
    //         let wordCount = value.split(' ')
    //         if(wordCount.length < 2)
    //             error = 'Minimum 100 words'
    //     }
    //     setErrors({
    //         ...errors,
    //         [name]: error
    //     })
    //     const hasErrors = Object.keys(errors).some(key => errors[key] !== '');
    //     setErrorCard(hasErrors);
        
    //     setFormData({
    //         ...formData,
    //         [name]: name === 'isRulesAgreed' ? !formData.isRulesAgreed : value
    //     })
    // }

    // const [hideCharInfo, showCharInfo] = useState(false)
    // //submit form
    // const submitForm = async (e) => {
    //     e.preventDefault()
    //     if(formData.name !== '' && formData.age !== '' && formData.discordTag  !== '' && formData.rpExp !== '' && formData.charBackStory !== '')
    //     {
    //         try {
    //             formData.row_id = 4
    //             //const baseURL = 'https://v1.nocodeapi.com/kishoreeg/google_sheets/wxqTmMRISINVvPLn/addRows?tabId='
    //             var requestOptions = {
    //                 method: "post",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 redirect: "follow",
    //                 body: JSON.stringify(formData)
    //             }
    //             const response = await fetch("https://v1.nocodeapi.com/kishoreeg/google_sheets/wxqTmMRISINVvPLn/addRows?tabId=sheet1", requestOptions)
    //             await console.log("Response: ", response)
    //         } catch (ex) {
    //             console.log(ex.Message)
    //         }
    //     }
    //     else
    //     setErrors({
    //         general: 'Fill All The Fields'
    //     })
    // }
    // const setAgreed = () => {
    //     setFormData( ...formData, formData.isRulesAgreed=!formData.isRulesAgreed)
    // }
    return (
        <DataContext.Provider value={{
            isLoading, setIsLoading//, submitForm, setAgreed,
            //hideCharInfo, showCharInfo,
           // handleFormChange, formData, errors,
           // errorCard
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext