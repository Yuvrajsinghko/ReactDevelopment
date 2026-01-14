import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="min-h-screen w-full text-teal-500 text-2xl bg-gray-950">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;
