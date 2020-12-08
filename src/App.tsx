import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import PaginaInicial from './pages/Inicial';
import Tutorial from './pages/Tutorial';
import Home from './pages/Home';
import Atividades from './pages/Atividades/Atividades';
import PMPC from './pages/Atividades/Pmpc';
import PMRE from './pages/Atividades/Pmre';
import PMRV from './pages/Atividades/Pmrv';
import Endividamento from './pages/Endividamento/Endividamento';
import CE from './pages/Endividamento/Ce';
import GCP from './pages/Endividamento/Gcp';
import PCT from './pages/Endividamento/Pct';
import Liquidez from './pages/Liquidez/Liquidez';
import LC from './pages/Liquidez/Lc';
import LG from './pages/Liquidez/Lg';
import Rentabilidade from './pages/Rentabilidade/Rentabilidade';
import GA from './pages/Rentabilidade/Ga';
import ML from './pages/Rentabilidade/Ml';
import TRI from './pages/Rentabilidade/Tri';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path='/inicial' component={PaginaInicial} exact={true} />
        <Route path='/tutorial' component={Tutorial} exact = {true} />
        <Route path='/home' component={Home} exact={true} />
        <Route path='/atividades' component={Atividades} exact={true} />
        <Route path='/pmpc' component={PMPC} exact={true} />
        <Route path='/pmre' component={PMRE} exact={true} />
        <Route path='/pmrv' component={PMRV} exact={true} />
        <Route path='/endividamento' component={Endividamento} exact={true} />
        <Route path='/ce' component={CE} exact={true} />
        <Route path='/gcp' component={GCP} exact={true} />
        <Route path='/pct' component={PCT} exact={true} />
        <Route path='/liquidez' component={Liquidez} exact={true} />
        <Route path='/lc' component={LC} exact={true} />
        <Route path='/lg' component={LG} exact={true} />
        <Route path='/rentabilidade' component={Rentabilidade} exact={true} />
        <Route path='/ga' component={GA} exact={true} />
        <Route path='/ml' component={ML} exact={true} />
        <Route path='/tri' component={TRI} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/inicial" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
