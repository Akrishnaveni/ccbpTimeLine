import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="project-url" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
