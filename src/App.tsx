
import Images from "./components/images";

import"./assets/css/style.css"

import {
  IonApp

} from '@ionic/react';

//import Tab1 from './pages/Tab1';
//import Tab2 from './pages/Tab2';
//import Tab3 from './pages/Tab3';

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
import React from 'react';

 //class based component
class App extends React.Component<any, any>{


  constructor(props:any){
    console.log("App constructor")
    super(props);
    this.state={title:"Random Photos",isShowing:false};
    }

 
  render(){
    
    return(
      
        <IonApp className="w-10/12">
        
          <section className="flex justify-center">
            <div className="text-center">
    <div className="my-4">{this.state.title}</div>
    <Images/>
      </div>
       
    </section>
       
</IonApp>
     
      );
  }
}


export default App;
