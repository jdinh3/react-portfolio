import React from "react";
import Cards from "./Card";
import "./Card.css";

const projects = [
  {
    image: "/cretors_logo.jpeg",
    title: "Cretors",
    subtext: "Manufacturing company specializing in popcorn machines and more",
    site: "https://www.cretors.com/",
    description:
      "For this site, I used Postman to create and style the Hero banner as a custom widget. I added logic for users to see different pricing lists in the navigation depending on the customer group that the User is signed in under. I also added logic to display the brand intro to the category pages, and created the /memorial-promotion page which displays a promotion for three specific products.",
  },
  {
    image: "/acfcs.png",
    title: "ACFCS",
    subtext:
      "Association that educates in financial crime detection and prevention",
    site: "https://www.acfcs.org/",
    description:
      "For this site, I made updates to the Navigation logic, created and styled the review slider, created the icon cards as Shogun Custom Elements, and created the article pages through Shogun.",
  },
  {
    image: "/cerifi.png",
    title: "CeriFi",
    subtext: "Market Leader in financial services education and training",
    site: "https://cerifi.com/",
    description:
      "For this site, I created and styled the homepage and all main pages according to designs provided by the client.",
  },
  {
    image: "/nordisco.png",
    title: "Nordisco",
    subtext:
      "Shop Office Supplies, Office Furniture, Printer supplies, and more",
    site: "https://www.nordisco.com/",
    description:
      "For this site, I fixed the product page image slider to be responsive, I restyled the Hawksearch thumbnail images, fixed all Accessibility issues after running it through SiteImprove, made updates to the mobile product pages, and debugged post-launch issues.",
  },
  {
    image: "/marley.png",
    title: "House of Marley",
    subtext: "Shop Eco-Conscious and Sustainable tech accessories",
    site: "https://www.thehouseofmarley.com/",
    description:
      "For this site, I created the homepage and product pages in Shogun by creating custom elements according to the client's designs.",
  },
  {
    image: "/regent.png",
    title: "Regent",
    subtext:
      "Leading wholesale supplier of dollar store items & general merchandise",
    site: "https://regentproducts.com/",
    description:
      "For this site, I added a custom quantity functionality for products that have a specific custom field. This logic was added to both the product page and the checkout - it allows users to only be able to increase and decrease the quantity of the item by the multiplier provided in the custom field. If the item has this custom field, I also added logic to display a banner in the product page and checkout for each item stating that the item must be ordered in multiples of the Case Quantity. For the items that can only be ordered in the specific multiplier. I also added an additional button to the checkout page that allows the user to add all available quantity to the cart.",
  },
  {
    image: "/sabre.jpeg",
    title: "Sabre",
    subtext:
      "Self defense products from the #1 personal safety company in the world",
    site: "https://www.sabrered.com/",
    description: "For this site, I styled the product cards and product pages according to the client's designs.",
  },
  {
    image: "/badgley.png",
    title: "Badgley Mischka",
    subtext: "Shop Designer Clothes, Shoes, & Bridal Fashion",
    site: "https://www.badgleymischka.com/",
    description:
      "For this site, I updated the navigation logic to show a more custom navigation list, added brand logos to the category product pages, made style updates to the bridal pages, made the homepage more responsive in mobile views, and created coupon codes.",
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
