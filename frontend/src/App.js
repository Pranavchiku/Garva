import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";

export default function App() {
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
