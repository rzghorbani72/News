import "./App.css";
import Cards from "./components/organism/cards";
import useSearch from "./hooks/useSearch";

function App() {
  const { headlines } = useSearch();

  return (
    <div className="flex justify-center">
      <div className="sm:w-full lg:w-3/5 flex flex-col">
        <header className="App-header" />
        <Cards list={headlines} />
      </div>
    </div>
  );
}

export default App;
