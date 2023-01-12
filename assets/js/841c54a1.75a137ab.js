"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[2693],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),l=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=l(e.components);return n.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return t?n.createElement(h,i(i({ref:a},u),{},{components:t})):n.createElement(h,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7246:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:6},i="Data and Data Management Audits and Reviews",s={unversionedId:"Data-Governance-Handbook-for-GBADs/dataAudits",id:"Data-Governance-Handbook-for-GBADs/dataAudits",title:"Data and Data Management Audits and Reviews",description:"Audits are an integral part of our data governance plan; they allow our organization to draw insights about how the data are being managed, whether our data needs are being met and provide information about our current data holdings.",source:"@site/docs/Data-Governance-Handbook-for-GBADs/dataAudits.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataAudits",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataAudits",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Mechanisms for Data Sharing",permalink:"/docs/Data-Governance-Handbook-for-GBADs/mechanisms"},next:{title:"Data User Guide",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataUsers"}},d={},l=[{value:"Data Audit Framework",id:"data-audit-framework",level:2}],u={toc:l};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-and-data-management-audits-and-reviews"},"Data and Data Management Audits and Reviews"),(0,r.kt)("p",null,"Audits are an integral part of our data governance plan; they allow our organization to draw insights about how the data are being managed, whether our data needs are being met and provide information about our current data holdings. "),(0,r.kt)("p",null,"Assessing the data that GBADs brokers will allow us to understand which types of data are rich and which are lacking. In preliminary stages of data ecosystem development, it will also allow auditors to determine whether descriptive metadata can be supplemented with more terms and whether the system supports FAIR and CARE guiding principles. Because the system view is dependent on the user type ","[section FIXME]",", review protocols will be developed to ensure that data are being viewed as expected. "),(0,r.kt)("p",null,"Regular audits will provide information about whether the Data Governance Plan is clear and well documented; mechanisms behind data location, storage, metadata creation, data ownership and data stewardship should be clear and easily adhered to if plans and policies are clear and well-documented. If audits reveal inconsistencies in how data are being managed, the management of data can be corrected. "),(0,r.kt)("p",null,"Regular data audits will address these 5 core questions, as suggested by {cite}",(0,r.kt)("inlineCode",{parentName:"p"},"Jones2008"),": "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What data assets currently exist? "),(0,r.kt)("li",{parentName:"ol"},"Where are these assets located? "),(0,r.kt)("li",{parentName:"ol"},"How have these been managed to date? "),(0,r.kt)("li",{parentName:"ol"},"Which of thse assets need to be maintained in the long term?"),(0,r.kt)("li",{parentName:"ol"},"Do current data management practices place these assets at risk? ")),(0,r.kt)("p",null,"Our system supports the privacy and security of our private data stakeholders therefore we will include the following additional questions:  "),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Who has access to which data assets? "),(0,r.kt)("li",{parentName:"ol"},"Who are our private data stakeholders and are current data management practices adequately protecting our private data stakeholders? ")),(0,r.kt)("p",null,"This section provides information about our data audit plan, and how the results of the audit will feed into our data governance and management plan. Regular audits will allow us to progressively improve the quality of metadata and data that pass through our system. The audit will include reviewing feedback from data users and contributors to formally incorporate suggestions in future versions of our system and improve metadata creation and management to support FAIR data. "),(0,r.kt)("h2",{id:"data-audit-framework"},"Data Audit Framework"),(0,r.kt)("p",null,"A Data Audit Framework (DAF) Methodology will serve as the primary methodology for auditing GBADs' data assets {cite}",(0,r.kt)("inlineCode",{parentName:"p"},"Jones2008"),". "),(0,r.kt)("p",null,"The DAF can be found in Appendix FIXME, as well as the stages of the audits and forms needed to audit."),(0,r.kt)("p",null,"The auditor must have access to all data resources and supporting documentation. To determine which data assets currently exist, the auditor can access the data catalogue which provides all metadata for data resources."))}c.isMDXComponent=!0}}]);