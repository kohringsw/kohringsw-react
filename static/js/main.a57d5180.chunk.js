(this["webpackJsonpkohringsw-react"]=this["webpackJsonpkohringsw-react"]||[]).push([[0],{14:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),s=r(7),n=r.n(s),i=(r(6),r(2)),l=r.p+"static/media/kohr-development-hero.f6b5b978.jpg",o=r(0);var h=function(){return Object(o.jsxs)("section",{className:"col-12",children:[Object(o.jsx)("h1",{className:"about m-4 pb-3",id:"about",children:"About Me"}),Object(o.jsx)("img",{src:l,alt:"Shelby Kohring profile",className:"about-img col-11 ml-4 mt-2 p-2"}),Object(o.jsxs)("div",{className:"my-4 ml-4 mr-5",children:[Object(o.jsx)("p",{children:"Shelby was born and raised in Knoxville, Tennessee. He went to college at Lipscomb University from 2003-2007, where he received a Bachelor of Arts degree. He graduated in December of 2007 and spent 13 years in student ministry. While working on staff at three different churches during that time, he developed a professional skillset in relational team-building, communications, and presentations with a specific focus on graphic design."}),Object(o.jsx)("p",{children:"He is married to his beautiful wife, Jessi. They have three amazing kids, Ezra Kate, Eli Reese, and Knox. They currently live in Bethpage, Tennessee where they love to play outside, read fun books, watch movies together, and dream about when their next trip to Honduras will be."}),Object(o.jsx)("p",{children:"Shelby excels in design and development seeking to increase experience as a web developer, implementing different coding languages with a desire to help businesses and organizations better represent their brands online. His greatest hope professionally is to work on projects for companies and organizations that love and care about people. Long-term he would like to use what he learns on his journey to teach men and women in different parts of the world to help break multi-generational cycles of poverty."})]})]})},d=r(3),j=r(5);var b=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(""),n=Object(i.a)(s,2),l=n[0],h=n[1],b=r.name,m=r.email,g=r.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);h(t?"":"Your email is invalid.")}else e.target.value.length?h(""):h("".concat(e.target.name," is required."));l||(c(Object(j.a)(Object(j.a)({},r),{},Object(d.a)({},e.target.name,e.target.value))),console.log("Handle Form",r))};return Object(o.jsx)("section",{children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("h1",{className:"contact-h1 m-4 pb-3","data-testid":"h1tag",children:"Contact Me"}),Object(o.jsxs)("form",{class:"form-group m-4",id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",r)},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"name",defaultValue:b,onBlur:u})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",className:"form-control",name:"email",defaultValue:m,onBlur:u})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",className:"form-control",rows:"7",defaultValue:g,onBlur:u})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{"data-testid":"button",type:"submit",className:"button btn btn-block btn-secondary mt-4 text-white",children:"Send"})]})]})})},m=r.p+"static/media/github.ee37d539.svg",g=r.p+"static/media/instagram.7c7e27f8.svg",u=r.p+"static/media/linkedIn.62c630a3.svg",O=r.p+"static/media/email.ee4019c3.svg",x=r.p+"static/media/twitter.71600f6d.svg";var p=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("nav",{children:[Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("a",{className:"icon my-3 mx-5",href:"mailto:kohringsw@gmail.com",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:O,alt:"email icon"})}),Object(o.jsx)("a",{className:"icon my-3 mx-5",href:"https://github.com/kohringsw",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:m,alt:"github icon"})}),Object(o.jsx)("a",{className:"icon my-3 mx-5",href:"https://www.linkedin.com/in/shelby-kohring-3335171b8/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:u,alt:"linkedin icon"})}),Object(o.jsx)("a",{className:"icon my-3 mx-5",href:"https://www.instagram.com/shelbykohring/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:g,alt:"instagram icon"})}),Object(o.jsx)("a",{className:"icon my-3 mx-5",href:"https://www.twitter.com/shelbykohring/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:x,alt:"twitter icon"})})]}),Object(o.jsx)("div",{class:"bg-none row justify-content-center text-dark mt-3",children:Object(o.jsx)("p",{children:"created by Shelby Kohring, \xa9 2021"})})]})})};var f=function(e){var t=e.sectionSelected,r=e.setSectionSelected;return Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#About",onClick:function(){return r("About")},className:"".concat("About"===t&&"nav-active"),children:"ABOUT ME"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#Project",onClick:function(){return r("Project")},className:"".concat("Project"===t&&"nav-active"),children:"PROJECTS"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#Contact",onClick:function(){return r("Contact")},className:"".concat("Contact"===t&&"nav-active"),children:"CONTACT"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#Resume",onClick:function(){return r("Resume")},className:"".concat("Resume"===t&&"nav-active"),children:"RESUME"})})]})})};var w=function(e){var t=e.sectionSelected,r=e.setSectionSelected;return Object(o.jsxs)("header",{className:"header-box",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("a",{href:"/",children:"SHELBY KOHRING"})}),Object(o.jsx)(f,{sectionSelected:t,setSectionSelected:r})]})},k=r.p+"static/media/hike-now.6c4241ec.png",v=r.p+"static/media/weather-dashboard.f5072e7c.png",N=r.p+"static/media/simply-plan-it.e94c65bc.png",y=r.p+"static/media/password-generator.c8ee3cdf.png",S=r.p+"static/media/note-taker.b280c0fb.png",C=r.p+"static/media/bookfast-club.6a7a9e2f.png";var E=function(){return Object(o.jsx)("main",{children:Object(o.jsx)("div",{className:"project",children:Object(o.jsxs)("section",{className:"projects col-12",children:[Object(o.jsx)("div",{className:"section-title",children:Object(o.jsx)("h1",{className:"m-4 pb-3",children:"Projects"})}),Object(o.jsx)("div",{className:"container row col-md-9",children:Object(o.jsxs)("div",{className:"hike-now row ml-4 mb-5 mt-2",children:[Object(o.jsx)("a",{href:"https://kohringsw.github.io/hike-now/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"img p-2 d-block w-100 h-auto",src:k,alt:"Hike Now landing page"})}),Object(o.jsx)("a",{href:"https://github.com/kohringsw/hike-now",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("h5",{className:"overlay",children:"HIKE NOW REPO"})})]})}),Object(o.jsx)("div",{className:"container row col-md-9",children:Object(o.jsxs)("div",{className:"hike-now row ml-4 mb-5 mt-2",children:[Object(o.jsx)("a",{href:"https://kohringsw.github.io/weather-dashboard/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"img p-2 w-100 d-block h-auto",src:v,alt:"Weather Dashboard landing page"})}),Object(o.jsx)("a",{href:"https://github.com/kohringsw/weather-dashboard",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("h5",{className:"overlay",children:"WEATHER REPO"})})]})}),Object(o.jsx)("div",{className:"container row col-md-9",children:Object(o.jsxs)("div",{className:"hike-now row ml-4 mb-5 mt-2",children:[Object(o.jsx)("a",{href:"https://kohringsw.github.io/simply-plan-it/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"img p-2 w-100 d-block h-auto",src:N,alt:"Simply Plan It landing page"})}),Object(o.jsx)("a",{href:"https://github.com/kohringsw/simply-plan-it",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("h5",{className:"overlay",children:"PLAN IT REPO"})})]})}),Object(o.jsx)("div",{className:"container row col-md-9",children:Object(o.jsxs)("div",{className:"hike-now row ml-4 mb-5 mt-2",children:[Object(o.jsx)("a",{href:"https://kohringsw.github.io/password-generator/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"img p-2 w-100 d-block h-auto",src:y,alt:"Password Generator landing page"})}),Object(o.jsx)("a",{href:"https://github.com/kohringsw/password-generator",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("h5",{className:"overlay",children:"PASSWORD REPO"})})]})}),Object(o.jsx)("div",{className:"container row col-md-9",children:Object(o.jsxs)("div",{className:"hike-now row ml-4 mb-5 mt-2",children:[Object(o.jsx)("a",{href:"https://guarded-hollows-23398.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"img p-2 w-100 d-block h-auto",src:S,alt:"Note Taker landing page"})}),Object(o.jsx)("a",{href:"https://github.com/kohringsw/note-taker",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("h5",{className:"overlay",children:"NOTE TAKER REPO"})})]})}),Object(o.jsx)("div",{className:"container row col-md-9",children:Object(o.jsxs)("div",{className:"hike-now row ml-4 mb-5 mt-2",children:[Object(o.jsx)("a",{href:"https://the-bookfast-club.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"img p-2 w-100 d-block h-auto",src:C,alt:"Bookfast Club landing page"})}),Object(o.jsx)("a",{href:"https://github.com/BeatyPete/the-bookfast-club",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("h5",{className:"overlay",children:"BOOKFAST CLUB REPO"})})]})})]})})})},P=r.p+"static/media/shelby-kohring-resume.094a3c3d.jpg";var A=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"https://www.shelbykohring.com/assets/images/pdf/shelby-kohring-r%C3%A9sum%C3%A9.pdf",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:P,alt:"Shelby Kohring's resume",title:"click to download resume",className:"w-100"})})})};var _=function(){var e=Object(a.useState)("About"),t=Object(i.a)(e,2),r=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(w,{sectionSelected:r,setSectionSelected:c}),Object(o.jsxs)("div",{children:["About"===r&&Object(o.jsx)(h,{},"about-key"),"Project"===r&&Object(o.jsx)(E,{},"projects-key"),"Contact"===r&&Object(o.jsx)(b,{},"contact-key"),"Resume"===r&&Object(o.jsx)(A,{},"resume-key")]}),Object(o.jsx)(p,{})]})},R=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),a(e),c(e),s(e),n(e)}))};r(13);n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root")),R()},6:function(e,t,r){}},[[14,1,2]]]);
//# sourceMappingURL=main.a57d5180.chunk.js.map