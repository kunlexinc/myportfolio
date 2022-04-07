import React from "react";

import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/imh12.jpg";
import img3 from "../../assets/img13.JPG";
import img4 from "../../assets/img14.JPG";
import img5 from "../../assets/img15.JPG";



const data = [
  {
    id: 1,
    image: img2,
    title: "Kwaralive App",
    github: "https//www.github.com",
    demo: "https://play.google.com/store/apps/details?id=com.kwaralive.app",
  },
  {
    id: 2,
    image: img3,
    title: "Platform Homes",
    github: "https//www.github.com",
    demo: "https://platformleads.com",
  },
  {
    id: 3,
    image: img4,
    title: "OAP TV App",
    github: "https//www.github.com",
    demo: "https://opeyemiakintundetv.com",
  },
  {
    id: 4,
    image: img5,
    title: "Food Ordering App",
    github: "https://github.com/kunlexinc/Food-ordering-App",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((info) => {
          return (
            <article id={info.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={info.image} alt="portfolio1" />
              </div>
              <h3>{info.title}</h3>
              <div className="portfolio__item-cta">
                <a href={info.github} target="_blank" className="btn">
                  Github
                </a>
                <a href={info.demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={img1} alt="portfolio1"/>
        </div>
        <h3>This is a portfolio title</h3>
        <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">Github</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>

        </div>
    </article>

    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={img1} alt="portfolio1"/>
        </div>
        <h3>This is a portfolio title</h3>
        <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">Github</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>

        </div>
    </article>

    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={img1} alt="portfolio1"/>
        </div>
        <h3>This is a portfolio title</h3>
        <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">Github</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>

        </div>
    </article>

    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={img1} alt="portfolio1"/>
        </div>
        <h3>This is a portfolio title</h3>
        <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">Github</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>

        </div>
        
    </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
