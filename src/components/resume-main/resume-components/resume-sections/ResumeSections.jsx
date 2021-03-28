// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import { resumeText } from '../../resume-text';
import ResumeSkills from '../resume-skills/ResumeSkills';
import ResumeEducation from '../resume-education/ResumeEducation'
import ResumeProjects from '../resume-projects/ResumeProjects';

function ResumePapers({ resumePaperShowing }) {

  const text = resumeText.pt;

  return (
    <>
      { resumePaperShowing === 'education' ? (
        <ResumeEducation text={text.education} />
      )
      : resumePaperShowing === 'projects' ? (
        <ResumeProjects text={text.projects} />
      )
      : ( <ResumeSkills text={text.skills} />
      )
      }
    </>
  );
}

export default ResumePapers;
