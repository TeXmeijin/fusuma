(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[103],{5103:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(5032),a=s(5292);class n{constructor(){this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}registerEvent(e,t){navigator.presentation.receiver.connectionList.then((s=>{s.connections.forEach((s=>{s.addEventListener(e,t)})),s.addEventListener("connectionavailable",(e=>{t(e.connection)}))}))}setUp(){this.registerEvent("close",(e=>{console.log(e)}))}onChangePage(e){"presentation"===this.apiType?this.registerEvent("message",(t=>{const s=JSON.parse(t.data).page;e(s)})):window.addEventListener("storage",(t=>{if("page"===t.key){const s=JSON.parse(t.newValue).page;e(s)}}))}}var i=s(9134);let o=null,c=null,d=null,l=null;const u=(0,r.memo)((({slides:e,hash:t})=>{o||(window.onload=()=>{const e=document.querySelector(".swiper-container");o=new n,o.onChangePage((t=>{e?.swiper?.slideTo(t),c&&d&&s(d)}))});const s=e=>{c&&e&&(e.pause(),c.stopCapturing(e),l.style.opacity=1,c=null,l=null,d=null)},u=async()=>{const e=document.querySelectorAll("#webslides .fusuma-screen");null!==e&&e.forEach((e=>{const[t,r]=e.children;r.addEventListener("click",(async()=>{if(!c){const e=await(async()=>{if(c)throw new Error("Capturing has already run.");return c=new i.u,await c.startCapturing({video:{displaySurface:"monitor"}})})();r.srcObject=e,r.play(),d=r,l=t,l.style.opacity=0,e.getVideoTracks()[0].onended=()=>{s(r)}}}))}))};return(0,r.useEffect)((()=>{u()}),[]),r.createElement("div",{className:"fusuma-presenter-view"},r.createElement(a.X,{slides:e,hash:t,showIndex:!1}))}))},9134:(e,t,s)=>{"use strict";s.d(t,{u:()=>r});class r{constructor(){if(!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}setupRecording(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.handlerRecording)}handlerRecording(e){const t=[];this.stream=e,this.mediaRecorder=new MediaRecorder(e,{}),this.mediaRecorder.addEventListener("dataavailable",(e=>{e.data.size>0&&t.push(e.data)})),this.mediaRecorder.addEventListener("stop",(()=>{this.finishedProcess=!0,this.url=URL.createObjectURL(new Blob(t,{type:"audio/webm"}))}))}startRecording(){this.mediaRecorder.start(),this.finishedProcess=!1,this.url=null}stopRecording(){return new Promise((e=>{this.mediaRecorder.stop();const t=setInterval((()=>{this.finishedProcess&&(clearInterval(t),e(this.url))}),100)}))}disposeRecording(){this.mediaRecorder.stream.getTracks().forEach((e=>e.stop())),this.finishedProcess=!1,this.url=null}async startCapturing(e){let t=null;try{t=await navigator.mediaDevices.getDisplayMedia(e)}catch(e){console.error(e)}return t}stopCapturing(e){e.srcObject.getTracks().forEach((e=>e.stop())),e.srcObject=null}}}}]);