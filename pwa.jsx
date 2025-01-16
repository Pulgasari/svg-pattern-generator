import React from "https://esm.sh/react@19/?dev"
import ReactDOMClient from "https://esm.sh/react-dom@19/client?dev"
import { atom, useAtom, useAtomValue, useSetAtom } from "https://esm.sh/jotai?dev"
import { atomWithQuery } from "https://esm.sh/jotai-tanstack-query?dev"
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
    name: "Hexagons",
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='$FGCOLOR' fill-opacity='$FGOPACITY' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    source: "heropatterns.com",
  },
  {
    name: "Wiggle",
    url: "data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='$FGCOLOR' fill-opacity='$FGOPACITY'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
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
  }
];

/////////////// Atoms (Global States) ///////////////

const patternsFilenamesAtom = atom([
  '4-point-stars',
  'anchors-away',
  'architect',
  'autumn',
  'aztec',
  'bamboo',
  'bank-note',
  'bathroom-floor',
  'bevel-circle',
  'boxes',
  'brick-wall',
  'bubbles',
  'cage',
  'charlie-brown',
  'church-on-sunday',
  'circles-and-squares',
  'circuit-board',
  'connections',
  'cork-screw',
  'current',
  'curtain',
  'cutout',
  'death-star',
  'diagonal-lines',
  'diagonal-stripes',
  'dominos',
  'endless-clouds',
  'eyes',
  'falling-triangles',
  'fancy-rectangles',
  'flipped-diamonds',
  'floating-cogs',
  'floor-tile',
  'formal-invitation',
  'glamorous',
  'graph-paper',
  'groovy',
  'happy-intersection',
  'heavy-rain',
  'hexagons',
  'hideout',
  'houndstooth',
  'i-like-food',
  'intersecting-circles',
  'jigsaw',
  'jupiter',
  'kiwi',
  'leaf',
  'line-in-motion',
  'lips',
  'lisbon',
  'melt',
  'moroccan',
  'morphing-diamonds',
  'overcast',
  'overlapping-circles',
  'overlapping-diamonds',
  'overlapping-hexagons',
  'parkay-floor',
  'piano-man',
  'pie-factory',
  'pixel-dots',
  'plus',
  'polka-dots',
  'rails',
  'rain',
  'random-shapes',
  'rounded-plus-connected',
  'signal',
  'skulls',
  'slanted-stars',
  'squares-in-squares',
  'squares',
  'stamp-collection',
  'steel-beams',
  'stripes',
  'temple',
  'texture',
  'tic-tac-toe',
  'tiny-checkers',
  'topography',
  'volcano-lamp',
  'wallpaper',
  'wiggle',
  'x-equals',
  'yyy',
  'zig-zag'
]);
const patternsObjectAtom = atom( async (get) => {
  const filenames = get(patternsFilenamesAtom);
  let arrayObject = [];
  filenames.forEach( async (filename) => {
    let file             = await fetch( 'svg/' + filename + '.svg' );
    let svgString        = await file.text();
    let svgStringEncoded = svgStringToEncodedUrlString(svgString);
    console.log(     'filename:', filename         );
    console.log( 'svg-original:', svgString        );
    console.log(  'svg-encoded:', svgStringEncoded );
    console.log('---------------------------------');
    let p = {
      name: filename,
       svg: svgString,
       url: svgStringEncoded
    };
    arrayObject.push(p);
  });
  return arrayObject;
});

function svgStringToEncoded( str ){

  if(str){

    let data = str;
    let externalQuotesValue = 'double'; // 'single'

    // Namespace
    // ----------------------------------------
    if( data.indexOf(`http://www.w3.org/2000/svg`) < 0 ){
      data = data.replace(/<svg/g, `<svg xmlns=${quotes.level2}http://www.w3.org/2000/svg${quotes.level2}`);
    }

    // Encoding
    // ----------------------------------------
    // Use single quotes instead of double to avoid encoding.
    if (externalQuotesValue === `double`) {
      data = data.replace(/"/g, `'`);
    } else {
      data = data.replace(/'/g, `"`);
    }

    data = data.replace(/>\s{1,}</g, `><`);
    data = data.replace(/\s{2,}/g, ` `);

    // Using encodeURIComponent() as replacement function
    // allows to keep result code readable
    const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;
    data = data.replace(symbols, encodeURIComponent);

    // Return
    // ----------------------------------------
    return data;
  }

  return '';

}
function svgStringToEncodedCSS( str, quotes = "'" ){
  let svg = svgStringToEncoded(str);
  return `background-image: url(${quotes}data:image/svg+xml,${svg}${quotes});`;
}
function svgStringToEncodedUrlString( str, quotes = "'" ){
  let svg = svgStringToEncoded(str);
  return `data:image/svg+xml,${svg}`;
}

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

function buildPatternStyle( patternObject, returnType = 'object' ){
  const bgColor   = useAtomValue( bgColorAtom   );
  const fgColor   = useAtomValue( fgColorAtom   );
  const fgOpacity = useAtomValue( fgOpacityAtom );

  let url = patternObject.url
          . replace(   '$FGCOLOR', fgColor.replace('#','%23') )
          . replace( '$FGOPACITY', fgOpacity );
  let bgImage = 'url("' + url + '")';

  if( returnType === 'object' ){
    return { backgroundColor: bgColor, backgroundImage: bgImage }
  }
  else if( returnType === 'string' ){
    return `background-color: ${bgColor}; background-image: url("${url}");`;
  }

}

/////////////// REACT ///////////////

function Code(){
  const code = useAtomValue( patternCodeAtom );

  if( code ){
  return (<div id='Code'>
            <textarea value={code} />
          </div>)
  } else {
    return <div id='Code'>No pattern was selected.</div>
  }
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
            onClick={event => setPatternName(obj.name)}
            style={{
              backgroundColor: bgColor,
              backgroundImage: bgImage,
            }}
          ></div>);
}
function Patterns(){
  return (<div id='Patterns' data-viewmode='grid'>
            {PATTERNS.map( pattern => <Pattern obj={pattern} /> )}
          </div>)
}
function Patterns2(){
  let patterns = useAtomValue(patternsObjectAtom);
  return (<div id='Patterns' data-viewmode='grid'>
            {patterns.map( pattern => <Pattern obj={pattern} /> )}
          </div>)
}
function Preview(){
  const style = useAtomValue( patternStyleAtom );
  if( style ){
    return (<div id='Preview' style={style}>
              <Code/>
            </div>)
  } else {
    return <div id='Preview'>No Pattern was selected.</div>
  }
}

/////////////// RENDER REACT ///////////////

var r = <><Options/><Patterns/><Patterns2/><Preview/></>;
ReactDOMClient.createRoot( document.getElementById('App') ).render(r);

/////////////// ... ///////////////

//========= Register Service Worker =========
window.onload = () => {
  'use strict';
  if( 'serviceWorker' in navigator ){
    navigator.serviceWorker.register('sw.js');
  }
}


