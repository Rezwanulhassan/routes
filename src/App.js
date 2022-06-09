import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router,switch,Route} from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
     <router>
       <switch>
         {routes.map((route,index)=>(
           <Route>
             key={index}
             path={route.path}
             exact
             render={(props) => <route.component{...props}/>}
           </Route>
         ))}
       </switch>
     </router>
    </div>
  );
}

export default App;
