function A(t){return t.toString().padStart(2,"0")}function F(t){var e=t.getHours(),n=t.getMinutes(),a=e>=12?"pm":"am";return e=e%12||12,e+":"+A(n)+" "+a}window.logSession=function(t,e){var n=document.getElementById("session-log"),a=n.querySelector(".empty-msg");a&&a.remove();var r=document.createElement("div");r.className="session-entry";var l=document.createElement("span");l.className="session-type",l.textContent=t+" · "+e+"min";var p=document.createElement("span");p.className="session-time",p.textContent=F(new Date),r.appendChild(l),r.appendChild(p),n.appendChild(r)};const R=document.getElementById("timer"),c=document.getElementById("start-btn"),m=document.getElementById("pause-btn"),q=document.getElementById("reset-btn");document.getElementById("session-log");const k=document.getElementById("pomodoro-btn"),S=document.getElementById("short-btn"),$=document.getElementById("long-btn"),E=document.getElementById("settings-modal"),z=document.getElementById("open-settings-btn"),H=document.getElementById("close-settings-btn"),J=document.getElementById("save-settings-btn"),w=document.getElementById("pomodoro-duration"),C=document.getElementById("short-duration"),M=document.getElementById("long-duration"),_=new Audio("/alarm.mp3");let o={pomodoro:25,short:5,long:15},d="pomodoro",s=o.pomodoro*60,u=null,i=!1;function U(){const t=localStorage.getItem("timer-settings");t&&(o=JSON.parse(t),w.value=o.pomodoro,C.value=o.short,M.value=o.long),s=o[d]*60,g()}function g(){const t=Math.floor(s/60),e=s%60;R.textContent=pad(t)+":"+pad(e),document.title=`${pad(t)}:${pad(e)} - Frankentimer`}window.pad=function(t){return t<10?"0"+t:t};function B(t){clearInterval(u),i=!1,d=t,s=o[t]*60,[k,S,$].forEach(e=>e.classList.remove("active")),document.getElementById(`${t}-btn`).classList.add("active"),c.disabled=!1,m.disabled=!0,g()}c.addEventListener("click",function(){i||(i=!0,c.disabled=!0,m.disabled=!1,u=setInterval(function(){if(s--,g(),s<=0){clearInterval(u),i=!1,_.play();const t=d==="pomodoro"?"Focus":d==="short"?"Short Break":"Long Break";logSession(t,o[d]),c.disabled=!1,m.disabled=!0}},1e3))});m.addEventListener("click",function(){clearInterval(u),i=!1,c.disabled=!1,m.disabled=!0});q.addEventListener("click",function(){clearInterval(u),i=!1,s=o[d]*60,g(),c.disabled=!1,m.disabled=!0});k.addEventListener("click",()=>B("pomodoro"));S.addEventListener("click",()=>B("short"));$.addEventListener("click",()=>B("long"));z.addEventListener("click",()=>{E.classList.remove("hidden")});H.addEventListener("click",()=>{E.classList.add("hidden")});J.addEventListener("click",()=>{o.pomodoro=parseInt(w.value)||25,o.short=parseInt(C.value)||5,o.long=parseInt(M.value)||15,localStorage.setItem("timer-settings",JSON.stringify(o)),i||(s=o[d]*60,g()),E.classList.add("hidden")});const T=document.getElementById("goal-input"),L=document.getElementById("goal-display"),K=document.getElementById("current-goal-text"),f=localStorage.getItem("focus-goal");f&&(T.value=f,D(f));T.addEventListener("input",function(t){const e=t.target.value;localStorage.setItem("focus-goal",e),D(e)});function D(t){t.trim()?(K.textContent=t,L.classList.remove("hidden")):L.classList.add("hidden")}U();fetch("site-config.json").then(function(t){return t.json()}).then(function(t){document.title=t.title,document.querySelector("header h1").textContent=t.title;const e=document.getElementById("workshop-name");e&&(e.textContent=t.workshop)}).catch(function(){});fetch("aid-history.json").then(function(t){return t.json()}).then(function(t){const e=document.getElementById("aid-statement-text"),n=document.getElementById("aid-token-count");e&&t.history&&t.history.length>0&&(e.textContent=t.history[0].statement),n&&(n.textContent=t.total_tokens_estimated.toLocaleString())}).catch(function(t){console.warn("AID history not found",t)});const y=document.getElementById("aid-toggle"),v=document.getElementById("aid-drawer");y&&v&&y.addEventListener("click",function(){v.classList.toggle("hidden"),y.textContent=v.classList.contains("hidden")?"📜 AID LOG":"✖ CLOSE"});const I=document.getElementById("theme-select"),b=document.body,P=["","theme-brutalist","theme-dark-brutalist","theme-indie-cat","theme-random"],G=localStorage.getItem("focus-theme")||"";I.value=G;j(G);I.addEventListener("change",function(){const t=I.value;j(t),localStorage.setItem("focus-theme",t)});function j(t){P.forEach(n=>{n&&b.classList.remove(n)});const e=document.getElementById("random-theme-style");e&&e.remove(),t==="theme-random"?(b.classList.add("theme-random"),Q()):t&&b.classList.add(t)}function Q(){const t=Math.floor(Math.random()*360),e=`hsl(${t}, 30%, 90%)`,n=`hsl(${t}, 60%, 20%)`,a=`hsl(${(t+180)%360}, 70%, 50%)`,r=["'Courier New', monospace","system-ui, sans-serif","'Georgia', serif","'Impact', sans-serif","'Comic Sans MS', cursive"],l=r[Math.floor(Math.random()*r.length)],N=`https://picsum.photos/seed/${Math.floor(Math.random()*1e3)}/800/600?blur=5`,x=["cell","copy","wait","move","vertical-text","zoom-in","grab"],O=x[Math.floor(Math.random()*x.length)],h=document.createElement("style");h.id="random-theme-style",h.innerHTML=`
    body.theme-random {
      background-color: ${e} !important;
      background-image: url('${N}') !important;
      background-size: cover !important;
      background-attachment: fixed !important;
      color: ${n} !important;
      font-family: ${l} !important;
      cursor: ${O} !important;
    }
    .theme-random .card {
      background: rgba(255, 255, 255, 0.8) !important;
      backdrop-filter: blur(10px);
      border: 4px solid ${n} !important;
      border-radius: ${Math.random()>.5?"0px":"30px"} !important;
      box-shadow: 10px 10px 0px ${a} !important;
      color: ${n} !important;
    }
    .theme-random .timer-display {
      color: ${a} !important;
      font-weight: 900 !important;
    }
    .theme-random button {
      background: ${n} !important;
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
      color: ${n} !important;
      border: 2px solid ${a} !important;
      font-family: ${l} !important;
      padding: 5px !important;
    }
  `,document.head.appendChild(h)}
