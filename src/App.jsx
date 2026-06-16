import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/component.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {

  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return <li>
    <img src=".{img}" alt="..." />
    <h3>TITLE</h3>
    <p>DESCRIPTION</p>
  </li>

}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"></section>
        <h2>Core Concepts</h2>\
        <ul>
          <CoreConcepts 
          title="Components"
          desciptiom="The core UI bulding block." 
          img={componentsImg}
          />
          <CoreConcepts />
          <CoreConcepts />
          <CoreConcepts />
        </ul>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;