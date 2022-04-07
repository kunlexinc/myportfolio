import React from "react";

import "./service.css";
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return <section id="service">
    <h5>What I Offer</h5>
    <h2>Services</h2>


    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Figma</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>Photoshop</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>After Effect</p>
        </li>

        

        </ul>

      </article>

      {/* End of UI/UX */}

      <article className="service">
        <div className="service__head">
          <h3>Web development</h3>
        </div>

        <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Github</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>Terminal</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>Bitbucket</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>Amazon Web Service</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>Heroku</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>GraphQL APIs</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>Next JS</p>
        </li>

        </ul>

      </article>

      <article className="service">
        <div className="service__head">
          <h3>Certification</h3>
        </div>

        <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Microsoft Technology Associate: Introduction Python Programming</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>Oracle Certified Associate, Java SE 7 Programmer</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>Microsoft Technology Associate: Networking Fundamentals (MTA)</p>
        </li>

        <li>
          <BiCheck className="service__list-icon"/>
          <p>Oracle Autonomous Database Cloud 2019 Certified Specialist</p>
        </li>


        </ul>

      </article>

    </div>
     
    
    
    
    
    
  </section>;
};

export default Services;
