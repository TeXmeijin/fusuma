(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[784],{9784:(e,t,n)=>{"use strict";function c(e){let t=null,n=null;document.addEventListener("touchstart",(e=>{const{clientX:c,clientY:l}=e.touches[0];t=c,n=l}),!1),document.addEventListener("touchmove",(c=>{if(!t||!n)return;const l=c.touches[0];let u=t-l.clientX,s=n-l.clientY;Math.abs(u)>Math.abs(s)&&e(u>0?"+":"-"),t=null,n=null}),!1)}n.r(t),n.d(t,{swipeEvent:()=>c})}}]);