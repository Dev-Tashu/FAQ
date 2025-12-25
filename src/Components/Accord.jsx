import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

const Accord = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="accordionExample">
      
      
      <div id="header">
        <img src="/icon-star.svg" alt="star icon" />
        <h1 className="faq-heading">FAQs</h1>
      </div>

    
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button d-flex justify-content-between align-items-center ${
              activeIndex === 1 ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => toggleAccordion(1)}
          >
            <strong>
              What is front-end mentor, how will it help me?
            </strong>
            {activeIndex === 1 ? <FaMinusCircle /> : <IoIosAddCircle />}
          </button>
        </h2>

        {activeIndex === 1 && (
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </div>
          </div>
        )}
      </div>

      
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button d-flex justify-content-between align-items-center ${
              activeIndex === 2 ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => toggleAccordion(2)}
          >
            <strong>Is Front-end mentor free?</strong>
            {activeIndex === 2 ? <FaMinusCircle /> : <IoIosAddCircle />}
          </button>
        </h2>

        {activeIndex === 2 && (
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              Yes, Frontend Mentor offers both free and premium coding challenges,
              with the free option providing access to a range of projects
              suitable for all skill levels.
            </div>
          </div>
        )}
      </div>

      
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button d-flex justify-content-between align-items-center ${
              activeIndex === 3 ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => toggleAccordion(3)}
          >
            <strong>
              Can I use front-end mentor projects in my portfolio?
            </strong>
            {activeIndex === 3 ? <FaMinusCircle /> : <IoIosAddCircle />}
          </button>
        </h2>

        {activeIndex === 3 && (
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              Yes, you can use projects completed on Frontend Mentor in your
              portfolio. It's an excellent way to showcase your skills to
              potential employers!
            </div>
          </div>
        )}
      </div>

      
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button d-flex justify-content-between align-items-center ${
              activeIndex === 4 ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => toggleAccordion(4)}
          >
            <strong>
              How can I get help if I'm stuck on a challenge?
            </strong>
            {activeIndex === 4 ? <FaMinusCircle /> : <IoIosAddCircle />}
          </button>
        </h2>

        {activeIndex === 4 && (
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              The best place to get help is inside Frontend Mentor's Discord
              community. There's a help channel where you can ask questions and
              seek support from other community members.
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Accord;
