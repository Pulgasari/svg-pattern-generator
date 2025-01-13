import React from "https://esm.sh/react@19/?dev"
import ReactDOMClient from "https://esm.sh/react-dom@19/client?dev"

var Header = () => <div id='Header'>... Header ...</div>;
var MainArea = () => <div id='MainArea'>... MainArea ...</div>;

// Render
var rootElement = <div id='root'><Header/><MainArea/></div>;
ReactDOMClient.createRoot( 
  document.getElementById('app') 
).render(rootElement);
