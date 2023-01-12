"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[9695],{3905:(e,a,o)=>{o.d(a,{Zo:()=>l,kt:()=>m});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),d=function(e){var a=t.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},l=function(e){var a=d(e.components);return t.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return o?t.createElement(f,s(s({ref:a},l),{},{components:o})):t.createElement(f,s({ref:a},l))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<r;d++)s[d]=o[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7945:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=o(7462),n=(o(7294),o(3905));const r={sidebar_position:12},s="Ejemplos",i={unversionedId:"Data-Governance-Handbook-for-GBADs/examples",id:"Data-Governance-Handbook-for-GBADs/examples",title:"Ejemplos",description:"Escenario 1: Metadatos para datos corporativos",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/examples.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/examples",permalink:"/es/docs/Data-Governance-Handbook-for-GBADs/examples",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Organizaci\xf3n de datos en hojas de c\xe1lculo",permalink:"/es/docs/Data-Governance-Handbook-for-GBADs/dataBestPractices"},next:{title:"Ap\xe9ndices",permalink:"/es/docs/Data-Governance-Handbook-for-GBADs/appendices"}},c={},d=[{value:"Escenario 1: Metadatos para datos corporativos",id:"escenario-1-metadatos-para-datos-corporativos",level:2},{value:"Escenario 2: metadatos para datos modificados",id:"escenario-2-metadatos-para-datos-modificados",level:2},{value:"Escenario 3: metadatos de contribuyentes ind\xedgenas",id:"escenario-3-metadatos-de-contribuyentes-ind\xedgenas",level:2}],l={toc:d};function p(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ejemplos"},"Ejemplos"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{admonici\xf3n}",metastring:"Se necesita una descripci\xf3n de esta secci\xf3n",Se:!0,necesita:!0,una:!0,"descripci\xf3n":!0,de:!0,esta:!0,"secci\xf3n":!0},"Proporcione un escenario y metadatos para cada tipo de datos descritos en la secci\xf3n Propiedad de los datos\n")),(0,n.kt)("h2",{id:"escenario-1-metadatos-para-datos-corporativos"},"Escenario 1: Metadatos para datos corporativos"),(0,n.kt)("p",null,"Metadatos para datos de la FAO que ya est\xe1n disponibles a trav\xe9s del portal GBADs. Los metadatos son para\nAnimales vivos > Etiop\xeda > Stocks > Pollos > 1961 - 2018."),(0,n.kt)("p",null,"Estos metadatos hacen las siguientes suposiciones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La fecha de creaci\xf3n es cuando la FAO revis\xf3 sus metodolog\xedas de dominio de datos agr\xedcolas"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf"},"Referencia"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\n"@contexto": {\n//Cada t\xe9rmino de metadatos ir\xeda aqu\xed, con una referencia (URL)\n// al contexto, o descripci\xf3n del t\xe9rmino\n//Todav\xeda estamos decidiendo los est\xe1ndares y creando los nuestros propios (que pueden ser\n//registrado), por lo que esto se deja en gran parte en blanco, por ahora.\n"cobertura espacial":"https://www.geonames.org/countries/",\n"cobertura temporal":"https://www.iso.org/iso-8601-formato-de-fecha-y-hora.html"\n\n},\n"@id": "http://www.fao.org/faostat/en/#data/QA",\n"@type":"https://schema.org/Conjunto de datos",\n"URI": "http://www.fao.org/faostat/en/#data/QA",\n"t\xedtulo": "Pollo de la FAO, animales vivos",\n"derechosdeacceso":"Abrir",\n"acumulaci\xf3n":{\n"accrualMethod":"pr\xe9stamo",\n"accrualPeriodicity":"Anual",\n},\n"creador": {\n"@type": "creadorCorporativo",\n"URL":"http://www.fao.org/",\n},\n"cobertura": {\n"cobertura temporal":"1961/2018",\n"cobertura espacial":"ET"\n},\n"fecha": {\n"creado":"2016",\n"fechaEnviado":"2020-10-09",\n"modificado": "2020-03-04"\n},\n"description":"N\xfamero de pollos vivos en Etiop\xeda desde 1961 hasta 2020, calculado y registrado por la FAO.",\n"distribuci\xf3n":"descargadirecta",\n"relaci\xf3n":{\n"formato":"csv, json"\n},\n"tema": {\n"clasificaci\xf3n del tema": "",\n"subjectKeywords": "Pollo, FAO, Animales vivos",\n"subjectThesaraus":"http://aims.fao.org/vest-registry/vocabularies/agrovoc"\n},\n"Idioma: ingl\xe9s",\n"licencia":"http://www.fao.org/tenure/resources/results/details/en/c/CA7570EN/#querystring=JmVuZHN0cmluZz0x",\n"procedencia":[\n"http://fenixservices.fao.org/faostat/static/documents/QA/QA_Update_History.pdf",\n"http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf"\n],\n"editor":"http://www.fao.org/faostat/",\n"fuente":"http://www.fao.org/faostat/en/#data/QA",\n"metodolog\xeda":"http://fenixservices.fao.org/faostat/static/documents/QA/QL_methodology_e.pdf",\n"metadataInformaci\xf3n":"http://www.fao.org/faostat/en/#data/QA",\n"vocabularyEncodingScheme": "http://aims.fao.org/vest-registry/vocabularies/agrovoc"\n\n\n')),(0,n.kt)("h2",{id:"escenario-2-metadatos-para-datos-modificados"},"Escenario 2: metadatos para datos modificados"),(0,n.kt)("p",null,"En los casos en que los datos sin procesar se modificaron de alguna manera, como a trav\xe9s del modelado, los metadatos deben reflejar que los datos son\ncreado a trav\xe9s de transformaciones de alg\xfan tipo. Tambi\xe9n se debe proporcionar la informaci\xf3n de procedencia de los datos sin procesar.\nincluyendo enlaces o referencias a programas de computadora que crearon los datos. Tambi\xe9n se deben citar las publicaciones relacionadas.\no referenciado. Tenga en cuenta que GBADs a\xfan no tiene datos para este escenario y estos metadatos se fabrican para\nmejorar la comprensi\xf3n de los metadatos y la estrategia de gobernanza de datos."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{advertencia}",metastring:"para agregar",para:!0,agregar:!0},"metadatos\n")),(0,n.kt)("h2",{id:"escenario-3-metadatos-de-contribuyentes-ind\xedgenas"},"Escenario 3: metadatos de contribuyentes ind\xedgenas"),(0,n.kt)("p",null,"En este escenario los datos son aportados por Pueblos Ind\xedgenas o comunidades y los metadatos reflejar\xe1n los datos y\nrestricciones de privacidad que deben utilizarse para cumplir con CARE."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{advertencia}",metastring:"para agregar",para:!0,agregar:!0},"metadatos\n")))}p.isMDXComponent=!0}}]);