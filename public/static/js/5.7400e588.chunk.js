(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{40:function(e,t,a){e.exports=a.p+"static/media/logo.6a738291.svg"},62:function(e,t,a){"use strict";a.r(t);var n=a(59),r=a(0),c=a.n(r),l=(a(16),a(40)),o=a.n(l),s=a(41),u=a.n(s);t.default=function(){var e=Object(r.useState)(),t=Object(n.a)(e,2),a=t[0],l=t[1],s=Object(r.useState)(),i=Object(n.a)(s,2),m=i[0],d=i[1];return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"card-div"},c.a.createElement("div",{className:"svg-img-div"},c.a.createElement("img",{src:o.a,alt:"centalied logo",className:"img-div"})),c.a.createElement("div",{className:"heading-div"},c.a.createElement("h1",{className:"heading"}," Shorten any Links"),c.a.createElement("p",{className:"heading-statement"},"Put Your LONG url and have your SHORT url in no time",c.a.createElement("br",null),c.a.createElement("span",null,"Accepted only in https://")),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={longurl:a};console.log("lkjhjkkl",t),u.a.post("https://shortliiibackend.herokuapp.com/shorten",t).then(function(e){console.log(e.data.shorturl),d(e.data.shorturl)}).catch(function(e){d("Some error Occured please check internet connnectiion")});var n=document.getElementById("inputText");document.getElementById("copyText").onclick=function(){n.select(),document.execCommand("copy")},document.getElementById("myForm").reset()},id:"myForm"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",placeholder:"Type or paste your Long url",pattern:"https://.*",required:!0,className:"input-url",onChange:function(e){return l(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"url-shorten-button"},"  Short URL"))),c.a.createElement("div",{id:"shorten"},c.a.createElement("h6",null," Your Short-url is below:-"),c.a.createElement("input",{id:"inputText",type:"text",value:m,className:"input-url shorturl"}),c.a.createElement("button",{id:"copyText",className:"url-shorten-button"},"Copy")))))}}}]);
//# sourceMappingURL=5.7400e588.chunk.js.map