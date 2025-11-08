# 🧠 React.js Beginner Notes

## 1️⃣ What is React?
- **React** is a **JavaScript library** for building **user interfaces (UIs)**.
- Developed by **Facebook (Meta)**.
- Helps in creating **single-page applications (SPAs)**.
- Uses a **component-based architecture**.

---

## 2️⃣ Key Features
- ⚛️ **Component-based:** Reusable UI pieces.
- ⚡ **Virtual DOM:** Faster rendering and performance.
- 🔁 **Unidirectional Data Flow:** Data flows from parent → child.
- 🧩 **JSX:** JavaScript + HTML syntax.
- 🕹️ **Declarative UI:** Describe *what* UI should look like, not *how* to change it.

---

## 3️⃣ Setting Up React

**Option 1 – Using create-react-app (CRA):**
```bash
npx create-react-app my-app
cd my-app
npm start 

```

**Option 2 – Using Vite (faster):**
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

---

## 4️⃣ JSX (JavaScript XML)
- JSX allows writing HTML-like syntax inside JavaScript.
- Example:
```jsx
const element = <h1>Hello, React!</h1>;
```
- You must **return only one root element** in a component.
```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

---

## 5️⃣ Components

### Types of Components:
1. **Functional Components (modern):**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
2. **Class Components (older):**
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**Using Components:**
```jsx
<Welcome name="John" />
```

---

## 6️⃣ Props (Properties)
- Used to **pass data** from parent to child component.
- Props are **read-only**.
```jsx
function User(props) {
  return <h2>{props.name}</h2>;
}
```

---

## 7️⃣ State
- Used to store and manage **dynamic data** inside a component.

**Using useState Hook:**
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

---

## 8️⃣ Event Handling
```jsx
function ClickMe() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click</button>;
}
```

---

## 9️⃣ Conditional Rendering
```jsx
{isLoggedIn ? <p>Welcome!</p> : <p>Please log in.</p>}
```

---

## 🔟 Lists and Keys
```jsx
const fruits = ['Apple', 'Banana', 'Mango'];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```
---

## 1️⃣2️⃣ Styling in React
✅ Inline style:
```jsx
<h1 style={{ color: 'blue', fontSize: '20px' }}>Hello</h1>
```
✅ External CSS:
```jsx
import './App.css';
```

---

## 1️⃣5️⃣ Important Hooks Summary
| Hook | Purpose |
|------|----------|
| `useState()` | Manage state |
| `useEffect()` | Handle side effects |
| `useContext()` | Access global context |
| `useRef()` | Access DOM elements directly |
| `useMemo()` | Optimize performance |
| `useCallback()` | Memoize functions |

---

## 1️⃣6️⃣ Folder Structure
```
src/
├── App.js
├── App.css
├── components/
│   ├── Header.js
│   ├── Footer.js
└── index.js
```

---
🔹 What is a Fragment?

A React Fragment lets you group multiple elements without adding extra nodes to the DOM.
Normally, React components must return a single parent element, but Fragments let you avoid unnecessary <div> wrappers.

🔹 Example without Fragment:
function Example() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </div>
  );
}


This adds an extra <div> to the DOM.

🔹 Example with Fragment:
function Example() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </>
  );
}


✅ No extra <div> is added to the DOM.

🔹 Long Syntax:
<React.Fragment>
  <h1>Hello</h1>
  <p>Welcome to React</p>
</React.Fragment>


✅ Both <></> and <React.Fragment></React.Fragment> work the same —
use the long form when you need to add keys:

<>
  {items.map(item => (
    <React.Fragment key={item.id}>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </React.Fragment>
  ))}
</>

---
🔹 What is Component Composition?

Component Composition means combining multiple smaller components to build a larger, more complex UI.
It’s a core concept in React — instead of inheritance, React encourages composition.

Think of it like Lego blocks 🧩 — you build big structures using small reusable pieces.

🔹 Basic Example
function Header() {
  return <h1>Welcome to My Website</h1>;
}

function Footer() {
  return <p>© 2025 My Website</p>;
}

function Layout() {
  return (
    <div>
      <Header />
      <p>This is the main content area.</p>
      <Footer />
    </div>
  );
}

export default Layout;


✅ The Layout component composes Header and Footer components.

🔹 Passing Components as Children (Composition with props.children)

Sometimes you want to pass JSX content into a component — use props.children.

function Card(props) {
  return <div className="card">{props.children}</div>;
}

function App() {
  return (
    <Card>
      <h2>React Composition</h2>
      <p>This is inside the card component.</p>
    </Card>
  );
}


✅ Output:

<div class="card">
  <h2>React Composition</h2>
  <p>This is inside the card component.</p>
</div>

🔹 Composition with Props (Custom Placement)

You can pass components as props to control layout more flexibly.

function Layout({ header, footer, children }) {
  return (
    <div>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
}

function App() {
  return (
    <Layout
      header={<h1>Header Area</h1>}
      footer={<p>Footer Area</p>}
    >
      <p>Main Content Goes Here</p>
    </Layout>
  );
}


✅ This approach gives you fine-grained control over what content appears where.

🔹 Benefits of Composition

✅ Promotes reusability and clean code
✅ Avoids deep inheritance
✅ Keeps components modular and flexible
✅ Easier to test and maintain
