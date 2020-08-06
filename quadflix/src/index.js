import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import CadastroVideo from "../src/pages/cadastro/video"
import CadastroCategoria from "./pages/cadastro/categoria"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const pagina404 = ()=>(<div>pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
      <Route path="/" component={App} exact />;
      <Route path="/cadastro/video" component={CadastroVideo} exact />;
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />;
      
      <Route component={pagina404} />;
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
