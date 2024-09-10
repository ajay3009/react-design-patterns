import React, {useState} from 'react';

export const UncontrolledOnboardingFlow = ({children, onFinish}) => {
    const [onboardingData, setOnboardingData]= useState({});
    const [currentStep, setCurrentStep] = useState(0);
    const currentChild = React.Children.toArray(children)[currentStep];

    const goToNext = (stepData) => {
        const nextIndex = currentStep + 1;
        
        setCurrentStep(currentStep + 1)
    }
    
    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext })
    }
    return currentChild;
}