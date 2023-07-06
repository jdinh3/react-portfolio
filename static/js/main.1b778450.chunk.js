(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{21:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},50:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),n=i(13),o=i.n(n),c=(i(36),i(37),i(52)),r=(i(38),i(15)),d=i(1);var l=function(){return Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/",className:"nav-item",href:"#about",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/work",className:"nav-item",href:"#work",children:"Work"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-item",href:"/react-portfolio/JenniferResume2023.pdf",target:"_blank",children:"Resume"})})]})})};var h=function(){return Object(d.jsxs)("div",{className:"hero-container",children:[Object(d.jsx)("div",{className:"logo-container",children:Object(d.jsx)("a",{href:"/react-portfolio",children:Object(d.jsx)(c.a,{className:"logo",src:"/react-portfolio/signature-logo.png"})})}),Object(d.jsx)("div",{className:"nav-container",children:Object(d.jsx)(l,{})})]})};i(45),i(21);var p=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"tel:224.622.7111",children:"224.622.7111"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"mailto:jenny.p.dinh@gmail.com",target:"_blank",children:"jenny.p.dinh@gmail.com"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://github.com/jdinh3",target:"_blank",children:"GitHub"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/jennifer-dinh-154a80116/",target:"_blank",children:"LinkedIn"})})]})})},u=i(53),m=i(54);i(46),i(47);var b=function(){return Object(d.jsx)("div",{className:"about-section",children:Object(d.jsx)("div",{className:"about-container",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(m.a,{xs:12,sm:12,md:6,children:Object(d.jsx)(c.a,{className:"about-me-img",src:"/react-portfolio/my-image.jpeg"})}),Object(d.jsx)(m.a,{xs:12,sm:12,md:6,children:Object(d.jsxs)("div",{className:"about-me-text-container",children:[Object(d.jsx)("h1",{className:"about-me-header",children:"Jennifer Dinh"}),Object(d.jsx)("p",{className:"about-me-text",children:"A front-end developer based in the Chicagoland area with experience in web development within BigCommerce and Shopify. Passionate about creating great user experiences with a strong understanding of accessibility standards."}),Object(d.jsx)("p",{})]})})]})})})},j=i(14),g=i(26),f=i(27),x=i(31),O=i(29),y=i(56),v=i(30),w=i(55);function k(e){return Object(d.jsxs)(w.a,Object(j.a)(Object(j.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(d.jsx)(w.a.Header,{closeButton:!0,children:Object(d.jsx)(w.a.Title,{id:"contained-modal-title-vcenter",className:"project-title w-100 text-center",children:e.title})}),Object(d.jsx)(w.a.Body,{children:Object(d.jsx)("h6",{children:e.description})}),Object(d.jsx)(w.a.Footer,{style:{display:"flex",justifyContent:"center"},children:Object(d.jsxs)("div",{className:"btnLinks m-auto",children:[e.site?Object(d.jsx)("a",{href:e.site,className:"button btn",target:"_blank",children:"Site"}):null,e.tutorial?Object(d.jsx)("a",{href:e.tutorial,className:"button btn",target:"_blank",children:"Tutorial"}):null,e.repo?Object(d.jsx)("a",{href:e.repo,className:"button btn",target:"_blank",children:"Repo"}):null]})})]}))}var N=function(e){var t=s.a.useState(!1),i=Object(v.a)(t,2),a=i[0],n=i[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("a",{class:"projectBtn",variant:"primary",onClick:function(){return n(!0)},children:Object(d.jsx)("img",{src:e.image,className:"card-image",variant:"top"})}),Object(d.jsx)(k,Object(j.a)(Object(j.a)({},e),{},{show:a,onHide:function(){return n(!1)}}))]})},S=function(e){Object(x.a)(i,e);var t=Object(O.a)(i);function i(){return Object(g.a)(this,i),t.apply(this,arguments)}return Object(f.a)(i,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(y.a,{style:{width:"20rem"},children:[Object(d.jsx)(N,{image:"".concat("/react-portfolio").concat(this.props.image),site:this.props.site,repo:this.props.repo,title:this.props.title,description:this.props.description,tutorial:this.props.tutorial}),Object(d.jsxs)(y.a.Body,{children:[Object(d.jsx)(y.a.Title,{className:"card-main-text",children:this.props.title}),Object(d.jsx)(y.a.Text,{className:"card-sub-text",children:this.props.subtext})]})]})})}}]),i}(a.Component),I=[{image:"/cretors_logo.jpeg",title:"Cretors",subtext:"Manufacturing company specializing in popcorn machines and more",site:"https://www.cretors.com/",description:"For this site, I used Postman to create and style the Hero banner as a custom widget. I added logic for users to see different pricing lists in the navigation depending on the customer group that the User is signed in under. I also added logic to display the brand intro to the category pages, and created the /memorial-promotion page which displays a promotion for three specific products."},{image:"/acfcs.png",title:"ACFCS",subtext:"Association that educates in financial crime detection and prevention",site:"https://www.acfcs.org/",description:"For this site, I made updates to the Navigation logic, created and styled the review slider, created the icon cards as Shogun Custom Elements, and created the article pages through Shogun."},{image:"/cerifi.png",title:"CeriFi",subtext:"Market Leader in financial services education and training",site:"https://cerifi.com/",description:"For this site, I created and styled the homepage and all main pages according to designs provided by the client."},{image:"/nordisco.png",title:"Nordisco",subtext:"Shop Office Supplies, Office Furniture, Printer supplies, and more",site:"https://www.nordisco.com/",description:"For this site, I fixed the product page image slider to be responsive, I restyled the Hawksearch thumbnail images, fixed all Accessibility issues after running it through SiteImprove, made updates to the mobile product pages, and debugged post-launch issues."},{image:"/marley.png",title:"House of Marley",subtext:"Shop Eco-Conscious and Sustainable tech accessories",site:"https://www.thehouseofmarley.com/",description:"For this site, I created the homepage and product pages in Shogun by creating custom elements according to the client's designs."},{image:"/regent.png",title:"Regent",subtext:"Leading wholesale supplier of dollar store items & general merchandise",site:"https://regentproducts.com/",description:"For this site, I added a custom quantity functionality for products that have a specific custom field. This logic was added to both the product page and the checkout - it allows users to only be able to increase and decrease the quantity of the item by the multiplier provided in the custom field. If the item has this custom field, I also added logic to display a banner in the product page and checkout for each item stating that the item must be ordered in multiples of the Case Quantity. For the items that can only be ordered in the specific multiplier. I also added an additional button to the checkout page that allows the user to add all available quantity to the cart."},{image:"/sabre.jpeg",title:"Sabre",subtext:"Self defense products from the #1 personal safety company in the world",site:"https://www.sabrered.com/",description:"For this site, I styled the product cards and product pages."},{image:"/badgley.png",title:"Badgley Mischka",subtext:"Shop Designer Clothes, Shoes, & Bridal Fashion",site:"https://www.badgleymischka.com/",description:"For this site, I updated the navigation logic to show a more custom navigation list, added brand logos to the category product pages, made style updates to the bridal pages, made the homepage more responsive in mobile views, and created coupon codes."},{image:"/employee-directory.png",title:"Employee Directory",subtext:"A searchable and sortable employee directory",site:"https://jdinh3.github.io/employee-directory/",repo:"https://github.com/jdinh3/employee-directory",description:"This React application breaks down the UI into components (header, search bar, table of employees), manages component state, and responds to user events. Users are able to quickly search for an employee's name, and the application will dynamically filter out employees as the user inputs their search. The employee data was generated from randomuser.me API, and the application was created with React, Bootstrap, Node, HTML 5, CSS, Javascript, and JSX."},{image:"/e-commerce.avif",title:"E-Commerce Backend",subtext:"A backend application to view and create E-Commerce data",tutorial:"https://drive.google.com/file/d/1QneYkZaNPEIVITOrONwfParR7NlCI-4t/view",repo:"https://github.com/jdinh3/E-Commerce-Back-End",description:"This backend application allows a user to run Get, Post, Put, and Delete requests in their database to view and update their e-commerce products and product information. This application is created using JavaScript, MySQL, sequelize, dotenv, and express. The application displays user data through mySQL models and associations. Express is used to create the API routes which will then display specific data through CRUD operations."},{image:"/nasa.png",title:"Space Dashboard",subtext:"A dashboard for space hobbyists to keep up with astronomical events",site:"https://joshwrightdev.github.io/Project-1/",repo:"https://github.com/Joshwrightdev/Project-1",description:"This application is a dashboard where space hobbyists can view current astronomical events, and take notes on any information they want to keep track of. This dashboard was created with Javascript, CSS, Local Storage, Bootstrap, and multiple NASA API endpoints including weather, climate, and photos."}];var C=function(){return Object(d.jsx)("div",{className:"column",children:Object(d.jsx)("div",{className:"cards",children:I.map((function(e,t){return Object(d.jsx)("div",{className:"card-item",children:Object(d.jsx)(S,Object(j.a)({},e),t)})}))})})};var F=function(){return Object(d.jsx)(C,{})},T=(i(49),i(6));var P=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)(r.a,{basename:"/react-portfolio",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(T.c,{children:[Object(d.jsx)(T.a,{exact:!0,path:"/",component:b}),Object(d.jsx)(T.a,{exact:!0,path:"/about",component:b}),Object(d.jsx)(T.a,{exact:!0,path:"/work",component:F})]})]}),Object(d.jsx)(p,{})]})},B=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,57)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;i(e),a(e),s(e),n(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),B()}},[[50,1,2]]]);
//# sourceMappingURL=main.1b778450.chunk.js.map