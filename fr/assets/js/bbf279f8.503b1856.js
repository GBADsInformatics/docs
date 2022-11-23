"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[3222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var s=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=s.createContext({}),u=function(e){var n=s.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return s.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,v=p["".concat(i,".").concat(m)]||p[m]||c[m]||r;return t?s.createElement(v,l(l({ref:n},d),{},{components:t})):s.createElement(v,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=t(7462),a=(t(7294),t(3905));const r={sidebar_position:11},l="Organisation des donn\xe9es dans des feuilles de calcul",o={unversionedId:"Data-Governance-Handbook-for-GBADs/dataBestPractices",id:"Data-Governance-Handbook-for-GBADs/dataBestPractices",title:"Organisation des donn\xe9es dans des feuilles de calcul",description:"Si vous lisez ceci, vous passez probablement beaucoup de temps \xe0 traiter des donn\xe9es. Vous pouvez le collecter, le nettoyer, le mod\xe9liser, le partager, tenter de l'interpr\xe9ter, puis tout recommencer. Lorsque vous recevez des donn\xe9es d'un coll\xe8gue, vous pouvez essayer de les nettoyer \xe0 nouveau (m\xeame si elles ont d\xe9j\xe0 \xe9t\xe9 nettoy\xe9es), essayer de les interpr\xe9ter et m\xeame devoir \xe9crire plusieurs e-mails pour interpr\xe9ter les donn\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/dataBestPractices.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataBestPractices",permalink:"/docs/fr/docs/Data-Governance-Handbook-for-GBADs/dataBestPractices",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Meilleures pratiques pour le codage",permalink:"/docs/fr/docs/Data-Governance-Handbook-for-GBADs/codeBestPractices"},next:{title:"Exemples",permalink:"/docs/fr/docs/Data-Governance-Handbook-for-GBADs/examples"}},i={},u=[{value:"Feuilles de calcul et ensembles de donn\xe9es",id:"feuilles-de-calcul-et-ensembles-de-donn\xe9es",level:3},{value:"Structure de donn\xe9es",id:"structure-de-donn\xe9es",level:3},{value:"Enregistrement des feuilles de calcul",id:"enregistrement-des-feuilles-de-calcul",level:3},{value:"Convention standard de date et d&#39;heure",id:"convention-standard-de-date-et-dheure",level:3},{value:"Convention de nommage des fichiers",id:"convention-de-nommage-des-fichiers",level:3},{value:"Erreurs courantes",id:"erreurs-courantes",level:3},{value:"7 erreurs courantes qui rendent les feuilles de calcul d\xe9sordonn\xe9es",id:"7-erreurs-courantes-qui-rendent-les-feuilles-de-calcul-d\xe9sordonn\xe9es",level:4},{value:"Autres recommandations de lecture",id:"autres-recommandations-de-lecture",level:3}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"organisation-des-donn\xe9es-dans-des-feuilles-de-calcul"},"Organisation des donn\xe9es dans des feuilles de calcul"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{\xe9pigraphe}"},"\xab Garbage in, Garbage out \xbb\n")),(0,a.kt)("p",null,"Si vous lisez ceci, vous passez probablement beaucoup de temps \xe0 traiter des donn\xe9es. Vous pouvez le collecter, le nettoyer, le mod\xe9liser, le partager, tenter de l'interpr\xe9ter, puis tout recommencer. Lorsque vous recevez des donn\xe9es d'un coll\xe8gue, vous pouvez essayer de les nettoyer \xe0 nouveau (m\xeame si elles ont d\xe9j\xe0 \xe9t\xe9 nettoy\xe9es), essayer de les interpr\xe9ter et m\xeame devoir \xe9crire plusieurs e-mails pour interpr\xe9ter les donn\xe9es."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dans cette partie du manuel, nous vous expliquons comment vous pouvez mieux organiser vos donn\xe9es dans des feuilles de calcul pour cr\xe9er des donn\xe9es de meilleure qualit\xe9, conduisant \xe0 des mod\xe8les de meilleure qualit\xe9. Nous d\xe9finissons \xe9galement certaines pratiques standard pour la saisie de donn\xe9es de types sp\xe9cifiques, notamment des dates et des nombres longs.")),(0,a.kt)("h3",{id:"feuilles-de-calcul-et-ensembles-de-donn\xe9es"},"Feuilles de calcul et ensembles de donn\xe9es"),(0,a.kt)("p",null,"Les feuilles de calcul, telles que celles cr\xe9\xe9es dans Microsoft Excel et Google Sheets, sont courantes pour stocker, saisir, partager et manipuler les donn\xe9es issues de la recherche. Les feuilles de calcul sont g\xe9n\xe9ralement partag\xe9es pour communiquer les r\xe9sultats de la recherche et utilis\xe9es comme donn\xe9es d'entr\xe9e pour les mod\xe8les ou l'analyse statistique. Bien que les feuilles de calcul fassent partie int\xe9grante du cycle de vie des donn\xe9es, elles doivent \xeatre correctement structur\xe9es pour garantir qu'aucune erreur n'est commise, ce qui emp\xeacherait la r\xe9utilisation ou l'interpr\xe9tation des donn\xe9es. De petites erreurs dans les feuilles de calcul peuvent nous laisser dans des situations o\xf9 les donn\xe9es sont difficiles \xe0 comprendre, difficiles \xe0 analyser et longues \xe0 nettoyer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{avertissement}",metastring:"Contactez l'\xe9quipe informatique GBADs si...",Contactez:!0,"l'\xe9quipe":!0,informatique:!0,GBADs:!0,"si...":!0},'Veuillez contacter l\'\xe9quipe informatique du GBADs si vous \xeates un membre du GBADs et que vous avez de nombreuses feuilles de calcul contenant des donn\xe9es "d\xe9sordonn\xe9es"\xa0! Nous pouvons consulter et r\xe9fl\xe9chir \xe0 la mani\xe8re de cr\xe9er un programme qui traitera et transformera vos donn\xe9es dans un format ordonn\xe9\xa0!\n')),(0,a.kt)("p",null,"Structurer correctement les donn\xe9es dans des feuilles de calcul rend les donn\xe9es plus r\xe9utilisables et interop\xe9rables (FAIR), ce qui conduit \xe0 des donn\xe9es de meilleure qualit\xe9 et, en fin de compte, \xe0 une meilleure recherche. En configurant d\xe8s le d\xe9part des feuilles de calcul \xe0 ing\xe9rer dans des logiciels statistiques ou des biblioth\xe8ques, nous pouvons minimiser la confusion et simplifier nos flux de travail."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{avertissement}",metastring:"Objectifs d'apprentissage",Objectifs:!0,"d'apprentissage":!0},"* Les lecteurs doivent comprendre comment structurer un ensemble de donn\xe9es dans une feuille de calcul d'une mani\xe8re qui respecte les principes de donn\xe9es FAIR\n* Les lecteurs doivent comprendre comment structurer leur ensemble de donn\xe9es pour pr\xe9server la s\xe9mantique (sens sous-jacent) des donn\xe9es\n* Les lecteurs doivent comprendre comment structurer les dates et les nombres longs dans les feuilles de calcul et pourquoi il est important que ces donn\xe9es soient lisibles par machine\n* Les lecteurs doivent comprendre les erreurs courantes qui cr\xe9ent des ensembles de donn\xe9es d\xe9sordonn\xe9s et comment les \xe9viter\n")),(0,a.kt)("h3",{id:"structure-de-donn\xe9es"},"Structure de donn\xe9es"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{\xe9pigraphe}"},'"Les ensembles de donn\xe9es ordonn\xe9s se ressemblent tous, mais chaque ensemble de donn\xe9es d\xe9sordonn\xe9 est d\xe9sordonn\xe9 \xe0 sa mani\xe8re."\n\n-- [Hadley Wickham](http://hadley.nz/)\n')),(0,a.kt)("p",null,"En g\xe9n\xe9ral, un ensemble de donn\xe9es ordonn\xe9 ou propre est compos\xe9 des \xe9l\xe9ments suivants ({numref}",(0,a.kt)("inlineCode",{parentName:"p"},"tidyData"),") {cite}",(0,a.kt)("inlineCode",{parentName:"p"},"wickham_R4DS_2017"),"\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{panneaux}"},":colonne: col-4\n:carte: bordure-2\nColonnes (Variables)\n^^\nLes colonnes sont un groupe de cellules align\xe9es verticalement. Dans les ensembles de donn\xe9es, les colonnes sont des variables, o\xf9 chaque cellule contient une information sur un attribut donn\xe9.\n---\nLignes (Observations)\n^^\nLes lignes sont un groupe de cellules align\xe9es horizontalement, o\xf9 chaque ligne est une observation.\n---\nCellules (Valeurs)\n^^\nDans les ensembles de donn\xe9es, chaque ligne est une observation et chaque cellule de cette ligne contient la valeur de la colonne o\xf9 elle se situe.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{chiffre}",metastring:"/images/tidyDataWickham.png","/images/tidyDataWickham.png":!0},":nom: tidyData\n\nR\xe8gles qui font un ensemble de donn\xe9es bien rang\xe9\xa0: les colonnes sont des variables, les observations sont des lignes et les valeurs sont des cellules. Image et l\xe9gende de {cite}`wickham_R4DS_2017`.\n")),(0,a.kt)("p",null,"S'en tenir \xe0 un format de donn\xe9es ordonn\xe9 permet la r\xe9utilisation des donn\xe9es, garantit la coh\xe9rence (ce qui am\xe9liore la qualit\xe9 des donn\xe9es) et aide \xe0 comprendre la signification sous-jacente (s\xe9mantique) de chacune des valeurs de la feuille de calcul. Avoir des colonnes comme variables et des lignes comme observations nous permet de savoir ce que signifie une valeur en fonction de sa relation avec les variables et les observations."),(0,a.kt)("p",null,"Les donn\xe9es FAIR sont des donn\xe9es ordonn\xe9es - les donn\xe9es ordonn\xe9es sont r\xe9utilisables et interop\xe9rables par nature. Les donn\xe9es ordonn\xe9es sont plus faciles \xe0 trouver, car les en-t\xeates sont bien d\xe9finis, ce qui facilite la cr\xe9ation de m\xe9tadonn\xe9es. Fondamentalement, nous pouvons tirer plus d'informations de donn\xe9es ordonn\xe9es."),(0,a.kt)("h3",{id:"enregistrement-des-feuilles-de-calcul"},"Enregistrement des feuilles de calcul"),(0,a.kt)("p",null,"Les ensembles de donn\xe9es dans les feuilles de calcul peuvent \xeatre enregistr\xe9s sous forme de fichier Excel ou au format ",(0,a.kt)("inlineCode",{parentName:"p"},".csv")," (valeurs s\xe9par\xe9es par des virgules) ou ",(0,a.kt)("inlineCode",{parentName:"p"},".txt"),". Les deux derniers sont pr\xe9f\xe9r\xe9s car ils sont plus faciles \xe0 lire dans les biblioth\xe8ques de programmation en R et python."),(0,a.kt)("h3",{id:"convention-standard-de-date-et-dheure"},"Convention standard de date et d'heure"),(0,a.kt)("p",null,"Sans convention standard, les dates peuvent pr\xe9senter beaucoup d'ambigu\xeft\xe9. Par exemple, 01/11 pourrait \xeatre interpr\xe9t\xe9 comme janvier 2011, novembre 2001 ou 1er novembre. Pour cette raison, il est important d'utiliser une norme de date internationalement accept\xe9e afin que nous puissions comprendre nos donn\xe9es de mani\xe8re fiable."),(0,a.kt)("p",null,"Les GBAD utiliseront la norme ",(0,a.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO 8601")," pour les dates. ISO 8601 est une norme internationalement accept\xe9e qui utilise le ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Gregorian_calendar"},"calendrier gr\xe9gorien"),"."),(0,a.kt)("p",null,"Les dates sont repr\xe9sent\xe9es comme suit\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AAAA-MM-JJ ou AAAAMMJJ")),(0,a.kt)("p",null,"La norme ISO 8601 utilise l'horloge de 24 heures. Les temps peuvent donc \xeatre entr\xe9s comme suit :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"T","[hh:mm:ss]")),(0,a.kt)("p",null,"ou si les secondes ne s'appliquent pas\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"T","[hh:mm]")),(0,a.kt)("p",null,"et si les proc\xe8s-verbaux ne sont pas applicables\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"M","[hh]")),(0,a.kt)("p",null,"\xc9tant donn\xe9 que GBADs est une organisation mondiale, il est important de sp\xe9cifier les fuseaux horaires en saisissant l'heure dans les feuilles de calcul. Les fuseaux horaires sont sp\xe9cifi\xe9s apr\xe8s la date en sp\xe9cifiant \xe0 quel point le fuseau horaire est en retard ou en avance par rapport \xe0 UTC."),(0,a.kt)("p",null,"Par exemple:\nLe samedi 10 juillet 2021 \xe0 13h48 EDT s'\xe9crit 2021-07-10T13:48-4:00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Diff\xe9rents calendriers pour diff\xe9rents pays","Diff\xe9rents":!0,calendriers:!0,pour:!0,"diff\xe9rents":!0,pays:!0},":classe: conseil\n\nLorsque vous analysez des ensembles de donn\xe9es de diff\xe9rents pays, sachez que toutes les r\xe9gions du monde n'utilisent pas le calendrier gr\xe9gorien.\n\nPar exemple, l'\xc9thiopie utilise le calendrier \xe9thiopien, qui est diff\xe9rent du calendrier gr\xe9gorien. Cela met l'Ethiopie 7 ans derri\xe8re le calendrier utilis\xe9 en Europe et en Am\xe9rique du Nord. [Ici](https://melaku.ml/) est un outil qui vous permet de convertir du calendrier gr\xe9gorien au calendrier \xe9thiopien.\n")),(0,a.kt)("p",null,"###\xa0Conventions sur les grands nombres"),(0,a.kt)("p",null,"Selon les pays, il existe diff\xe9rentes conventions pour les grands nombres."),(0,a.kt)("p",null,"Par exemple, le nombre 133333.450 peut \xeatre repr\xe9sent\xe9 de diff\xe9rentes mani\xe8res :"),(0,a.kt)("p",null,"Dans les pays anglophones, le nombre pourrait ressembler \xe0 ceci\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"133 333,450")),(0,a.kt)("p",null,"Dans les pays non anglophones, comme ceci\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"133.333.450")),(0,a.kt)("p",null,"Donc - le m\xeame nombre mais repr\xe9sent\xe9 de 3 mani\xe8res diff\xe9rentes. Cela laisse beaucoup \xe0 l'interpr\xe9tation, d'autant plus que la valeur par d\xe9faut lors de la lecture de la plupart des fichiers dans des langages de programmation statistiques suppose qu'une virgule sp\xe9cifie une nouvelle colonne. Et parce qu'une grande partie du travail de GBAD repose sur des langages de programmation tels que R et Python, il est vraiment important de structurer nos chiffres afin qu'ils puissent \xeatre facilement lus, interpr\xe9t\xe9s et lus par des machines \xe9galement\xa0!"),(0,a.kt)("p",null,"Pour que les choses restent claires, nous devons structurer nos grands nombres ",(0,a.kt)("strong",{parentName:"p"},"sans")," virgules et r\xe9server des points pour sp\xe9cifier une d\xe9cimale."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Si vous voyez une virgule l\xe0 o\xf9 vous pensez qu'elle ne devrait pas \xeatre...",Si:!0,vous:!0,voyez:!0,une:!0,virgule:!0,"l\xe0":!0,"o\xf9":!0,pensez:!0,"qu'elle":!0,ne:!0,devrait:!0,pas:!0,"\xeatre...":!0},":classe: conseil\n\nSi le formatage des grands nombres n'est pas clair pour vous, demandez des \xe9claircissements au propri\xe9taire des donn\xe9es\xa0! Si le propri\xe9taire des donn\xe9es fait partie du programme GBADs, sugg\xe9rez-lui gentiment d'utiliser les normes utilis\xe9es et \xe9nonc\xe9es par le programme (vous pouvez m\xeame lui envoyer ce chapitre).\n\n")),(0,a.kt)("h3",{id:"convention-de-nommage-des-fichiers"},"Convention de nommage des fichiers"),(0,a.kt)("p",null,"Lorsque vous nommez des fichiers, vous devez \xeatre coh\xe9rent, \xeatre descriptif, \xe9viter les caract\xe8res et les espaces et inclure la date (de pr\xe9f\xe9rence en utilisant une norme telle que ","[ISO 8601]","(",(0,a.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-"},"https://www.iso.org/iso-8601-date-and-")," time-format.html) Pour les besoins de la convention de nommage des fichiers, nous omettons les tirets entre AAAA-MM-JJ."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Exemples de bonnes conventions de nommage de fichiers\xa0:")),(0,a.kt)("p",null,"Lorsque vous traitez des donn\xe9es t\xe9l\xe9charg\xe9es \xe0 partir d'organisations\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AAAAMMJJ_organization_topic_species_country"),(0,a.kt)("li",{parentName:"ul"},"20210617_FAO_ProductionPrices_Poultry_Ethiopia.csv"),(0,a.kt)("li",{parentName:"ul"},"20210617_WorldBank_LSMS_Ethiopia.csv")),(0,a.kt)("p",null,"O\xf9 AAAAMMJJ est la date \xe0 laquelle vous avez t\xe9l\xe9charg\xe9 le fichier."),(0,a.kt)("p",null,"S'il s'agit d'un fichier de m\xe9tadonn\xe9es, vous devez nommer le fichier avec \xab\xa0m\xe9tadonn\xe9es\xa0\xbb et le nom du fichier comme ci-dessus pour savoir quel fichier de m\xe9tadonn\xe9es correspond \xe0 l'ensemble de donn\xe9es appropri\xe9. Par exemple:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv"),(0,a.kt)("li",{parentName:"ul"},"20210617_WorldBank_LSMS_Ethiopia_metadata.csv")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Exemples de fichiers mal nomm\xe9s\xa0:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prix de production FAO - t\xe9l\xe9charg\xe9s par Kassy le 25 avril.csv"),(0,a.kt)("li",{parentName:"ul"},"Prix \xe0 la production \xe9thiopienne du site fao stat.csv"),(0,a.kt)("li",{parentName:"ul"},"ETHPRODPRICES_GOODCOPY.csv")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{avertissement}",metastring:"Les dates en premier",Les:!0,dates:!0,en:!0,premier:!0},":classe: conseil\n\nPlacer la date en premier dans un fichier vous permet d'organiser facilement les fichiers d'un r\xe9pertoire ou d'un dossier par date croissante ou d\xe9croissante.\n\n")),(0,a.kt)("h3",{id:"erreurs-courantes"},"Erreurs courantes"),(0,a.kt)("p",null,"Le formatage, le surlignage et les caract\xe8res gras doivent \xeatre \xe9vit\xe9s. Voici pourquoi rendre les feuilles de calcul jolies cause des maux de t\xeate dans le cycle de vie de l'analyse des donn\xe9es\xa0:"),(0,a.kt)("h4",{id:"7-erreurs-courantes-qui-rendent-les-feuilles-de-calcul-d\xe9sordonn\xe9es"},"7 erreurs courantes qui rendent les feuilles de calcul d\xe9sordonn\xe9es"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Plusieurs tableaux dans une seule feuille de calcul"),(0,a.kt)("li",{parentName:"ol"},"Mauvaises valeurs nulles (un z\xe9ro ne signifie pas nul)"),(0,a.kt)("li",{parentName:"ol"},"Les cellules sont fusionn\xe9es"),(0,a.kt)("li",{parentName:"ol"},"Les unit\xe9s de mesure sont incluses dans les valeurs au lieu des noms de colonne"),(0,a.kt)("li",{parentName:"ol"},"Le formatage est utilis\xe9 pour repr\xe9senter les informations"),(0,a.kt)("li",{parentName:"ol"},"Les cellules contiennent plus d'une information"),(0,a.kt)("li",{parentName:"ol"},"Le format de date standard n'est pas utilis\xe9")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"1. Plusieurs tableaux dans une seule feuille de calcul"))),(0,a.kt)("p",null,"Avoir plusieurs tableaux dans une seule feuille de calcul entra\xeene souvent un nettoyage inutile des donn\xe9es pour tout traitement ult\xe9rieur des donn\xe9es. Plusieurs tableaux dans une feuille de calcul pr\xeatent \xe0 confusion lorsque nous partageons la feuille de calcul ou y revenons ult\xe9rieurement. Si une ligne est une observation, la cr\xe9ation de plusieurs tableaux va \xe0 l'encontre de cette notion, r\xe9duisant la qualit\xe9 et la capacit\xe9 \xe0 interpr\xe9ter l'ensemble de donn\xe9es."),(0,a.kt)("p",null,"Dans l'exemple ci-dessous, compos\xe9 de donn\xe9es fabriqu\xe9es, il y a 4 tableaux dans une seule feuille de calcul. Dans chaque tableau, l'\xab \xe9l\xe9ment \xbb est l'observation et le nombre d'animaux vivants au cours d'une ann\xe9e donn\xe9e est ce qui est mesur\xe9. Cependant, en raison de la fa\xe7on dont la feuille de calcul est configur\xe9e, il est difficile de savoir si les deux tableaux du haut sont associ\xe9s au Canada ou s'il manque un en-t\xeate au tableau de droite."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210615_dataBestPractices_MultipleTablesBAD.png",alt:"MultipleTablesBad"})),(0,a.kt)("p",null,"Une meilleure fa\xe7on de configurer les donn\xe9es serait comme ceci:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210614_dataBestPractices_MultipleTablesGOOD.png",alt:"MultipleTablesGood"})),(0,a.kt)("p",null,"Ici, nous voyons que toutes les informations sont toujours fournies, mais chaque ligne est une observation pour un pays, un \xe9l\xe9ment et une ann\xe9e donn\xe9s. En plus d'am\xe9liorer l'interpr\xe9tation des donn\xe9es, ces donn\xe9es peuvent d\xe9sormais \xeatre saisies dans un logiciel statistique tel que R sans nettoyage approfondi des donn\xe9es."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"2. Mauvaises valeurs nulles "))),(0,a.kt)("p",null,'Les valeurs manquantes ou nulles doivent \xeatre not\xe9es d\'une mani\xe8re standard qui se distingue d\'une valeur quantitative de 0. De cette fa\xe7on, le lecteur de l\'ensemble de donn\xe9es comprendra quelles donn\xe9es sont manquantes ou inconnues et lesquelles ont une valeur de 0. La chose la plus importante lors de l\'enregistrement des donn\xe9es manquantes les valeurs sont la coh\xe9rence\xa0; Si vous d\xe9cidez d\'utiliser "NA" pour indiquer les valeurs manquantes, assurez-vous de ne pas passer en minuscules ("na") ou "Non applicable" plus tard dans la feuille de calcul.'),(0,a.kt)("p",null,"Selon le logiciel statistique, la signification de \"NA\" peut varier. Par exemple, dans R, 'NA' est un terme r\xe9serv\xe9 pour une valeur manquante. La fa\xe7on dont les valeurs ",(0,a.kt)("inlineCode",{parentName:"p"},"NA")," sont repr\xe9sent\xe9es en python varie en fonction de la biblioth\xe8que utilis\xe9e. Dans pandas (une biblioth\xe8que python populaire pour l'analyse de donn\xe9es, le nettoyage et le wrangling), les valeurs ",(0,a.kt)("inlineCode",{parentName:"p"},"NA")," sont repr\xe9sent\xe9es par ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),'. Cependant, tant que nous sommes coh\xe9rents dans la fa\xe7on dont nous repr\xe9sentons les valeurs "NA" lors de la saisie et de l\'analyse des donn\xe9es, nous pouvons rapidement changer de format en fonction du logiciel statistique ou de programmation que nous avons choisi.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"3. Les cellules sont fusionn\xe9es"))),(0,a.kt)("p",null,"La fusion de cellules va \xe0 l'encontre de l'id\xe9e que les lignes sont des observations et que chaque colonne est une variable. Non seulement la fusion des cellules va \xe0 l'encontre de ces principes, mais elle rend impossible le tri des colonnes et des lignes, provoque des erreurs lors de la lecture des donn\xe9es dans les logiciels statistiques et introduit le risque de mauvaise interpr\xe9tation des donn\xe9es ou de perte d'informations. Par exemple, l'utilisation de cellules fusionn\xe9es pour relier deux lignes cr\xe9e de la confusion lorsque vous revenez consulter les donn\xe9es. Ou, si la mise en forme fusionn\xe9e est perdue, vous risquez de perdre une observation enti\xe8re ou des variables dans une observation donn\xe9e."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"4. Les unit\xe9s de mesure sont incluses dans les valeurs au lieu des noms de colonnes"))),(0,a.kt)("p",null,"Comme chaque colonne repr\xe9sente une variable, les unit\xe9s de mesure doivent \xeatre coh\xe9rentes dans toute cette colonne. Par cons\xe9quent, le cas \xe9ch\xe9ant, vous devez inclure l'unit\xe9 de mesure dans l'en-t\xeate de colonne."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"5. Le formatage est utilis\xe9 pour repr\xe9senter les informations"))),(0,a.kt)("p",null,"La mise en surbrillance des cellules et les informations en gras ou en italique doivent \xeatre \xe9vit\xe9es comme moyen de repr\xe9senter les informations dans un ensemble de donn\xe9es. Ceci est probl\xe9matique car si la mise en forme est perdue, vous perdez des informations pr\xe9cieuses. Si vous souhaitez inclure les informations articul\xe9es par la mise en forme dans votre mod\xe8le ou analyse, vous seriez oblig\xe9 de nettoyer la feuille dans excel avant de la lire dans votre logiciel."),(0,a.kt)("p",null,"Par exemple, lors du test d'\xe9chantillons pour la maladie, on peut utiliser la mise en surbrillance pour montrer quels \xe9chantillons sont revenus positifs. Si la mise en forme est perdue ou si quelqu'un ne conna\xeet pas le contexte de la signification de la surbrillance, cette information est perdue."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"6. Les cellules contiennent plus d'une information"))),(0,a.kt)("p",null,"Lorsque les cellules contiennent plus d'un \xe9l\xe9ment d'information, cela limite la fa\xe7on dont vous pouvez analyser un ensemble de donn\xe9es pr\xe9existant et conduit g\xe9n\xe9ralement \xe0 davantage de nettoyage des donn\xe9es. Par exemple, vous pouvez signaler les types et les nombres de races dans votre ensemble de donn\xe9es."),(0,a.kt)("p",null,"Dans ce cas, vous voudriez d\xe9clarer la race et compter dans des colonnes s\xe9par\xe9es comme celle-ci\xa0:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Race"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Compter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Ferme"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Datecompt\xe9e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AberdeenAngus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"20"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Fermes d'\xe9levage canadiennes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Abergele"),(0,a.kt)("td",{parentName:"tr",align:"center"},"60"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Fermes d'\xe9levage canadiennes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Limousine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Fermes d'\xe9levage canadiennes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")))),(0,a.kt)("p",null,"Plut\xf4t que de les signaler dans la m\xeame cellule, comme ceci\xa0:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"NombreDeRace"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Ferme"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Datecompt\xe9e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"20 Aberdeen Angus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Fermes d'\xe9levage canadiennes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"60 Abergele"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Fermes d'\xe9levage canadiennes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"10 Limousin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Fermes d'\xe9levage canadiennes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"sept. Le format de date standard n'est pas utilis\xe9"))),(0,a.kt)("p",null,"Lorsque vous saisissez des dates, utilisez une norme telle que ",(0,a.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO 8601")," (YYYY-MM-DD). Cela vous permet de trier par date, d'am\xe9liorer l'interpr\xe9tabilit\xe9 et, si n\xe9cessaire, de convertir facilement dans d'autres formats de date. Reportez-vous \xe0 la section ",(0,a.kt)("strong",{parentName:"p"},"Convention standard de date et d'heure")," de cette section pour plus d'informations sur la fa\xe7on dont les GBAD abordent la saisie des dates et des heures."),(0,a.kt)("p",null,"Aussi - lorsque vous utilisez des dates, assurez-vous de sp\xe9cifier ce que la date signifie. Un en-t\xeate de colonne simplement intitul\xe9 \xab\xa0date\xa0\xbb ne fournit pas beaucoup de contexte. Par exemple, la date signifie-t-elle la date \xe0 laquelle les donn\xe9es ont \xe9t\xe9 saisies dans la feuille de calcul\xa0? La date \xe0 laquelle un \xe9chantillon a \xe9t\xe9 pr\xe9lev\xe9\xa0? La date \xe0 laquelle un \xe9chantillon a \xe9t\xe9 analys\xe9 au laboratoire\xa0? Assurez-vous que les autres chercheurs (et futur vous) savent de quoi vous parlez !"),(0,a.kt)("h3",{id:"autres-recommandations-de-lecture"},"Autres recommandations de lecture"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://r4ds.had.co.nz/"},"R pour Data Science par Hadley Wickham")),(0,a.kt)("p",null,"Auteurs : Kassy Raymond et K. Marie McIntyre"))}c.isMDXComponent=!0}}]);