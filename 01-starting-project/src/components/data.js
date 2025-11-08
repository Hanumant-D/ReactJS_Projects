
export const tabData = {
  components: {
    title: "Components",
    content:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.",
      code:`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`
  },
  props: {
    title: "Props",
    content:
      "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation.",   
    code:`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`     
  },
    State: { 
    title: "State",
    content:
      "State is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.",
    code:`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
  },
    Lifecycle: {
    title: "Lifecycle",
    content:
      "Each component has several 'lifecycle methods' that you can override to run code at particular times in the process.",   
      code:`import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    // This code runs after the component mounts
    console.log('Component mounted');

    return () => {
    }
};`
    }   
};


export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];