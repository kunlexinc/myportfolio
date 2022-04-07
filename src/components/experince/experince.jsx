import React from "react";
import "./experince.css";

import{BsPatchCheckFill} from 'react-icons/bs'


const Experince = () => {
  return <section id="experince">
   <h5>My Skills</h5>
   <h2>My Experience</h2>

  <div className="container experience__container">
    <div className="experience__frontend">
      <h3>Frontend Development</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
             <h4>HTML</h4>
          <small className="text-light">Experienced</small>
          </div>
         
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
         <div> <h4>CSS</h4>
          <small className="text-light">Experienced</small>
        </div>
        </article>
        {/* <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>HTML</h4>
          <small className="text-light">Experienced</small>
        </div>
        </article> */}
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className="text-light">Intermediate</small>
        </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className="text-light">Intermediate</small>
       </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>React Js</h4>
          <small className="text-light">Experienced</small>
       </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
         <div>
          <h4>Redux</h4>
          <small className="text-light">Intermediate</small>
        </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>React Native </h4>
          <small className="text-light">Beginner</small>
        </div>
        </article>
      </div>
    </div>

    {/* End Of Frontend */}

    <div className="experience__Backend">
      <h3>Backend Development</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>Django</h4>
          <small className="text-light">Beginner</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>Node Js</h4>
          <small className="text-light">Beginner</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>Java Spring</h4>
          <small className="text-light">Beginner</small>
        </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>Mongo DB</h4>
          <small className="text-light">Intermediate</small>
        </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className='experience__detaiks-icon'/>
          <div>
          <h4>SQL</h4>
          <small className="text-light">Experienced</small>
          </div>
        </article>
        
      </div>
    </div>
  </div>

    </section>;
};

export default Experince;
