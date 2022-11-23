"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[7580],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=s.createContext({}),l=function(e){var n=s.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return s.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return t?s.createElement(f,a(a({ref:n},u),{},{components:t})):s.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(7462),r=(t(7294),t(3905));const o={sidebar_position:6},a="Audits et revues des donn\xe9es et de la gestion des donn\xe9es",i={unversionedId:"Data-Governance-Handbook-for-GBADs/dataAudits",id:"Data-Governance-Handbook-for-GBADs/dataAudits",title:"Audits et revues des donn\xe9es et de la gestion des donn\xe9es",description:"Les audits font partie int\xe9grante de notre plan de gouvernance des donn\xe9es ; ils permettent \xe0 notre organisation d'obtenir des informations sur la fa\xe7on dont les donn\xe9es sont g\xe9r\xe9es, si nos besoins en donn\xe9es sont satisfaits et fournissent des informations sur nos fonds de donn\xe9es actuels.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/dataAudits.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataAudits",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/dataAudits",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"M\xe9canismes de partage de donn\xe9es",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/mechanisms"},next:{title:"Guide du contributeur de donn\xe9es",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/dataContributors"}},d={},l=[{value:"Cadre d&#39;audit des donn\xe9es",id:"cadre-daudit-des-donn\xe9es",level:2}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"audits-et-revues-des-donn\xe9es-et-de-la-gestion-des-donn\xe9es"},"Audits et revues des donn\xe9es et de la gestion des donn\xe9es"),(0,r.kt)("p",null,"Les audits font partie int\xe9grante de notre plan de gouvernance des donn\xe9es ; ils permettent \xe0 notre organisation d'obtenir des informations sur la fa\xe7on dont les donn\xe9es sont g\xe9r\xe9es, si nos besoins en donn\xe9es sont satisfaits et fournissent des informations sur nos fonds de donn\xe9es actuels."),(0,r.kt)("p",null,"L'\xe9valuation des donn\xe9es que les courtiers GBAD nous permettront de comprendre quels types de donn\xe9es sont riches et lesquels manquent. Aux \xe9tapes pr\xe9liminaires du d\xe9veloppement de l'\xe9cosyst\xe8me de donn\xe9es, cela permettra \xe9galement aux auditeurs de d\xe9terminer si les m\xe9tadonn\xe9es descriptives peuvent \xeatre compl\xe9t\xe9es par plus de termes et si le syst\xe8me prend en charge les principes directeurs FAIR et CARE. \xc9tant donn\xe9 que la vue du syst\xe8me d\xe9pend du type d'utilisateur ","[section FIXME]",", des protocoles de r\xe9vision seront d\xe9velopp\xe9s pour s'assurer que les donn\xe9es sont visualis\xe9es comme pr\xe9vu."),(0,r.kt)("p",null,"Des audits r\xe9guliers permettront de savoir si le plan de gouvernance des donn\xe9es est clair et bien document\xe9\xa0; les m\xe9canismes sous-jacents \xe0 l'emplacement, au stockage, \xe0 la cr\xe9ation de m\xe9tadonn\xe9es, \xe0 la propri\xe9t\xe9 des donn\xe9es et \xe0 la gestion des donn\xe9es doivent \xeatre clairs et facilement respect\xe9s si les plans et les politiques sont clairs et bien document\xe9s. Si les audits r\xe9v\xe8lent des incoh\xe9rences dans la gestion des donn\xe9es, la gestion des donn\xe9es peut \xeatre corrig\xe9e."),(0,r.kt)("p",null,"Des audits de donn\xe9es r\xe9guliers r\xe9pondront \xe0 ces 5 questions fondamentales, comme sugg\xe9r\xe9 par {cite}",(0,r.kt)("inlineCode",{parentName:"p"},"Jones2008"),"\xa0:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Quels actifs de donn\xe9es existent actuellement\xa0?"),(0,r.kt)("li",{parentName:"ol"},"O\xf9 sont situ\xe9s ces actifs ?"),(0,r.kt)("li",{parentName:"ol"},"Comment ont-ils \xe9t\xe9 g\xe9r\xe9s \xe0 ce jour ?"),(0,r.kt)("li",{parentName:"ol"},"Lequel de ces actifs doit \xeatre maintenu \xe0 long terme\xa0?"),(0,r.kt)("li",{parentName:"ol"},"Les pratiques actuelles de gestion des donn\xe9es mettent-elles ces actifs en danger ?")),(0,r.kt)("p",null,"Notre syst\xe8me prend en charge la confidentialit\xe9 et la s\xe9curit\xe9 de nos parties prenantes en mati\xe8re de donn\xe9es priv\xe9es. Nous inclurons donc les questions suppl\xe9mentaires suivantes\xa0:"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Qui a acc\xe8s \xe0 quels actifs de donn\xe9es ?"),(0,r.kt)("li",{parentName:"ol"},"Qui sont nos parties prenantes en mati\xe8re de donn\xe9es priv\xe9es et les pratiques actuelles de gestion des donn\xe9es prot\xe8gent-elles ad\xe9quatement nos parties prenantes en mati\xe8re de donn\xe9es priv\xe9es\xa0?")),(0,r.kt)("p",null,"Cette section fournit des informations sur notre plan d'audit des donn\xe9es et sur la mani\xe8re dont les r\xe9sultats de l'audit alimenteront notre plan de gouvernance et de gestion des donn\xe9es. Des audits r\xe9guliers nous permettront d'am\xe9liorer progressivement la qualit\xe9 des m\xe9tadonn\xe9es et des donn\xe9es qui transitent par notre syst\xe8me. L'audit comprendra l'examen des commentaires des utilisateurs de donn\xe9es et des contributeurs afin d'int\xe9grer formellement les suggestions dans les futures versions de notre syst\xe8me et d'am\xe9liorer la cr\xe9ation et la gestion des m\xe9tadonn\xe9es pour prendre en charge les donn\xe9es FAIR."),(0,r.kt)("h2",{id:"cadre-daudit-des-donn\xe9es"},"Cadre d'audit des donn\xe9es"),(0,r.kt)("p",null,"Une m\xe9thodologie de cadre d'audit des donn\xe9es (DAF) servira de m\xe9thodologie principale pour l'audit des actifs de donn\xe9es des GBAD {cite}",(0,r.kt)("inlineCode",{parentName:"p"},"Jones2008"),"."),(0,r.kt)("p",null,"Le DAF se trouve en Annexe FIXME, ainsi que les \xe9tapes des audits et les formulaires n\xe9cessaires \xe0 l'audit."),(0,r.kt)("p",null,"L'auditeur doit avoir acc\xe8s \xe0 toutes les ressources de donn\xe9es et aux pi\xe8ces justificatives. Pour d\xe9terminer quels actifs de donn\xe9es existent actuellement, l'auditeur peut acc\xe9der au catalogue de donn\xe9es qui fournit toutes les m\xe9tadonn\xe9es des ressources de donn\xe9es."))}c.isMDXComponent=!0}}]);