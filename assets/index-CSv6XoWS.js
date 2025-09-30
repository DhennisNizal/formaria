import{d as r,c as o,b as e,G as a,j as t}from"./index-CsNb3vqo.js";const s="/formaria/assets/why-choose-us-DwFDtm_F.webp",l=r.section`
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom: 8rem;
  font-family: "Roboto", sans-serif;
`,h=r.div`
  height: auto;
  width: 90%;
  margin: auto;
`,d=r.h3`
  width: 25rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${o.darkGray};
  font-family: "Roboto", sans-serif;

  span {
    color: ${o.brown};
  }

  ${e.mobile} {
    font-size: 1.8rem;
    width: 100%;
  }
`,c=r.div`
  width: 100%;
  height: 35rem;
  display: flex;
  gap: 1rem;

  ${e.tablet} {
    flex-direction: column;
    height: auto;
  }

  ${e.mobile} {
    flex-direction: column;
    height: auto;
  }
`,m=r.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${e.tablet} {
    width: 100%;
    height: auto;
  }

  ${e.mobile} {
    width: 100%;
    height: auto;
  }

  .top {
    width: 100%;
    height: 50%;
    display: flex;
    gap: 1rem;

    ${e.tablet} {
      height: auto;
    }

    ${e.mobile} {
      flex-direction: column;
      height: auto;
    }
  }

  .top-left,
  .top-right {
    width: 50%;
    height: 100%;
    border-radius: 1rem;
    background-color: ${o.lightKhaki};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${e.tablet} {
      height: auto;
    }

    ${e.mobile} {
      height: auto;
      width: 100%;
    }

    p {
      margin: 0;
      color: ${o.darkGray};
      line-height: 1.3rem;
      width: 80%;
    }

    h4 {
      margin: 2rem 0 0.5rem 0;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${o.brown};
    }

    svg {
      font-size: 4rem;
      color: ${o.brown};
      stroke-width: 1.5;
    }
  }

  .bottom {
    width: 100%;
    height: 50%;
    background-image: url(${s});
    background-size: cover;
    background-position: center;
    border-radius: 1rem;

    ${e.tablet} {
      height: 15rem;
    }

    ${e.mobile} {
      height: 15rem;
    }
  }
`,g=r.div`
  height: 100%;
  width: 30%;
  background-image: linear-gradient(to top, #242015 0%, #a39262 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  ${e.tablet} {
    width: 100%;
    gap: 3rem;
  }

  ${e.mobile} {
    width: 100%;
    gap: 3rem;
  }

  .rightside-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h4 {
    margin: 1rem 0;
    color: ${o.lightBrown};
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    margin: 0;
    color: ${o.lightBrown};
    line-height: 1.3rem;
    width: 80%;
    text-align: center;
  }
`;function u(i){return a({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"},child:[]},{tag:"path",attr:{d:"M5 21h14"},child:[]}]})(i)}function p(i){return a({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(i)}const f=[{icon:u,title:"Superior Quality",description:"Stylish rooms and modern amenities ensure a relaxing and luxurious stay."},{icon:p,title:"Prime Location",description:"Conveniently situated near key attractions, shopping, and entertainment hubs."}],x=[{title:"Exceptional Dining",description:"Enjoy a variety of flavorful dishes prepared with the finest ingredients."},{title:"Personalized Service",description:"Our attentive staff is dedicated to making every moment unforgettable."}],w=()=>t.jsx(l,{children:t.jsxs(h,{children:[t.jsxs(d,{children:["Why ",t.jsx("span",{children:"Choose"})," Formaria"]}),t.jsxs(c,{children:[t.jsxs(m,{children:[t.jsx("div",{className:"top",children:f.map((i,n)=>t.jsxs("div",{className:n===0?"top-left":"top-right",children:[t.jsx(i.icon,{}),t.jsx("h4",{children:i.title}),t.jsx("p",{children:i.description})]},n))}),t.jsx("div",{className:"bottom"})]}),t.jsx(g,{children:x.map((i,n)=>t.jsxs("div",{className:"rightside-info",children:[t.jsx("h4",{children:i.title}),t.jsx("p",{children:i.description})]},n))})]})]})});export{w as default};
