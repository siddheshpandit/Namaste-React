// Create H1 tag and add content as 3rd argument
// 1st argument is type of element
// 2nd argument is for adding attibutes to the element
// 3rd argument is for content inside the element(children).
const heading = React.createElement("h1",{id:"heading"},"Hello From React")

const parent= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
React.createElement("h1",{},"This is Child h1")))
// Specify Root element where we need to add content

const sibling= React.createElement("div",{},[
    React.createElement("h1",{},"HEllo h1"),
    React.createElement("h2",{},"HEllo h2")
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(sibling)