"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[5345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(h,l(l({ref:t},c),{},{components:r})):o.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={id:"tableroTutorialesIntroducci\xf3n",title:"Introducci\xf3n a los tutoriales del tablero GBADs",sidebar_position:1},l=void 0,i={unversionedId:"GBADs-Dashboard-Tutorials/tableroTutorialesIntroducci\xf3n",id:"GBADs-Dashboard-Tutorials/tableroTutorialesIntroducci\xf3n",title:"Introducci\xf3n a los tutoriales del tablero GBADs",description:"Metas de aprendizaje",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/GBADs-Dashboard-Tutorials/GBADs-Dashboard-Tutorials-Intro.md",sourceDirName:"GBADs-Dashboard-Tutorials",slug:"/GBADs-Dashboard-Tutorials/tableroTutorialesIntroducci\xf3n",permalink:"/docs/es/docs/GBADs-Dashboard-Tutorials/tableroTutorialesIntroducci\xf3n",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"tableroTutorialesIntroducci\xf3n",title:"Introducci\xf3n a los tutoriales del tablero GBADs",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bibliograf\xeda",permalink:"/docs/es/docs/Data-Governance-Handbook-for-GBADs/bibliography"},next:{title:"Dashboard Tutorial Part 1",permalink:"/docs/es/docs/GBADs-Dashboard-Tutorials/Dashboard-Tutorial-Part-1"}},s={},u=[{value:"Metas de aprendizaje",id:"metas-de-aprendizaje",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Recursos",id:"recursos",level:2},{value:"Programaci\xf3n",id:"programaci\xf3n",level:3},{value:"Dise\xf1o",id:"dise\xf1o",level:2},{value:"Configuraci\xf3n del entorno",id:"configuraci\xf3n-del-entorno",level:2},{value:"Pit\xf3n 3",id:"pit\xf3n-3",level:3},{value:"Jupyter",id:"jupyter",level:3},{value:"\xbfPor qu\xe9 correr?",id:"por-qu\xe9-correr",level:2},{value:"Parte 1 - Componentes del tablero, devoluciones de llamadas",id:"parte-1---componentes-del-tablero-devoluciones-de-llamadas",level:2},{value:"Parte 2 - Personalizaci\xf3n, Plantilla PPS",id:"parte-2---personalizaci\xf3n-plantilla-pps",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"metas-de-aprendizaje"},"Metas de aprendizaje"),(0,a.kt)("p",null,"Al final de estos tutoriales, habr\xe1 aprendido c\xf3mo crear un tablero utilizando los componentes de Plotly Dash en Python 3. Tambi\xe9n habr\xe1 aprendido sobre el dise\xf1o del tablero."),(0,a.kt)("h2",{id:"requisitos-previos"},"Requisitos previos"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Un conocimiento b\xe1sico de programaci\xf3n en Python 3 es \xfatil, sin embargo, la instalaci\xf3n de Python 3 y la configuraci\xf3n del entorno se explican a continuaci\xf3n."),(0,a.kt)("li",null,"El conocimiento de HTML es \xfatil ya que Dash tambi\xe9n usa componentes HTML comunes."),(0,a.kt)("li",null,"El conocimiento de CSS es \xfatil ya que los componentes de Dash se pueden dise\xf1ar con CSS.")),(0,a.kt)("h2",{id:"recursos"},"Recursos"),(0,a.kt)("p",null,"Consulte estos recursos para ayudarlo con el desarrollo de su tablero."),(0,a.kt)("h3",{id:"programaci\xf3n"},"Programaci\xf3n"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.python.org/about/gettingstarted/"},"Primeros pasos con Python")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.w3schools.com/python/"},"Tutoriales de Python")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.w3schools.com/html/"},"Tutoriales HTML")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.w3schools.com/css/"},"Tutoriales de CSS")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://dash.plotly.com/"},"Documentaci\xf3n oficial de Dash"))),(0,a.kt)("h2",{id:"dise\xf1o"},"Dise\xf1o"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.figma.com/"},"Herramienta de dise\xf1o de interfaz Figma")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://medium.muz.li/10-rules-of-dashboard-design-f1a4123028a2"},"Dise\xf1o de tablero")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://dash.gallery/Portal/"},"M\xe1s paneles de Dash"))),(0,a.kt)("h2",{id:"configuraci\xf3n-del-entorno"},"Configuraci\xf3n del entorno"),(0,a.kt)("h3",{id:"pit\xf3n-3"},"Pit\xf3n 3"),(0,a.kt)("a",{href:"https://realpython.com/installing-python/"},"Siga esta gu\xeda para instalar Python 3 en su m\xe1quina"),(0,a.kt)("h3",{id:"jupyter"},"Jupyter"),(0,a.kt)("a",{href:"https://realpython.com/installing-python/"},"Siga esta gu\xeda para instalar Python 3 en su m\xe1quina"),(0,a.kt)("h2",{id:"por-qu\xe9-correr"},"\xbfPor qu\xe9 correr?"),(0,a.kt)("p",null,"Dash es relativamente simple de usar y aprender. Tambi\xe9n funciona bien con otros m\xf3dulos de Python. Tambi\xe9n ofrece m\xe1s flexibilidad que otras bibliotecas de paneles similares."),(0,a.kt)("h2",{id:"parte-1---componentes-del-tablero-devoluciones-de-llamadas"},"Parte 1 - Componentes del tablero, devoluciones de llamadas"),(0,a.kt)("h2",{id:"parte-2---personalizaci\xf3n-plantilla-pps"},"Parte 2 - Personalizaci\xf3n, Plantilla PPS"))}d.isMDXComponent=!0}}]);