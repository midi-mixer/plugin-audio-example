import{C as e}from"./vendor.ee83ebef.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const m=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),p=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(m),onerror(){a(new Error(`Failed to import: ${e}`)),r(p)},onload(){o(self[t].moduleMap[s]),r(p)}});document.head.appendChild(p)})),self[t].moduleMap={}}}("assets/");const t=new Audio("./assets/intro.d7b68e23.mp3");t.autoplay=!0,t.play(),new e.ButtonType("intro",{name:"Play intro.mp3",active:!0}).on("pressed",(()=>{t.currentTime=0,t.playbackRate=5,t.play()}));
//# sourceMappingURL=index.d87d1a43.js.map
