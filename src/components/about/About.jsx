import AboutHeader from './AboutHeader';
import StoryOfERP from './StoryOfERP';
import Modules from './Modules';

import './styles/about.css'

const About = () => {
    return (
        <div className="about-container">
            <AboutHeader />
            <StoryOfERP />
            <Modules />
        </div>
    )
}

export default About;