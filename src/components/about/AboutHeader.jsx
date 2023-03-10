
import './styles/AboutHeader.css';

const AboutHeader = () => {
    return (
        <div className="header-about">
            <div className="about-head">
                <div className="about-head-info">
                    <h2>StartApp ERP</h2>
                </div>
                <div className="cards">
                    <div className="card-holder">
                        <div className="card">
                            
                            <h3>ccompliance</h3>
                            <p>
                                Submit your NAPSA, ZRA, NHIMA, WCFCB returns with the click of a button.
                            </p>
                        </div>
                        <div className="card">
                            <h3>built for Your business</h3>
                            <p>
                                Startapp ERP is a system used to manage and intergrate the important parts of the business enterprise. It is important to your business.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Tasks </h3>
                            <p>
                                Automate manual or routine tasks, implement smarter workflows and gain efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader;