import DigimonList from "./components/DigimonList/DigimonList";
import Search from "./components/Search/Search";
import GlobalStyle from "./styles/global"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Search/>
      <DigimonList/>
    </div>
  );
}

export default App;
