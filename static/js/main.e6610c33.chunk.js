(this["webpackJsonpcovid19-tracking"]=this["webpackJsonpcovid19-tracking"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/loading.77e0faea.gif"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),l=(a(10),a(11),a(1)),i=a(4),s=a.n(i);function u(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),u=Object(l.a)(i,2),d=u[0],m=u[1],v=Object(n.useState)(0),p=Object(l.a)(v,2),h=p[0],E=p[1],f=Object(n.useState)(0),y=Object(l.a)(f,2),b=y[0],g=y[1],j=Object(n.useState)(0),T=Object(l.a)(j,2),O=T[0],S=T[1],k=Object(n.useState)(0),w=Object(l.a)(k,2),A=w[0],L=w[1],U=Object(n.useState)(""),B=Object(l.a)(U,2),I=B[0],K=B[1];return Object(n.useEffect)((function(){fetch(e.api).then((function(e){return e.json()})).then((function(t){m(!0),E(null===t||void 0===t?void 0:t.tested),g(null===t||void 0===t?void 0:t.infected),S(null===t||void 0===t?void 0:t.deceased),L(null===t||void 0===t?void 0:t.recovered),K(null===t||void 0===t?void 0:t.lastUpdatedAtSource),"Belgium"===e.country?S(null===t||void 0===t?void 0:t.deaths):"Italy"===e.country&&(E("N/A"),g(null===t||void 0===t?void 0:t.totalCases),L(null===t||void 0===t?void 0:t.dischargedHealed))}),(function(e){m(!0),r(e)}))}),[]),c?o.a.createElement("div",null,"Error: ",c.message):d?o.a.createElement("div",{className:"card"},o.a.createElement("h2",{className:e.short},e.country),o.a.createElement("p",null,"Total tested: ",h),o.a.createElement("p",null,"Total infected: ",b),o.a.createElement("p",{style:{color:"#f23030"}},"Total deceased: ",O),o.a.createElement("p",{style:{color:"#00c91e"}},"Total recovered: ",A),o.a.createElement("p",null,"Last Update: ",I.substr(0,10))):o.a.createElement("img",{src:s.a,width:"10%",height:"40%"})}var d=function(){var e=new Date;return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Total Cases Around the World"),o.a.createElement("div",{className:"card-container"},o.a.createElement(u,{country:"Turkey",short:"TR",api:"https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST"}),o.a.createElement(u,{country:"United Kingdom",short:"UK",api:"https://api.apify.com/v2/key-value-stores/KWLojgM5r1JmMW4b4/records/LATEST"}),o.a.createElement(u,{country:"Belgium",short:"BE",api:"https://api.apify.com/v2/key-value-stores/apVM8aZ8hKZFvnKm7/records/LATEST"}),o.a.createElement(u,{country:"Italy",short:"IT",api:"https://api.apify.com/v2/key-value-stores/UFpnR8mukiu0TSrb4/records/LATEST"})),o.a.createElement("p",null,"Copyright \xa9 ",e.getFullYear()),o.a.createElement("p",null,"Ersoy Efe Uruk"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.e6610c33.chunk.js.map