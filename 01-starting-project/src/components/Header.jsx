
const getDescription = ['Fundamental', 'Crucial', 'Core'];

const getRandomDescription = () => {
  const randomIndex = Math.floor(Math.random() * getDescription.length);
  return getDescription[randomIndex];
}

const description = getRandomDescription();
export default function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}