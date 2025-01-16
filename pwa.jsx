import React from "https://esm.sh/react@19/?dev"
import ReactDOMClient from "https://esm.sh/react-dom@19/client?dev"
import { atom, useAtom, useAtomValue, useSetAtom } from "https://esm.sh/jotai?dev"
import { atomWithStorage } from "https://esm.sh/jotai/utils?dev"

/////////////// The Patterns /////////////// 

const PATTERNS = [
  {
    name: "Bathroom Floor",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Tiny Checkers",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Bathroom Floor 2",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Tiny Checkers 2",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Bathroom Floor 3",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Tiny Checkers 3",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Bathroom Floor 4",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Tiny Checkers 4",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Bathroom Floor 5",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Tiny Checkers 5",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Bathroom Floor 6",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Tiny Checkers 6",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Bathroom Floor 7",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Tiny Checkers 7",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  
];

/////////////// Atoms (Global States) /////////////// 

const bgColorAtom       = atomWithStorage( 'bg-color', '#DFDBE5' );
const fgColorAtom       = atomWithStorage( 'fg-color', '#9C92AC' );
const fgOpacityAtom     = atomWithStorage( 'fg-opacity', '1' );
const patternNameAtom   = atomWithStorage( 'pattern-name', '' );
const patternCodeAtom   = atom( get => {
  const bgColor   = get(bgColorAtom);
  const fgColor   = get(fgColorAtom);
  const fgOpacity = get(fgOpacityAtom);
  const pattern   = get(patternObjectAtom);

  if( !pattern ){ return ''; }
  
  let url = pattern.url
          . replace(   '$FGCOLOR', fgColor.replace('#','%23') )
          . replace( '$FGOPACITY', fgOpacity );
  
  return `background-color: ${bgColor}; background-image: url("${url}");`;
});
const patternObjectAtom = atom( get => 
  PATTERNS.find( pattern => pattern.name === get(patternNameAtom) ) || null
);
const patternStyleAtom  = atom( get => {
  const bgColor   = get(bgColorAtom);
  const fgColor   = get(fgColorAtom);
  const fgOpacity = get(fgOpacityAtom);
  const pattern   = get(patternObjectAtom);

  if( !pattern ){ return {}; }

  let url = pattern.url
          . replace(   '$FGCOLOR', fgColor.replace('#','%23') )
          . replace( '$FGOPACITY', fgOpacity );
  let bgImage = 'url("' + url + '")';
  
  return {
    backgroundColor: bgColor,
    backgroundImage: bgImage,
  };
});

/////////////// REACT ///////////////

function Code(){
  const code = useAtomValue( patternCodeAtom );
  
  return (<div id='Code'>
            <textarea>{code}</textarea>
          </div>)
}
function Options(){
  const [   bgColor,   setBgColor ] = useAtom( bgColorAtom   );
  const [   fgColor,   setFgColor ] = useAtom( fgColorAtom   );
  const [ fgOpacity, setFgOpacity ] = useAtom( fgOpacityAtom );
  
  return (<div id='Options'>
            <div>
              <label>Background-Color</label>
              <input type='color' value={bgColor} onChange={ event => setBgColor(event.target.value) } />
            </div>
            <div>
              <label>Foreground-Color</label>
              <input type='color' value={fgColor} onChange={ event => setFgColor(event.target.value) } />
            </div>
            <div>
              <label>Foreground-Opacity</label>
              <input type='range' value={fgOpacity} min='0' max='1' step='0.01' onInput={ event => setFgOpacity(event.target.value) } />
            </div>
          </div>)
}
function Pattern({ obj }){
  const setPatternName =   useSetAtom( patternNameAtom       );
  const bgColor        = useAtomValue( bgColorAtom   );
  const fgColor        = useAtomValue( fgColorAtom   );
  const fgOpacity      = useAtomValue( fgOpacityAtom );
  
  let url = obj.url
          . replace(   '$FGCOLOR', fgColor.replace('#','%23') )
          . replace( '$FGOPACITY', fgOpacity );
  let bgImage = 'url("' + url + '")';
  console.log(bgImage);
  
  return (<div 
            className='Pattern'
            onClick={event => setPattern(obj.name)}
            style={{
              height: '100px',
              backgroundColor: bgColor,
              backgroundImage: bgImage,
            }}
          ></div>);
}
function Patterns(){
  return (<div id='Patterns' data-viewmode='grid-100'>
            {PATTERNS.map( pattern => <Pattern obj={pattern} /> )}
          </div>)
}
function Preview(){
  const style = useAtomValue( patternStyleAtom );
  if( style ){
    <div id='Preview'style={style}></div>
  } else {
    <div id='Preview'>No Pattern was selected.</div>
  }
}

/////////////// RENDER REACT ///////////////

var r = <><Options/><Patterns/><Preview/><Code/></>;
ReactDOMClient.createRoot( document.getElementById('App') ).render(r);


/////////////// ... ///////////////

//========= Register Service Worker =========

window.onload = () => {
  'use strict';
  if( 'serviceWorker' in navigator ){
    navigator.serviceWorker.register('sw.js');
  }
}