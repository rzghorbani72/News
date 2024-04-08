import "./App.css";
import Search from "./components/atoms/search";
import Cards from "./components/organism/cards";
import useSearch from "./hooks/useSearch";

function App() {
  const { data } = useSearch();

  return (
    <div className="flex justify-center">
      <div className="sm:w-full lg:w-3/5 flex flex-col">
        <header className="App-header" />
        <Search />
        <Cards list={data} />
      </div>
    </div>
  );
}

export default App;
