var i={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a;function v(){if(a)return e;a=1;var x=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function u(c,r,t){var n=null;if(t!==void 0&&(n=""+t),r.key!==void 0&&(n=""+r.key),"key"in r){t={};for(var o in r)o!=="key"&&(t[o]=r[o])}else t=r;return r=t.ref,{$$typeof:x,type:c,key:n,ref:r!==void 0?r:null,props:t}}return e.Fragment=d,e.jsx=u,e.jsxs=u,e}var l;function p(){return l||(l=1,i.exports=v()),i.exports}var s=p();function R(){return s.jsx("button",{onClick:()=>window.history.back(),className:"rounded-lg flex items-center text-gray-700 hover:text-gray-800 transition-colors duration-200 hover:bg-gray-100 p-1 group cursor-pointer",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"transition-all duration-200",children:s.jsx("path",{d:"M19 12H5M12 19L5 12L12 5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"})})})}export{R as default};
