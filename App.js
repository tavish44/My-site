import React, { Component } from 'react';
import './appi.css';


const currentDate = new Date();
const year = currentDate.getHours();
const minn = currentDate.getMinutes();
const img1 = "https://picsum.photos/id/237/200/300"
const img2 = "https://picsum.photos/200/300?grayscale"


const customStyle = {
  height: "20%",
  display: "block",
  marginLeft: "auto",
  marginRight: "0%",
  width: "20%",
  padding: "20px",
}

class Aladeen extends Component {
  render(){
    return(
      <div className="bodyy">
        <h1 className="Header"> The time is - {year}:{minn}</h1>

        <p contentEditable="true" spellCheck="false" className="textt">Enter Your Name:</p>

      <h4 className="imgsz"> ABOUT </h4>
          <p className="lorem">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </p>
            <img className="center" src= {img1}/>

      </div>
    );
  }
}


function App() {
  return(
    <div Classname='App'>
      <Aladeen />
  </div>
  )
}


export default App;
