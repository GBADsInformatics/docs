"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[6994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=l,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={id:"Travailler-avec-Anduryl",title:"Travailler avec Anduryl",sidebar_position:10},i=void 0,o={unversionedId:"Travailler-avec-Anduryl",id:"Travailler-avec-Anduryl",title:"Travailler avec Anduryl",description:"Conditions pr\xe9alables",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Working-with-Anduryl.md",sourceDirName:".",slug:"/Travailler-avec-Anduryl",permalink:"/fr/docs/Travailler-avec-Anduryl",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"Travailler-avec-Anduryl",title:"Travailler avec Anduryl",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Un nouvel ajout aux ressources de donn\xe9es One Health",permalink:"/fr/docs/Un-nouvel-ajout-aux-ressources-de-donn\xe9es-One-Health"},next:{title:"Pr\xe9sentation du Symposium One Health Mai 2022",permalink:"/fr/docs/Pr\xe9sentation-du-Symposium-One-Health-Mai-2022"}},u={},s=[{value:"Conditions pr\xe9alables",id:"conditions-pr\xe9alables",level:2},{value:"Installation Anduryl",id:"installation-anduryl",level:2},{value:"Anduryl dans le cahier Jupyter",id:"anduryl-dans-le-cahier-jupyter",level:2},{value:"Anduryl dans R Studio",id:"anduryl-dans-r-studio",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"conditions-pr\xe9alables"},"Conditions pr\xe9alables"),(0,l.kt)("p",null,"Vous pouvez soit installer ces programmes s\xe9par\xe9ment, soit installer Anaconda."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Option 1")," : Anaconda"),(0,l.kt)("li",{parentName:"ul"},"Installer la distribution ",(0,l.kt)("a",{parentName:"li",href:"https://www.anaconda.com/products/distribution"},"Anaconda")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Option 2")," : Installer s\xe9par\xe9ment"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python3")," ou sup\xe9rieur"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://jupyter.org/install"},"Cahier Jupyter")),(0,l.kt)("li",{parentName:"ul"},"Vous utiliserez Python pour installer Jupyter")),(0,l.kt)("h2",{id:"installation-anduryl"},"Installation Anduryl"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Planifiez")," l'endroit o\xf9 vous voulez installer Anduryl.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nous vous sugg\xe9rons d'installer le module dans un endroit facilement accessible comme votre dossier Accueil."),(0,l.kt)("li",{parentName:"ul"},"Terminologie utilis\xe9e :"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"PARENT_FOLDER"),"\xa0: il s'agit du chemin d'acc\xe8s au dossier dans lequel vous souhaitez installer Anduryl."),(0,l.kt)("li",{parentName:"ul"},"Cela peut \xeatre n'importe o\xf9 sur votre syst\xe8me, il ressemblera \xe0 ceci (vous pouvez changer cela) ",(0,l.kt)("br",null),"\nWindows\xa0: ",(0,l.kt)("inlineCode",{parentName:"li"},"C:/Users/VOTRE_NOM")," ",(0,l.kt)("br",null),"\nMac\xa0: ",(0,l.kt)("inlineCode",{parentName:"li"},"/home/nom"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"T\xe9l\xe9charger Anduryl"),". Cela peut \xeatre fait de 2 fa\xe7ons, en le t\xe9l\xe9chargeant depuis votre navigateur ou en utilisant la commande git.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Option 1")," : Navigateur")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Acc\xe9dez \xe0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/GBADsInformatics/anduryl-plus"},"https://github.com/GBADsInformatics/anduryl-plus")),(0,l.kt)("li",{parentName:"ol"},"Cliquez sur le bouton vert ",(0,l.kt)("inlineCode",{parentName:"li"},"Code")," puis ",(0,l.kt)("inlineCode",{parentName:"li"},"T\xe9l\xe9charger ZIP")),(0,l.kt)("li",{parentName:"ol"},"D\xe9placez le ZIP t\xe9l\xe9charg\xe9 vers le ",(0,l.kt)("em",{parentName:"li"},"PARENT_FOLDER")," dans lequel vous souhaitez installer Anduryl."),(0,l.kt)("li",{parentName:"ol"},'Faites un clic droit sur le ZIP et cliquez sur "Extraire tout" ou "Extraire ici"'),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Renommer")," le nouveau dossier ",(0,l.kt)("inlineCode",{parentName:"li"},"anduryl-plus-master")," en ",(0,l.kt)("inlineCode",{parentName:"li"},"anduryl")),(0,l.kt)("li",{parentName:"ol"},'Ouvrez votre syst\xe8me d\'exploitation "Invite de commandes" ou "Terminal"'),(0,l.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,l.kt)("inlineCode",{parentName:"li"},"cd INSERT_PARENT_FOLDER_HERE")),(0,l.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,l.kt)("inlineCode",{parentName:"li"},"python -m anduryl"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Option 2")," : Commande Git (n\xe9cessite l'installation de git)")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Ouvrez votre invite de commande/terminal, puis acc\xe9dez \xe0 votre PARENT_FOLDER.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ex\xe9cutez ",(0,l.kt)("inlineCode",{parentName:"li"},"cd INSERT_PARENT_FOLDER_HERE"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/GBADsInformatics/anduryl-plus.git")),(0,l.kt)("li",{parentName:"ol"},"Renommez ",(0,l.kt)("inlineCode",{parentName:"li"},"anduryl-plus")," en ",(0,l.kt)("inlineCode",{parentName:"li"},"anduryl"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pour ce faire, lancez ",(0,l.kt)("inlineCode",{parentName:"li"},"mv anduryl-plus anduryl"))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,l.kt)("inlineCode",{parentName:"li"},"python -m anduryl"))),(0,l.kt)("h2",{id:"anduryl-dans-le-cahier-jupyter"},"Anduryl dans le cahier Jupyter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Importer Anduryl")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pour importer Anduryl, Jupyter doit savoir o\xf9 le trouver. Ajoutez le bloc de code ci-dessous en haut de votre Jupyter Notebook pour importer le module. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"li"},"Remarque"),"\xa0: Remplacez le code par votre PARENT_FOLDER avant de l'ex\xe9cuter.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"#Montrer le syst\xe8me o\xf9 trouver Anduryl\nimporter syst\xe8me\nanduryl_path = 'INSERT_PARENT_FOLDER_HERE' # Chemin vers le dossier parent anduryl\nif anduryl_path not in sys.path: sys.path.append(anduryl_path) # Ajouter le chemin \xe0 sys\nimporter de l'anduryle\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Exemples d'utilisation")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pour en savoir plus sur l'utilisation d'Anduryl dans Jupyter Notebook, visitez ","[Example Anduryl with scripting]","(",(0,l.kt)("a",{parentName:"li",href:"https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting"},"https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting"),". html)")),(0,l.kt)("h2",{id:"anduryl-dans-r-studio"},"Anduryl dans R Studio"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Installez la biblioth\xe8que r\xe9ticul\xe9e pour appeler les modules python \xe0 partir de R.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dans R, tapez ",(0,l.kt)("inlineCode",{parentName:"li"},'install.packages("reticulate")')),(0,l.kt)("li",{parentName:"ul"},"Suivez l'assistant pour installer reticulate")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Importez r\xe9ticul\xe9 et Anduryl en ex\xe9cutant le code ci-dessous. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"li"},"Remarque"),"\xa0: Remplacez la premi\xe8re ligne par votre PARENT_FOLDER")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-R"},'anduryl_path = \'INSERT_PARENT_FOLDER_HERE\'\nbiblioth\xe8que ("r\xe9ticule")\nsys <- import("sys")\nif (!anduryl_path %in% sys$path)(sys$path <- append(sys$path, anduryl_path))\nanduryle <- import("anduryle")\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Chaque fois que vous chargez R, vous devrez r\xe9ex\xe9cuter l'\xe9tape 2."),(0,l.kt)("li",{parentName:"ol"},"Exemple d'utilisation\xa0:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"projet <- anduryl$Projet()\nprojet\n")),(0,l.kt)("p",null,"Ce code devrait sortir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"Classe principale du projet.\nPropri\xe9t\xe9s:\n- \xe9valuations\n- experts\n- io\n- \xe9l\xe9ments\n- principaux r\xe9sultats\n- r\xe9sultats\nM\xe9thodes\xa0:\n- add_results_from_settings\n- calculate_decision_maker\n- calculate_expert_robustness\n- calculate_item_robustness\n- initialiser\n- to_results\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pour en savoir plus sur le codage avec Anduryl, visitez ",(0,l.kt)("a",{parentName:"li",href:"https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting.html"},"Example Anduryl with scripting")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Remarque"),"\xa0: \xe9tant donn\xe9 que vous allez coder en R, vous r\xe9f\xe9rencerez les objets en utilisant ",(0,l.kt)("inlineCode",{parentName:"li"},"$")," au lieu de ",(0,l.kt)("inlineCode",{parentName:"li"},".")),(0,l.kt)("li",{parentName:"ul"},"Ex. ",(0,l.kt)("inlineCode",{parentName:"li"},"anduryl$Project()")," au lieu de ",(0,l.kt)("inlineCode",{parentName:"li"},"anduryl.Project()"))))}d.isMDXComponent=!0}}]);