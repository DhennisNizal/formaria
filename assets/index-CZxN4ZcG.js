import{d as r,c as o,b as t,s as a,B as n,j as e}from"./index-CsNb3vqo.js";const s=r.section`
  width: 100%;
  display: block;
  margin-bottom: 8rem;
`,d=r.div`
  width: 90%;
  margin: auto;
`,m=r.h2`
  width: 25rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${o.darkGray};
  font-family: "Roboto", sans-serif;

  span {
    color: ${o.brown};
  }

  ${t.mobile} {
    font-size: 1.8rem;
    width: 70vw;
  }
`,l=r.div`
  display: grid;
  height: auto !important;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${t.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${t.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`,c=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: ${o.lightBrown};
  box-shadow: ${a.medium};
  overflow: hidden;

  .image-wrapper {
    overflow: hidden;
    border-radius: 1rem 1rem 0 0;

    img {
      width: 100%;
      height: 16.5rem;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .room-info {
    padding: 1.5rem;

    h3 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      color: ${o.brown};
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`,p=r(n)`
  background-color: ${o.brown};
  color: ${o.white};
  padding: 1.2rem;

  &:hover {
    background-color: ${o.brown} !important;
    color: ${o.white} !important;
    border: 1px solid ${o.brown} !important;
    transform: scale(1.02);
  }
`,h="/formaria/assets/standard-room-rzYNv16j.webp",f="/formaria/assets/deluxe-room-DvV3gTOZ.webp",g="/formaria/assets/suite-room-Bn8l6zmd.webp",u=[{id:1,image:h,title:"Standard Room",description:"Enjoy a comfortable stay with all the essentials, including cozy bedding, a private bathroom, and modern amenities—perfect for budget-friendly travel."},{id:2,image:f,title:"Deluxe Room",description:"Relax in a spacious setting with elegant interiors, upgraded furnishings, and enhanced amenities, offering the perfect mix of style and comfort."},{id:3,image:g,title:"Suite Room",description:"Indulge in refined luxury living and sleeping areas, premium amenities, and a sophisticated design crafted for a truly memorable stay."}],w=()=>e.jsx(s,{children:e.jsxs(d,{children:[e.jsxs(m,{children:["Where ",e.jsx("span",{children:"Comfort"})," Meets Style in Every Room"]}),e.jsx(l,{children:u.map(i=>e.jsxs(c,{children:[e.jsx("div",{className:"image-wrapper",children:e.jsx("img",{src:i.image,alt:i.title})}),e.jsxs("div",{className:"room-info",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.description}),e.jsx(p,{children:"Book Now"})]})]},i.id))})]})});export{w as default};
