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

const patterns = [
  {
    name: "Bathroom Floor",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.75'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Tiny Checkers",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  }
];

function Pattern({ name, url, source }){
  return (<div 
            className='.Pattern'
            style={
              height: '100px',
              width: '100px',
              backgroundColor: '#DFDBE5',
              backgroundImage: `url("${url}")`
            }
          ></div>
}

function Options(){
  return (<div id='Options'>
            Options
          </div>)
}
function Patterns(){
  return (<div id='Patterns'>
            {patterns.map( pattern => <Pattern data={pattern} /> )}
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
