import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)

    }}
    className="scroll">
    <div style={{ height: "300vh" }}>
      <div className="dot">
        <h1>Hey There!</h1>
        <br /><br />
       My name is <span>Chris Chen</span>. I like Basketball and Apple, but more importantly, I build things for the web
       <br /><br />
       Here are a few technologies I've been working with recently:
       <br /><br />
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Three.js</li>
          <li>React-three-fiber</li>
          <li>Blender</li>
        </ul>
        <br />
        <span>
          I am currently looking for an internship as a Front-End Developer
        </span>


      </div>
    </div>
    <div style={{ height: "150vh" }}>
      <div className="dot">
        <h1>Doctor</h1>
        <br /><br />
       Being a boy in an asian household, becoming a doctor seemed like one of the few career paths that doesn't lead to my parents' 'disappointment'
       <br /><br />

       I worked hard and got really good grades in my IB exams and got into Med school at <span>University of Melbourne</span>
        <br /><br />
       However, it did not take too many lab rats to make me realised that being a doctor might not be an option for me due to my hemophobia
      </div>
    </div>
    <div style={{ height: "250vh" }}>
      <div className="dot">
        <h1>Biochemical Engineering</h1>
        <br /><br />
        While I was hesitating, I got an offer from the other side of the globe -- <span>University College London (UCL) </span>studying Biochemical Engineering
        <br /><br />

        It did not take me long to make the decision because I did not want to waste the great opportunity and most importantly, the name sounded much less 'bloody'
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Private Equity</h1>
        <br /><br />
    Most of my London hall mates come from Finance background. Under the influence, I started to be interested in investing. In summer 2019, I got an internship opportunity at a private equity firm as an <span>analyst</span>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>MBA</h1>
        <br /><br />
        Upon graduation, I wanted to further my study in business side of the story. Combining with my technical Know-How from my undergraduate study, I will be an ideal candidate for pharmaceutical investment/consulting companies
        <br /><br />
I leveraged my undergraduate First Class Honor degree into <span>London School of Economics and Political Science (LSE) & Yale University MBA program</span>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>WHY?</h1>
        <br /><br />
        <span>But what do all of these have to do with Front-End development</span>
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="dot">

      </div>
    </div>

  </div>
))

export default Overlay
