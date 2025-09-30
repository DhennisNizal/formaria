import{G as s,d as a,b as e,c as i,j as r}from"./index-DvXcgLyQ.js";function l(o){return s({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M165.563 25l-87 174H432.93L339.207 25H165.563zM233 217v30h46v-30h-46zm-9 48c-1 0-9.308 1.608-18.52 5.15-9.21 3.543-20.243 8.823-30.648 15.444C154.023 298.836 137 317 137 336c0 59.297 28.834 104.436 59.836 151h118.328C346.166 440.436 375 395.297 375 336c0-19-17.023-37.164-37.832-50.406-10.405-6.621-21.437-11.9-30.648-15.444C297.308 266.608 289 265 288 265h-64z"},child:[]}]})(o)}const m=a.section`
  margin: 8rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`,d=a.div`
  max-width: 90%;
  display: flex;
  gap: 1rem;

  ${e.tablet} {
    flex-direction: column;
    align-items: center;
  }

  ${e.mobile} {
    flex-direction: column;
    align-items: center;
  }

  .about {
    width: 30%;
    height: 24rem;
    border-radius: 20% 1rem 20% 1rem;
    background-color: ${i.brown};
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${e.tablet} {
      width: 100%;
      border-radius: 10% 1rem 10% 1rem;
      height: 20rem;
    }

    ${e.mobile} {
      border-radius: 15% 1rem 15% 1rem;
      width: 100%;
      height: 15rem;
    }

    svg {
      font-size: 8rem;
      color: ${i.brown};
      background-color: ${i.white};
      border-radius: 50%;
      padding: 2rem;

      ${e.mobile} {
        font-size: 7rem;
        padding: 1.5rem;
      }
    }

    h3 {
      margin: 0;
      color: ${i.white};
      font-size: 1.3rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
    }
  }

  .who-we-are {
    display: flex;
    width: 70%;

    ${e.tablet} {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    ${e.mobile} {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .infos {
      background-color: ${i.lightBrown};
      border-radius: 1rem 0 0 1rem;
      height: auto;
      align-content: center;
      padding: 1.5rem;
      color: ${i.darkGray};

      ${e.tablet} {
        border-radius: 1rem 1rem 0 0;
      }

      ${e.mobile} {
        border-radius: 1rem 1rem 0 0;
      }

      h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 2rem;
        margin: 0;

        span {
          color: ${i.brown};
        }
      }

      p {
        line-height: 1.5rem;
        font-size: 1.1rem;

        &:nth-of-type(2) {
          padding-left: 1rem;
          border-left: 0.3rem solid ${i.brown};
        }
      }
    }

    img {
      object-fit: cover;
      height: 24rem;
      width: 50%;
      border-radius: 0 1rem 1rem 0;

      ${e.tablet} {
        width: 100%;
        border-radius: 0 0 1rem 1rem;
      }

      ${e.mobile} {
        width: 100%;
        border-radius: 0 0 1rem 1rem;
      }
    }
  }
`,c="/formaria/assets/about-thumbnail-Dw0G9RVf.webp",t={brand:{name:"Formaria | Est 2025",iconLabel:"Formaria Hotel"},section:{title:"Who we are",highlight:"we",paragraphs:["Formaria welcomes travelers from all walks of life. From families seeking relaxation, to couples on a romantic escape, and professionals on business trips. We are dedicated to providing a space where every guest finds comfort, connection, and lasting memories.","With us, every stay is more than just a visit, it’s an experience to treasure."],image:{src:c,alt:"Info thumbnail"}}},b=()=>r.jsx(m,{children:r.jsxs(d,{children:[r.jsxs("div",{className:"about",children:[r.jsx(l,{"aria-label":t.brand.iconLabel}),r.jsx("h3",{children:t.brand.name})]}),r.jsxs("div",{className:"who-we-are",children:[r.jsxs("div",{className:"infos",children:[r.jsxs("h2",{children:[t.section.title.split(" ")[0]," ",r.jsx("span",{children:t.section.highlight})," ",t.section.title.split(" ")[2]]}),t.section.paragraphs.map((o,n)=>r.jsx("p",{children:o},n))]}),r.jsx("img",{src:t.section.image.src,alt:t.section.image.alt,loading:"lazy"})]})]})});export{b as default};
