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
  },
  {
    image: "/fitness.jpeg",
    title: "Fitness Tracker",
    subtext: "A tracker to log your workouts and exercise stats",
    deploy:
      "https://stark-refuge-78989.herokuapp.com/?id=6096d3b98d88890015c4f1a4",
    repo: "https://github.com/jdinh3/fitness-tracker",
  },
  {
    image: "/budget.png",
    title: "Budget Tracker",
    subtext: "An application to log and track your expenses",
    deploy: "https://glacial-anchorage-50677.herokuapp.com/",
    repo: "https://github.com/jdinh3/budget-tracker",
  },
  {
    image: "/e-commerce.png",
    title: "E-Commerce Backend",
    subtext: "A backend application to view and create E-Commerce data",
    deploy:
      "https://drive.google.com/file/d/1QneYkZaNPEIVITOrONwfParR7NlCI-4t/view",
    repo: "https://github.com/jdinh3/E-Commerce-Back-End",
  },
  {
    image: "/space.jpeg",
    title: "Space Dashboard",
    subtext:
      "A dashboard for space hobbyists to keep up with astronomical events",
    deploy: "https://joshwrightdev.github.io/Project-1/",
    repo: "https://github.com/Joshwrightdev/Project-1",
  },
  {
    image: "/weather.jpeg",
    title: "Weather Dashboard",
    subtext: "A 5-day Weather forecast application that utilizes Weather API",
    deploy: "https://jdinh3.github.io/weather-dashboard/",
    repo: "https://github.com/jdinh3/weather-dashboard",
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
