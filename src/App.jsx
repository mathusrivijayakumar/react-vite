import './App.css'
import Home from './components/Home'
// import Homeclass from './components/HomeClass'
import About from './components/About'
import AboutClass from './components/AboutClass'
import LifeCycleComponent from './components/LifeCycleComponent'
import RenderingComponent from './components/RenderingComponent'
import { DesignComponent } from './components/DesignComponent.jsx'

function App() {

  return (
    <>
    <About name="App component" work="parent component"/>
    <AboutClass name="App component" work="parent component"/>
    <LifeCycleComponent name="example"/>
    <RenderingComponent name="name"/>
    <DesignComponent name=""/>
    </>
  );
}

export default App;
