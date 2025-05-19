import{u as Z,j as e,C as ee,d as l,F as te,a as oe,b as re,r as c,c as W,A as ae,I as ie,L as u,N as se,m as ne,e as le,f as ce,g as de,S as C,P as G,h as z,i as k,O as me,k as ge,l as pe,n as he,T as ue,B as xe,o as A,G as fe,p as we,q as be,R as je,s as ve,t as Ne}from"./vendor-CIgMpwYN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const R=({start:t,end:o,duration:a})=>{const{ref:i,inView:r}=Z({triggerOnce:!0,threshold:.5});return e.jsx("div",{ref:i,children:r?e.jsx(ee,{start:t,end:o,duration:a,useEasing:!0,easingFn:(s,n,d,g)=>d*(1-Math.pow(2,-10*s/g))+n}):0})},ye=l.footer`
  display: flex;
  align-items: center;
  padding: 2.5rem 4rem;
  justify-content: space-between;
  background-color: var(--black);
  padding-bottom: 4rem;
  border-top: 0.1px solid rgba(255, 255, 255, 0.23);
  .social-container {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    a {
      color: var(--white);
      transition: var(--transition);
    }
    .facebook:hover {
      color: #1877f2;
    }
    .linkedin:hover {
      color: #0077b5;
    }
    .instagram:hover {
      color: #ee2a7b;
    }
  }
  .copy-text {
    font-size: 1.1rem;
    font-family: 'Proxima-Nova', sans-serif;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: end;
    max-width: 20rem;
    text-align: right;
  }
  .designer-link {
    color: #ff0080;
    margin-left: 0.2rem;
    cursor: pointer;
  }
  .logo {
    display: flex;
    align-items: start;
    width: 20%;
    min-width: 8.125rem;
    max-width: 25rem;
    margin-bottom: 0.5rem;
  }

  /*   @media (max-width: 52.5rem) {
    .copy-text {
      max-width: 12rem;
    }
    .developed-by {
      max-width: 20rem;
      line-height: 1.2;
    }
  } */
  @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .social-container {
      align-items: center;
    }

    .copy-text {
      text-align: center;
    }

    .designer-link {
      align-self: center;
    }

    .developed-by {
      max-width: 20rem;
      line-height: 1.2;
    }
  }
`,Ie=()=>e.jsxs(ye,{children:[e.jsx(O,{}),e.jsxs("div",{className:"social-container",children:[e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{target:"_blank",className:"facebook",href:"https://www.facebook.com/profile.php?id=61575004481629",children:e.jsx(te,{})}),e.jsx("a",{target:"_blank",className:"linkedin",href:"#",children:e.jsx(oe,{})}),e.jsx("a",{target:"_blank",className:"instagram",href:"https://www.instagram.com/ignitcrew/",children:e.jsx(re,{})})]}),e.jsx("div",{className:"copy-text",children:e.jsxs("p",{className:"developed-by",children:["IGNITCREW 2023. All Rights Reserved. Developed & Designed By.",e.jsx("a",{target:"_blank",href:"https://portfolio-webpage-jrd.vercel.app/",className:"designer-link",children:"JORDI"})]})})]})]}),Ce="/IGNIT-Crew/assets/logo-Dyo60QEa.png",O=()=>e.jsx("img",{src:Ce,alt:"logo",className:"logo"}),ke=l.nav`
  height: 4rem; /* Reserve space for navbar */
  width: 100vw;
  height: ${({$isSticky:t})=>t?"4rem":"6rem"};
  padding: 0 4rem;
  position: relative;
  transition: all 0.6s ease-in-out;
  z-index: 10;
  background-color: ${({$isSticky:t})=>t?"var(--black)":"transparent"};
  position: ${({$isSticky:t})=>t?"fixed":"absolute"};
  top: 0;
  left: 0;
  box-shadow: ${({$isSticky:t})=>t?"0 2px 8px rgba(0,0,0,0.1)":"none"};

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-container {
    padding-left: 3rem;
  }
  .logo {
    transition: var(--transition);
    width: ${({$isSticky:t})=>t?"8rem":"10rem"};
  }
  .big-bar {
    display: flex;
    gap: 2rem;
    .nav-link {
      color: var(--white);
      font-size: 0.9rem;
    }
    li {
      &:hover {
        span {
          height: 2rem;
        }
        .nav-link {
          color: rgb(211, 211, 211);
        }
      }
      .active {
        color: var(--primary-400) !important;
      }
    }
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }
  .nav-link {
    display: block;
    transition: var(--transition);
    text-decoration: none;
    font-weight: 600;
  }

  li {
    text-transform: uppercase;
    position: relative;
    list-style: none;
    transition: var(--transition);
  }

  span {
    position: absolute;
    width: 5px;
    height: 0;
    background-color: var(--white);
    top: -2.5rem;
    left: 50%;
    transform: translate(-50%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.15s ease-in-out;
  }

  .toggle-btn {
    display: none;
    position: fixed;
    top: 1rem;
    left: 1rem;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 48rem) {
    /* .aside-bar {
      display: block;
      position: fixed;
    } */
    .toggle-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .big-bar {
      display: none;
    }
    .logo {
      display: none;
    }
    position: absolute;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }
`,Te=l.button`
  background: transparent;
  border: none;
  color: ${({$open:t})=>t?"var(--black)":"var(--white)"};
  font-size: 2rem;
  cursor: pointer;
  transition: var(--transition);
  z-index: 999;

  ${({$open:t})=>t&&`
    transform: rotate(90deg);
  `}
`,Ee=l.aside`
  @media (max-width: 48rem) {
    display: flex;
  }
  display: none;
  position: fixed;
  inset: 0;
  background-color: var(--primary-400);
  color: var(--white);
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
  transform: translateX(${({$open:t})=>t?"0":"-100%"});
  opacity: ${({$open:t})=>t?"1":"0"};
  pointer-events: ${({$open:t})=>t?"auto":"none"};

  .content {
    padding: 4rem 2rem;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    padding: 0;
  }

  .nav-link {
    margin: 1rem 0;
    font-family: 'Rama Gothic M';
    color: rgba(0, 0, 0, 0.75);
    font-size: 2rem;
    transition: var(--transition);
    &:hover {
    }
  }
  li {
    &:hover {
      .nav-link {
        color: rgba(0, 0, 0, 0.58);
      }
    }
    .active {
      color: rgb(211, 211, 211);
    }
  }

  span {
    display: none;
  }
`,Se=()=>{const[t,o]=c.useState(!1),[a,i]=c.useState(!1),r=W();function s(){i(n=>!n)}return c.useEffect(()=>{const n=document.getElementById("hero");if(!n)return;const d=new IntersectionObserver(([g])=>{o(!g.isIntersecting)},{root:null,threshold:.2,rootMargin:"0px"});return d.observe(n),()=>{d.unobserve(n)}},[r.pathname]),e.jsxs(ke,{$isSticky:t,children:[e.jsx(Ee,{$open:a,children:e.jsx("div",{className:"content",children:e.jsx(P,{toggle:s})})}),e.jsxs("nav",{className:"navbar ",children:[e.jsx(Te,{type:"button",className:"toggle-btn",onClick:s,$open:a,children:a?e.jsx(ae,{}):e.jsx(ie,{})}),e.jsx(u,{to:".",className:"logo-container",children:e.jsx(O,{})}),e.jsx("div",{className:"big-bar",children:e.jsx(P,{})})]})]})},Ge=[{text:"home",path:"."},{text:"about",path:"about"},{text:"projects",path:"projects"},{text:"clients",path:"clients"},{text:"contact",path:"contact"}],P=({toggle:t})=>e.jsx("ul",{className:"nav-links",children:Ge.map(o=>e.jsx("li",{children:e.jsxs(se,{onClick:t,className:"nav-link",to:o.path,end:!0,children:[o.text,e.jsx("span",{})]})},o.text))}),ze=l.div`
  background: #111;
  border-radius: var(--border-radius);
  padding: 2rem 1rem;
  text-align: center;
  height: 23.2rem;
  margin-bottom: 3rem;
  .client-image {
    width: 5.7rem;
    height: 5.7rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  .client-name {
    margin: 0.5rem 0 0;
    color: #e6e6e6;
    font-family: 'Rama Gothic M', sans-serif !important;
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .client-role {
    color: #aaa;
    margin: 0;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .stars {
    margin: 1rem 0;
    color: gold;
  }
  .feedback {
    font-style: italic;
    color: #ddd;
  }
  @media (max-width: 14rem) {
    .feedback {
      font-size: 0.7rem;
    }
    .stars {
      margin: 1rem 0;
      color: gold;
      font-size: 0.7rem;
    }
  }
`,Ae=({path:t,alt:o,name:a,role:i,rate:r,feedback:s})=>e.jsxs(ze,{children:[e.jsx("img",{className:"client-image",src:t,alt:o}),e.jsx("h4",{className:"client-name",children:a}),e.jsx("p",{className:"client-role",children:i}),e.jsx("div",{className:"stars",children:r}),e.jsxs("p",{className:"feedback",children:['"',s,'"']})]}),Oe=ne`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Me=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeOverlay 0.3s ease forwards;

  @keyframes fadeOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .popup-container {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    width: 90%;
    max-width: 43.5rem;
    height: fit-content;
    overflow: hidden;
    position: relative;
    animation: ${Oe} 0.4s ease forwards;
    transform-origin: center;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.16),
        rgb(0, 0, 0)
      ),
      url(${t=>t.$background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .closeBtn {
    position: absolute;
    top: 0.75rem;
    right: 1.125rem;
    background: none;
    color: var(--white);
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .title {
    font-size: 2rem;
    /* color: var(--black); */
  }
  .scrollContainer {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 1rem;
    scroll-behavior: smooth;
  }
  .popup-card {
    position: relative;
    overflow: hidden;
    /* height: 15rem; */
    border-radius: var(--border-radius);
  }
`,Be=({onClose:t,data:o})=>{const a=c.useRef();return c.useEffect(()=>{const i=r=>{a.current&&!a.current.contains(r.target)&&t()};return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[t]),e.jsx(Me,{$background:o.image,children:e.jsxs("div",{className:"popup-container",ref:a,children:[e.jsx("button",{className:"closeBtn",onClick:t,children:"×"}),e.jsx("h2",{className:"title",children:o.title}),e.jsx("div",{className:"scrollContainer",children:e.jsx("div",{className:"popup-card",children:e.jsx("p",{children:o.text})})}),e.jsx(u,{to:"projects",children:e.jsx("button",{className:"btn",children:"explore more categories"})})]})})},Re="/IGNIT-Crew/assets/Activation-DaDQUwxf.jpeg",Pe="/IGNIT-Crew/assets/Events-CXkKCzY_.jpg",De="/IGNIT-Crew/assets/Exhibitions-DbwRcHxY.jpg",Fe="/IGNIT-Crew/assets/Roadshows-C-9Br2Pj.jpg",Le="/IGNIT-Crew/assets/POS_Marketing-C04kltRn.jpg",$e="/IGNIT-Crew/assets/Stunts-DhDRgnVh.png",We="/IGNIT-Crew/assets/Team_Building-C9Rg7NbL.jpeg",He="/IGNIT-Crew/assets/Digital_Marketing-D9p9BxlO.png",Ve={Activation:{image:Re,title:"Activation",text:`Join us on a whirlwind journey as we help your clients experience your brand like never before. From product sampling to road shows, we'll create mini adventures that truly capture your brand's essence.

`},Events:{image:Pe,title:"Events",text:"From intimate gatherings to grand spectacles, we are masters at crafting unforgettable experiences for your corporation. Our team's creativity and flawless execution will leave your guests buzzing for weeks to come."},Exhibitions:{image:De,title:"Exhibitions",text:`With our top-of-the-line production house, we create full-scale exhibitions and stands that are unmatched in quality. Your brand will shine brighter than ever before.

`},Roadshows:{image:Fe,title:"Roadshows",text:`We're masters of creating jaw-dropping marketing stunts that'll blow your audience's minds. We're always pushing the limits of what's possible with cutting-edge tech and creative concepts that'll capture their attention and generate buzz. From epic guerrilla campaigns that take over the streets to viral social media challenges that spread like wildfire, we're up for any challenge.

`},POS_Marketing:{image:Le,title:"POS Marketing",text:`Our team of experts will transform your brand identity into a revenue-generating machine. We know how to captivate your audience and turn them into loyal customers.

`},Stunts:{image:$e,title:"Stunts",text:`We bring your brand's unique narrative to life, infusing it with emotion, passion, and authenticity. From ideation to post-production, our team will produce a cinematic masterpiece that showcases your brand's unique journey.

`},Team_Building:{image:We,title:"Team Building",text:`Our team building activities are designed to inspire and energize your staff, bringing them closer together and enhancing their productivity. Let us help you create a winning team.

`},Digital_Marketing:{image:He,title:"Digital Marketing",text:"We harness the power of the digital world to elevate your brand’s presence across every screen. From strategic campaigns to targeted content and data-driven performance, we connect your message to the right audience — at the right time — in the most impactful way."}},Ue=({services:t})=>{const[o,a]=c.useState(!1),[i,r]=c.useState(null),s=n=>{r(Ve[n]),a(!0)};return e.jsxs("div",{className:"grid",children:[t.map((n,d)=>e.jsxs("button",{onClick:()=>s(n),className:"card flex-center",children:[e.jsx("div",{className:"line-highlight"}),e.jsx("div",{className:"card-text",children:n.replace(/_/g," ")})]},d)),o&&i&&e.jsx(Be,{onClose:()=>{a(!1),r(null)},data:i})]})},qe=l.div`
  min-width: 100%;
  overflow: hidden;

  .card-box {
    padding: 30px;
    position: relative;
    background-color: #ffffff40;
    height: 300px;
    width: 100%;
    transition: var(--transition);
    border-radius: var(--border-radius);
  }
  .card-icon {
    transition: var(--transition);
    svg {
      transition: var(--transition);
      width: 50px;
      height: 50px;
    }
  }
  .separator {
    margin: 15px 0;
    width: 30%;
    height: 5px;
    background-color: var(--primary-400);
    position: absolute;
    top: 28%;
    transition: var(--transition);
  }
  .card-title {
    text-transform: uppercase;
    font-weight: 600;
    position: absolute;
    font-size: 1.625rem;
    top: 42%;
    transition: var(--transition);
  }
  .card-text {
    position: absolute;
    line-height: 1.3;
    top: 50%;
    opacity: 0;
    transition: var(--transition);
    position: absolute;
    max-width: 80%;
  }

  &:hover {
    .card-icon {
      svg {
        width: 30px;
        height: 30px;
      }
    }
    .card-icon {
      opacity: 0;
    }
    .separator {
      position: absolute;
      top: 7%;
    }
    .card-title {
      opacity: 0;
    }
    .card-text {
      position: absolute;
      top: 17%;
      opacity: 1;
      line-height: 1.2;
    }
  }
  @media (max-width: 36rem) {
    .card-title {
      /* font-size: 1.2rem; */
    }
    .card-box {
      display: flex;
      justify-content: center;
      text-align: center;
      /* align-items: center; */
    }
    .card-text {
      max-width: 93%;
    }
  }
`,H=({icon:t,title:o,text:a})=>e.jsx(qe,{children:e.jsxs("div",{className:"card-box",children:[t&&e.jsx("div",{className:"card-icon",children:t}),e.jsx("div",{className:"separator"}),e.jsx("h3",{className:" card-title",children:o}),e.jsx("p",{className:"card-text",children:a})]})}),_e=l.section`
  background: var(--black);
  color: var(--white);
  /* height: fit-content; */
  /* padding: 4rem 4rem 2rem; */

  .contact-top {
    display: grid;
    grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;
    transform: translateY(-8rem);
    font-family: 'Proxima-Nova', sans-serif;
    font-weight: 600;
  }
  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .contact-circle {
    width: 8rem;
    height: 8rem;
    background: var(--primary-400);
    border-radius: 50%;
    display: flex;
    color: var(--white);
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 2.1rem;
    transition: all 0.1s ease-in-out;
    &:hover {
      font-size: 2.6rem;
      transform: rotate(-20deg);
    }
  }
  .label {
    margin: 0.5rem 0;
    font-size: 2rem;
  }
  .info {
    color: #00aaff;
    /* min-height: 8rem; */
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
      color: #0075af;
    }
  }
  .divider {
    width: 1px;
    height: 5rem;
    background: var(--white);
    opacity: 0.2;
    margin: 0 1rem;
  }
  @media (max-width: 44rem) {
    height: 100%;
    .contact-top {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transform: none;
    }

    .divider {
      display: none;
    }
    .contact-circle {
      width: 5rem;
      height: 5rem;
      font-size: 1.8rem;
    }
  }
`;function M(){return e.jsx(_e,{className:"section-container",children:e.jsxs("div",{className:"contact-top flex-center",children:[e.jsxs("div",{className:"contact-item",children:[e.jsx("a",{className:"contact-circle",href:"mailto:info@ignitrew.com",children:e.jsx(le,{})}),e.jsx("h4",{className:"label",children:"EMAIL US"}),e.jsx("a",{className:"info",href:"mailto:info@ignitrew.com",children:"info@ignitrew.com"})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"contact-item",children:[e.jsx("a",{target:"_blank",className:"contact-circle",href:"https://api.whatsapp.com/send?phone=201027883268&text&context=Affl27NyVtxZG56bwOQldfLm6RyvztFf9SbKWtH89mSgK93Fir54a7SnEYUMEGTljWZCAHwJ77QXOtkDn6yCC-bSjFEkQFScaSZw62I1y2yBkH9oe2FDptR5VUKcLQKg-E7ehMTePtZKm4JmE7WnG21m6g&source&app=facebook",children:e.jsx(ce,{})}),e.jsx("h4",{className:"label",children:"CALL US"}),e.jsx("a",{target:"_blank",className:"info",href:"https://api.whatsapp.com/send?phone=201027883268&text&context=Affl27NyVtxZG56bwOQldfLm6RyvztFf9SbKWtH89mSgK93Fir54a7SnEYUMEGTljWZCAHwJ77QXOtkDn6yCC-bSjFEkQFScaSZw62I1y2yBkH9oe2FDptR5VUKcLQKg-E7ehMTePtZKm4JmE7WnG21m6g&source&app=facebook",children:"+20 10 27883268"})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"contact-item",children:[e.jsx("a",{className:"contact-circle",href:"#",children:e.jsx(de,{})}),e.jsx("h4",{className:"label",children:"VISIT US"}),e.jsx("a",{className:"info",href:"#",children:"Address, Street, Cairo, Egypt"})]})]})})}const Ke=l.section`
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 5rem;
  height: fit-content;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.06),
      rgba(0, 0, 0, 0.57)
    ),
    url(${t=>t.$imgPath}) no-repeat;
  background-size: cover;
  background-position: center;

  .content {
    display: flex;
    width: 100%;
    height: 30rem;
    align-content: center;
    justify-content: start;
    padding: 0 2rem;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Rama Gothic M';
    font-weight: bold;
    color: var(--primary-400);
    text-transform: uppercase;
    font-size: 5rem;
    text-align: center;
  }

  @media (max-width: 48rem) {
    .info {
      font-size: 4.1rem;
    }
    .content {
      justify-content: center;
    }
  }
  @media (max-width: 44rem) {
    .info {
      font-size: 3.8rem;
    }
  }
  @media (max-width: 36rem) {
    .info {
      font-size: 3rem;
    }
  }
`,T=({title:t,imgPath:o})=>e.jsx(Ke,{$imgPath:o,id:"hero",className:"section-container",children:e.jsx("div",{className:"content ",children:e.jsxs("h2",{className:"info",children:[" ",t]})})});function Je(){const t=W();return c.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t.key]),null}function Ye(t){const[o,a]=c.useState(window.matchMedia(t).matches);return c.useEffect(()=>{const i=window.matchMedia(t),r=()=>a(i.matches);return i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[t]),o}const V=({gridRows:t,cardsData:o})=>{const a=Ye("(max-width: 48rem)");return e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"small-screen",children:e.jsx(C,{modules:[G,z],spaceBetween:100,slidesPerView:1,loop:!0,pagination:{clickable:!0},autoplay:{delay:2e3},children:o.map((i,r)=>e.jsx(k,{children:e.jsx(e.Fragment,{children:e.jsxs(u,{to:i.link,className:"card-slide",children:[e.jsx("img",{className:"img",src:i.img,alt:i.text}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"label",children:i.text})]},r)})}))})}),e.jsx("div",{className:t,children:o.map((i,r)=>e.jsxs(u,{to:i.link,className:i.big?"card big-card":"card",children:[e.jsx("img",{className:"img",src:i.img,alt:i.text}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"label",children:i.text})]},r))})]})},Qe=({images:t})=>{const[o,a]=c.useState(0),i=()=>{a(s=>s===0?t.length-1:s-1)},r=()=>{a(s=>s===t.length-1?0:s+1)};return e.jsxs("div",{className:"slider-container",children:[e.jsx("img",{className:"main-image",src:t[o],alt:`Slide ${o}`}),e.jsxs("div",{className:"arrows",children:[e.jsx("button",{className:"arrow left",onClick:i,children:"‹"}),e.jsx("button",{className:"arrow right",onClick:r,children:"›"})]}),e.jsx("div",{className:"thumbnails",children:e.jsx(C,{modules:[G],spaceBetween:30,loop:!1,pagination:{clickable:!0},breakpoints:{0:{slidesPerView:2},350:{slidesPerView:3},768:{slidesPerView:4},769:{slidesPerView:5}},children:t.map((s,n)=>e.jsx(k,{children:e.jsx("img",{src:s,alt:`Thumb ${n}`,className:`thumb ${n===o?"active":""}`,onClick:()=>a(n)})},n))})})]})},Xe=({tags:t})=>e.jsx("ul",{className:"tag-list",children:t.map((o,a)=>e.jsx("li",{className:"tag-dot",children:o},a))});function Ze(){return e.jsxs(e.Fragment,{children:[e.jsx(Se,{}),e.jsx(Je,{}),e.jsx(me,{}),e.jsx(Ie,{})]})}const D=l.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 22vw;
    max-width: 37rem;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }

  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`,et="/IGNIT-Crew/assets/not-found-CM3leHut.svg",tt=()=>ge().status===404?e.jsx(D,{children:e.jsxs("div",{children:[e.jsx("img",{src:et,alt:"Not found"}),e.jsx("h3",{children:"Ohh! page not found"}),e.jsx("p",{children:"We can't seem to find the page you are looking for"}),e.jsx(u,{to:"/IGNIT-Crew",children:"back home"})]})}):e.jsx(D,{children:e.jsx("div",{children:e.jsx("h3",{children:"Something went wrong"})})}),F="/IGNIT-Crew/assets/about-bg-Cj_tYFCl.jpg",ot=l.section`
  display: flex;
  align-items: center;
  background-color: var(--black);
  gap: 2rem;
  /* height: 100vh; */
  width: 100%;
  .logo {
    display: flex;
    align-items: center;
    width: 70%;
    max-width: 40rem;
  }

  .image-box {
    margin: auto 0;
    height: 45rem;
    width: 50%;
    display: block;
    background-image: url(${F});
    background-size: cover;
    background-position: center;
    margin: 3rem 0;
  }
  .right {
    flex: 1;
    min-width: 40%;
    padding: 2rem;
    padding-left: 1rem;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text {
    font-size: 1.625rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    max-width: 90rem;
    text-shadow: 2px 2px 3px rgb(0, 0, 0);
  }
  .highlight {
    color: var(--primary-400);
    margin-bottom: 2.5rem;
    font-size: 1.6rem;
  }
  @media (max-width: 48rem) {
    height: 100%;

    background-image: linear-gradient(
        to right bottom,
        rgba(17, 17, 17, 0.45),
        rgba(0, 0, 0, 0.81)
      ),
      url(${F});
    background-size: cover;
    background-position: center;
    padding-bottom: 4rem;

    .image-box {
      display: none;
    }
    .right {
      align-items: center;
      text-align: center;
    }
    .text {
      margin-bottom: 1rem;
      max-width: 95%;
      font-size: 1.4rem;
    }
    /*   .highlight {
      margin-bottom: 1rem;
    } */
  }
  @media (max-width: 44rem) {
    .text {
      font-size: 1.2rem;
    }
    .right {
      gap: 1rem;
    }
  }
  @media (max-width: 36rem) {
    .text {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .highlight {
      margin-bottom: 0.5rem;
    }
  }
  @media (max-width: 27rem) {
    .highlight {
      font-size: 1.3rem;
    }
  }
`,rt=()=>e.jsxs(ot,{className:".section-container",children:[e.jsx("div",{className:"image-box",role:"img ","aria-label":"img"}),e.jsxs("div",{className:"right",children:[e.jsx(O,{}),e.jsx("p",{className:"text",children:"At IGNIT Crew, innovation isn't just a buzzword; it's woven into the fabric of everything we do. We're not your typical BTL marketing agency. We're the disruptors, the dreamers, and the doers."}),e.jsx("p",{className:"highlight",children:"INNOVATION IS OUR DNA"}),e.jsx(u,{to:"contact",children:e.jsx("button",{className:"btn",children:"GET IN TOUCH"})})]})]}),at="/IGNIT-Crew/assets/hero-bg-Du2OYZIv.mp4",it=l.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 2rem;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* z-index: -3; */
  }
  .content {
    display: flex;
    align-content: center;
    justify-content: space-around;
    width: 100%;
    height: 80%;
    margin: 0 auto;
    padding: 0 2rem;
    gap: 2rem;
    /* flex-wrap: wrap; */
    color: var(--white);
    z-index: 2;
  }
  .left {
    flex-direction: column;
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary-400);
    line-height: 1;
    text-transform: uppercase;
  }
  .info {
    font-size: 6rem;
    line-height: 0.8;
    font-weight: 550;
  }
  .right {
    flex-direction: column;
    display: flex;
    justify-content: center;

    p {
      max-width: 33rem;
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      text-shadow: 2px 2px 3px rgb(0, 0, 0);
    }
  }
  @media (max-width: 48rem) {
    margin: 0 auto;
    max-width: 47rem;
    .info {
      font-size: 4.1rem;
      line-height: 1.2;
    }
    .content {
      padding: 0;
    }
  }
  @media (max-width: 44rem) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1rem;
    }
    .right {
      align-items: center;
    }
    .info {
      max-width: 32rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      text-align: center;
      font-size: 3.8rem;
    }
    .right {
      p {
        font-size: 0.95rem;
      }
    }
  }
  @media (max-width: 36rem) {
    .info {
      font-size: 86%;
    }
  }
`,st=()=>e.jsxs(it,{id:"hero",className:"section-container",children:[e.jsxs("div",{children:[e.jsx("div",{className:"overlay"}),e.jsx("video",{className:"background-video",id:"hero-video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:at,type:"video/mp4"})]}),e.jsxs("div",{className:"content ",children:[e.jsx("div",{className:"left flex-center",children:e.jsxs("div",{className:"info",children:[e.jsx("p",{children:"WE"}),e.jsx("p",{children:"HELP"}),e.jsx("p",{children:"DEVELOP"}),e.jsx("p",{children:"BRANDS"})]})}),e.jsxs("div",{className:"right ",children:[e.jsx("p",{children:"IGNIT Crew is a leading BTL marketing agency in the MENA region with over 200 employees, offices in Cairo and Dubai, partnerships with over 600 clients, and a privately-owned production house. We are proud of our reputation and plan to surpass even higher benchmarks in the future."}),e.jsx(u,{className:"btn-container",to:"about",children:e.jsx("button",{className:"btn",children:"LEARN MORE"})})]})]})]}),nt="/IGNIT-Crew/assets/logo1-CEEUIXFW.png",lt="/IGNIT-Crew/assets/logo2-q-o4mtza.png",ct="/IGNIT-Crew/assets/logo3-DQUo9RDM.png",dt="/IGNIT-Crew/assets/logo4-CPDKQ7qx.png",mt="/IGNIT-Crew/assets/logo5--sJlIBUq.png",gt="/IGNIT-Crew/assets/logo6-B5zMTg-1.png",pt="/IGNIT-Crew/assets/logo7-DBTVvVz9.png",ht="/IGNIT-Crew/assets/logo8-C1NVbhCQ.png",ut="/IGNIT-Crew/assets/logo9-DGs5J0CM.png",xt="/IGNIT-Crew/assets/logo10-9e4_7FVN.png",ft="/IGNIT-Crew/assets/logo11-CN5XMK8X.png",wt="/IGNIT-Crew/assets/logo12-CTw__6EO.png",bt="/IGNIT-Crew/assets/logo13-CHkl6lOs.png",jt="/IGNIT-Crew/assets/logo14-B6rX72uD.png",vt="/IGNIT-Crew/assets/logo15-B_g9TWdd.png",Nt="/IGNIT-Crew/assets/logo16-Di94PsR4.png",yt="/IGNIT-Crew/assets/logo17-_dg_epqT.png",It="/IGNIT-Crew/assets/logo18-Ck5PljuK.png",Ct="/IGNIT-Crew/assets/logo19-BxDKoMLf.png",kt="/IGNIT-Crew/assets/logo20-DaX_0BAJ.png",Tt="/IGNIT-Crew/assets/logo21-DjsFq7b2.png",Et="/IGNIT-Crew/assets/logo22-CH4orKB1.png",St="/IGNIT-Crew/assets/logo23-7KmbAS0V.png",Gt="/IGNIT-Crew/assets/logo24-DP54YvP8.png",zt="/IGNIT-Crew/assets/logo25-DSONCM81.png",At="/IGNIT-Crew/assets/logo26-DfjrHnAX.png",Ot="/IGNIT-Crew/assets/logo27-BA6Dfvjj.png",Mt="/IGNIT-Crew/assets/logo28-DjnMbmOO.png",Bt="/IGNIT-Crew/assets/logo29-B0Iy_2Hx.png",Rt="/IGNIT-Crew/assets/logo30-CjMLGden.png",Pt="/IGNIT-Crew/assets/logo31-DzKycOO1.png",Dt="/IGNIT-Crew/assets/logo32-DyK_kQ21.png",Ft="/IGNIT-Crew/assets/logo33-DBob3xVL.png",Lt="/IGNIT-Crew/assets/logo34-Cj-LmwnJ.png",$t="/IGNIT-Crew/assets/logo35-BkNztOc7.png",Wt="/IGNIT-Crew/assets/logo36-CYxIPJ0J.png",Ht="/IGNIT-Crew/assets/logo37-D_fEw3zR.png",Vt="/IGNIT-Crew/assets/logo38-DBJS0VVI.png",Ut="/IGNIT-Crew/assets/logo39-CPZT-nMD.png",qt="/IGNIT-Crew/assets/logo40-BDhu6d_t.png",_t="/IGNIT-Crew/assets/logo41-mhXZrXwf.png",Kt="/IGNIT-Crew/assets/logo42-BWydt9gH.png",Jt="/IGNIT-Crew/assets/logo43-BMq4dZN0.png",Yt="/IGNIT-Crew/assets/logo44-CqriwnSS.png",Qt="/IGNIT-Crew/assets/logo45-CZ5nx2T-.png",Xt="/IGNIT-Crew/assets/logo46-DglX4M_N.png",Zt="/IGNIT-Crew/assets/logo47-CE7lZ6SA.png",eo="/IGNIT-Crew/assets/logo48-DWLzgPut.png",to="/IGNIT-Crew/assets/logo49-DWlnwI9u.png",oo="/IGNIT-Crew/assets/logo50-Dkv9Btoj.png",ro="/IGNIT-Crew/assets/logo51-Co88iCfM.png",ao="/IGNIT-Crew/assets/logo52-D0Icmq3f.png",io="/IGNIT-Crew/assets/logo53-Bud0ELN_.png",so="/IGNIT-Crew/assets/logo54-DrxKQk1E.png",no="/IGNIT-Crew/assets/logo55-CNKvcUL5.png",lo="/IGNIT-Crew/assets/logo56-Bh7uUQAd.png",co="/IGNIT-Crew/assets/logo57-DBFYkACn.png",mo="/IGNIT-Crew/assets/logo58-Mp-FIc7R.png",go="/IGNIT-Crew/assets/logo59-BkbNpU4N.png",po="/IGNIT-Crew/assets/logo60-Cx7NCV3z.png",ho="/IGNIT-Crew/assets/logo61-RHMa7kDn.png",uo="/IGNIT-Crew/assets/logo62-CyEYtpBl.png",xo="/IGNIT-Crew/assets/logo63-D_YpbVJN.png",fo="/IGNIT-Crew/assets/logo64-BmgxEx3x.png",wo="/IGNIT-Crew/assets/logo65-6Lem_Ud-.png",bo="/IGNIT-Crew/assets/logo66-DiLDEesF.png",jo="/IGNIT-Crew/assets/logo67-DNwJzD6J.png",vo="/IGNIT-Crew/assets/logo68-CpGALqHV.png",No="/IGNIT-Crew/assets/logo69-XQWfkbOo.png",yo="/IGNIT-Crew/assets/logo70-DGdJbGCz.png",Io="/IGNIT-Crew/assets/logo71-DzdTroyP.png",Co="/IGNIT-Crew/assets/logo72-CLuONiL_.png",ko="/IGNIT-Crew/assets/logo73-DNmq8mDP.png",To="/IGNIT-Crew/assets/logo74-Nx6OMMpK.png",Eo="/IGNIT-Crew/assets/logo75-07Edzht8.png",So="/IGNIT-Crew/assets/logo76-CvbL3B2r.png",Go="/IGNIT-Crew/assets/logo77-Wzaj2wuh.png",zo="/IGNIT-Crew/assets/logo78-CmLrH0AS.png",Ao="/IGNIT-Crew/assets/logo79-DkBlUDvw.png",Oo="/IGNIT-Crew/assets/logo80-B4ut6bAv.png",Mo="/IGNIT-Crew/assets/logo81-BX4gn_3p.png",S=[{src:nt,alt:"logo"},{src:lt,alt:"logo"},{src:ct,alt:"logo"},{src:dt,alt:"logo"},{src:mt,alt:"logo"},{src:gt,alt:"logo"},{src:pt,alt:"logo"},{src:ht,alt:"logo"},{src:ut,alt:"logo"},{src:xt,alt:"logo"},{src:ft,alt:"logo"},{src:wt,alt:"logo"},{src:bt,alt:"logo"},{src:jt,alt:"logo"},{src:vt,alt:"logo"},{src:Nt,alt:"logo"},{src:yt,alt:"logo"},{src:It,alt:"logo"},{src:Ct,alt:"logo"},{src:kt,alt:"logo"},{src:Tt,alt:"logo"},{src:Et,alt:"logo"},{src:St,alt:"logo"},{src:Gt,alt:"logo"},{src:zt,alt:"logo"},{src:At,alt:"logo"},{src:Ot,alt:"logo"},{src:Mt,alt:"logo"},{src:Bt,alt:"logo"},{src:Rt,alt:"logo"},{src:Pt,alt:"logo"},{src:Dt,alt:"logo"},{src:Ft,alt:"logo"},{src:Lt,alt:"logo"},{src:$t,alt:"logo"},{src:Wt,alt:"logo"},{src:Ht,alt:"logo"},{src:Vt,alt:"logo"},{src:Ut,alt:"logo"},{src:qt,alt:"logo"},{src:_t,alt:"logo"},{src:Kt,alt:"logo"},{src:Jt,alt:"logo"},{src:Yt,alt:"logo"},{src:Qt,alt:"logo"},{src:Xt,alt:"logo"},{src:Zt,alt:"logo"},{src:eo,alt:"logo"},{src:to,alt:"logo"},{src:oo,alt:"logo"},{src:ro,alt:"logo"},{src:ao,alt:"logo"},{src:io,alt:"logo"},{src:so,alt:"logo"},{src:no,alt:"logo"},{src:lo,alt:"logo"},{src:co,alt:"logo"},{src:mo,alt:"logo"},{src:go,alt:"logo"},{src:po,alt:"logo"},{src:ho,alt:"logo"},{src:uo,alt:"logo"},{src:xo,alt:"logo"},{src:fo,alt:"logo"},{src:wo,alt:"logo"},{src:bo,alt:"logo"},{src:jo,alt:"logo"},{src:vo,alt:"logo"},{src:No,alt:"logo"},{src:yo,alt:"logo"},{src:Io,alt:"logo"},{src:Co,alt:"logo"},{src:ko,alt:"logo"},{src:To,alt:"logo"},{src:Eo,alt:"logo"},{src:So,alt:"logo"},{src:Go,alt:"logo"},{src:zo,alt:"logo"},{src:Ao,alt:"logo"},{src:Oo,alt:"logo"},{src:Mo,alt:"logo"}],Bo=l.section`
  background-color: #e6e6e6;
  .carousel-container {
    flex-direction: column;
    gap: 2rem;
  }

  .logo-container {
    width: 100%;
    cursor: grab;
  }
  .title {
    color: var(--black);
    align-self: flex-start;
  }
  .btn-container {
    align-self: flex-end;
  }

  .logo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none; /* prevent text‐select while dragging */
    img {
      width: 7.5rem;
      height: 7.5rem;
      object-fit: contain;
    }
  }
  @media (max-width: 36rem) {
    .logo-item {
      img {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`;function Ro(){return e.jsx(Bo,{className:"section-container",children:e.jsxs("div",{className:"carousel-container flex-center container",children:[e.jsx("h2",{className:"title title-medium",children:"CLIENTS"}),e.jsx("div",{className:"logo-container",children:e.jsx(C,{modules:[z],spaceBetween:30,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{200:{slidesPerView:3},768:{slidesPerView:3},769:{slidesPerView:5}},children:S.map((t,o)=>e.jsx(k,{children:e.jsx("div",{className:"logo-item",children:e.jsx("img",{src:t.src,alt:t.alt||`logo-${o}`})})},o))})}),e.jsx(u,{className:"btn-container",to:"clients",children:e.jsx("button",{className:"btn",children:"SHOW MORE"})})]})})}const Po="/IGNIT-Crew/assets/logo-2001-BcECPO5O.png",Do="/IGNIT-Crew/assets/milestones-bg-Bt8NrnqD.jpg",Fo=l.section`
  color: #a9a9a9;
  background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0.26)),
    url(${Do});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  /* height: 50vh; */

  .content {
    padding-left: 3rem;
    z-index: 2;
    /* width: 100%; */
    gap: 2rem;
    /* height: 200rem !important; */
  }

  .container {
    /* height: 35rem; */
  }

  .stats-container {
    display: flex;
    justify-content: start;
    align-self: flex-start;
    padding: 4rem 0;
    height: 100%;
    width: 50%;
    flex-direction: column;
    gap: 8rem;
    font-weight: bold;
    position: relative;
  }
  .top-text {
    font-size: 0.8rem;
    line-height: 1.6;
  }
  .stats {
    gap: 3rem;
    /* justify-content: start; */
  }

  .stat-block {
    font-size: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: start;
    color: var(--primary-400);
    span {
      gap: 0.2rem;
      font-size: 2rem;
      font-weight: bold;
      color: #a9a9a9;
      display: flex;
      /* margin-top: 0.5rem; */
    }
  }
  .since {
    display: none;
    font-size: 5rem;
    font-family: 'Proxima-Nova', sans-serif;
    font-weight: bold;
    font-weight: 500;
    color: var(--primary-400);
    position: absolute;
    bottom: 4rem;
    left: -5rem;
  }
  .logo-container {
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(255, 200, 0, 0.01),
      rgba(128, 127, 127, 0.49)
    );
    img {
      padding-right: 2rem;
      width: 100%;
      height: 100%;
    }
    position: relative;
    &::after {
      content: 'Since';
      font-size: 5rem;
      font-family: 'Rama Gothic M' !important;
      text-transform: uppercase;
      font-weight: bold;
      opacity: 0.3;
      font-weight: 500;
      color: var(--primary-400);
      position: absolute;
      bottom: 4rem;
      right: 2rem;
    }
  }
  .small-screen {
    display: none;
  }
  @media (max-width: 48rem) {
    height: fit-content;

    .stats-container {
      gap: 4rem;
    }
    .since {
      bottom: 3.5rem;
      left: -7rem;
    }

    .stats-container {
      align-self: flex-start;
      gap: 8rem;
    }
    .top-text {
      width: 65%;
    }
  }

  @media (max-width: 52.5rem) {
  }
  @media (max-width: 44rem) {
    .logo-container {
      display: none;
    }
    .content {
      justify-content: center;
      padding-left: 0;
    }
    .stats-container {
      gap: 2rem;
    }
    .small-screen {
      display: flex;
      align-self: center;
      flex-direction: column;
      gap: -1rem;
      .small-since {
        font-size: 4rem;
        font-family: 'Proxima-Nova', sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        color: #ffc800;
      }
      .small-date {
        font-size: 7rem;
        font-family: 'Rama Gothic M', sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        color: #ffc800;
      }
    }
    .top-text {
      align-self: center;
      justify-self: center;
      text-align: center;
      width: 100%;
    }
    .stats-container {
      width: 80%;
    }
  }
  @media (max-width: 27rem) {
    /* .stats {
      flex-direction: column;
    }
    .stat-block {
      justify-content: center;
      align-items: center;
    } */

    .stat-block {
      font-size: 120%;
    }
  }
`,Lo=()=>e.jsx(Fo,{className:"flex-center ",children:e.jsxs("div",{className:"container flex-center",children:[e.jsxs("div",{className:"stats-container",children:[e.jsx("p",{className:"top-text",children:"These projects were executed in Egypt, USA, KSA, Lebanon, Morocco, Algeria, Jordan, Qatar, Kuwait, Bahrain, Sudan, Libya, and Syria"}),e.jsxs("div",{className:"stats flex-center",children:[e.jsxs("div",{className:"stat-block",children:["CLIENTS",e.jsxs("span",{children:[e.jsx(R,{start:"0",end:"300",duration:7})," +"]})]}),e.jsxs("div",{className:"stat-block",children:["PROJECTS",e.jsxs("span",{children:[e.jsx(R,{start:"0",end:"2000",duration:7})," +"]})]})]}),e.jsxs("div",{className:"small-screen",children:[e.jsx("span",{className:"small-since",children:"Since"}),e.jsx("span",{className:"small-date",children:"2001"})]})]}),e.jsxs("div",{className:"logo-container",children:[e.jsx("h2",{className:"since",children:"SINCE"}),e.jsx("img",{src:Po,alt:"2001"})]})]})}),$o="/IGNIT-Crew/assets/services-bg-CXlGq1FJ.jpg",Wo=l.section`
  position: relative;
  background: url(${$o}) center/cover no-repeat;
  color: var(--white);
  text-align: center;
  /* height: 65vh; */
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #111, transparent);
    top: 0;
    left: 0;
    z-index: 1;
  }
  .container {
    position: relative;
    z-index: 2;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    height: 100%;
  }

  .title {
    align-self: flex-start;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    justify-items: center;
    /* align-content: center; */
    gap: 1rem;
    width: 100%;
    height: 80%;
  }

  .card {
    /* display: flex; */
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0.9rem;
    border-radius: var(--border-radius);
    font-weight: bold;
    color: var(--white);
    font-size: 1.2rem;
    flex-direction: column;
    gap: 1rem;
    backdrop-filter: blur(10px);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: var(--transition);
    width: 100%;
    height: 100%;
    min-height: 10rem;
    border: none;
    cursor: pointer;
    .card-text {
      display: flex;
      align-items: center;
      height: 1rem;
    }

    .line-highlight {
      display: block;
      width: 5rem;
      height: 0.3rem;
      background: var(--primary-400);
      margin-bottom: 1rem;
      transition: var(--transition);
    }

    &:hover {
      background-color: var(--primary-400);
      color: var(--black);

      .line-highlight {
        background: var(--black);
      }
    }
  }
  @media (max-width: 48rem) {
    width: 100%;
    height: 100%;
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 52.5rem) {
  }
  @media (max-width: 27rem) {
    .card {
      width: 90%;
    }
    .card-text {
      font-size: 0.8rem;
    }
  }
`,Ho=["Activation","Events","Exhibitions","Roadshows","POS_Marketing","Stunts","Team_Building","Digital_Marketing"],Vo=()=>e.jsxs(e.Fragment,{children:[e.jsxs(Wo,{className:"section-container",children:[e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"title title-medium",children:"SERVICES"}),e.jsx(Ue,{services:Ho})]})]}),e.jsx("div",{className:"line"})]}),Uo=l.section`
  background-color: var(--primary-400);
  color: var(--white);
  text-align: left;

  .title {
    color: var(--black);
  }
  .subtitle {
    color: #ccc;
    font-size: 1rem;
    margin-bottom: 3rem;
    color: var(--black);
  }
`,qo="/IGNIT-Crew/assets/client1-C8QYjGRH.jpg",_o="/IGNIT-Crew/assets/client2-Bz3QThUV.jpg",Ko="/IGNIT-Crew/assets/client3-DIyLr32z.jpg",Jo=[{path:qo,alt:"Client 1",name:"John Doe",role:"CEO, Example Inc.",rate:"⭐⭐⭐⭐⭐",feedback:"IGNIT Crew helped us achieve fantastic growth with their creative marketing strategies."},{path:_o,alt:"Client 2",name:"Peter Smith",role:"Marketing Head, ABC Corp.",rate:"⭐⭐⭐⭐⭐",feedback:"Amazing team to work with. Very professional and extremely innovative."},{path:Ko,alt:"Client 3",name:"Mike Johnson",role:"Product Manager, XYZ Ltd",rate:"⭐⭐⭐⭐⭐",feedback:"Highly recommend their services to anyone looking for branding and marketing excellence!"}],Yo=()=>e.jsx(Uo,{className:"section-container",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"title title-medium",children:"WHAT CLIENTS SAY"}),e.jsx("p",{className:"subtitle",children:"We build strong relationships with our clients through our work and innovation."}),e.jsx(C,{modules:[G,z],spaceBetween:30,loop:!0,pagination:{clickable:!0},autoplay:{delay:3e3},breakpoints:{768:{slidesPerView:1},769:{slidesPerView:2}},children:Jo.map(t=>e.jsx(k,{children:e.jsx(Ae,{path:t.path,alt:t.alt,name:t.name,role:t.role,rate:t.rate,feedback:t.feedback})}))})]})}),U="/IGNIT-Crew/assets/img3-BpbFp77A.jpg",q="/IGNIT-Crew/assets/proj2-DqJvcoHm.jpg",_="/IGNIT-Crew/assets/proj3-CJGZ9r2T.jpg",K="/IGNIT-Crew/assets/proj4-B2zg24_P.jpg",J="/IGNIT-Crew/assets/proj5-BcHtY88X.jpg",Qo=[{img:U,text:"BISKREM-2024 - الحلو بيكمل أحلى",big:!0,category:"pos-marketing",link:"/IGNIT-Crew/projects/proj1"},{img:q,text:"NISSAN-DARING AFRICA-2024",category:"stunts",link:"/IGNIT-Crew/projects/proj2"},{img:_,text:"PEPSI-THE HOUSE OF FIZZ-2023",category:"activation",link:"/IGNIT-Crew/projects/proj3"},{img:K,text:"BRITISH PETROLEUM - LAUNCH EVENT",category:"events",link:"/IGNIT-Crew/projects/proj4"},{img:J,text:"TOTAL ENERGIES - YLT FINAL",category:"team-building",link:"/IGNIT-Crew/projects/proj5"}],Y=l.section`
  background-color: var(--black);
  color: var(--white);
  text-align: left;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    position: relative;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
    height: fit-content;
  }

  .grid--3--row {
    grid-template-rows: repeat(3, 1fr);
  }
  .grid--2--row {
    grid-template-rows: repeat(2, 1fr);
  }
  .card-slide {
    /* width: 100%; */
    height: 17rem;
    border-radius: var(--border-radius);
  }
  .small-screen {
    border-radius: var(--border-radius);
    display: none;
    &:hover .overlay {
      opacity: 0.4;
      transform: scale(1.1);
    }

    &:hover .label {
      background: var(--black);
      color: var(--white);
    }
    &:hover .img {
      transform: scale(1.1);
    }
    .img {
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
  }
  .card {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);

    cursor: pointer;

    &:hover .overlay {
      opacity: 0.4;
      transform: scale(1.1);
    }

    &:hover .label {
      background: var(--black);
      color: var(--white);
    }
    &:hover .img {
      transform: scale(1.1);
    }
  }

  .big-card {
    grid-row: 1/3;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: var(--transition);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--border-radius);
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: var(--transition);
  }
  .label {
    position: absolute;
    bottom: 3rem;
    left: 0;
    width: 90%;
    height: 2.5rem;
    background: var(--primary-400);
    padding: 0.5rem 1rem;
    font-weight: bold;
    color: rgb(15, 15, 15);
    font-size: 1rem;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    text-transform: uppercase;
    transition: var(--transition);
  }
  .btn-container {
    align-self: flex-end;
  }
  .category-select {
    background-color: var(--white);
    width: 150px;
    padding: 5px 8px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    option {
      color: #555;
    }
  }
  @media (max-width: 62rem) {
    .label {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 48rem) {
    .big-screen {
      display: none;
    }
    .small-screen {
      display: block;
    }
    .label {
      width: 70%;
      font-size: 1.3rem;
    }
    .btn {
      position: absolute;
      top: 0;
      right: 10%;
    }
    @media (max-width: 36rem) {
      .label {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 27rem) {
    .label {
      font-size: 0.75rem;
    }
  }
`,Xo=()=>e.jsx(e.Fragment,{children:e.jsx(Y,{className:"section-container",children:e.jsxs("div",{className:"container ",children:[e.jsx("h2",{className:"title title-medium",children:"Featured Projects"}),e.jsx(V,{cardsData:Qo,gridRows:"big-screen grid grid--2--row"}),e.jsx(u,{className:"btn-container",to:"projects",children:e.jsx("button",{className:"btn",children:"Explore more"})})]})})}),Zo=()=>e.jsxs(e.Fragment,{children:[e.jsx(st,{}),e.jsx(rt,{}),e.jsx(Lo,{}),e.jsx(Vo,{}),e.jsx(Xo,{}),e.jsx(Ro,{}),e.jsx(Yo,{}),e.jsx(M,{})]}),er="/IGNIT-Crew/assets/about-bg-BvURiJRF.png",L="/IGNIT-Crew/assets/about-bg2-BsIEKOnv.jpeg",tr=l.section`
  display: flex;
  gap: 0.5rem;
  background-color: var(--black);
  height: 100%;
  width: 100%;

  .image-box {
    margin: auto 0;
    /* width: 42%; */
    height: 50rem;
    width: 50%;
    display: block;
    background-image: url(${L});
    background-size: cover;
    background-position: center;
  }
  .right {
    flex: 1;
    min-width: 40%;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
    max-width: 80rem;
  }
  .text {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 3px rgb(0, 0, 0);
  }
  .highlight {
    font-size: 1.7rem;
    color: var(--primary-400);
    font-family: 'Rama Gothic M';
    margin-bottom: 2.5rem;
  }
  @media (max-width: 48rem) {
    background: linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.66)),
      url(${L});
    background-size: cover;
    background-position: center;
    /* height: 100vh; */
    width: 100%;
    padding: 2rem 0;

    .image-box {
      display: none;
    }
    .right {
      align-items: center;
      text-align: center;
    }
    .text {
      margin-bottom: 1rem;
      /* max-width: 95%; */
      font-size: 1.4rem;
    }
    /*  .highlight {
      margin-bottom: 2.5rem;
    } */
  }
  @media (max-width: 44rem) {
    .text {
      font-size: 1.2rem;
    }
    .right {
      gap: 1rem;
    }
  }
  @media (max-width: 36rem) {
    .text {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .highlight {
      margin-bottom: 0.5rem;
      font-size: 1.6rem;
    }
  }
  @media (max-width: 27rem) {
    .highlight {
      font-size: 1.3rem;
    }
  }
`,or=()=>e.jsxs(tr,{className:".section-container",children:[e.jsx("div",{className:"image-box",role:"img ","aria-label":"img"}),e.jsxs("div",{className:"right",children:[e.jsx("h3",{className:"title title-big",children:"WHO WE ARE"}),e.jsx("p",{className:"text",children:"Since our establishment in 2001, we have persistently grown to become one of the leading below-the-line (BTL) agencies in the MENA region. Our journey began in Cairo with just a handful of employees and clients, but we have now expanded to over 200 talented individuals, established offices in Cairo and Dubai, and secured partnerships with over 100 top-tier clients. Our creative potential knows no bounds, and we excel at transforming imaginative concepts into reality with our artisanal craftsmanship, thanks to our privately-owned production house. We are extremely proud to have built and maintained our reputation for more than two decades."}),e.jsx("p",{className:"highlight",children:"our plan for the future is to exceed even higher benchmarks."}),e.jsx(u,{to:"/IGNIT-Crew/contact",children:e.jsx("button",{className:"btn",children:"start campaign"})})]})]}),rr="/IGNIT-Crew/assets/Inspiration-bg-CZHqPWvL.svg",Q=l.section`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url(${rr});
  background-repeat: no-repeat;
  background-color: var(--primary-400);
  background-position-x: 98%;

  .container {
    margin: 0 5rem;
    max-width: 60%;
  }
  .content {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .row {
    display: flex;
    gap: 5rem;
  }
  .feature {
    padding: 3rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    color: var(--black);
    width: 25%;
    margin-bottom: 5rem;
  }

  .text-box {
    color: var(--white);
    font-size: 1.125rem;
    max-width: 62%;
    line-height: 1.5;
  }
  .quote {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 700;
  }

  //NewsletterForm style
  .newsletter-title {
    color: var(--white);
    font-family: 'Rama Gothic M';
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 20px;
  }

  .input-wrapper input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--black);
    padding: 10px 35px 10px 5px;
    font-size: 14px;
    color: var(--black);
    outline: none;
  }

  .input-wrapper input::placeholder {
    font-size: 0.8rem;
    color: #333;
  }

  .email-icon {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--white);
  }

  .send-btn {
    background-color: var(--black);
    color: var(--white);
    border: none;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 13px;
    border-radius: 20px;
    cursor: pointer;
  }

  @media (max-width: 48rem) {
    .row {
      flex-direction: column;
      gap: 2rem;
    }
    .text-box {
      max-width: 100%;
    }
    .container {
      max-width: 80%;
      margin: auto;
    }
    .title {
      margin-bottom: 0;
    }
  }
  @media (max-width: 44rem) {
    .container {
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 27rem) {
    .quote {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 12.5rem) {
    .input-wrapper input::placeholder {
      font-size: 0.5rem;
    }
  }
`,ar=()=>e.jsx(Q,{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"content ",children:[e.jsxs("div",{className:"row",children:[e.jsx("h3",{className:"title title-extra",children:"mission"}),e.jsx("div",{className:"text-box",children:e.jsx("p",{children:"We inspire our clients with a vast array of original concepts, complemented by top-notch production, so that they may stand out in a crowded marketplace and create lasting impressions."})})]}),e.jsxs("div",{className:"row",children:[e.jsx("h3",{className:"title title-extra",children:"vision"}),e.jsx("div",{className:"text-box",children:e.jsx("p",{children:"At the core of our vision is the aim to use innovation to craft remarkable experiences for our top-tier brands, and in doing so, establish ourselves as the preeminent BTL agency in the MENA region"})})]})]})})}),ir="/IGNIT-Crew/assets/propositionSection-bg-TNAn00aJ.png",sr=l.section`
  position: relative;
  background: url(${ir}) center/cover no-repeat;
  color: var(--white);
  width: 100%;
  height: fit-content;
  background-color: var(--black);

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    align-content: center;
    column-gap: 1.5rem;
    row-gap: 1rem;
    width: 100%;
  }
  .card-box {
    background-color: transparent;
    border: 1px solid var(--primary-400);
  }
  .card-title {
    font-size: 2.5rem;
    top: 20%;
  }
  .separator {
    top: 7%;
  }

  @media (max-width: 62rem) {
  }
  @media (max-width: 48rem) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 36rem) {
    .card-title {
      font-size: 1.8rem;
    }
  }
`,nr=[{icon:!1,title:"originality",text:`We put in the work to make sure the experiences we create and ideas we have never been executed before. We are always working on innovating our concepts.

`},{icon:!1,title:"time management",text:`With a reliable team and premium resources, we are able to produce within a time bracket unlike like no other.


`},{icon:!1,title:"experience",text:`Our work in the field for more than two decades, has resulted in us being one of Egypt's longest standing marketing agencies. Our experience is not only associated with time, but also associated with quality, we’ve consistently delivered state of the art projects throughout the years. 


`},{icon:!1,title:"quality",text:`Having our own production house allows us to implement ideas in the most efficient way and in superior quality. It is one thing to explain your vision to someone else for execution, and a whole other thing when the visionaries themselves get to bring their own ideas to life.


`}],lr=()=>e.jsx(e.Fragment,{children:e.jsx(sr,{className:"section-container",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"content",children:[e.jsx("h2",{className:"title title-big",children:"VALUE PROPOSITION"}),e.jsx("div",{className:"cards-grid",children:nr.map((t,o)=>e.jsx(H,{icon:t.icon,title:t.title,text:t.text},o))})]})})})}),cr="/IGNIT-Crew/assets/valuesSection-bg-DvBVpabB.png",dr=l.section`
  position: relative;
  background: url(${cr}) center/cover no-repeat;
  color: var(--white);
  width: 100%;
  height: fit-content;
  background-color: var(--black);

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    align-content: center;
    column-gap: 1.5rem;
    row-gap: 1rem;
    width: 100%;
  }

  @media (max-width: 62rem) {
  }
  @media (max-width: 48rem) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 36rem) {
    .card-title {
      font-size: 1.35rem;
    }
  }
`,mr=[{icon:e.jsx(pe,{}),title:"get it done",text:`We're all about making things happen. We don't just talk the talk; we walk the walk. We're determined to bring our ideas to life and make them a reality. And we don't stop until we've achieved the results you deserve. It's all about working together to reach our goals and celebrate our wins!
`},{icon:e.jsx(he,{}),title:"love what we do",text:`We're all about that passion! We're not just working for a paycheck; we're working for the brands we love. We know that every brand has a story to tell, and we're dedicated to bringing that story to life. We put our heart and soul into every project we take on to create an unforgettable experience that perfectly captures the essence of the brand.

`},{icon:e.jsx(ue,{}),title:"always growing",text:`We believe that growth is a daily journey. We're constantly looking for ways to improve and be better at what we do. We're not afraid of honest feedback, because we know it helps us grow. And when we hit a roadblock, we don't give up - we find a way to overcome it and come out even stronger.

`},{icon:e.jsx(xe,{}),title:"keep it real",text:`We're all about honesty and integrity. We treat others with respect and dignity, because that's just the right thing to do. We start with trust, and we take the time to understand different perspectives. We hold ourselves accountable and always do the right thing. With us, you can always count on integrity!

`}],gr=()=>e.jsx(e.Fragment,{children:e.jsx(dr,{className:"section-container",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"content",children:[e.jsx("h2",{className:"title title-big",children:"values"}),e.jsx("div",{className:"cards-grid",children:mr.map((t,o)=>e.jsx(H,{icon:t.icon,title:t.title,text:t.text},o))})]})})})}),pr=l.section`
  background-color: var(--primary-400);
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 6rem;
  h3 {
    color: var(--white);
    font-weight: 700;
    font-size: 3.2rem;
    text-transform: uppercase;
    text-align: center;
  }
  @media (max-width: 36rem) {
    padding: 6rem 6rem;
    h3 {
      font-size: 2rem;
    }
  }
`,hr=()=>e.jsx(pr,{children:e.jsx("h3",{children:"EMPOWERING INNOVATIONS"})}),ur=()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"about us",imgPath:er}),e.jsx(or,{}),e.jsx(ar,{}),e.jsx(gr,{}),e.jsx(lr,{}),e.jsx(hr,{}),e.jsx(M,{})]}),xr="/IGNIT-Crew/assets/clientspage-bg-2nEN8qq8.jpg",x=({children:t,quote:o})=>e.jsx(Q,{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"content ",children:e.jsxs("div",{className:"feature",children:[o&&e.jsx("h2",{className:"quote",children:o}),t]})})})}),fr=l.section`
  background: #e6e6e6;
  text-align: center;
  padding: 2rem 5rem;

  .logos-grid {
    margin: 3rem auto;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    column-gap: 8rem;
    row-gap: 2rem;
    transition: var(--transition);
    opacity: 1;
    max-width: 65rem;
    /* height: 70rem; */

    /*     display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  justify-items: center;
  align-items: center;
  margin-bottom: 30px; */
  }

  .fade-out {
    opacity: 0;
  }

  .fade-in {
    opacity: 1;
  }
  .logos-grid img {
    height: 9.4rem;
    width: 9.4rem;
    object-fit: contain;
    transition: var(--transition);
  }

  .logos-grid img:hover {
    transform: scale(1.1);
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.625rem;
  }

  .pagination span {
    padding: 0.5rem 0.75rem;
    color: var(--black);
    background: white;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  .pagination .active {
    background: var(--primary-400) !important;
  }
  .pagination span:active {
    transform: scale(0.95);
  }
  .pagination span:hover {
    background: var(--white);
  }

  @media (max-width: 52.5rem) {
    /* .logos-grid {
      grid-template-columns: repeat(3, minmax(100px, 1fr));
    } */
  }
  @media (max-width: 44rem) {
    /*  .logos-grid {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
    } */
  }
  @media (max-width: 15.7rem) {
    /*     .pagination {
      gap: 0.525rem;
    }*/
    .pagination span {
      padding: 0.3rem 0.55rem;
    }
    /*  .logos-grid {
      grid-template-columns: repeat(1, minmax(100px, 1fr));
    } */
  }
`,E=20,wr=()=>{const[t,o]=c.useState(1),a=Math.ceil(S.length/E),[i,r]=c.useState(!1),[s,n]=c.useState(5);c.useEffect(()=>{const m=()=>{window.innerWidth<480?n(3):window.innerWidth<768?n(5):n(7)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const d=m=>{m<1||m>a||(r(!0),setTimeout(()=>{o(m),r(!1)},300))},g=S.slice((t-1)*E,t*E);let h=Math.max(1,t-Math.floor(s/2)),p=h+s-1;p>a&&(p=a,h=Math.max(1,p-s+1)),p>a&&(p=a,h=Math.max(1,p-s+1));const B=[];for(let m=h;m<=p;m++)B.push(m);return e.jsxs(fr,{className:"client-logos",children:[e.jsx("div",{className:`logos-grid ${i?"fade-out":"fade-in"}`,children:g.map((m,X)=>e.jsx("img",{src:m.src,alt:m.alt},X))}),e.jsxs("div",{className:"pagination",children:[e.jsx("span",{onClick:()=>d(1),children:"«"}),e.jsx("span",{onClick:()=>d(t-1),children:"‹"}),B.map(m=>e.jsx("span",{className:m===t?"active":"",onClick:()=>d(m),children:m},m)),e.jsx("span",{onClick:()=>d(t+1),children:"›"}),e.jsx("span",{onClick:()=>d(a),children:"»"})]})]})},br=()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"clients",imgPath:xr}),e.jsx(wr,{}),e.jsx(x,{quote:"PIONEERING WITH PURPOSE"}),e.jsx(M,{})]}),jr="/IGNIT-Crew/assets/contactpage-bg-C4xFkAu4.jpg",vr=l.section`
  background-color: var(--black);
  padding: 3.75rem 2.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-title {
    color: var(--primary-400);
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    align-self: flex-start;
  }

  .contact-form {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    width: 80vw;
  }

  .left-fields,
  .right-fields {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .contact-form input,
  .contact-form textarea {
    background: transparent;
    color: var(--white);
    outline: none;
    border: none;
    border-bottom: 2px solid var(--primary-400);
    padding: 0.625rem 0.3125rem;
    font-size: 0.875rem;
    width: 100%;
    transition: var(--transition);
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: var(--white);
  }

  .contact-form textarea {
    border: 2px solid var(--primary-400);
    border-radius: var(--border-radius);
    resize: vertical;
    width: 100%;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: rgba(201, 201, 201, 0.7);
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  .contact-form button {
    align-self: center;
  }
  @media (max-width: 48rem) {
    .contact-form {
      flex-direction: column;
    }
  }
`,Nr=()=>{const[t,o]=c.useState({fullName:"",email:"",phone:"",jobTitle:"",companyName:"",message:""}),a=r=>{const{name:s,value:n}=r.target;o(d=>({...d,[s]:n}))},i=async r=>{r.preventDefault();try{await A.post("http://localhost:5000/api/contact",t),alert("Message sent!"),o({fullName:"",email:"",phone:"",jobTitle:"",companyName:"",message:""})}catch(s){console.error(s),alert("Failed to send message")}};return e.jsx(vr,{className:"contact-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"form-title",children:"GET IN TOUCH"}),e.jsxs("form",{className:"contact-form",onSubmit:i,children:[e.jsxs("div",{className:"left-fields",children:[e.jsx("input",{type:"text",name:"fullName",placeholder:"FULL NAME*",value:t.fullName,onChange:a,required:!0}),e.jsx("input",{type:"email",name:"email",placeholder:"EMAIL ADDRESS*",value:t.email,onChange:a,required:!0}),e.jsx("input",{type:"tel",name:"phone",placeholder:"MOBILE NUMBER*",value:t.phone,onChange:a,required:!0}),e.jsx("input",{type:"text",name:"jobTitle",placeholder:"JOB TITLE (OPTIONAL)",value:t.jobTitle,onChange:a}),e.jsx("input",{type:"text",name:"companyName",placeholder:"COMPANY NAME",value:t.companyName,onChange:a})]}),e.jsxs("div",{className:"right-fields",children:[e.jsx("textarea",{name:"message",placeholder:"MESSAGE",rows:"12",value:t.message,onChange:a}),e.jsx("button",{className:"btn",type:"submit",children:"SEND"})]})]})]})})},yr=l.section`
  background-color: var(--black);
  padding: 3.75rem 2.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-title {
    color: var(--primary-400);
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    align-self: flex-start;
  }

  .contact-form {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    flex-direction: column;
    width: 80vw;
  }

  .radio-group {
    display: flex;
    gap: 1.875rem;
  }

  .radio-group label {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input[type='radio'] {
    accent-color: var(--primary-400); /* modern browsers only */
    width: 1.25rem !important;
    height: 1.25rem !important;
    cursor: pointer;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem 2.5rem;
  }

  .contact-form input,
  .contact-form textarea {
    background: transparent;
    color: var(--white);
    outline: none;
    border: none;
    border-bottom: 2px solid var(--primary-400);
    padding: 0.625rem 0.3125rem;
    font-size: 0.875rem;
    width: 100%;
    transition: var(--transition);
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: var(--white);
  }
  .contact-form textarea {
    border: 2px solid var(--primary-400);
    border-radius: var(--border-radius);
    resize: vertical;
    width: 100%;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: rgba(201, 201, 201, 0.7);
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  .upload-group {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }

  .upload-label {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.6875rem 0;
    border-bottom: 2px solid var(--primary-400);
  }
  .label-title {
    padding-right: 1.7rem;
  }

  .upload-label input {
    display: none;
  }

  .upload-icon {
    position: absolute;
    right: 0;
    top: 0.5rem;
    font-size: 1.125rem;
    color: var(--primary-400);
  }

  .or-text {
    position: relative;
  }

  .or-text p {
    position: absolute;
    font-size: 0.75rem;
    color: #cfcfcf;
    left: 0;
    top: 0.625rem;
  }

  .email {
    color: var(--primary-400);
    font-weight: bold;
  }

  .full-width {
    grid-column: 1 / 3;
  }
  .btn {
    justify-self: flex-end;
  }

  @media (max-width: 48rem) {
    .form-grid {
      display: flex;
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;
    }
    .full-width {
      grid-column: 1 / 1;
    }
    @media (max-width: 11.5rem) {
      .or-text p {
        font-size: 0.5rem;
      }
    }
  }
`,Ir=()=>{const[t,o]=c.useState({fullName:"",position:"",email:"",phone:"",message:"",location:"CAI"}),[a,i]=c.useState(null),r=d=>{const{name:g,value:h}=d.target;o(p=>({...p,[g]:h}))},s=d=>{i(d.target.files[0])},n=async d=>{if(d.preventDefault(),!t.fullName||!t.position||!t.email||!t.phone)return alert("Please fill in all required fields.");const g=new FormData;Object.entries(t).forEach(([h,p])=>{g.append(h,p)}),a&&g.append("resume",a);try{await A.post("http://localhost:5000/api/apply",g),alert("Application submitted successfully!"),o({fullName:"",position:"",email:"",phone:"",message:"",location:"CAI"}),i(null)}catch(h){console.error(h),alert("Failed to submit application.")}};return e.jsx(yr,{className:"join-crew-form",children:e.jsxs("div",{className:"container",children:[e.jsxs("h2",{className:"form-title",children:["WANNA BE A PART OF ",e.jsx("br",{})," ",e.jsx("span",{children:"THE CREW?"})]}),e.jsxs("form",{className:"contact-form",onSubmit:n,children:[e.jsxs("div",{className:"radio-group",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"location",value:"CAI",checked:t.location==="CAI",onChange:r}),"CAI"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"location",value:"DXB",checked:t.location==="DXB",onChange:r}),"DXB"]})]}),e.jsxs("div",{className:"form-grid",children:[e.jsx("input",{type:"text",name:"fullName",placeholder:"FULL NAME*",value:t.fullName,onChange:r,required:!0}),e.jsx("input",{type:"text",name:"position",placeholder:"POSITION*",value:t.position,onChange:r,required:!0}),e.jsx("input",{type:"email",name:"email",placeholder:"EMAIL ADDRESS*",value:t.email,onChange:r,required:!0}),e.jsxs("div",{className:"upload-group",children:[e.jsxs("label",{className:"upload-label",children:[e.jsx("span",{className:"label-title",children:"ATTACH YOUR RESUME"}),e.jsx("input",{type:"file",onChange:s}),e.jsx("span",{className:"upload-icon",children:e.jsx(fe,{})})]}),e.jsx("div",{className:"or-text",children:e.jsxs("p",{children:["OR SEND YOUR CV AT ",e.jsx("br",{}),e.jsx("span",{className:"email",children:"INFO@IGNITNCREW.COM"})]})})]}),e.jsx("input",{type:"tel",name:"phone",placeholder:"MOBILE NUMBER*",value:t.phone,onChange:r,required:!0}),e.jsx("textarea",{name:"message",placeholder:"MESSAGE",rows:"10",className:"full-width",value:t.message,onChange:r}),e.jsx("button",{type:"submit",className:"btn full-width",children:"SUBMIT"})]})]})]})})},Cr=()=>{const[t,o]=c.useState(""),a=async i=>{i.preventDefault();try{await A.post("http://localhost:5000/api/newsletter",{email:t}),alert("Subscribed successfully!"),o("")}catch(r){console.error(r),alert("Subscription failed.")}};return e.jsxs(x,{children:[e.jsx("h2",{className:"newsletter-title",children:"SUBSCRIBE TO OUR NEWSLETTER"}),e.jsxs("form",{onSubmit:a,children:[e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{type:"email",placeholder:"Enter Your Email ...",value:t,onChange:i=>o(i.target.value),required:!0}),e.jsx("span",{className:"email-icon",children:e.jsx(we,{size:20})})]}),e.jsx("button",{type:"submit",className:"send-btn",children:"SEND"})]})]})},kr=()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"projects",imgPath:jr}),e.jsx(Nr,{}),e.jsx(Ir,{}),e.jsx(Cr,{})]}),Tr="/IGNIT-Crew/assets/projects-bg-d0clcLI7.jpg",$=[{img:U,text:"BISKREM-2024 - الحلو بيكمل أحلى",category:"pos-marketing",link:"/IGNIT-Crew/projects/proj1"},{img:q,text:"NISSAN-DARING AFRICA-2024",category:"stunts",link:"/IGNIT-Crew/projects/proj2"},{img:_,text:"PEPSI-THE HOUSE OF FIZZ-2023",category:"activation",link:"/IGNIT-Crew/projects/proj3"},{img:K,text:"BRITISH PETROLEUM - LAUNCH EVENT",category:"events",link:"/IGNIT-Crew/projects/proj4"},{img:J,text:"TOTAL ENERGIES - YLT FINAL",category:"team-building",link:"/IGNIT-Crew/projects/proj5"}],Er=()=>{const t=["all","activation","events","exhibitions","roadshows","pos-marketing","stunts","team-building","digital-marketing"],[o,a]=c.useState("all"),i=o==="all"?$:$.filter(r=>r.category.toLowerCase()===o);return e.jsx(Y,{className:"section-container",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"header",children:[e.jsx("h2",{className:"title title-medium",children:"Category"}),e.jsx("select",{className:"category-select",value:o,onChange:r=>a(r.target.value),children:t.map(r=>e.jsx("option",{value:r.toLowerCase(),children:r},r))})]}),e.jsx(V,{cardsData:i,gridRows:"big-screen grid"})]})})},Sr=()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"projects",imgPath:Tr}),e.jsx(Er,{}),e.jsx(x,{quote:"ELEVATING POSSIBILITIES"})]}),Gr=l.div`
  background: #000;
  padding: 2rem;
  text-align: center;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  .tag-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-bottom: 1rem;
  }

  .tag-dot {
    font-size: 0.9rem;
    font-weight: 600;
    position: relative;
    &::before {
      content: '';
      height: 0.8rem;
      width: 0.8rem;
      border-radius: 50%;
      font-size: 2rem;
      background-color: var(--primary-400);
      position: absolute;
      /* top: 50%; */
      left: -1.5rem;
    }
  }

  .slider-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
  }

  .main-image {
    width: auto;
    height: 25rem;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  /*  .thumbnails {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
  } */

  .thumbnails img {
    width: 100%;
    border-radius: 0.5rem;
    height: 6rem;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .thumbnails img.active {
    border-color: orange;
  }

  .arrows {
    display: flex;
    gap: 6rem;
    justify-content: center;
    align-items: center;
  }
  .arrow {
    background: none;
    color: var(--primary-400);
    font-size: 2rem;
    /* position: absolute; */
    top: 50%;
    /* transform: translateY(-200%); */
    cursor: pointer;
    z-index: 1;
    border: none;
  }

  .arrow.left {
    left: 0;
  }

  .arrow.right {
    right: 0;
  }
  .project-details {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    gap: 1rem;
    color: var(--white);
    font-family: 'Rubik';
  }
  .details-title {
    color: var(--primary-400);
  }
  .slider-container {
    position: relative;
    width: 100%;
    max-width: 700px;
    margin: auto;
  }

  .main-image {
    width: 100%;
    border-radius: 8px;
  }

  .thumbnails {
    margin-top: 1rem;
    width: 100%;
  }

  .thumb {
    width: 100%;
    height: auto;
    border-radius: 4px;
    opacity: 0.6;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: opacity 0.3s, border 0.3s;
  }

  .thumb.active {
    opacity: 1;
    border: 2px solid orange;
  }
`,f=({images:t,tags:o,desc:a})=>e.jsxs(Gr,{children:[e.jsx(Xe,{tags:o}),e.jsx(Qe,{images:t}),e.jsxs("div",{className:"project-details",children:[e.jsx("h2",{className:"details-title",children:"Project details"}),e.jsx("p",{children:a})]})]}),w="/IGNIT-Crew/assets/img1-D_HFAgcb.jpg",b="/IGNIT-Crew/assets/img2-BCI5aPPr.jpg",j="/IGNIT-Crew/assets/img3-BpbFp77A.jpg",v="/IGNIT-Crew/assets/img4-DIN8IO8-.jpg",N="/IGNIT-Crew/assets/img5-COfP7kjg.jpg",y="/IGNIT-Crew/assets/img6-DhCDc6rL.jpg",I="/IGNIT-Crew/assets/img7-YE5vwpvW.jpg",zr=[w,b,j,v,N,y,I],Ar=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],Or="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",Mr=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{images:zr,tags:Ar,desc:Or}),e.jsx(x,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),Br=[w,b,j,v,N,y,I],Rr=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],Pr="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",Dr=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{images:Br,tags:Rr,desc:Pr}),e.jsx(x,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),Fr=[w,b,j,v,N,y,I],Lr=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],$r="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",Wr=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{images:Fr,tags:Lr,desc:$r}),e.jsx(x,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),Hr=[w,b,j,v,N,y,I],Vr=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],Ur="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",qr=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{images:Hr,tags:Vr,desc:Ur}),e.jsx(x,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),_r=[w,b,j,v,N,y,I],Kr=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],Jr="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",Yr=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{images:_r,tags:Kr,desc:Jr}),e.jsx(x,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),Qr=be([{path:"/IGNIT-Crew",element:e.jsx(Ze,{}),errorElement:e.jsx(tt,{}),children:[{index:!0,element:e.jsx(Zo,{})},{path:"about",element:e.jsx(ur,{})},{path:"projects",element:e.jsx(Sr,{})},{path:"/IGNIT-Crew/projects/proj1",element:e.jsx(Mr,{})},{path:"/IGNIT-Crew/projects/proj2",element:e.jsx(qr,{})},{path:"/IGNIT-Crew/projects/proj3",element:e.jsx(Wr,{})},{path:"/IGNIT-Crew/projects/proj4",element:e.jsx(Yr,{})},{path:"/IGNIT-Crew/projects/proj5",element:e.jsx(Dr,{})},{path:"clients",element:e.jsx(br,{})},{path:"contact",element:e.jsx(kr,{})}]}]),Xr=()=>e.jsx(je,{router:Qr}),Zr=()=>(c.useEffect(()=>{(async()=>{const a=Date.now(),i=document.getElementById("hero-video");i&&await new Promise(n=>{if(i.readyState>=3)return n();i.addEventListener("canplaythrough",n,{once:!0})});const r=Date.now()-a,s=Math.max(3e3-r,0);setTimeout(()=>{const n=document.getElementById("initial-loader");n&&(n.style.opacity="0",n.style.pointerEvents="none",n.style.transition="opacity 0.4s ease",setTimeout(()=>{n.remove()},500))},s)})()},[]),e.jsx(Xr,{}));ve.createRoot(document.getElementById("root")).render(e.jsx(Ne.StrictMode,{children:e.jsx(Zr,{})}));
