import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style/Home.css'
import { advantages } from '../data/yad_advantage'
import { properties } from '../data/featured_properties'
import { testimonials } from '../data/testimonials'
import testimonialA from '../images/testimonials1.jpg'
import testimonialB from '../images/testimonials2.jpg'

export function Home() {
  const [currentTestimonialIndex, setTestimonialIndex] = useState(0);
  const [animateTestimonial, setAnimateTestimonial] = useState(false);

  const showNextTestimonial = () => {
    setAnimateTestimonial(true);

    setTimeout(() => {
      if (currentTestimonialIndex === testimonials.length - 1) {
        setTestimonialIndex(0);
      } else {
        setTestimonialIndex(currentTestimonialIndex + 1);
      }

      setAnimateTestimonial(false);
    }, 300);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <div className="bgImage" />
      <div className="hero">
        <div className="overlay">
          <div className="heroText">
            <h1>Exceptional service, efficient operations, and  personalized approach.</h1>
            <h4>40<span className="styledHeroText">+</span> years of tenant-driven management</h4>
            <div className="linkToProperties"><Link to="/properties">View properties →</Link></div>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="whoWeAre">
          <h5>WHO WE ARE</h5>
          <h2>A Toronto-based real estate management team with a longstanding record for
            reliable management and individualized service for office, retail, and
            multi-residential properties.</h2>
        </div>
        <div className="imageContainer">
          <div className="image" />
        </div>
        <div className="advantageSection">
          <h5>THE YAD ADVANTAGE</h5>
          <h2>Stellar management. Flexible mindset.</h2>
        </div>
        <div className="advantageWindows">
          {
            advantages.map(a =>
              <div className="advantageWindow" key={a.title}>
                <img src={a.icon} alt="icon" />
                <h4>{a.title}</h4>
                <div>{a.content}</div>
              </div>)
          }
        </div>
        <div className="linkToAboutContainer">
          <div className="linkToAbout"><Link to="/about">About us → </Link></div>
        </div>
        <h5 className="featuredPropertiesTitle">FEATURED PROPERTIES</h5>
        <div className="featuredProperties">
          {
            properties.map(p =>
              <div className="featuredProperty" key={p.address}>
                <img src={p.image} alt="property" />
                <div>{p.address}</div>
              </div>)
          }
        </div>
        <div className="testimonials">
          <div className="testimonialImages">
            <img src={testimonialB} alt='interior' />
            <img src={testimonialA} alt='interior' />
          </div>
          <div className="testimonialTitle">
            <h5>TESTIMONIALS</h5>
            <h2>Standards you trust. Service you rely on.</h2>
          </div>
          <div className={`testimonialText ${animateTestimonial ? 'slide-in-out' : ''}`}>
            <h4 className="testimonialCatchphrase">"{testimonials[currentTestimonialIndex].catchphrase}"</h4>
            <div className="testimonialBody">"{testimonials[currentTestimonialIndex].body}"</div>
            <div className="testimonialClient">
              <span>{testimonials[currentTestimonialIndex].client_name}</span>, <span><img src={testimonials[currentTestimonialIndex].client_company} alt="company logo" className="client-company" /></span>
            </div>
          </div>
          <div className="arrow" onClick={() => showNextTestimonial()}>→</div>
        </div>
      </div >
    </div >
  )
}
