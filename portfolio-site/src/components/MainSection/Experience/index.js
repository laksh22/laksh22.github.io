import React, { Component } from "react";
import "./styles.css";
import Card from "../../Card";

class Experience extends Component {
  experienceList = [
    {
      link: "https://www.zendesk.com/",
      title: "Zendesk",
      position: "Software Engineering Intern",
      period: "Jul. 2021 - Jan. 2022",
      img: require("../../../assets/zendesk.jpeg"),
      description: [],
      tech: "Python, Django, MySQL, Celery, React, Datadog",
    },
    {
      link: "https://www.whizz.sg/",
      title: "Whizz Mobility",
      position: "Software Engineer (Part-Time)",
      period: "Jan. 2020 - May 2020 / Aug. 2020 - Apr. 2021",
      img: require("../../../assets/whizz.jpeg"),
      description: [
        "• Led product development of the fleet management platform, enabling an increase from 0 to ~100 orders delivered daily.",
        "• Created fleet management platform with robot HUD and mini-map using Mapbox, React, and Sass.",
        "• Automated sending of delivery status to partner API using TypeScript, reducing delivery time by 20%.",
        "• Decreased key encryption-decryption time by 70% by utilising SOPS and custom shell script alongside Husky post-merge hooks for automation.",
      ],
      tech: "React, Redux, Sass, TypeScript, Node.js, Express",
    },
    {
      link: "https://summerofcode.withgoogle.com/archive/2020/projects/5485976262017024/",
      title: "Google Summer of Code",
      position: "Open Source Developer",
      period: "May 2020 - Aug. 2020",
      img: require("../../../assets/gsoc.png"),
      description: [
        "• Developed UI using React and Redux for graphically constructing classification models.",
        "• Designed SQL schemas to store model information in MySQL database.",
        "• Created REST API using Flask for CRUD operations on models and model testing/training.",
        "• Created ML pipeline for parsing SQL data and constructing models using Tensorflow.",
        "Project - https://github.com/scorelab/LabelLab",
      ],
      tech: "JavaScript (ES6), React, Redux, TensorFlow, Flask, SQL",
    },
    {
      link: "https://shopee.sg/",
      title: "Shopee",
      position: "Software Engineering Intern",
      period: "May 2020 - Jul. 2020",
      img: require("../../../assets/shopee.jpeg"),
      description: [
        "• Developed Badge component for component library using React, Sass, Flow, and Figma.",
        "• Decreased component load times by 40% by adding code splitting to React components.",
        "• Augmented scroll restoration using location keys, identified bottlenecks using Chrome Performance profiler.",
        "• Enhanced repository by adding stylelint, CSS modules, and webpack plugins.",
      ],
      tech: "JavaScript (ES6), React, Sass, Flow, Webpack",
    },
    {
      link: "https://qwertythoughts.com",
      title: "Qwerty Thoughts",
      position: "Software Development Intern",
      period: "May 2019 - Aug. 2019",
      img: require("../../../assets/qwerty_thoughts_logo.jpg"),
      description: [
        "• Created a WYSIWYG text editor in React and used Axios for querying sentiment-analysis APIs.",
        "• Utilized Bootstrap framework to improve user interface of the text-editor.",
        "• Developed web-scraping scripts using Twitter API and Selenium to find trending topics.",
        "• Used NLTK, spaCy and StanfordNLP for Named Entity Recognition of book topics.",
      ],
      tech: "JavaScript (ES6), React, Draft.js, Selenium, Python",
    },
  ];

  render() {
    const experienceList = this.experienceList.map((experience) => {
      return (
        <Card>
          <div class="header">
            <div class="title">
              <h3>
                {" "}
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.title}
                </a>
                {" - "}
                {experience.position}
              </h3>
              <h4>{experience.period}</h4>
            </div>
            <img
              class="image"
              src={experience.img}
              alt={experience.title}
              height="80px"
            />
          </div>

          <div className="description">
            {experience.description.map((description) => {
              return <p>{description}</p>;
            })}
            <p class="tech-stack">Tech Stack: {experience.tech}</p>
          </div>
        </Card>
      );
    });

    return (
      <div>
        <h2>💻 Experience</h2>
        {experienceList}
      </div>
    );
  }
}

export default Experience;
