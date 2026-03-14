function F(t){return t.toString().padStart(2,"0")}function R(t){var e=t.getHours(),o=t.getMinutes(),a=e>=12?"pm":"am";return e=e%12||12,e+":"+F(o)+" "+a}window.logSession=function(t,e){var o=document.getElementById("session-log"),a=o.querySelector(".empty-msg");a&&a.remove();var r=document.createElement("div");r.className="session-entry";var i=document.createElement("span");i.className="session-type",i.textContent=t+" · "+e+"min";var g=document.createElement("span");g.className="session-time",g.textContent=R(new Date),r.appendChild(i),r.appendChild(g),o.appendChild(r)};const j=document.getElementById("timer"),c=document.getElementById("start-btn"),m=document.getElementById("pause-btn"),q=document.getElementById("reset-btn");document.getElementById("session-log");const x=document.getElementById("pomodoro-btn"),S=document.getElementById("short-btn"),$=document.getElementById("long-btn"),y=document.getElementById("settings-modal"),z=document.getElementById("open-settings-btn"),H=document.getElementById("close-settings-btn"),J=document.getElementById("save-settings-btn"),L=document.getElementById("pomodoro-duration"),k=document.getElementById("short-duration"),M=document.getElementById("long-duration"),O=new Audio("/alarm.mp3");let n={pomodoro:25,short:5,long:15},d="pomodoro",s=n.pomodoro*60,u=null,l=!1;function A(){const t=localStorage.getItem("timer-settings");t&&(n=JSON.parse(t),L.value=n.pomodoro,k.value=n.short,M.value=n.long),s=n[d]*60,p()}function p(){const t=Math.floor(s/60),e=s%60;j.textContent=pad(t)+":"+pad(e),document.title=`${pad(t)}:${pad(e)} - Frankentimer`}window.pad=function(t){return t<10?"0"+t:t};function I(t){clearInterval(u),l=!1,d=t,s=n[t]*60,[x,S,$].forEach(e=>e.classList.remove("active")),document.getElementById(`${t}-btn`).classList.add("active"),c.disabled=!1,m.disabled=!0,p()}c.addEventListener("click",function(){l||(l=!0,c.disabled=!0,m.disabled=!1,u=setInterval(function(){if(s--,p(),s<=0){clearInterval(u),l=!1,O.play();const t=d==="pomodoro"?"Focus":d==="short"?"Short Break":"Long Break";logSession(t,n[d]),c.disabled=!1,m.disabled=!0}},1e3))});m.addEventListener("click",function(){clearInterval(u),l=!1,c.disabled=!1,m.disabled=!0});q.addEventListener("click",function(){clearInterval(u),l=!1,s=n[d]*60,p(),c.disabled=!1,m.disabled=!0});x.addEventListener("click",()=>I("pomodoro"));S.addEventListener("click",()=>I("short"));$.addEventListener("click",()=>I("long"));z.addEventListener("click",()=>{y.classList.remove("hidden")});H.addEventListener("click",()=>{y.classList.add("hidden")});J.addEventListener("click",()=>{n.pomodoro=parseInt(L.value)||25,n.short=parseInt(k.value)||5,n.long=parseInt(M.value)||15,localStorage.setItem("timer-settings",JSON.stringify(n)),l||(s=n[d]*60,p()),y.classList.add("hidden")});const w=document.getElementById("goal-input"),B=document.getElementById("goal-display"),U=document.getElementById("current-goal-text"),f=localStorage.getItem("focus-goal");f&&(w.value=f,C(f));w.addEventListener("input",function(t){const e=t.target.value;localStorage.setItem("focus-goal",e),C(e)});function C(t){t.trim()?(U.textContent=t,B.classList.remove("hidden")):B.classList.add("hidden")}A();fetch("site-config.json").then(function(t){return t.json()}).then(function(t){document.title=t.title,document.querySelector("header h1").textContent=t.title,document.getElementById("workshop-name").textContent=t.workshop}).catch(function(){});const b=document.getElementById("theme-select"),v=document.body,K=["","theme-brutalist","theme-dark-brutalist","theme-indie-cat","theme-random"],T=localStorage.getItem("focus-theme")||"";b.value=T;D(T);b.addEventListener("change",function(){const t=b.value;D(t),localStorage.setItem("focus-theme",t)});function D(t){K.forEach(o=>{o&&v.classList.remove(o)});const e=document.getElementById("random-theme-style");e&&e.remove(),t==="theme-random"?(v.classList.add("theme-random"),P()):t&&v.classList.add(t)}function P(){const t=Math.floor(Math.random()*360),e=`hsl(${t}, 30%, 90%)`,o=`hsl(${t}, 60%, 20%)`,a=`hsl(${(t+180)%360}, 70%, 50%)`,r=["'Courier New', monospace","system-ui, sans-serif","'Georgia', serif","'Impact', sans-serif","'Comic Sans MS', cursive"],i=r[Math.floor(Math.random()*r.length)],G=`https://picsum.photos/seed/${Math.floor(Math.random()*1e3)}/800/600?blur=5`,E=["cell","copy","wait","move","vertical-text","zoom-in","grab"],N=E[Math.floor(Math.random()*E.length)],h=document.createElement("style");h.id="random-theme-style",h.innerHTML=`
    body.theme-random {
      background-color: ${e} !important;
      background-image: url('${G}') !important;
      background-size: cover !important;
      background-attachment: fixed !important;
      color: ${o} !important;
      font-family: ${i} !important;
      cursor: ${N} !important;
    }
    .theme-random .card {
      background: rgba(255, 255, 255, 0.8) !important;
      backdrop-filter: blur(10px);
      border: 4px solid ${o} !important;
      border-radius: ${Math.random()>.5?"0px":"30px"} !important;
      box-shadow: 10px 10px 0px ${a} !important;
      color: ${o} !important;
    }
    .theme-random .timer-display {
      color: ${a} !important;
      font-weight: 900 !important;
    }
    .theme-random button {
      background: ${o} !important;
      color: ${e} !important;
      border: none !important;
      padding: 10px 20px !important;
      font-weight: bold !important;
      box-shadow: 4px 4px 0px ${a} !important;
    }
    .theme-random .mode-btn.active {
      background: ${a} !important;
      color: white !important;
    }
    .theme-random #theme-select {
      background: ${e} !important;
      color: ${o} !important;
      border: 2px solid ${a} !important;
      font-family: ${i} !important;
      padding: 5px !important;
    }
  `,document.head.appendChild(h)}
