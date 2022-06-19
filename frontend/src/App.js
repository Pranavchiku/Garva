import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <div className="App">
      <div>
        <HomePage />
      </div>
      <div>
        <EventsPage />
      </div>
    </div>
  );
}

export default App;
