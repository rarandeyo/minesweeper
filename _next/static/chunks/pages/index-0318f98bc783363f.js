(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,l,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(85)}])},85:function(e,l,o){"use strict";o.r(l);var t=o(5893),n=o(7294),i=o(2729),r=o.n(i);let d=()=>{let[e,l]=(0,n.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[o,i]=(0,n.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),d=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],_=[{dx:0,dy:-1},{dx:0,dy:1},{dx:-1,dy:0},{dx:1,dy:0},{dx:-1,dy:-1},{dx:1,dy:-1},{dx:-1,dy:1},{dx:1,dy:1}],c=()=>{for(let l=0;l<9;l++)for(let t=0;t<9;t++)if(1===o[l][t]&&(d[l][t]=11,console.log("爆弾のマスを11に変更")),1===e[l][t]&&11!==d[l][t]){console.log("最後にカウント");let e=0;for(let{dx:n,dy:i}of _){let r=t+n,_=l+i;void 0!==o[_]&&void 0!==o[_][r]&&-1===d[_][r]&&1===o[_][r]&&e++}d[l][t]=e}},s=()=>{let e=0;for(let l=0;l<9;l++)for(let o=0;o<9;o++)11===d[l][o]&&e++;return e},f=(e,l)=>{let t=0;if(1===o[e][l]){c();return}for(let{dx:n,dy:i}of _){let r=l+n,_=e+i;void 0!==o[_]&&void 0!==o[_][r]&&-1===d[_][r]&&1===o[_][r]&&t++}if(d[e][l]=t,0===t)for(let{dx:t,dy:n}of _){let i=l+t,r=e+n;void 0!==o[r]&&void 0!==o[r][i]&&-1===d[r][i]&&f(r,i)}};for(let l=0;l<9;l++)for(let o=0;o<9;o++)0===s()&&1===e[l][o]&&(f(l,o),console.log("カウントした"));console.table(o),console.table(d);let a=()=>{for(let l=0;l<9;l++)for(let o=0;o<9;o++)if(0!==e[l][o])return!1},x=(t,n)=>{let r=JSON.parse(JSON.stringify(e));if(r[n][t]=1,l(r),!1!==a()){let l=JSON.parse(JSON.stringify(e)),r=[];for(let e=0;e<l.length;e++)for(let o=0;o<l[e].length;o++)0!==l[e][o]||e===n&&o===t||r.push([e,o]);if(r.length>=10){let e=JSON.parse(JSON.stringify(o));for(let l=0;l<10;l++){let l=Math.floor(Math.random()*r.length),[o,t]=r[l];e[o][t]+=1,r.splice(l,1)}i(e)}}console.log(t,n)};return(0,t.jsx)("div",{className:r().container,children:(0,t.jsx)("div",{className:r().square,children:d.map((e,l)=>e.map((e,o)=>(0,t.jsx)("div",{className:-1===e?r().cellblock:r().cell,onClick:()=>x(o,l),style:{backgroundPosition:-30*e+30},children:(0,t.jsx)(t.Fragment,{children:e})},"".concat(o,"-").concat(l))))})})};l.default=d},2729:function(e){e.exports={container:"index_container__gnN1f",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ",square:"index_square__FfR0k",cell:"index_cell__3W8ZQ",cellblock:"index_cellblock__NG8_5"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);