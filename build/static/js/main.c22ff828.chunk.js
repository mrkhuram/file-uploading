(this.webpackJsonpfilesys=this.webpackJsonpfilesys||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(14),a=c.n(i),r=(c(21),c(5)),l=c.n(r),o=c(15),j=c(3),d=(c(23),c(16)),u=c.n(d),b=c(0);function f(){return Object(b.jsxs)("div",{class:"error_main ",children:[Object(b.jsx)("h1",{children:"Error Uploading File"}),Object(b.jsx)("p",{children:"File failed to upload: please retry."})]})}function h(e){var t=e.success;return console.log(t),Object(b.jsxs)("div",{class:"success_main ",children:[Object(b.jsx)("h1",{children:"File Uploaded Successfully"}),Object(b.jsxs)("p",{children:["File URL: ",Object(b.jsxs)("a",{href:"".concat(window.location.origin,"/").concat(t),children:[" ","".concat(window.location.origin,"/").concat(t)]})]})]})}var p=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),a=Object(j.a)(i,2),r=a[0],d=a[1],p=Object(n.useState)(!1),O=Object(j.a)(p,2),x=O[0],v=O[1],m=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={headers:{"Content-Type":"multipart/form-data"}},(s=new FormData).append("file",c),e.prev=4,e.next=7,u.a.post("/api/create_file",s,n);case 7:200==(i=e.sent).status&&(v(i.data),d(!1)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),d(e.t0),v(!1);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{class:"main",children:[Object(b.jsx)("h1",{children:"File Uploading system"}),r?Object(b.jsx)(f,{error:r}):null,x?Object(b.jsx)(h,{success:x}):null,Object(b.jsxs)("div",{class:"form",children:[Object(b.jsxs)("div",{class:"select_file_outer",children:[Object(b.jsx)("label",{for:"",children:"Select file: "}),Object(b.jsx)("input",{type:"file",name:"file",onChange:function(e){s(e.target.files[0])}})]}),Object(b.jsx)("button",{class:"upload_btn",type:"submit",onClick:m,children:"Upload Now"}),Object(b.jsx)("div",{class:"desc_line",children:"Any type of files are acceptable."})]}),Object(b.jsxs)("div",{class:"footer",children:[Object(b.jsx)("a",{href:"mailto:admin@url.com",class:"req_file_removal",children:"Request a file removal."}),Object(b.jsx)("div",{class:"copyright",children:"\xa9 2021 is.am"})]})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.c22ff828.chunk.js.map