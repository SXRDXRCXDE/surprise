import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <div className={'w-full h-screen bg-black flex flex-col items-center'}>

          <Header/>
          <Body/>

      </div>
    </div>
  );
}

export default App;
