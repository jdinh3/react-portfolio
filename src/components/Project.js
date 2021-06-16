import React from "react";
import Cards from "./Card";
import "./Card.css";

const projects = [
  {
    image: "/employee-directory.jpeg",
    title: "Employee Directory",
    subtext: "A searchable and sortable employee directory",
    deploy: "https://jdinh3.github.io/employee-directory/",
    repo: "https://github.com/jdinh3/employee-directory",
    description:
      "This React application breaks down the UI into components (header, search bar, table of employees), manages component state, and responds to user events. Users are able to quickly search for an employee's name, and the application will dynamically filter out employees as the user inputs their search. The employee data was generated from randomuser.me API, and the application was created with React, Bootstrap, Node, HTML 5, CSS, Javascript, and JSX.",
  },
  {
    image: "/fitness.jpeg",
    title: "Fitness Tracker",
    subtext: "A tracker to log your workouts and exercise stats",
    deploy:
      "https://stark-refuge-78989.herokuapp.com/?id=6096d3b98d88890015c4f1a4",
    repo: "https://github.com/jdinh3/fitness-tracker",
    description:
      "This application allows a user to log their fitness routine and exercises. The user is able to log either a cardio or resistance exercise and the details of their workout. The homepage displays the details of their last workout, and the dashboard shows the user's weekly workout stats. I programmed the backend of this application using MongoDB, Mongoose, Node, and Express server for routing.",
  },
  {
    image: "/budget.png",
    title: "Budget Tracker",
    subtext: "An application to log and track your expenses",
    deploy: "https://glacial-anchorage-50677.herokuapp.com/",
    repo: "https://github.com/jdinh3/budget-tracker",
    description:
      "This application allows a user to log their income and expenses. The user is able to enter a name for the transaction, and whether it should be added or subtracted to the total. Once the transaction is entered in, the user will see a line chart with the added transaction along with their past data. This application works offline as well -the user can enter in a transaction offline which will then be stored in IndexedDB, and then populated once the user is online again. I created the backend of this application using MongoDB, Mongoose, IndexedDB, and Express.",
  },
  {
    image: "/e-commerce.png",
    title: "E-Commerce Backend",
    subtext: "A backend application to view and create E-Commerce data",
    deploy:
      "https://drive.google.com/file/d/1QneYkZaNPEIVITOrONwfParR7NlCI-4t/view",
    repo: "https://github.com/jdinh3/E-Commerce-Back-End",
    description:
      "This backend application allows a user to run Get, Post, Put, and Delete requests in their database to view and update their e-commerce products and product information. This application is created using JavaScript, MySQL, sequelize, dotenv, and express. The application displays user data through mySQL models and associations. Express is used to create the API routes which will then display specific data through CRUD operations.",
  },
  {
    image: "/space.jpeg",
    title: "Space Dashboard",
    subtext:
      "A dashboard for space hobbyists to keep up with astronomical events",
    deploy: "https://joshwrightdev.github.io/Project-1/",
    repo: "https://github.com/Joshwrightdev/Project-1",
    description:
      "This application is a dashboard where space hobbyists can view current astronomical events, and take notes on any information they want to keep track of. This dashboard was created with Javascript, CSS, Local Storage, Bootstrap, and multiple NASA API endpoints including weather, climate, and photos.",
  },
  {
    image: "/weather.jpeg",
    title: "Weather Dashboard",
    subtext: "A 5-day Weather forecast application that utilizes Weather API",
    deploy: "https://jdinh3.github.io/weather-dashboard/",
    repo: "https://github.com/jdinh3/weather-dashboard",
    description:
      "This application allows the user to search the current weather and 5-day weather forecast for any city in the US. The forecast displays current date, temperature, wind speed, humidity, and UV index. Previous searches are also saved into Local Storage then generated as buttons to easily view your recent searches again. This application is created using HTML, CSS, JavaScript, Bootstrap, Moment JS, and multiple endpoints from the Open Weather Map data API (Current Weather Data, UV Index, and 5 day Forecast).",
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
