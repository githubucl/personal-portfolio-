import React, { forwardRef, useState, useEffect, useRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => {
  const [text, setText] = useState("E-mail Me")
  const [copy, setCopy] = useState(false)
  // const scrollBut = useRef()
  // useEffect(() => {
  //   if (scrollBut) {
  //     scrollBut.current.style.left = `${window.innerWidth / 2}px`
  //     scrollBut.current.style.marginbottom = `${180}px`
  //   }
  // }, [window.innerWidth, window.innerHeight])
  return (
    <>
      <div
        ref={ref}
        onScroll={(e) => {
          scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        }}
        className="scroll">
        <div style={{ height: "170vh" }}>
          <div className="dot">
            <h1>Hey There!</h1>
            <br />
            <br />
            I'm <span>Chris Chen</span>, a tech enthusiast with a passion for basketball. But what really gets my heart racing is bringing my ideas to life on the web.
            <br />
            <br />
            Here are a few technologies I've been working with recently:
            <br />
            <br />
            <ul>
              <li>TypeScript + Sass</li>
              <li>React + Redux, React Native</li>
              <li>Node.js + Golang</li>
              <li>Three.js</li>
              <li>AWS</li>
            </ul>
            <br />
            <br />
            <span
              className="contact"
              onPointerOver={() => setText("Click to Copy")}
              onPointerOut={() => {
                copy ? setText("E-mail Copied!") : setText("E-mail Me")
              }}
              onMouseDown={() => setText("chrischen@mail.com")}
              onMouseUp={() => {
                navigator.clipboard.writeText("chrischen@mail.com")
                setText("E-mail Copied!")
                setCopy(true)
              }}>
              {text}
              {/* <a className="contact" href="/resume.pdf" target="blank" rel="noopener noreferrer">
            Resume
          </a> */}
            </span>
          </div>
        </div>
        <div style={{ height: "250vh" }}>
          <div className="dot">
            <h1>Doctor</h1>
            <br />
            <br />
            Growing up in an Asian household, the pressure to succeed was palpable. The road to success was often seen as becoming a doctor, and deviating from that path could lead
            to disappointment.
            <br />
            <br />
            With hard work and determination, I aced my IB exams and earned a coveted spot at the med school of <span>University of Melbourne</span>.
            <br />
            <br />
            However, it did not take too many lab rats to make me realized that being a doctor might not be an option for me due to my hemophobia.
          </div>
        </div>
        <div style={{ height: "200vh" }}>
          <div className="dot">
            <h1>Biochemical Engineering</h1>
            <br />
            <br />
            As I stood at a crossroads, an unexpected opportunity presented itself from across the globe - an offer to study Biochemical Engineering at the prestigious
            <span> University College London (UCL)</span>. The thought of exploring a new continent and experiencing a different culture was irresistible.
            <br />
            <br />
            The decision was a no-brainer for me. Not only did the field of Biochemical Engineering seemed to strike a perfect balance between my parents' expectations and my
            personal interests, but it also had a name sounding much less 'bloody' than my previous endeavors. It was a once in a lifetime chance that I wasn't going to let slip
            away.
          </div>
        </div>
        <div style={{ height: "250vh" }}>
          <div className="dot gold">
            <h1>Private Equity</h1>
            <br />
            <br />
            As a freshman, I dived into the world of stock trading and found myself thriving in it. My newfound passion for investment led me to an opportunity of an internship as
            an <span>Analyst</span> at a prestigious private equity firm. It was a chance to gain invaluable experience and further my understanding of the industry.
          </div>
        </div>
        <div style={{ height: "200vh" }}>
          <div className="dot">
            <h1>MBA</h1>
            <br />
            <br />
            With graduation looming, I set my sights on deepening my knowledge of the business side of things. Armed with my technical expertise from my undergraduate studies, I
            was poised to become a valuable asset to pharmaceutical/investment companies.
            <br />
            <br />
            With a firm determination, I leveraged my First Class Honors degree and secured a spot in the coveted joint MBA program at the
            <span> London School of Economics and Political Science (LSE) & Yale University</span>. I was ecstatic to embark on this next chapter, knowing that the prestige of
            these institutions and the knowledge I would gain would open doors to a world of opportunities.
          </div>
        </div>
        <div style={{ height: "100vh" }}>
          <div className="dot ">
            <h1 className="why">BUT WHAT IS THE CONNECTION BETWEEN</h1>
          </div>
        </div>

        <div style={{ height: "100vh" }}>
          <div className="dot ">
            <h1 className="why">THESE</h1>
          </div>
        </div>
        <div style={{ height: "100vh" }}>
          <div className="dot ">
            <h1 className="why">AND</h1>
          </div>
        </div>
        <div style={{ height: "250vh" }}>
          <div className="dot ">
            <h1 className="why">THE</h1>
          </div>
        </div>
        <div style={{ height: "100vh" }}>
          <div className="dot"></div>
        </div>
      </div>
      <section id="section05"></section>
    </>
  )
})

export default Overlay
