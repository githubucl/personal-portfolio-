(this["webpackJsonpcamera-scroll"]=this["webpackJsonpcamera-scroll"]||[]).push([[0],{50:function(e,t,r){},55:function(e,t,r){"use strict";r.r(t);var o=r(32),c=r.n(o),i=r(7),s=(r(50),r(16)),a=r(59),n=r(60),l=r(10),j=r(12),h=r(20),m=r(5),b=r(57),d=r(56),O=r(58),x=r(6),g=["scroll","raycaster"];function u(e){var t=e.scroll,r=(e.raycaster,Object(h.a)(e,g)),o=Object(i.useRef)(),c=Object(i.useRef)(0),a=Object(b.a)("/map.glb"),n=a.nodes,u=a.materials,y=a.animations,p=Object(d.a)(y,o),f=p.actions,v=p.mixer,M=Object(i.useState)(!1),w=Object(j.a)(M,2),T=w[0],_=w[1];Object(i.useEffect)((function(){document.body.style.cursor=T?"pointer":"auto",T?o.current.getObjectByName("button").children[1].material.color.set("white"):o.current.getObjectByName("button").children[1].material.color.set("#8BB8C2")}),[T]),Object(i.useEffect)((function(){f["CameraAction.018"].play(),f.clampWhenFinished=!0}),[]);return Object(s.b)((function(e){var r=e.clock.elapsedTime;o.current.children[4].scale.x=(.1*Math.sin(r)+1)/80,o.current.children[4].scale.z=(.1*Math.sin(r)+1)/80,c.current=m.MathUtils.lerp(c.current,f["CameraAction.018"]._clip.duration*t.current,.05),c.current>=50?v.setTime(20.958):c.current<=0?v.setTime(0):v.setTime(c.current),o.current.children[0].children.forEach((function(e,t){e.rotation.x=Math.sin((r+2e3*t)/3)/100,e.rotation.y=Math.cos((r+2e3*t)/2)/100,e.rotation.z=Math.sin((r+2e3*t)/3)/100}))})),Object(x.jsxs)("group",Object(l.a)(Object(l.a)({ref:o},r),{},{dispose:null,children:[Object(x.jsx)("group",{name:"Camera",position:[-29.6056,23.9947,18.1117],rotation:[1.4982,-.0364,-.0843],children:Object(x.jsx)("group",{name:"Camera_Orientation",position:[0,1.1153,0],rotation:[-.0103,-.001,.0024],children:Object(x.jsx)(O.a,{makeDefault:!0,far:1e3,near:.1,fov:47.5974,rotation:[-Math.PI/2,0,0]})})}),Object(x.jsx)("group",{name:"Statue_of_Liberty",position:[25.384,7.4225,8.6914],rotation:[Math.PI/2,0,0],scale:[.0639,.0639,.0639],children:Object(x.jsxs)("group",{name:"Statue",position:[1.5167,1.7089,118.0964],scale:[.5566,.5566,.5566],children:[Object(x.jsx)("mesh",{geometry:n.Mesh002.geometry,material:u["Mat.004"]}),Object(x.jsx)("mesh",{geometry:n.Mesh002_1.geometry,material:u["Mat.006"]})]})}),Object(x.jsxs)("group",{name:"drug",position:[-7.2836,2.946,9.2494],rotation:[-1.8758,.0508,-.1994],scale:[-.489,.246,-.489],children:[Object(x.jsx)("mesh",{geometry:n.coin003.geometry,material:u["white.005"]}),Object(x.jsx)("mesh",{geometry:n.coin003_1.geometry,material:u["white.006"]}),Object(x.jsx)("mesh",{geometry:n.coin003_2.geometry,material:u["blue.002"]}),Object(x.jsx)("mesh",{geometry:n.coin003_3.geometry,material:u["Material.025"]})]}),Object(x.jsxs)("group",{name:"basketball",position:[-28.5501,21.0682,11.2462],rotation:[Math.PI/2,0,0],scale:[.0373,.0373,.0373],children:[Object(x.jsx)("mesh",{geometry:n.lowpolyPeopleSportsMan05002.geometry,material:u["Default OBJ.003"]}),Object(x.jsx)("mesh",{geometry:n.lowpolyPeopleSportsMan05002_1.geometry,material:u["Material.026"]}),Object(x.jsx)("mesh",{geometry:n.lowpolyPeopleSportsMan05002_2.geometry,material:u["Material.027"]}),Object(x.jsx)("mesh",{geometry:n.lowpolyPeopleSportsMan05002_3.geometry,material:u["Material.028"]})]}),Object(x.jsxs)("group",{name:"button",onClick:function(){return window.open("mailto:chrischen@mail.com?subject=Let's come out for a cup of coffee!&body=Hey Chris!")},onPointerOver:function(e){e.stopPropagation(),_(!0)},onPointerOut:function(e){e.stopPropagation(),_(null)},position:[26.3158,3.7881,8.8025],rotation:[1.3527,-.642,.5148],scale:[.0155,.0155,.0155],children:[Object(x.jsx)("mesh",{geometry:n.Text004.geometry,material:u["Material.030"]}),Object(x.jsx)("mesh",{geometry:n.Text004_1.geometry,material:u["Material.031"]})]}),Object(x.jsx)("mesh",{name:"Text",geometry:n.Text.geometry,material:u["Material.029"],position:[26.055,3.9351,8.91],rotation:[1.5404,-.5187,.6869],scale:[.0736,.0736,.0736]}),Object(x.jsxs)("group",{position:[26.3063,3.8337,8.7666],rotation:[1.3527,-.642,.5148],scale:[.008,.008,.008],children:[Object(x.jsx)("mesh",{geometry:n.Text005.geometry,material:u["Material.032"]}),Object(x.jsx)("mesh",{geometry:n.Text005_1.geometry,material:u["Material.033"]}),Object(x.jsx)("mesh",{geometry:n.Text005_2.geometry,material:u["Material.034"]}),Object(x.jsx)("mesh",{geometry:n.Text005_3.geometry,material:u["Material.035"]}),Object(x.jsx)("mesh",{geometry:n.Text005_4.geometry,material:u["Material.036"]}),Object(x.jsx)("mesh",{geometry:n.Text005_5.geometry,material:u["Material.037"]}),Object(x.jsx)("mesh",{geometry:n.Text005_6.geometry,material:u["Material.038"]})]}),Object(x.jsxs)("group",{position:[8.0889,2.6516,8.4098],rotation:[-1.8758,.0508,-.1994],scale:[-.6485,.3262,-.6485],children:[Object(x.jsx)("mesh",{geometry:n.coin004.geometry,material:u["gold.003"]}),Object(x.jsx)("mesh",{geometry:n.coin004_1.geometry,material:u["green.002"]}),Object(x.jsx)("mesh",{geometry:n.coin004_2.geometry,material:u["green_dark.002"]}),Object(x.jsx)("mesh",{geometry:n.coin004_3.geometry,material:u["white.007"]})]})]}))}b.a.preload("/map.glb");var y=Object(i.forwardRef)((function(e,t){e.caption;var r=e.scroll,o=Object(i.useState)("E-mail Me"),c=Object(j.a)(o,2),s=c[0],a=c[1],n=Object(i.useState)(!1),l=Object(j.a)(n,2),h=l[0],m=l[1];return Object(x.jsxs)("div",{ref:t,onScroll:function(e){r.current=e.target.scrollTop/(e.target.scrollHeight-window.innerHeight)},className:"scroll",children:[Object(x.jsx)("div",{style:{height:"170vh"},children:Object(x.jsxs)("div",{className:"dot",children:[Object(x.jsx)("h1",{children:"Hey There!"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"My name is ",Object(x.jsx)("span",{children:"Chris Chen"}),". I like Basketball and Apple, but more importantly, I build things for the web",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Here are a few technologies I've been working with recently:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"JavaScript (ES6+)"}),Object(x.jsx)("li",{children:"React"}),Object(x.jsx)("li",{children:"Three.js"}),Object(x.jsx)("li",{children:"React-three-fiber"}),Object(x.jsx)("li",{children:"Blender"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"contact",onPointerOver:function(){return a("Click to Copy")},onPointerOut:function(){a(h?"E-mail Copied!":"E-mail Me")},onMouseDown:function(){return a("chrischen@mail.com")},onMouseUp:function(){navigator.clipboard.writeText("chrischen@mail.com"),a("E-mail Copied!"),m(!0)},children:s})]})}),Object(x.jsx)("div",{style:{height:"250vh"},children:Object(x.jsxs)("div",{className:"dot",children:[Object(x.jsx)("h1",{children:"Doctor"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Being a boy in an asian household, becoming a doctor seemed like one of the few career paths that doesn't lead to parents' \"disappointment\"",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"I worked hard and got really good grades in my IB exams and got into Med school at ",Object(x.jsx)("span",{children:"University of Melbourne"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"However, it did not take too many lab rats to make me realised that being a doctor might not be an option for me due to my hemophobia"]})}),Object(x.jsx)("div",{style:{height:"200vh"},children:Object(x.jsxs)("div",{className:"dot",children:[Object(x.jsx)("h1",{children:"Biochemical Engineering"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"While I was hesitating, I got an offer from the other side of the globe -- ",Object(x.jsx)("span",{children:"University College London (UCL) "}),"studying Biochemical Engineering",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"It did not take me long to make the decision because I did not want to waste the opportunity to see the other side of the world and most importantly, the name sounded much less 'bloody'"]})}),Object(x.jsx)("div",{style:{height:"250vh"},children:Object(x.jsxs)("div",{className:"dot gold",children:[Object(x.jsx)("h1",{children:"Private Equity"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Most of my London hall mates come from Finance background. Under the influence, I started to be interested in investing. In summer 2019, I got an internship opportunity at a private equity firm as an ",Object(x.jsx)("span",{children:"Analyst"})]})}),Object(x.jsx)("div",{style:{height:"200vh"},children:Object(x.jsxs)("div",{className:"dot",children:[Object(x.jsx)("h1",{children:"MBA"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Upon graduation, I wanted to further my study in business side of the story. Combining with my technical Know-How from my undergraduate study, I will be an ideal candidate for pharmaceutical investment/consulting companies",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"I leveraged my undergraduate First Class Honor degree into ",Object(x.jsx)("span",{children:"London School of Economics and Political Science (LSE) & Yale University MBA program"})]})}),Object(x.jsx)("div",{style:{height:"250vh"},children:Object(x.jsx)("div",{className:"dot ",children:Object(x.jsx)("h1",{className:"why",children:"BUT"})})}),Object(x.jsx)("div",{style:{height:"250vh"},children:Object(x.jsx)("div",{className:"dot ",children:Object(x.jsx)("h1",{className:"why",children:"WHAT DO"})})}),Object(x.jsx)("div",{style:{height:"250vh"},children:Object(x.jsx)("div",{className:"dot ",children:Object(x.jsx)("h1",{className:"why",children:"ALL OF THESE"})})}),Object(x.jsx)("div",{style:{height:"250vh"},children:Object(x.jsx)("div",{className:"dot ",children:Object(x.jsx)("h1",{className:"why",children:"HAVE TO DO WITH THE"})})}),Object(x.jsx)("div",{style:{height:"100vh"},children:Object(x.jsx)("div",{className:"dot"})})]})}));function p(){var e=Object(i.useRef)(),t=Object(i.useRef)(),r=Object(i.useRef)(0);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(s.a,{shadows:!0,onCreated:function(t){return t.events.connect(e.current)},children:[Object(x.jsx)("ambientLight",{intensity:.4}),Object(x.jsxs)(i.Suspense,{fallback:null,children:[Object(x.jsx)(u,{scroll:r,raycaster:{computeOffsets:function(e){return{offsetX:e.clientX,offsetY:e.clientY}}}}),Object(x.jsx)(a.a,{preset:"city"})]})]}),Object(x.jsx)(n.a,{}),Object(x.jsx)(y,{ref:e,caption:t,scroll:r})]})}c.a.render(Object(x.jsx)(p,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.e1c2ea49.chunk.js.map