import { UncontrolledForm } from './UncontrolledForm';
import './App.css';
import { ControlledForm } from './ControlledForm';
import { UncontrolledModal } from './UncontrolledModal';
import { ControlledModal } from './ControlledModal';
import React, {useState} from 'react';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

const StepOne = ({goToNext}) => (
  <>
  <h1>Step 1</h1>
  <button onClick={goToNext}>Next</button>
  </>
)
const StepTwo = ({goToNext}) => (
  <>
  <h1>Step 2</h1>
  <button onClick={goToNext}>Next</button>
  </>
)
const StepThree = ({goToNext}) => (
  <>
  <h1>Step 3</h1>
  <button onClick={goToNext}>Next</button>
  </>
)

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <UncontrolledOnboardingFlow>
        <StepOne/>
        <StepTwo/>
        <StepThree/>
      </UncontrolledOnboardingFlow>
        {/* <UncontrolledForm />
        <ControlledForm/>
        <UncontrolledModal /> */}
        {/* <ControlledModal shouldShow={showModal} onClose={() => setShowModal(false)}>
          <p>This is a controlled Modal</p>
        </ControlledModal >
        <button onClick={() => setShowModal(!showModal)} >{showModal ? 'Hide Modal' : 'Show Modal'}</button> */}
    </div>
  );
}

export default App;
