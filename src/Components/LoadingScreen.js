import React from 'react'
import '../css/LoadingScreen.css'
import { SpinnerDotted } from 'spinners-react'

const LoadingScreen = () => {
    //const {isLoading, setIsLoading} = useContext(DataContext)
    return (
        <div className='LoadingScreen'>
            <span className='loader'>
                <SpinnerDotted size={125} thickness={150} speed={80} color="#36ad47" />
            </span>
        </div>
    )
}

export default LoadingScreen