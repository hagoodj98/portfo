'use client';
import Button from '@mui/material/Button';


const ProjectLink = ({link, linktext}) => {
  return (
    <div>
      <Button onClick={() => { window.open(`${link}`)}} className="  "> <span className='tw-text-orange tw-font-boldonse'>{linktext}</span></Button>
    </div>
  )
}

export default ProjectLink
