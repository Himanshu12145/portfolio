import React from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import SkillsTab from "./SkillsTab"
import Row from "react-bootstrap/Row"
import { Jumbotron, Container } from "react-bootstrap"
import { useScrollPosition } from "../../hooks/useScrollPosition"

function Skills({ heading, hardSkills, softSkills }) {
  const skillsTabRef = React.useRef()
  const [isScrolled, setIsScrolled] = React.useState(false)
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true)
    },
    [],
    skillsTabRef
  )
  return (
    <Jumbotron
      ref={skillsTabRef}
      fluid
      className='bg-dark text-light m-0 pt-0'
      id='skills'
    >
      <Container className='p-5 pt-0'>
        <h2 ref={skillsTabRef} className='display-4 pb-5 text-center m-0'>
          {heading}
        </h2>
        <Tabs
          className='skills-tabs'
          defaultActiveKey='hard-skills'
          id='skills-tabs'
        >
          <Tab
            tabClassName='skills-tab bg-secondary border-dark text-light lead  '
            eventKey='hard-skills'
            title='Technical Skills'
          >
            <Row className='pt-3 px-1'>
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName='skills-tab bg-secondary border-dark text-light lead  '
            eventKey='soft-skills'
            title='Soft Skills'
          >
            <Row className='pt-3 px-1'>
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  )
}

export default Skills
