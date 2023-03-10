import img from './../../assets/images/landing.png';
import img2 from './../../assets/images/landing2.png';
import img1 from './../../assets/images/landing1.png';

import './styles/modules.css';

const modulesInfo = [
    {
        key: 0,
        img: img2,
        heading: "Accounting Module",
        paragraph: "The Accounting Module enables access to a cost-effective accounting system from anywhere in Zambia and the region; with enabled simplified compliance to regulatory reporting, customized and flexible reporting, enhanced security, easy user navigation and easy integration to other systems.",
        class: "module"
    },
    {
        key: 0,
        img: img1,
        heading: "Human Resource(HR) Management Module",
        paragraph: "The HR module makes management of staff resources easier and more interactive between individual staff and the HR Unit. It further enables efficiency in staff performance management, selection and recruitments, industrial relations and reporting.",
        class: "second"
    },
    {
        key: 0,
        img: img,
        heading: "Payroll Module",
        paragraph: "The Payroll module is a flexible component of the ERP that enables the effective administration of financial records of employees' salaries, wages, bonuses, net pay, and deductions, such as statutory deductions (PAYE, NAPSA, NHIMA). It further goes on to smartly creating statutory upload files containing deductions to be submitted onto the relevant statutory portals. This module also creates salary slips which are automatically sent to employee’s electronic mails.",
        class: "module"
    },
    {
        key: 0,
        img: img1,
        heading: "Project Management Module",
        paragraph: "The Project Management modules allows for tracking of important project metrics and key performance indicators to enhance strategic planning, provide more control over operations and ensure smooth operation of activities. Additionally, the tracking of metrics and KPIs offers a perspective that can help keep the goals and objectives of your institution be aligned. This solution offers an optimized reliable, efficient and robust project management structure that can be used to enhance overall institution performance. ",
        class: "second"
    },
    {
        key: 0,
        img: img2,
        heading: "Customer Relationship Management Module",
        paragraph: "Through dependable systems and processes, the customer relationship management module enables firms to more effectively manage customer contacts, offer support, and preserve connections. It combines organizational processes from marketing, sales, and customer service with features and functionalities that can tactically support important departmental objectives.",
        class: "module"
    }
]

const ContentCards = ( props) => {
    return (
        <div className={props.class} key={props.id}>
            <div className="module-inner-left" style={{
                background: `linear-gradient(to right, #00000065,#00000062), url(${props.img}) no-repeat`,
                backgroundSize: 'cover',
                }}>
                <div>
                    <h2>{props.heading}</h2>
                </div>
            </div>
            <div className="module-inner-right">
                <div className='para'>
                    {props.paragraph}
                </div>
            </div>
        </div>

    );
}

const Modules = () => {
    return (
        <div className="module-hold">
            <h2>Modules In StartApp ERP</h2>

            <div className="module-container">
                {
                    modulesInfo.map ((moduleInfoItem) => (
                       <ContentCards 
                            img={moduleInfoItem.img} 
                            id={moduleInfoItem.key} 
                            class={moduleInfoItem.class}
                            heading={moduleInfoItem.heading}
                            paragraph={moduleInfoItem.paragraph}
                        /> 
                    ))
                }
            </div>
        </div>
    );
}

export default Modules;