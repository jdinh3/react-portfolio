import React from "react";
import Cards from "./Card";
import "./Card.css";

const projects = [
  {
    image: "/cretors_logo.jpeg",
    title: "Cretors",
    subtext: "Manufacturing company specializing in popcorn machines and more",
    site: "https://www.cretors.com/",
    description: "Custom Hero Banner",
  },
  {
    image: "/acfcs.png",
    title: "ACFCS",
    subtext: "Association that educates in financial crime detection and prevention",
    site: "https://www.acfcs.org/",
    description:
      "Worked on Navigation, slider, card styles, created main pages, article pages, and created custom elements in Shogun",
  },
  {
    image: "/cerifi.png",
    title: "CeriFi",
    subtext: "Market Leader in financial services education and training",
    site: "https://cerifi.com/",
    description: "Created homepage and all main pages according to designs",
  },
  {
    image: "/nordisco.png",
    title: "Nordisco",
    subtext: "Shop Office Supplies, Office Furniture, Printer supplies, and more",
    site: "https://www.nordisco.com/",
    description:
      "fixed the product slider to be responsive, styled the search images, fixed all Accessibility issues after running through SiteImprove testing, and debugged post-launch issues",
  },
  {
    image: "/marley.png",
    title: "House of Marley",
    subtext: "Shop Eco-Conscious and Sustainable tech accessories",
    site: "https://www.thehouseofmarley.com/",
    description:
      "Created the homepage and product page in Shogun by creating custom elements",
  },
  {
    image: "/regent.png",
    title: "Regent",
    subtext: "Leading wholesale supplier of dollar store items & general merchandise",
    site: "https://regentproducts.com/",
    description: "Added custom quantity functionality for specific products",
  },
  {
    image: "/sabre.jpeg",
    title: "Sabre",
    subtext: "Self defense products from the #1 personal safety company in the world",
    site: "https://www.sabrered.com/",
    description: "Styled the product cards and product pages",
  },
  {
    image: "/badgley.png",
    title: "Badgley Mischka",
    subtext: "Shop Designer Clothes, Shoes, & Bridal Fashion",
    site: "https://www.badgleymischka.com/",
    description:
      "Updates to custom navigation logic, brand logos, and bridal pages",
  },
  {
    image: "/employee-directory.png",
    title: "Employee Directory",
    subtext: "A searchable and sortable employee directory",
    site: "https://jdinh3.github.io/employee-directory/",
    repo: "https://github.com/jdinh3/employee-directory",
    description:
      "This React application breaks down the UI into components (header, search bar, table of employees), manages component state, and responds to user events. Users are able to quickly search for an employee's name, and the application will dynamically filter out employees as the user inputs their search. The employee data was generated from randomuser.me API, and the application was created with React, Bootstrap, Node, HTML 5, CSS, Javascript, and JSX.",
  },
  {
    image: "/e-commerce.avif",
    title: "E-Commerce Backend",
    subtext: "A backend application to view and create E-Commerce data",
    tutorial:
      "https://drive.google.com/file/d/1QneYkZaNPEIVITOrONwfParR7NlCI-4t/view",
    repo: "https://github.com/jdinh3/E-Commerce-Back-End",
    description:
      "This backend application allows a user to run Get, Post, Put, and Delete requests in their database to view and update their e-commerce products and product information. This application is created using JavaScript, MySQL, sequelize, dotenv, and express. The application displays user data through mySQL models and associations. Express is used to create the API routes which will then display specific data through CRUD operations.",
  },
  {
    image: "/nasa.png",
    title: "Space Dashboard",
    subtext:
      "A dashboard for space hobbyists to keep up with astronomical events",
    site: "https://joshwrightdev.github.io/Project-1/",
    repo: "https://github.com/Joshwrightdev/Project-1",
    description:
      "This application is a dashboard where space hobbyists can view current astronomical events, and take notes on any information they want to keep track of. This dashboard was created with Javascript, CSS, Local Storage, Bootstrap, and multiple NASA API endpoints including weather, climate, and photos.",
  },
];

function Project() {
  return (
    <div className="column">
      <div className="cards">
        {projects.map((project, i) => (
          <div className="card-item">
            <Cards key={i} {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
