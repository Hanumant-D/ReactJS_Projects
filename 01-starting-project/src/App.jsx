import './index.css';
import React, { Component } from 'react';
import Header from './components/Header.jsx';
import CourseGoal from './components/CourseGoal.jsx';
import Card from './components/Card.jsx';
import Exercise from './components/Exercise.jsx';
import TabContent from './components/TabContent.jsx';
import { tabData } from './components/data.js';
import Todo from './components/Todo.jsx';
import { DUMMY_TODOS } from './components/data.js';
import TabList from './components/TabList.jsx';
import Button from './components/Button.jsx';
import HomeIcon from './components/HomeIcon.jsx';
import PlusIcon from './components/PlusIcon.jsx';


function App() {
  const [tab, setTab] = React.useState('components');
  function handleClick(tabContent) {
    setTab(tabContent)
  }
  let active = tabData[tab];
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <CourseGoal title="Core" description="Understand the fundamentals of React" />
          <CourseGoal title="Important" description="Learn how to manage state in React apps" />
          <CourseGoal title="Essential" description="Build dynamic and interactive user interfaces" />
        </section>
        <section>
          <Card name="Sample Card">
            <p>
              This is a sample card component to demonstrate composition in React.
            </p>
            <a href="">view more</a>
          </Card>
        </section>
        <section>
          <Exercise />
        </section>
        <section>
          <menu style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <TabList isSelected={tab === 'components'} onClick={() => handleClick("components")}>Components</TabList>
            <TabList isSelected={tab === 'props'} onClick={() => handleClick("props")}>Props</TabList>
            <TabList isSelected={tab === 'State'} onClick={() => handleClick("State")}>State</TabList>
            <TabList isSelected={tab == 'Lifecycle'} onClick={() => handleClick("Lifecycle")}>Lifecycle</TabList>
          </menu>
        </section>
        <section style={{ marginTop: '1rem', textAlign: 'center' }}>
          <TabContent title={tabData[tab].title} content={tabData[tab].content} code={tabData[tab].code} />
        </section>
        <section>
          <ul>
            {
              DUMMY_TODOS.map((todo, index) => (
                <Todo key={index} text={todo}></Todo>))
            }
          </ul>
        </section>
        {/*  */}
        <section>
          <h2>Filled Button (Default)</h2>
          <p>
            <Button>Default</Button>
          </p>
          <p>
            <Button mode="filled">Filled (Default)</Button>
          </p>
        </section>
        <section>
          <h2>Button with Outline</h2>
          <p>
            <Button mode="outline">Outline</Button>
          </p>
        </section>
        <section>
          <h2>Text-only Button</h2>
          <p>
            <Button mode="text">Text</Button>
          </p>
        </section>
        <section>
          <h2>Button with Icon</h2>
          <p>
            <Button Icon={HomeIcon}>Home</Button>
          </p>
          <p>
            <Button Icon={PlusIcon} mode="text">
              Add
            </Button>
          </p>
        </section>
        <section>
          <h2>Buttons Should Support Any Props</h2>
          <p>
            <Button mode="filled" disabled>
              Disabled
            </Button>
          </p>
          <p>
            <Button onClick={() => console.log('Clicked!')}>Click me</Button>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
