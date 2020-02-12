import React from 'react';
import './Modal.scss'

const Modal = (props) => {
    return <React.Fragment>
        <div className="modal-overlay" id="modal-overlay">  </div>
        <div className="modal" id="modal">
            <div className="modal__content">{props.children} <p>Recruitment ipsum first of all I want to apologise for contacting you randomly out of the blue. The environment is extremely cool, with interesting and exciting media events regularly, with an impressive financial package + amazing benefits. Please let me know if you are interested and i can send some more information. The reason I decided to get in touch is because I am working very closely with some of the most exciting technology-centric companies in London with finding the best talent for their organisations.

                They are known globally as a major technology player – pioneering the digital advances that are shaping and driving the information age. Could do with speaking to when your free for 10 minutes, NO bullshit approach. Hopefully I can differentiate myself from the rest and hopefully you can see why I made the effort to contact you. Rather than send you a long, bumbling, recruiterish email, can I ask you to give me the benefit of the doubt and read this article I wrote today?

                This is the ultimate opportunity for frontend developers in Rotterdam to become a real expert in their field. One of the companies I am working with is one of the world's leading providers of communications services and solutions, serving customers in more than 170 countries. Our team want to meet a Front-End developer who is passionate about gaming technologies, knows his job as a professional and involved in games as crazy.

                So in case you are interested in some new challenging opportunities, I will send you the description of the vacancy. I have specifically chosen to write to you, because you have mentioned angularJS on your profile and you currently work at a well-known Consultancy. Either way lets have a chat? I came across your profile while on the lookout for strong software engineers and was very impressed with your experience and background.

                And if you check out my LinkedIn profile and recommendations therein I hope you will appreciate that if indeed you could be interested in a new position (either now or in the future) then it may be mutually beneficial for us to have a discussion. They are looking for a number of front-end developers at mid-level, senior-level and Lead level to be members of new teams that are being created to work on business critical projects.

                I hope you are well. I came across you profile and I really liked it. I was wondering if you could be looking at new opportunities? I have a contract near Amsterdam </p></div>
            <div className="modal__cta">
            <button className="button button--large button--modal">Actie in de Modal</button>
            </div>
        </div>
    </React.Fragment>
};


export default Modal