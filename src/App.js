import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import sectionData from "./data/section_data";
import Footer from "./components/Footer";
import projectsList from "./data/projects_list";
import Section from "./components/Section";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Section
          alignImg={"right"}
          title={sectionData[0].title}
          body={sectionData[0].body}
          imgSrc={sectionData[0].imgSrc}
        />
        <div className="row row-cols-md-3 g-5 mt-5 text-center">
          {projectsList.map(item => (
            <Card body={item.body} imgUrl={item.imgUrl} title={item.title} />
          ))}
        </div>
        <Section
          alignImg={"left"}
          title={sectionData[1].title}
          body={sectionData[1].body}
          imgSrc={sectionData[1].imgSrc}
        />
      </div>
      <Footer />
    </div>
  );
}
