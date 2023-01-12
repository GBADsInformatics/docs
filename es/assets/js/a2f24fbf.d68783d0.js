"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[7215],{3905:(e,a,o)=>{o.d(a,{Zo:()=>l,kt:()=>p});var s=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,s)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function d(e,a){if(null==e)return{};var o,s,n=function(e,a){if(null==e)return{};var o,s,n={},t=Object.keys(e);for(s=0;s<t.length;s++)o=t[s],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)o=t[s],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=s.createContext({}),c=function(e){var a=s.useContext(i),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},l=function(e){var a=c(e.components);return s.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},m=s.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(o),p=n,f=m["".concat(i,".").concat(p)]||m[p]||u[p]||t;return o?s.createElement(f,r(r({ref:a},l),{},{components:o})):s.createElement(f,r({ref:a},l))}));function p(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,r=new Array(t);r[0]=m;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,r[1]=d;for(var c=2;c<t;c++)r[c]=o[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9826:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=o(7462),n=(o(7294),o(3905));const t={sidebar_position:9},r="Almacenamiento de metadatos: bases de datos de gr\xe1ficos en GBAD",d={unversionedId:"Data-Governance-Handbook-for-GBADs/metadataStorage",id:"Data-Governance-Handbook-for-GBADs/metadataStorage",title:"Almacenamiento de metadatos: bases de datos de gr\xe1ficos en GBAD",description:"GBADs Informatics utiliza neo4j, un sistema de gesti\xf3n de base de datos de gr\xe1ficos, para gestionar y almacenar metadatos e informaci\xf3n sobre las personas y los grupos que participan en el proyecto. Como aprender\xe1 en esta secci\xf3n, una base de datos de grafos es un tipo de base de datos que aprovecha la idea de las conexiones entre entidades como un m\xe9todo para obtener informaci\xf3n y nuevos conocimientos a partir de datos que de otro modo estar\xedan desconectados.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/metadataStorage.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/metadataStorage",permalink:"/es/docs/Data-Governance-Handbook-for-GBADs/metadataStorage",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Gu\xeda del usuario de datos",permalink:"/es/docs/Data-Governance-Handbook-for-GBADs/dataUsers"},next:{title:"Mejores pr\xe1cticas para la codificaci\xf3n",permalink:"/es/docs/Data-Governance-Handbook-for-GBADs/codeBestPractices"}},i={},c=[{value:"\xbfQu\xe9 es una base de datos de gr\xe1ficos?",id:"qu\xe9-es-una-base-de-datos-de-gr\xe1ficos",level:2},{value:"Partes de una base de datos de grafos",id:"partes-de-una-base-de-datos-de-grafos",level:3},{value:"Gesti\xf3n de metadatos maestros",id:"gesti\xf3n-de-metadatos-maestros",level:3}],l={toc:c};function u(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"almacenamiento-de-metadatos-bases-de-datos-de-gr\xe1ficos-en-gbad"},"Almacenamiento de metadatos: bases de datos de gr\xe1ficos en GBAD"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{ep\xedgrafe}"},'"Todo el conocimiento est\xe1 en las conexiones"\n\n-- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart)\n')),(0,n.kt)("p",null,"GBADs Informatics utiliza ",(0,n.kt)("a",{parentName:"p",href:"https://neo4j.com/"},"neo4j"),", un sistema de gesti\xf3n de base de datos de gr\xe1ficos, para gestionar y almacenar metadatos e informaci\xf3n sobre las personas y los grupos que participan en el proyecto. Como aprender\xe1 en esta secci\xf3n, una base de datos de grafos es un tipo de base de datos que aprovecha la idea de las conexiones entre entidades como un m\xe9todo para obtener informaci\xf3n y nuevos conocimientos a partir de datos que de otro modo estar\xedan desconectados."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"En esta secci\xf3n, le decimos qu\xe9 es una base de datos de gr\xe1ficos, c\xf3mo se puede usar, hablamos sobre la investigaci\xf3n de One Health como una entidad conectada y describimos los casos de uso de la base de datos de gr\xe1ficos de GBAD."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{admonici\xf3n}",metastring:"Objetivos de aprendizaje",Objetivos:!0,de:!0,aprendizaje:!0},"* Los lectores deben comprender qu\xe9 es una base de datos de gr\xe1ficos y un modelo de gr\xe1fico\n* Los lectores deben comprender el caso de uso de metadatos para bases de datos de gr\xe1ficos en GBAD\n* Los lectores deben comprender la idea de conectividad y datos.\n")),(0,n.kt)("h2",{id:"qu\xe9-es-una-base-de-datos-de-gr\xe1ficos"},"\xbfQu\xe9 es una base de datos de gr\xe1ficos?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{margen}",metastring:"\xbfQu\xe9 son las bases de datos relacionales?","\xbfQu\xe9":!0,son:!0,las:!0,bases:!0,de:!0,datos:!0,"relacionales?":!0},"Tradicionalmente, los datos se organizan en una serie de tablas. Cada una de las tablas tiene columnas y algunas tablas tienen columnas comunes. Con estas columnas comunes puede especificar uniones entre tablas, lo que da como resultado una nueva tabla.\n\nLa mayor ventaja de las bases de datos relacionales es la capacidad de unir tablas comunes para obtener informaci\xf3n. Por otro lado, las bases de datos relacionales requieren esquemas r\xedgidos que requieren que los ingenieros de bases de datos estructuren sus datos para que se ajusten al esquema. Esto viene con la suposici\xf3n de que sabemos c\xf3mo se ven todos nuestros datos, lo que no siempre es el caso para la investigaci\xf3n.\n\n")),(0,n.kt)("p",null,"Una base de datos de gr\xe1ficos es un tipo de base de datos que almacena datos utilizando relaciones entre ideas o entidades principales. Las relaciones entre diferentes entidades muestran conectividad, lo que permite obtener m\xe1s informaci\xf3n que una base de datos relacional tradicional. Debido a que los datos son altamente complejos y multidimensionales en t\xe9rminos de estructura, procedencia, gobierno, seguridad y sem\xe1ntica, GBADs utiliza bases de datos gr\xe1ficas para la gesti\xf3n de metadatos maestros y la catalogaci\xf3n de datos. Al aprovechar la naturaleza din\xe1mica de la base de datos de gr\xe1ficos y estructurar nuestro ",(0,n.kt)("strong",{parentName:"p"},"modelo de gr\xe1ficos")," de una manera que permita una mejor comprensi\xf3n de las muchas dimensiones de los datos, podemos visualizar y comprender c\xf3mo fluyen los datos dentro y fuera de nuestra organizaci\xf3n. Las bases de datos de gr\xe1ficos tambi\xe9n nos permiten agregar y cambiar la estructura a medida que cambia la estructura de la informaci\xf3n sobre los datos. Esto se volver\xe1 m\xe1s claro a medida que presentemos el modelo preliminar de datos del gr\xe1fico GBADs."),(0,n.kt)("h3",{id:"partes-de-una-base-de-datos-de-grafos"},"Partes de una base de datos de grafos"),(0,n.kt)("p",null,"Las bases de datos de grafos se componen de ",(0,n.kt)("strong",{parentName:"p"},"nodos")," (entidades) y ",(0,n.kt)("strong",{parentName:"p"},"aristas")," (relaciones). Los nodos pueden tener propiedades y etiquetas, mientras que los bordes sirven como conexi\xf3n o relaci\xf3n entre nodos."),(0,n.kt)("p",null,"Un modelo gr\xe1fico es un modelo de qu\xe9 tipo de nodos est\xe1 representando y c\xf3mo est\xe1n conectados (qu\xe9 relaciones tendr\xe1)."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png",alt:"Modelo gr\xe1fico"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Investigaci\xf3n y conectividad")),(0,n.kt)("p",null,"La investigaci\xf3n y el modelado se basan en los datos que recopilamos para dar sentido al mundo que nos rodea. Usamos los datos para obtener informaci\xf3n que informe las decisiones o para hacer modelos que informen las decisiones, pronosticar, optimizar, comprender, promover la ciencia, mejorar los negocios, comprender qu\xe9 caracter\xedsticas de algo son realmente fundamentales para la toma de decisiones o ese impacto. lo que sea que estemos estudiando. Pero lo que a menudo falta en nuestras colecciones de datos (nuestros conjuntos de datos) es la conexi\xf3n o las relaciones entre las cosas que estamos estudiando."),(0,n.kt)("p",null,"Las bases de datos de gr\xe1ficos nos permiten capturar estas relaciones y usarlas para obtener nuevos conocimientos y visualizar datos de una manera m\xe1s significativa."),(0,n.kt)("h3",{id:"gesti\xf3n-de-metadatos-maestros"},"Gesti\xf3n de metadatos maestros"),(0,n.kt)("p",null,"Para comprender m\xe1s acerca de los metadatos, c\xf3mo se usan y por qu\xe9 son tan importantes, consulte la ",(0,n.kt)("a",{parentName:"p",href:"#techdatastds"},"secci\xf3n de metadatos")," de este manual."),(0,n.kt)("p",null,"Usamos bases de datos de grafos para entender el flujo de"),(0,n.kt)("p",null,"Los conjuntos de datos se pueden relacionar de muchas maneras diferentes. Se pueden conectar dos conjuntos de datos diferentes, de diferentes fuentes, en t\xe9rminos de sus propiedades descriptivas, como el"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mientras que diferentes conjuntos de datos pueden tener diferentes contenidos de metadatos, siempre hay relaciones que pueden conectar conjuntos de datos a otros."),(0,n.kt)("li",{parentName:"ul"},"Las bases de datos de grafos aprovechan esta idea al...")))}u.isMDXComponent=!0}}]);