(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),o=n.n(r),l=(n(9),n(2)),s=(n(10),n(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," shadow  mb-5 bg-").concat(e.mode," rounded"),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsxs)("a",{className:"navbar-brand",href:"/",children:[" ",e.title," "]}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-4"),children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(s.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ","light"===e.mode?"dark":"light"," Mode"]})]})]})]})})}function b(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:e.heading}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",id:"myBox",value:c,onChange:function(e){r(e.target.value)},rows:"8"})}),Object(s.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=c.toUpperCase();r(e)},children:"Convert to Uppercase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=c.toLowerCase();r(e)},children:"Convert to Lowercase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r("")},children:"Clear Text"}),Object(s.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Remove Extra Spaces"}),Object(s.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value),alert("Copied to Clipboard")},children:"Copy Text"})]}),Object(s.jsxs)("div",{className:"container my-3",children:[Object(s.jsx)("h2",{children:"Your text summary"}),Object(s.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(s.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)("p",{children:c.length>0?c:"Nothing to preview!"})]})]})}var d=function(){var e=Object(a.useState)("dark"),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"TextUtils",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#042743",document.body.style.color="white"):(c("light"),document.body.style.backgroundColor="white",document.body.style.color="#212529")}}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)(b,{heading:"Enter text to Analyze below",mode:n})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.a32723fe.chunk.js.map