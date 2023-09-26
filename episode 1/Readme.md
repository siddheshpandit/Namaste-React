# How does browser understand React

// CDN Links
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
Why crossorigin attribute?
It sets Access-Control-Allow-Origin: \*

// Using npm react package

It is not preferred to use cdn links because.
1. It fetches data from external links which may take longer time.
2. It is difficult to manage versions using cdn links.
3. using npm react package we install react library on our local machine and it is used to create our project, which makes it faster and easier to manage.

# Why two links?

React is the core of react, responsible for creating views.
ReactDOM is responsible to actually render UI in the browser.

# Basics of React

// Create H1 tag and add content as 3rd argument
// 1st argument is type of element
// 2nd argument is for adding attibutes to the element
// 3rd argument is for content inside the element(children).
const heading = React.createElement("h1",{id:"heading"},"Hello From React")
const heading = React.createElement("div",{id:"parent"},[
    React.createElement("h1",{id:"child1"},"I am h1 tag"),
    React.createElement("h2",{id:"child2"},"I am h2 tag")
]
)

# What is a react element(HTML element or object)?

React element is an object which is given to a ReactDOM render method , which converts it to a html element.

# What does render do?

Render replaces the already present html code with the react object.

Order of script tags matter a lot.
React cdn links should be placed above our js script tags.

As React is a library we can use react into a small part of existing project as well.


# What is NPM?
NPM is a package manager for javascript language maintained by npm. 