# Why use JSX?
JSX is responsible for making react code readable and easy to write. 
Jsx is not html in js, It is a html,XML like syntax in Js
JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.
Browsers don't understand jsx, therefore before running on browser this jsx code is transpiled(converted) to the react code understood by browser.
Transpiling is done by Parcel with the help of babel.
Babel is converting this jsx code to react code.
Example:
const jsxElement= <h1 className="heading">Namaste React</h1>
Babel will convert this jsxElement to react.createElement(h1,{class:'heading'},Namaste React) which is understood by browser.
Link to jsx blog:https://www.freecodecamp.org/news/jsx-in-react-introduction#:~:text=So%20to%20convert%20it%20to,the%20JSX%20to%20JavaScript%20conversion.


# React Element
const jsxElement = (<h1 className="heading">Namaste React</h1>)
console.log(jsxElement);
# React Component
1. Class Based Components - OLD
2. Functional Components - NEW

# React functional component
Functional component is a normal javascript function that returns a react element/jsx elements.
<!-- Function name should always start with capital -->
const HeadingComponent=()=>{
    return <h1>Heading Component</h1>
}

Component composition:
const Title=()=>(
    <h1>Title Component</h1>
)
const HeadingComponent=()=>(
    <div>
        {jsxElement}
    <!-- These are ways to include one component into another -->
        {Title()}
        <Title/>
        <Title></Title>
        <h1>Hello</h1>
    </div>
)

Component inside a component is known as component composition.