(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{757:function(e,t,i){const r=i(7294);e.exports={attributes:{title:"Home page test Article #1",date:"2021-06-21T14:00:42.181Z",cats:[{name:"test cat",description:"test cat desc"}]},react:function(e){Object.keys(e).forEach((function(t){this[t]=e[t]}));return r.createElement("div",{className:"frontmatter-markdown"},r.createElement("p",null,"SOMETHING ELSE!"),r.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.createElement("p",null,r.createElement("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.imagesource.com%2Fwp-content%2Fuploads%2F2019%2F06%2FRio.jpg&f=1&nofb=1",alt:""})),r.createElement("p",null,r.createElement("img",{src:"img/sea-turtle.jpg",alt:""})),r.createElement("p",null,r.createElement("img",{src:"img/screen-shot-2021-03-21-at-2.44.40-pm.png",alt:""})),r.createElement("p",null,r.createElement("img",{src:"img/screen-shot-2021-07-13-at-9.36.16-am.png",alt:""})))}}},7673:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return j}});var r=i(5893),s=i(9008),a=i(7294),n=i(757),c=i(9669),o=i.n(c);function l(e){return(0,r.jsxs)("section",{className:"hero_banner",children:[(0,r.jsx)("div",{className:"hero_banner__bg-image"}),(0,r.jsx)("div",{className:"hero_banner__text-content",children:(0,r.jsx)("div",{className:"hero_banner__text-content__container",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("h1",{className:"hero_banner__text-header",children:e.heading}),(0,r.jsx)("h2",{className:"hero_banner__text-sub-header",children:e.subHeading})]})})})})})]})}function d(e){return(0,r.jsx)("div",{className:"col-sm-4 col-md-3 text-center",children:(0,r.jsxs)("div",{className:"video-teaser",children:[(0,r.jsx)("a",{href:"",children:(0,r.jsx)("div",{className:"video-teaser__container",children:(0,r.jsx)("img",{className:"video-teaser__thumbnailImage",src:e.thumbnailImage,alt:""})})}),(0,r.jsxs)("div",{className:"video-teaser__video-details",children:[(0,r.jsx)("div",{className:"video-teaser__video-title",children:(0,r.jsx)("a",{href:"",children:(0,r.jsx)("h3",{className:"video-teaser__video-title",children:e.videoTitle})})}),(0,r.jsx)("div",{className:"video-teaser__video-desc",children:(0,r.jsx)("p",{children:e.videoDesc})})]})]})})}function u(){var e=[{videoUrl:"https://www.bitchute.com/embed/VJmvdgskiq1U",videoTitle:"Video title 1",videoDesc:"Video description",postId:1,thumbnailImage:"https://via.placeholder.com/253x100"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:2,thumbnailImage:"https://via.placeholder.com/253x150"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:3,thumbnailImage:"https://via.placeholder.com/253x150"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:4,thumbnailImage:"https://via.placeholder.com/253x150"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:5,thumbnailImage:"https://via.placeholder.com/253x150"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:6,thumbnailImage:"https://via.placeholder.com/253x150"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:7,thumbnailImage:"https://via.placeholder.com/253x150"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:8,thumbnailImage:"https://via.placeholder.com/253x150"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:9,thumbnailImage:"https://via.placeholder.com/253x150"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:10,thumbnailImage:"https://via.placeholder.com/253x150"},{videoUrl:"",videoTitle:"Video title 1",videoDesc:"Video description",postId:11,thumbnailImage:"https://via.placeholder.com/253x150"}];return(0,r.jsx)("div",{className:"video-grid",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:e.map((function(e){return(0,r.jsx)(d,{videoUrl:e.videoUrl,videoTitle:e.videoTitle,videoDesc:e.videoDesc,thumbnailImage:e.thumbnailImage})}))})})})}var m=function(e){var t=e.searchQuery,i=e.setSearchQuery,s=e.handleSearchFormSubmit;return(0,r.jsx)("form",{id:"search",onSubmit:s,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"search icon"}),(0,r.jsx)("input",{type:"text",placeholder:"Search..",value:t,onChange:function(e){return i(e.target.value)},id:"search"})]})})};m.defaultPops={earchQuery:"",setSearchQuery:function(){return null},handleSearchFormSubmit:function(){return null}};var h=m,v=function(){var e=(0,a.useState)(""),t=e[0],i=e[1];return(0,r.jsx)("div",{children:(0,r.jsx)(h,{searchQuery:t,setSearchQuery:i,handleSearchFormSubmit:function(e){var t=e.searchQuery;e.setSearchQuery,e.handleSearchFormSubmit;return console.log("search-query: =>",t),null}})})};v.defaultPops={earchQuery:"",setSearchQuery:function(){return null},handleSearchFormSubmit:function(){return null}};var p=v;function x(){var e=(0,a.useState)("");e[0],e[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Search"}),(0,r.jsx)(p,{})]})}var j=function(e){var t=n.attributes.title,i=n.attributes.date,c=(0,a.useState)("mario"),d=c[0],m=c[1],h=(0,a.useState)(null),v=(h[0],h[1]),p=(0,a.useState)(!1),j=(p[0],p[1]);return(0,a.useEffect)((function(){o().get("http://jsonplaceholder.typicode.com/users").then((function(e){v(e.data),j(!0)}))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"GavAusWeb - Home"}),(0,r.jsx)("meta",{name:"keywords",content:"GavAusWeb, home, nextjs, netlify, netlifycms"})]}),(0,r.jsx)(l,{heading:"Otherside of the coin",subHeading:["Placeholder text commonly used to ",(0,r.jsx)("a",{href:"#",children:"demonstrate the visual"})," form of a document or a typeface without relying on meaningful content."]}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(x,{})})})}),(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{className:"btn btn-danger",onClick:function(){m("guiseppe")},children:"Click me"}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:d}),(0,r.jsx)("br",{}),(0,r.jsxs)("form",{id:"myForm",children:[(0,r.jsx)("div",{className:"search-wrap",children:(0,r.jsx)("input",{className:"form-control search-input",name:"searchText",placeholder:"Search for tech articles (eg. Animal crossing)"})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"btn btn-danger",children:"submit"})})]}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{id:"result"}),(0,r.jsx)("br",{}),(0,r.jsx)("h1",{children:t}),(0,r.jsx)("span",{children:i}),(0,r.jsx)("hr",{}),(0,r.jsx)(n.react,{})]})})})]})}},8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7673)}])}},function(e){e.O(0,[647,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);