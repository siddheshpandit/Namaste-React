import React from "react";
import ReactDOM from "react-dom/client";

// Jsx Element
const jsxElement = (<h1 className="heading">Namaste React</h1>)
console.log(jsxElement);

// React Element
// const heading = React.createElement("h1",{id:"heading"},"Namaste React")
console.log(React.createElement("h1",{},"Hello World"));
// React Component
const Title=()=>(
    <h1>Title Component</h1>
)
console.log(Title);
function Heading(){
    return (
    <h3>World</h3>)
}

const HeadingComponent=()=>(
    <div>
        {Title()}
        <Title/>
        <h1>Hello</h1>
        <Heading/>
    </div>
)
// console.log(HeadingComponent);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>)