import React from 'react'
import './Guide.css'
import StepCard from '../StepCard/StepCard'
import { assets } from '../../assets/assets'


const Guide = () => {
  return (
    <div className='outher' id='guide'>
      <h1>Guide Tour</h1>
      <div className="guide">
        <div className="guide-row">
          <StepCard
            stepNumber={1}
            stepImage={assets.Login}
            stepTitle="Create or Log In to Your Account"
            stepDescription="Access the website and click Sign In or Log In to enter as a host or team member."
          />
          <div className="arrow"></div>
          <StepCard
            stepNumber={2}
            stepImage={assets.Todo}
            stepTitle="Explore the Dashboard"
            stepDescription="Hosts create tasks and assign them to team members, specifying deadlines and priorities for the current week."
            isCenter={true}
          />
          <div className="arrow"></div>
          <StepCard
            stepNumber={3}
            stepImage={assets.Progress}
            stepTitle="Track Progress"
            stepDescription="Both roles can track the status of tasks, ensuring clarity on deadlines and completion."
          />
        </div>
      </div>
    </div>
  )
}

export default Guide