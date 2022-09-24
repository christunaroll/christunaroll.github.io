import React from "react";

/*
1. Card Class
2. Defaults 
*/

// 1. Card Class /////////////////////////////////////////////
function CardImage(props) {
  const isImageURL = props.image;
  let listOfClasses = null;

  if (props.effect) {
    listOfClasses = "styleImage bw";
  } else {
    listOfClasses = "styleImage";
  }

  if (isImageURL) {
    return (
      <div className={listOfClasses} onClick={props.onClick}>
        <img
          style={{ width: props.width + "px", marginTop: "-8%" }}
          src={props.image}
          alt="Seattle"
        />
      </div>
    );
  }
  return null;
}

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{props.title}</p>
      <p className="styleskillsLabel">{props.skills}</p>
      <p className="styleDescription">{props.description}</p>
      <button className="styleCode"><a href={props.code}>Github</a></button>
    </div>
  );
}

export default class Card extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: this.props.width + "px" }}>
        <div className="styleCard" id={this.props.id}>
          <CardImage image={this.props.image} width={this.props.width} />
          <CardContent
            title={this.props.title}
            skills={this.props.skills}
            description={this.props.description}
            code={this.props.code}
          />
        </div>
      </div>
    );
  }
}

// 2. Defaults /////////////////////////////////////////////
Card.defaultProps = {
  width: 350,
  title: "Template - Card Title",
  skills: "skills label",
  description: "Template description textbox",
  code: "code link"
};
