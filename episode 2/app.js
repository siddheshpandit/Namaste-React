import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1",{id:"heading"},"Hello From React")

const parent= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
React.createElement("h1",{},"This is Child h1")))
// Specify Root element where we need to add content

const sibling= React.createElement("div",{},[
    React.createElement("h1",{},"HEllo h1"),
    React.createElement("h2",{},"HEllo h2")
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)