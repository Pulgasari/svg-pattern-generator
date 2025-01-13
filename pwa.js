import React from "https://esm.sh/react@19/?dev"
import ReactDOMClient from "https://esm.sh/react-dom@19/client?dev"

//========= Register Service Worker =========

window.onload = () => {
  'use strict';
  if( 'serviceWorker' in navigator ){
    navigator.serviceWorker.register('sw.js');
  }
}

/////////////// THE PWA ///////////////

function Options(){
  return (<div id='Options'>
            Options
          </div>)
}
function Patterns(){
  return (<div id='Options'>
            Patterns
          </div>)
}
function Preview(){
  return (<div id='Options'>
            Preview
          </div>)
}
function Code(){
  return (<div id='Code'>
            Code
          </div>)
}

// Render
var r = <><Options/><Patterns/><Preview/><Code/></>;
ReactDOMClient.createRoot( 
  document.getElementById('app') 
).render(r);
