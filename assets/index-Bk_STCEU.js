import{c as e,b as r,d as o,j as t}from"./index-DvXcgLyQ.js";const n="/formaria/assets/hero-cover-BA5qSQ2l.webp",a=o.section`
  background-image: linear-gradient(
      to bottom,
      ${e.transparent}30%,
      ${e.black} 100%
    ),
    url(${n});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  margin: 1.5rem auto 0 auto;
  border-radius: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  ${r.mobile} {
    height: 100vh;
    border-radius: 0;
    margin: auto;
  }

  ${r.tablet} {
    height: 92vh;
  }

  .content {
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: ${e.white};
      font-family: "Oswald", sans-serif;
      font-size: 3rem;
      margin: 0;
      line-height: 3.5rem;
      text-align: center;
      max-width: 95%;
    }

    p {
      color: ${e.white};
      font-size: 1.1rem;
      font-family: "Roboto", sans-serif;
      text-align: center;
      max-width: 90%;
      line-height: 1.5rem;
    }

    ${r.tablet} {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
      }
    }

    ${r.mobile} {
      h1 {
        font-size: 2rem;
        line-height: 2.5rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`,i={heading:"Experience Timeless Comfort and Luxury",paragraph:"Step into a world of elegance where every detail is designed to delight. From stylish rooms to world-class amenities, your perfect escape begins here."},l=()=>t.jsx(a,{children:t.jsxs("div",{className:"content",children:[t.jsx("h1",{children:i.heading}),t.jsx("p",{children:i.paragraph})]})});export{l as default};
