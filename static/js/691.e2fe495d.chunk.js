"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{576:function(n,e,r){r.d(e,{$h:function(){return o},Vq:function(){return i},_n:function(){return t}});var t="https://api.themoviedb.org/3",o="11c18f4587e0f81a9d7265ade8abe4b9",i="https://i.ibb.co/nBW9G9B/avatar.jpg"},691:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,o,i,c,a,u=r(861),s=r(439),d=r(757),p=r.n(d),h=r(791),l=r(243),b=r(168),f=r(444),x=f.ZP.div(t||(t=(0,b.Z)(["\n    padding: 5px 20px;\n    max-width: 1400px;\n\n"]))),g=f.ZP.input(o||(o=(0,b.Z)(["\n    padding: 1px 10px;\n    height: 25px;\n    margin-right: 10px;\n    font-size: 14px;\n    border-radius: 5px;\n    border: 1px solid grey;\n    outline: none;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover {\n        border-color: orangered;\n    }\n    &:focus {\n        border-color: orangered;\n    }\n"]))),m=f.ZP.button(i||(i=(0,b.Z)(["\n    padding: 2px 10px;\n    height: 30px;\n    font-size: 14px;\n    border: 1px solid grey;\n    border-radius: 5px;\n    background-color: white;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover {\n        color:white;\n        background-color: orangered;\n    }\n"]))),v=f.ZP.form(c||(c=(0,b.Z)(["\n    margin-bottom: 10px;\n"]))),Z=f.ZP.p(a||(a=(0,b.Z)(["\n    font-size: 16px;\n    line-height: 1.2;\n    color: black;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:last-child {\n        margin-bottom: 5px;\n    }\n    &:hover {\n        color:orangered;\n    }\n"]))),k=r(87),y=r(689),w=r(576),j=r(184),P=function(){var n,e=(0,h.useState)([]),r=(0,s.Z)(e,2),t=r[0],o=r[1],i=(0,k.useSearchParams)({}),c=(0,s.Z)(i,2),a=c[0],d=c[1],b=null!==(n=a.get("query"))&&void 0!==n?n:"",f=(0,y.TH)(),P=function(){var n=(0,u.Z)(p().mark((function n(){var e,r,t,i;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:w.$h,query:b}),r="".concat(w._n,"/search/movie?query=").concat(b,"&").concat(e),n.next=4,l.Z.get(r);case 4:t=n.sent,i=t.data,o(i.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,h.useEffect)((function(){P()}),[]);return(0,j.jsxs)(x,{children:[(0,j.jsxs)(v,{onSubmit:function(n){n.preventDefault(),b?(o([]),P()):o([])},children:[(0,j.jsx)(g,{type:"text",value:b,onChange:function(n){var e=n.target.value;if(""===e)return d({});d({query:e})}}),(0,j.jsx)(m,{type:"submit",children:"Search"})]}),(0,j.jsx)("div",{children:0!==t.length?t.map((function(n){return(0,j.jsx)(k.Link,{to:"".concat(n.id),state:{from:f},children:(0,j.jsxs)(Z,{children:["\u2022 ",n.title]})},n.id)})):(0,j.jsx)("div",{children:"Please enter the correct search query."})})]})}}}]);
//# sourceMappingURL=691.e2fe495d.chunk.js.map