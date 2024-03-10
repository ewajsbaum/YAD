import { useEffect } from 'react'
import { roots } from '../data/roots'
import '../style/About.css'
import thimbleImage from '../images/thimble.jpg'

export function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div>
      <div className="about-hero-image" />
      <div className="about-hero-text">
        <h2>“A generation after YAD was established, I’m proud of what the company
          has grown to stand for:  distinctive <span className="coloredText">assets</span>, professional <span className="coloredText">service</span>, and most
          importantly, long-standing <span className="coloredText">relationships</span> built on mutual <span className="coloredText">trust</span>.”</h2>
        <h3>Marvin Rubner,</h3>
        <h6>Founder and President</h6>
      </div>

      <div className="ourRoots">
        <h1>Our roots go deep.</h1>
        <h2>For over 40 years, we’ve been managing properties across the GTA and beyond. </h2>
        <h2 id="ourRootsBoldText">But it all started with one loft space.</h2>
        <div className="rootSections">
          {
            roots.map((r, index) =>
              <div className={index % 2 === 0 ? "rootSectionEven" : "rootSectionOdd"} key={r.title}>
                <h3>Rooted in <span>{r.title}</span></h3>
                <h4 className="rootSectionSubtitle">{r.subtitle}</h4>
                <p className="rootSectionBody">{r.body}</p>
              </div>
            )
          }
        </div>
      </div>
      <div className="thimble">
        <img src={thimbleImage} className="thimbleImg" alt="thimble" />
        <div className="thimbleText">
          <div className="thimbleStatements">Market fluctuations.<br />Technological advances.<br />Company growth.<br /></div>
          <div className="thimbleParagraph">Maintaining our commitment to our core values, we've consistently led the way in an ever-evolving business landscape.
          </div>
        </div>
      </div>
      <div className="missionTitle">Mission</div>
      <div className="mission">
        <div className="circleDesign"></div>
        <div className="missionGrid">
          <div>Provide a professional management experience — every time.</div>
          <div>Create an environment of mutual trust for everyone — clients, employees, and stakeholders.</div>
          <div>Ensure tenants feel informed    and confident about our process.</div>
          <div>Embrace creative solutions that support our tenants and add value to our properties.</div>
        </div>
      </div>
    </div>

  )
}
