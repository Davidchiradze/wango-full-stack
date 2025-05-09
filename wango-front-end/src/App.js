import "./App.css";
import "./template/css/bootstrap.css";
import Header from "./components/Header";
import "./template/css/style.css";
import "./template/css/responsive.css";
import SliderSection from "./components/SliderSection";
import { Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CityProvider } from "./context/CityContext";
import ParkingSession from "./components/ParkingSession";

// wangotask123
function App() {
  const history = useHistory();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (!userId) {
      history.push("/signin");
    }
  }, [userId, history]);
  return (
    <>
      <Route exact path="/">
        <CityProvider>
          <div className="hero_area">
            <Header />
            <SliderSection />
          </div>
        </CityProvider>
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/parking-session/:id">
        <ParkingSession />
      </Route>
    </>
  );
}

export default App;
