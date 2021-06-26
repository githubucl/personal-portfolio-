import React, { forwardRef, useState, useEffect, useRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => {

  const [text, setText] = useState('E-mail Me')
  const [copy, setCopy] = useState(false)
  const scrollBut = useRef()
  useEffect(() => {
    if (scrollBut) {
      scrollBut.current.style.left = `${window.innerWidth / 2}px`
      scrollBut.current.style.marginbottom = `${180}px`

    }
  }, [window.innerWidth, window.innerHeight])
  return (
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)

      }}
      className="scroll">
      <div style={{ height: "170vh" }}>
        <div className="dot">
          <h1>Hey There!</h1>
          <br /><br />
          My name is <span>Chris Chen</span>. I like Basketball and Apple, but more importantly, I build things for the web
          <br /><br />
          Here are a few technologies I've been working with recently:
          <br /><br />
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React + Redux</li>
            <li>Three.js</li>
            <li>AWS</li>
            <li>Blender</li>
          </ul>
          <br />
          <br />
          <span className='contact'
            onPointerOver={() => setText('Click to Copy')}
            onPointerOut={() => { copy ? setText('E-mail Copied!') : setText('E-mail Me') }}
            onMouseDown={() => setText('chrischen@mail.com')}
            onMouseUp={() => {
              navigator.clipboard.writeText('chrischen@mail.com')
              setText('E-mail Copied!')
              setCopy(true)

            }}
          >
            {text}
            {/* <a className="contact" href="/resume.pdf" target="blank" rel="noopener noreferrer">
            Resume
          </a> */}
          </span>
          <section id="section05" ref={scrollBut}>


          </section>

        </div>
      </div>
      <div style={{ height: "250vh" }}>
        <div className="dot">
          <h1>Doctor</h1>
          <br /><br />
          Being a boy in an asian household, becoming a doctor seemed like one of the few career paths that doesn't lead to parents' "disappointment"
          <br /><br />

          I worked hard and got really good grades in my IB exams and got into med school at <span>University of Melbourne</span>
          <br /><br />
          However, it did not take too many lab rats to make me realised that being a doctor might not be an option for me due to my hemophobia
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1>Biochemical Engineering</h1>
          <br /><br />
          While I was hesitating, I got an offer from the other side of the globe -- <span>University College London (UCL) </span>studying Biochemical Engineering
          <br /><br />

          It did not take me long to make the decision because I did not want to waste the opportunity to see the other side of the world and most importantly, the name sounded much less 'bloody'
        </div>
      </div>
      <div style={{ height: "250vh" }}>
        <div className="dot gold">
          <h1>Private Equity</h1>
          <br /><br />
          Most of my London hall mates come from Finance background. Under the influence, I started to be interested in investing. In summer 2019, I got an internship opportunity at a private equity firm as an <span>Analyst</span>
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
      <div style={{ height: "100vh" }}>
        <div className="dot ">
          <h1 className="why">
            BUT WHY
          </h1>
        </div>
      </div>

      <div style={{ height: "100vh" }}>
        <div className="dot ">
          <h1 className="why">
            DO ALL OF THESE
          </h1>
        </div>
      </div>
      <div style={{ height: "100vh" }}>
        <div className="dot ">
          <h1 className="why">
            HAVE TO DO WITH THE
          </h1>
        </div>
      </div>
      <div style={{ height: "250vh" }}>
        <div className="dot ">
          <h1 className="why">

          </h1>
        </div>
      </div>
      <div style={{ height: "100vh" }}>
        <div className="dot">

        </div>
      </div>

    </div>
  )
})

export default Overlay
