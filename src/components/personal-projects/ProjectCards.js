import React from "react";
import Card from "./Card";

export default function ProjectCards(props) {
  const projectInfo = props.data.map(event => (
    <Card 
      id={event.id}
      image={event.image}
      title={event.title}
      skills={event.skills}
      description={event.description}
      code={event.code}
    />
  ));

  return <div className = "project-grids">{projectInfo}</div>;
}