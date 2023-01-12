"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[8637],{3905:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>m});var s=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,s)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,s,t=function(e,a){if(null==e)return{};var o,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=s.createContext({}),l=function(e){var a=s.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},c=function(e){var a=l(e.components);return s.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},u=s.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(o),m=t,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return o?s.createElement(b,n(n({ref:a},c),{},{components:o})):s.createElement(b,n({ref:a},c))}));function m(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,n=new Array(r);n[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,n[1]=i;for(var l=2;l<r;l++)n[l]=o[l];return s.createElement.apply(null,n)}return s.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5002:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=o(7462),t=(o(7294),o(3905));const r={slug:"the-roadmap-to-reproducibility",title:"La hoja de ruta hacia la reproducibilidad",authors:"Kassy",tags:["reproducibility","data","values"]},n=void 0,i={permalink:"/es/blog/the-roadmap-to-reproducibility",source:"@site/i18n/es/docusaurus-plugin-content-blog/the-road-to-reproducibility.md",title:"La hoja de ruta hacia la reproducibilidad",description:"Imagen de encabezado",date:"2023-01-12T16:36:18.000Z",formattedDate:"12 de enero de 2023",tags:[{label:"reproducibility",permalink:"/es/blog/tags/reproducibility"},{label:"data",permalink:"/es/blog/tags/data"},{label:"values",permalink:"/es/blog/tags/values"}],readingTime:6.785,hasTruncateMarker:!1,authors:[{name:"Kassy Raymond",title:"PhD Student @ UoG",url:"https://github.com/kassyray",imageURL:"https://github.com/kassyray.png",key:"Kassy"}],frontMatter:{slug:"the-roadmap-to-reproducibility",title:"La hoja de ruta hacia la reproducibilidad",authors:"Kassy",tags:["reproducibility","data","values"]},prevItem:{title:"Genomics & GBADs: How NCBI metadata can be a new source of data on livestock production and health",permalink:"/es/blog/genomics-and-gbads-how-ncbi-metadata-can-be-a-new-source-of-data-on-livestock production-and-health"},nextItem:{title:"Spring GBADs Inform\xe1tica Reba\xf1o Round-Up",permalink:"/es/blog/spring-GBADs-informatics-herd-round-up"}},d={authorsImageUrls:[void 0]},l=[{value:"La \u201cCrisis de la Reproducibilidad\u201d",id:"la-crisis-de-la-reproducibilidad",level:2},{value:"Emprender el camino hacia la reproducibilidad",id:"emprender-el-camino-hacia-la-reproducibilidad",level:2},{value:"Parada 1: Personas y procesos",id:"parada-1-personas-y-procesos",level:3},{value:"Parada 2: Adquisici\xf3n e ingesta de datos",id:"parada-2-adquisici\xf3n-e-ingesta-de-datos",level:3},{value:"Parada 3: Calidad de los datos",id:"parada-3-calidad-de-los-datos",level:3},{value:"Parada 4: C\xf3digo",id:"parada-4-c\xf3digo",level:3},{value:"Destino final: la utop\xeda de los datos",id:"destino-final-la-utop\xeda-de-los-datos",level:3}],c={toc:l};function p(e){let{components:a,...o}=e;return(0,t.kt)("wrapper",(0,s.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://i.imgur.com/2JEVnaV.png",alt:"Imagen de encabezado"}),"\n",(0,t.kt)("em",{parentName:"p"},"Figura 1: La hoja de ruta hacia la reproducibilidad")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("em",{parentName:"p"},"\u201cEl punto central de la ciencia, la forma en que sabemos algo, no es que conf\xede en Isaac Newton porque creo que era un gran tipo. El punto es que puedo hacerlo yo mismo... Mu\xe9strenme los datos, mu\xe9strenme el proceso, mu\xe9strenme el m\xe9todo, y luego, si quiero, puedo reproducirlo\u201d."))),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results-succeeds-only-36-times/"},"Brian Nosek")," - Washington Post",(0,t.kt)("sup",{parentName:"p",id:"fnref-1-e8edc2"},(0,t.kt)("a",{parentName:"sup",href:"#fn-1-e8edc2",className:"footnote-ref"},"1"))),(0,t.kt)("br",null),(0,t.kt)("p",null,"La ciencia reproducible requiere m\xe9todos bien documentados, c\xf3digo y disponibilidad de datos. Significa proporcionar transparencia en lo que est\xe1 haciendo a lo largo de todo el proceso cient\xedfico para fomentar la confianza en el proceso y los resultados y permitir que otros aprovechen el trabajo anterior. No hay lugar para el esc\xe9ptico cient\xedfico cuando su investigaci\xf3n es reproducible."),(0,t.kt)("br",null),(0,t.kt)("p",null,"Los datos que usa GBAD provienen de muchas fuentes diferentes y se usan en modelos que luego producen m\xe1s conjuntos de datos y que act\xfaan como entradas para otros modelos. Esta conexi\xf3n en cadena de datos-modelo-datos-modelo-datos no se limita al trabajo de un solo cient\xedfico; tenemos colaboradores trabajando en todo el mundo. Es crucial que los datos subyacentes est\xe9n disponibles y que todos nuestros m\xe9todos sean reproducibles para que podamos aprovechar el trabajo de los dem\xe1s y permitir que otros utilicen nuestras estimaciones con confianza."),(0,t.kt)("br",null),(0,t.kt)("p",null,'Con el objetivo de hacer que todos nuestros procesos sean reproducibles y transparentes, GBADs se embarca en la \u201cHoja de ruta hacia la reproducibilidad\u201d. En esta entrada de blog te invitamos a recorrer con nosotros el camino de la reproducibilidad. Abr\xf3chense los cinturones de seguridad mientras evitamos las llamaradas de fuego de la "Crisis de reproducibilidad" antes de dirigirnos a nuestro destino final, \xa1la "Utop\xeda de los datos"!'),(0,t.kt)("br",null),(0,t.kt)("h2",{id:"la-crisis-de-la-reproducibilidad"},"La \u201cCrisis de la Reproducibilidad\u201d"),(0,t.kt)("p",null,'En 2016, una encuesta de 1576 investigadores de Nature revel\xf3 que existe una "crisis de reproducibilidad" en la comunidad cient\xedfica',(0,t.kt)("sup",{parentName:"p",id:"fnref-2-e8edc2"},(0,t.kt)("a",{parentName:"sup",href:"#fn-2-e8edc2",className:"footnote-ref"},"2")),'. De los participantes, "m\xe1s del 70% de los investigadores han intentado y no han podido reproducir el experimento de otro cient\xedfico y m\xe1s de la mitad no han podido reproducir sus propios experimentos". Muchos factores contribuyen a la investigaci\xf3n irreproducible (Figura 2), donde la presi\xf3n para publicar y el reportaje selectivo se encontraban entre los mejor calificados. Sin embargo, los datos sin procesar no disponibles y los m\xe9todos o c\xf3digos no disponibles tambi\xe9n se calificaron como contribuyentes importantes. Si bien la presi\xf3n para publicar requiere un cambio cultural en la investigaci\xf3n, los datos sin procesar y los m\xe9todos o el c\xf3digo no disponibles son problemas que podemos resolver.'),(0,t.kt)("br",null),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://i.imgur.com/dcnJkJR.jpg",alt:"Figura 2"}),"\nFigura 2: Factores que contribuyen a la investigaci\xf3n irreproducible. Cifra obtenida de Baker, 2016",(0,t.kt)("sup",{parentName:"p",id:"fnref-2-e8edc2"},(0,t.kt)("a",{parentName:"sup",href:"#fn-2-e8edc2",className:"footnote-ref"},"2")),"."),(0,t.kt)("h2",{id:"emprender-el-camino-hacia-la-reproducibilidad"},"Emprender el camino hacia la reproducibilidad"),(0,t.kt)("h3",{id:"parada-1-personas-y-procesos"},"Parada 1: Personas y procesos"),(0,t.kt)("p",null,"La disponibilidad del c\xf3digo y los datos es importante para la reproducibilidad; sin embargo, hay personas detr\xe1s del c\xf3digo y los datos que trabajan en los procesos para hacerlo reproducible."),(0,t.kt)("br",null),(0,t.kt)("p",null,"Como tal, hemos establecido procesos y mejores pr\xe1cticas para el uso de datos en GBAD, que se comunican en el ","[Manual de gobierno de datos]"," (",(0,t.kt)("a",{parentName:"p",href:"http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/intro"},"http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/intro")," ), y en nuestro ","[sitio de documentaci\xf3n]"," (",(0,t.kt)("a",{parentName:"p",href:"http://gbadskedoc.org"},"http://gbadskedoc.org"),"). Estos procesos implican lo siguiente:"),(0,t.kt)("br",null),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Documentaci\xf3n de cambios en los datos y pr\xe1cticas de limpieza de datos"),(0,t.kt)("li",{parentName:"ol"},"Documentaci\xf3n de los est\xe1ndares de metadatos utilizados para proporcionar informaci\xf3n sobre los datos"),(0,t.kt)("li",{parentName:"ol"},"D\xf3nde y c\xf3mo se almacenan los datos y metadatos, y c\xf3mo se difunden"),(0,t.kt)("li",{parentName:"ol"},"Mejores pr\xe1cticas para documentar c\xf3digo en repositorios de GitHub")),(0,t.kt)("br",null),(0,t.kt)("p",null,"Tambi\xe9n nos apoyamos en las personas para cumplir con los procesos que hemos establecido. Dado que algunos de los datos que utilizan los GBAD no tienen metadatos, confiamos en el establecimiento de un punto de contacto para la fuente de datos para garantizar que podamos obtener contexto sobre c\xf3mo se recopilaron los datos, c\xf3mo se pueden usar, por qui\xe9n, y para qu\xe9 prop\xf3sitos, y qu\xe9 categor\xedas en los datos representan."),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"parada-2-adquisici\xf3n-e-ingesta-de-datos"},"Parada 2: Adquisici\xf3n e ingesta de datos"),(0,t.kt)("p",null,"Para adquirir datos, identificamos datos que son relevantes para la estimaci\xf3n de modelos. Por ejemplo, la poblaci\xf3n de ganado por pa\xeds y especie y los pesos vivos son entradas para los c\xe1lculos de biomasa."),(0,t.kt)("br",null),(0,t.kt)("p",null,"La forma en que adquirimos los datos depende del formato en el que est\xe9n disponibles. Hay 3 formas principales en que se han adquirido e ingerido los datos:"),(0,t.kt)("br",null),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Cuando los datos est\xe1n disponibles a trav\xe9s de las interfaces de programaci\xf3n de aplicaciones (API), los datos se adquieren directamente de la fuente y se transforman antes de que est\xe9n disponibles a trav\xe9s de la API de GBAD;"),(0,t.kt)("li",{parentName:"ul"},"Cuando los datos est\xe1n disponibles a trav\xe9s de la descarga directa, los datos se descargan y se formatean en las tablas de la base de datos antes de que est\xe9n disponibles a trav\xe9s de la API de GBAD, y;"),(0,t.kt)("li",{parentName:"ul"},"Cuando los datos est\xe1n disponibles en tablas PDF, los scripts de raspado web raspan los datos de las tablas y los ponen a disposici\xf3n a trav\xe9s de archivos csv antes de formatearlos en las tablas de la base de datos y ponerlos a disposici\xf3n a trav\xe9s de la API de GBAD.")),(0,t.kt)("br",null),(0,t.kt)("p",null,"Cada uno de estos procesos est\xe1 documentado. El linaje de los datos se rastrea en una base de datos gr\xe1fica para garantizar que podamos rastrear cualquier cambio en los datos y hacer que nuestros procesos sean transparentes y reproducibles."),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"parada-3-calidad-de-los-datos"},"Parada 3: Calidad de los datos"),(0,t.kt)("p",null,'Verificamos la calidad de cada fuente de datos adquirida por GBAD. A veces hay errores internos en la agregaci\xf3n de categorizaciones donde las subcategor\xedas no se suman a una "supercategor\xeda". Por ejemplo, si las aves de corral se dividen en aves comerciales y de traspatio, estas categor\xedas deber\xedan sumar "aves de corral". En otros casos, puede haber un aumento repentino en la cantidad de animales en un pa\xeds. En este caso, necesitamos investigar comparando el valor con otras fuentes de datos.'),(0,t.kt)("br",null),(0,t.kt)("p",null,'Se registran todos los controles de calidad y los cambios respectivos. Una vez que los datos se han "limpiado", la versi\xf3n "limpiada" se proporciona a trav\xe9s de la API y los paneles de GBAD. De esta manera, hay consistencia en las evaluaciones de calidad y cada colaborador no lo est\xe1 haciendo de forma independiente. Esto garantiza la coherencia en los resultados y mejora la reproducibilidad de las estimaciones y los datos de GBAD en conjunto.'),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"parada-4-c\xf3digo"},"Parada 4: C\xf3digo"),(0,t.kt)("p",null,"El c\xf3digo que se utiliza para adquirir e ingerir datos, limpiar datos y crear modelos est\xe1 disponible a trav\xe9s de los repositorios GitHub de GBAD. El c\xf3digo est\xe1 bien documentado y hay informaci\xf3n sobre c\xf3mo ejecutar el c\xf3digo, qu\xe9 conjuntos de datos se usaron y qui\xe9n particip\xf3 en el desarrollo."),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"destino-final-la-utop\xeda-de-los-datos"},"Destino final: la utop\xeda de los datos"),(0,t.kt)("p",null,"En Data Utopia, los datos se pueden armonizar y reutilizar para modelos o prop\xf3sitos posteriores. La idea aqu\xed es que todos los miembros de GBAD utilicen los mismos datos y no dupliquen los esfuerzos de limpieza, ingesta o adquisici\xf3n de datos. Al hacer que los datos y la metodolog\xeda para la limpieza sean reproducibles, los datos subyacentes son consistentes y est\xe1n listos para usar. En nuestra Utop\xeda, los datos se visualizan y est\xe1n disponibles a trav\xe9s de paneles y se puede acceder a ellos a trav\xe9s de la API. Los tableros tambi\xe9n cuentan con una pesta\xf1a de metadatos donde se proporciona la metodolog\xeda, el c\xf3digo y la informaci\xf3n de procedencia para garantizar que todos los miembros puedan acceder al c\xf3digo y los datos sin procesar que se muestran y est\xe1n disponibles en los tableros."),(0,t.kt)("br",null),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Nota: Reconocemos el hecho de que no todos los datos pueden estar disponibles. Si bien actualmente estamos trabajando con Datos Gubernamentales Abiertos, anticipamos el gobierno controlado de datos privados y confidenciales, que no estar\xe1n disponibles abiertamente en forma sin procesar sin el permiso del titular de los datos de acuerdo con los acuerdos y licencias de datos.")),(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("p",null,"Referencias:"),(0,t.kt)("div",{className:"footnotes"},(0,t.kt)("hr",{parentName:"div"}),(0,t.kt)("ol",{parentName:"div"},(0,t.kt)("li",{parentName:"ol",id:"fn-1-e8edc2"},"Achenbach, J. (27 de octubre de 2021). Muchos estudios cient\xedficos no se pueden replicar. eso es un problema. El Correo de Washington. Recuperado el 19 de junio de 2022 de ","[https://www.washingtonpost.com/news/peaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100- resultados-experimentales-tienen \xe9xito-solo-36-veces/]","(",(0,t.kt)("a",{parentName:"li",href:"https://www.washingtonpost.com/news/hablando-de-la-ciencia/wp/2015/08/27/trouble-in-science-massive-effort-"},"https://www.washingtonpost.com/news/hablando-de-la-ciencia/wp/2015/08/27/trouble-in-science-massive-effort-")," reproducir-100-resultados-experimentales-tiene-\xe9xito-solo-36-veces/)",(0,t.kt)("a",{parentName:"li",href:"#fnref-1-e8edc2",className:"footnote-backref"},"\u21a9")),(0,t.kt)("li",{parentName:"ol",id:"fn-2-e8edc2"},"Panadero, M. (2016). 1.500 cient\xedficos levantan la tapa de la reproducibilidad. Naturaleza, 533 (7604).",(0,t.kt)("a",{parentName:"li",href:"#fnref-2-e8edc2",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);