(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(e,l,n){"use strict";n.r(l);var i=n(5893),t=n(7294),o=n(2729),c=n.n(o);let s=()=>{let[e,l]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[n,o]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),s=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],d=[{dx:0,dy:-1},{dx:0,dy:1},{dx:-1,dy:0},{dx:1,dy:0},{dx:-1,dy:-1},{dx:1,dy:-1},{dx:-1,dy:1},{dx:1,dy:1}],_=()=>{for(let e=0;e<9;e++)for(let l=0;l<9;l++)1===n[e][l]&&(s[e][l]=11,console.log("爆弾のマスを11に変更"))},a=(e,l)=>{let i=0;if(1===n[e][l]){_();return}for(let{dx:t,dy:o}of d){let c=l+t,d=e+o;void 0!==n[d]&&void 0!==n[d][c]&&(-1===s[d][c]||s[d][c]>8)&&1===n[d][c]&&i++}if(s[e][l]=i,0===i)for(let{dx:i,dy:t}of d){let o=l+i,c=e+t;void 0!==n[c]&&void 0!==n[c][o]&&(-1===s[c][o]||s[c][o]>8)&&a(c,o)}};for(let l=0;l<9;l++)for(let n=0;n<9;n++)1===e[l][n]&&a(l,n),e[l][n]>8&&(s[l][n]=e[l][n]);console.table(n),console.table(e);let r=(i,t)=>{let c=JSON.parse(JSON.stringify(e));if(c[t][i]=1,console.log("Left click at ".concat(i,", ").concat(t)),l(c),!1===e.some(e=>e.includes(1))){let l=JSON.parse(JSON.stringify(e)),c=[];for(let e=0;e<l.length;e++)for(let n=0;n<l[e].length;n++)0!==l[e][n]||e===t&&n===i||c.push([e,n]);if(c.length>=10){let e=JSON.parse(JSON.stringify(n));for(let l=0;l<10;l++){let l=Math.floor(Math.random()*c.length),[n,i]=c[l];e[n][i]+=1,c.splice(l,1)}o(e)}}console.log(i,t)},f=(n,i)=>{let t=JSON.parse(JSON.stringify(e));0===e[i][n]&&(t[i][n]=10),10===e[i][n]&&(t[i][n]=9),9===e[i][n]&&(t[i][n]=0),l(t),console.log("Right click at ".concat(n,", ").concat(i))},x=0;return!0===s.some(e=>e.includes(11))&&(x=2),(0,i.jsx)("div",{className:c().container,children:(0,i.jsxs)("div",{className:c().outline,children:[(0,i.jsx)("div",{className:c().inline,style:{height:46},children:(0,i.jsx)("div",{className:c().cellblock,style:{backgroundPosition:-330+-30*x}})}),(0,i.jsx)("div",{style:{height:4}}),(0,i.jsx)("div",{className:c().inline,style:{height:356},children:(0,i.jsx)("div",{className:c().square,children:s.map((e,l)=>e.map((e,n)=>(0,i.jsx)("div",{className:-1===e||e>8&&e<11?c().cellblock:c().cell,onClick:()=>r(n,l),onContextMenu:e=>{e.preventDefault(),f(n,l)},style:{backgroundPosition:-30*e+34}},"".concat(n,"-").concat(l))))})})]})})};l.default=s},2729:function(e){e.exports={container:"index_container__gnN1f",square:"index_square__FfR0k",cell:"index_cell__3W8ZQ",cellblock:"index_cellblock__NG8_5",outline:"index_outline__lZDd2",inline:"index_inline__6bz5w",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);