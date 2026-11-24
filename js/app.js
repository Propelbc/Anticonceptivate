const M=[
{n:"Implante",t:99.9,p:99.9,tags:["larga","hormonal"],d:"Varilla bajo la piel del brazo. Dura hasta 3–5 años según el modelo."},
{n:"DIU hormonal",t:99.7,p:99.8,tags:["larga","hormonal"],d:"Dispositivo en el útero con hormona. Dura entre 3 y 8 años según el modelo y puede reducir el sangrado."},
{n:"DIU de cobre",t:99.2,p:99.4,tags:["larga"],d:"Sin hormonas. Dura hasta 10 años. Puede aumentar el sangrado al inicio."},
{n:"Vasectomía",t:99.8,p:99.9,tags:["perm"],d:"Procedimiento menor para quienes tienen testículos. Se considera permanente y requiere un análisis de confirmación."},
{n:"Ligadura de trompas",t:99.5,p:99.5,tags:["perm"],d:"Cirugía para quienes tienen útero. Se considera permanente."},
{n:"Inyección",t:96,p:99.8,tags:["hormonal"],d:"Se aplica cada 1 a 3 meses según el tipo. Requiere acudir a tiempo a cada dosis."},
{n:"Pastilla",t:93,p:99,tags:["hormonal"],d:"Se toma todos los días. Olvidos y vómito o diarrea pueden reducir su efecto."},
{n:"Parche o anillo",t:93,p:99,tags:["hormonal"],d:"Liberan hormonas por la piel o la vagina. Se cambian semanal o mensualmente."},
{n:"Condón externo",t:87,p:98,tags:["barrera","its"],d:"Protege del embarazo y de la mayoría de ITS. Es el único método sin receta que cubre ambos."},
{n:"Condón interno",t:79,p:95,tags:["barrera","its"],d:"Se coloca dentro de la vagina o el ano. Protege del embarazo y de ITS."},
{n:"Retiro",t:80,p:96,tags:["natural"],d:"Depende totalmente del control en el momento. No protege de ITS."},
{n:"Calendario o días fértiles",t:76,p:95,tags:["natural"],d:"Requiere registrar el ciclo con constancia. Menos confiable si el ciclo es irregular."}
];
const F=[["todos","Todos"],["its","Protegen de ITS"],["larga","Larga duración"],["hormonal","Con hormonas"],["barrera","De barrera"],["perm","Permanentes"]];
let cur="todos";
const chips=document.getElementById("chips"),lista=document.getElementById("lista");
function render(){
  chips.innerHTML="";
  F.forEach(([k,l])=>{const b=document.createElement("button");b.className="chip";b.textContent=l;b.setAttribute("aria-pressed",k===cur);b.onclick=()=>{cur=k;render()};chips.appendChild(b)});
  lista.innerHTML=M.filter(m=>cur==="todos"||m.tags.includes(cur)).map(m=>`<article class="m"><div class="m-top"><h3>${m.n}</h3><span class="badge ${m.tags.includes("its")?"":"no"}">${m.tags.includes("its")?"Protege de ITS":"No protege de ITS"}</span></div><div class="bar" role="img" aria-label="Efectividad típica ${m.t}%, perfecta ${m.p}%"><i style="width:${m.p}%"></i><b style="width:${m.t}%"></b></div><div class="nums">Uso típico ${m.t}% · Uso perfecto ${m.p}%</div><p>${m.d}</p></article>`).join("");
}
render();
const DATA={
mitos:{label:"Mitos y realidades",items:[
["“En la primera vez no hay riesgo de embarazo.”","<b>Falso.</b> Se puede quedar embarazada en cualquier relación sin protección, incluida la primera."],
["“Retirarse a tiempo es suficiente.”","<b>Falso.</b> Puede haber líquido preeyaculatorio con espermatozoides y el control falla con frecuencia: en uso típico, alrededor de 2 de cada 10 personas se embarazan en un año."],
["“Se nota cuando alguien tiene una ITS.”","<b>Falso.</b> Muchas ITS no dan síntomas durante meses o años. La única forma de saber es hacerse la prueba."],
["“La pastilla anticonceptiva también protege de ITS.”","<b>Falso.</b> Previene el embarazo, pero no las infecciones. Para eso necesitas condón."],
["“Dos condones juntos protegen más.”","<b>Falso.</b> La fricción entre ellos aumenta el riesgo de que se rompan. Usa uno solo y uno nuevo cada vez."],
["“El DIU es solo para quienes ya tuvieron hijos.”","<b>Falso.</b> Es seguro y está indicado también para personas que no han tenido hijos."],
["“El VIH se transmite por abrazos o compartir un vaso.”","<b>Falso.</b> No se transmite por contacto cotidiano. Se transmite por sangre, fluidos sexuales y de madre a hijo durante el embarazo, parto o lactancia."]]},
condon:{label:"Cómo usar el condón",alt:true,items:[
["Revisa el empaque","Checa la fecha de caducidad y que el empaque no esté dañado ni reseco. Si está roto, usa otro.","1"],
["Ábrelo con los dedos","Nunca con los dientes ni con tijeras. Cuida que las uñas o los anillos no lo rasguen.","2"],
["Colócalo antes de cualquier contacto","Con el pene erecto, pellizca la punta para sacar el aire y deja ese espacio libre. Debe desenrollarse con facilidad; si no, está al revés: tíralo y usa uno nuevo.","3"],
["Desenróllalo hasta la base","Si usas lubricante con condón de látex, que sea base agua o silicona. Los productos con aceite lo dañan.","4"],
["Retíralo con cuidado","Después de eyacular, sostén la base y sácalo antes de que se pierda la erección para que no se salga.","5"],
["Anúdalo y tíralo a la basura","No al inodoro. Usa un condón nuevo en cada relación y en cada cambio de tipo de sexo (vaginal, anal u oral).","6"]]},
donde:{label:"Dónde acudir en Cancún",alt:true,items:[
["CAPASITS Cancún (UNEME)","Hacen pruebas rápidas de VIH, sífilis y hepatitis C, gratuitas y confidenciales, además de consejería y tratamiento. Está en la Región 102, sobre la Av. Francisco I. Madero (Ruta 4), y atiende de lunes a viernes."],
["Centros de salud de la Secretaría de Salud","Las pruebas rápidas de VIH son gratuitas en las unidades de salud de la Jurisdicción Sanitaria 2, que cubre Cancún, y también entregan condones. Acude al más cercano a tu casa."],
["Tu seguro facultativo del IMSS","Como estudiante de la UQROO tienes seguro facultativo del IMSS, con atención médica gratuita durante tu carrera. Pide en tu clínica asignada consulta de planificación familiar y pruebas de ITS."],
["Si hubo una exposición reciente","Ve de inmediato a urgencias, por ejemplo al Hospital General de Cancún «Dr. Jesús Kumate Rodríguez», o al CAPASITS y pregunta por la profilaxis posexposición al VIH, que debe iniciar en las primeras 72 horas. La anticoncepción de emergencia tiene los plazos de la sección de métodos."]]}
};
function carousel(el){
  const d=DATA[el.dataset.car],n=d.items.length;
  el.setAttribute("role","region");el.setAttribute("aria-roledescription","carrusel");el.setAttribute("aria-label",d.label);
  el.innerHTML=`<div class="track" tabindex="0">${d.items.map((s,i)=>`<article class="slide${d.alt?" alt":""}" aria-label="${i+1} de ${n}">${s[2]?`<div class="num" aria-hidden="true">${s[2]}</div>`:""}<div class="tx"><div class="myth">${s[0]}</div><div class="fact">${s[1]}</div></div></article>`).join("")}</div><div class="ctrl"><button class="arrow prev" aria-label="Anterior">‹</button><div class="dots">${d.items.map((_,i)=>`<button class="dot" aria-label="Ir a la diapositiva ${i+1}" data-i="${i}"></button>`).join("")}</div><button class="arrow next" aria-label="Siguiente">›</button></div>`;
  const track=el.querySelector(".track"),dots=el.querySelector(".dots");
  const idx=()=>Math.round(track.scrollLeft/(track.clientWidth+14));
  const go=i=>{i=Math.max(0,Math.min(n-1,i));track.scrollTo({left:i*(track.clientWidth+14),behavior:"smooth"})};
  const mark=()=>{const c=idx();[...dots.children].forEach((x,i)=>x.setAttribute("aria-current",i===c))};
  track.addEventListener("scroll",mark,{passive:true});
  dots.onclick=e=>{const b=e.target.closest(".dot");if(b)go(+b.dataset.i)};
  el.querySelector(".prev").onclick=()=>go(idx()-1);
  el.querySelector(".next").onclick=()=>go(idx()+1);
  track.addEventListener("keydown",e=>{if(e.key==="ArrowRight")go(idx()+1);if(e.key==="ArrowLeft")go(idx()-1)});
  mark();
}
document.querySelectorAll("[data-car]").forEach(carousel);
const intro=document.getElementById("intro");
document.body.style.overflow="hidden";
function endIntro(){if(intro.isConnected){intro.remove();document.body.style.overflow=""}}
intro.addEventListener("animationend",e=>{if(e.target===intro)endIntro()});
document.getElementById("skip").onclick=endIntro;
setTimeout(endIntro,8000);
