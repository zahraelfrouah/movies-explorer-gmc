import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";


function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/movie/:id" component={MovieDetail} />
     
    </Switch>
  );
}

export default App;
