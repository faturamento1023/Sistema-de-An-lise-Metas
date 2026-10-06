const YEAR=2026;
const START=new Date("2026-10-06T00:00:00-03:00");
const FEAST=new Date("2026-10-15T00:00:00-03:00");

const IMAGES=[
"https://commons.wikimedia.org/wiki/Special:FilePath/SantaTeresa.jpg",
"https://commons.wikimedia.org/wiki/Special:FilePath/Peter%20Paul%20Rubens%20166.jpg",
"https://commons.wikimedia.org/wiki/Special:FilePath/Ecstasy%20of%20Saint%20Teresa%20September%202015-2a.jpg",
"https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Teresa%2C%20Doutora%20M%C3%ADstica%2C%20inspirada%20pelo%20Esp%C3%ADrito%20Santo%20%28c.%201672%29%20-%20Josefa%20de%20%C3%93bidos%20%28Igreja%20Matriz%2C%20Cascais%29.png"
];

const DAYS=[
{
title:"Vida de Santa Teresa de Jesus",
meditation:"Teresa cresceu em um lar cristão, aprendeu cedo a rezar e a olhar para a vida dos santos com desejo de pertencer inteiramente a Deus. Sua caminhada, porém, não foi uma linha reta: conheceu distrações, vaidades, dúvidas e recomeços. É justamente aí que sua história se torna próxima da nossa. Deus não desistiu dela; chamou-a de novo, com paciência, até que Teresa se deixou alcançar por esse amor. Neste primeiro dia, não é preciso apresentar a Deus uma vida perfeita. Basta abrir a porta do coração e permitir que Ele nos encontre como estamos.",
questions:["Em que parte da minha vida Deus está me chamando a recomeçar?","Tenho permitido que a misericórdia de Deus toque aquilo que ainda escondo ou adio?"],
prayer:"Santa Teresa de Jesus, que aprendestes a voltar o coração para Deus em meio às lutas e recomeços, intercedei por mim. Que eu reconheça o amor que me procura, responda com sinceridade ao chamado do Senhor e deixe que Ele transforme o que ainda precisa ser renovado em mim. Amém."
},
{
title:"A dor como caminho para o encontro com Deus",
meditation:"A enfermidade e as limitações fizeram parte da vida de Teresa. Ela não buscou o sofrimento, mas aprendeu a não desperdiçá-lo: levou suas dores para a oração e descobriu que, mesmo na fragilidade, Deus permanecia perto. A fé cristã não transforma a dor em algo bom por si mesma; transforma a solidão da dor em encontro. Hoje, apresente ao Senhor aquilo que pesa: uma preocupação, uma perda, um medo, uma espera. Peça a graça de não caminhar sozinho e de perceber a presença de Cristo justamente onde suas forças parecem menores.",
questions:["Qual dor ou preocupação preciso colocar com mais confiança nas mãos de Deus?","Consigo pedir ajuda e acolher a presença de Deus sem exigir compreender tudo agora?"],
prayer:"Santa Teresa d’Ávila, que encontrastes o Senhor também nos dias de enfermidade e fraqueza, ajudai-me a não perder a esperança nas horas difíceis. Alcançai-me confiança para oferecer a Deus minhas dores e coragem para continuar servindo com amor, um dia de cada vez. Amém."
},
{
title:"Batalha entre Deus e o mundo",
meditation:"Teresa conheceu por muitos anos a tensão entre querer pertencer a Deus e, ao mesmo tempo, conservar apegos que a afastavam d’Ele. Sua resposta não foi desânimo, mas perseverança. A vida espiritual também passa por escolhas concretas: aquilo que alimentamos cresce em nós. Hoje, olhe com sinceridade para os hábitos, distrações e desejos que ocupam espaço demais no coração. Não se trata de desprezar o mundo, mas de ordenar os afetos para que nada ocupe o lugar de Deus e para que a liberdade seja usada no amor.",
questions:["O que hoje ocupa em mim um espaço que deveria pertencer a Deus?","Que escolha concreta posso fazer para servir mais e buscar menos a aprovação ou o conforto?"],
prayer:"Santa Teresa de Jesus, que perseverastes quando o coração se dividia entre Deus e tantas distrações, ajudai-me a escolher o que conduz ao amor verdadeiro. Que eu sirva a Cristo com liberdade, sem buscar recompensa, e encontre n’Ele força para vencer os apegos que me afastam do bem. Amém."
},
{
title:"A Cruz, sinal do amor a Deus",
meditation:"A cruz esteve no centro da contemplação de Teresa porque nela ela reconhecia o amor de Cristo levado até o fim. Abraçar a própria cruz não significa procurar sofrimento nem aceitar injustiças em silêncio; significa permanecer unido a Jesus quando amar custa, quando perdoar exige esforço e quando ser fiel parece pesado. Contemplar o Crucificado nos lembra que a última palavra não é a dor, mas a Ressurreição. Hoje, coloque diante de Jesus a cruz que você carrega e peça a graça de atravessá-la com esperança.",
questions:["Qual é a cruz concreta que mais pesa em mim neste momento?","Como posso carregá-la sem perder a caridade, a esperança e o cuidado comigo e com os outros?"],
prayer:"Santa Teresa d’Ávila, que contemplastes com amor a Paixão de Cristo, ensinai-me a permanecer junto de Jesus nos momentos difíceis. Que eu não fuja da fidelidade por medo do sacrifício e que, em toda cruz, conserve a certeza de que o amor de Deus é maior que a dor. Amém."
},
{
title:"Pobreza",
meditation:"Para Teresa, a pobreza era liberdade: não deixar que as coisas possuíssem o coração. Ela desejou uma vida simples, confiada à providência, na qual Deus fosse o verdadeiro tesouro. Essa pobreza pode ser vivida por qualquer pessoa: usar os bens com gratidão, evitar o excesso, partilhar, desapegar-se da necessidade de controlar tudo e não medir a própria dignidade pelo que possui. Hoje, pergunte-se do que seria possível abrir mão para viver com mais leveza, generosidade e confiança.",
questions:["Há algum bem, status, hábito ou segurança ao qual estou excessivamente apegado?","O que posso partilhar ou simplificar concretamente nesta semana?"],
prayer:"Santa Teresa de Jesus, que escolhestes a simplicidade para ter o coração mais livre para Deus, alcançai-me a graça do desapego. Que eu use com sabedoria o que recebi, partilhe com generosidade e encontre no Senhor a segurança que nenhum bem deste mundo pode oferecer. Amém."
},
{
title:"O amor a Deus e aos irmãos",
meditation:"Teresa insistia que o amor a Deus precisa aparecer no modo como tratamos as pessoas. A oração verdadeira não nos fecha em nós mesmos: torna-nos mais pacientes, disponíveis, sinceros e capazes de servir. É fácil amar uma ideia de humanidade; mais difícil é amar a pessoa concreta, com limites e diferenças, que está diante de nós. Hoje, peça a Deus um amor menos baseado em simpatia e mais parecido com o amor de Cristo: um amor que escuta, corrige com caridade, perdoa e não contabiliza vantagens.",
questions:["Existe alguém de quem eu esteja me afastando por orgulho, indiferença ou mágoa?","Que gesto concreto de caridade posso realizar hoje sem esperar nada em troca?"],
prayer:"Santa Teresa de Jesus, ensinai-me a reconhecer o Senhor nos irmãos. Livrai meu coração do orgulho, da indiferença e do egoísmo; alcançai-me um amor sincero, paciente e concreto, capaz de servir sem fazer contas e de perdoar sem alimentar ressentimentos. Amém."
},
{
title:"Oração — encontro com o Amigo íntimo",
meditation:"Uma das maiores heranças de Teresa é compreender a oração como amizade. Rezar é permanecer com Aquele que sabemos que nos ama. Nem todo encontro será cheio de emoção; haverá distração, cansaço e silêncio. Ainda assim, a amizade cresce pela presença fiel. Hoje, não tente produzir sentimentos. Reserve alguns minutos para estar diante de Jesus com simplicidade. Fale do que vive, escute em silêncio e, se faltarem palavras, permaneça. Deus não exige desempenho; deseja verdade e confiança.",
questions:["Minha oração tem sido conversa sincera com Deus ou apenas obrigação?","Consigo permanecer alguns minutos em silêncio sem fugir imediatamente para distrações?"],
prayer:"Santa Teresa d’Ávila, mestra de oração, conduzi-me ao encontro íntimo com Jesus. Ensinai-me a rezar com verdade, a permanecer quando não sinto nada e a confiar que o Senhor está presente. Que minha oração se torne amizade fiel e transforme minha maneira de viver. Amém."
},
{
title:"Matrimônio espiritual",
meditation:"Teresa descreveu a união com Deus com a imagem de uma entrega profunda, em que a pessoa já não vive apenas para si, mas deseja que toda a vida pertença ao Senhor. Não se trata de fugir da realidade; ao contrário, quanto mais unida a Deus, mais Teresa se tornou ativa, corajosa e capaz de servir. Este dia nos convida a perguntar o que ainda reservamos somente para nós: planos, medos, afetos, controle. A união com Deus amadurece quando dizemos, de verdade: Senhor, que a minha vida seja Tua.",
questions:["O que ainda tenho dificuldade de entregar completamente a Deus?","Minha intimidade com Deus me torna mais disponível para amar e servir na vida concreta?"],
prayer:"Santa Teresa de Jesus, que desejastes pertencer inteiramente ao Senhor, ajudai-me a entregar a Deus meu coração, meus planos e minha vontade. Que nada criado ocupe o lugar do Criador e que minha união com Cristo se manifeste em uma vida mais generosa, fiel e disponível. Amém."
},
{
title:"Maria, Mãe das Carmelitas",
meditation:"No Carmelo, Teresa encontrou em Maria uma mãe, modelo e presença protetora. Olhar para Nossa Senhora é aprender a acolher a Palavra, guardar Deus no coração e dizer sim mesmo quando o caminho ainda não está completamente claro. Ao concluir a novena, confiamos a Maria os frutos destes nove dias e pedimos que ela nos leve sempre para Jesus. A devoção mariana não termina nela: sua missão é apontar para o Filho e nos ensinar a fazer tudo o que Ele disser.",
questions:["Tenho recorrido a Maria como mãe e companheira no caminho para Jesus?","Que fruto desta novena desejo conservar depois do nono dia?"],
prayer:"Santa Teresa d’Ávila, filha do Carmelo e devota da Virgem Maria, ensinai-me a caminhar com Nossa Senhora até Jesus. Que eu encontre nela consolo, direção e exemplo de fidelidade, e que minha vida reflita a luz de Cristo nas escolhas de cada dia. Amém."
}
];

const COMMON={
"Pai-Nosso":"Pai nosso que estais nos céus, santificado seja o vosso nome; venha a nós o vosso Reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
"Ave-Maria":"Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
"Glória ao Pai":"Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém."
};

function spDate(){
  var parts=new Intl.DateTimeFormat("en-CA",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
  var o={};parts.forEach(function(p){o[p.type]=p.value});
  return new Date(o.year+"-"+o.month+"-"+o.day+"T12:00:00-03:00");
}
function idx(date){return Math.floor((date-START)/86400000)}
function fmt(date){return new Intl.DateTimeFormat("pt-BR",{timeZone:"America/Sao_Paulo",day:"numeric",month:"long",year:"numeric"}).format(date)}
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function toast(msg){var t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(function(){t.classList.remove("show")},2200)}
function done(){try{return JSON.parse(localStorage.getItem("teresaDone")||"[]")}catch(e){return []}}
function saveDone(v){localStorage.setItem("teresaDone",JSON.stringify(v))}

var TODAY=spDate();
var REAL=idx(TODAY);
var SELECTED=Math.min(Math.max(REAL,0),8);
if(REAL>8)SELECTED=8;

function unlocked(i){return REAL>=i||REAL>8}

function renderStatus(){
  var d=done();
  document.getElementById("progress").style.width=Math.round(d.length/9*100)+"%";
  document.getElementById("doneCount").textContent=d.length+" de 9";
  if(REAL<0){
    document.getElementById("todayTitle").textContent="A novena começa em "+fmt(START);
    document.getElementById("todaySub").textContent="Volte aqui no dia 6 de outubro.";
  }else if(REAL<=8){
    document.getElementById("todayTitle").textContent="Hoje é o "+(REAL+1)+"º dia da novena";
    document.getElementById("todaySub").textContent=fmt(TODAY)+" • "+DAYS[REAL].title;
  }else{
    document.getElementById("todayTitle").textContent="A novena de 2026 foi concluída";
    document.getElementById("todaySub").textContent="Todos os nove dias permanecem disponíveis.";
  }
  var left=Math.ceil((FEAST-TODAY)/86400000);
  document.getElementById("countdown").textContent=left>1?left+" dias":left===1?"amanhã":left===0?"é hoje ✨":"concluída";
}

function renderDays(){
  var nav=document.getElementById("days");nav.innerHTML="";
  var d=done();
  for(var i=0;i<9;i++){
    var b=document.createElement("button");
    b.className="day"+(i===SELECTED?" active":"")+(d.indexOf(i)>=0?" done":"");
    b.disabled=!unlocked(i);
    b.dataset.i=i;
    b.innerHTML="<b>Dia "+(i+1)+(d.indexOf(i)>=0?" ✓":"")+"</b><small>"+String(6+i).padStart(2,"0")+"/10"+(!unlocked(i)?" • 🔒":"")+"</small>";
    b.addEventListener("click",function(){SELECTED=Number(this.dataset.i);render();document.getElementById("card").scrollIntoView({behavior:"smooth",block:"start"})});
    nav.appendChild(b);
  }
}

function prayerDetails(){
  var out="";
  Object.keys(COMMON).forEach(function(k){out+="<details><summary>"+k+"</summary><p>"+COMMON[k]+"</p></details>"});
  return out;
}

function renderCard(){
  var card=document.getElementById("card");
  if(!unlocked(SELECTED)){
    var date=new Date(START.getTime()+SELECTED*86400000);
    card.innerHTML="<div class='locked'><div class='lock'>🔒</div><h2>Este dia ainda não chegou</h2><p>O "+(SELECTED+1)+"º dia será liberado automaticamente em <strong>"+fmt(date)+"</strong>.</p></div>";
    return;
  }
  var d=DAYS[SELECTED],date=new Date(START.getTime()+SELECTED*86400000),isDone=done().indexOf(SELECTED)>=0;
  var qs="";
  d.questions.forEach(function(q,n){qs+="<div class='reflect'><strong>"+(n+1)+".</strong> "+q+"</div>"});
  card.innerHTML=
    "<div class='visual'><img src='"+IMAGES[SELECTED%IMAGES.length]+"' alt='Arte histórica relacionada a Santa Teresa d\'Ávila'><div class='vtitle'><span>"+(SELECTED+1)+"º dia • "+fmt(date)+"</span><h2>"+d.title+"</h2></div></div>"+
    "<div class='content'>"+
      "<section class='section'><h3>Comece</h3><p>Em nome do Pai, do Filho e do Espírito Santo. Amém.</p><p>Apresente em silêncio a intenção que deseja confiar ao Senhor neste dia.</p></section>"+
      "<section class='section'><h3>Meditação</h3><p>"+d.meditation+"</p></section>"+
      "<section class='section'><h3>Para refletir</h3>"+qs+"</section>"+
      "<section class='section'><h3>Oração do dia</h3><div class='prayer'>"+d.prayer+"</div></section>"+
      "<section class='section'><h3>Orações finais</h3><p>Reze um Pai-Nosso, uma Ave-Maria e um Glória ao Pai. Depois conclua: <strong>Santa Teresa d’Ávila, rogai por nós.</strong></p>"+prayerDetails()+"</section>"+
      "<section class='section'><div class='buttons'><button id='doneBtn' class='primary'>"+(isDone?"✓ Dia rezado":"Marcar como rezado")+"</button><button id='listenBtn' class='secondary'>🔊 Ouvir este dia</button><button id='focusBtn' class='secondary'>☼ Modo oração</button></div></section>"+
    "</div>";
  document.getElementById("doneBtn").onclick=toggleDone;
  document.getElementById("listenBtn").onclick=listen;
  document.getElementById("focusBtn").onclick=function(){document.body.classList.toggle("focus");toast(document.body.classList.contains("focus")?"Modo oração ativado":"Modo oração encerrado")};
}

function toggleDone(){
  var d=done(),p=d.indexOf(SELECTED);
  if(p>=0){d.splice(p,1);toast("Marcação removida")}else{d.push(SELECTED);toast("Dia marcado como rezado 🙏")}
  saveDone(d);render();
}

function listen(){
  if(!("speechSynthesis" in window)){toast("Leitura em voz alta não disponível neste navegador");return}
  speechSynthesis.cancel();
  var d=DAYS[SELECTED];
  var text=(SELECTED+1)+"º dia. "+d.title+". "+d.meditation+". Reflexão. "+d.questions.join(". ")+". Oração. "+d.prayer+". Reze agora um Pai Nosso, uma Ave Maria e um Glória ao Pai. Santa Teresa de Ávila, rogai por nós.";
  var u=new SpeechSynthesisUtterance(text);u.lang="pt-BR";u.rate=.93;speechSynthesis.speak(u);toast("Leitura iniciada");
}

function render(){renderStatus();renderDays();renderCard()}

var intention=document.getElementById("intention");
intention.value=localStorage.getItem("teresaIntention")||"";
intention.addEventListener("input",function(){localStorage.setItem("teresaIntention",this.value)});

document.getElementById("theme").onclick=function(){
  var dark=document.documentElement.dataset.theme==="dark";
  document.documentElement.dataset.theme=dark?"":"dark";
  localStorage.setItem("teresaTheme",dark?"light":"dark");
};
if(localStorage.getItem("teresaTheme")==="dark")document.documentElement.dataset.theme="dark";

document.getElementById("share").onclick=async function(){
  var data={title:"Novena de Santa Teresa d’Ávila",text:"Reze comigo a Novena de Santa Teresa d’Ávila, de 6 a 14 de outubro.",url:location.href};
  try{
    if(navigator.share)await navigator.share(data);
    else{await navigator.clipboard.writeText(location.href);toast("Link copiado")}
  }catch(e){}
};

window.addEventListener("keydown",function(e){if(e.key==="Escape"&&document.body.classList.contains("focus")){document.body.classList.remove("focus");toast("Modo oração encerrado")}});
render();
