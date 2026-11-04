(function(){var r=document.documentElement;function set(t){r.setAttribute("data-theme",t);[].forEach.call(document.querySelectorAll(".themes button"),function(b){b.setAttribute("aria-pressed",b.getAttribute("data-t")===t?"true":"false")});var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==="dark"?"#000000":(t==="light"?"#F4F1EA":"#FFF7F0");try{localStorage.setItem("theme3",t)}catch(e){}}var t="bright";try{t=localStorage.getItem("theme3")||"bright"}catch(e){}set(t);[].forEach.call(document.querySelectorAll(".themes button"),function(b){b.addEventListener("click",function(){set(b.getAttribute("data-t"))})});})();
var WIN=/winner|gold|1st|first|2nd|3rd|runner|finalist|top 8|best project|honourable/i;
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}
function TH(u){return u.indexOf("static.wixstatic.com")>=0&&u.indexOf("/v1/")<0?u+"/v1/fit/w_720,h_480,q_80,enc_auto/t.webp":u}
function thumb(e,ex){var x=e[2]&&EV[e[2]];if(x&&x.i.length){var u=TH(x.i[0]);return '<div class="thumb"><i style="background-image:url(\''+u+'\')"></i><img loading="lazy" alt="" src="'+u+'" data-full="'+x.i[0]+'" onerror="if(this.src!==this.dataset.full){this.src=this.dataset.full}"></div>';}var lab=ex&&ex.rec?"PRIVATE RECORD":(x||(ex&&ex.pop))?"SUMMARY ONLY":"PENDING";return '<div class="thumb none"><span>'+lab+'</span></div>';}
function act(e,ex){
 if(ex&&ex.rec)return '<button class="btn" data-rec>Open record</button>';
 if(e[3])return '<button class="btn" data-pop="'+e[3]+'">Read letter</button>';
 if(ex&&ex.pop)return '<button class="btn" data-pop="'+ex.pop+'">Read summary</button>';
 if(e[2]&&EV[e[2]]&&!EV[e[2]].i.length)return '<button class="btn" data-evs="'+e[2]+'">Read summary</button>';
 return e[2]?'<a class="view" data-id="'+e[2]+'" href="#">View evidence</a>':'<span class="view pending">Evidence to be added</span>';}
(function(){var h="",k=0,flat=[];
 S.forEach(function(s){h+='<section id="s'+s[0]+'" class="sec" data-acc="'+(((+s[0]-1)%5)+1)+'" data-view="'+(s[0]==="06"?"skill":"ach")+'"><div class="wrap"><header class="sechead"><span class="num">'+s[0]+'</span><h2>'+esc(s[1])+'</h2><p>'+esc(s[2])+'</p></header>';
  s[3].forEach(function(b){h+='<h3 class="branch"><span>✦</span> '+esc(b[0])+'</h3><div class="grid">';
   b[1].forEach(function(it){var e=it[2],ex=it[3],fi=0;for(var q=0;q<e.length;q++){if(e[q][2]&&EV[e[q][2]]&&EV[e[q][2]].i.length){fi=q;break;}}var f=e[fi];flat.push(it);
    var lv=(ex&&ex.lv)||"sch";h+='<article class="card" data-lv="'+lv+'" data-s="'+esc((it[0]+" "+it[1]+" "+e.map(function(x){return x[0]+" "+x[1]}).join(" ")).toLowerCase())+'" data-w="'+(e.some(function(x){return WIN.test(x[1])})?1:0)+'">'+((lv==="intl"||lv==="nat")?'<span class="lvtag '+lv+'">'+(lv==="intl"?"International":"National")+'</span>':'')+thumb(f,ex)+'<h4>'+esc(it[0])+'</h4><p class="note">'+esc(it[1])+'</p>';
    if(e.length>1)h+='<label class="pick"><span class="sr">Choose year for '+esc(it[0])+'</span><select data-k="'+k+'">'+e.map(function(x,n){return '<option value="'+n+'"'+(n===fi?' selected':'')+'>'+esc(x[0])+'</option>'}).join("")+'</select></label>';else h+='<p class="when">'+esc(f[0])+'</p>';
    h+='<p class="res">'+esc(f[1])+'</p><span class="slot">'+act(f,ex)+'</span></article>';k++;});
   h+='</div>';});
  h+='</div></section>';});
 document.getElementById("secs").outerHTML=h;
 document.querySelectorAll("select[data-k]").forEach(function(sel){sel.addEventListener("change",function(){var it=flat[+sel.getAttribute("data-k")],x=it[2][sel.selectedIndex],c=sel.closest(".card");c.querySelector(".res").textContent=x[1];c.querySelector(".slot").innerHTML=act(x,it[3]);var th=c.querySelector(".thumb");if(th)th.outerHTML=thumb(x,it[3]);});});
 var ev=0,w=0,seen={};S.forEach(function(s){s[3].forEach(function(b){b[1].forEach(function(it){it[2].forEach(function(e){if(e[2]&&EV[e[2]]&&EV[e[2]].i.length&&!seen[e[2]]&&!(it[3]&&it[3].lv==="pers")){seen[e[2]]=1;ev++;}if(WIN.test(e[1]))w++;});});});});
 var a=document.getElementById("nEv"),b2=document.getElementById("nWin");if(a)a.textContent=ev;if(b2)b2.textContent=w;var tp=0;S.forEach(function(s){s[3].forEach(function(b){b[1].forEach(function(it){if(it[3]&&(it[3].lv==="intl"||it[3].lv==="nat"))tp+=it[2].length;});});});var nt=document.getElementById("nTop");if(nt)nt.textContent=tp;
 [].forEach.call(document.querySelectorAll("[data-hl]"),function(b){var x=EV[b.getAttribute("data-hl")];if(x&&x.i.length){var im=b.querySelector("img");var u=TH(x.i[0]);im.src=u;im.setAttribute("data-full",x.i[0]);im.onerror=function(){if(this.src!==this.dataset.full)this.src=this.dataset.full};}});})();
var VIEW="ach",LV="all";
function runFilter(){var q=document.getElementById("q"),wt=document.querySelector(".wtog"),s=q.value.trim().toLowerCase(),wo=wt.getAttribute("aria-pressed")==="true",n=0;
 document.querySelectorAll("section.sec").forEach(function(sec){var inView=VIEW==="all"||sec.getAttribute("data-view")===VIEW;
  sec.querySelectorAll(".card").forEach(function(c){var ok=inView&&(LV==="all"||c.getAttribute("data-lv")===LV||(LV==="top"&&c.getAttribute("data-lv")!=="sch"))&&(!s||c.getAttribute("data-s").indexOf(s)>=0)&&(!wo||c.getAttribute("data-w")==="1");c.hidden=!ok;if(ok)n++;});
  sec.querySelectorAll(".grid").forEach(function(g){var any=[].some.call(g.children,function(c){return !c.hidden});g.hidden=!any;var hd=g.previousElementSibling;if(hd&&hd.classList.contains("branch"))hd.hidden=!any;});
  sec.hidden=![].some.call(sec.querySelectorAll(".card"),function(c){return !c.hidden});});
 document.querySelector(".fcount").textContent=(s||wo||LV!=="all")?n+(n===1?" match":" matches"):"";}
function setView(v){VIEW=v;[].forEach.call(document.querySelectorAll(".seg.vw button"),function(b){b.setAttribute("aria-pressed",b.getAttribute("data-v")===v?"true":"false")});runFilter();}
document.getElementById("q").addEventListener("input",runFilter);
document.querySelector(".wtog").addEventListener("click",function(){var w=this;w.setAttribute("aria-pressed",w.getAttribute("aria-pressed")==="true"?"false":"true");runFilter();});
[].forEach.call(document.querySelectorAll(".seg.lv button"),function(b){b.addEventListener("click",function(){LV=b.getAttribute("data-l");[].forEach.call(document.querySelectorAll(".seg.lv button"),function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});runFilter();});});
[].forEach.call(document.querySelectorAll(".seg.vw button"),function(b){b.addEventListener("click",function(){setView(b.getAttribute("data-v"));var c=document.querySelector(".controls");window.scrollTo({top:c.getBoundingClientRect().top+window.scrollY-60,behavior:"smooth"});});});
[].forEach.call(document.querySelectorAll('.nav a[href^="#s"]'),function(a){a.addEventListener("click",function(){var sec=document.querySelector(a.getAttribute("href"));if(sec&&sec.hidden){setView(sec.getAttribute("data-view"));}});});
setView("ach");
var lastFocus=null,cur=0,timer=null,DUR=12000,Z=1,KEY=null,IDX=0;
var V=function(){return document.getElementById("viewer")};
function openScreen(el){document.documentElement.classList.add("modal-open");if(el.hidden)lastFocus=document.activeElement;el.hidden=false;document.body.style.overflow="hidden";var b=el.querySelector("[data-close]");if(b)b.focus();}
function closeScreen(el){el.hidden=true;document.body.style.overflow="";if(!document.querySelector(".screen:not([hidden]),.viewer:not([hidden])"))document.documentElement.classList.remove("modal-open");if(el.id==="viewer"){stopPlay();var im=el.querySelector(".dimg img");im.removeAttribute("src");im.hidden=true;if(/^#ev-/.test(location.hash)){try{history.replaceState(null,"",location.pathname+location.search)}catch(e){}}}if(lastFocus)lastFocus.focus();}
function showPopObj(p){var el=document.getElementById("pop"),h='<p class="label">'+esc(p.k)+'</p><h2 id="popT">'+esc(p.t)+'</h2><p class="meta2">'+esc(p.m)+'</p>';
 if(p.b)h+='<div class="body">'+p.b.map(function(x){return '<p>'+esc(x)+'</p>'}).join("")+'</div>';
 if(p.tbl)h+='<div class="tw"><table><thead><tr>'+p.tbl[0].map(function(x){return '<th>'+esc(x)+'</th>'}).join("")+'</tr></thead><tbody>'+p.tbl.slice(1).map(function(r){return '<tr>'+r.map(function(x){return '<td>'+esc(x)+'</td>'}).join("")+'</tr>'}).join("")+'</tbody></table></div>';
 if(p.ev)h+='<div class="ev"><b>Evidence held</b>'+esc(p.ev)+'</div>';el.querySelector(".pc").innerHTML=h;openScreen(el);}
function title(t){return t.toLowerCase().replace(/(^|[\s(—–&-])([a-z])/g,function(m,a,c){return a+c.toUpperCase()}).replace(/\bEi\b|\bei\b/g,"Ei").replace(/\b(Ace|Apa|Didi|Nms|Gma|Gems|Mun|Munood|Epws|Cbse|Gls|Ai|Sdg|Kg|Uae|Pds)\b/g,function(m){return m.toUpperCase()}).replace(/Asset/g,"ASSET")}
function showSummary(k){var x=EV[k];showPopObj({k:x.k,t:title(x.t),m:x.m.map(function(m){return m[1]}).join(" · "),b:[x.b],ev:(x.w||"Original document held privately.")+" Available on request."});}
function list(){return [].slice.call(document.querySelectorAll("a.view[data-id]")).map(function(a){var c=a.closest(".card"),s=c&&c.querySelector("select");return {el:a,id:a.getAttribute("data-id"),y:s?s.options[s.selectedIndex].text:""}})}
function hash(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return h}
function render(k,y,n,total){var x=EV[k],v=V();if(!x)return;KEY=k;
 v.querySelector(".vt b").textContent=x.t;v.querySelector(".vt span").textContent=(y||(x.m[0]?x.m[0][1]:""))+(total?"  ✦  "+(n+1)+" of "+total:"");
 v.querySelector(".vlabel").innerHTML=(x.i.length>1?"GALLERY":"EVIDENCE").split("").map(function(c){return "<span>"+c+"</span>"}).join("");
 v.querySelector(".dright .in").innerHTML='<div class="stripes"></div><p class="cmd">$ <b>WHOAMI</b></p><h3>'+esc(x.t)+'</h3>'+(x.m.length?'<ul class="dmeta">'+x.m.map(function(m){return '<li><span>'+esc(m[0])+'</span> <b>'+esc(m[1])+'</b></li>'}).join("")+'</ul>':'')+'<hr><p class="dbody">'+esc(x.b)+'</p><p class="dstat">STATUS: <b>ON FILE</b></p>';
 var hid="0X"+(hash(k)%0xFFFFFF).toString(16).toUpperCase();
 v.querySelector(".dfoot").innerHTML='<span>DEVICE ID: '+hid.slice(2)+'</span><i></i><span>[ '+esc(x.k)+' ]</span><i></i><em>'+hid+' — SYSTEM <b>'+String(total?n+1:1).padStart(2,"0")+'</b></em>';
 v.querySelector(".dthumbs").innerHTML=x.i.length>1?x.i.map(function(_,i){return '<button data-pg="'+i+'" aria-pressed="false">'+String(i+1).padStart(2,"0")+'</button>'}).join(""):"";
 showImg(0);resetProg();}
function showImg(i){var x=EV[KEY],v=V(),box=v.querySelector(".dimg"),im=box.querySelector("img"),ld=box.querySelector(".ld");IDX=i;Z=1;applyZoom();
 im.hidden=true;im.removeAttribute("src");ld.hidden=false;ld.textContent="LOADING…";im.onload=function(){ld.hidden=true;im.hidden=false;};im.onerror=function(){ld.textContent="IMAGE UNAVAILABLE";};
 im.alt=x.t+(x.i.length>1?" image "+(i+1):"");if(x.i[i])im.src=IMG_BASE+x.i[i];
 [].forEach.call(v.querySelectorAll(".dthumbs button"),function(b,j){b.setAttribute("aria-pressed",j===i?"true":"false")});}
function applyZoom(){var v=V(),box=v.querySelector(".dimg"),im=box.querySelector("img");if(Z<=1){box.classList.remove("zoomed");im.style.width="";}else{if(!box.classList.contains("zoomed"))box.dataset.bw=im.offsetWidth;box.classList.add("zoomed");im.style.width=Math.round((+box.dataset.bw||im.offsetWidth)*Z)+"px";}v.querySelector(".zv").textContent=Math.round(Z*100)+"%";}
function zoom(d){var box=V().querySelector(".dimg");if(Z<=1)box.dataset.bw=box.querySelector("img").offsetWidth;var cx=(box.scrollLeft+box.clientWidth/2)/Math.max(1,box.scrollWidth),cy=(box.scrollTop+box.clientHeight/2)/Math.max(1,box.scrollHeight);Z=Math.min(4,Math.max(1,Math.round((Z+d)*100)/100));applyZoom();box.scrollLeft=cx*box.scrollWidth-box.clientWidth/2;box.scrollTop=cy*box.scrollHeight-box.clientHeight/2;}
(function(){var dn=null;document.addEventListener("pointerdown",function(e){var b=e.target.closest(".dimg.zoomed");if(!b)return;e.preventDefault();dn={b:b,x:e.clientX,y:e.clientY,l:b.scrollLeft,t:b.scrollTop};});document.addEventListener("pointermove",function(e){if(!dn)return;dn.b.scrollLeft=dn.l-(e.clientX-dn.x);dn.b.scrollTop=dn.t-(e.clientY-dn.y);});document.addEventListener("pointerup",function(){dn=null;});})();
function openKey(k,y){if(!EV[k])return;if(!EV[k].i.length){showSummary(k);return;}var v=V();v.classList.add("single");openScreen(v);render(k,y);try{history.replaceState(null,"","#ev-"+k.toLowerCase().replace(/_/g,"-"))}catch(e){}}
function openViewer(i,play){var v=V();v.classList.remove("single");openScreen(v);show(i);if(play)startPlay();}
function show(i){var L=list();if(!L.length)return;cur=(i+L.length)%L.length;render(L[cur].id,L[cur].y,cur,L.length);}
function step(d){show(cur+d);}
function resetProg(){var b=document.querySelector(".vprog i");if(!b)return;b.style.transition="none";b.style.width="0";if(timer){void b.offsetWidth;b.style.transition="width "+DUR+"ms linear";b.style.width="100%";}}
function startPlay(){stopPlay();timer=setInterval(function(){step(1)},DUR);var p=document.querySelector("[data-play]");p.classList.add("on");p.textContent="Pause";resetProg();}
function stopPlay(){if(timer)clearInterval(timer);timer=null;var p=document.querySelector("[data-play]");if(p){p.classList.remove("on");p.textContent="Play";}resetProg();}
document.addEventListener("click",function(e){var t=e.target.closest("[data-hl],[data-pop],[data-rec],[data-close],a.view[data-id],[data-present],[data-proj],[data-pt],[data-evs],[data-step],[data-play],[data-zoom],[data-pg]");if(!t)return;
 if(t.hasAttribute("data-hl")){openKey(t.getAttribute("data-hl"),(t.querySelector(".hy")||{}).textContent||"");return;}
 if(t.hasAttribute("data-close")){closeScreen(t.closest(".screen,.viewer"));return;}
 if(t.hasAttribute("data-rec")){openScreen(document.getElementById("record"));return;}
 if(t.hasAttribute("data-present")){openViewer(0,true);return;}
 if(t.hasAttribute("data-pop")){var p=P[t.getAttribute("data-pop")];if(p)showPopObj(p);return;}
 if(t.hasAttribute("data-evs")){showSummary(t.getAttribute("data-evs"));return;}
 if(t.hasAttribute("data-proj")){e.preventDefault();openProj(t.getAttribute("data-proj"));return;}
 if(t.hasAttribute("data-pt")){pjImg(+t.getAttribute("data-pt"));return;}
 if(t.matches("a.view[data-id]")){e.preventDefault();var c=t.closest(".card"),s=c&&c.querySelector("select");openKey(t.getAttribute("data-id"),s?s.options[s.selectedIndex].text:"");return;}
 if(t.hasAttribute("data-step")){step(+t.getAttribute("data-step"));if(timer)startPlay();return;}
 if(t.hasAttribute("data-play")){timer?stopPlay():startPlay();return;}
 if(t.hasAttribute("data-zoom")){zoom(+t.getAttribute("data-zoom"));return;}
 if(t.hasAttribute("data-pg")){showImg(+t.getAttribute("data-pg"));return;}});
document.addEventListener("keydown",function(e){var v=V(),open=[].slice.call(document.querySelectorAll(".screen:not([hidden]),.viewer:not([hidden])"));if(!open.length)return;
 if(e.key==="Escape")closeScreen(open[open.length-1]);
 if(!v.hidden&&!v.classList.contains("single")){if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1);}
 if(!v.hidden&&v.classList.contains("single")&&KEY&&EV[KEY].i.length>1){var L=EV[KEY].i.length;if(e.key==="ArrowRight")showImg((IDX+1)%L);if(e.key==="ArrowLeft")showImg((IDX-1+L)%L);}});
(function(){var m=/^#ev-([a-z0-9-]+)$/.exec(location.hash);if(!m)return;for(var k in EV){if(k.toLowerCase().replace(/_/g,"-")===m[1]){openKey(k,"");break;}}})();
if("serviceWorker" in navigator&&location.protocol==="https:"){addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){});});}

var PJC={MU:"Masters’ Union AI Buildathon",DIDI:"DIDI Project Design Space × MillerKnoll",GIC:"GEMS Global Innovation Challenge",AGW:"A Genius Within"};
var PJD={MU:"A buildathon run by Masters’ Union, billed as India’s biggest, in which student teams build working AI products against the clock.",DIDI:"A design challenge from the Dubai Institute of Design and Innovation’s Project Design Space and furniture maker MillerKnoll, in which student teams research, prototype and test a product design.",GIC:"GEMS Education’s worldwide innovation competition, in which students design technology solutions to real-world problems.",AGW:"A Dubai 10X and KHDA Rahhal programme for selected students, who research, build and present an independent innovation project."};
var PROJ={auxillium:["Auxillium","MU","Finalist · Grand Finale 2026","MASTER_S_UNION_AI_BUILDATHON_2026"],novara:["Novara","DIDI","Top 8 Finalist · 2026","DIDI_PROJECT_SPACE_2026"],neuroease:["NeuroEase","GIC","Participant · 2025–26","GEMS_GLOBAL_INNOVATION_CHALLENGE_2025_26"],healthconnect:["HealthConnect","GIC","Gold Award, Health Tech · 2023–24","GEMS_GLOBAL_INNOVATION_CHALLENGE_2023_24"],tranquillix:["Tranquillix","GIC","Bronze Award, Good Health and Wellbeing · 2024–25","GEMS_GLOBAL_INNOVATION_CHALLENGE_2024_25"],databridge:["DataBridge","AGW","Named among the best projects · Grade 8","A_GENIUS_WITHIN_DUBAI_10X_KHDA_RAHHAL_2024_25"],wordwise:["WordWise","AGW","Named among the best projects · Grade 7","A_GENIUS_WITHIN_DUBAI_10X_KHDA_RAHHAL_2023_24"]};
var PJI=[];var PD={"auxillium":"An AI-powered healthcare app designed to widen access to care in rural communities.","novara":"A sustainable, accessible furniture design for more inclusive workplaces.","healthconnect":"A health-tech app that connects people with wellness and medical support.","tranquillix":"A wellbeing app built around SDG 3, Good Health and Wellbeing.","neuroease":"An assistive-technology system that supports people with autism in daily life.","databridge":"A sustainability-focused student community app that links students with mentors and research opportunities.","wordwise":"An interactive app that helps non-native speakers improve their English pronunciation, vocabulary and grammar."};
function openProj(id){var p=PROJ[id],x=EV[p[3]],el=document.getElementById("projm");PJI=x?x.i:[];
 var h='<p class="label"><span class="dot"></span>'+esc(PJC[p[1]])+'</p><div class="pj"><div><h2 id="pjT">'+esc(p[0])+'</h2><p class="place">★ '+esc(p[2])+'</p><p class="pdesc"><b>The project</b>'+esc(PD[id]||"")+'</p><p class="pk">The contest</p><p class="about-contest">'+esc(PJD[p[1]])+'</p><p class="tnote">Project details are kept brief and are available on request.</p></div><div class="cert">';
 if(PJI.length){h+='<img alt="Certificate for '+esc(p[0])+'" src="'+IMG_BASE+PJI[0]+'">';if(PJI.length>1)h+='<div class="tabs">'+PJI.map(function(_,i){return '<button data-pt="'+i+'" aria-pressed="'+(i?"false":"true")+'">'+String(i+1).padStart(2,"0")+'</button>'}).join("")+'</div>';}
 else h+='<p class="nocert">No certificate on public display.</p>';
 h+='</div></div>';el.querySelector(".pc").innerHTML=h;openScreen(el);}
function pjImg(i){var el=document.getElementById("projm");el.querySelector(".cert img").src=IMG_BASE+PJI[i];[].forEach.call(el.querySelectorAll(".tabs button"),function(b,j){b.setAttribute("aria-pressed",j===i?"true":"false")});}

/* v6 motion layer */
(function(){
 var RM=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
 var h1=document.querySelector(".hero h1 span+span");if(h1&&!h1.querySelector(".scrib")){h1.style.position="relative";h1.insertAdjacentHTML("beforeend",'<svg class="scrib" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true"><path d="M6 26 C 120 6, 240 34, 360 18 S 540 8, 594 22"/></svg>');}
 if(!RM&&"IntersectionObserver" in window){
  var els=[].slice.call(document.querySelectorAll(".card,.proj,.hl,.sechead,.stripcard,.quote figure,.toolkit,.hhead"));
  els.forEach(function(e){e.classList.add("rv")});
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){var e=en.target,i=e.parentElement?[].indexOf.call(e.parentElement.children,e):0;e.style.transitionDelay=(Math.min(i,7)*70)+"ms";e.classList.add("in");io.unobserve(e);}})},{rootMargin:"0px 0px -6% 0px"});
  els.forEach(function(e){io.observe(e)});
  setTimeout(function(){els.forEach(function(e){if(!e.classList.contains("in")&&e.getBoundingClientRect().top<innerHeight)e.classList.add("in")})},1200);
 }
 function count(el){var txt=el.textContent.trim(),m=/^(\d+)(.*)$/.exec(txt);if(!m||RM)return;var n=+m[1],suf=m[2],t0=null;function step(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/1300),e=1-Math.pow(1-p,3);el.textContent=Math.round(n*e)+suf;if(p<1)requestAnimationFrame(step);}el.textContent="0"+suf;requestAnimationFrame(step);}
 var stats=[].slice.call(document.querySelectorAll(".stat b"));
 if("IntersectionObserver" in window){var so=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){count(en.target);so.unobserve(en.target);}})},{threshold:.6});stats.forEach(function(s){so.observe(s)});}
 if(!RM&&window.matchMedia&&matchMedia("(hover:hover) and (pointer:fine)").matches){
  [].forEach.call(document.querySelectorAll(".proj,.hl"),function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(900px) rotateY("+(x*9).toFixed(2)+"deg) rotateX("+(-y*9).toFixed(2)+"deg) translateY(-4px)";});c.addEventListener("pointerleave",function(){c.style.transform=""});});
 }
})();

/* v10 index */
function buildIndex(){var B=document.getElementById("ixBody");if(!B||B.dataset.done)return;var h="",n=0,docs=0,seen={};
 S.forEach(function(s){h+='<section class="ixsec"><h3><span class="ixnum">'+s[0]+'</span>'+esc(s[1])+'</h3>';
  s[3].forEach(function(b){h+='<div class="ixgrp"><h4 class="ixbr">'+esc(b[0])+'</h4><table class="ixt"><tbody>';
   b[1].forEach(function(it){var ex=it[3]||{},lv=ex.lv||"sch";it[2].forEach(function(e,i){n++;var k=e[2],x=k&&EV[k],md="",lab="—";
     if(ex.rec){md="rec";lab="Open"}else if(e[3]){md="pop";k=e[3];lab="Read"}else if(ex.pop){md="pop";k=ex.pop;lab="Summary"}else if(x&&x.i.length){md="ev";lab="View";if(!seen[k]){seen[k]=1;docs+=x.i.length;}}else if(x){md="evs";lab="Summary"}
     h+='<tr data-s="'+esc((it[0]+" "+e[0]+" "+e[1]+" "+b[0]+" "+s[1]).toLowerCase())+'"><td class="ixn">'+(i===0?esc(it[0]):'<span class="ixc">'+esc(it[0])+'</span>')+'</td><td class="ixy">'+esc(e[0])+'</td><td class="ixr">'+esc(e[1])+'</td><td class="ixl">'+(lv==="intl"?'<span class="lvtag intl">International</span>':lv==="nat"?'<span class="lvtag nat">National</span>':'')+'</td><td class="ixa">'+(md?'<button type="button" class="ixb" data-ix="'+esc(k)+'" data-md="'+md+'" data-y="'+esc(e[0])+'">'+lab+'</button>':'<span class="ixd">—</span>')+'</td></tr>';});});
   h+='</tbody></table></div>';});h+='</section>';});
 B.innerHTML=h;B.dataset.done="1";document.getElementById("ixSub").textContent=n+" entries across "+S.length+" sections, with "+docs+" attached documents. Select View to open any document.";}
document.addEventListener("click",function(e){var t=e.target.closest("[data-index],[data-ix]");if(!t)return;e.preventDefault();
 if(t.hasAttribute("data-index")){buildIndex();openScreen(document.getElementById("indexs"));var q=document.getElementById("ixq");if(q)q.focus();return;}
 var k=t.getAttribute("data-ix"),md=t.getAttribute("data-md");
 if(md==="ev")openKey(k,t.getAttribute("data-y")||"");else if(md==="evs")showSummary(k);else if(md==="pop"){var p=P[k];if(p)showPopObj(p);}else if(md==="rec")openScreen(document.getElementById("record"));});
(function(){var q=document.getElementById("ixq");if(!q)return;q.addEventListener("input",function(){var s=q.value.trim().toLowerCase();[].forEach.call(document.querySelectorAll("#ixBody tr"),function(r){r.hidden=!!s&&r.getAttribute("data-s").indexOf(s)<0});[].forEach.call(document.querySelectorAll("#ixBody .ixgrp"),function(g){g.hidden=![].some.call(g.querySelectorAll("tr"),function(r){return !r.hidden})});[].forEach.call(document.querySelectorAll("#ixBody .ixsec"),function(c){c.hidden=![].some.call(c.querySelectorAll(".ixgrp"),function(g){return !g.hidden})});});})();
