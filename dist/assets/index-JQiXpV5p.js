var ao=s=>{throw TypeError(s)};var ze=(s,e,t)=>e.has(s)?ao("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);function lo(s,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in s)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(s,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const co=[{r:3,c:6,id:"home-1",name:"Home 1 Base (East)"},{r:0,c:3,id:"home-2",name:"Home 2 Base (North)"},{r:3,c:0,id:"home-3",name:"Home 3 Base (West)"},{r:6,c:3,id:"home-4",name:"Home 4 Base (South)"},{r:1,c:1,id:"nw-ghatta",name:"North-West Safe Katta"},{r:1,c:5,id:"ne-ghatta",name:"North-East Safe Katta"},{r:5,c:1,id:"sw-ghatta",name:"South-West Safe Katta"},{r:5,c:5,id:"se-ghatta",name:"South-East Safe Katta"},{r:3,c:3,id:"center-sanctum",name:"Happy Home Sanctum"}];function Qe(s,e){return co.some(t=>t.r===s&&t.c===e)}function uo(s,e){return s===3&&e===3}const je=[{r:3,c:6,step:0,safe:!0,label:"Home 1"},{r:2,c:6,step:1},{r:1,c:6,step:2},{r:0,c:6,step:3},{r:0,c:5,step:4},{r:0,c:4,step:5},{r:0,c:3,step:6,safe:!0,label:"Home 2"},{r:0,c:2,step:7},{r:0,c:1,step:8},{r:0,c:0,step:9},{r:1,c:0,step:10},{r:2,c:0,step:11},{r:3,c:0,step:12,safe:!0,label:"Home 3"},{r:4,c:0,step:13},{r:5,c:0,step:14},{r:6,c:0,step:15},{r:6,c:1,step:16},{r:6,c:2,step:17},{r:6,c:3,step:18,safe:!0,label:"Home 4"},{r:6,c:4,step:19},{r:6,c:5,step:20},{r:6,c:6,step:21},{r:5,c:6,step:22},{r:4,c:6,step:23,isGate:!0},{r:5,c:5,step:24,safe:!0},{r:5,c:4,step:25},{r:5,c:3,step:26},{r:5,c:2,step:27},{r:5,c:1,step:28,safe:!0},{r:4,c:1,step:29},{r:3,c:1,step:30},{r:2,c:1,step:31},{r:1,c:1,step:32,safe:!0},{r:1,c:2,step:33},{r:1,c:3,step:34},{r:1,c:4,step:35},{r:1,c:5,step:36,safe:!0},{r:2,c:5,step:37},{r:3,c:5,step:38},{r:4,c:5,step:39},{r:4,c:4,step:40},{r:4,c:3,step:41},{r:4,c:2,step:42},{r:3,c:2,step:43},{r:2,c:2,step:44},{r:2,c:3,step:45},{r:2,c:4,step:46},{r:3,c:4,step:47},{r:3,c:3,step:48,isCenter:!0,safe:!0,label:"Happy Home"}],ps=je.map((s,e)=>({...s,r:6-s.c,c:s.r,step:e,label:e===0?"Home 2":e===48?"Happy Home":s.label})),ho=je.map((s,e)=>({...s,r:6-s.r,c:6-s.c,step:e,label:e===0?"Home 3":e===48?"Happy Home":s.label})),po=je.map((s,e)=>({...s,r:s.c,c:6-s.r,step:e,label:e===0?"Home 4":e===48?"Happy Home":s.label}));function Me(s){const e=parseInt(s,10)||1;return{1:3,2:4,3:1,4:2}[e]||3}function mo(s,e="spiral"){return s===1?je:s===2?ps:s===3?ho:s===4?po:je}const ye={1:{r:3,c:6,name:"Home 1 Jail (East)"},2:{r:0,c:3,name:"Home 2 Jail (North)"},3:{r:3,c:0,name:"Home 3 Jail (West)"},4:{r:6,c:3,name:"Home 4 Jail (South)"},team1:{r:3,c:6,name:"Home 1 Jail (East)"},team2:{r:3,c:0,name:"Home 3 Jail (West)"},team3:{r:3,c:0,name:"Home 3 Jail (West)"},team4:{r:6,c:3,name:"Home 4 Jail (South)"}};je.slice(0,24);ps.slice(0,24);const Ti={1:{te:"Okkati",en:"One",isBonus:!0,releasesCoins:1},2:{te:"Rendu",en:"Two",isBonus:!1,releasesCoins:0},3:{te:"Moodu",en:"Three",isBonus:!1,releasesCoins:0},4:{te:"Naalugu",en:"Four",isBonus:!1,releasesCoins:0},5:{te:"Aidu",en:"Five",isBonus:!0,releasesCoins:5},6:{te:"Aaru",en:"Six",isBonus:!0,releasesCoins:6},12:{te:"Baara",en:"Twelve (Baara!)",isBonus:!0,releasesCoins:0}};class fo{constructor(){this.shells=[{id:0,isOpen:!0,rot:15,x:0,y:0},{id:1,isOpen:!0,rot:-25,x:0,y:0},{id:2,isOpen:!1,rot:40,x:0,y:0},{id:3,isOpen:!0,rot:-10,x:0,y:0},{id:4,isOpen:!1,rot:65,x:0,y:0},{id:5,isOpen:!0,rot:-50,x:0,y:0}]}roll(e=null){let t=0,n=0;e!==null?(n=e,t=n===12?0:n):(this.shells.forEach(o=>{o.isOpen=Math.random()<.48,o.isOpen&&t++,o.rot=Math.floor(Math.random()*360),o.x=(Math.random()-.5)*24,o.y=(Math.random()-.5)*16}),t===0?n=12:n=t),e!==null&&this.shells.forEach((o,r)=>{o.isOpen=r<t,o.rot=Math.floor(Math.random()*360),o.x=(Math.random()-.5)*24,o.y=(Math.random()-.5)*16});const i=Ti[n]||{te:`${n}`,en:`${n}`,isBonus:!1,releasesCoins:0};return{score:n,openCount:t,shells:this.shells.map(o=>({...o})),isBonus:i.isBonus,releasesCoins:i.releasesCoins,titleTe:i.te,titleEn:i.en}}rollDie(){const e=Math.floor(Math.random()*6)+1,t=e===1||e===5||e===6,n=Ti[e],i=n?n.releasesCoins:e===1||e===5||e===6?1:0;return{score:e,openCount:e,shells:[],isBonus:t,releasesCoins:i,titleTe:n.te,titleEn:n.en}}}class go{constructor(){this.ctx=null,this.muted=!1,this.initialized=!1}init(){if(!this.initialized&&!(typeof window>"u"))try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.initialized=!0)}catch(e){console.warn("Web Audio API not supported",e)}}toggleMute(){return this.muted=!this.muted,this.muted}playCowrieRoll(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=32+Math.floor(Math.random()*10);for(let n=0;n<t;n++){const i=n/t*1.85+(Math.random()*.04-.02),o=e+Math.max(0,i),r=this.ctx.createOscillator(),a=this.ctx.createGain(),l=this.ctx.createBiquadFilter(),c=2200+Math.random()*2600;r.type=Math.random()>.4?"triangle":"sine",r.frequency.setValueAtTime(c,o),r.frequency.exponentialRampToValueAtTime(c*.4,o+.035),l.type="bandpass",l.frequency.setValueAtTime(2800+Math.random()*1200,o),l.Q.setValueAtTime(4,o);const d=n>=t-4,u=d?.22*(.8+Math.random()*.4):(.05+n/t*.12)*(.8+Math.random()*.4);a.gain.setValueAtTime(u,o),a.gain.exponentialRampToValueAtTime(1e-4,o+(d?.06:.04)),r.connect(l),l.connect(a),a.connect(this.ctx.destination),r.start(o),r.stop(o+(d?.07:.045))}}playCoinStep(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(480,e),t.frequency.exponentialRampToValueAtTime(720,e+.04),t.frequency.exponentialRampToValueAtTime(320,e+.09),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.11)}playJailRelease(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const o=e+i*.05,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.1,o),a.gain.exponentialRampToValueAtTime(.001,o+.14),r.connect(a),a.connect(this.ctx.destination),r.start(o),r.stop(o+.15)})}playCapture(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(40,e+.25),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.26),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.28);const i=this.ctx.createBuffer(1,this.ctx.sampleRate*.15,this.ctx.sampleRate),o=i.getChannelData(0);for(let c=0;c<o.length;c++)o[c]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1500,e),a.Q.setValueAtTime(3,e);const l=this.ctx.createGain();l.gain.setValueAtTime(.25,e),l.gain.exponentialRampToValueAtTime(.001,e+.14),r.connect(a),a.connect(l),l.connect(this.ctx.destination),r.start(e),r.stop(e+.16)}playBonusRoll(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[587.33,739.99,880,1174.66].forEach((n,i)=>{const o=e+i*.04,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.09,o),a.gain.exponentialRampToValueAtTime(5e-4,o+.35),r.connect(a),a.connect(this.ctx.destination),r.start(o),r.stop(o+.36)})}playBaaraTwelve(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[440,554.37,659.25,880,1108.73,1318.51].forEach((n,i)=>{const o=e+i*.06,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.12,o),a.gain.exponentialRampToValueAtTime(.001,o+.5),r.connect(a),a.connect(this.ctx.destination),r.start(o),r.stop(o+.52)})}playVictory(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=[{f:523.25,d:.2},{f:659.25,d:.2},{f:783.99,d:.25},{f:1046.5,d:.5},{f:880,d:.2},{f:1046.5,d:.7}];let n=e;t.forEach(i=>{const o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(i.f,n),r.gain.setValueAtTime(.15,n),r.gain.exponentialRampToValueAtTime(.001,n+i.d*1.1),o.connect(r),r.connect(this.ctx.destination),o.start(n),o.stop(n+i.d*1.15),n+=i.d})}}const ie=new go,Q={WAITING_FOR_ROLL:"WAITING_FOR_ROLL",ROLLING:"ROLLING",CHOOSING_HOME:"CHOOSING_HOME",WAITING_FOR_MOVE:"WAITING_FOR_MOVE",ANIMATING_MOVE:"ANIMATING_MOVE",GAME_OVER:"GAME_OVER"};class bo{constructor(e={}){this.dice=new fo,this.diceMode=e.diceMode||"cowries",this.gameMode=e.gameMode||"2p",this.pathStyle=e.pathStyle||"spiral",this.requireKill=e.requireKill!==void 0?e.requireKill:!0,this.homesAssigned=e.homesAssigned!==void 0?e.homesAssigned:!1,this.team1Home=e.team1Home?parseInt(e.team1Home,10):1,this.team2Home=e.team2Home?parseInt(e.team2Home,10):Me(this.team1Home),this.pendingReleaseScore=null,this.onStateChange=e.onStateChange||(()=>{}),this.onLog=e.onLog||(()=>{}),this.onTurnChange=e.onTurnChange||(()=>{}),this.onBothGatesOpen=e.onBothGatesOpen||(()=>{}),this.onNeedHomeSelection=e.onNeedHomeSelection||null,this.localPlayerId=e.localPlayerId||1,this.isMultiplayer=e.isMultiplayer||!1,this.isHost=e.isHost!==void 0?e.isHost:!0,this.bothGatesPrompted=!1,this.initGame()}getTeamHome(e){return e===1?this.team1Home||1:this.team2Home||Me(this.team1Home||1)}getTeamPath(e){const t=this.getTeamHome(e);return mo(t,this.pathStyle)}initGame(e=null,t=null){this.bothGatesPrompted=!1,this.pendingReleaseScore=null,t!=null?(this.homesAssigned=!0,this.team1Home=parseInt(t,10)||1,this.team2Home=Me(this.team1Home)):(this.homesAssigned=!1,this.team1Home=1,this.team2Home=3),e&&Array.isArray(e)&&e.length>0?(this.players=e.map(o=>({...o})),this.gameMode=this.players.length>=4?"4p":"2p"):this.isMultiplayer?this.players=[{id:1,team:1,name:"Player 1",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2",avatar:"🦚",color:"#27ae60",isAI:!1}]:this.gameMode==="4p"?this.players=[{id:1,team:1,name:"Player 1",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Player 3",avatar:"🦁",color:"#d35400",isAI:!1},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]:this.players=[{id:1,team:1,name:"Player 1 (Team 1)",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2 (Opponent)",avatar:"🦚",color:"#27ae60",isAI:!0}];const n=ye[this.team1Home]||ye.team1,i=ye[this.team2Home]||ye.team2;this.coins=[];for(let o=1;o<=6;o++)this.coins.push({id:`t1_c${o}`,num:o,team:1,inJail:!0,stepIndex:-1,isFinished:!1,coord:{...n}}),this.coins.push({id:`t2_c${o}`,num:o,team:2,inJail:!0,stepIndex:-1,isFinished:!1,coord:{...i}});this.currentPlayerIndex=0,this.currentRoll=null,this.lastRoll=null,this.status=Q.WAITING_FOR_ROLL,this.validMoves=[],this.winner=null,this.team1Kills=0,this.team2Kills=0,this.stats={rollsCount:0,capturesCount:0,bonusTurnsCount:0,startTime:Date.now()},this.emitChange(),this.log("🎮 Game initialized! Welcome to Bharakhatta. Team 1 starts.")}getCurrentPlayer(){return this.players[this.currentPlayerIndex]}getCurrentTeam(){return this.getCurrentPlayer().team}getTeamCoins(e){return this.coins.filter(t=>t.team===e)}getCoinsAtCoord(e,t){return this.coins.filter(n=>!n.inJail&&!n.isFinished&&n.coord.r===e&&n.coord.c===t)}getJailCoins(e){return this.coins.filter(t=>t.team===e&&t.inJail)}getFinishedCoins(e){return this.coins.filter(t=>t.team===e&&t.isFinished)}roll(){if(this.status!==Q.WAITING_FOR_ROLL)return null;this.getCurrentPlayer(),this.status=Q.ROLLING,this.stats.rollsCount++,ie.playCowrieRoll(),this.emitChange();let e;return this.diceMode==="die"?e=this.dice.rollDie():e=this.dice.roll(),this.currentRoll=e,this.lastRoll=e,setTimeout(()=>{this.resolveRoll(e)},2e3),e}resolveRoll(e){const t=this.getCurrentPlayer(),n=t.team,i=e.score;this.lastRoll=e,e.score===12?ie.playBaaraTwelve():e.isBonus&&ie.playBonusRoll(),this.log(`🎲 ${t.name} rolled ${e.titleEn} (${i})! ${e.isBonus?"⭐ Bonus Turn Awarded!":""}`);const o=this.getJailCoins(n),r=i===1&&o.length>=1||i===5&&o.length>=5||i===6&&o.length===6;if(!this.homesAssigned&&r){const l=!t.isAI&&(!this.isMultiplayer||t.id===this.localPlayerId);if(this.onNeedHomeSelection&&l){this.status=Q.CHOOSING_HOME,this.pendingReleaseScore=i,this.emitChange(),this.onNeedHomeSelection({teamId:n,score:i,player:t});return}else{const c=n===2?2:1;this.assignHomes(n,c,i);return}}const a=this.getLegalMoves(n,i);if(this.validMoves=a,a.length===0){this.status=Q.WAITING_FOR_MOVE,this.emitChange(),this.log(`⚠️ No valid moves possible with roll of ${i}.`),e.isBonus?(this.stats.bonusTurnsCount++,this.log(`✨ Bonus roll allowed ${t.name} another roll!`),setTimeout(()=>{this.status=Q.WAITING_FOR_ROLL,this.currentRoll=null,this.validMoves=[],this.emitChange(),this.checkAITurn()},1200)):setTimeout(()=>{this.advanceTurn()},1200);return}this.status=Q.WAITING_FOR_MOVE,this.emitChange(),this.checkAITurn()}getLegalMoves(e,t){const n=[],i=this.getTeamCoins(e),o=this.getJailCoins(e),r=this.getTeamPath(e);let a=!1,l=0;t===1&&o.length>=1?(a=!0,l=1):t===5&&o.length>=5?(a=!0,l=5):t===6&&o.length===6&&(a=!0,l=6),a&&n.push({type:"RELEASE_JAIL",coin:o[0],count:l,description:`Release ${l} coin(s) from Jail to Home base`});const c=i.filter(u=>!u.inJail&&!u.isFinished),d=e===1?this.team1Kills>0:this.team2Kills>0;for(const u of c){const p=r.length-1;if(this.requireKill&&!d){if(u.stepIndex===23)continue;if(u.stepIndex<23){if(u.stepIndex+t>23)continue;if(u.stepIndex+t===23){const b=r[23];n.push({type:"MOVE_COIN",coin:u,fromStep:u.stepIndex,toStep:23,targetCoord:b,isCapture:this.checkWillCapture(e,b),isSafe:b.safe||Qe(b.r,b.c),description:`Advance coin #${u.num} to Step 23 (Gate 23! Opponent kill needed to enter inside 5/5 ring)`});continue}}}const f=u.stepIndex+t;if(f<p){const b=r[f],C=u.stepIndex<=23&&f>23;n.push({type:"MOVE_COIN",coin:u,fromStep:u.stepIndex,toStep:f,targetCoord:b,isCapture:this.checkWillCapture(e,b),isSafe:b.safe||Qe(b.r,b.c),description:C?`Advance coin #${u.num} into Inside 5/5 Ring (Step ${f})!`:`Move coin #${u.num} to (${b.r}, ${b.c})`})}else if(f===p){const b=r[p];n.push({type:"FINISH_COIN",coin:u,fromStep:u.stepIndex,toStep:p,targetCoord:b,description:`Goal! Coin #${u.num} enters the Center Sanctum (Final Home)!`})}}return n}checkWillCapture(e,t){if(Qe(t.r,t.c))return!1;const n=e===1?2:1;return this.getCoinsAtCoord(t.r,t.c).some(o=>o.team===n)}executeMove(e,t=!1,n=!1){if(!e||!t&&this.status!==Q.WAITING_FOR_MOVE)return;this.status=Q.ANIMATING_MOVE,this.validMoves=[],this.emitChange();const i=this.getCurrentPlayer(),o=i.team,r=this.getTeamPath(o);if(e.type==="RELEASE_JAIL"){const a=this.getJailCoins(o),l=e.count||1,c=r[0];ie.playJailRelease();for(let u=0;u<l&&u<a.length;u++){const p=a[u];p.inJail=!1,p.stepIndex=0,p.coord={r:c.r,c:c.c}}this.log(`🚪 ${i.name} released ${l} coin(s) from Jail onto Home Base!`);const d=this.currentRoll?this.currentRoll.isBonus:!1;this.finishMove(d)}else if(e.type==="MOVE_COIN"||e.type==="FINISH_COIN"){const a=e.coin&&e.coin.id&&this.coins.find(p=>p.id===e.coin.id)||e.coin,l=a.stepIndex,c=e.toStep,d=e.looped,u=()=>{a.stepIndex=c,a.coord={...e.targetCoord},e.type==="FINISH_COIN"&&(a.isFinished=!0,ie.playBaaraTwelve(),this.log(`🎉 Goal! ${i.name}'s Coin #${a.num} reached the Center Sanctum!`));let p=!1;if(!Qe(a.coord.r,a.coord.c)){const k=o===1?2:1,L=this.getCoinsAtCoord(a.coord.r,a.coord.c).filter(I=>I.team===k);L.length>0&&(p=!0,this.stats.capturesCount++,o===1?this.team1Kills++:this.team2Kills++,ie.playCapture(),L.forEach(I=>{I.inJail=!0,I.stepIndex=-1,I.coord={...I.team===1?ye[this.team1Home]||ye.team1:ye[this.team2Home]||ye.team2},this.log(`💥 Katta! ${i.name} killed Team ${k}'s Coin #${I.num}! Returned to Jail.`)}),this.log(`⚡ Katta strike earned ${i.name} a Bonus Turn! Inside 5/5 ring unlocked.`),this.team1Kills>=1&&this.team2Kills>=1&&!this.bothGatesPrompted&&(this.bothGatesPrompted=!0,this.log("⚔️ Both Home 1 and Home 2 have unlocked Gate 23!"),this.onBothGatesOpen&&this.onBothGatesOpen()))}const f=this.checkWinCondition(o),b=this.checkSquad5x5Win(o);if(f||b){const k=b&&!f?"SQUAD_5X5_COMPLETE":"CENTER_SANCTUM";this.winner={team:o,player:i,reason:k,stats:{...this.stats,durationSec:Math.round((Date.now()-this.stats.startTime)/1e3)}},this.status=Q.GAME_OVER,ie.playVictory(),k==="SQUAD_5X5_COMPLETE"?this.log(`🏆 ALL 6 COINS ENTERED 5/5 SQUAD! Team ${o} has no coins left in outer 7/7 zone! Team ${o} Wins!`):this.log(`🏆 GAME OVER! Team ${o} has won the game of Bharakhatta! Congratulations!`),this.emitChange();return}const T=(this.currentRoll?this.currentRoll.isBonus:!1)||p;this.finishMove(T)};n?u():this.animateCoinHop(a,r,l,c,d,u)}}animateCoinHop(e,t,n,i,o,r){const a=[];if(o){for(let d=n+1;d<=23;d++)a.push(d);for(let d=0;d<=i;d++)a.push(d)}else for(let d=n+1;d<=i;d++)a.push(d);if(a.length===0){r();return}const l=Math.max(70,Math.min(150,600/a.length)),c=()=>{if(a.length===0){r();return}const d=a.shift();e.coord={r:t[d].r,c:t[d].c},ie.playCoinStep(),this.emitChange(),setTimeout(c,l)};c()}finishMove(e){const t=this.getCurrentPlayer();this.currentRoll&&(this.lastRoll=this.currentRoll),e?(this.stats.bonusTurnsCount++,this.log(`✨ ${t.name} gets a BONUS TURN! Roll again.`),this.status=Q.WAITING_FOR_ROLL,this.currentRoll=null,this.validMoves=[],this.emitChange(),this.checkAITurn()):setTimeout(()=>{this.advanceTurn()},500)}advanceTurn(){this.currentPlayerIndex=(this.currentPlayerIndex+1)%this.players.length,this.currentRoll&&(this.lastRoll=this.currentRoll),this.currentRoll=null,this.validMoves=[],this.status=Q.WAITING_FOR_ROLL;const e=this.getCurrentPlayer();this.log(`👉 Turn: ${e.name} (Team ${e.team})`),this.emitChange(),this.onTurnChange&&this.onTurnChange(e),this.checkAITurn()}getBestLegalMove(){if(this.validMoves.length===0)return null;let e=this.validMoves[0],t=-999;for(const n of this.validMoves){let i=0;n.type==="FINISH_COIN"&&(i+=500),n.isCapture&&(i+=400),n.type==="RELEASE_JAIL"&&(i+=250+(n.count||1)*20),n.isSafe&&(i+=150),n.type==="MOVE_COIN"&&(i+=n.toStep),i>t&&(t=i,e=n)}return e}autoPlayTurn(){if(this.status===Q.WAITING_FOR_ROLL)return this.roll();if(this.status===Q.WAITING_FOR_MOVE){const e=this.getBestLegalMove();if(e)return this.executeMove(e),e}return null}getSingleMovableMove(){if(this.status!==Q.WAITING_FOR_MOVE||!this.validMoves||this.validMoves.length===0)return null;const e=this.getCurrentTeam(),n=this.getTeamCoins(e).filter(r=>!r.inJail&&!r.isFinished),i=this.validMoves.some(r=>r.type==="RELEASE_JAIL"),o=this.validMoves.some(r=>r.type==="MOVE_COIN"||r.type==="FINISH_COIN");if(i&&o)return null;if(n.length===1&&!i){const r=this.validMoves.filter(a=>a.type==="MOVE_COIN"||a.type==="FINISH_COIN");if(r.length===1)return r[0]}return this.validMoves.length===1?this.validMoves[0]:null}checkWinCondition(e){return this.getFinishedCoins(e).length===6}checkSquad5x5Win(e){const t=this.getTeamCoins(e);return t.length!==6?!1:t.every(n=>!n.inJail&&(n.stepIndex>=24||n.isFinished))}checkAITurn(){!this.getCurrentPlayer().isAI||this.status===Q.GAME_OVER||this.isMultiplayer&&!this.isHost||(this.status===Q.WAITING_FOR_ROLL?setTimeout(()=>{this.roll()},900):this.status===Q.WAITING_FOR_MOVE&&setTimeout(()=>{this.executeAIMove()},1e3))}executeAIMove(){const e=this.getBestLegalMove();e&&this.executeMove(e)}forfeit(e){var r;const t=parseInt(e,10)||1,n=t===1?2:1,i=this.players.find(a=>a.team===n)||{name:`Team ${n}`,team:n},o=this.players.find(a=>a.team===t)||{name:`Team ${t}`};this.winner={team:n,player:i,reason:"OPPONENT_QUIT",quittingPlayerName:o.name,stats:{...this.stats,durationSec:Math.round((Date.now()-(((r=this.stats)==null?void 0:r.startTime)||Date.now()))/1e3)}},this.status=Q.GAME_OVER,ie.playVictory(),this.log(`🏆 ${o.name} quit the match! ${i.name} (Team ${n}) wins by default!`),this.emitChange()}assignHomes(e,t,n=null){const i=parseInt(t,10)||1,o=Me(i),r=parseInt(e,10)||1;r===1?(this.team1Home=i,this.team2Home=o):(this.team2Home=i,this.team1Home=o),this.homesAssigned=!0;const a=ye[this.team1Home]||ye.team1,l=ye[this.team2Home]||ye.team2;for(const p of this.coins)p.inJail&&(p.coord={...p.team===1?a:l});const c=r===1?"Team 1":"Team 2",d=r===1?"Team 2":"Team 1";this.log(`🏠 ${c} selected Home ${i}! ${d} automatically assigned Opposite Home ${o}.`);const u=n||this.pendingReleaseScore;this.pendingReleaseScore=null,u?(this.status=Q.WAITING_FOR_MOVE,this.validMoves=this.getLegalMoves(r,u),this.emitChange(),this.checkAITurn()):(this.status=Q.WAITING_FOR_MOVE,this.emitChange())}log(e){this.onLog&&this.onLog({id:Date.now()+Math.random(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),text:e})}emitChange(){this.onStateChange&&this.onStateChange(this.getStateSnapshot())}getStateSnapshot(){return{status:this.status,gameMode:this.gameMode,diceMode:this.diceMode,pathStyle:this.pathStyle,requireKill:this.requireKill,homesAssigned:this.homesAssigned,team1Home:this.team1Home,team2Home:this.team2Home,players:this.players,currentPlayer:this.getCurrentPlayer(),currentRoll:this.currentRoll,lastRoll:this.lastRoll,coins:this.coins.map(e=>({...e})),validMoves:this.validMoves,winner:this.winner,team1Kills:this.team1Kills,team2Kills:this.team2Kills,stats:{...this.stats}}}applyStateSnapshot(e){if(e){if(this.status=e.status,this.gameMode=e.gameMode||this.gameMode,e.homesAssigned!==void 0&&(this.homesAssigned=e.homesAssigned),e.team1Home!==void 0&&(this.team1Home=e.team1Home),e.team2Home!==void 0&&(this.team2Home=e.team2Home),e.players&&Array.isArray(e.players)&&(this.players=e.players.map(t=>({...t}))),e.currentPlayer){const t=this.players.findIndex(n=>n.id===e.currentPlayer.id);t!==-1&&(this.currentPlayerIndex=t)}this.currentRoll=e.currentRoll||null,e.lastRoll&&(this.lastRoll=e.lastRoll),e.coins&&Array.isArray(e.coins)&&(this.coins=e.coins.map(t=>({...t}))),this.validMoves=e.validMoves||[],this.winner=e.winner||null,e.team1Kills!==void 0&&(this.team1Kills=e.team1Kills),e.team2Kills!==void 0&&(this.team2Kills=e.team2Kills),e.stats&&(this.stats={...e.stats}),this.emitChange()}}}function yo(s,e=null,t=null){const{coins:n,validMoves:i,currentPlayer:o,status:r,team1Kills:a,team2Kills:l,players:c,currentRoll:d}=s,u=r==="WAITING_FOR_MOVE",p=o.team;let f=!0;e&&e.roomCode?f=o.id===e.myPlayerId:o.isAI&&(f=!1);const b={};n.forEach(y=>{if(!y.inJail&&!y.isFinished){const _=`${y.coord.r}_${y.coord.c}`;b[_]||(b[_]=[]),b[_].push(y)}});const C=n.filter(y=>y.team===1&&y.inJail),T=n.filter(y=>y.team===2&&y.inJail),k=n.filter(y=>y.team===1&&y.isFinished),L=n.filter(y=>y.team===2&&y.isFinished),I=i.find(y=>y.type==="RELEASE_JAIL"),w=u&&f&&!!I,ee=c.find(y=>y.team===1)||{name:"Team 1"},S=c.find(y=>y.team===2)||{name:"Team 2"};let $="";for(let y=0;y<7;y++)for(let _=0;_<7;_++){const se=Qe(y,_),pe=uo(y,_),ke=`${y}_${_}`,me=b[ke]||[];let Ce=null;u&&f&&(t?Ce=i.find(K=>K.coin&&K.coin.id===t&&K.targetCoord&&K.targetCoord.r===y&&K.targetCoord.c===_):Ce=i.find(K=>K.targetCoord&&K.targetCoord.r===y&&K.targetCoord.c===_));const g=!!s.homesAssigned,h=s.team1Home||1,P=s.team2Home||3;let O=0;y===3&&_===6?O=1:y===0&&_===3?O=2:y===3&&_===0?O=3:y===6&&_===3&&(O=4);const U=g&&O===h,j=g&&O===P,G=y===4&&_===6,A=y===0&&_===4,F=y===2&&_===0,J=y===6&&_===2,Z=g&&(h===1&&G||h===2&&A||h===3&&F||h===4&&J||(P===1&&G||P===2&&A||P===3&&F||P===4&&J));let X=["board-cell"];se&&X.push("cell-safe-katta"),pe&&X.push("cell-center-sanctum"),U?X.push(`cell-home-h${h}`,"cell-team1-base"):j&&X.push(`cell-home-h${P}`,"cell-team2-base"),Z&&X.push("cell-gate-step23"),Ce&&X.push("cell-valid-target");let q="";if(pe)q=`
          <div class="center-sanctum-emblem happy-home-emblem ${k.length+L.length>0?"has-happy-coins":""}">
            <svg viewBox="0 0 100 100" class="sanctum-svg">
              <circle cx="50" cy="50" r="46" fill="rgba(241, 196, 15, 0.22)" stroke="#d4ac0d" stroke-width="3" stroke-dasharray="6 3" />
              <circle cx="50" cy="50" r="34" fill="rgba(230, 126, 34, 0.25)" />
              <line x1="16" y1="16" x2="84" y2="84" stroke="#c0392b" stroke-width="3" />
              <line x1="84" y1="16" x2="16" y2="84" stroke="#c0392b" stroke-width="3" />
              <circle cx="50" cy="50" r="18" fill="#ffd700" opacity="0.5" />
            </svg>
            <div class="happy-home-label">
              <span class="happy-home-star">✨</span>
              <span class="happy-home-text">HAPPY HOME</span>
              <span class="happy-home-star">🎉</span>
            </div>
            <div class="finished-coins-stack">
              ${vo(k,L)}
            </div>
          </div>
        `;else if(se){let K="";U?K=`👑 T1 (H${h})`:j&&(K=`🦚 T2 OPPOSITE (H${P})`),q=`
          <div class="katta-x-mark">
            <svg viewBox="0 0 100 100" class="cross-svg">
              <line x1="10" y1="10" x2="90" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
              <line x1="90" y1="10" x2="10" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
            </svg>
            ${K?`<span class="cell-tag ${U?"cell-tag-t1":"cell-tag-t2"}">${K}</span>`:""}
          </div>
        `}else Z&&(q=`
          <div class="gate-marker" title="Gate 23: Opponent kill needed to enter inside 5/5 ring!">
            <span class="cell-gate-tag">GATE 23</span>
          </div>
        `);const re=me.map((K,fe)=>{const be=u&&f&&i.some(Ie=>Ie.coin&&Ie.coin.id===K.id),ue=t===K.id;return Rt(K,be,ue,me.length,fe)}).join(""),ae=me.length>=2?`<span class="cell-stack-badge" title="${me.length} coins sharing this box">x${me.length}</span>`:"";$+=`
        <div class="${X.join(" ")}" data-r="${y}" data-c="${_}">
          ${q}
          ${ae}
          <div class="cell-coins-container coins-count-${me.length}">
            ${re}
          </div>
          ${Ce?`<div class="target-indicator ${t?"target-for-selected":""}">⭐</div>`:""}
        </div>
      `}const R=p===2,E=`
    <div class="jail-box jail-top ${R?"jail-turn-active":""} ${p===2&&w?"jail-actionable":""}" id="jail-team2">
      <div class="jail-header-compact">
        <div class="jail-team-tag t2-tag">
          <span>🦚 ${S.name} <small class="jail-home-sub">(Opposite Home ${s.team2Home||3})</small></span>
          ${R?'<span class="jail-turn-pulse">👉 TURN</span>':""}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${l} Kills ${l>0?"🔓 5/5 Open":"🔒 Gate 23 Stop"}</span>
          <span class="meta-count">${T.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${T.map((y,_)=>Rt(y,u&&f&&p===2&&w,!1,T.length,_,!0)).join("")}
        </div>

        ${p===2&&w?`
          <button class="btn-release-jail" id="btn-release-jail-t2">
            ⚡ Release ${I.count} to Home!
          </button>
        `:""}
      </div>
    </div>
  `,H=p===1,B=`
    <div class="jail-box jail-bottom ${H?"jail-turn-active":""} ${p===1&&w?"jail-actionable":""}" id="jail-team1">
      <div class="jail-header-compact">
        <div class="jail-team-tag t1-tag">
          <span>👑 ${ee.name} <small class="jail-home-sub">(Home ${s.team1Home||1})</small></span>
          ${H?'<span class="jail-turn-pulse">👉 TURN</span>':""}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${a} Kills ${a>0?"🔓 5/5 Open":"🔒 Gate 23 Stop"}</span>
          <span class="meta-count">${C.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${C.map((y,_)=>Rt(y,u&&f&&p===1&&w,!1,C.length,_,!0)).join("")}
        </div>

        ${p===1&&w?`
          <button class="btn-release-jail" id="btn-release-jail-t1">
            ⚡ Release ${I.count} to Home!
          </button>
        `:""}
      </div>
    </div>
  `;let N="";if(d&&r!=="ROLLING"){const y=d.isBonus;N=`
      <div class="screen-roll-banner animate-pop-in" title="Rolled ${d.score} (${d.titleTe||d.titleEn})">
        <div class="roll-banner-badge ${y?"roll-banner-bonus-glow":""}">
          <span class="roll-banner-dice">🎲</span>
          <span class="roll-banner-num">${d.score}</span>
          <div class="roll-banner-details">
            <span class="roll-banner-te">${d.titleTe||""}</span>
            <span class="roll-banner-en">${d.titleEn||""}</span>
          </div>
          ${y?'<span class="roll-banner-star">⭐ BONUS TURN!</span>':""}
        </div>
      </div>
    `}return`
    <div class="board-wrapper">
      ${E}
      
      <div class="board-container">
        ${N}
        <div class="board-frame">
          <div class="board-grid">
            ${$}
          </div>
        </div>
      </div>

      ${B}
    </div>
  `}function Rt(s,e,t=!1,n=1,i=0,o=!1){const r=s.team===1?"coin-team1":"coin-team2",a=e?"coin-selectable":"",l=t?"coin-selected":"",c=s.stepIndex===23;let d="coin-size-1";o||(n===2?d="coin-size-2":n>=3&&n<=4?d="coin-size-4":n>=5&&(d="coin-size-6"));const u=c?`Team ${s.team} Coin #${s.num} (Stopped at Step 23 Gate - Opponent kill required to enter inside 5/5 ring)`:`Team ${s.team} Coin #${s.num} ${t?"(Selected) - Tap destination to move":e?"- Tap to Select & Move":""}`;return`
    <div class="coin-piece ${r} ${a} ${l} ${d} ${c?"coin-stopped-23":""}" 
         data-coin-id="${s.id}" 
         data-team="${s.team}"
         title="${u}">
      <span class="coin-num">${s.num}</span>
      ${c?'<span class="coin-gate-badge">23</span>':""}
      ${e&&!t?'<span class="coin-pulse-ring"></span>':""}
    </div>
  `}function vo(s,e){return s.length===0&&e.length===0?"":`
    <div class="finished-summary happy-coins-summary">
      ${s.length>0?`<span class="fin-badge t1-fin" title="${s.length} Team 1 coins reached Happy Home!">👑 ${s.length} 🎉</span>`:""}
      ${e.length>0?`<span class="fin-badge t2-fin" title="${e.length} Team 2 coins reached Happy Home!">🦚 ${e.length} 🌟</span>`:""}
    </div>
  `}function ki(s,e){const t=s.isOpen,n=s.rot||0,i=(s.x||0)*.7,o=(s.y||0)*.7,r=t?`
      <svg viewBox="0 0 60 90" class="cowrie-svg cowrie-open">
        <defs>
          <radialGradient id="openShellGrad_${s.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff9ea" />
            <stop offset="60%" stop-color="#f1e0b8" />
            <stop offset="100%" stop-color="#cfb078" />
          </radialGradient>
        </defs>
        <path d="M 30,5 C 48,5 56,30 56,50 C 56,72 45,86 30,86 C 15,86 4,72 4,50 C 4,30 12,5 30,5 Z" 
              fill="url(#openShellGrad_${s.id})" stroke="#b89354" stroke-width="2.5" />
        <path d="M 30,14 Q 35,50 30,78 Q 25,50 30,14 Z" fill="#4a3014" stroke="#2c1a08" stroke-width="1.2" />
        <line x1="22" y1="26" x2="30" y2="26" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="30" y1="26" x2="38" y2="26" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="20" y1="36" x2="29" y2="36" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="31" y1="36" x2="40" y2="36" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="19" y1="46" x2="29" y2="46" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="31" y1="46" x2="41" y2="46" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="20" y1="56" x2="29" y2="56" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="31" y1="56" x2="40" y2="56" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="22" y1="66" x2="30" y2="66" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="30" y1="66" x2="38" y2="66" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <text x="30" y="83" font-size="8" font-weight="900" fill="#694315" text-anchor="middle">OPEN</text>
      </svg>
    `:`
      <svg viewBox="0 0 60 90" class="cowrie-svg cowrie-closed">
        <defs>
          <radialGradient id="closedShellGrad_${s.id}" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#fff9df" />
            <stop offset="35%" stop-color="#f5e08b" />
            <stop offset="70%" stop-color="#d4aa3b" />
            <stop offset="100%" stop-color="#a67b1e" />
          </radialGradient>
        </defs>
        <path d="M 30,5 C 48,5 57,30 57,50 C 57,72 46,86 30,86 C 14,86 3,72 3,50 C 3,30 12,5 30,5 Z" 
              fill="url(#closedShellGrad_${s.id})" stroke="#8f6514" stroke-width="2.5" />
        <ellipse cx="26" cy="30" rx="14" ry="20" fill="#ffffff" opacity="0.35" transform="rotate(-15 26 30)" />
        <text x="30" y="83" font-size="8" font-weight="900" fill="#523506" text-anchor="middle">CLOSED</text>
      </svg>
    `;return`
    <div class="cowrie-shell-wrapper " 
         style="transform: translate(${i}px, ${o}px) rotate(${n}deg);">
      ${r}
    </div>
  `}function _i(s,e,t){return`
    <div class="palm-toss-stage ${s?"palm-state-tossing":"palm-state-cupped"} ${e?"palm-clickable":""}" 
         id="palm-cupped-box" 
         title="${e?"Tap folded palm to shake for 2s and toss guvvalu!":""}">
      
      <!-- Authentic Village Folded Fist Graphic (Per User Photo) -->
      <div class="folded-fist-graphic ${s?"shake-folded-fist":""}">
        <svg viewBox="0 0 140 140" class="folded-palm-svg">
          <defs>
            <radialGradient id="fistGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffd194" stop-opacity="0.35" />
              <stop offset="100%" stop-color="#d49a6a" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="fistSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f8d6ab" />
              <stop offset="35%" stop-color="#e0a370" />
              <stop offset="70%" stop-color="#b6733c" />
              <stop offset="100%" stop-color="#7c431b" />
            </linearGradient>
          </defs>

          <!-- Aura glow behind fist -->
          <circle cx="70" cy="70" r="60" fill="url(#fistGlow)" />

          <!-- Wrist / Forearm base -->
          <path d="M 50,118 L 48,138 L 92,138 L 90,118 Z" fill="#9e5f30" stroke="#502910" stroke-width="2" />

          <!-- Main palm back / ball of thumb -->
          <path d="M 38,72 C 34,90 42,118 52,122 C 64,126 84,124 94,116 C 104,106 108,86 104,68 C 100,52 92,44 76,44 C 54,44 42,54 38,72 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2.5" />

          <!-- 4 Folded Finger Knuckles curled tightly holding shells inside -->
          <!-- Index finger (top) -->
          <path d="M 56,46 C 56,36 74,34 82,42 C 86,46 88,54 84,58 C 78,62 60,60 56,46 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2" />
          <!-- Middle finger -->
          <path d="M 52,58 C 50,52 74,50 84,56 C 88,60 88,68 82,72 C 74,76 56,72 52,58 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2" />
          <!-- Ring finger -->
          <path d="M 48,72 C 46,66 70,64 80,70 C 84,74 84,82 78,86 C 70,90 52,86 48,72 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2" />
          <!-- Pinky finger -->
          <path d="M 46,86 C 44,82 66,80 74,84 C 78,88 78,96 72,98 C 64,102 48,98 46,86 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2" />

          <!-- Folded Thumb clamped over fingers -->
          <path d="M 40,82 C 32,70 34,54 44,48 C 52,42 64,48 68,58 C 72,68 68,82 56,88 C 48,92 42,88 40,82 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2.2" />

          <!-- Thumbnail highlight -->
          <ellipse cx="48" cy="54" rx="5" ry="7" fill="#f8e4cc" stroke="#b07b48" stroke-width="1" transform="rotate(-25 48 54)" />

          <!-- Crease lines -->
          <path d="M 64,62 Q 74,68 84,62" fill="none" stroke="#683415" stroke-width="1.6" stroke-linecap="round" />
          <path d="M 60,76 Q 70,82 80,76" fill="none" stroke="#683415" stroke-width="1.6" stroke-linecap="round" />
          <path d="M 56,90 Q 66,94 74,90" fill="none" stroke="#683415" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </div>

      <!-- Village Folded Palm Interaction Prompt -->
      <div class="palm-prompt-badge ${e?"pulse-gold":""}">
        <span class="palm-prompt-icon">✊</span>
        <span class="palm-prompt-text">${e?"Folded Palm — Tap to Shake & Toss!":s?"Shaking Palm (2 sec)...":"Folded Palm with Guvvalu"}</span>
      </div>
    </div>
  `}function Co(s,e=null,t=30){const{status:n,currentRoll:i,lastRoll:o,diceMode:r,currentPlayer:a,validMoves:l}=s,c=n==="ROLLING";let d=!0;e&&e.roomCode?d=a.id===e.myPlayerId:a.isAI&&(d=!1);const u=n==="WAITING_FOR_ROLL"&&d;let p="";if(r==="die"){const C=i?i.score:o?o.score:6;p=`
      <div class="dice-single-cube ${c?"dice-shake":""}">
        <span class="dice-val">${C}</span>
      </div>
    `}else{const C=i||(n==="WAITING_FOR_ROLL"?null:o),T=C&&C.shells&&C.shells.length===6?C.shells:[{id:0,isOpen:!0,rot:10,x:-3,y:-2},{id:1,isOpen:!0,rot:-15,x:2,y:1},{id:2,isOpen:!1,rot:25,x:-1,y:2},{id:3,isOpen:!0,rot:-8,x:3,y:-1},{id:4,isOpen:!1,rot:30,x:-2,y:2},{id:5,isOpen:!0,rot:-25,x:1,y:-2}];if(c)p=_i(!0,!1);else if(i){const k=i.isBonus;p=`
        <div class="settled-cowrie-mat post-shake-screen-display">
          <div class="post-shake-number-hero ${k?"number-hero-bonus":""}">
            <div class="post-shake-num-badge">
              <span class="post-shake-number-digit">${i.score}</span>
            </div>
            <div class="post-shake-number-meta">
              <span class="post-shake-title-te">${i.titleTe||""}</span>
              <span class="post-shake-title-en">${i.titleEn||""}</span>
              ${k?'<span class="post-shake-bonus-pill">⭐ BONUS TURN</span>':""}
            </div>
          </div>
          <div class="compact-cowrie-tray">
            ${T.map(L=>ki(L)).join("")}
          </div>
        </div>
      `}else n==="WAITING_FOR_ROLL"?p=_i(!1,u):p=`
        <div class="settled-cowrie-mat">
          <div class="mat-label">🌾 Tossed on Board Mat</div>
          <div class="compact-cowrie-tray">
            ${T.map(k=>ki(k)).join("")}
          </div>
        </div>
      `}let f="";if(i&&!c){const C=i.isBonus;let T="";l&&l.length===0?T=`
        <span class="score-action-hint hint-no-moves">⚠️ No Moves</span>
        <span class="score-action-sub">${C?"Bonus Roll...":"Passes Turn..."}</span>
      `:l&&l.length===1&&!a.isAI?T=`
        <span class="score-action-hint hint-auto">⚡ Auto Move</span>
        <span class="score-action-sub">Moving in 1s...</span>
      `:l&&l.length>1&&d?T=`
        <span class="score-action-hint hint-choose">👉 Your Move</span>
        <span class="score-action-sub">Tap Coin / Target</span>
      `:T=`
        <span class="turn-prompt">${d?"👉 Your Turn!":`⏳ ${a.name}'s Turn`}</span>
        <span class="turn-timer-sub">⏳ ${t}s</span>
      `,f=`
      <div class="compact-score-badge settled-action-badge ${C?"score-bonus-glow":""}">
        ${T}
      </div>
    `}else c?f=`
      <div class="compact-score-badge rolling-badge">
        <span class="rolling-dot">⏳</span>
        <span>Shaking Palm (2 sec)...</span>
      </div>
    `:f=`
      <div class="compact-score-badge idle-badge ${d?"badge-my-turn":""}">
        <span class="turn-prompt">${d?"👉 Your Turn!":`⏳ ${a.name}'s Turn`}</span>
        ${o?`<span class="last-roll-reminder">Last: 🎲 ${o.score} (${o.titleTe||o.titleEn})</span>`:`<span class="turn-timer-sub">⏳ ${t}s</span>`}
      </div>
    `;let b="✊ TOSS GUVVALU";return c?b="Shaking (2s)...":d||(b=e&&e.roomCode?`Waiting for ${a.name}...`:"Computer Thinking..."),`
    <div class="mobile-cowrie-console ${d&&u?"console-my-turn":""}">
      <div class="cowrie-left-zone">
        ${p}
        ${f}
      </div>

      <div class="cowrie-right-zone">
        <button id="btn-roll-dice" class="btn-roll ${u?"btn-roll-active":"btn-roll-disabled"}" 
                ${u?"":"disabled"}>
          ${b}
        </button>
      </div>
    </div>
  `}let xe="en";try{const s=localStorage.getItem("bk_language");(s==="te"||s==="en")&&(xe=s)}catch{}function Tn(){return xe}function So(s){if(s==="te"||s==="en"){xe=s;try{localStorage.setItem("bk_language",s)}catch{}}return xe}function Pt(){return So(xe==="en"?"te":"en")}const It={en:{appTitle:"BHARAKHATTA",appSubtitle:"Traditional 7x7 Village Cowrie Board Game",gameCoins:"Game Coins",name:"Name",potCoins:"Pot Coins",room:"Room",boardNumber:"Board Number",chat:"Chat",playWithFriend:"Play with Friend",bet:"Bet",exit:"Exit",rules:"Rules",selectPlayerCount:"Choose Player Count (2 or 4)",twoPlayers:"2 Players",twoPlayersSub:"1 vs 1 Head to Head",fourPlayers:"4 Players",fourPlayersSub:"2 vs 2 Team Match (2 Homes)",selectMode2p:"Select 2-Player Mode",selectMode4p:"Select 4-Player Mode",playVsComputer:"Play vs Computer (1v1)",playVsComputerSub:"Solo match with System AI",playWithFriend2p:"Play with Friend (1v1)",playWithFriend2pSub:"Invite friend on other mobile with Board #",twoFriendsAIPair:"2 Friends + 2 AI Pair",twoFriendsAIPairSub:"You & Friend (Team 1) vs System AI Pair (Team 2)",solo4p:"Solo (1 Human + 3 AI)",solo4pSub:"You & AI Partner vs 2 AI Opponents",fourFriendsOnline:"4 Friends Online",fourFriendsOnlineSub:"Send Board # to request friends",requestFriendHero:"Request Friend to Play on Same Board",requestFriendHeroSub:"Share Board Number, WhatsApp Invite & QR Code",choosePotCoins:"Choose Pot Coins / Bet Stakes",yourStake:"Your Stake",winnerTakesPot:"Winner Takes Pot",startGame:"Start Game",rulesGuide:"Rules Guide",matchHistory:"Match History",switchAccount:"Switch Account",tossGuvvalu:"TOSS GUVVALU",tossingGuvvalu:"Tossing...",guvvaluInPalm:"Guvvalu in Palm",tapPalmToToss:"Guvvalu in Palm — Tap to Toss!",tossedOnMat:"Tossed on Board Mat",yourTurn:"👉 Your Turn!",waitingForTurn:"⏳ Turn: {name}",computerThinking:"Computer Thinking...",bonusRoll:"⭐ BONUS!",roll_1:"Okkati (1)",roll_2:"Rendu (2)",roll_3:"Moodu (3)",roll_4:"Naalugu (4)",roll_5:"Aidu (5)",roll_6:"Aaru (6)",roll_12:"Baara! (12)",gate23Title:"⚔️ Both Homes Unlocked Gate 23!",gate23Msg:"Both Team 1 and Team 2 have killed an opponent coin and unlocked Gate 23! Both teams can now enter the inside 5/5 squad. Do you want to continue playing or start again?",btnContinueGame:"▶️ Continue Game",btnStartAgain:"🔄 Start Again",victoryTitle:"VICTORY!",victoryDesc:"Team {team} won the match!",winReasonSquad:"🎉 ALL 6 COINS ENTERED 5/5 SQUAD! Team {team} has no coins left in the outer 7/7 track for the opponent to kill!",winReasonCenter:"🏆 All 6 coins reached the Center Sanctum (Final Home)!",winReasonForfeit:"🏆 Opponent quit the game! You won by default!",homeSelection:"Starting Home Base",oppositeHomeNotice:"Opponent will automatically get the Opposite Home",rematchBtn:"🎲 Return to Lobby",mpTitle:"Request Friend to Play on Same Board",mpSubtitle:"Real-time multiplayer over Wi-Fi / Mobile Network",guaranteedBoardNumber:"GUARANTEED BOARD NUMBER",uniqueBnHint:"Guaranteed unique board number — will never repeat in match history!",whatsappShare:"Request Friend on WhatsApp",scanQrHint:"Friend can scan this with mobile camera to join instantly!",copyLink:"Copy Link",copyCode:"Copy",copied:"✅ Copied!",boardPlayers:"Board Players",startWithAIPair:"🤝 Start Now with System AI Opposite Pair",twoFriendsNotice:"2 Friends Connected! You two are Team 1. You can start right now with the System AI playing as the opposite pair (Team 2)!",waitingFriendNotice:"Waiting for your friend to open the link or enter Board Number on their phone...",allPlayersReady:"All players connected! Board match is active in real time.",generateBoardBtn:"🚀 Generate Board Number & Invite Friends",joinBoardBtn:"🤝 Join Board",yourName:"Your Name",matchType:"Match Type",joinExistingCard:"Join with Friend's Board Number",enterBnPlaceholder:"e.g. BK-260915-101-482",tabExistingLogin:"📱 Existing Player: Login",tabNewSignUp:"✨ New Player: Sign Up",mobileNumber:"Mobile Number",tenDigits:"10 Digits",mobilePlaceholder:"e.g. 9876543210",loginMobileHint:"Enter your 10-digit number to restore your Nick Name, Coins & History",signupMobileHint:"Your mobile number is securely kept private. Only your Nick Name is shown in-game",fullName:"Full Name",required:"Required",optional:"Optional",fullNamePlaceholder:"e.g. Mahesh Reddy",nickName:"Nick Name",nickNamePlaceholder:"Leave blank for auto-initials (e.g. MR)",gameDisplayName:"Game Display Name",loginSubmitBtn:"🎮 Login to Bharakhatta",signUpSubmitBtn:"🚀 Sign Up & Claim 1,000 Coins",firstTimePrompt:"First time playing Bharakhatta?",signUpHere:"Sign Up here ➔",alreadyHaveAccount:"Already have an account?",loginHere:"Login with mobile ➔",errUnregistered:"Account not found with this mobile number. Please select 'Sign Up' to create your account!",errMissingName:"Please enter your Full Name to sign up.",errInvalidMobile:"Please enter a valid 10-digit mobile number.",menuOnline:"Play Online",menuOnlineSub:"Match with Random Online Player",menuComputer:"Computer",menuFriends:"Friends",menuComputerSub:"100% Offline • No internet needed",menuFriendsSub:"4-Digit Table Code • Invite Friends",freeCoinsClaim:"CLAIM!",freeCoinsBtn:"Free 500🪙",store:"Store",inventory:"Inventory",home:"Home",club:"Club",langBtnText:"🌐 తెలుగు"},te:{appTitle:"బాఱఖట్టా",appSubtitle:"సాంప్రదాయ 7x7 పల్లెటూరి గవ్వల బోర్డు ఆట",gameCoins:"గేమ్ కాయిన్స్",name:"పేరు",potCoins:"పాట్ కాయిన్స్",room:"రూమ్",boardNumber:"బోర్డు నంబర్",chat:"చాట్",playWithFriend:"మిత్రుడితో ఆట",bet:"బెట్",exit:"నిష్క్రమించు",rules:"నియమాలు",selectPlayerCount:"ఆటగాళ్ల సంఖ్య ఎంచుకోండి (2 లేదా 4)",twoPlayers:"2 గురు ఆటగాళ్ళు",twoPlayersSub:"1 vs 1 ముఖాముఖి ఆట",fourPlayers:"4 గురు ఆటగాళ్ళు",fourPlayersSub:"2 vs 2 టీమ్ మ్యాచ్ (2 హోమ్స్)",selectMode2p:"2-ఆటగాళ్ల విధానం ఎంచుకోండి",selectMode4p:"4-ఆటగాళ్ల విధానం ఎంచుకోండి",playVsComputer:"కంప్యూటర్‌తో ఆడండి (1v1)",playVsComputerSub:"సిస్టమ్ AI తో సింగిల్ ప్లేయర్ ఆట",playWithFriend2p:"మిత్రుడితో ఆడండి (1v1)",playWithFriend2pSub:"బోర్డు నంబర్‌తో వేరే ఫోన్‌లో ఉన్న మిత్రుడిని ఆహ్వానించండి",twoFriendsAIPair:"2 గురు మిత్రులు + 2 AI జోడీ",twoFriendsAIPairSub:"మీరు & మిత్రుడు (టీమ్ 1) vs సిస్టమ్ AI జోడీ (టీమ్ 2)",solo4p:"సోలో (1 మనిషి + 3 AI)",solo4pSub:"మీరు & AI మిత్రుడు vs 2 AI ప్రత్యర్థులు",fourFriendsOnline:"4 గురు మిత్రులు ఆన్‌లైన్",fourFriendsOnlineSub:"బోర్డు నంబర్ పంపి మిత్రులను ఆహ్వానించండి",requestFriendHero:"ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",requestFriendHeroSub:"బోర్డు నంబర్, వాట్సాప్ లింక్ & QR కోడ్ షేర్ చేయండి",choosePotCoins:"పాట్ కాయిన్స్ / బెట్ పందెం ఎంచుకోండి",yourStake:"మీ పందెం",winnerTakesPot:"విజేతకు మొత్తం పాట్",startGame:"ఆట ప్రారంభించండి",rulesGuide:"ఆట నియమాలు",matchHistory:"మ్యాచ్ హిస్టరీ",switchAccount:"ఖాతా మార్చండి",tossGuvvalu:"గువ్వలు విసరండి",tossingGuvvalu:"విసురుతున్నారు...",guvvaluInPalm:"అరచేతిలో గువ్వలు",tapPalmToToss:"అరచేతిలో గువ్వలు — విసరడానికి నొక్కండి!",tossedOnMat:"బోర్డు చాపపై పడిన గువ్వలు",yourTurn:"👉 మీ వంతు!",waitingForTurn:"⏳ {name} వంతు",computerThinking:"కంప్యూటర్ ఆలోచిస్తోంది...",bonusRoll:"⭐ బోనస్ టర్న్!",roll_1:"ఒక్కటి (1)",roll_2:"రెండు (2)",roll_3:"మూడు (3)",roll_4:"నాలుగు (4)",roll_5:"ఐదు (5)",roll_6:"ఆరు (6)",roll_12:"బాఱ! (12)",gate23Title:"⚔️ రెండు హోమ్‌ల గేట్ 23 తెరుచుకుంది!",gate23Msg:"టీమ్ 1 మరియు టీమ్ 2 రెండూ కట్టా కొట్టి గేట్ 23 తెరిచాయి! రెండు జట్లూ ఇప్పుడు లోపలి 5/5 స్క్వాడ్‌లోకి ప్రవేశించవచ్చు. ఆటను ఇలాగే కొనసాగించాలా లేదా మళ్లీ మొదటి నుండి ప్రారంభించాలా?",btnContinueGame:"▶️ ఆట కొనసాగించు",btnStartAgain:"🔄 మళ్లీ ప్రారంభించు",victoryTitle:"విజయం!",victoryDesc:"టీమ్ {team} ఘన విజయం సాధించింది!",winReasonSquad:"🎉 6 గువ్వలూ 5/5 స్క్వాడ్‌లోకి చేరాయి! బయటి 7/7 ట్రాక్‌లో ప్రత్యర్థి చంపడానికి ఏ కాయిన్ మిగల్లేదు! టీమ్ {team} విజేత!",winReasonCenter:"🏆 మొత్తం 6 గువ్వలూ సెంటర్ హోమ్ (సెంట్ మార్క్) చేరుకున్నాయి!",winReasonForfeit:"🏆 ప్రత్యర్థి ఆటను విడిచిపెట్టారు! మీరు డిఫాల్ట్‌గా గెలిచారు!",homeSelection:"ప్రారంభ హోమ్ బేస్",oppositeHomeNotice:"ఎదుటి ఆటగాడికి స్వయంచాలకంగా ఎదురుగా ఉన్న హోమ్ వస్తుంది",rematchBtn:"🎲 లాబీకి తిరిగి వెళ్ళు",mpTitle:"ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",mpSubtitle:"Wi-Fi / మొబైల్ నెట్‌వర్క్ ద్వారా రియల్-టైమ్ మల్టీప్లేయర్",guaranteedBoardNumber:"ఖచ్చితమైన బోర్డు నంబర్",uniqueBnHint:"ప్రత్యేక బోర్డు నంబర్ — హిస్టరీలో ఎప్పటికీ పునరావృతం కాదు!",whatsappShare:"వాట్సాప్‌లో మిత్రుడిని ఆహ్వానించండి",scanQrHint:"వెంటనే జాయిన్ కావడానికి మిత్రుడు కెమెరాతో స్కాన్ చేయవచ్చు!",copyLink:"లింక్ కాపీ చేయండి",copyCode:"కాపీ",copied:"✅ కాపీ అయింది!",boardPlayers:"బోర్డు ఆటగాళ్ళు",startWithAIPair:"🤝 సిస్టమ్ AI జోడీతో ఇప్పుడే ఆడండి",twoFriendsNotice:"2 గురు మిత్రులు కనెక్ట్ అయ్యారు! మీరిద్దరూ టీమ్ 1. సిస్టమ్ AI ని ఎదుటి జోడీగా (టీమ్ 2) పెట్టి ఇప్పుడే ఆట మొదలుపెట్టవచ్చు!",waitingFriendNotice:"మిత్రుడు లింక్ ఓపెన్ చేయడం లేదా బోర్డు నంబర్ నమోదు చేయడం కోసం వేచి చూస్తున్నాం...",allPlayersReady:"ఆటగాళ్లంతా కనెక్ట్ అయ్యారు! మ్యాచ్ లైవ్‌లో ఉంది.",generateBoardBtn:"🚀 బోర్డు నంబర్ సృష్టించి ఆహ్వానించండి",joinBoardBtn:"🤝 బోర్డులో జాయిన్ అవ్వండి",yourName:"మీ పేరు",matchType:"మ్యాచ్ విధానం",joinExistingCard:"మిత్రుడి బోర్డు నంబర్‌తో జాయిన్ అవ్వండి",enterBnPlaceholder:"ఉదా: BK-260915-101-482",tabExistingLogin:"📱 పాత ఆటగాడు: లాగిన్",tabNewSignUp:"✨ కొత్త ఆటగాడు: సైన్ అప్",mobileNumber:"మొబైల్ నంబర్",tenDigits:"10 అంకెలు",mobilePlaceholder:"ఉదా: 9876543210",loginMobileHint:"మీ ముద్దు పేరు, కాయిన్స్ & హిస్టరీ పొందడానికి 10 అంకెల నంబర్ నమోదు చేయండి",signupMobileHint:"మీ మొబైల్ నంబర్ గోప్యంగా ఉంటుంది. ఆటలో ముద్దు పేరు మాత్రమే కనిపిస్తుంది",fullName:"పూర్తి పేరు",required:"తప్పనిసరి",optional:"ఐచ్ఛికం",fullNamePlaceholder:"ఉదా: మహేష్ రెడ్డి",nickName:"ముద్దు పేరు",nickNamePlaceholder:"ఖాళీగా ఉంచితే మొదటి అక్షరాలు వస్తాయి (ఉదా: MR)",gameDisplayName:"ఆటలో కనిపించే పేరు",loginSubmitBtn:"🎮 బాఱఖట్టా లోకి లాగిన్ అవ్వండి",signUpSubmitBtn:"🚀 సైన్ అప్ చేసి 1,000 కాయిన్స్ పొందండి",firstTimePrompt:"మొదటిసారి బాఱఖట్టా ఆడుతున్నారా?",signUpHere:"ఇక్కడ సైన్ అప్ చేయండి ➔",alreadyHaveAccount:"ఇప్పటికే ఖాతా ఉందా?",loginHere:"మొబైల్‌తో లాగిన్ అవ్వండి ➔",errUnregistered:"ఈ మొబైల్ నంబర్‌తో ఖాతా లేదు. దయచేసి 'సైన్ అప్' ఎంచుకుని ఖాతాను నమోదు చేసుకోండి!",errMissingName:"సైన్ అప్ చేయడానికి దయచేసి మీ పూర్తి పేరు నమోదు చేయండి.",errInvalidMobile:"దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.",menuOnline:"ఆన్‌లైన్ ఆట",menuOnlineSub:"యాదృచ్ఛిక ఆటగాడితో మ్యాచ్",menuComputer:"కంప్యూటర్",menuFriends:"మిత్రులు",menuComputerSub:"100% ఆఫ్‌లైన్ • ఇంటర్నెట్ అవసరం లేదు",menuFriendsSub:"4 అంకెల కోడ్ • మిత్రులతో ఆడండి",freeCoinsClaim:"పొందండి!",freeCoinsBtn:"ఉచిత 500🪙",store:"స్టోర్",inventory:"సామాగ్రి",home:"హోమ్",club:"క్లబ్",langBtnText:"🌐 English"}};function M(s,e={}){const t=xe in It?xe:"en";let n=It[t][s]||It.en[s]||s;return Object.keys(e).forEach(i=>{n=n.replace(new RegExp(`\\{${i}\\}`,"g"),e[i])}),n}function To(s,e,t=null,n={}){const{gameMode:i,diceMode:o,status:r,currentPlayer:a,winner:l}=s,c=t&&t.roomCode,d=c&&t.players&&t.players.length>=2,u=n.walletCoins!==void 0?n.walletCoins:1e3,p=n.matchPot||0,f=n.timeLeft!==void 0?n.timeLeft:30,b=n.unreadChatCount||0,C=Tn();let T="timer-normal";return f<=5?T="timer-urgent":f<=10&&(T="timer-warning"),`
    <header class="app-header">
      <!-- Top Row: Logo, Live Timer, and Prominent Quit Button -->
      <div class="header-top-row">
        <div class="header-brand">
          <span class="logo-icon">🐚</span>
          <div class="brand-text-col">
            <h1 class="brand-title">${M("appTitle")}</h1>
            <span class="brand-subtitle">${C==="en"?"బాఱఖట్టా":"Bharakhatta"}</span>
          </div>
        </div>

        <!-- 30s Turn Timer -->
        <div class="turn-timer-pill ${T}" title="30-Second Turn Timer">
          <span class="timer-icon">⏳</span>
          <span class="timer-seconds">${f}s</span>
        </div>

        <!-- Prominent ALWAYS VISIBLE Quit Match Button -->
        <button id="btn-open-exit" class="btn-quit-game-header" title="${M("exit")}">
          🚪 ${M("exit")}
        </button>
      </div>

      <!-- Formatted Middle Line: Game Coins - Nick Name - Pot Coins -->
      <div class="header-economy-bar" id="game-header-bar">
        <div class="econ-pill econ-wallet" id="btn-open-wallet" title="${M("gameCoins")}">
          <span class="econ-icon">🪙</span>
          <span class="econ-label">${M("gameCoins")}:</span>
          <strong class="econ-val">${u.toLocaleString()}</strong>
        </div>

        <span class="econ-sep">•</span>

        ${n.user?`
          <div class="econ-pill econ-user" id="btn-open-profile" title="${M("name")}">
            <span class="econ-icon">👤</span>
            <span class="econ-label">${M("name")}:</span>
            <strong class="econ-val econ-nick">${n.user.nickName||n.user.name}</strong>
          </div>
        `:`
          <button class="btn-login-header" id="btn-header-login" title="Login with Mobile Number">
            📱 Login
          </button>
        `}

        <span class="econ-sep">•</span>

        <div class="econ-pill econ-pot" id="btn-open-bet" title="${M("potCoins")}">
          <span class="econ-icon">🏆</span>
          <span class="econ-label">${M("potCoins")}:</span>
          <strong class="econ-val">🪙${p.toLocaleString()}</strong>
        </div>

        <!-- Room Indicator -->
        ${c?`
          <div class="room-indicator-pill table-live-badge ${d?"table-connected":"table-waiting"}" id="btn-open-mp-badge" title="${M("boardNumber")}: #${t.roomCode}">
            <span class="live-dot">${d?"🟢":"⏳"}</span>
            <span>Table: <strong>#${t.roomCode}</strong></span>
          </div>
        `:""}
      </div>

      <!-- Quick Action Controls -->
      <div class="header-controls">
        <!-- In-Game Chat Button -->
        <button id="btn-open-chat" class="btn-icon btn-chat-glow" title="${M("chat")}">
          💬 ${M("chat")} ${b>0?`<span class="chat-badge">${b}</span>`:""}
        </button>

        <!-- Friends Hub Button -->
        <button id="btn-header-friends" class="btn-icon btn-friends-glow" title="Friends & Rooms">
          👥 Friends
        </button>

        <!-- Bet Adjust -->
        <button id="btn-open-bet" class="btn-icon btn-bet-chip" title="${M("bet")}">
          🪙 ${M("bet")}
        </button>

        <!-- Language Toggle -->
        <button id="btn-toggle-lang" class="btn-icon btn-lang-toggle" title="Switch Language / భాష మార్చండి">
          ${C==="en"?"🌐 తెలుగు":"🌐 English"}
        </button>

        <!-- Sound Toggle -->
        <button id="btn-toggle-sound" class="btn-icon ${e?"btn-muted":""}" title="Toggle Sound">
          ${e?"🔇":"🔊"}
        </button>

        <!-- Rules -->
        <button id="btn-open-rules" class="btn-icon" title="${M("rules")}">
          📜
        </button>
      </div>
    </header>
  `}function Mi(s){return!s||s.length===0?"":`
    <div class="live-ticker-strip">
      <span class="ticker-icon">📢</span>
      <span class="ticker-text">${s[s.length-1].text}</span>
    </div>
  `}function ko(s){return`
    <div class="modal-backdrop" id="rules-modal-backdrop">
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">📜</span>
            <div>
              <h2 class="modal-title">BHARAKHATTA (బాఱఖట్టా) - Game Rules</h2>
              <span class="modal-subtitle">Traditional Indian Village Cowrie Board Game (7x7 Baara Katta)</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-rules">&times;</button>
        </div>

        <div class="modal-body">
          <section class="rules-section">
            <h3>🌟 Overview & History</h3>
            <p>
              <strong>Bharakhatta</strong> (also known as <em>Baara Katta</em>, <em>Katte Mane</em>, or <em>Big Ashta Chamma</em>) 
              is a beloved strategy game played across Indian villages since ancient times and popular throughout the 1990s and today. 
              It is played with <strong>6 Cowrie Shells (Guvvalu)</strong> as dice, 6 coins per team, and 2 opposing home bases on a 7x7 grid.
            </p>
          </section>

          <section class="rules-section">
            <h3>🐚 6 Guvvalu (Cowrie Shells) Scoring</h3>
            <p>Each cowrie shell has two faces: <strong>Face A (Open Mouth with teeth)</strong> and <strong>Face B (Smooth Curved Back)</strong>.</p>
            <div class="rules-table-wrapper">
              <table class="rules-table">
                <thead>
                  <tr>
                    <th>Open Mouths</th>
                    <th>Telugu Name</th>
                    <th>Score</th>
                    <th>Bonus Chance?</th>
                    <th>Jail Release</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="highlight-row">
                    <td>1 Open</td>
                    <td><strong>Okkati</strong></td>
                    <td><span class="badge-num">1</span></td>
                    <td>✅ <strong>YES (Roll Again!)</strong></td>
                    <td>Releases 1 coin</td>
                  </tr>
                  <tr>
                    <td>2 Open</td>
                    <td>Rendu</td>
                    <td><span class="badge-num">2</span></td>
                    <td>❌ No</td>
                    <td>Cannot release</td>
                  </tr>
                  <tr>
                    <td>3 Open</td>
                    <td>Moodu</td>
                    <td><span class="badge-num">3</span></td>
                    <td>❌ No</td>
                    <td>Cannot release</td>
                  </tr>
                  <tr>
                    <td>4 Open</td>
                    <td>Naalugu</td>
                    <td><span class="badge-num">4</span></td>
                    <td>❌ No</td>
                    <td>Cannot release</td>
                  </tr>
                  <tr class="highlight-row">
                    <td>5 Open</td>
                    <td><strong>Aidu</strong></td>
                    <td><span class="badge-num">5</span></td>
                    <td>✅ <strong>YES (Roll Again!)</strong></td>
                    <td>Releases up to 5 coins</td>
                  </tr>
                  <tr class="highlight-row">
                    <td>6 Open</td>
                    <td><strong>Aaru</strong></td>
                    <td><span class="badge-num">6</span></td>
                    <td>✅ <strong>YES (Roll Again!)</strong></td>
                    <td>Releases up to 6 coins</td>
                  </tr>
                  <tr class="highlight-row grand-row">
                    <td>0 Open (All Backs)</td>
                    <td><strong>BAARA!</strong></td>
                    <td><span class="badge-num">12</span></td>
                    <td>⭐ <strong>YES (Roll Again!)</strong></td>
                    <td>Releases up to 6 coins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section class="rules-section">
            <h3>🔒 Releasing Coins from Jail</h3>
            <ul>
              <li>Each team has <strong>6 coins</strong> starting in their team's Jail outside the board.</li>
              <li>To bring coins out of Jail onto your Home square (marked with <strong>X</strong>), you must roll <strong>1, 5, 6, or 12</strong>.</li>
              <li>If you roll <strong>2, 3, or 4</strong> while all your coins are still in Jail, no coins can move and your turn passes.</li>
              <li>When you have coins on the board, rolling 1, 5, 6, or 12 allows you to either release another coin from Jail or advance an active coin.</li>
            </ul>
          </section>

          <section class="rules-section">
            <h3>🛡️ Safe Squares ("Kattas" / "Ghattas" with X)</h3>
            <ul>
              <li>There are <strong>9 Safe Squares</strong> marked with a large <strong>X</strong> (the 4 outer edge centers, 4 inner corners, and the center finish).</li>
              <li>A coin resting on any <strong>X</strong> square is <strong>100% safe</strong> and cannot be killed by an opponent.</li>
              <li>Multiple coins (even from opposing teams) can safely share an <strong>X</strong> square.</li>
            </ul>
          </section>

          <section class="rules-section">
            <h3>⚔️ Capturing ("Kill" / Katta Strike)</h3>
          <section class="rules-section">
            <h3>⏱️ Strict 30-Second Turn Timeout</h3>
            <ul>
              <li>Each player has exactly <strong>30 seconds</strong> to roll or choose a move.</li>
              <li><strong>Timeout Forfeiture:</strong> If the 30-second timer expires, you receive <strong>NO roll chance</strong>. Your turn is immediately forfeited and passed to the next player!</li>
            </ul>
          </section>

          <section class="rules-section">
            <h3>🌀 Concentric Spiral Movement & Step 23 Gate</h3>
            <ul>
              <li><strong>Outer Track (24 Squares):</strong> Coins travel around the outer edge from Step 0 to Step 23.</li>
              <li><strong>Step 23 Stop Rule:</strong> Once a coin reaches <strong>Step 23</strong>, it can <strong>ONLY enter the inside 5/5 ring</strong> if your team has killed at least one opponent coin!</li>
              <li><strong>Without a Kill:</strong> Coins are <strong>stopped at Step 23 only</strong> and blocked from advancing until your team makes an opponent kill.</li>
              <li><strong>With a Kill:</strong> Coins unlock from Step 23 and advance into the <strong>Inside 5/5 Ring (16 squares)</strong>, then into the <strong>Inside 3/3 Ring (8 squares)</strong>, and finally into the <strong>Center Sanctum (Final Home)</strong>.</li>
            </ul>
          </section>

          <section class="rules-section">
            <h3>🏆 Winning the Game</h3>
            <p>
              Whoever completes all <strong>6 coins into the Final Home (Center Sanctum)</strong> wins the match!
            </p>
          </section>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" id="btn-modal-got-it">Got it, Let's Play!</button>
        </div>
      </div>
    </div>
  `}var kn={};(function s(e,t,n,i){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!e.OffscreenCanvas)return!1;try{var g=new OffscreenCanvas(1,1),h=g.getContext("2d");h.fillRect(0,0,1,1);var P=g.transferToImageBitmap();h.createPattern(P,"no-repeat")}catch{return!1}return!0})();function l(){}function c(g){var h=t.exports.Promise,P=h!==void 0?h:e.Promise;return typeof P=="function"?new P(g):(g(l,l),null)}var d=(function(g,h){return{transform:function(P){if(g)return P;if(h.has(P))return h.get(P);var O=new OffscreenCanvas(P.width,P.height),U=O.getContext("2d");return U.drawImage(P,0,0),h.set(P,O),O},clear:function(){h.clear()}}})(a,new Map),u=(function(){var g=Math.floor(16.666666666666668),h,P,O={},U=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(j){var G=Math.random();return O[G]=requestAnimationFrame(function A(F){U===F||U+g-1<F?(U=F,delete O[G],j()):O[G]=requestAnimationFrame(A)}),G},P=function(j){O[j]&&cancelAnimationFrame(O[j])}):(h=function(j){return setTimeout(j,g)},P=function(j){return clearTimeout(j)}),{frame:h,cancel:P}})(),p=(function(){var g,h,P={};function O(U){function j(G,A){U.postMessage({options:G||{},callback:A})}U.init=function(A){var F=A.transferControlToOffscreen();U.postMessage({canvas:F},[F])},U.fire=function(A,F,J){if(h)return j(A,null),h;var W=Math.random().toString(36).slice(2);return h=c(function(V){function Z(X){X.data.callback===W&&(delete P[W],U.removeEventListener("message",Z),h=null,d.clear(),J(),V())}U.addEventListener("message",Z),j(A,W),P[W]=Z.bind(null,{data:{callback:W}})}),h},U.reset=function(){U.postMessage({reset:!0});for(var A in P)P[A](),delete P[A]}}return function(){if(g)return g;if(!n&&o){var U=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{g=new Worker(URL.createObjectURL(new Blob([U])))}catch(j){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",j),null}O(g)}return g}})(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(g,h){return h?h(g):g}function C(g){return g!=null}function T(g,h,P){return b(g&&C(g[h])?g[h]:f[h],P)}function k(g){return g<0?0:Math.floor(g)}function L(g,h){return Math.floor(Math.random()*(h-g))+g}function I(g){return parseInt(g,16)}function w(g){return g.map(ee)}function ee(g){var h=String(g).replace(/[^0-9a-f]/gi,"");return h.length<6&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]),{r:I(h.substring(0,2)),g:I(h.substring(2,4)),b:I(h.substring(4,6))}}function S(g){var h=T(g,"origin",Object);return h.x=T(h,"x",Number),h.y=T(h,"y",Number),h}function $(g){g.width=document.documentElement.clientWidth,g.height=document.documentElement.clientHeight}function R(g){var h=g.getBoundingClientRect();g.width=h.width,g.height=h.height}function E(g){var h=document.createElement("canvas");return h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=g,h}function H(g,h,P,O,U,j,G,A,F){g.save(),g.translate(h,P),g.rotate(j),g.scale(O,U),g.arc(0,0,1,G,A,F),g.restore()}function B(g){var h=g.angle*(Math.PI/180),P=g.spread*(Math.PI/180);return{x:g.x,y:g.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:g.startVelocity*.5+Math.random()*g.startVelocity,angle2D:-h+(.5*P-Math.random()*P),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:g.color,shape:g.shape,tick:0,totalTicks:g.ticks,decay:g.decay,drift:g.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:g.gravity*3,ovalScalar:.6,scalar:g.scalar,flat:g.flat}}function N(g,h){h.x+=Math.cos(h.angle2D)*h.velocity+h.drift,h.y+=Math.sin(h.angle2D)*h.velocity+h.gravity,h.velocity*=h.decay,h.flat?(h.wobble=0,h.wobbleX=h.x+10*h.scalar,h.wobbleY=h.y+10*h.scalar,h.tiltSin=0,h.tiltCos=0,h.random=1):(h.wobble+=h.wobbleSpeed,h.wobbleX=h.x+10*h.scalar*Math.cos(h.wobble),h.wobbleY=h.y+10*h.scalar*Math.sin(h.wobble),h.tiltAngle+=.1,h.tiltSin=Math.sin(h.tiltAngle),h.tiltCos=Math.cos(h.tiltAngle),h.random=Math.random()+2);var P=h.tick++/h.totalTicks,O=h.x+h.random*h.tiltCos,U=h.y+h.random*h.tiltSin,j=h.wobbleX+h.random*h.tiltCos,G=h.wobbleY+h.random*h.tiltSin;if(g.fillStyle="rgba("+h.color.r+", "+h.color.g+", "+h.color.b+", "+(1-P)+")",g.beginPath(),r&&h.shape.type==="path"&&typeof h.shape.path=="string"&&Array.isArray(h.shape.matrix))g.fill(ke(h.shape.path,h.shape.matrix,h.x,h.y,Math.abs(j-O)*.1,Math.abs(G-U)*.1,Math.PI/10*h.wobble));else if(h.shape.type==="bitmap"){var A=Math.PI/10*h.wobble,F=Math.abs(j-O)*.1,J=Math.abs(G-U)*.1,W=h.shape.bitmap.width*h.scalar,V=h.shape.bitmap.height*h.scalar,Z=new DOMMatrix([Math.cos(A)*F,Math.sin(A)*F,-Math.sin(A)*J,Math.cos(A)*J,h.x,h.y]);Z.multiplySelf(new DOMMatrix(h.shape.matrix));var X=g.createPattern(d.transform(h.shape.bitmap),"no-repeat");X.setTransform(Z),g.globalAlpha=1-P,g.fillStyle=X,g.fillRect(h.x-W/2,h.y-V/2,W,V),g.globalAlpha=1}else if(h.shape==="circle")g.ellipse?g.ellipse(h.x,h.y,Math.abs(j-O)*h.ovalScalar,Math.abs(G-U)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI):H(g,h.x,h.y,Math.abs(j-O)*h.ovalScalar,Math.abs(G-U)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI);else if(h.shape==="star")for(var q=Math.PI/2*3,re=4*h.scalar,ae=8*h.scalar,K=h.x,fe=h.y,be=5,ue=Math.PI/be;be--;)K=h.x+Math.cos(q)*ae,fe=h.y+Math.sin(q)*ae,g.lineTo(K,fe),q+=ue,K=h.x+Math.cos(q)*re,fe=h.y+Math.sin(q)*re,g.lineTo(K,fe),q+=ue;else g.moveTo(Math.floor(h.x),Math.floor(h.y)),g.lineTo(Math.floor(h.wobbleX),Math.floor(U)),g.lineTo(Math.floor(j),Math.floor(G)),g.lineTo(Math.floor(O),Math.floor(h.wobbleY));return g.closePath(),g.fill(),h.tick<h.totalTicks}function y(g,h,P,O,U){var j=h.slice(),G=g.getContext("2d"),A,F,J=c(function(W){function V(){A=F=null,G.clearRect(0,0,O.width,O.height),d.clear(),U(),W()}function Z(){n&&!(O.width===i.width&&O.height===i.height)&&(O.width=g.width=i.width,O.height=g.height=i.height),!O.width&&!O.height&&(P(g),O.width=g.width,O.height=g.height),G.clearRect(0,0,O.width,O.height),j=j.filter(function(X){return N(G,X)}),j.length?A=u.frame(Z):V()}A=u.frame(Z),F=V});return{addFettis:function(W){return j=j.concat(W),J},canvas:g,promise:J,reset:function(){A&&u.cancel(A),F&&F()}}}function _(g,h){var P=!g,O=!!T(h||{},"resize"),U=!1,j=T(h,"disableForReducedMotion",Boolean),G=o&&!!T(h||{},"useWorker"),A=G?p():null,F=P?$:R,J=g&&A?!!g.__confetti_initialized:!1,W=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,V;function Z(q,re,ae){for(var K=T(q,"particleCount",k),fe=T(q,"angle",Number),be=T(q,"spread",Number),ue=T(q,"startVelocity",Number),Ie=T(q,"decay",Number),it=T(q,"gravity",Number),st=T(q,"drift",Number),Ge=T(q,"colors",w),ot=T(q,"ticks",Number),qe=T(q,"shapes"),rt=T(q,"scalar"),at=!!T(q,"flat"),Je=S(q),We=K,Le=[],lt=g.width*Je.x,ct=g.height*Je.y;We--;)Le.push(B({x:lt,y:ct,angle:fe,spread:be,startVelocity:ue,color:Ge[We%Ge.length],shape:qe[L(0,qe.length)],ticks:ot,decay:Ie,gravity:it,drift:st,scalar:rt,flat:at}));return V?V.addFettis(Le):(V=y(g,Le,F,re,ae),V.promise)}function X(q){var re=j||T(q,"disableForReducedMotion",Boolean),ae=T(q,"zIndex",Number);if(re&&W)return c(function(ue){ue()});P&&V?g=V.canvas:P&&!g&&(g=E(ae),document.body.appendChild(g)),O&&!J&&F(g);var K={width:g.width,height:g.height};A&&!J&&A.init(g),J=!0,A&&(g.__confetti_initialized=!0);function fe(){if(A){var ue={getBoundingClientRect:function(){if(!P)return g.getBoundingClientRect()}};F(ue),A.postMessage({resize:{width:ue.width,height:ue.height}});return}K.width=K.height=null}function be(){V=null,O&&(U=!1,e.removeEventListener("resize",fe)),P&&g&&(document.body.contains(g)&&document.body.removeChild(g),g=null,J=!1)}return O&&!U&&(U=!0,e.addEventListener("resize",fe,!1)),A?A.fire(q,K,be):Z(q,K,be)}return X.reset=function(){A&&A.reset(),V&&V.reset()},X}var se;function pe(){return se||(se=_(null,{useWorker:!0,resize:!0})),se}function ke(g,h,P,O,U,j,G){var A=new Path2D(g),F=new Path2D;F.addPath(A,new DOMMatrix(h));var J=new Path2D;return J.addPath(F,new DOMMatrix([Math.cos(G)*U,Math.sin(G)*U,-Math.sin(G)*j,Math.cos(G)*j,P,O])),J}function me(g){if(!r)throw new Error("path confetti are not supported in this browser");var h,P;typeof g=="string"?h=g:(h=g.path,P=g.matrix);var O=new Path2D(h),U=document.createElement("canvas"),j=U.getContext("2d");if(!P){for(var G=1e3,A=G,F=G,J=0,W=0,V,Z,X=0;X<G;X+=2)for(var q=0;q<G;q+=2)j.isPointInPath(O,X,q,"nonzero")&&(A=Math.min(A,X),F=Math.min(F,q),J=Math.max(J,X),W=Math.max(W,q));V=J-A,Z=W-F;var re=10,ae=Math.min(re/V,re/Z);P=[ae,0,0,ae,-Math.round(V/2+A)*ae,-Math.round(Z/2+F)*ae]}return{type:"path",path:h,matrix:P}}function Ce(g){var h,P=1,O="#000000",U='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof g=="string"?h=g:(h=g.text,P="scalar"in g?g.scalar:P,U="fontFamily"in g?g.fontFamily:U,O="color"in g?g.color:O);var j=10*P,G=""+j+"px "+U,A=new OffscreenCanvas(j,j),F=A.getContext("2d");F.font=G;var J=F.measureText(h),W=Math.ceil(J.actualBoundingBoxRight+J.actualBoundingBoxLeft),V=Math.ceil(J.actualBoundingBoxAscent+J.actualBoundingBoxDescent),Z=2,X=J.actualBoundingBoxLeft+Z,q=J.actualBoundingBoxAscent+Z;W+=Z+Z,V+=Z+Z,A=new OffscreenCanvas(W,V),F=A.getContext("2d"),F.font=G,F.fillStyle=O,F.fillText(h,X,q);var re=1/P;return{type:"bitmap",bitmap:A.transferToImageBitmap(),matrix:[re,0,0,re,-W*re/2,-V*re/2]}}t.exports=function(){return pe().apply(this,arguments)},t.exports.reset=function(){pe().reset()},t.exports.create=_,t.exports.shapeFromPath=me,t.exports.shapeFromText=Ce})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),kn,!1);const Et=kn.exports;kn.exports.create;function _o(s,e){var a;if(!s)return"";setTimeout(()=>{try{Et({particleCount:90,spread:70,origin:{y:.6}}),setTimeout(()=>{Et({particleCount:60,angle:60,spread:55,origin:{x:0}}),Et({particleCount:60,angle:120,spread:55,origin:{x:1}})},250)}catch(l){console.log("Confetti trigger:",l)}},100);const t=s.team===1?"Team 1 (Saffron)":"Team 2 (Green)",n=s.reason==="SQUAD_5X5_COMPLETE",i=s.reason==="OPPONENT_QUIT",o=i?s.quittingPlayerName?`🚪 ${s.quittingPlayerName} quit the match! ${M("winReasonForfeit")}`:M("winReasonForfeit"):n?M("winReasonSquad",{team:s.team}):M("winReasonCenter"),r=i?`Default Win • ${((a=s.player)==null?void 0:a.name)||t}`:`${M("victoryDesc",{team:s.team})} (${t})`;return`
    <div class="modal-backdrop" id="victory-modal-backdrop">
      <div class="modal-dialog victory-dialog">
        <div class="victory-header">
          <div class="trophy-bounce">🏆</div>
          <h2 class="victory-title">${M("victoryTitle")}</h2>
          <span class="victory-subtitle">${r}</span>
        </div>

        <div class="modal-body">
          <div class="victory-stats-grid">
            <div class="stat-card">
              <span class="stat-num">${s.stats.rollsCount||0}</span>
              <span class="stat-lbl">Total Rolls</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">${s.stats.capturesCount||0}</span>
              <span class="stat-lbl">Katta Strikes</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">${s.stats.bonusTurnsCount||0}</span>
              <span class="stat-lbl">Bonus Chances</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">${s.stats.durationSec||0}s</span>
              <span class="stat-lbl">Match Duration</span>
            </div>
          </div>
          <div style="margin-top: 14px; background: rgba(241, 196, 15, 0.15); border: 1px solid rgba(241, 196, 15, 0.4); padding: 12px; border-radius: 8px;">
            <p class="victory-quote" style="margin: 0; color: #f1c40f; font-weight: 500; font-size: 0.95rem;">
              ${o}
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-play-again" id="btn-victory-restart">
            ${M("rematchBtn")}
          </button>
        </div>
      </div>
    </div>
  `}function ms(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fe={},At,Ri;function Mo(){return Ri||(Ri=1,At=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),At}var xt={},_e={},Pi;function $e(){if(Pi)return _e;Pi=1;let s;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return _e.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},_e.getSymbolTotalCodewords=function(n){return e[n]},_e.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},_e.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');s=n},_e.isKanjiModeEnabled=function(){return typeof s<"u"},_e.toSJIS=function(n){return s(n)},_e}var $t={},Ii;function _n(){return Ii||(Ii=1,(function(s){s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+t)}}s.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},s.from=function(n,i){if(s.isValid(n))return n;try{return e(n)}catch{return i}}})($t)),$t}var Ot,Ei;function Ro(){if(Ei)return Ot;Ei=1;function s(){this.buffer=[],this.length=0}return s.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Ot=s,Ot}var wt,Ai;function Po(){if(Ai)return wt;Ai=1;function s(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return s.prototype.set=function(e,t,n,i){const o=e*this.size+t;this.data[o]=n,i&&(this.reservedBit[o]=!0)},s.prototype.get=function(e,t){return this.data[e*this.size+t]},s.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},s.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},wt=s,wt}var Bt={},xi;function Io(){return xi||(xi=1,(function(s){const e=$e().getSymbolSize;s.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,o=e(n),r=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-r;return a.push(6),a.reverse()},s.getPositions=function(n){const i=[],o=s.getRowColCoords(n),r=o.length;for(let a=0;a<r;a++)for(let l=0;l<r;l++)a===0&&l===0||a===0&&l===r-1||a===r-1&&l===0||i.push([o[a],o[l]]);return i}})(Bt)),Bt}var Nt={},$i;function Eo(){if($i)return Nt;$i=1;const s=$e().getSymbolSize,e=7;return Nt.getPositions=function(n){const i=s(n);return[[0,0],[i-e,0],[0,i-e]]},Nt}var Lt={},Oi;function Ao(){return Oi||(Oi=1,(function(s){s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};s.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},s.from=function(i){return s.isValid(i)?parseInt(i,10):void 0},s.getPenaltyN1=function(i){const o=i.size;let r=0,a=0,l=0,c=null,d=null;for(let u=0;u<o;u++){a=l=0,c=d=null;for(let p=0;p<o;p++){let f=i.get(u,p);f===c?a++:(a>=5&&(r+=e.N1+(a-5)),c=f,a=1),f=i.get(p,u),f===d?l++:(l>=5&&(r+=e.N1+(l-5)),d=f,l=1)}a>=5&&(r+=e.N1+(a-5)),l>=5&&(r+=e.N1+(l-5))}return r},s.getPenaltyN2=function(i){const o=i.size;let r=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&r++}return r*e.N2},s.getPenaltyN3=function(i){const o=i.size;let r=0,a=0,l=0;for(let c=0;c<o;c++){a=l=0;for(let d=0;d<o;d++)a=a<<1&2047|i.get(c,d),d>=10&&(a===1488||a===93)&&r++,l=l<<1&2047|i.get(d,c),d>=10&&(l===1488||l===93)&&r++}return r*e.N3},s.getPenaltyN4=function(i){let o=0;const r=i.data.length;for(let l=0;l<r;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/r/5)-10)*e.N4};function t(n,i,o){switch(n){case s.Patterns.PATTERN000:return(i+o)%2===0;case s.Patterns.PATTERN001:return i%2===0;case s.Patterns.PATTERN010:return o%3===0;case s.Patterns.PATTERN011:return(i+o)%3===0;case s.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case s.Patterns.PATTERN101:return i*o%2+i*o%3===0;case s.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case s.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}s.applyMask=function(i,o){const r=o.size;for(let a=0;a<r;a++)for(let l=0;l<r;l++)o.isReserved(l,a)||o.xor(l,a,t(i,l,a))},s.getBestMask=function(i,o){const r=Object.keys(s.Patterns).length;let a=0,l=1/0;for(let c=0;c<r;c++){o(c),s.applyMask(c,i);const d=s.getPenaltyN1(i)+s.getPenaltyN2(i)+s.getPenaltyN3(i)+s.getPenaltyN4(i);s.applyMask(c,i),d<l&&(l=d,a=c)}return a}})(Lt)),Lt}var ht={},wi;function fs(){if(wi)return ht;wi=1;const s=_n(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ht.getBlocksCount=function(i,o){switch(o){case s.L:return e[(i-1)*4+0];case s.M:return e[(i-1)*4+1];case s.Q:return e[(i-1)*4+2];case s.H:return e[(i-1)*4+3];default:return}},ht.getTotalCodewordsCount=function(i,o){switch(o){case s.L:return t[(i-1)*4+0];case s.M:return t[(i-1)*4+1];case s.Q:return t[(i-1)*4+2];case s.H:return t[(i-1)*4+3];default:return}},ht}var Ht={},Ke={},Bi;function xo(){if(Bi)return Ke;Bi=1;const s=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)s[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)s[i]=s[i-255]})(),Ke.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Ke.exp=function(n){return s[n]},Ke.mul=function(n,i){return n===0||i===0?0:s[e[n]+e[i]]},Ke}var Ni;function $o(){return Ni||(Ni=1,(function(s){const e=xo();s.mul=function(n,i){const o=new Uint8Array(n.length+i.length-1);for(let r=0;r<n.length;r++)for(let a=0;a<i.length;a++)o[r+a]^=e.mul(n[r],i[a]);return o},s.mod=function(n,i){let o=new Uint8Array(n);for(;o.length-i.length>=0;){const r=o[0];for(let l=0;l<i.length;l++)o[l]^=e.mul(i[l],r);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},s.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let o=0;o<n;o++)i=s.mul(i,new Uint8Array([1,e.exp(o)]));return i}})(Ht)),Ht}var Ft,Li;function Oo(){if(Li)return Ft;Li=1;const s=$o();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=s.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const o=s.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const a=new Uint8Array(this.degree);return a.set(o,r),a}return o},Ft=e,Ft}var Dt={},Ut={},jt={},Hi;function gs(){return Hi||(Hi=1,jt.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),jt}var Se={},Fi;function bs(){if(Fi)return Se;Fi=1;const s="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Se.KANJI=new RegExp(t,"g"),Se.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Se.BYTE=new RegExp(n,"g"),Se.NUMERIC=new RegExp(s,"g"),Se.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),o=new RegExp("^"+s+"$"),r=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Se.testKanji=function(l){return i.test(l)},Se.testNumeric=function(l){return o.test(l)},Se.testAlphanumeric=function(l){return r.test(l)},Se}var Di;function Oe(){return Di||(Di=1,(function(s){const e=gs(),t=bs();s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(o,r){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?o.ccBits[0]:r<27?o.ccBits[1]:o.ccBits[2]},s.getBestModeForData=function(o){return t.testNumeric(o)?s.NUMERIC:t.testAlphanumeric(o)?s.ALPHANUMERIC:t.testKanji(o)?s.KANJI:s.BYTE},s.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},s.isValid=function(o){return o&&o.bit&&o.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+i)}}s.from=function(o,r){if(s.isValid(o))return o;try{return n(o)}catch{return r}}})(Ut)),Ut}var Ui;function wo(){return Ui||(Ui=1,(function(s){const e=$e(),t=fs(),n=_n(),i=Oe(),o=gs(),r=7973,a=e.getBCHDigit(r);function l(p,f,b){for(let C=1;C<=40;C++)if(f<=s.getCapacity(C,b,p))return C}function c(p,f){return i.getCharCountIndicator(p,f)+4}function d(p,f){let b=0;return p.forEach(function(C){const T=c(C.mode,f);b+=T+C.getBitsLength()}),b}function u(p,f){for(let b=1;b<=40;b++)if(d(p,b)<=s.getCapacity(b,f,i.MIXED))return b}s.from=function(f,b){return o.isValid(f)?parseInt(f,10):b},s.getCapacity=function(f,b,C){if(!o.isValid(f))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=i.BYTE);const T=e.getSymbolTotalCodewords(f),k=t.getTotalCodewordsCount(f,b),L=(T-k)*8;if(C===i.MIXED)return L;const I=L-c(C,f);switch(C){case i.NUMERIC:return Math.floor(I/10*3);case i.ALPHANUMERIC:return Math.floor(I/11*2);case i.KANJI:return Math.floor(I/13);case i.BYTE:default:return Math.floor(I/8)}},s.getBestVersionForData=function(f,b){let C;const T=n.from(b,n.M);if(Array.isArray(f)){if(f.length>1)return u(f,T);if(f.length===0)return 1;C=f[0]}else C=f;return l(C.mode,C.getLength(),T)},s.getEncodedBits=function(f){if(!o.isValid(f)||f<7)throw new Error("Invalid QR Code version");let b=f<<12;for(;e.getBCHDigit(b)-a>=0;)b^=r<<e.getBCHDigit(b)-a;return f<<12|b}})(Dt)),Dt}var Gt={},ji;function Bo(){if(ji)return Gt;ji=1;const s=$e(),e=1335,t=21522,n=s.getBCHDigit(e);return Gt.getEncodedBits=function(o,r){const a=o.bit<<3|r;let l=a<<10;for(;s.getBCHDigit(l)-n>=0;)l^=e<<s.getBCHDigit(l)-n;return(a<<10|l)^t},Gt}var qt={},Jt,Gi;function No(){if(Gi)return Jt;Gi=1;const s=Oe();function e(t){this.mode=s.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),n.put(r,10);const a=this.data.length-i;a>0&&(o=this.data.substr(i),r=parseInt(o,10),n.put(r,a*3+1))},Jt=e,Jt}var Wt,qi;function Lo(){if(qi)return Wt;qi=1;const s=Oe(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=s.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let o;for(o=0;o+2<=this.data.length;o+=2){let r=e.indexOf(this.data[o])*45;r+=e.indexOf(this.data[o+1]),i.put(r,11)}this.data.length%2&&i.put(e.indexOf(this.data[o]),6)},Wt=t,Wt}var Vt,Ji;function Ho(){if(Ji)return Vt;Ji=1;const s=Oe();function e(t){this.mode=s.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Vt=e,Vt}var zt,Wi;function Fo(){if(Wi)return zt;Wi=1;const s=Oe(),e=$e();function t(n){this.mode=s.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let o=e.toSJIS(this.data[i]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),n.put(o,13)}},zt=t,zt}var Kt={exports:{}},Vi;function Do(){return Vi||(Vi=1,(function(s){var e={single_source_shortest_paths:function(t,n,i){var o={},r={};r[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var l,c,d,u,p,f,b,C,T;!a.empty();){l=a.pop(),c=l.value,u=l.cost,p=t[c]||{};for(d in p)p.hasOwnProperty(d)&&(f=p[d],b=u+f,C=r[d],T=typeof r[d]>"u",(T||C>b)&&(r[d]=b,a.push(d,b),o[d]=c))}if(typeof i<"u"&&typeof r[i]>"u"){var k=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(k)}return o},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],o=n;o;)i.push(o),t[o],o=t[o];return i.reverse(),i},find_path:function(t,n,i){var o=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},o;t=t||{};for(o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};s.exports=e})(Kt)),Kt.exports}var zi;function Uo(){return zi||(zi=1,(function(s){const e=Oe(),t=No(),n=Lo(),i=Ho(),o=Fo(),r=bs(),a=$e(),l=Do();function c(k){return unescape(encodeURIComponent(k)).length}function d(k,L,I){const w=[];let ee;for(;(ee=k.exec(I))!==null;)w.push({data:ee[0],index:ee.index,mode:L,length:ee[0].length});return w}function u(k){const L=d(r.NUMERIC,e.NUMERIC,k),I=d(r.ALPHANUMERIC,e.ALPHANUMERIC,k);let w,ee;return a.isKanjiModeEnabled()?(w=d(r.BYTE,e.BYTE,k),ee=d(r.KANJI,e.KANJI,k)):(w=d(r.BYTE_KANJI,e.BYTE,k),ee=[]),L.concat(I,w,ee).sort(function($,R){return $.index-R.index}).map(function($){return{data:$.data,mode:$.mode,length:$.length}})}function p(k,L){switch(L){case e.NUMERIC:return t.getBitsLength(k);case e.ALPHANUMERIC:return n.getBitsLength(k);case e.KANJI:return o.getBitsLength(k);case e.BYTE:return i.getBitsLength(k)}}function f(k){return k.reduce(function(L,I){const w=L.length-1>=0?L[L.length-1]:null;return w&&w.mode===I.mode?(L[L.length-1].data+=I.data,L):(L.push(I),L)},[])}function b(k){const L=[];for(let I=0;I<k.length;I++){const w=k[I];switch(w.mode){case e.NUMERIC:L.push([w,{data:w.data,mode:e.ALPHANUMERIC,length:w.length},{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.ALPHANUMERIC:L.push([w,{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.KANJI:L.push([w,{data:w.data,mode:e.BYTE,length:c(w.data)}]);break;case e.BYTE:L.push([{data:w.data,mode:e.BYTE,length:c(w.data)}])}}return L}function C(k,L){const I={},w={start:{}};let ee=["start"];for(let S=0;S<k.length;S++){const $=k[S],R=[];for(let E=0;E<$.length;E++){const H=$[E],B=""+S+E;R.push(B),I[B]={node:H,lastCount:0},w[B]={};for(let N=0;N<ee.length;N++){const y=ee[N];I[y]&&I[y].node.mode===H.mode?(w[y][B]=p(I[y].lastCount+H.length,H.mode)-p(I[y].lastCount,H.mode),I[y].lastCount+=H.length):(I[y]&&(I[y].lastCount=H.length),w[y][B]=p(H.length,H.mode)+4+e.getCharCountIndicator(H.mode,L))}}ee=R}for(let S=0;S<ee.length;S++)w[ee[S]].end=0;return{map:w,table:I}}function T(k,L){let I;const w=e.getBestModeForData(k);if(I=e.from(L,w),I!==e.BYTE&&I.bit<w.bit)throw new Error('"'+k+'" cannot be encoded with mode '+e.toString(I)+`.
 Suggested mode is: `+e.toString(w));switch(I===e.KANJI&&!a.isKanjiModeEnabled()&&(I=e.BYTE),I){case e.NUMERIC:return new t(k);case e.ALPHANUMERIC:return new n(k);case e.KANJI:return new o(k);case e.BYTE:return new i(k)}}s.fromArray=function(L){return L.reduce(function(I,w){return typeof w=="string"?I.push(T(w,null)):w.data&&I.push(T(w.data,w.mode)),I},[])},s.fromString=function(L,I){const w=u(L,a.isKanjiModeEnabled()),ee=b(w),S=C(ee,I),$=l.find_path(S.map,"start","end"),R=[];for(let E=1;E<$.length-1;E++)R.push(S.table[$[E]].node);return s.fromArray(f(R))},s.rawSplit=function(L){return s.fromArray(u(L,a.isKanjiModeEnabled()))}})(qt)),qt}var Ki;function jo(){if(Ki)return xt;Ki=1;const s=$e(),e=_n(),t=Ro(),n=Po(),i=Io(),o=Eo(),r=Ao(),a=fs(),l=Oo(),c=wo(),d=Bo(),u=Oe(),p=Uo();function f(S,$){const R=S.size,E=o.getPositions($);for(let H=0;H<E.length;H++){const B=E[H][0],N=E[H][1];for(let y=-1;y<=7;y++)if(!(B+y<=-1||R<=B+y))for(let _=-1;_<=7;_++)N+_<=-1||R<=N+_||(y>=0&&y<=6&&(_===0||_===6)||_>=0&&_<=6&&(y===0||y===6)||y>=2&&y<=4&&_>=2&&_<=4?S.set(B+y,N+_,!0,!0):S.set(B+y,N+_,!1,!0))}}function b(S){const $=S.size;for(let R=8;R<$-8;R++){const E=R%2===0;S.set(R,6,E,!0),S.set(6,R,E,!0)}}function C(S,$){const R=i.getPositions($);for(let E=0;E<R.length;E++){const H=R[E][0],B=R[E][1];for(let N=-2;N<=2;N++)for(let y=-2;y<=2;y++)N===-2||N===2||y===-2||y===2||N===0&&y===0?S.set(H+N,B+y,!0,!0):S.set(H+N,B+y,!1,!0)}}function T(S,$){const R=S.size,E=c.getEncodedBits($);let H,B,N;for(let y=0;y<18;y++)H=Math.floor(y/3),B=y%3+R-8-3,N=(E>>y&1)===1,S.set(H,B,N,!0),S.set(B,H,N,!0)}function k(S,$,R){const E=S.size,H=d.getEncodedBits($,R);let B,N;for(B=0;B<15;B++)N=(H>>B&1)===1,B<6?S.set(B,8,N,!0):B<8?S.set(B+1,8,N,!0):S.set(E-15+B,8,N,!0),B<8?S.set(8,E-B-1,N,!0):B<9?S.set(8,15-B-1+1,N,!0):S.set(8,15-B-1,N,!0);S.set(E-8,8,1,!0)}function L(S,$){const R=S.size;let E=-1,H=R-1,B=7,N=0;for(let y=R-1;y>0;y-=2)for(y===6&&y--;;){for(let _=0;_<2;_++)if(!S.isReserved(H,y-_)){let se=!1;N<$.length&&(se=($[N]>>>B&1)===1),S.set(H,y-_,se),B--,B===-1&&(N++,B=7)}if(H+=E,H<0||R<=H){H-=E,E=-E;break}}}function I(S,$,R){const E=new t;R.forEach(function(_){E.put(_.mode.bit,4),E.put(_.getLength(),u.getCharCountIndicator(_.mode,S)),_.write(E)});const H=s.getSymbolTotalCodewords(S),B=a.getTotalCodewordsCount(S,$),N=(H-B)*8;for(E.getLengthInBits()+4<=N&&E.put(0,4);E.getLengthInBits()%8!==0;)E.putBit(0);const y=(N-E.getLengthInBits())/8;for(let _=0;_<y;_++)E.put(_%2?17:236,8);return w(E,S,$)}function w(S,$,R){const E=s.getSymbolTotalCodewords($),H=a.getTotalCodewordsCount($,R),B=E-H,N=a.getBlocksCount($,R),y=E%N,_=N-y,se=Math.floor(E/N),pe=Math.floor(B/N),ke=pe+1,me=se-pe,Ce=new l(me);let g=0;const h=new Array(N),P=new Array(N);let O=0;const U=new Uint8Array(S.buffer);for(let J=0;J<N;J++){const W=J<_?pe:ke;h[J]=U.slice(g,g+W),P[J]=Ce.encode(h[J]),g+=W,O=Math.max(O,W)}const j=new Uint8Array(E);let G=0,A,F;for(A=0;A<O;A++)for(F=0;F<N;F++)A<h[F].length&&(j[G++]=h[F][A]);for(A=0;A<me;A++)for(F=0;F<N;F++)j[G++]=P[F][A];return j}function ee(S,$,R,E){let H;if(Array.isArray(S))H=p.fromArray(S);else if(typeof S=="string"){let se=$;if(!se){const pe=p.rawSplit(S);se=c.getBestVersionForData(pe,R)}H=p.fromString(S,se||40)}else throw new Error("Invalid data");const B=c.getBestVersionForData(H,R);if(!B)throw new Error("The amount of data is too big to be stored in a QR Code");if(!$)$=B;else if($<B)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+B+`.
`);const N=I($,R,H),y=s.getSymbolSize($),_=new n(y);return f(_,$),b(_),C(_,$),k(_,R,0),$>=7&&T(_,$),L(_,N),isNaN(E)&&(E=r.getBestMask(_,k.bind(null,_,R))),r.applyMask(E,_),k(_,R,E),{modules:_,version:$,errorCorrectionLevel:R,maskPattern:E,segments:H}}return xt.create=function($,R){if(typeof $>"u"||$==="")throw new Error("No input text");let E=e.M,H,B;return typeof R<"u"&&(E=e.from(R.errorCorrectionLevel,e.M),H=c.from(R.version),B=r.from(R.maskPattern),R.toSJISFunc&&s.setToSJISFunction(R.toSJISFunc)),ee($,H,E,B)},xt}var Yt={},Qt={},Yi;function ys(){return Yi||(Yi=1,(function(s){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(o){return[o,o]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}s.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,o=n.width&&n.width>=21?n.width:void 0,r=n.scale||4;return{width:o,scale:o?4:r,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},s.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},s.getImageWidth=function(n,i){const o=s.getScale(n,i);return Math.floor((n+i.margin*2)*o)},s.qrToImageData=function(n,i,o){const r=i.modules.size,a=i.modules.data,l=s.getScale(r,o),c=Math.floor((r+o.margin*2)*l),d=o.margin*l,u=[o.color.light,o.color.dark];for(let p=0;p<c;p++)for(let f=0;f<c;f++){let b=(p*c+f)*4,C=o.color.light;if(p>=d&&f>=d&&p<c-d&&f<c-d){const T=Math.floor((p-d)/l),k=Math.floor((f-d)/l);C=u[a[T*r+k]?1:0]}n[b++]=C.r,n[b++]=C.g,n[b++]=C.b,n[b]=C.a}}})(Qt)),Qt}var Qi;function Go(){return Qi||(Qi=1,(function(s){const e=ys();function t(i,o,r){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=r,o.width=r,o.style.height=r+"px",o.style.width=r+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}s.render=function(o,r,a){let l=a,c=r;typeof l>"u"&&(!r||!r.getContext)&&(l=r,r=void 0),r||(c=n()),l=e.getOptions(l);const d=e.getImageWidth(o.modules.size,l),u=c.getContext("2d"),p=u.createImageData(d,d);return e.qrToImageData(p.data,o,l),t(u,c,d),u.putImageData(p,0,0),c},s.renderToDataURL=function(o,r,a){let l=a;typeof l>"u"&&(!r||!r.getContext)&&(l=r,r=void 0),l||(l={});const c=s.render(o,r,l),d=l.type||"image/png",u=l.rendererOpts||{};return c.toDataURL(d,u.quality)}})(Yt)),Yt}var Zt={},Zi;function qo(){if(Zi)return Zt;Zi=1;const s=ys();function e(i,o){const r=i.a/255,a=o+'="'+i.hex+'"';return r<1?a+" "+o+'-opacity="'+r.toFixed(2).slice(1)+'"':a}function t(i,o,r){let a=i+o;return typeof r<"u"&&(a+=" "+r),a}function n(i,o,r){let a="",l=0,c=!1,d=0;for(let u=0;u<i.length;u++){const p=Math.floor(u%o),f=Math.floor(u/o);!p&&!c&&(c=!0),i[u]?(d++,u>0&&p>0&&i[u-1]||(a+=c?t("M",p+r,.5+f+r):t("m",l,0),l=0,c=!1),p+1<o&&i[u+1]||(a+=t("h",d),d=0)):l++}return a}return Zt.render=function(o,r,a){const l=s.getOptions(r),c=o.modules.size,d=o.modules.data,u=c+l.margin*2,p=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",f="<path "+e(l.color.dark,"stroke")+' d="'+n(d,c,l.margin)+'"/>',b='viewBox="0 0 '+u+" "+u+'"',T='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+b+' shape-rendering="crispEdges">'+p+f+`</svg>
`;return typeof a=="function"&&a(null,T),T},Zt}var Xi;function Jo(){if(Xi)return Fe;Xi=1;const s=Mo(),e=jo(),t=Go(),n=qo();function i(o,r,a,l,c){const d=[].slice.call(arguments,1),u=d.length,p=typeof d[u-1]=="function";if(!p&&!s())throw new Error("Callback required as last argument");if(p){if(u<2)throw new Error("Too few arguments provided");u===2?(c=a,a=r,r=l=void 0):u===3&&(r.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=a,a=r,r=void 0))}else{if(u<1)throw new Error("Too few arguments provided");return u===1?(a=r,r=l=void 0):u===2&&!r.getContext&&(l=a,a=r,r=void 0),new Promise(function(f,b){try{const C=e.create(a,l);f(o(C,r,l))}catch(C){b(C)}})}try{const f=e.create(a,l);c(null,o(f,r,l))}catch(f){c(f)}}return Fe.create=e.create,Fe.toCanvas=i.bind(null,t.render),Fe.toDataURL=i.bind(null,t.renderToDataURL),Fe.toString=i.bind(null,function(o,r,a){return n.render(o,a)}),Fe}var Wo=Jo();const Vo=ms(Wo);let pt=null;async function Xt(s){if(pt)return pt;try{return pt=await Vo.toDataURL(s,{width:260,margin:2,color:{dark:"#1e130c",light:"#fffdf7"}}),pt}catch(e){return console.error("QR Code generation error:",e),""}}function zo(s,e,t){return`
    <div class="modal-backdrop" id="mobile-modal-backdrop">
      <div class="modal-dialog mobile-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">📱</span>
            <div>
              <h2 class="modal-title">Play on iPhone & Android</h2>
              <span class="modal-subtitle">Instant play on any mobile phone on your Wi-Fi</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-mobile">&times;</button>
        </div>

        <div class="modal-body mobile-body">
          <div class="qr-card">
            ${e?`<img src="${e}" alt="Scan QR Code to play on mobile" class="qr-image" />`:'<div class="qr-loading">Generating QR...</div>'}
            <p class="qr-instruction">📷 Point your iPhone or Android camera at this QR code to open the game!</p>
          </div>

          <div class="mobile-url-box">
            <span class="url-label">Direct Network URL:</span>
            <input type="text" readonly value="${t}" class="url-input" id="input-mobile-url" />
            <button class="btn-copy-url" id="btn-copy-url">📋 Copy</button>
          </div>

          <div class="mobile-tips-grid">
            <div class="mobile-tip-card">
              <h4>🍎 Apple iOS (Safari)</h4>
              <ol>
                <li>Scan QR or open URL in Safari.</li>
                <li>Tap the <strong>Share button</strong> (square with up arrow).</li>
                <li>Tap <strong>"Add to Home Screen"</strong>.</li>
                <li>Launch like a native full-screen app!</li>
              </ol>
            </div>

            <div class="mobile-tip-card">
              <h4>🤖 Google Android (Chrome)</h4>
              <ol>
                <li>Scan QR or open URL in Chrome.</li>
                <li>Tap the <strong>3-dots menu</strong> (top right).</li>
                <li>Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
                <li>Enjoy edge-to-edge native gaming with haptic vibration!</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" id="btn-modal-mobile-done">Close</button>
        </div>
      </div>
    </div>
  `}function Ko(s,e,t,n){const{isConnected:i,roomCode:o,myPlayerId:r,isHost:a,players:l,errorMsg:c,gameMode:d="2p"}=e,u=d==="4p"||e.mode==="4p";let p="";if(o){const f=u?l.length>=4:l.length>=2,b=l.length>=2,T=`https://api.whatsapp.com/send?text=${encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta cowrie board match! 🐚
Board Number: ${o}
Tap here to join immediately on your mobile: ${n}`)}`;p=`
      <div class="mp-room-active">
        <!-- Guaranteed Non-Repeating Board Number Hero Card -->
        <div class="board-number-hero-card">
          <div class="bn-badge-tag">🎯 GUARANTEED BOARD NUMBER</div>
          <div class="bn-code-row">
            <span class="bn-digits" id="text-board-number">${o}</span>
            <button class="btn-copy-bn" id="btn-copy-board-number" title="Copy Board Number">📋 Copy</button>
          </div>
          <span class="bn-subhint">Guaranteed unique board number — will never repeat in match history!</span>
        </div>

        <!-- 1-Tap Quick Share Actions -->
        <div class="mp-quick-actions-bar">
          <a href="${T}" target="_blank" class="btn-whatsapp-share" id="btn-share-whatsapp" rel="noopener noreferrer">
            <span class="wa-icon">💬</span>
            <span>Request Friend on WhatsApp</span>
          </a>
        </div>

        <!-- QR Code & Link Row -->
        <div class="mp-qr-box">
          ${t?`<img src="${t}" alt="Scan to join room" class="mp-qr-img" />`:'<div class="qr-loading">Generating QR...</div>'}
          <p class="mp-qr-hint">📱 Friend can scan this with mobile camera to join instantly!</p>
        </div>

        <div class="mp-share-link-row">
          <input type="text" readonly value="${n}" class="url-input" id="input-mp-room-link" />
          <button class="btn-copy-url" id="btn-copy-room-link">📋 Copy Link</button>
        </div>

        <!-- Player Slots Status -->
        <div class="mp-players-list">
          <div class="slots-header-row">
            <h4>👥 Board Players (${l.length} / ${u?"4":"2"}):</h4>
            <span class="slots-mode-tag">${u?"4-Player 2v2 Teams":"2-Player 1v1"}</span>
          </div>

          <div class="mp-player-chips">
            ${l.map(k=>`
              <div class="mp-player-chip ${k.id===r?"mp-chip-me":""}">
                <span class="chip-avatar">${k.team===1?k.id===1?"👑":"🦁":k.id===2?"🦚":"🦜"}</span>
                <div class="chip-details">
                  <span class="chip-name">${k.name}</span>
                  <span class="chip-team">Team ${k.team} ${k.id===r?"(You)":""}</span>
                </div>
              </div>
            `).join("")}

            ${u&&l.length<4?`
              <div class="mp-player-chip chip-slot-empty">
                <span class="chip-avatar">🤖</span>
                <div class="chip-details">
                  <span class="chip-name">System AI Pair</span>
                  <span class="chip-team">Opposite Team 2</span>
                </div>
              </div>
            `:""}
          </div>
        </div>

        <!-- 4-Player Pair Option or Waiting Notice -->
        ${u&&b&&l.length<4?`
          <div class="mp-ai-pair-card">
            <div class="ai-pair-info">
              <strong>👥 2 Friends Connected!</strong>
              <span>You two are Team 1. You can start right now with the System AI playing as the opposite pair (Team 2)!</span>
            </div>
            <button class="btn-primary btn-start-ai-pair" id="btn-start-4p-ai-pair">
              🤝 Start Now with System AI Opposite Pair
            </button>
          </div>
        `:""}

        ${!f&&(!u||l.length<2)?`
          <div class="mp-waiting-notice">
            <div class="waiting-spinner">⏳</div>
            <p>Waiting for your friend to open the link or enter Board Number on their phone...</p>
          </div>
        `:f?`
          <div class="mp-ready-notice">
            <span>🎉 All players connected! Board match is active in real time.</span>
          </div>
        `:""}
      </div>
    `}else p=`
      <div class="mp-setup-tabs">
        <div class="mp-tab-content">
          ${c?`<div class="mp-error-banner">⚠️ ${c}</div>`:""}
          
          <div class="mp-form-card">
            <h3>🎮 Request Friends to Play on Same Board</h3>
            <p class="mp-card-sub">Creates a guaranteed unique Board Number to share with your friends</p>
            <div class="form-row">
              <label>Your Name:</label>
              <input type="text" id="input-host-name" value="Player 1" class="mp-input" maxlength="16" />
            </div>
            <div class="form-row">
              <label>Match Type:</label>
              <select id="select-mp-mode" class="header-select">
                <option value="2p">2 Players (1 vs 1)</option>
                <option value="4p">4 Players (2 vs 2 Teams / AI Pair)</option>
              </select>
            </div>
            <button class="btn-primary btn-create-room" id="btn-action-create-room">
              🚀 Generate Board Number & Invite Friends
            </button>
          </div>

          <div class="mp-divider"><span>OR</span></div>

          <div class="mp-form-card">
            <h3>🔑 Join with Friend's Board Number</h3>
            <p class="mp-card-sub">Enter the Board Number shared by your friend (e.g. BK-260915-101-482)</p>
            <div class="form-row">
              <label>Board Number:</label>
              <input type="text" id="input-join-code" placeholder="e.g. BK-260915-101-482" class="mp-input mp-code-input" maxlength="28" />
            </div>
            <div class="form-row">
              <label>Your Name:</label>
              <input type="text" id="input-join-name" value="Player 2" class="mp-input" maxlength="16" />
            </div>
            <button class="btn-primary btn-join-room" id="btn-action-join-room">
              🤝 Join Board
            </button>
          </div>
        </div>
      </div>
    `;return`
    <div class="modal-backdrop" id="multiplayer-modal-backdrop">
      <div class="modal-dialog mp-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">🤝</span>
            <div>
              <h2 class="modal-title">Request Friend to Play on Same Board</h2>
              <span class="modal-subtitle">Real-time multiplayer over Wi-Fi / Mobile Network</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-mp">&times;</button>
        </div>

        <div class="modal-body">
          ${p}
        </div>

        <div class="modal-footer">
          ${o?`
            <button class="btn-icon btn-leave-room" id="btn-leave-room">Leave Board</button>
            <button class="btn-primary" id="btn-mp-play-now">Start Playing!</button>
          `:`
            <button class="btn-primary" id="btn-modal-mp-close">Close</button>
          `}
        </div>
      </div>
    </div>
  `}const vs=[{emoji:"🎲",label:"బాఱ! (Baara 12!)",text:"బాఱ! (Baara 12!) 🎲"},{emoji:"💥",label:"కట్టా! (Katta!)",text:"కట్టా! (Katta Strike!) 💥"},{emoji:"👏",label:"Good Move!",text:"Super move, friend! 👏"},{emoji:"🏃",label:"Catch me!",text:"Catch my coin if you can! 🏃"},{emoji:"⏳",label:"Hurry up!",text:"Hurry up, timer is running! ⏳"},{emoji:"😂",label:"Haha!",text:"Haha! Better luck next roll! 😂"},{emoji:"🤝",label:"Good match!",text:"Great game! Good match! 🤝"},{emoji:"🔥",label:"I will win!",text:"Center Home is mine! 🔥"}],Yo=["😀","😂","🤣","😎","🥳","🔥","👏","🎲","💥","🏃","⏳","👑","🪙","🤝","🎯","🤩"];function Qo(s,e=[],t=1){const n=e.length===0?'<div class="chat-empty-state">💬 Send a smiley, village taunt, or chat message!</div>':e.map(i=>{const o=i.senderId===t;return`
          <div class="chat-msg-row ${o?"msg-me":"msg-friend"}">
            <span class="msg-sender">${o?"You":i.senderName}:</span>
            <span class="msg-bubble">${an(i.text)}</span>
            <span class="msg-time">${i.time||""}</span>
          </div>
        `}).join("");return`
    <div class="modal-backdrop" id="chat-modal-backdrop">
      <div class="modal-dialog chat-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">💬</span>
            <div>
              <h2 class="modal-title">Live Chat & Reactions</h2>
              <span class="modal-subtitle">Chat, smileys & village taunts</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-chat">&times;</button>
        </div>

        <div class="chat-body">
          <!-- Quick Smilies Bar -->
          <div class="smilies-bar-section">
            <div class="smilies-bar-title">😀 Tap a Smiley to send:</div>
            <div class="smilies-bar-row">
              ${Yo.map(i=>`
                <button class="btn-smiley-chip" data-emoji="${i}" title="${i}">${i}</button>
              `).join("")}
            </div>
          </div>

          <!-- Quick Village Taunts -->
          <div class="quick-taunts-section">
            <div class="quick-taunts-title">⚡ Quick Village Taunts:</div>
            <div class="quick-taunts-grid">
              ${vs.map((i,o)=>`
                <button class="btn-quick-taunt" data-taunt-index="${o}">
                  ${i.emoji} ${i.label}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Message History -->
          <div class="chat-history" id="chat-history-scroll">
            ${n}
          </div>
        </div>

        <div class="chat-input-bar">
          <input type="text" id="input-chat-text" class="chat-input" placeholder="Type a message..." maxlength="100" />
          <button class="btn-primary btn-send-chat" id="btn-send-chat">Send 📤</button>
        </div>
      </div>
    </div>
  `}function Zo(s){return s?`
    <div class="floating-chat-bubble animated-bubble">
      <span class="bubble-avatar">💬</span>
      <div class="bubble-content">
        <span class="bubble-sender">${an(s.senderName)}:</span>
        <span class="bubble-text">${an(s.text)}</span>
      </div>
    </div>
  `:""}function an(s){return s?s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}const en="bharakhatta_coins_wallet",tn=1e3,Xo=500,er=100,kt=[100,250,500,1e3,2500,5e3];class tr{constructor(){this.balance=this.loadBalance()}loadBalance(){try{const e=localStorage.getItem("bk_current_user_mobile");if(e){const n=localStorage.getItem(`bk_user_${e}`);if(n){const i=JSON.parse(n);if(typeof i.walletBalance=="number"&&i.walletBalance>=0)return i.walletBalance}}const t=localStorage.getItem(en);if(t!==null){const n=parseInt(t,10);if(!isNaN(n)&&n>=0)return n}return localStorage.setItem(en,tn.toString()),tn}catch{return tn}}saveBalance(){try{localStorage.setItem(en,this.balance.toString());const e=localStorage.getItem("bk_current_user_mobile");if(e){const t=localStorage.getItem(`bk_user_${e}`);if(t){const n=JSON.parse(t);n.walletBalance=this.balance,localStorage.setItem(`bk_user_${e}`,JSON.stringify(n))}}}catch{}}getBalance(){return this.balance}canAfford(e){return this.balance>=e}placeBet(e){return this.canAfford(e)?(this.balance-=e,this.saveBalance(),!0):!1}awardPot(e){return this.balance+=e,this.saveBalance(),this.balance}addCoins(e){return this.balance+=Math.max(0,e),this.saveBalance(),this.balance}claimRefill(){return this.balance<er?(this.balance+=Xo,this.saveBalance(),!0):!1}}const z=new tr;function nr(s,e,t=250,n="solo"){const i=t*2,o=e>=t;return`
    <div class="modal-backdrop" id="bet-modal-backdrop">
      <div class="modal-dialog bet-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">🪙</span>
            <div>
              <h2 class="modal-title">${n==="multiplayer"?"Set Room Coin Stake":"Choose Match Bet"}</h2>
              <span class="modal-subtitle">Winner takes the entire pot!</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-bet">&times;</button>
        </div>

        <div class="modal-body bet-modal-body">
          <!-- Balance Display -->
          <div class="wallet-balance-card">
            <div class="wallet-lbl">Your Coin Balance</div>
            <div class="wallet-val">🪙 ${e.toLocaleString()}</div>
            ${e<100?`
              <button class="btn-refill-coins" id="btn-claim-village-bonus">
                🎁 Claim Village Bonus (+500 Coins)
              </button>
            `:""}
          </div>

          <!-- Pot Preview Card -->
          <div class="pot-preview-box">
            <div class="pot-title">🏆 TOTAL MATCH POT:</div>
            <div class="pot-amount">🪙 ${i.toLocaleString()}</div>
            <div class="pot-sub">You put 🪙${t} + Opponent puts 🪙${t}</div>
          </div>

          <!-- Bet Tiers Selection -->
          <div class="bet-selection-area">
            <div class="bet-section-label">Select Your Coin Bet:</div>
            <div class="bet-chips-grid">
              ${kt.map(r=>{const a=r===t,l=e>=r;return`
                  <button class="bet-chip ${a?"bet-chip-selected":""} ${l?"":"bet-chip-disabled"}"
                          data-bet-amount="${r}" ${l?"":"disabled"}>
                    <span class="chip-coin-icon">🪙</span>
                    <span class="chip-amount">${r>=1e3?r/1e3+"K":r}</span>
                  </button>
                `}).join("")}
            </div>
          </div>

          ${o?"":`
            <div class="bet-error-msg">⚠️ Insufficient coins for this bet. Select a lower bet or claim your bonus!</div>
          `}
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-confirm-bet" id="btn-confirm-bet" ${o?"":"disabled"}>
            ⚔️ Start Match (Bet 🪙${t})
          </button>
        </div>
      </div>
    </div>
  `}class ir{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return sr(e).buffer}}function sr(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s){const o=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(o,n),n+=i.byteLength}return t}function Cs(s){return new or(s).unpack()}function Ss(s){const e=new rr,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class or{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",o,r;for(;n<e;)o=t[n],o<160?(r=o,n++):(o^192)<32?(r=(o&31)<<6|t[n+1]&63,n+=2):(o^224)<16?(r=(o&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(r=(o&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(r);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,r=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*r}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class rr{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const o=this.pack(e[i]);return o instanceof Promise?o.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,o=Math.floor(i*2**52),r=2**32,a=t<<31|n+1023<<20|o/r&1048575,l=o%r;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(l)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=o=>{if(o<t.length){const r=t[o];if(e.hasOwnProperty(r)){this.pack(r);const a=this.pack(e[r]);if(a instanceof Promise)return a.then(()=>i(o+1))}return i(o+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new ir,this._textEncoder=new TextEncoder}}let Ts=!0,ks=!0;function Ze(s,e,t){const n=s.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function we(s,e,t){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Mn("Unable to polyfill events");return}const i=s.RTCPeerConnection.prototype,o=i.addEventListener;i.addEventListener=function(a,l){if(a!==e)return o.apply(this,arguments);const c=d=>{const u=t(d);u&&(l.handleEvent?l.handleEvent(u):l(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(l,c),o.apply(this,[a,c])};const r=i.removeEventListener;i.removeEventListener=function(a,l){if(a!==e||!this._eventMap||!this._eventMap[e])return r.apply(this,arguments);if(!this._eventMap[e].has(l))return r.apply(this,arguments);const c=this._eventMap[e].get(l);return this._eventMap[e].delete(l),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,r.apply(this,[a,c])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function ar(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(Ts=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function lr(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(ks=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function Mn(){if(typeof window=="object"){if(Ts)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Rn(s,e){ks&&console.warn(s+" is deprecated, please use "+e+" instead.")}function cr(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n){const i=parseInt(n.version,10);if(i>=90)return{browser:"chrome",version:i}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Ze(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Ze(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Ze(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=Ze(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function es(s){return Object.prototype.toString.call(s)==="[object Object]"}function _s(s){return es(s)?Object.keys(s).reduce(function(e,t){const n=es(s[t]),i=n?_s(s[t]):s[t],o=n&&!Object.keys(i).length;return i===void 0||o?e:Object.assign(e,{[t]:i})},{}):s}function ln(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?ln(s,s.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{ln(s,s.get(i),t)})}))}function ts(s,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const o=[];return s.forEach(r=>{r.type==="track"&&r.trackIdentifier===e.id&&o.push(r)}),o.forEach(r=>{s.forEach(a=>{a.type===n&&a.trackId===r.id&&ln(s,a,i)})}),i}const ns=Mn;function Ms(s,e){if(e.version>=64)return;const t=s&&s.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const l={};return Object.keys(a).forEach(c=>{if(c==="require"||c==="advanced"||c==="mediaSource")return;const d=typeof a[c]=="object"?a[c]:{ideal:a[c]};d.exact!==void 0&&typeof d.exact=="number"&&(d.min=d.max=d.exact);const u=function(p,f){return p?p+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(d.ideal!==void 0){l.optional=l.optional||[];let p={};typeof d.ideal=="number"?(p[u("min",c)]=d.ideal,l.optional.push(p),p={},p[u("max",c)]=d.ideal,l.optional.push(p)):(p[u("",c)]=d.ideal,l.optional.push(p))}d.exact!==void 0&&typeof d.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[u("",c)]=d.exact):["min","max"].forEach(p=>{d[p]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[u(p,c)]=d[p])})}),a.advanced&&(l.optional=(l.optional||[]).concat(a.advanced)),l},i=function(a,l){if(e.version>=61)return l(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const c=function(d,u,p){u in d&&!(p in d)&&(d[p]=d[u],delete d[u])};a=JSON.parse(JSON.stringify(a)),c(a.audio,"autoGainControl","googAutoGainControl"),c(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let c=a.video.facingMode;c=c&&(typeof c=="object"?c:{ideal:c});const d=e.version<66;if(c&&(c.exact==="user"||c.exact==="environment"||c.ideal==="user"||c.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!d)){delete a.video.facingMode;let u;if(c.exact==="environment"||c.ideal==="environment"?u=["back","rear"]:(c.exact==="user"||c.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(p=>{p=p.filter(b=>b.kind==="videoinput");let f=p.find(b=>u.some(C=>b.label.toLowerCase().includes(C)));return!f&&p.length&&u.includes("back")&&(f=p[p.length-1]),f&&(a.video.deviceId=c.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),ns("chrome: "+JSON.stringify(a)),l(a)})}a.video=n(a.video)}return ns("chrome: "+JSON.stringify(a)),l(a)},o=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},r=function(a,l,c){i(a,d=>{t.webkitGetUserMedia(d,l,u=>{c&&c(o(u))})})};if(t.getUserMedia=r.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(l){return i(l,c=>a(c).then(d=>{if(c.audio&&!d.getAudioTracks().length||c.video&&!d.getVideoTracks().length)throw d.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return d},d=>Promise.reject(o(d))))}}}function Rs(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function Ps(s,e){if(!(e.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",o=>{let r;s.RTCPeerConnection.prototype.getReceivers?r=this.getReceivers().find(l=>l.track&&l.track.id===o.track.id):r={track:o.track};const a=new Event("track");a.track=o.track,a.receiver=r,a.transceiver={receiver:r},a.streams=[i.stream],this.dispatchEvent(a)}),i.stream.getTracks().forEach(o=>{let r;s.RTCPeerConnection.prototype.getReceivers?r=this.getReceivers().find(l=>l.track&&l.track.id===o.id):r={track:o};const a=new Event("track");a.track=o,a.receiver=r,a.transceiver={receiver:r},a.streams=[i.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else we(s,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Is(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(i,o){return{track:o,get dtmf(){return this._dtmf===void 0&&(o.kind==="audio"?this._dtmf=i.createDTMFSender(o):this._dtmf=null),this._dtmf},_pc:i}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(a,l){let c=i.apply(this,arguments);return c||(c=e(this,a),this._senders.push(c)),c};const o=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(a){o.apply(this,arguments);const l=this._senders.indexOf(a);l!==-1&&this._senders.splice(l,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(o){this._senders=this._senders||[],t.apply(this,[o]),o.getTracks().forEach(r=>{this._senders.push(e(this,r))})};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(o){this._senders=this._senders||[],n.apply(this,[o]),o.getTracks().forEach(r=>{const a=this._senders.find(l=>l.track===r);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Es(s,e){if(e.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const n=s.RTCPeerConnection.prototype.getSenders;n&&(s.RTCPeerConnection.prototype.getSenders=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r});const i=s.RTCPeerConnection.prototype.addTrack;i&&(s.RTCPeerConnection.prototype.addTrack=function(){const r=i.apply(this,arguments);return r._pc=this,r}),s.RTCRtpSender.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>ts(a,r.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const n=s.RTCPeerConnection.prototype.getReceivers;n&&(s.RTCPeerConnection.prototype.getReceivers=function(){const o=n.apply(this,[]);return o.forEach(r=>r._pc=this),o}),we(s,"track",i=>(i.receiver._pc=i.srcElement,i)),s.RTCRtpReceiver.prototype.getStats=function(){const o=this;return this._pc.getStats().then(r=>ts(r,o.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const t=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const i=arguments[0];let o,r,a;return this.getSenders().forEach(l=>{l.track===i&&(o?a=!0:o=l)}),this.getReceivers().forEach(l=>(l.track===i&&(r?a=!0:r=l),l.track===i)),a||o&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):o?o.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function As(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(r=>this._shimmedLocalStreams[r][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(r,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const l=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(l)===-1&&this._shimmedLocalStreams[a.id].push(l):this._shimmedLocalStreams[a.id]=[a,l],l};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(r){this._shimmedLocalStreams=this._shimmedLocalStreams||{},r.getTracks().forEach(c=>{if(this.getSenders().find(u=>u.track===c))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const l=this.getSenders().filter(c=>a.indexOf(c)===-1);this._shimmedLocalStreams[r.id]=[r].concat(l)};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(r){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[r.id],n.apply(this,arguments)};const i=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(r){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},r&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const l=this._shimmedLocalStreams[a].indexOf(r);l!==-1&&this._shimmedLocalStreams[a].splice(l,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),i.apply(this,arguments)}}function xs(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return As(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const d=t.apply(this);return this._reverseStreams=this._reverseStreams||{},d.map(u=>this._reverseStreams[u.id])};const n=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(d){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},d.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[d.id]){const u=new s.MediaStream(d.getTracks());this._streams[d.id]=u,this._reverseStreams[u.id]=d,d=u}n.apply(this,[d])};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(d){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[d.id]||d]),delete this._reverseStreams[this._streams[d.id]?this._streams[d.id].id:d.id],delete this._streams[d.id]},s.RTCPeerConnection.prototype.addTrack=function(d,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const p=[].slice.call(arguments,1);if(p.length!==1||!p[0].getTracks().find(C=>C===d))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(C=>C.track===d))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const b=this._streams[u.id];if(b)b.addTrack(d),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const C=new s.MediaStream([d]);this._streams[u.id]=C,this._reverseStreams[C.id]=u,this.addStream(C)}return this.getSenders().find(C=>C.track===d)};function o(c,d){let u=d.sdp;return Object.keys(c._reverseStreams||[]).forEach(p=>{const f=c._reverseStreams[p],b=c._streams[f.id];u=u.replace(new RegExp(b.id,"g"),f.id)}),new RTCSessionDescription({type:d.type,sdp:u})}function r(c,d){let u=d.sdp;return Object.keys(c._reverseStreams||[]).forEach(p=>{const f=c._reverseStreams[p],b=c._streams[f.id];u=u.replace(new RegExp(f.id,"g"),b.id)}),new RTCSessionDescription({type:d.type,sdp:u})}["createOffer","createAnswer"].forEach(function(c){const d=s.RTCPeerConnection.prototype[c],u={[c](){const p=arguments;return arguments.length&&typeof arguments[0]=="function"?d.apply(this,[b=>{const C=o(this,b);p[0].apply(null,[C])},b=>{p[1]&&p[1].apply(null,b)},arguments[2]]):d.apply(this,arguments).then(b=>o(this,b))}};s.RTCPeerConnection.prototype[c]=u[c]});const a=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=r(this,arguments[0]),a.apply(this,arguments))};const l=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const c=l.get.apply(this);return c.type===""?c:o(this,c)}}),s.RTCPeerConnection.prototype.removeTrack=function(d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!d._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(d._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let p;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(C=>d.track===C)&&(p=this._streams[f])}),p&&(p.getTracks().length===1?this.removeStream(this._reverseStreams[p.id]):p.removeTrack(d.track),this.dispatchEvent(new Event("negotiationneeded")))}}function cn(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]})}function $s(s,e){e.version>102||we(s,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const is=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:$s,shimAddTrackRemoveTrack:xs,shimAddTrackRemoveTrackWithNative:As,shimGetSendersWithDtmf:Is,shimGetUserMedia:Ms,shimMediaStream:Rs,shimOnTrack:Ps,shimPeerConnection:cn,shimSenderReceiverGetStats:Es},Symbol.toStringTag,{value:"Module"}));function Os(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const n=s&&s.MediaStreamTrack;if(t.getUserMedia=function(i,o,r){Rn("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(o,r)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(r,a,l){a in r&&!(l in r)&&(r[l]=r[a],delete r[a])},o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(r){return typeof r=="object"&&typeof r.audio=="object"&&(r=JSON.parse(JSON.stringify(r)),i(r.audio,"autoGainControl","mozAutoGainControl"),i(r.audio,"noiseSuppression","mozNoiseSuppression")),o(r)},n&&n.prototype.getSettings){const r=n.prototype.getSettings;n.prototype.getSettings=function(){const a=r.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const r=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),r.apply(this,[a])}}}}function dr(s,e){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(n)}))}function ws(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function dn(s,e){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]}))}function Bs(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[o,r,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[o||null]).then(l=>{if(e.version<53&&!r)try{l.forEach(c=>{c.type=t[c.type]||c.type})}catch(c){if(c.name!=="TypeError")throw c;l.forEach((d,u)=>{l.set(u,Object.assign({},d,{type:t[d.type]||d.type}))})}return l}).then(r,a)}}function Ns(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(o=>o._pc=this),i});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Ls(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),we(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Hs(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){Rn("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Fs(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function Ds(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.addTransceiver;t&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const o=i.length>0;o&&i.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const r=t.apply(this,arguments);if(o){const{sender:a}=r,l=a.getParameters();(!("encodings"in l)||l.encodings.length===1&&Object.keys(l.encodings[0]).length===0)&&(l.encodings=i,a.sendEncodings=i,this.setParametersPromises.push(a.setParameters(l).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return r})}function Us(s,e){if(!(typeof s=="object"&&s.RTCRtpSender)||e.version>=110)return;const t=s.RTCRtpSender.prototype.getParameters;t&&(s.RTCRtpSender.prototype.getParameters=function(){const i=t.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function js(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Gs(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const ss=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Ds,shimCreateAnswer:Gs,shimCreateOffer:js,shimGetDisplayMedia:dr,shimGetParameters:Us,shimGetStats:Bs,shimGetUserMedia:Os,shimOnTrack:ws,shimPeerConnection:dn,shimRTCDataChannel:Fs,shimReceiverGetStats:Ls,shimRemoveStream:Hs,shimSenderGetStats:Ns},Symbol.toStringTag,{value:"Module"}));function qs(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},s.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(o=>{this._localStreams?this._localStreams.includes(o)||this._localStreams.push(o):this._localStreams=[o]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(o=>{i.includes(o.track)&&this.removeTrack(o)})})}}function Js(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const o=new Event("addstream");o.stream=i,this.dispatchEvent(o)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(o=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(o)>=0)return;n._remoteStreams.push(o);const r=new Event("addstream");r.stream=o,n.dispatchEvent(r)})}),e.apply(n,arguments)}}}function Ws(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,o=e.setRemoteDescription,r=e.addIceCandidate;e.createOffer=function(c,d){const u=arguments.length>=2?arguments[2]:arguments[0],p=t.apply(this,[u]);return d?(p.then(c,d),Promise.resolve()):p},e.createAnswer=function(c,d){const u=arguments.length>=2?arguments[2]:arguments[0],p=n.apply(this,[u]);return d?(p.then(c,d),Promise.resolve()):p};let a=function(l,c,d){const u=i.apply(this,[l]);return d?(u.then(c,d),Promise.resolve()):u};e.setLocalDescription=a,a=function(l,c,d){const u=o.apply(this,[l]);return d?(u.then(c,d),Promise.resolve()):u},e.setRemoteDescription=a,a=function(l,c,d){const u=r.apply(this,[l]);return d?(u.then(c,d),Promise.resolve()):u},e.addIceCandidate=a}function Vs(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(zs(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,i,o){e.mediaDevices.getUserMedia(n).then(i,o)}).bind(e))}function zs(s){return s&&s.video!==void 0?Object.assign({},s,{video:_s(s.video)}):s}function Ks(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const o=[];for(let r=0;r<n.iceServers.length;r++){let a=n.iceServers[r];a.urls===void 0&&a.url?(Rn("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,o.push(a)):o.push(n.iceServers[r])}n.iceServers=o}return new e(n,i)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Ys(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Qs(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(r=>r.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const o=this.getTransceivers().find(r=>r.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&o?o.direction==="sendrecv"?o.setDirection?o.setDirection("sendonly"):o.direction="sendonly":o.direction==="recvonly"&&(o.setDirection?o.setDirection("inactive"):o.direction="inactive"):n.offerToReceiveVideo===!0&&!o&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Zs(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const os=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Zs,shimCallbacksAPI:Ws,shimConstraints:zs,shimCreateOfferLegacy:Qs,shimGetUserMedia:Vs,shimLocalStreamsAPI:qs,shimRTCIceServerUrls:Ks,shimRemoteStreamsAPI:Js,shimTrackEventTransceiver:Ys},Symbol.toStringTag,{value:"Module"}));var nn={exports:{}},rs;function ur(){return rs||(rs=1,(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((i,o)=>(o>0?"m="+i:i).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(i=>i.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const i={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let o=8;o<n.length;o+=2)switch(n[o]){case"raddr":i.relatedAddress=n[o+1];break;case"rport":i.relatedPort=parseInt(n[o+1],10);break;case"tcptype":i.tcpType=n[o+1];break;case"ufrag":i.ufrag=n[o+1],i.usernameFragment=n[o+1];break;default:i[n[o]]===void 0&&(i[n[o]]=n[o+1]);break}return i},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const i=t.component;i==="rtp"?n.push(1):i==="rtcp"?n.push(2):n.push(i),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const o=t.type;return n.push("typ"),n.push(o),o!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const i={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),i.name=n[0],i.clockRate=parseInt(n[1],10),i.channels=n.length===3?parseInt(n[2],10):1,i.numChannels=i.channels,i},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const i=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(i!==1?"/"+i:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let i;const o=t.substring(t.indexOf(" ")+1).split(";");for(let r=0;r<o.length;r++)i=o[r].trim().split("="),n[i[0].trim()]=i[1];return n},e.writeFmtp=function(t){let n="",i=t.payloadType;if(t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const o=[];Object.keys(t.parameters).forEach(r=>{t.parameters[r]!==void 0?o.push(r+"="+t.parameters[r]):o.push(r)}),n+="a=fmtp:"+i+" "+o.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",i=t.payloadType;return t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(o=>{n+="a=rtcp-fb:"+i+" "+o.type+(o.parameter&&o.parameter.length?" "+o.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),i={ssrc:parseInt(t.substring(7,n),10)},o=t.indexOf(":",n);return o>-1?(i.attribute=t.substring(n+1,o),i.value=t.substring(o+1)):i.attribute=t.substring(n+1),i},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(i=>parseInt(i,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let i="a=setup:"+n+`\r
`;return t.fingerprints.forEach(o=>{i+="a=fingerprint:"+o.algorithm+" "+o.value+`\r
`}),i},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const i=e.matchPrefix(t+n,"a=ice-ufrag:")[0],o=e.matchPrefix(t+n,"a=ice-pwd:")[0];return i&&o?{usernameFragment:i.substring(12),password:o.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},o=e.splitLines(t)[0].split(" ");n.profile=o[2];for(let a=3;a<o.length;a++){const l=o[a],c=e.matchPrefix(t,"a=rtpmap:"+l+" ")[0];if(c){const d=e.parseRtpMap(c),u=e.matchPrefix(t,"a=fmtp:"+l+" ");switch(d.parameters=u.length?e.parseFmtp(u[0]):{},d.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+l+" ").map(e.parseRtcpFb),n.codecs.push(d),d.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(d.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const r=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{r.forEach(l=>{a.rtcpFeedback.find(d=>d.type===l.type&&d.parameter===l.parameter)||a.rtcpFeedback.push(l)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(r=>r.preferredPayloadType!==void 0?r.preferredPayloadType:r.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(r=>{i+=e.writeRtpMap(r),i+=e.writeFmtp(r),i+=e.writeRtcpFb(r)});let o=0;return n.codecs.forEach(r=>{r.maxptime>o&&(o=r.maxptime)}),o>0&&(i+="a=maxptime:"+o+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(r=>{i+=e.writeExtmap(r)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),o=i.fecMechanisms.indexOf("RED")!==-1,r=i.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(p=>e.parseSsrcMedia(p)).filter(p=>p.attribute==="cname"),l=a.length>0&&a[0].ssrc;let c;const d=e.matchPrefix(t,"a=ssrc-group:FID").map(p=>p.substring(17).split(" ").map(b=>parseInt(b,10)));d.length>0&&d[0].length>1&&d[0][0]===l&&(c=d[0][1]),i.codecs.forEach(p=>{if(p.name.toUpperCase()==="RTX"&&p.parameters.apt){let f={ssrc:l,codecPayloadType:parseInt(p.parameters.apt,10)};l&&c&&(f.rtx={ssrc:c}),n.push(f),o&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:l,mechanism:r?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&l&&n.push({ssrc:l});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(p=>{p.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const o=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=o.length>0,n.compound=o.length===0;const r=e.matchPrefix(t,"a=rtcp-mux");return n.mux=r.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const i=e.matchPrefix(t,"a=msid:");if(i.length===1)return n=i[0].substring(7).split(" "),{stream:n[0],track:n[1]};const o=e.matchPrefix(t,"a=ssrc:").map(r=>e.parseSsrcMedia(r)).filter(r=>r.attribute==="msid");if(o.length>0)return n=o[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),i=e.matchPrefix(t,"a=max-message-size:");let o;i.length>0&&(o=parseInt(i[0].substring(19),10)),isNaN(o)&&(o=65536);const r=e.matchPrefix(t,"a=sctp-port:");if(r.length>0)return{port:parseInt(r[0].substring(12),10),protocol:n.fmt,maxMessageSize:o};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const l=a[0].substring(10).split(" ");return{port:parseInt(l[0],10),protocol:l[1],maxMessageSize:o}}},e.writeSctpDescription=function(t,n){let i=[];return t.protocol!=="DTLS/SCTP"?i=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:i=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&i.push("a=max-message-size:"+n.maxMessageSize+`\r
`),i.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,i){let o;const r=n!==void 0?n:2;return t?o=t:o=e.generateSessionId(),`v=0\r
o=`+(i||"thisisadapterortc")+" "+o+" "+r+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let o=0;o<i.length;o++)switch(i[o]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[o].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},s.exports=e})(nn)),nn.exports}var Xs=ur();const Ue=ms(Xs),hr=lo({__proto__:null,default:Ue},[Xs]);function ft(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),o=Ue.parseCandidate(n.candidate);for(const r in o)r in i||Object.defineProperty(i,r,{value:o[r]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},s.RTCIceCandidate.prototype=e.prototype,we(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function un(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||we(s,"icecandidate",e=>{if(e.candidate){const t=Ue.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function gt(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const l=Ue.splitSections(a.sdp);return l.shift(),l.some(c=>{const d=Ue.parseMLine(c);return d&&d.kind==="application"&&d.protocol.indexOf("SCTP")!==-1})},n=function(a){const l=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(l===null||l.length<2)return-1;const c=parseInt(l[1],10);return c!==c?-1:c},i=function(a){let l=65536;return e.browser==="firefox"&&(e.version<57?a===-1?l=16384:l=2147483637:e.version<60?l=e.version===57?65535:65536:l=2147483637),l},o=function(a,l){let c=65536;e.browser==="firefox"&&e.version===57&&(c=65535);const d=Ue.matchPrefix(a.sdp,"a=max-message-size:");return d.length>0?c=parseInt(d[0].substring(19),10):e.browser==="firefox"&&l!==-1&&(c=2147483637),c},r=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:l}=this.getConfiguration();l==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const l=n(arguments[0]),c=i(l),d=o(arguments[0],l);let u;c===0&&d===0?u=Number.POSITIVE_INFINITY:c===0||d===0?u=Math.max(c,d):u=Math.min(c,d);const p={};Object.defineProperty(p,"maxMessageSize",{get(){return u}}),this._sctp=p}return r.apply(this,arguments)}}function bt(s,e){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(i,o){const r=i.send;i.send=function(){const l=arguments[0],c=l.length||l.size||l.byteLength;if(i.readyState==="open"&&o.sctp&&c>o.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+o.sctp.maxMessageSize+" bytes)");return r.apply(i,arguments)}}const n=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const o=n.apply(this,arguments);return t(o,this),o},we(s,"datachannel",i=>(t(i.channel,i.target),i))}function hn(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const o=i.target;if(o._lastConnectionState!==o.connectionState){o._lastConnectionState=o.connectionState;const r=new Event("connectionstatechange",i);o.dispatchEvent(r)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function pn(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const o=i.sdp.split(`
`).filter(r=>r.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&i instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:i.type,sdp:o}):i.sdp=o}return t.apply(this,arguments)}}function yt(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function vt(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(r=>t.apply(this,[r]))})}const pr=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:pn,shimAddIceCandidateNullOrEmpty:yt,shimConnectionState:hn,shimMaxMessageSize:gt,shimParameterlessSetLocalDescription:vt,shimRTCIceCandidate:ft,shimRTCIceCandidateRelayProtocol:un,shimSendThrowTypeError:bt},Symbol.toStringTag,{value:"Module"}));function mr({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Mn,n=cr(s),i={browserDetails:n,commonShim:pr,extractVersion:Ze,disableLog:ar,disableWarnings:lr,sdp:hr};switch(n.browser){case"chrome":if(!is||!cn||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=is,yt(s,n),vt(s),Ms(s,n),Rs(s),cn(s,n),Ps(s,n),xs(s,n),Is(s),Es(s,n),$s(s,n),ft(s),un(s),hn(s),gt(s,n),bt(s,n),pn(s,n);break;case"firefox":if(!ss||!dn||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=ss,yt(s,n),vt(s),Os(s,n),dn(s,n),Bs(s,n),ws(s),Hs(s),Ns(s),Ls(s),Fs(s),Ds(s,n),Us(s,n),js(s,n),Gs(s,n),ft(s),hn(s),gt(s,n),bt(s,n);break;case"safari":if(!os||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=os,yt(s,n),vt(s),Ks(s),Qs(s),Ws(s),qs(s),Js(s),Ys(s),Vs(s),Zs(s),ft(s),un(s),gt(s,n),bt(s,n),pn(s,n);break;default:t("Unsupported browser!");break}return i}const as=mr({window:typeof window>"u"?void 0:window});function Be(s,e,t,n){Object.defineProperty(s,e,{get:t,set:n,enumerable:!0,configurable:!0})}class eo{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let o=0,r=0;for(;r<n;){const a=Math.min(n,r+this.chunkedMTU),l=e.slice(r,a),c={__peerData:this._dataCount,n:o,data:l,total:i};t.push(c),r=a,o++}return this._dataCount++,t}}}function fr(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s)t.set(i,n),n+=i.byteLength;return t}const sn=as.default||as,Ye=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return sn.browserDetails.browser}getVersion(){return sn.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=sn.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},gr=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),to=()=>Math.random().toString(36).slice(2),ls={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class br extends eo{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=ls,this.browser=Ye.getBrowser(),this.browserVersion=Ye.getVersion(),this.pack=Ss,this.unpack=Cs,this.supports=(function(){const t={browser:Ye.isBrowserSupported(),webRTC:Ye.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(ls),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Ye.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=gr,this.randomToken=to}}const ge=new br,yr="PeerJS: ";class vr{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[yr,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var x=new vr,Pn={},Cr=Object.prototype.hasOwnProperty,he="~";function nt(){}Object.create&&(nt.prototype=Object.create(null),new nt().__proto__||(he=!1));function Sr(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function no(s,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var o=new Sr(t,n||s,i),r=he?he+e:e;return s._events[r]?s._events[r].fn?s._events[r]=[s._events[r],o]:s._events[r].push(o):(s._events[r]=o,s._eventsCount++),s}function Ct(s,e){--s._eventsCount===0?s._events=new nt:delete s._events[e]}function de(){this._events=new nt,this._eventsCount=0}de.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Cr.call(t,n)&&e.push(he?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};de.prototype.listeners=function(e){var t=he?he+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,r=new Array(o);i<o;i++)r[i]=n[i].fn;return r};de.prototype.listenerCount=function(e){var t=he?he+e:e,n=this._events[t];return n?n.fn?1:n.length:0};de.prototype.emit=function(e,t,n,i,o,r){var a=he?he+e:e;if(!this._events[a])return!1;var l=this._events[a],c=arguments.length,d,u;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),c){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,i),!0;case 5:return l.fn.call(l.context,t,n,i,o),!0;case 6:return l.fn.call(l.context,t,n,i,o,r),!0}for(u=1,d=new Array(c-1);u<c;u++)d[u-1]=arguments[u];l.fn.apply(l.context,d)}else{var p=l.length,f;for(u=0;u<p;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),c){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,n);break;case 4:l[u].fn.call(l[u].context,t,n,i);break;default:if(!d)for(f=1,d=new Array(c-1);f<c;f++)d[f-1]=arguments[f];l[u].fn.apply(l[u].context,d)}}return!0};de.prototype.on=function(e,t,n){return no(this,e,t,n,!1)};de.prototype.once=function(e,t,n){return no(this,e,t,n,!0)};de.prototype.removeListener=function(e,t,n,i){var o=he?he+e:e;if(!this._events[o])return this;if(!t)return Ct(this,o),this;var r=this._events[o];if(r.fn)r.fn===t&&(!i||r.once)&&(!n||r.context===n)&&Ct(this,o);else{for(var a=0,l=[],c=r.length;a<c;a++)(r[a].fn!==t||i&&!r[a].once||n&&r[a].context!==n)&&l.push(r[a]);l.length?this._events[o]=l.length===1?l[0]:l:Ct(this,o)}return this};de.prototype.removeAllListeners=function(e){var t;return e?(t=he?he+e:e,this._events[t]&&Ct(this,t)):(this._events=new nt,this._eventsCount=0),this};de.prototype.off=de.prototype.removeListener;de.prototype.addListener=de.prototype.on;de.prefixed=he;de.EventEmitter=de;Pn=de;var Ne={};Be(Ne,"ConnectionType",()=>Pe);Be(Ne,"PeerErrorType",()=>oe);Be(Ne,"BaseConnectionErrorType",()=>mn);Be(Ne,"DataConnectionErrorType",()=>In);Be(Ne,"SerializationType",()=>_t);Be(Ne,"SocketEventType",()=>Re);Be(Ne,"ServerMessageType",()=>ce);var Pe=(function(s){return s.Data="data",s.Media="media",s})({}),oe=(function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s})({}),mn=(function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s})({}),In=(function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s})({}),_t=(function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s})({}),Re=(function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s})({}),ce=(function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s})({});const io="1.5.5";class Tr extends Pn.EventEmitter{constructor(e,t,n,i,o,r=5e3){super(),this.pingInterval=r,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+i+"peerjs?key="+o}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+io),this._disconnected=!1,this._socket.onmessage=i=>{let o;try{o=JSON.parse(i.data),x.log("Server message received:",o)}catch{x.log("Invalid server message",i.data);return}this.emit(Re.Message,o)},this._socket.onclose=i=>{this._disconnected||(x.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(Re.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),x.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){x.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:ce.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Re.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class so{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Pe.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},o=t.createDataChannel(n.label,i);n._initializeDataChannel(o),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){x.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,o=this.connection.provider;x.log("Listening for ICE candidates."),e.onicecandidate=r=>{!r.candidate||!r.candidate.candidate||(x.log(`Received ICE candidates for ${t}:`,r.candidate),o.socket.send({type:ce.Candidate,payload:{candidate:r.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":x.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(mn.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":x.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(mn.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":x.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},x.log("Listening for data channel"),e.ondatachannel=r=>{x.log("Received data channel");const a=r.channel;o.getConnection(t,n)._initializeDataChannel(a)},x.log("Listening for remote stream"),e.ontrack=r=>{x.log("Received remote stream");const a=r.streams[0],l=o.getConnection(t,n);if(l.type===Pe.Media){const c=l;this._addStreamToMediaConnection(a,c)}}}cleanup(){x.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);x.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),x.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Pe.Data){const o=this.connection;i={...i,label:o.label,reliable:o.reliable,serialization:o.serialization}}t.socket.send({type:ce.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(oe.WebRTC,i),x.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(oe.WebRTC,n),x.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();x.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),x.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:ce.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(oe.WebRTC,i),x.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(oe.WebRTC,n),x.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;x.log("Setting remote description",t);const o=this;try{await n.setRemoteDescription(t),x.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await o._makeAnswer()}catch(r){i.emitError(oe.WebRTC,r),x.log("Failed to setRemoteDescription, ",r)}}async handleCandidate(e){x.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),x.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(oe.WebRTC,t),x.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(x.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return x.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){x.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class oo extends Pn.EventEmitter{emitError(e,t){x.error("Error:",t),this.emit("error",new kr(`${e}`,t))}}class kr extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class ro extends oo{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var yn;const et=class et extends ro{get type(){return Pe.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||et.ID_PREFIX+ge.randomToken(),this._negotiator=new so(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{x.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{x.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){x.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case ce.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case ce.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:x.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){x.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};yn=new WeakMap,ze(et,yn,et.ID_PREFIX="mc_");let St=et;class _r{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:o,key:r}=this._options,a=new URL(`${t}://${n}:${i}${o}${r}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",io),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){x.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==ge.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===ge.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw x.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var vn,Cn;const Ae=class Ae extends ro{get type(){return Pe.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Ae.ID_PREFIX+to(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new so(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{x.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{x.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{x.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(In.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case ce.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case ce.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:x.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};vn=new WeakMap,Cn=new WeakMap,ze(Ae,vn,Ae.ID_PREFIX="dc_"),ze(Ae,Cn,Ae.MAX_BUFFERED_AMOUNT=8388608);let Tt=Ae;class En extends Tt{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Tt.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return x.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class on extends En{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new eo,this.serialization=_t.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Cs(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=fr(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=Ss(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);x.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Mr extends En{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=_t.None}}class Rr extends En{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=ge.chunkedMTU){this.emitError(In.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=_t.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Sn;const tt=class tt extends oo{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Mr,json:Rr,binary:on,"binary-utf8":on,default:on},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:ge.CLOUD_HOST,port:ge.CLOUD_PORT,path:"/",key:tt.DEFAULT_KEY,token:ge.randomToken(),config:ge.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==ge.CLOUD_HOST?this._options.secure=ge.isSecure():this._options.host==ge.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&x.setLogFunction(this._options.logFunction),x.logLevel=this._options.debug||0,this._api=new _r(t),this._socket=this._createServerConnection(),!ge.supports.audioVideo&&!ge.supports.data){this._delayedAbort(oe.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!ge.validateId(n)){this._delayedAbort(oe.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(oe.ServerError,i))}_createServerConnection(){const e=new Tr(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Re.Message,t=>{this._handleMessage(t)}),e.on(Re.Error,t=>{this._abort(oe.SocketError,t)}),e.on(Re.Disconnected,()=>{this.disconnected||(this.emitError(oe.Network,"Lost connection to server."),this.disconnect())}),e.on(Re.Close,()=>{this.disconnected||this._abort(oe.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case ce.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case ce.Error:this._abort(oe.ServerError,n.msg);break;case ce.IdTaken:this._abort(oe.UnavailableID,`ID "${this.id}" is taken`);break;case ce.InvalidKey:this._abort(oe.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case ce.Leave:x.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case ce.Expire:this.emitError(oe.PeerUnavailable,`Could not connect to peer ${i}`);break;case ce.Offer:{const o=n.connectionId;let r=this.getConnection(i,o);if(r&&(r.close(),x.warn(`Offer received for existing Connection ID:${o}`)),n.type===Pe.Media){const l=new St(i,this,{connectionId:o,_payload:n,metadata:n.metadata});r=l,this._addConnection(i,r),this.emit("call",l)}else if(n.type===Pe.Data){const l=new this._serializers[n.serialization](i,this,{connectionId:o,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});r=l,this._addConnection(i,r),this.emit("connection",l)}else{x.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(o);for(const l of a)r.handleMessage(l);break}default:{if(!n){x.warn(`You received a malformed message from ${i} of type ${t}`);return}const o=n.connectionId,r=this.getConnection(i,o);r&&r.peerConnection?r.handleMessage(e):o?this._storeMessage(o,e):x.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){x.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(oe.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){x.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(oe.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){x.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new St(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){x.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){x.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(x.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;x.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)x.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)x.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(oe.ServerError,t))}};Sn=new WeakMap,ze(tt,Sn,tt.DEFAULT_KEY="peerjs");let fn=tt;var rn=fn;const cs=rn.Peer||rn.default||rn;function Xe(){let s=[];try{typeof localStorage<"u"&&(s=JSON.parse(localStorage.getItem("bk_used_4digit_codes")||"[]"))}catch{}let e=1;try{if(typeof localStorage<"u"){const n=localStorage.getItem("bk_4digit_seq");n&&(e=parseInt(n,10)+1)}}catch{}let t="";for(let n=0;n<9e3;n++){const i=((e+n)*3137+1729)%9e3+1e3,o=String(i);if(!s.includes(o)){t=o;break}}t||(t=String(Math.floor(1e3+Math.random()*9e3)));try{typeof localStorage<"u"&&(s.push(t),s.length>8500&&(s=s.slice(-2e3)),localStorage.setItem("bk_used_4digit_codes",JSON.stringify(s)),localStorage.setItem("bk_4digit_seq",String(e+1)))}catch{}return t}function ds(s){if(!s)return"";let e=s.toString().trim().toUpperCase().replace(/\s+/g,"");const t=e.match(/^(?:BK-?)?(\d{4})$/);return t?t[1]:(!e.startsWith("BK-")&&!e.startsWith("BK")&&(e=`BK-${e}`),e)}const us={config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}};class Pr{constructor(e={}){this.ws=null,this.peer=null,this.peerConn=null,this.mode="auto",this.roomCode=null,this.myPlayerId=null,this.myTeam=null,this.isHost=!1,this.connected=!1,this.hostName="Player 1",this.guestName="Player 2",this.onRoomCreated=e.onRoomCreated||(()=>{}),this.onRoomJoined=e.onRoomJoined||(()=>{}),this.onPlayerJoined=e.onPlayerJoined||(()=>{}),this.onPlayerLeft=e.onPlayerLeft||(()=>{}),this.onSyncRoll=e.onSyncRoll||(()=>{}),this.onSyncMove=e.onSyncMove||(()=>{}),this.onSyncRestart=e.onSyncRestart||(()=>{}),this.onChatReceived=e.onChatReceived||(()=>{}),this.onBetSynced=e.onBetSynced||(()=>{}),this.onSyncTimeoutPass=e.onSyncTimeoutPass||(()=>{}),this.onStart4pAIPair=e.onStart4pAIPair||(()=>{}),this.onSyncGameState=e.onSyncGameState||(()=>{}),this.onGate23Decision=e.onGate23Decision||(()=>{}),this.onForfeit=e.onForfeit||(()=>{}),this.onHomeSelected=e.onHomeSelected||(()=>{}),this.onMatchWaiting=e.onMatchWaiting||(()=>{}),this.onError=e.onError||(()=>{}),this.onStatusChange=e.onStatusChange||(()=>{}),this.currentBet=250,this.gameMode="2p",this.team1Home=1,this.team2Home=3,this.peerConns=new Set}isP2PPreferred(){const e=window.location.hostname;return e.includes("github.io")||window.location.protocol==="file:"||!e.includes("localhost")&&!e.includes("127.0.0.1")&&!e.includes("192.168.")}connectWS(){return this.ws&&(this.ws.readyState===0||this.ws.readyState===1)?Promise.resolve():new Promise((e,t)=>{try{const n=window.location.protocol==="https:"?"wss:":"ws:",i=window.location.host,o=`${n}//${i}/ws`;this.ws=new WebSocket(o),this.ws.onopen=()=>{this.connected=!0,this.mode="ws",this.onStatusChange("connected"),e()},this.ws.onclose=()=>{this.connected=!1,this.onStatusChange("disconnected")},this.ws.onerror=r=>{console.warn("WebSocket not available, falling back to WebRTC:",r),this.ws=null,t(r)},this.ws.onmessage=r=>{try{const a=JSON.parse(r.data);this.handleMessage(a)}catch(a){console.error("Failed to parse WS message:",a)}}}catch(n){t(n)}})}handleMessage(e){switch(e.type){case"ROOM_CREATED":this.roomCode=e.roomCode,this.myPlayerId=e.playerId,this.myTeam=e.team,this.isHost=!0,this.gameMode=e.mode||"2p",this.team1Home=e.team1Home||1,this.team2Home=e.team2Home||Me(this.team1Home),this.onRoomCreated(e);break;case"ROOM_JOINED":this.roomCode=e.roomCode,this.myPlayerId=e.playerId,this.myTeam=e.team,this.isHost=!1,this.gameMode=e.mode||"2p",this.team1Home=e.team1Home||1,this.team2Home=e.team2Home||Me(this.team1Home),this.onRoomJoined(e);break;case"PLAYER_JOINED":this.onPlayerJoined(e.player,e.players);break;case"PLAYER_LEFT":this.onPlayerLeft(e.playerId,e.players);break;case"ACTION_ROLL":this.onSyncRoll(e.rollResult);break;case"ACTION_MOVE":this.onSyncMove(e.move);break;case"ACTION_RESTART":this.onSyncRestart();break;case"ACTION_CHAT":this.onChatReceived(e);break;case"ROOM_BET":this.currentBet=e.bet,this.onBetSynced(e.bet);break;case"ACTION_TIMEOUT_PASS":this.onSyncTimeoutPass(e);break;case"ACTION_FORFEIT":this.onForfeit(e);break;case"START_4P_AI_PAIR":this.onStart4pAIPair(e);break;case"SYNC_GAME_STATE":this.onSyncGameState(e.state);break;case"GATE_23_DECISION":this.onGate23Decision(e.decision);break;case"ACTION_SELECT_HOME":this.onHomeSelected&&this.onHomeSelected(e);break;case"MATCH_WAITING":this.onMatchWaiting&&this.onMatchWaiting(e);break;case"ERROR":this.onError(e.message);break}}sendHomeSelection(e,t){this.send({type:"ACTION_SELECT_HOME",roomCode:this.roomCode,teamId:e,chosenHome:t})}async findOnlineMatch(e="Player",t=null){try{return await this.connectWS(),this.send({type:"FIND_MATCH",playerName:e,userMeta:t,mode:"2p"}),!0}catch(n){return console.warn("WS not reachable for online matchmaking:",n),!1}}cancelFindMatch(){this.send({type:"CANCEL_FIND_MATCH"})}sendForfeit(e,t=null){this.send({type:"ACTION_FORFEIT",roomCode:this.roomCode,quittingTeam:e||this.myTeam,playerId:t||this.myPlayerId})}async createRoom(e="2p",t="Player 1",n=null,i=null,o=1){if(this.hostName=t,this.hostMeta=i,this.gameMode=e,this.team1Home=parseInt(o,10)||1,this.team2Home=Me(this.team1Home),!this.isP2PPreferred())try{await this.connectWS(),this.send({type:"CREATE_ROOM",mode:e,playerName:t,roomCode:n,userMeta:i,team1Home:this.team1Home});return}catch(l){console.log("WS failed, switching to P2P WebRTC:",l)}this.mode="p2p";const r=n?ds(n):Xe(),a=`bk-board-${r.toLowerCase().replace(/[^a-z0-9]/g,"")}`;if(this.peer)try{this.peer.destroy()}catch{}this.peer=new cs(a,us),this.peer.on("open",()=>{this.roomCode=r,this.myPlayerId=1,this.myTeam=1,this.isHost=!0,this.connected=!0,this.onStatusChange("connected"),this.onRoomCreated({roomCode:r,playerId:1,team:1,mode:e,team1Home:this.team1Home,team2Home:this.team2Home,players:[{id:1,team:1,name:t,isHost:!0}]})}),this.peer.on("connection",l=>{this.peerConn=l,this.peerConns.add(l),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{if(l.open)try{l.send({type:"HEARTBEAT_PING",t:Date.now()})}catch{}},3e3),l.on("open",()=>{}),l.on("data",c=>{var d,u,p;if(c.type==="HEARTBEAT_PING"){try{l.send({type:"HEARTBEAT_PONG"})}catch{}return}if(c.type!=="HEARTBEAT_PONG"){if(this.isHost&&this.peerConns.size>1)for(const f of this.peerConns)f!==l&&f.open&&f.send(c);if(c.type==="JOIN_ROOM"){this.guestName=c.playerName||"Player 2",this.guestMeta={mobile:c.mobile||"",nickName:c.nickName||c.playerName||"Player 2",fullName:c.fullName||c.playerName||"Player 2"};const f=this.gameMode==="4p",b=f?3:2,C=f?1:2,T=[{id:1,team:1,name:this.hostName,isHost:!0},{id:b,team:C,name:this.guestName,isHost:!1}];l.send({type:"ROOM_JOINED",roomCode:r,playerId:b,team:C,mode:this.gameMode,team1Home:this.team1Home,team2Home:this.team2Home,players:T,bet:this.currentBet,hostMobile:((d=this.hostMeta)==null?void 0:d.mobile)||"",hostNick:((u=this.hostMeta)==null?void 0:u.nickName)||this.hostName,hostFullName:((p=this.hostMeta)==null?void 0:p.fullName)||this.hostName}),this.onPlayerJoined({id:b,team:C,name:this.guestName,mobile:c.mobile||"",nickName:c.nickName||this.guestName,fullName:c.fullName||this.guestName},T)}else this.handleMessage(c)}}),l.on("close",()=>{this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.peerConns.delete(l),this.onPlayerLeft(2,[{id:1,team:1,name:this.hostName}])})}),this.peer.on("error",l=>{console.error("PeerJS Host error:",l),l.type==="unavailable-id"?this.createRoom(e,t,null,i):this.onError(`Network error: ${l.message||l.type}`)})}async joinRoom(e,t="Player 2",n=null){this.guestName=t,this.guestMeta=n;const i=ds(e);if(!this.isP2PPreferred())try{await this.connectWS(),this.send({type:"JOIN_ROOM",roomCode:i,playerName:t,userMeta:n});return}catch(o){console.log("WS failed, switching to P2P WebRTC:",o)}if(this.mode="p2p",this.peer)try{this.peer.destroy()}catch{}this.peer=new cs(null,us),this.peer.on("open",()=>{const o=`bk-board-${i.toLowerCase().replace(/[^a-z0-9]/g,"")}`,r=this.peer.connect(o,{reliable:!0});this.peerConn=r,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{if(r.open)try{r.send({type:"HEARTBEAT_PING",t:Date.now()})}catch{}},3e3),r.on("open",()=>{var a,l,c;this.connected=!0,this.onStatusChange("connected"),r.send({type:"JOIN_ROOM",roomCode:i,playerName:t,mobile:((a=this.guestMeta)==null?void 0:a.mobile)||"",nickName:((l=this.guestMeta)==null?void 0:l.nickName)||t,fullName:((c=this.guestMeta)==null?void 0:c.fullName)||t})}),r.on("data",a=>{if(a.type==="HEARTBEAT_PING"){try{r.send({type:"HEARTBEAT_PONG"})}catch{}return}a.type!=="HEARTBEAT_PONG"&&this.handleMessage(a)}),r.on("close",()=>{this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.connected=!1,this.onStatusChange("disconnected"),this.onError("Room host has disconnected.")})}),this.peer.on("error",o=>{console.error("PeerJS Guest error:",o),this.onError(`Could not join Board #${i}. Please ensure host is waiting and try again.`)})}sendStart4pAIPair(){this.roomCode&&this.send({type:"START_4P_AI_PAIR",roomCode:this.roomCode,bet:this.currentBet})}sendRoll(e){this.roomCode&&this.send({type:"ACTION_ROLL",roomCode:this.roomCode,rollResult:e})}sendMove(e){this.roomCode&&this.send({type:"ACTION_MOVE",roomCode:this.roomCode,move:e})}sendRestart(){this.roomCode&&this.send({type:"ACTION_RESTART",roomCode:this.roomCode})}sendChat(e,t="Player"){if(!this.roomCode)return;const n={type:"ACTION_CHAT",roomCode:this.roomCode,senderId:this.myPlayerId,senderName:t,text:e,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.send(n),this.onChatReceived(n)}sendBet(e){this.currentBet=e,this.roomCode&&this.send({type:"ROOM_BET",roomCode:this.roomCode,bet:e})}sendTimeoutPass(e){this.roomCode&&this.send({type:"ACTION_TIMEOUT_PASS",roomCode:this.roomCode,playerId:e})}sendGameState(e){this.roomCode&&this.send({type:"SYNC_GAME_STATE",roomCode:this.roomCode,state:e})}sendGate23Decision(e){this.roomCode&&this.send({type:"GATE_23_DECISION",roomCode:this.roomCode,decision:e})}send(e){if(this.mode==="p2p")if(this.peerConns&&this.peerConns.size>0)for(const t of this.peerConns)t&&t.open&&t.send(e);else this.peerConn&&this.peerConn.open&&this.peerConn.send(e);else this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(e))}leaveRoom(){if(this.roomCode=null,this.myPlayerId=null,this.myTeam=null,this.isHost=!1,this.connected=!1,this.peerConns){for(const e of this.peerConns)try{e.close()}catch{}this.peerConns.clear()}if(this.peerConn){try{this.peerConn.close()}catch{}this.peerConn=null}if(this.peer){try{this.peer.destroy()}catch{}this.peer=null}if(this.ws){try{this.ws.close()}catch{}this.ws=null}}}const mt="bk_current_user_mobile",hs="bk_all_registered_mobiles",Te={getItem(s){try{if(typeof localStorage<"u")return localStorage.getItem(s)}catch{}return null},setItem(s,e){try{typeof localStorage<"u"&&localStorage.setItem(s,e)}catch{}},removeItem(s){try{typeof localStorage<"u"&&localStorage.removeItem(s)}catch{}}};function gn(s,e){if(e&&e.trim())return e.trim();if(!s||!s.trim())return"Player";const t=s.trim().split(/\s+/).filter(Boolean);return t.length===0?"Player":t.map(n=>n[0].toUpperCase()).join("")}const De=[{id:"f_1",mobile:"9876543210",nickName:"Aatikur",fullName:"Aatikur Rahman",avatar:"👤",level:33},{id:"f_2",mobile:"9876543211",nickName:"sumongamingf9c",fullName:"Sumon Gaming",avatar:"🕵️",level:34},{id:"f_3",mobile:"9876543212",nickName:"sarker",fullName:"Sarker Babu",avatar:"😎",level:64},{id:"f_4",mobile:"9876543213",nickName:"king",fullName:"King Kumar",avatar:"🕶️",level:54},{id:"f_5",mobile:"9876543214",nickName:"jogi",fullName:"Jogi Reddy",avatar:"🏯",level:54},{id:"f_6",mobile:"9876543215",nickName:"Sk",fullName:"SK Nayak",avatar:"🤵",level:68}];class Ir{constructor(){this.currentUser=null,this.init()}init(){try{const e=Te.getItem(mt);e&&(this.currentUser=this.loadUserProfile(e),this.currentUser&&(z.balance=this.currentUser.walletBalance??1e3,z.saveBalance()))}catch(e){console.error("Failed to load active user:",e)}}cleanMobile(e){return e?e.toString().replace(/[^0-9]/g,"").slice(-10):""}isRegistered(e){const t=this.cleanMobile(e);return!t||t.length!==10?!1:Te.getItem(`bk_user_${t}`)!==null}loadUserProfile(e){const t=this.cleanMobile(e);if(!t)return null;try{const n=Te.getItem(`bk_user_${t}`);if(n){const i=JSON.parse(n);return i.nickName||(i.nickName=gn(i.fullName||i.name||"","")),i.name=i.nickName,Array.isArray(i.friends)||(i.friends=[...De]),typeof i.lastHourlyRewardClaim!="number"&&(i.lastHourlyRewardClaim=0),i}}catch(n){console.error("Failed to parse user profile:",n)}return null}saveUserProfile(e){if(!(!e||!e.mobile))try{e.walletBalance=z.getBalance(),Te.setItem(`bk_user_${e.mobile}`,JSON.stringify(e))}catch(t){console.error("Failed to save user profile:",t)}}login(e,t="",n="",i=null){const o=this.cleanMobile(e);if(!o||o.length!==10)return{success:!1,error:M("errInvalidMobile")};const r=this.loadUserProfile(o),a=(t||"").trim(),l=i===!0||i===null&&a.length>0;if(!l&&!r)return{success:!1,isNotRegistered:!0,error:M("errUnregistered")};if(l&&!r&&!a)return{success:!1,error:M("errMissingName")};const c=gn(a||(r==null?void 0:r.fullName)||(r==null?void 0:r.name)||"",n);if(r)return r.lastLoginAt=Date.now(),a&&(r.fullName=a),n&&n.trim()?(r.nickName=n.trim(),r.name=r.nickName):r.nickName||(r.nickName=c,r.name=c),Array.isArray(r.friends)||(r.friends=[...De]),this.currentUser=r,Te.setItem(mt,o),z.balance=r.walletBalance??1e3,z.saveBalance(),this.saveUserProfile(this.currentUser),{success:!0,isNewUser:!1,user:this.currentUser,message:`Welcome back, ${this.currentUser.nickName}! (Existing player)`};const d={mobile:o,fullName:a||"Player",nickName:c,name:c,joinedAt:Date.now(),lastLoginAt:Date.now(),walletBalance:1e3,gamesPlayed:0,gamesWon:0,totalKills:0,totalCoinsWon:0,matchHistory:[],friends:[...De],lastHourlyRewardClaim:0};this.currentUser=d,Te.setItem(mt,o);try{const u=JSON.parse(Te.getItem(hs)||"[]");u.includes(o)||(u.push(o),Te.setItem(hs,JSON.stringify(u)))}catch{}return z.balance=1e3,z.saveBalance(),this.saveUserProfile(d),{success:!0,isNewUser:!0,user:d,message:`Welcome, ${d.nickName}! 🪙1,000 joining bonus credited!`}}isLoggedIn(){return this.currentUser!==null}getCurrentUser(){return this.currentUser&&(this.currentUser.walletBalance=z.getBalance()),this.currentUser}recordMatch({matchId:e,tableCode:t,opponent:n,mode:i,bet:o,pot:r,result:a,coinsChange:l,durationSec:c,kills:d}){if(!this.currentUser)return;const u={id:e||`m_${Date.now()}`,tableCode:t||(e?String(e).replace(/[^0-9]/g,"").slice(-4):"1001"),date:new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),mode:i||"1v1 Match",opponent:n||"System AI",bet:o||250,pot:r||500,result:a||"WON",coinsChange:l||0,durationSec:c||0,kills:d||0};this.currentUser.gamesPlayed=(this.currentUser.gamesPlayed||0)+1,a==="WON"&&(this.currentUser.gamesWon=(this.currentUser.gamesWon||0)+1,this.currentUser.totalCoinsWon=(this.currentUser.totalCoinsWon||0)+(r||0)),this.currentUser.totalKills=(this.currentUser.totalKills||0)+(d||0),Array.isArray(this.currentUser.matchHistory)||(this.currentUser.matchHistory=[]),this.currentUser.matchHistory.unshift(u),this.currentUser.matchHistory.length>50&&this.currentUser.matchHistory.pop(),this.saveUserProfile(this.currentUser)}getFriends(e=""){let t=this.currentUser&&Array.isArray(this.currentUser.friends)?this.currentUser.friends:De;if(e&&e.trim()){const n=e.trim().toLowerCase();return t.filter(i=>i.nickName&&i.nickName.toLowerCase().includes(n)||i.fullName&&i.fullName.toLowerCase().includes(n))}return t}addFriendByMobile(e){const t=this.cleanMobile(e);if(!t||t.length!==10)return{success:!1,error:"Please enter a valid 10-digit mobile number."};if(!this.currentUser)return{success:!1,error:"Please login to add friends."};if(this.currentUser.mobile===t)return{success:!1,error:"You cannot add yourself as a friend!"};if(Array.isArray(this.currentUser.friends)||(this.currentUser.friends=[...De]),this.currentUser.friends.some(o=>o.mobile===t))return{success:!1,error:"This friend is already in your list."};const n=this.loadUserProfile(t);let i;if(n)i={id:`f_${Date.now()}`,mobile:t,nickName:n.nickName||n.name||"Friend",fullName:n.fullName||n.name||"Friend",avatar:"👑",level:Math.max(20,(n.gamesPlayed||0)*3+15),addedAt:Date.now()};else{const o=["😎","🕶️","👤","🕵️","🦁","🦚"],r=o[Math.floor(Math.random()*o.length)];i={id:`f_${Date.now()}`,mobile:t,nickName:`Friend ${t.slice(-4)}`,fullName:`Player ${t.slice(-4)}`,avatar:r,level:Math.floor(25+Math.random()*30),addedAt:Date.now()}}return this.currentUser.friends.unshift(i),this.saveUserProfile(this.currentUser),{success:!0,friend:i,message:`Added ${i.nickName} to your friends!`}}addOrUpdateFriend(e){if(!this.currentUser||!e||!e.mobile)return{success:!1,error:"Invalid friend data"};const t=this.cleanMobile(e.mobile);if(!t||t===this.currentUser.mobile)return{success:!1,error:"Cannot add self"};Array.isArray(this.currentUser.friends)||(this.currentUser.friends=[...De]);const n=e.nickName||e.name||`Friend ${t.slice(-4)}`,i=e.fullName||e.name||`Player ${t.slice(-4)}`,o=this.currentUser.friends.findIndex(a=>a.mobile===t);if(o!==-1)return this.currentUser.friends[o].nickName=n,this.currentUser.friends[o].name=n,this.currentUser.friends[o].fullName=i,this.saveUserProfile(this.currentUser),{success:!0,isNew:!1,friend:this.currentUser.friends[o]};const r={id:`f_${Date.now()}_${Math.floor(Math.random()*1e3)}`,mobile:t,nickName:n,name:n,fullName:i,avatar:e.avatar||"👤",level:e.level||Math.floor(25+Math.random()*30),addedAt:Date.now()};return this.currentUser.friends.unshift(r),this.saveUserProfile(this.currentUser),{success:!0,isNew:!0,friend:r}}removeFriend(e){return!this.currentUser||!Array.isArray(this.currentUser.friends)?{success:!1,error:"No friends list found."}:(this.currentUser.friends=this.currentUser.friends.filter(t=>t.id!==e&&t.mobile!==e),this.saveUserProfile(this.currentUser),{success:!0})}getHourlyRewardStatus(){var r;const t=((r=this.currentUser)==null?void 0:r.lastHourlyRewardClaim)||0,i=Date.now()-t;return t===0||i>=36e5?{canClaim:!0,secondsLeft:0,rewardAmount:500}:{canClaim:!1,secondsLeft:Math.max(0,Math.ceil((36e5-i)/1e3)),rewardAmount:500}}claimHourlyReward(){const e=this.getHourlyRewardStatus();return e.canClaim?(z.addCoins(500),this.currentUser&&(this.currentUser.lastHourlyRewardClaim=Date.now(),this.currentUser.walletBalance=z.getBalance(),this.saveUserProfile(this.currentUser)),{success:!0,reward:500,newBalance:z.getBalance(),message:"🎉 Claimed 500 Free Coins! Next reward in 1 hour."}):{success:!1,error:`Hourly reward available in ${Math.ceil(e.secondsLeft/60)}m.`}}getHistory(){return!this.currentUser||!this.currentUser.matchHistory?[]:this.currentUser.matchHistory}getStats(){if(!this.currentUser)return{gamesPlayed:0,gamesWon:0,winRate:0,totalKills:0,balance:1e3};const e=this.currentUser.gamesPlayed||0,t=this.currentUser.gamesWon||0,n=e>0?Math.round(t/e*100):0;return{gamesPlayed:e,gamesWon:t,winRate:n,totalKills:this.currentUser.totalKills||0,balance:z.getBalance()}}logout(){this.currentUser&&this.saveUserProfile(this.currentUser),this.currentUser=null,Te.removeItem(mt)}}const Y=new Ir;function Er(s,e="",t="",n="",i=null,o="login"){const r=o==="login",a=Tn();return`
    <div class="modal-backdrop login-modal-backdrop" id="login-modal-backdrop">
      <div class="modal-dialog modal-login modal-login-redesign">
        <!-- Header with Brand and Instant Language Switcher -->
        <div class="modal-header login-header-styled">
          <div class="login-brand-banner">
            <span class="login-brand-icon">🐚</span>
            <div>
              <h2 class="login-main-title">${M("appTitle")}</h2>
              <span class="login-sub-title">${M("appSubtitle")}</span>
            </div>
          </div>
          <button class="btn-login-lang-toggle" id="btn-login-lang-toggle" title="Switch Language / భాష మార్చండి">
            ${a==="en"?"🌐 తెలుగు":"🌐 English"}
          </button>
        </div>

        <!-- Login / Sign Up Tab Switcher -->
        <div class="login-tabs-bar">
          <button class="btn-login-tab ${r?"tab-active":""}" id="tab-login-btn">
            ${M("tabExistingLogin")}
          </button>
          <button class="btn-login-tab ${r?"":"tab-active"}" id="tab-signup-btn">
            ${M("tabNewSignUp")}
          </button>
        </div>

        <div class="modal-body login-body-styled">
          <div class="login-perks-row">
            <div class="perk-pill">
              <span class="perk-ico">🪙</span>
              <span><strong>1,000 Coins</strong> Balance</span>
            </div>
            <div class="perk-pill">
              <span class="perk-ico">📜</span>
              <span><strong>Lifetime History</strong> & Stats</span>
            </div>
          </div>

          ${i?`<div class="login-error-box">⚠️ ${i}</div>`:""}

          <!-- Mobile Number (Required for both Login & Sign Up) -->
          <div class="form-group">
            <label for="input-login-mobile" class="form-label">
              <span>📱 ${M("mobileNumber")}</span>
              <span class="label-badge required">${M("tenDigits")}</span>
            </label>
            <div class="mobile-input-wrapper">
              <span class="country-prefix">+91</span>
              <input 
                type="tel" 
                id="input-login-mobile" 
                class="form-input mobile-input" 
                placeholder="${M("mobilePlaceholder")}" 
                maxlength="10" 
                pattern="[0-9]{10}" 
                value="${e}" 
                autocomplete="tel"
                required
              />
            </div>
            <span class="input-hint">
              ${M(r?"loginMobileHint":"signupMobileHint")}
            </span>
          </div>

          ${r?`
            <!-- Quick Hint for Returning User -->
            <div class="existing-login-hint-box">
              <span>⚡ ${M("loginMobileHint")}</span>
            </div>
          `:`
            <!-- Full Name (Required for Sign Up) -->
            <div class="form-group">
              <label for="input-login-fullname" class="form-label">
                <span>👤 ${M("fullName")}</span>
                <span class="label-badge required">${M("required")}</span>
              </label>
              <input 
                type="text" 
                id="input-login-fullname" 
                class="form-input" 
                placeholder="${M("fullNamePlaceholder")}" 
                maxlength="30"
                value="${t}" 
              />
            </div>

            <!-- Nick Name (Optional for Sign Up) -->
            <div class="form-group">
              <label for="input-login-nickname" class="form-label">
                <span>🏷️ ${M("nickName")}</span>
                <span class="label-badge optional">${M("optional")}</span>
              </label>
              <input 
                type="text" 
                id="input-login-nickname" 
                class="form-input" 
                placeholder="${M("nickNamePlaceholder")}" 
                maxlength="15"
                value="${n}" 
              />
              <div class="nickname-preview-box">
                <span>${M("gameDisplayName")}: </span>
                <strong id="nickname-preview-badge" class="preview-badge">${n||"MR"}</strong>
              </div>
            </div>
          `}
        </div>

        <div class="modal-footer login-footer-centered">
          <button class="btn-primary btn-enter-bharakhatta" id="btn-submit-login">
            ${M(r?"loginSubmitBtn":"signUpSubmitBtn")}
          </button>

          <div class="login-switch-action-row">
            ${r?`
              <span class="switch-prompt">${M("firstTimePrompt")} </span>
              <button class="btn-link-switch" id="link-switch-signup">${M("signUpHere")}</button>
            `:`
              <span class="switch-prompt">${M("alreadyHaveAccount")} </span>
              <button class="btn-link-switch" id="link-switch-login">${M("loginHere")}</button>
            `}
          </div>
        </div>
      </div>
    </div>
  `}function Ar(s=!1,e={}){let t={};typeof s=="boolean"?t={isOpen:s,...e}:typeof s=="object"&&s!==null&&(t=s);const{isOpen:n=!1,playerCount:i=2,selectedBet:o=250,selectedHome:r=1,walletCoins:a=1e3}=t;if(!n)return"";const l=o*2;return`
    <div class="modal-backdrop computer-match-backdrop" id="computer-match-backdrop">
      <div class="modal-dialog modal-computer-match">
        <div class="modal-header computer-match-header">
          <div class="cm-title-wrap">
            <span class="cm-icon">🤖</span>
            <div>
              <h2 class="cm-main-title">Play with Computer</h2>
              <span class="cm-sub-title">100% Offline Match • No Internet Needed</span>
            </div>
          </div>
          <button class="modal-close-btn" id="btn-close-computer-modal">✕</button>
        </div>

        <div class="modal-body computer-match-body">
          <!-- Player Count Selection -->
          <div class="cm-section">
            <label class="cm-section-label">1. Choose Match Format</label>
            <div class="cm-format-grid">
              <button class="btn-cm-format ${i===2?"format-active":""}" id="btn-cm-format-2p" data-count="2">
                <span class="format-icon">👥</span>
                <div class="format-info">
                  <strong>1 vs 1 Solo</strong>
                  <span>Head-to-head vs System AI</span>
                </div>
                ${i===2?'<span class="format-check">✔</span>':""}
              </button>

              <button class="btn-cm-format ${i===4?"format-active":""}" id="btn-cm-format-4p" data-count="4">
                <span class="format-icon">👥👥</span>
                <div class="format-info">
                  <strong>2 vs 2 Teams</strong>
                  <span>You & AI vs Opposite Pair AI</span>
                </div>
                ${i===4?'<span class="format-check">✔</span>':""}
              </button>
            </div>
          </div>

          <!-- Pot Stake Chips Selection -->
          <div class="cm-section">
            <div class="cm-section-header-row">
              <label class="cm-section-label">2. Choose Pot Coins / Bet</label>
              <span class="cm-wallet-badge">Wallet: 🪙 ${a.toLocaleString()}</span>
            </div>

            <div class="cm-bet-grid">
              ${kt.map(c=>{const d=c===o,u=a>=c;return`
                  <button 
                    class="btn-cm-bet ${d?"bet-active":""} ${u?"":"bet-disabled"}" 
                    data-bet="${c}"
                    ${u?"":'disabled title="Not enough coins"'}
                  >
                    <span class="bet-chip">🪙</span>
                    <span class="bet-amount">${c.toLocaleString()}</span>
                    <span class="bet-pot">Pot: 🪙${(c*2).toLocaleString()}</span>
                  </button>
                `}).join("")}
            </div>

            <!-- Pot Summary Card -->
            <div class="cm-pot-summary">
              <div class="cm-pot-box">
                <span class="pot-lbl">Your Stake</span>
                <strong class="pot-val stake-val">🪙 ${o.toLocaleString()}</strong>
              </div>
              <span class="cm-arrow">➔</span>
              <div class="cm-pot-box">
                <span class="pot-lbl">Winner Takes Pot</span>
                <strong class="pot-val pot-highlight">🏆 🪙 ${l.toLocaleString()}</strong>
              </div>
            </div>
          </div>

          <div class="cm-rules-hint-card">
            <span>💡 <strong>Village Rules</strong>: Starting homes are unlocked on your first roll of <strong>1, 5, or 6</strong>. Opponent automatically gets the opposite home base!</span>
          </div>
        </div>

        <div class="modal-footer computer-match-footer">
          <button class="btn-primary btn-start-computer-match" id="btn-start-computer-game">
            🎲 Start Game (Pot: 🪙${l.toLocaleString()})
          </button>
        </div>
      </div>
    </div>
  `}function xr(s,e,t,n=[]){if(!e)return"";const i=t.gamesPlayed>0?Math.round(t.gamesWon/t.gamesPlayed*100):0,o=n&&n.length>0?n.map(r=>{const a=r.result==="WON",l=a?"result-won":"result-lost",c=a?"🏆":r.result==="FORFEITED"?"⚠️":"❌",d=r.coinsChange>0?"delta-positive":r.coinsChange<0?"delta-negative":"",u=r.coinsChange>0?"+":"";return`
          <tr class="history-row">
            <td>
              <div class="history-date">${r.date}</div>
              <div class="history-time">${r.time}</div>
            </td>
            <td>
              <div class="history-mode">${r.mode}</div>
              <div class="history-opp">vs ${r.opponent}</div>
            </td>
            <td>
              <span class="history-badge ${l}">
                ${c} ${r.result}
              </span>
            </td>
            <td>
              <span class="history-kills">⚔️ ${r.kills}</span>
            </td>
            <td class="text-right">
              <span class="history-delta ${d}">
                ${u}${r.coinsChange?r.coinsChange.toLocaleString():"0"} 🪙
              </span>
            </td>
          </tr>
        `}).join(""):`
      <tr>
        <td colspan="5" class="empty-history">
          🎲 No matches played yet on this mobile number. Play a match to start your record!
        </td>
      </tr>
    `;return`
    <div class="modal-backdrop" id="profile-modal-backdrop">
      <div class="modal-dialog modal-profile">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">👤</span>
            <div>
              <h2 class="modal-title">${e.name}</h2>
              <span class="modal-subtitle">📱 +91 ${e.mobile} • Registered Player</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-profile">&times;</button>
        </div>

        <div class="modal-body">
          <!-- Stats Summary Grid -->
          <div class="stats-overview-grid">
            <div class="stat-card">
              <span class="stat-value">🪙 ${t.balance.toLocaleString()}</span>
              <span class="stat-label">Coin Balance</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">${t.gamesWon} / ${t.gamesPlayed}</span>
              <span class="stat-label">Wins / Played</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">${i}%</span>
              <span class="stat-label">Win Rate</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">⚔️ ${t.totalKills}</span>
              <span class="stat-label">Total Kills</span>
            </div>
          </div>

          <!-- Match History Section -->
          <div class="history-section">
            <div class="history-section-header">
              <h3>📜 Match History (${n.length})</h3>
              <span class="history-hint">Synced to mobile ${e.mobile}</span>
            </div>

            <div class="history-table-wrapper">
              <table class="history-table">
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Match</th>
                    <th>Result</th>
                    <th>Kills</th>
                    <th class="text-right">Coins</th>
                  </tr>
                </thead>
                <tbody>
                  ${o}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="modal-footer modal-footer-split">
          <button class="btn-secondary" id="btn-switch-account">
            🔄 Switch Account
          </button>
          <button class="btn-primary" id="btn-profile-done">
            Close
          </button>
        </div>
      </div>
    </div>
  `}function $r(s){return`
    <div class="modal-backdrop" id="exit-modal-backdrop">
      <div class="modal-dialog modal-confirm">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">🚪</span>
            <div>
              <h2 class="modal-title">Exit Match?</h2>
              <span class="modal-subtitle">Are you sure you want to leave the current game?</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-exit">&times;</button>
        </div>

        <div class="modal-body">
          <p class="confirm-text">
            If you exit now, your current game progress will end. In a multiplayer room, leaving forfeits the match and your bet stake to your opponent.
          </p>
        </div>

        <div class="modal-footer modal-footer-split">
          <button class="btn-secondary" id="btn-cancel-exit">
            ▶️ Resume Playing
          </button>
          <button class="btn-danger" id="btn-confirm-exit">
            🚪 Yes, Exit Match
          </button>
        </div>
      </div>
    </div>
  `}function Or(s,e=120,t=!1){const n=Math.floor(e/60),i=e%60;return`
    <div class="modal-backdrop" id="inactivity-modal-backdrop">
      <div class="modal-dialog modal-alert">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">⏰</span>
            <div>
              <h2 class="modal-title">Inactivity Forfeit</h2>
              <span class="modal-subtitle">You were away from the game for ${`${n}m ${i}s`}</span>
            </div>
          </div>
        </div>

        <div class="modal-body">
          <div class="alert-box-warning">
            <p>
              <strong>Match Abandoned (>2 Minutes Away):</strong><br/>
              ${t?"You left Bharakhatta to use other apps for more than 2 minutes during an active online match. The game was forfeited and the pot awarded to your opponent.":"You were away from the match in other apps for more than 2 minutes."}
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-block" id="btn-inactivity-dismiss">
            🔄 Start New Match
          </button>
        </div>
      </div>
    </div>
  `}function wr(s){return`
    <div class="modal-backdrop" id="gate-prompt-backdrop" style="z-index: 1050;">
      <div class="modal-dialog modal-confirm" style="max-width: 480px; text-align: center;">
        <div class="modal-header" style="justify-content: center; flex-direction: column; align-items: center; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
          <span style="font-size: 2.4rem; margin-bottom: 8px;">⚔️</span>
          <h2 class="modal-title" style="color: #f1c40f; font-size: 1.3rem; margin: 0;">
            ${M("gate23Title")}
          </h2>
        </div>

        <div class="modal-body" style="padding: 16px;">
          <div style="background: rgba(241, 196, 15, 0.1); border: 1px solid rgba(241, 196, 15, 0.3); border-radius: 10px; padding: 12px; margin-bottom: 14px; text-align: left;">
            <p style="margin: 0; font-size: 0.92rem; line-height: 1.5; color: #f39c12;">
              ${M("gate23Msg")}
            </p>
          </div>
          <div style="display: flex; justify-content: space-around; font-size: 0.82rem; color: #bdc3c7; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 8px;">
            <span>🚪 <strong>H1 (Bottom):</strong> <span style="color:#2ecc71;">Unlocked</span></span>
            <span>🚪 <strong>H2 (Top):</strong> <span style="color:#2ecc71;">Unlocked</span></span>
          </div>
        </div>

        <div class="modal-footer modal-footer-split" style="display: flex; gap: 10px; justify-content: center;">
          <button class="btn-primary" id="btn-gate-continue" style="flex: 1; padding: 12px 14px; font-weight: bold;">
            ${M("btnContinueGame")}
          </button>
          <button class="btn-secondary" id="btn-gate-restart" style="flex: 1; padding: 12px 14px;">
            ${M("btnStartAgain")}
          </button>
        </div>
      </div>
    </div>
  `}function Br(s={}){const{user:e,walletCoins:t=1e3,hourlyRewardStatus:n=null,isSearchingOnlineMatch:i=!1}=s,o=e&&(e.nickName||e.name)||"Player",r=Tn(),a=n==null?void 0:n.canClaim,l=Math.floor(((n==null?void 0:n.secondsLeft)||0)/60),c=((n==null?void 0:n.secondsLeft)||0)%60,d=a?M("freeCoinsClaim"):`${l}m ${c}s`;return`
    <div class="lobby-overlay-container">
      <div class="lobby-card casual-mobile-lobby">
        <!-- 1. Top Bar: Profile, Level, Currencies & Language Switcher -->
        <div class="lobby-top-bar">
          <!-- User Profile & Level -->
          <div class="profile-chip" id="btn-lobby-profile" title="View Profile & Lifetime History">
            <div class="avatar-wrap">
              <span class="avatar-symbol">👤</span>
              <span class="avatar-lvl-badge">1</span>
            </div>
            <div class="profile-info-col">
              <span class="profile-nick">${o}</span>
              <div class="xp-bar-wrap">
                <span class="xp-star">⭐</span>
                <div class="xp-bar-fill"></div>
              </div>
            </div>
          </div>

          <!-- Currencies & Actions -->
          <div class="lobby-currencies-group">
            <!-- Coins Pill with Plus -->
            <div class="currency-pill coin-currency" id="btn-lobby-coins" title="Coins Wallet">
              <span class="curr-icon">🪙</span>
              <span class="curr-val">${t.toLocaleString()}</span>
              <button class="curr-plus-btn" id="btn-lobby-add-coins" title="Free Coins Refill">+</button>
            </div>

            <!-- Diamonds / Gems Pill -->
            <div class="currency-pill gem-currency" title="Diamonds">
              <span class="curr-icon">💎</span>
              <span class="curr-val">385</span>
              <button class="curr-plus-btn">+</button>
            </div>

            <!-- Language Switcher -->
            <button class="btn-lobby-lang" id="btn-lobby-lang-toggle" title="Switch Language / భాష మార్చండి">
              ${r==="en"?"తెలుగు":"EN"}
            </button>

            <!-- Switch Account / Logout -->
            <button class="btn-lobby-switch-acc" id="btn-lobby-switch-acc" title="Switch Account / Logout">
              🔄
            </button>
          </div>
        </div>

        <!-- 2. Badges & Golden CLAIM! Ticket Row -->
        <div class="lobby-claim-section">
          <div class="mini-badges-row">
            <div class="mini-badge-pill">
              <span class="mb-icon">🛡️</span>
              <span class="mb-label">Ranking: <strong>Unranked</strong></span>
            </div>
            <div class="mini-badge-pill">
              <span class="mb-icon">🏆</span>
              <span class="mb-label">Leaderboard: <strong>4d 0h</strong></span>
            </div>
          </div>

          <!-- Big Radiant Golden CLAIM! Ticket -->
          <button 
            class="golden-claim-ticket ${a?"claim-ticket-ready":"claim-ticket-cooldown"}" 
            id="btn-lobby-hourly-reward"
            title="Claim 500 Free Coins every hour based on mobile device time!"
          >
            <div class="ticket-sawtooth left-saw"></div>
            <div class="ticket-body">
              <span class="ticket-star">✨</span>
              <div class="ticket-text-wrap">
                <span class="ticket-title">${M(a?"freeCoinsClaim":"freeCoinsBtn")}</span>
                <span class="ticket-sub">${a?"Free 500 Coins Ready!":`Wait: ${d}`}</span>
              </div>
              <span class="ticket-gift">🎁</span>
            </div>
            <div class="ticket-sawtooth right-saw"></div>
          </button>
        </div>

        <!-- 3. Game Title Banner -->
        <div class="lobby-brand-bar">
          <span class="brand-cowrie-ico">🐚</span>
          <div class="brand-titles">
            <h1 class="brand-game-name">${M("appTitle")}</h1>
            <span class="brand-tagline">${M("appSubtitle")}</span>
          </div>
        </div>

        <!-- 4. Main Center Stage: 3D Game Buttons (Online vs Computer vs Friends) -->
        ${i?`
          <div class="online-searching-banner">
            <span class="searching-spin">🌀</span>
            <span>Searching for online player... (4s Quick Match)</span>
          </div>
        `:""}
        <div class="hero-game-modes-grid">
          <!-- Green 3D Button: Play Online (Random Online Match) -->
          <button class="game-mode-3d-btn btn-mode-green" id="btn-mode-online">
            <div class="btn-3d-sheen"></div>
            <div class="btn-3d-icon-box green-icon-box">
              <span class="device-icon">🌐</span>
              <span class="vs-badge">⚡</span>
            </div>
            <div class="btn-3d-text-wrap">
              <h2 class="btn-3d-title">${M("menuOnline")}</h2>
              <span class="btn-3d-desc">${M("menuOnlineSub")}</span>
            </div>
            <span class="btn-3d-pill pill-online">QUICK MATCH</span>
          </button>

          <!-- Yellow 3D Button: Play with Computer (100% Offline) -->
          <button class="game-mode-3d-btn btn-mode-yellow" id="btn-mode-computer">
            <div class="btn-3d-sheen"></div>
            <div class="btn-3d-icon-box yellow-icon-box">
              <span class="device-icon">📱</span>
              <span class="vs-badge">VS</span>
            </div>
            <div class="btn-3d-text-wrap">
              <h2 class="btn-3d-title">${M("menuComputer")}</h2>
              <span class="btn-3d-desc">${M("menuComputerSub")}</span>
            </div>
            <span class="btn-3d-pill pill-offline">100% OFFLINE</span>
          </button>

          <!-- Cyan/Blue 3D Button: Play with Friends (Private Room) -->
          <button class="game-mode-3d-btn btn-mode-cyan" id="btn-mode-friends">
            <div class="btn-3d-sheen"></div>
            <div class="btn-3d-icon-box cyan-icon-box">
              <span class="friends-icon">👥</span>
              <span class="heart-badge">❤️</span>
            </div>
            <div class="btn-3d-text-wrap">
              <h2 class="btn-3d-title">${M("menuFriends")}</h2>
              <span class="btn-3d-desc">${M("menuFriendsSub")}</span>
            </div>
            <span class="btn-3d-pill pill-friends">4-DIGIT ROOM</span>
          </button>
        </div>

        <!-- 5. Bottom Navigation Bar -->
        <div class="casual-bottom-nav">
          <button class="bnav-item" id="btn-nav-store" title="Free Coin Refill">
            <span class="bnav-icon">🛒</span>
            <span class="bnav-badge-free">FREE</span>
            <span class="bnav-label">${M("store")}</span>
          </button>
          <button class="bnav-item bnav-active" id="btn-nav-home" title="Home Menu">
            <span class="bnav-icon">🏠</span>
            <span class="bnav-label">${M("home")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-friends-direct" title="Friends Hub">
            <span class="bnav-icon">👥</span>
            <span class="bnav-label">${M("menuFriends")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-history" title="Match History">
            <span class="bnav-icon">📜</span>
            <span class="bnav-label">${M("matchHistory")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-rules" title="Rules Guide">
            <span class="bnav-icon">📖</span>
            <span class="bnav-label">${M("rules")}</span>
          </button>
        </div>
      </div>
    </div>
  `}function Nr(s={}){const{isOpen:e=!1,friends:t=[],searchQuery:n="",isEditing:i=!1,activeTab:o="create",walletCoins:r=1e3,diamonds:a=385,roomCode:l="4821",roomMode:c="2p",selectedBet:d=250,shareUrl:u="",joinCode:p="",joinError:f=null,isJoining:b=!1,hourlyRewardStatus:C={canClaim:!0,secondsLeft:0,rewardAmount:500}}=s;if(!e)return"";const T=(p||"").split(""),k=S=>{const $=Math.floor(S/60),R=S%60;return`${$}m ${R<10?"0":""}${R}s`},L=c==="4p",I=d*2,ee=`https://api.whatsapp.com/send?text=${encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta match on table *${l}* (${L?"2v2 Teams":"1v1"})!
Pot: 🪙${I.toLocaleString()} coins.
Tap here to play: ${u||"https://maheshwar567.github.io/bharakhatta/?room="+l}`)}`;return`
    <div class="modal-backdrop friends-hub-backdrop" id="friends-hub-backdrop">
      <div class="friends-hub-dialog">
        <!-- Top Bar: Title & Currencies -->
        <header class="friends-hub-topbar">
          <div class="fhub-title-row">
            <button class="btn-fhub-back" id="btn-close-friends-hub" title="Back to Game">
              ‹
            </button>
            <h2 class="fhub-title">Play with Friends</h2>
          </div>

          <div class="fhub-currencies">
            <!-- Diamonds / Gems -->
            <div class="currency-pill diamond-pill" title="Diamonds">
              <span class="curr-icon">💎</span>
              <span class="curr-val">${a}</span>
              <button class="btn-curr-plus">+</button>
            </div>

            <!-- Coins Balance -->
            <div class="currency-pill coin-pill" id="btn-fhub-wallet" title="Coins Wallet">
              <span class="curr-icon">🪙</span>
              <span class="curr-val">${r.toLocaleString()}</span>
              <button class="btn-curr-plus">+</button>
            </div>
          </div>
        </header>

        <!-- Sub-Tabs: Create Table | Join Table | Friends List -->
        <nav class="fhub-tabs-strip">
          <button class="fhub-tab ${o==="create"?"tab-active":""}" data-fhub-tab="create">
            🎲 Create Table
          </button>
          <button class="fhub-tab ${o==="join"?"tab-active":""}" data-fhub-tab="join">
            🚪 Join Table
          </button>
          <button class="fhub-tab ${o==="friends"?"tab-active":""}" data-fhub-tab="friends">
            👥 Friends List (${t.length})
          </button>
        </nav>

        <div class="friends-hub-content-scroll">
          ${o==="create"?`
            <!-- Tab 1: Create Table -->
            <div class="fhub-tab-pane fhub-create-pane">
              <!-- Mode Selection: 1v1 vs 2v2 Checkboxes -->
              <div class="room-setup-section">
                <label class="setup-section-label">Select Match Mode:</label>
                <div class="mode-checkbox-grid">
                  <label class="mode-checkbox-card ${L?"":"mode-checked"}">
                    <input type="radio" name="create-room-mode" value="2p" ${L?"":"checked"} id="radio-mode-1v1" />
                    <div class="mode-card-content">
                      <span class="mode-card-icon">👥</span>
                      <div class="mode-card-texts">
                        <strong>1v1 (2 Players)</strong>
                        <span>Head-to-head match</span>
                      </div>
                    </div>
                  </label>

                  <label class="mode-checkbox-card ${L?"mode-checked":""}">
                    <input type="radio" name="create-room-mode" value="4p" ${L?"checked":""} id="radio-mode-2v2" />
                    <div class="mode-card-content">
                      <span class="mode-card-icon">👥👥</span>
                      <div class="mode-card-texts">
                        <strong>2v2 (4 Players)</strong>
                        <span>Partner & team play</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Pot / Stake Selection -->
              <div class="room-setup-section">
                <label class="setup-section-label">Bet Stake (Winner takes Pot):</label>
                <div class="bet-chips-grid bet-chips-compact">
                  ${kt.map(S=>{const $=S===d,R=r>=S;return`
                      <button 
                        type="button"
                        class="btn-lobby-tier ${$?"tier-selected":""} ${R?"":"tier-disabled"}"
                        data-create-bet="${S}"
                        ${R?"":"disabled"}
                      >
                        <span class="tier-chip-icon">🪙</span>
                        <span class="tier-stake">${S}</span>
                      </button>
                    `}).join("")}
                </div>
              </div>

              <!-- Huge 4-Digit Table Code Display -->
              <div class="table-code-hero-card">
                <span class="table-code-label">TABLE CODE (SHARE WITH FRIEND)</span>
                <div class="table-digits-display">
                  ${(l||"4821").split("").map(S=>`<span class="digit-box digit-box-gold">${S}</span>`).join("")}
                </div>
                <div class="table-code-actions">
                  <button class="btn-copy-code" id="btn-copy-4digit-code" data-code="${l||"4821"}">
                    📋 Copy Code (${l||"4821"})
                  </button>
                  <a href="${ee}" target="_blank" class="btn-whatsapp-share-code" id="btn-whatsapp-room-share" rel="noopener noreferrer">
                    💬 Share on WhatsApp
                  </a>
                </div>
              </div>

              <!-- Waiting Indicator -->
              <div class="room-waiting-indicator">
                <div class="pulse-waiting-ring"></div>
                <span>Waiting for friend to enter code <strong>${l||"4821"}</strong>...</span>
              </div>
            </div>
          `:o==="join"?`
            <!-- Tab 2: Join Table -->
            <div class="fhub-tab-pane fhub-join-pane">
              <div class="join-code-entry-wrap">
                <div class="join-card-header">
                  <span class="join-header-icon">🚪</span>
                  <label class="join-code-label" for="input-4digit-code">Enter 4-Digit Table Code</label>
                  <p class="join-code-sub">Enter the code shared by your friend to join their board</p>
                </div>

                <!-- 4 Golden PIN Digit Boxes -->
                <div class="join-pin-row" id="join-pin-display-row">
                  ${[0,1,2,3].map(S=>{const $=T[S]||"",R=S===T.length&&!b;return`
                      <span class="join-pin-box ${$?"pin-filled":""} ${R?"pin-active":""}">
                        ${$||"•"}
                      </span>
                    `}).join("")}
                </div>

                <!-- Hidden/Transparent Input for Physical Keyboard & Autofill -->
                <input 
                  type="text" 
                  id="input-4digit-code" 
                  maxlength="4" 
                  placeholder="e.g. 4821" 
                  value="${p}"
                  autocomplete="off"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  class="join-code-input"
                  autofocus
                />

                <!-- Quick Action: Paste from Clipboard -->
                <button type="button" class="btn-paste-code" id="btn-paste-join-code" title="Paste 4-digit code from clipboard">
                  📋 Paste from Clipboard
                </button>

                <!-- Touch Keypad for Frictionless Mobile Input -->
                <div class="join-keypad-grid">
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="1">1</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="2">2</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="3">3</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="4">4</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="5">5</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="6">6</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="7">7</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="8">8</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="9">9</button>
                  <button type="button" class="btn-fhub-keypad-key btn-keypad-action" data-join-key="clear">CLR</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="0">0</button>
                  <button type="button" class="btn-fhub-keypad-key btn-keypad-action" data-join-key="back">⌫</button>
                </div>

                ${f?`<div class="join-code-error">⚠️ ${f}</div>`:""}

                <button class="btn-glossy-green btn-submit-join ${b?"btn-joining-loading":""}" id="btn-submit-join-code" ${b?"disabled":""}>
                  ${b?"⏳ Connecting to Table...":"🚀 Join Table & Play"}
                </button>
              </div>
            </div>
          `:`
            <!-- Tab 3: Friends List -->
            <div class="fhub-tab-pane fhub-friends-pane">
              <!-- Search & Action Strip -->
              <div class="fhub-action-strip">
                <div class="fhub-search-box">
                  <span class="search-icon">🔍</span>
                  <input 
                    type="text" 
                    id="input-fhub-search" 
                    placeholder="Search friends..." 
                    value="${n}" 
                  />
                  ${n?'<button class="btn-clear-search" id="btn-clear-fhub-search">&times;</button>':""}
                </div>

                <button class="btn-fhub-pill btn-invite-whatsapp" id="btn-fhub-invite-whatsapp" title="Share via WhatsApp">
                  <span class="pill-icon">👥</span>
                  <span>Invite WhatsApp</span>
                </button>

                <button class="btn-fhub-pill btn-add-friend" id="btn-fhub-add-friend" title="Add friend by mobile number">
                  <span class="pill-icon">👤+</span>
                  <span>Add Friend</span>
                </button>

                <button class="btn-fhub-edit-toggle ${i?"edit-active":""}" id="btn-fhub-toggle-edit" title="Toggle Delete Friends Mode">
                  ${i?"✔":"✏️"}
                </button>
              </div>

              <!-- Friends / Challenge List -->
              <div class="fhub-friends-list">
                ${t.length===0?`
                  <div class="fhub-empty-state">
                    <span class="empty-icon">👥</span>
                    <p>No friends found in your list.</p>
                    <button class="btn-primary" id="btn-fhub-empty-add">👤+ Add Friend by Mobile Number</button>
                  </div>
                `:t.map(S=>`
                  <div class="friend-card-row">
                    <div class="fcard-avatar-wrap">
                      <div class="fcard-avatar">
                        <span>${S.avatar||"👤"}</span>
                      </div>
                      <div class="fcard-level-star">
                        <span>⭐</span>
                        <span class="star-num">${S.level||1}</span>
                      </div>
                    </div>

                    <div class="fcard-info">
                      <span class="fcard-name">${S.nickName||S.name||"Friend"}</span>
                    </div>

                    <div class="fcard-actions">
                      <button class="btn-fcard-gift" data-friend-id="${S.id}" title="Send Free Coins Gift">
                        🎁
                      </button>

                      <button class="btn-glossy-green btn-fcard-challenge" data-friend-name="${S.nickName||S.name}" data-friend-id="${S.id}">
                        ⚔️ Challenge
                      </button>

                      ${i?`
                        <button class="btn-fcard-delete" data-friend-id="${S.id}" title="Delete Friend">
                          🗑️
                        </button>
                      `:""}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `}
        </div>

        <!-- Bottom Navigation Bar (Matching App Theme) -->
        <nav class="fhub-bottom-nav">
          <button class="fhub-nav-item" id="btn-nav-home">
            <span class="nav-icon">🏠</span>
            <span class="nav-label">Home</span>
          </button>

          <button class="fhub-nav-item nav-active" id="btn-nav-friends">
            <span class="nav-icon">👥</span>
            <span class="nav-label">Friends</span>
          </button>

          <button class="fhub-nav-item" id="btn-nav-reward" title="Claim 500 Free Coins Every Hour">
            <span class="nav-icon">🎁</span>
            <span class="nav-label">
              ${C.canClaim?"Free 500🪙":k(C.secondsLeft)}
            </span>
            ${C.canClaim?'<span class="nav-badge-dot">!</span>':""}
          </button>

          <button class="fhub-nav-item" id="btn-nav-history" title="View Match History">
            <span class="nav-icon">📜</span>
            <span class="nav-label">History</span>
          </button>

          <button class="fhub-nav-item" id="btn-nav-profile" title="View Profile">
            <span class="nav-icon">👤</span>
            <span class="nav-label">Profile</span>
          </button>
        </nav>
      </div>
    </div>
  `}function Lr(s,e={}){const{playerName:t="Player 1",score:n=1,teamId:i=1}=e;return`
    <div class="modal-backdrop home-picker-backdrop" id="home-picker-backdrop">
      <div class="modal-dialog home-picker-dialog">
        <div class="home-picker-header">
          <span class="picker-trophy">🎉</span>
          <h2 class="picker-title">Choose Your Starting Home!</h2>
          <p class="picker-subtitle">
            <strong>${t}</strong> rolled <strong>${n}</strong>! Pick your home base — your opponent will automatically receive the opposite home.
          </p>
        </div>

        <div class="picker-homes-grid">
          <button type="button" class="btn-picker-home" data-pick-home="1">
            <span class="picker-home-badge">H1</span>
            <div class="picker-home-details">
              <strong>Home 1 (East)</strong>
              <span>Opponent gets Home 3 (West)</span>
            </div>
            <span class="picker-arrow">➔</span>
          </button>

          <button type="button" class="btn-picker-home" data-pick-home="2">
            <span class="picker-home-badge">H2</span>
            <div class="picker-home-details">
              <strong>Home 2 (North)</strong>
              <span>Opponent gets Home 4 (South)</span>
            </div>
            <span class="picker-arrow">➔</span>
          </button>

          <button type="button" class="btn-picker-home" data-pick-home="3">
            <span class="picker-home-badge">H3</span>
            <div class="picker-home-details">
              <strong>Home 3 (West)</strong>
              <span>Opponent gets Home 1 (East)</span>
            </div>
            <span class="picker-arrow">➔</span>
          </button>

          <button type="button" class="btn-picker-home" data-pick-home="4">
            <span class="picker-home-badge">H4</span>
            <div class="picker-home-details">
              <strong>Home 4 (South)</strong>
              <span>Opponent gets Home 2 (North)</span>
            </div>
            <span class="picker-arrow">➔</span>
          </button>
        </div>
      </div>
    </div>
  `}function Hr(s,e={}){const{roomCode:t="4821",mode:n="2p",selectedBet:i=250,selectedHome:o=1,walletCoins:r=1e3,shareUrl:a="",qrDataUrl:l=null,isWaiting:c=!0}=e,d=i*2,u=n==="4p",f=`https://api.whatsapp.com/send?text=${encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta match on table *${t}* (${u?"2v2 Teams":"1v1"})!
Pot: 🪙${d.toLocaleString()} coins.
Tap here to play: ${a||"https://maheshwar567.github.io/bharakhatta/?room="+t}`)}`;return`
    <div class="modal-backdrop room-modal-backdrop" id="create-room-modal-backdrop">
      <div class="modal-dialog room-code-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">🎲</span>
            <div>
              <h2 class="modal-title">Create Table Room</h2>
              <span class="modal-subtitle">Configure match and share the 4-digit code</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-create-room">&times;</button>
        </div>

        <div class="modal-body room-code-body">
          <!-- Mode Selection: 1v1 vs 2v2 Checkboxes -->
          <div class="room-setup-section">
            <label class="setup-section-label">Select Game Mode:</label>
            <div class="mode-checkbox-grid">
              <label class="mode-checkbox-card ${u?"":"mode-checked"}">
                <input type="radio" name="create-room-mode" value="2p" ${u?"":"checked"} id="radio-mode-1v1" />
                <div class="mode-card-content">
                  <span class="mode-card-icon">👥</span>
                  <div class="mode-card-texts">
                    <strong>1v1 (2 Players)</strong>
                    <span>Head-to-head match</span>
                  </div>
                </div>
              </label>

              <label class="mode-checkbox-card ${u?"mode-checked":""}">
                <input type="radio" name="create-room-mode" value="4p" ${u?"checked":""} id="radio-mode-2v2" />
                <div class="mode-card-content">
                  <span class="mode-card-icon">👥👥</span>
                  <div class="mode-card-texts">
                    <strong>2v2 (4 Players)</strong>
                    <span>Partner & team play</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Pot / Stake Selection -->
          <div class="room-setup-section">
            <label class="setup-section-label">Bet Stake (Winner takes Pot):</label>
            <div class="bet-chips-grid bet-chips-compact">
              ${kt.map(b=>{const C=b===i,T=r>=b;return`
                  <button 
                    type="button"
                    class="btn-lobby-tier ${C?"tier-selected":""} ${T?"":"tier-disabled"}"
                    data-create-bet="${b}"
                    ${T?"":"disabled"}
                  >
                    <span class="tier-chip-icon">🪙</span>
                    <span class="tier-stake">${b}</span>
                  </button>
                `}).join("")}
            </div>
          </div>

          <!-- Starting Home Selection (Opposite Home Rule) -->
          <div class="room-setup-section">
            <div class="cm-section-header-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <label class="setup-section-label" style="margin-bottom: 0;">Starting Home Base:</label>
              <span class="cm-opposite-hint">Opponent gets Opposite Home</span>
            </div>
            <div class="cm-homes-grid">
              <button type="button" class="btn-cm-home btn-room-home ${o===1?"home-active":""}" data-room-home="1">
                <span class="cm-home-badge">H1</span>
                <div class="cm-home-info">
                  <strong>Home 1 (East)</strong>
                  <span>Opponent: Home 3 (West)</span>
                </div>
                ${o===1?'<span class="format-check">✔</span>':""}
              </button>
              <button type="button" class="btn-cm-home btn-room-home ${o===4?"home-active":""}" data-room-home="4">
                <span class="cm-home-badge">H4</span>
                <div class="cm-home-info">
                  <strong>Home 4 (South)</strong>
                  <span>Opponent: Home 2 (North)</span>
                </div>
                ${o===4?'<span class="format-check">✔</span>':""}
              </button>
              <button type="button" class="btn-cm-home btn-room-home ${o===2?"home-active":""}" data-room-home="2">
                <span class="cm-home-badge">H2</span>
                <div class="cm-home-info">
                  <strong>Home 2 (North)</strong>
                  <span>Opponent: Home 4 (South)</span>
                </div>
                ${o===2?'<span class="format-check">✔</span>':""}
              </button>
              <button type="button" class="btn-cm-home btn-room-home ${o===3?"home-active":""}" data-room-home="3">
                <span class="cm-home-badge">H3</span>
                <div class="cm-home-info">
                  <strong>Home 3 (West)</strong>
                  <span>Opponent: Home 1 (East)</span>
                </div>
                ${o===3?'<span class="format-check">✔</span>':""}
              </button>
            </div>
          </div>

          <!-- Huge 4-Digit Table Code Display -->
          <div class="table-code-hero-card">
            <span class="table-code-label">TABLE CODE (SHARE WITH FRIEND)</span>
            <div class="table-digits-display">
              ${t.split("").map(b=>`<span class="digit-box">${b}</span>`).join("")}
            </div>
            <div class="table-code-actions">
              <button class="btn-copy-code" id="btn-copy-4digit-code" data-code="${t}">
                📋 Copy Code (${t})
              </button>
              <a href="${f}" target="_blank" class="btn-whatsapp-share-code" id="btn-whatsapp-room-share" rel="noopener noreferrer">
                💬 Share on WhatsApp
              </a>
            </div>
          </div>

          <!-- Waiting Spinner -->
          ${c?`
            <div class="room-waiting-indicator">
              <div class="pulse-waiting-ring"></div>
              <span>Waiting for friend to enter code <strong>${t}</strong>...</span>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `}function Fr(s,e={}){const{errorMsg:t=null,enteredCode:n="",isJoining:i=!1}=e,o=(n||"").split("");return`
    <div class="modal-backdrop room-modal-backdrop" id="join-room-modal-backdrop">
      <div class="modal-dialog room-code-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">🚪</span>
            <div>
              <h2 class="modal-title">Join Table</h2>
              <span class="modal-subtitle">Enter the 4-digit code shared by your friend</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-join-room">&times;</button>
        </div>

        <div class="modal-body room-code-body">
          <div class="join-code-entry-wrap">
            <div class="join-card-header">
              <label class="join-code-label" for="input-4digit-code">4-Digit Table Code</label>
              <p class="join-code-sub">Enter the code shared by your friend to join their board</p>
            </div>

            <!-- 4 Golden PIN Digit Boxes -->
            <div class="join-pin-row" id="join-pin-display-row">
              ${[0,1,2,3].map(r=>{const a=o[r]||"",l=r===o.length&&!i;return`
                  <span class="join-pin-box ${a?"pin-filled":""} ${l?"pin-active":""}">
                    ${a||"•"}
                  </span>
                `}).join("")}
            </div>

            <!-- Hidden/Transparent Input for Physical Keyboard & Autofill -->
            <input 
              type="text" 
              id="input-4digit-code" 
              maxlength="4" 
              placeholder="e.g. 4821" 
              value="${n}"
              autocomplete="off"
              inputmode="numeric"
              pattern="[0-9]*"
              class="join-code-input"
              autofocus
            />

            <!-- Quick Action: Paste from Clipboard -->
            <button type="button" class="btn-paste-code" id="btn-paste-join-code" title="Paste 4-digit code from clipboard">
              📋 Paste from Clipboard
            </button>

            <!-- Touch Keypad for Frictionless Mobile Input -->
            <div class="join-keypad-grid">
              <button type="button" class="btn-fhub-keypad-key" data-join-key="1">1</button>
              <button type="button" class="btn-fhub-keypad-key" data-join-key="2">2</button>
              <button type="button" class="btn-fhub-keypad-key" data-join-key="3">3</button>
              <button type="button" class="btn-fhub-keypad-key" data-join-key="4">4</button>
              <button type="button" class="btn-fhub-keypad-key" data-join-key="5">5</button>
              <button type="button" class="btn-fhub-keypad-key" data-join-key="6">6</button>
              <button type="button" class="btn-fhub-keypad-key" data-join-key="7">7</button>
              <button type="button" class="btn-fhub-keypad-key" data-join-key="8">8</button>
              <button type="button" class="btn-fhub-keypad-key" data-join-key="9">9</button>
              <button type="button" class="btn-fhub-keypad-key btn-keypad-action" data-join-key="clear">CLR</button>
              <button type="button" class="btn-fhub-keypad-key" data-join-key="0">0</button>
              <button type="button" class="btn-fhub-keypad-key btn-keypad-action" data-join-key="back">⌫</button>
            </div>

            ${t?`<div class="join-code-error">⚠️ ${t}</div>`:""}

            <button class="btn-glossy-green btn-submit-join ${i?"btn-joining-loading":""}" id="btn-submit-join-code" ${i?"disabled":""}>
              ${i?"⏳ Connecting to Table...":"🚀 Join Table & Play"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function Dr(s,e={}){const{errorMsg:t=null}=e;return`
    <div class="modal-backdrop room-modal-backdrop" id="add-friend-modal-backdrop">
      <div class="modal-dialog room-code-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">👤+</span>
            <div>
              <h2 class="modal-title">Add Friend</h2>
              <span class="modal-subtitle">Enter your friend's 10-digit mobile number</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-add-friend">&times;</button>
        </div>

        <div class="modal-body room-code-body">
          <div class="join-code-entry-wrap">
            <label class="join-code-label" for="input-friend-mobile">Mobile Number (10 Digits):</label>
            <input 
              type="tel" 
              id="input-friend-mobile" 
              maxlength="10" 
              placeholder="e.g. 9876543210" 
              class="join-code-input join-mobile-input"
              inputmode="numeric"
              pattern="[0-9]*"
              autofocus
            />

            <span class="add-friend-privacy-hint">
              🔒 Privacy Guaranteed: Your friend will be displayed by their Nick Name only during gameplay. Mobile numbers remain private.
            </span>

            ${t?`<div class="join-code-error">⚠️ ${t}</div>`:""}

            <button class="btn-glossy-green btn-submit-join" id="btn-submit-add-friend">
              ➕ Add Friend to List
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function Ur(s,e,t){return`
    <div class="celebration-splash-overlay" id="celebration-splash">
      <div class="celebration-splash-card">
        <div class="splash-trophy">🎉</div>
        <h2 class="splash-title">Friend Connected!</h2>
        <p class="splash-text">
          <strong>${t||"Friend"}</strong> joined Table <strong>#${e}</strong>!
        </p>
        <span class="splash-starting-badge">🚀 Match Starting Directly...</span>
      </div>
    </div>
  `}function jr(s,e={},t=[]){const{gamesPlayed:n=0,gamesWon:i=0,winRate:o=0,totalCoinsWon:r=0,totalKills:a=0}=e;return`
    <div class="modal-backdrop match-history-backdrop" id="match-history-backdrop">
      <div class="modal-dialog match-history-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">📜</span>
            <div>
              <h2 class="modal-title">Match History & Stats</h2>
              <span class="modal-subtitle">Your lifetime performance and past table records</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-match-history">&times;</button>
        </div>

        <div class="modal-body match-history-body">
          <!-- Lifetime Stats Banner -->
          <div class="history-stats-banner">
            <div class="hstat-box">
              <span class="hstat-val">${n}</span>
              <span class="hstat-label">Matches</span>
            </div>
            <div class="hstat-box">
              <span class="hstat-val stat-green">${i}</span>
              <span class="hstat-label">Wins</span>
            </div>
            <div class="hstat-box">
              <span class="hstat-val stat-gold">${o}%</span>
              <span class="hstat-label">Win Rate</span>
            </div>
            <div class="hstat-box">
              <span class="hstat-val stat-gold">🪙 ${(r||0).toLocaleString()}</span>
              <span class="hstat-label">Coins Won</span>
            </div>
          </div>

          <!-- Match History List -->
          <div class="history-records-list">
            <h3 class="history-list-heading">Recent Tables & Matches</h3>

            ${t.length===0?`
              <div class="history-empty-card">
                <span class="empty-icon">🎲</span>
                <p>No matches recorded yet. Play a game to record history!</p>
              </div>
            `:t.map(l=>{const c=l.result==="WON",d=l.result==="FORFEITED",u=l.tableCode||(l.id?String(l.id).replace(/[^0-9]/g,"").slice(-4):"1001"),p=Math.floor((l.durationSec||0)/60),f=(l.durationSec||0)%60;return`
                <div class="history-record-card ${c?"record-win":d?"record-forfeit":"record-loss"}">
                  <div class="record-top-row">
                    <div class="record-table-badge">
                      <span class="table-icon">🎯</span>
                      <strong>Table #${u}</strong>
                      <span class="record-mode-tag">${l.mode||"1v1"}</span>
                    </div>

                    <div class="record-result-badge ${c?"badge-win":d?"badge-forfeit":"badge-loss"}">
                      ${c?`🏆 WON (+🪙${(l.pot||l.coinsChange||500).toLocaleString()})`:d?`🚪 FORFEIT (-🪙${(l.bet||250).toLocaleString()})`:`❌ LOST (-🪙${(l.bet||250).toLocaleString()})`}
                    </div>
                  </div>

                  <div class="record-details-row">
                    <div class="record-opponent">
                      <span class="opponent-label">Opponent:</span>
                      <span class="opponent-name">${l.opponent||"System AI"}</span>
                    </div>

                    <div class="record-meta">
                      <span>⚔️ ${l.kills||0} kills</span>
                      <span>•</span>
                      <span>⏱️ ${p}m ${f<10?"0":""}${f}s</span>
                      <span>•</span>
                      <span>📅 ${l.date||""} ${l.time||""}</span>
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" id="btn-done-match-history">
            ✔ Back to Game
          </button>
        </div>
      </div>
    </div>
  `}class Gr{constructor(e={}){this.duration=e.duration||30,this.timeLeft=this.duration,this.timerId=null,this.isPaused=!1,this.onTick=e.onTick||(()=>{}),this.onWarning=e.onWarning||(()=>{}),this.onUrgent=e.onUrgent||(()=>{}),this.onTimeout=e.onTimeout||(()=>{})}start(){this.stop(),this.timeLeft=this.duration,this.isPaused=!1,this.onTick(this.timeLeft),this.timerId=setInterval(()=>{this.isPaused||(this.timeLeft--,this.onTick(this.timeLeft),this.timeLeft===10?this.onWarning(this.timeLeft):this.timeLeft===5?this.onUrgent(this.timeLeft):this.timeLeft<=0&&(this.stop(),this.onTimeout()))},1e3)}pause(){this.isPaused=!0}resume(){this.isPaused=!1}reset(){this.start()}stop(){this.timerId&&(clearInterval(this.timerId),this.timerId=null),this.isPaused=!1}getTimeLeft(){return this.timeLeft}}const ve={light(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(15)}catch{}},rollTumble(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([20,30,25])}catch{}},step(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(20)}catch{}},capture(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([50,40,80])}catch{}},baara(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([40,30,40,30,100])}catch{}},victory(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([80,50,80,50,120,60,200])}catch{}}};class qr{constructor(){this.logs=[],this.rulesOpen=!1,this.mobileOpen=!1,this.mpModalOpen=!1,this.chatOpen=!1,this.betModalOpen=!1,this.gatePromptOpen=!1,this.loginModalOpen=!Y.isLoggedIn(),this.loginTab="login",this.computerModalOpen=!1,this.computerPlayerCount=2,this.computerBet=250,this.inLobby=Y.isLoggedIn(),this.playerCount=2,this.lobbyMode="solo",this.selectedBet=250,this.profileModalOpen=!1,this.exitModalOpen=!1,this.inactivityModalOpen=!1,this.awayDurationSec=0,this.backgroundTimestamp=null,this.loginError=null,this.soundMuted=!1,this.qrDataUrl=null,this.roomQrDataUrl=null,this.friendsHubOpen=!1,this.friendsTab="create",this.friendsSearchQuery="",this.isEditingFriends=!1,this.createRoomModalOpen=!1,this.joinRoomModalOpen=!1,this.addFriendModalOpen=!1,this.matchHistoryModalOpen=!1,this.celebrationSplash={isOpen:!1,tableCode:"",friendName:""},this.enteredJoinCode="",this.joinRoomError=null,this.addFriendError=null,this.roomCreationMode="2p",this.current4DigitCode=Xe(),this.homePickerOpen=!1,this.homePickerData=null,this.isSearchingOnlineMatch=!1,this.onlineFallbackTimer=null,this.hourlyTicker=setInterval(()=>{if(this.friendsHubOpen||this.inLobby){const n=document.getElementById("btn-lobby-hourly-reward"),i=document.getElementById("btn-nav-reward"),o=Y.getHourlyRewardStatus(),r=o.canClaim?"Free 500🪙":`${Math.floor(o.secondsLeft/60)}m ${o.secondsLeft%60}s`;if(n){const a=n.querySelector(".ticket-sub"),l=n.querySelector(".ticket-title");a&&l?(l.textContent=o.canClaim?M("freeCoinsClaim"):M("freeCoinsBtn"),a.textContent=o.canClaim?"Free 500 Coins Ready!":`Wait: ${r}`,o.canClaim?(n.classList.remove("claim-ticket-cooldown"),n.classList.add("claim-ticket-ready")):(n.classList.remove("claim-ticket-ready"),n.classList.add("claim-ticket-cooldown"))):(n.className=`btn-hourly-reward-lobby ${o.canClaim?"reward-claim-glow":"reward-wait"}`,n.innerHTML=`<span>🎁</span><span>${r}</span>`)}i&&(i.innerHTML=`<span class="nav-icon">🎁</span><span class="nav-label">${r}</span>${o.canClaim?'<span class="nav-badge-dot">!</span>':""}`)}},1e3),this.currentBet=250,this.matchPot=500,this.winnerAwarded=!1,this.chatMessages=[],this.activeChatToast=null,this.chatToastTimer=null,this.unreadChatCount=0,this.turnTimer=new Gr({duration:30,onTick:n=>this.renderTimerOnly(n),onWarning:()=>{this.soundMuted||ie.playCoinStep()},onUrgent:()=>{this.soundMuted||ie.playBonusRoll()},onTimeout:()=>this.handleTurnTimeout()});const e="https://maheshwar567.github.io/bharakhatta/",t=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";this.baseMobileUrl=t?e:window.location.href.split("?")[0].replace(/\/?$/,"/"),this.localWifiUrl="http://192.168.31.186:5173/",this.selectedHome=1,this.mpState={isConnected:!1,roomCode:null,myPlayerId:null,myTeam:null,isHost:!1,players:[],errorMsg:null},this.mpClient=new Pr({onRoomCreated:n=>this.handleRoomCreated(n),onRoomJoined:n=>this.handleRoomJoined(n),onPlayerJoined:(n,i)=>this.handlePlayerJoined(n,i),onPlayerLeft:(n,i)=>this.handlePlayerLeft(n,i),onForfeit:n=>this.handleRemoteForfeit(n),onSyncRoll:n=>this.handleRemoteRoll(n),onSyncMove:n=>this.handleRemoteMove(n),onSyncRestart:()=>this.handleRemoteRestart(),onChatReceived:n=>this.handleChatReceived(n),onBetSynced:n=>this.handleBetSynced(n),onSyncTimeoutPass:n=>this.handleRemoteTimeoutPass(n),onStart4pAIPair:n=>this.handleStart4pAIPair(n),onSyncGameState:n=>this.handleRemoteGameState(n),onGate23Decision:n=>this.handleRemoteGate23Decision(n),onHomeSelected:n=>this.handleHomeSelected(n),onError:n=>{this.mpState.errorMsg=n,this.render()},onStatusChange:n=>{this.mpState.isConnected=n==="connected",this.render()}}),this.autoMoveTimer=null,this.selectedCoinId=null,this.initDOM(),this.engine=new bo({gameMode:"2p",diceMode:"cowries",onStateChange:()=>{this.engine&&(this.render(),this.checkAutoMove())},onLog:n=>this.addLog(n),onTurnChange:n=>this.handleTurnChange(n),onBothGatesOpen:()=>this.handleBothGatesOpen(),onNeedHomeSelection:n=>this.handleNeedHomeSelection(n)}),this.bindGlobalKeys(),this.initMobileAudioUnlock(),this.initBackgroundDetection(),this.checkUrlRoomParam(),!this.loginModalOpen&&!this.inLobby&&this.turnTimer.start(),this.render()}startGame(e="solo",t=250){if(!z.canAfford(t))return alert(`You don't have enough coins (Need 🪙${t.toLocaleString()}! Current: 🪙${z.getBalance().toLocaleString()})`),!1;z.placeBet(t),this.currentBet=t,this.matchPot=t*2,this.inLobby=!1;const n=Y.getCurrentUser(),i=n?n.nickName||n.name:"Player 1";return this.playerCount===4?e==="4p_solo"?(this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${i} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Teammate AI",avatar:"🦁",color:"#d35400",isAI:!0},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}],this.selectedHome),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 4-Player Solo match started! You & Teammate AI (Team 1) vs System AI Pair (Team 2). Pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),!0):(this.mpModalOpen=!0,this.turnTimer.stop(),this.mpState.roomCode||this.mpClient.createRoom("4p",i,null,null,this.currentBet,this.selectedHome),this.render(),!0):e==="friend"?(this.mpModalOpen=!0,this.turnTimer.stop(),this.mpState.roomCode||this.mpClient.createRoom("2p",i,null,null,this.currentBet,this.selectedHome),this.render(),!0):(this.mpState.roomCode=null,this.mpState.myPlayerId=null,this.mpState.myTeam=null,this.mpState.isHost=!1,this.mpState.players=[],this.mpClient&&(this.mpClient.roomCode=null,this.mpClient.myPlayerId=null,this.mpClient.myTeam=null),this.engine.gameMode="2p",this.engine.initGame([{id:1,team:1,name:`${i} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI (Top)",avatar:"🦚",color:"#27ae60",isAI:!0}],null),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 2-Player Game started vs System AI! Stake: 🪙${t.toLocaleString()} | Winner Pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),!0)}handleNeedHomeSelection(e){this.homePickerOpen=!0,this.homePickerData=e,this.render()}handleHomeSelected(e){this.engine&&(this.engine.assignHomes(e.teamId,e.chosenHome),this.homePickerOpen=!1,this.homePickerData=null,this.render())}async startOnlineQuickMatch(){if(!z.canAfford(250)){alert(`You need 🪙${250 .toLocaleString()} coins for Online Matchmaking! Current balance: 🪙${z.getBalance().toLocaleString()}`);return}const t=Y.getCurrentUser(),n=t?t.nickName||t.name:"Player",i={mobile:(t==null?void 0:t.mobile)||"",nickName:(t==null?void 0:t.nickName)||n,fullName:(t==null?void 0:t.name)||n};this.isSearchingOnlineMatch=!0,this.addLog("🌐 Searching for an online player... (4s quick match)"),this.render(),this.onlineFallbackTimer&&(clearTimeout(this.onlineFallbackTimer),this.onlineFallbackTimer=null),this.onlineFallbackTimer=setTimeout(()=>{if(this.isSearchingOnlineMatch){this.isSearchingOnlineMatch=!1,this.mpClient.cancelFindMatch(),this.onlineFallbackTimer=null,z.placeBet(250),this.currentBet=250,this.matchPot=500,this.inLobby=!1,this.mpState.roomCode=null,this.mpState.myPlayerId=null,this.mpState.myTeam=null,this.mpState.isHost=!1,this.mpState.players=[],this.mpClient&&(this.mpClient.roomCode=null,this.mpClient.myPlayerId=null,this.mpClient.myTeam=null);const o=[{name:"Arjun (Online)",avatar:"⚡"},{name:"Priya (Online)",avatar:"🌸"},{name:"Vikram (Online)",avatar:"🛡️"},{name:"Sneha (Online)",avatar:"💎"}],r=o[Math.floor(Math.random()*o.length)];this.engine.gameMode="2p",this.engine.initGame([{id:1,team:1,name:`${n} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:`${r.name}`,avatar:r.avatar,color:"#27ae60",isAI:!0}],null),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 Matched with ${r.name}! 1v1 Online Match started. Stake: 🪙${250 .toLocaleString()} | Pot: 🪙${this.matchPot.toLocaleString()}`),this.render()}},4e3);try{await this.mpClient.findOnlineMatch(n,i)}catch(o){console.warn("Online match find failed:",o)}}async checkUrlRoomParam(){const t=new URLSearchParams(window.location.search).get("room");if(t){this.mpModalOpen=!0;try{await this.mpClient.joinRoom(t,"Player 2")}catch(n){console.error("Auto-join room failed:",n)}}}initMobileAudioUnlock(){const e=()=>{ie.init(),ve.light(),document.removeEventListener("touchstart",e),document.removeEventListener("pointerdown",e)};document.addEventListener("touchstart",e,{passive:!0}),document.addEventListener("pointerdown",e,{passive:!0})}initDOM(){const e=document.getElementById("app");e.innerHTML=`
      <div id="header-container"></div>
      
      <main class="game-main-content">
        <div id="board-container" class="board-wrapper"></div>
        <div id="cowrie-container" style="width: 100%; display: flex; justify-content: center;"></div>
        <div id="ticker-container" style="width: 100%; display: flex; justify-content: center;"></div>
      </main>

      <div id="modal-container"></div>
    `}addLog(e){this.logs.push(e),this.logs.length>40&&this.logs.shift();const t=document.getElementById("ticker-container");t&&(t.innerHTML=Mi(this.logs))}bindGlobalKeys(){window.addEventListener("keydown",e=>{e.code==="Space"&&!this.rulesOpen&&!this.mobileOpen&&!this.mpModalOpen&&!this.chatOpen&&!this.betModalOpen&&(e.preventDefault(),this.attemptRoll()),e.key==="Escape"&&(this.rulesOpen=!1,this.mobileOpen=!1,this.mpModalOpen=!1,this.chatOpen=!1,this.betModalOpen=!1,this.render())})}handleTurnChange(e){this.selectedCoinId=null,this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null),this.turnTimer.reset(),(this.mpState.roomCode?e.id===this.mpState.myPlayerId:!e.isAI)&&!this.soundMuted&&(ie.playBaaraTwelve(),ve.light()),this.render()}handleTurnTimeout(){const e=this.engine.getStateSnapshot();if(e.status===Q.GAME_OVER)return;(this.mpState.roomCode?e.currentPlayer.id===this.mpState.myPlayerId:!e.currentPlayer.isAI)?(this.engine.log("⏰ Time's up (30s)! No roll chance. Turn forfeited to next player."),this.mpState.roomCode&&this.mpClient.sendTimeoutPass(this.mpState.myPlayerId),this.turnTimer.reset(),this.engine.advanceTurn()):this.mpState.roomCode?(this.engine.log("⏰ Opponent timed out (30s)! No roll chance. Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn()):e.currentPlayer.isAI&&(this.engine.log("⏰ System AI timed out (30s)! Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn())}initBackgroundDetection(){document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")this.backgroundTimestamp=Date.now();else if(document.visibilityState==="visible"&&this.backgroundTimestamp){const e=Math.floor((Date.now()-this.backgroundTimestamp)/1e3);this.backgroundTimestamp=null,e>=120&&this.engine&&this.engine.status!==Q.GAME_OVER&&!this.loginModalOpen&&this.handleInactivityForfeit(e)}})}handleInactivityForfeit(e){if(this.awayDurationSec=e,this.turnTimer.stop(),this.mpState.roomCode){this.engine.log(`⏰ Match forfeited: You were away in other apps for >2 minutes (${Math.floor(e/60)}m ${e%60}s).`);const t=this.mpState.myTeam||1;this.mpClient.sendForfeit(t,this.mpState.myPlayerId),this.engine.forfeit(t),Y.recordMatch({matchId:`m_${Date.now()}`,opponent:t===1?this.mpClient.guestName:this.mpClient.hostName,mode:`Online Room #${this.mpState.roomCode}`,bet:this.currentBet,pot:this.matchPot,result:"FORFEITED",coinsChange:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:t===1?this.engine.team1Kills:this.engine.team2Kills})}else this.engine.log(`⏸️ You were away in other apps for >2 minutes (${Math.floor(e/60)}m ${e%60}s).`);this.inactivityModalOpen=!0,this.render()}renderTimerOnly(e){const t=document.querySelector(".timer-seconds"),n=document.querySelector(".turn-timer-pill"),i=document.querySelector(".turn-timer-sub");t&&(t.textContent=`${e}s`),i&&(i.textContent=`⏳ ${e}s`),n&&(n.classList.remove("timer-normal","timer-warning","timer-urgent"),e<=5?n.classList.add("timer-urgent"):e<=10?n.classList.add("timer-warning"):n.classList.add("timer-normal"))}handleChatReceived(e){this.chatMessages.push(e),this.chatOpen||(this.unreadChatCount++,this.showChatToast(e)),this.soundMuted||ie.playCoinStep(),this.render()}showChatToast(e){this.activeChatToast=e,this.chatToastTimer&&clearTimeout(this.chatToastTimer),this.chatToastTimer=setTimeout(()=>{this.activeChatToast=null,this.render()},3500)}handleBetSynced(e){this.currentBet=e,this.matchPot=e*2,this.engine.log(`🪙 Match bet set to 🪙${e}! Pot: 🪙${this.matchPot.toLocaleString()}`),this.render()}attemptRoll(){const e=this.engine.getStateSnapshot();if(e.status!==Q.WAITING_FOR_ROLL||this.mpState.roomCode&&e.currentPlayer.id!==this.mpState.myPlayerId||!this.mpState.roomCode&&e.currentPlayer.isAI)return;this.selectedCoinId=null,this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null),ve.rollTumble(),this.turnTimer.reset();const t=this.engine.roll();this.mpState.roomCode&&t&&(this.mpClient.sendRoll(t),setTimeout(()=>{this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot())},2100))}attemptMove(e){this.selectedCoinId=null,this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null);const t=this.engine.getStateSnapshot();t.status===Q.WAITING_FOR_MOVE&&(this.mpState.roomCode&&t.currentPlayer.id!==this.mpState.myPlayerId||(ve.step(),this.turnTimer.reset(),this.engine.executeMove(e),this.mpState.roomCode&&(this.mpClient.sendMove(e),setTimeout(()=>{this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot())},700))))}checkAutoMove(){var i;const e=this.engine.getStateSnapshot();if(e.status!==Q.WAITING_FOR_MOVE){this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null);return}if(!(this.mpState.roomCode?e.currentPlayer.id===this.mpState.myPlayerId:!e.currentPlayer.isAI)){this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null);return}if(this.autoMoveTimer)return;const n=this.engine.getSingleMovableMove();n&&(this.engine.log(`⚡ Single movable coin (#${((i=n.coin)==null?void 0:i.num)||1}) - auto-moving in 1s...`),this.autoMoveTimer=setTimeout(()=>{this.autoMoveTimer=null,this.engine&&this.engine.status===Q.WAITING_FOR_MOVE&&this.attemptMove(n)},1e3))}async handleRoomCreated(e){this.onlineFallbackTimer&&(clearTimeout(this.onlineFallbackTimer),this.onlineFallbackTimer=null),this.isSearchingOnlineMatch=!1,this.mpState.roomCode=e.roomCode,this.mpState.myPlayerId=e.playerId,this.mpState.myTeam=e.team,this.mpState.isHost=!0,this.mpState.players=e.players,this.mpState.errorMsg=null,this.winnerAwarded=!1,z.placeBet(this.currentBet),this.matchPot=this.currentBet*2,this.engine.isMultiplayer=!0,this.engine.isHost=!0;const t=Y.getCurrentUser(),i=[{id:1,team:1,name:`${t?t.nickName||t.name:"Player 1"} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:e.isMatchmaking?"Online Player":"Player 2 (Friend)",avatar:"🦚",color:"#27ae60",isAI:!1}],o=e.team1Home||null;if(this.engine.initGame(i,o),this.turnTimer.start(),e.isMatchmaking)this.inLobby=!1,this.friendsHubOpen=!1,this.createRoomModalOpen=!1,this.joinRoomModalOpen=!1,this.mpModalOpen=!1,this.engine.log(`⚡ Online match started on Board #${e.roomCode}!`);else{const r=`${this.baseMobileUrl}?room=${e.roomCode}`;this.roomQrDataUrl=await Xt(r),this.engine.log(`🏠 Created Room #${e.roomCode} (Bet 🪙${this.currentBet}). Share code with friend!`)}this.render()}async handleRoomJoined(e){this.onlineFallbackTimer&&(clearTimeout(this.onlineFallbackTimer),this.onlineFallbackTimer=null),this.isSearchingOnlineMatch=!1,this.mpState.roomCode=e.roomCode,this.mpState.myPlayerId=e.playerId,this.mpState.myTeam=e.team,this.mpState.isHost=!1,this.mpState.players=e.players,this.mpState.errorMsg=null,this.winnerAwarded=!1,e.bet&&(this.currentBet=e.bet,this.matchPot=e.bet*2),z.placeBet(this.currentBet),this.engine.isMultiplayer=!0,this.engine.isHost=!1;const t=Y.getCurrentUser(),n=t?t.nickName||t.name:"Player 2",i=[{id:1,team:1,name:e.isMatchmaking?"Online Player":"Player 1 (Friend)",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:`${n} (You)`,avatar:"🦚",color:"#27ae60",isAI:!1}],o=e.team1Home||null;this.engine.initGame(i,o),this.turnTimer.start(),e.hostMobile&&Y.addOrUpdateFriend({mobile:e.hostMobile,nickName:e.hostNick||"Host",fullName:e.hostFullName||e.hostNick||"Host"}),this.inLobby=!1,this.joinRoomModalOpen=!1,this.createRoomModalOpen=!1,this.friendsHubOpen=!1,this.mpModalOpen=!1,this.celebrationSplash={isOpen:!0,tableCode:e.roomCode,friendName:e.hostNick||"Host"};const r=`${this.baseMobileUrl}?room=${e.roomCode}`;this.roomQrDataUrl=await Xt(r),this.engine.log(`🤝 Joined Room #${e.roomCode}! You are Team ${e.team}. Match pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),setTimeout(()=>{this.celebrationSplash.isOpen=!1,this.render()},1500)}async submitJoinTableCode(e){if(this.isJoiningTable)return;const t=(e||this.enteredJoinCode||"").toString().trim().replace(/[^0-9]/g,"").slice(0,4);if(!t||t.length!==4){this.joinRoomError="Please enter a valid 4-digit code (e.g. 4821).",this.render();return}this.isJoiningTable=!0,this.joinRoomError=null,this.render();const n=Y.getCurrentUser(),i=n?n.nickName||n.name:"Player 2",o={mobile:(n==null?void 0:n.mobile)||"",nickName:(n==null?void 0:n.nickName)||i,fullName:(n==null?void 0:n.name)||i};try{(this.mpClient.isHost||this.mpState.isHost)&&(this.mpClient.leaveRoom(),this.mpState.roomCode=null,this.mpState.isHost=!1),await this.mpClient.joinRoom(t,i,o)}catch(r){this.joinRoomError=r.message||"Failed to connect to table."}finally{this.isJoiningTable=!1,this.render()}}handlePlayerJoined(e,t){this.mpState.players=t,this.engine.log(`🎉 ${e.name} connected to Table #${this.mpState.roomCode}! Starting match directly...`),ie.playBonusRoll(),this.turnTimer.reset(),e.mobile&&Y.addOrUpdateFriend({mobile:e.mobile,nickName:e.nickName||e.name||"Friend",fullName:e.fullName||e.name||"Friend"}),this.inLobby=!1,this.createRoomModalOpen=!1,this.joinRoomModalOpen=!1,this.friendsHubOpen=!1,this.mpModalOpen=!1,this.celebrationSplash={isOpen:!0,tableCode:this.mpState.roomCode,friendName:e.nickName||e.name||"Friend"},this.mpState.isHost&&this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot()),this.render(),setTimeout(()=>{this.celebrationSplash.isOpen=!1,this.render()},1500)}handlePlayerLeft(e,t){if(this.mpState.players=t,this.engine.log("⚠️ Opponent disconnected / left the table."),this.engine&&!this.engine.winner&&this.engine.status!==Q.GAME_OVER&&!this.inLobby){const i=(this.mpState.myTeam||1)===1?2:1;this.engine.forfeit(i)}this.render()}handleRemoteForfeit(e){this.engine.log("🚪 Opponent quit the game. You won by default!");const t=e&&e.quittingTeam?e.quittingTeam:this.mpState.myTeam===1?2:1;this.engine&&!this.engine.winner&&this.engine.forfeit(t),this.render()}handleRemoteRoll(e){this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null),ve.rollTumble(),this.engine.status=Q.ROLLING,ie.playCowrieRoll(),this.engine.currentRoll=e,this.turnTimer.reset(),this.render(),setTimeout(()=>{this.engine.resolveRoll(e),this.render()},2e3)}handleRemoteMove(e){ve.step(),this.engine.executeMove(e,!0),this.turnTimer.reset(),this.render()}handleRemoteGameState(e){!e||!this.engine||(this.engine.applyStateSnapshot(e),this.render())}handleBothGatesOpen(){this.gatePromptOpen=!0,ie.playBaaraTwelve(),this.render()}handleGate23Decision(e){this.gatePromptOpen=!1,this.mpState.roomCode&&this.mpClient.sendGate23Decision(e),e==="continue"?(this.engine.log("⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad."),this.render()):e==="restart"&&(this.engine.log("🔄 Restarting match by mutual agreement."),this.mpState.roomCode&&this.mpClient.sendRestart(),this.engine.initGame(),this.turnTimer.start(),this.render())}handleRemoteGate23Decision(e){this.gatePromptOpen=!1,e==="continue"?(this.engine.log("⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad."),this.render()):e==="restart"&&(this.engine.log("🔄 Opponent agreed to restart match from scratch."),this.engine.initGame(),this.turnTimer.start(),this.render())}handleRemoteRestart(){this.engine.initGame(),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log("🔄 Host restarted the game!"),this.render()}handleRemoteTimeoutPass(e){this.engine.log("⏰ Opponent timed out (30s)! No roll chance. Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn()}handleStart4pAIPair(e){this.mpModalOpen=!1,e&&e.bet&&(this.currentBet=e.bet,this.matchPot=e.bet*2);const t=this.mpClient.hostName||"Host",n=this.mpClient.guestName||"Friend";this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${t} ${this.mpState.isHost?"(You)":""}`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:`${n} ${this.mpState.isHost?"":"(You)"}`,avatar:"🦁",color:"#d35400",isAI:!1},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🤝 4-Player Match Active! Team 1 (${t} & ${n}) vs Team 2 (System AI Opposite Pair). Pot: 🪙${this.matchPot.toLocaleString()}`),ie.playBonusRoll(),this.render()}render(){if(!this.engine)return;const e=this.engine.getStateSnapshot(),t=document.getElementById("header-container"),n=document.getElementById("board-container"),i=document.getElementById("cowrie-container"),o=document.getElementById("ticker-container"),r=document.getElementById("modal-container"),a={user:Y.getCurrentUser(),walletCoins:z.getBalance(),matchPot:this.matchPot,timeLeft:this.turnTimer.getTimeLeft(),unreadChatCount:this.unreadChatCount};t&&(t.innerHTML=To(e,this.soundMuted,this.mpState,a)),n&&(n.innerHTML=yo(e,this.mpState,this.selectedCoinId)),i&&(i.innerHTML=Co(e,this.mpState,this.turnTimer.getTimeLeft())),o&&(o.innerHTML=Mi(this.logs));let l="";if(this.loginModalOpen?l+=Er(!0,"","","",this.loginError,this.loginTab):this.inLobby&&(l+=Br({user:Y.getCurrentUser(),walletCoins:z.getBalance(),selectedBet:this.selectedBet,playerCount:this.playerCount,selectedMode:this.lobbyMode,hourlyRewardStatus:Y.getHourlyRewardStatus(),isSearchingOnlineMatch:this.isSearchingOnlineMatch})),this.homePickerOpen&&this.homePickerData&&(l+=Lr(!0,this.homePickerData)),this.computerModalOpen&&(l+=Ar(!0,{playerCount:this.computerPlayerCount,selectedBet:this.computerBet,selectedHome:this.selectedHome,walletCoins:z.getBalance()})),this.friendsHubOpen){const c=Y.getFriends(this.friendsSearchQuery),d=Y.getHourlyRewardStatus(),u=this.mpState.roomCode||this.current4DigitCode,p=`${this.baseMobileUrl}?room=${u}`;l+=Nr({isOpen:!0,friends:c,searchQuery:this.friendsSearchQuery,isEditing:this.isEditingFriends,activeTab:this.friendsTab||"create",walletCoins:z.getBalance(),diamonds:385,roomCode:u,roomMode:this.roomCreationMode||"2p",selectedBet:this.currentBet||250,shareUrl:p,joinCode:this.enteredJoinCode||"",joinError:this.joinRoomError||null,isJoining:this.isJoiningTable||!1,hourlyRewardStatus:d})}if(this.createRoomModalOpen){const c=this.mpState.roomCode||this.current4DigitCode,d=`${this.baseMobileUrl}?room=${c}`;l+=Hr(!0,{roomCode:c,mode:this.roomCreationMode,selectedBet:this.currentBet,selectedHome:this.selectedHome,walletCoins:z.getBalance(),shareUrl:d,qrDataUrl:this.roomQrDataUrl,isWaiting:!0})}if(this.joinRoomModalOpen&&(l+=Fr(!0,{errorMsg:this.joinRoomError,enteredCode:this.enteredJoinCode,isJoining:this.isJoiningTable||!1})),this.addFriendModalOpen&&(l+=Dr(!0,{errorMsg:this.addFriendError})),this.matchHistoryModalOpen){const c=Y.getStats(),d=Y.getHistory();l+=jr(!0,c,d)}if(this.celebrationSplash.isOpen&&(l+=Ur(!0,this.celebrationSplash.tableCode,this.celebrationSplash.friendName)),this.profileModalOpen){const c=Y.getCurrentUser(),d=Y.getStats(),u=Y.getHistory();l+=xr(!0,c,d,u)}if(this.exitModalOpen&&(l+=$r()),this.inactivityModalOpen&&(l+=Or(!0,this.awayDurationSec,!!this.mpState.roomCode)),this.rulesOpen&&(l+=ko()),this.mobileOpen&&(l+=zo(!0,this.qrDataUrl,this.baseMobileUrl)),this.mpModalOpen){const c=this.mpState.roomCode?`${this.baseMobileUrl}?room=${this.mpState.roomCode}`:"";l+=Ko(!0,this.mpState,this.roomQrDataUrl,c)}if(this.gatePromptOpen&&(l+=wr()),this.chatOpen&&(l+=Qo(!0,this.chatMessages,this.mpState.myPlayerId||1)),this.betModalOpen&&(l+=nr(!0,z.getBalance(),this.currentBet,this.mpState.roomCode?"multiplayer":"solo")),this.activeChatToast&&(l+=Zo(this.activeChatToast)),e.winner){if(!this.winnerAwarded){this.winnerAwarded=!0,this.turnTimer.stop();const c=this.mpState.roomCode?this.mpState.myTeam:1,d=e.winner.team===c;d&&(z.awardPot(this.matchPot),this.engine.log(`🏆 MATCH WON! You received the full pot: 🪙${this.matchPot.toLocaleString()} coins!`)),Y.recordMatch({matchId:`m_${Date.now()}`,opponent:this.mpState.roomCode?c===1?this.mpClient.guestName:this.mpClient.hostName:"System AI",mode:this.mpState.roomCode?`Online Room #${this.mpState.roomCode}`:"Solo vs AI",bet:this.currentBet,pot:this.matchPot,result:d?"WON":"LOST",coinsChange:d?this.matchPot-this.currentBet:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:c===1?e.team1Kills:e.team2Kills})}ve.victory(),l+=_o(e.winner)}r&&(r.innerHTML=l),this.attachEventListeners(e)}attachEventListeners(e){const t=document.getElementById("btn-roll-dice"),n=document.getElementById("palm-cupped-box");t&&(t.onclick=()=>this.attemptRoll()),n&&(n.onclick=()=>this.attemptRoll());const i=document.getElementById("btn-release-jail-t1");i&&(i.onclick=()=>{const m=e.validMoves.find(v=>v.type==="RELEASE_JAIL");m&&this.attemptMove(m)});const o=document.getElementById("btn-release-jail-t2");o&&(o.onclick=()=>{const m=e.validMoves.find(v=>v.type==="RELEASE_JAIL");m&&this.attemptMove(m)}),document.querySelectorAll(".coin-piece").forEach(m=>{m.onclick=v=>{v.stopPropagation();const D=m.getAttribute("data-coin-id");if(!D)return;if(this.selectedCoinId&&this.selectedCoinId!==D){const ne=m.closest(".board-cell");if(ne){const le=parseInt(ne.getAttribute("data-r"),10),Mt=parseInt(ne.getAttribute("data-c"),10),Si=e.validMoves.find(Ve=>Ve.coin&&Ve.coin.id===this.selectedCoinId&&Ve.targetCoord&&Ve.targetCoord.r===le&&Ve.targetCoord.c===Mt);if(Si){this.selectedCoinId=null,this.attemptMove(Si);return}}}const te=e.validMoves.filter(ne=>ne.coin&&ne.coin.id===D);if(te.length>0){const ne=new Set(e.validMoves.filter(le=>le.coin).map(le=>le.coin.id));this.selectedCoinId===D||ne.size===1?(this.selectedCoinId=null,this.attemptMove(te[0])):(this.selectedCoinId=D,this.render());return}if(e.validMoves.some(ne=>ne.type==="RELEASE_JAIL")){const ne=e.validMoves.find(le=>le.type==="RELEASE_JAIL");ne&&(this.selectedCoinId=null,this.attemptMove(ne))}}}),document.querySelectorAll(".cell-valid-target").forEach(m=>{m.onclick=()=>{const v=parseInt(m.getAttribute("data-r"),10),D=parseInt(m.getAttribute("data-c"),10);if(this.selectedCoinId){const ne=e.validMoves.find(le=>le.coin&&le.coin.id===this.selectedCoinId&&le.targetCoord&&le.targetCoord.r===v&&le.targetCoord.c===D);if(ne){this.selectedCoinId=null,this.attemptMove(ne);return}}const te=e.validMoves.find(ne=>ne.targetCoord&&ne.targetCoord.r===v&&ne.targetCoord.c===D);te&&(this.selectedCoinId=null,this.attemptMove(te))}});const l=document.getElementById("btn-open-multiplayer"),c=document.getElementById("btn-open-mp-badge");l&&(l.onclick=()=>{this.mpModalOpen=!0,this.render()}),c&&(c.onclick=()=>{this.mpModalOpen=!0,this.render()});const d=document.getElementById("btn-open-chat"),u=document.getElementById("btn-close-chat");d&&(d.onclick=()=>{this.chatOpen=!0,this.unreadChatCount=0,this.render()}),u&&(u.onclick=()=>{this.chatOpen=!1,this.render()});const p=document.getElementById("btn-send-chat"),f=document.getElementById("input-chat-text"),b=(m=null)=>{let v=m;if(!v&&f&&(v=f.value.trim(),f.value=""),!v)return;const D=Y.getCurrentUser(),te=D?D.nickName||D.name:this.mpState.myPlayerId===2?"Player 2":"Player 1";if(this.mpState.roomCode)this.mpClient.sendChat(v,te);else{const ne={senderId:1,senderName:te,text:v,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.handleChatReceived(ne),this.engine.players&&this.engine.players[1]&&this.engine.players[1].isAI&&setTimeout(()=>{const le=["బాగుంది! కానీ సెంటర్ హోమ్ నాదే! (Nice! But the Center is mine!) 🦚","కట్టా పడకుండా జాగ్రత్త మిత్రమా! (Watch out for Katta strike!) 💥","హాహా! బాఱ 12 పడితే నేనే విజేత! (Haha! If I roll Baara 12, I win!) 🎲","మంచి మూవ్! చూద్దాం ఎవరు గెలుస్తారో! (Good move! Let's see who wins!) 👑","గువ్వలు నా వైపే ఉన్నాయి! (The cowries favor me!) 🐚"],Mt=le[Math.floor(Math.random()*le.length)];this.handleChatReceived({senderId:2,senderName:"System AI 🦚",text:Mt,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})},650)}};p&&(p.onclick=()=>b()),f&&(f.onkeydown=m=>{m.key==="Enter"&&b()}),document.querySelectorAll(".btn-smiley-chip").forEach(m=>{m.onclick=()=>{const v=m.getAttribute("data-emoji");v&&b(v)}}),document.querySelectorAll(".btn-quick-taunt").forEach(m=>{m.onclick=()=>{const v=parseInt(m.getAttribute("data-taunt-index"),10),D=vs[v];D&&b(D.text)}});const C=document.getElementById("btn-open-wallet"),T=document.getElementById("btn-open-bet"),k=document.getElementById("btn-close-bet");C&&(C.onclick=()=>{this.betModalOpen=!0,this.render()}),T&&(T.onclick=()=>{this.betModalOpen=!0,this.render()}),k&&(k.onclick=()=>{this.betModalOpen=!1,this.render()}),document.querySelectorAll(".bet-chip").forEach(m=>{m.onclick=()=>{const v=parseInt(m.getAttribute("data-bet-amount"),10);v&&z.canAfford(v)&&(this.currentBet=v,this.render())}});const L=document.getElementById("btn-confirm-bet");L&&(L.onclick=()=>{z.canAfford(this.currentBet)&&(this.matchPot=this.currentBet*2,this.mpState.roomCode&&this.mpClient.sendBet(this.currentBet),this.betModalOpen=!1,this.engine.log(`🪙 Bet set to 🪙${this.currentBet}! Total pot: 🪙${this.matchPot.toLocaleString()}`),this.render())});const I=document.getElementById("btn-claim-village-bonus");I&&(I.onclick=()=>{z.claimRefill()&&(ie.playBonusRoll(),ve.light(),this.engine.log("🎁 Claimed Village Bonus! +500 Coins added to wallet."),this.render())});const w=document.getElementById("btn-action-create-room");w&&(w.onclick=async()=>{const m=document.getElementById("input-host-name"),v=document.getElementById("select-mp-mode"),D=m?m.value.trim():"Player 1",te=v?v.value:"2p";await this.mpClient.createRoom(te,D)});const ee=document.getElementById("btn-action-join-room");ee&&(ee.onclick=async()=>{const m=document.getElementById("input-join-code"),v=document.getElementById("input-join-name"),D=m?m.value.trim():"",te=v?v.value.trim():"Player 2";if(!D){alert("Please enter the Board Number (e.g. BK-260915-101-482).");return}await this.mpClient.joinRoom(D,te)});const S=document.getElementById("btn-copy-board-number");S&&(S.onclick=()=>{const m=document.getElementById("text-board-number");m&&(navigator.clipboard.writeText(m.textContent.trim()),S.textContent="✅ Copied!",setTimeout(()=>{S&&(S.textContent="📋 Copy")},1800))});const $=document.getElementById("btn-start-4p-ai-pair");$&&($.onclick=()=>{this.mpClient.sendStart4pAIPair(),this.handleStart4pAIPair({bet:this.currentBet})});const R=document.getElementById("btn-copy-room-link");R&&(R.onclick=()=>{const m=document.getElementById("input-mp-room-link");m&&(navigator.clipboard.writeText(m.value),R.textContent="✅ Copied!",setTimeout(()=>{R&&(R.textContent="📋 Copy Link")},1800))});const E=document.getElementById("btn-leave-room");E&&(E.onclick=()=>{this.mpClient.leaveRoom(),this.mpState.roomCode=null,this.mpState.players=[],this.mpModalOpen=!1,this.winnerAwarded=!1,this.engine.initGame(),this.turnTimer.start(),this.render()});const H=document.getElementById("btn-mp-play-now");H&&(H.onclick=()=>{this.mpModalOpen=!1,this.render()});const B=document.getElementById("btn-close-mp"),N=document.getElementById("btn-modal-mp-close");B&&(B.onclick=()=>{this.mpModalOpen=!1,this.render()}),N&&(N.onclick=()=>{this.mpModalOpen=!1,this.render()});const y=document.getElementById("btn-open-mobile");y&&(y.onclick=async()=>{this.qrDataUrl||(this.qrDataUrl=await Xt(this.baseMobileUrl)),this.mobileOpen=!0,this.render()});const _=document.getElementById("btn-close-mobile"),se=document.getElementById("btn-modal-mobile-done");_&&(_.onclick=()=>{this.mobileOpen=!1,this.render()}),se&&(se.onclick=()=>{this.mobileOpen=!1,this.render()});const pe=document.getElementById("btn-open-rules");pe&&(pe.onclick=()=>{this.rulesOpen=!0,this.render()});const ke=document.getElementById("btn-close-rules"),me=document.getElementById("btn-modal-got-it");ke&&(ke.onclick=()=>{this.rulesOpen=!1,this.render()}),me&&(me.onclick=()=>{this.rulesOpen=!1,this.render()});const Ce=document.getElementById("btn-toggle-dice");Ce&&(Ce.onclick=()=>{this.engine.diceMode=this.engine.diceMode==="cowries"?"die":"cowries",ve.light(),this.render()});const g=document.getElementById("btn-toggle-sound");g&&(g.onclick=()=>{this.soundMuted=ie.toggleMute(),ve.light(),this.render()});const h=document.getElementById("btn-restart-game");h&&(h.onclick=()=>{confirm("Start a new match?")&&(this.engine.initGame(),this.winnerAwarded=!1,this.turnTimer.start(),this.mpState.roomCode&&this.mpClient.sendRestart())});const P=document.getElementById("btn-victory-restart");P&&(P.onclick=()=>{this.winnerAwarded=!1,this.turnTimer.stop(),this.inLobby=!0,this.render()});const O=document.getElementById("btn-header-login");O&&(O.onclick=()=>{this.loginModalOpen=!0,this.loginError=null,this.render()});const U=document.getElementById("tab-login-btn"),j=document.getElementById("tab-signup-btn"),G=document.getElementById("link-switch-signup"),A=document.getElementById("link-switch-login");U&&(U.onclick=()=>{this.loginTab="login",this.loginError=null,this.render()}),j&&(j.onclick=()=>{this.loginTab="signup",this.loginError=null,this.render()}),G&&(G.onclick=m=>{m.preventDefault(),this.loginTab="signup",this.loginError=null,this.render()}),A&&(A.onclick=m=>{m.preventDefault(),this.loginTab="login",this.loginError=null,this.render()});const F=document.getElementById("btn-submit-login"),J=document.getElementById("input-login-mobile"),W=document.getElementById("input-login-fullname"),V=document.getElementById("input-login-nickname"),Z=document.getElementById("nickname-preview-badge"),X=()=>{if(!Z)return;const m=W?W.value:"",v=V?V.value:"";Z.textContent=gn(m,v)};W&&(W.oninput=X),V&&(V.oninput=X);const q=()=>{if(!J)return;const m=J.value.trim();if(this.loginTab==="login"){const v=Y.login(m,"","",!1);v.success?(this.loginModalOpen=!1,this.loginError=null,this.inLobby=!0,this.engine.players&&this.engine.players[0]&&(this.engine.players[0].name=v.user.nickName||v.user.name),this.engine.log(`👤 Welcome back, ${v.user.nickName||v.user.name}! Profile restored.`),this.render()):(this.loginError=v.error,v.isNotRegistered&&(this.loginTab="signup"),this.render())}else{const v=W?W.value.trim():"",D=V?V.value.trim():"",te=Y.login(m,v,D,!0);te.success?(this.loginModalOpen=!1,this.loginError=null,this.inLobby=!0,this.engine.players&&this.engine.players[0]&&(this.engine.players[0].name=te.user.nickName||te.user.name),this.engine.log(`👤 Welcome, ${te.user.nickName||te.user.name}! 🪙1,000 joining bonus credited!`),this.render()):(this.loginError=te.error,this.render())}};F&&(F.onclick=q),J&&(J.onkeydown=m=>{m.key==="Enter"&&q()}),W&&(W.onkeydown=m=>{m.key==="Enter"&&q()}),V&&(V.onkeydown=m=>{m.key==="Enter"&&q()});const re=document.getElementById("btn-mode-computer");re&&(re.onclick=()=>{this.mpState.roomCode=null,this.mpState.myPlayerId=null,this.mpState.myTeam=null,this.mpState.isHost=!1,this.mpState.players=[],this.mpClient&&(this.mpClient.roomCode=null,this.mpClient.myPlayerId=null,this.mpClient.myTeam=null),this.computerModalOpen=!0,this.render()});const ae=document.getElementById("btn-mode-online");ae&&(ae.onclick=async()=>{await this.startOnlineQuickMatch()});const K=document.getElementById("btn-mode-friends");K&&(K.onclick=async()=>{if(this.friendsHubOpen=!0,this.friendsTab="create",!this.mpState.roomCode){this.current4DigitCode=Xe();const m=Y.getCurrentUser(),v=m?m.nickName||m.name:"Player 1",D={mobile:(m==null?void 0:m.mobile)||"",nickName:(m==null?void 0:m.nickName)||v,fullName:(m==null?void 0:m.name)||v};await this.mpClient.createRoom(this.roomCreationMode||"2p",v,this.current4DigitCode,D,this.currentBet,null)}this.render()});const fe=document.getElementById("btn-lobby-friends-direct");fe&&(fe.onclick=()=>{this.friendsHubOpen=!0,this.render()}),document.querySelectorAll(".btn-picker-home[data-pick-home]").forEach(m=>{m.onclick=()=>{const v=parseInt(m.getAttribute("data-pick-home"),10),D=this.homePickerData?this.homePickerData.teamId:this.mpState.myTeam||1;this.engine.assignHomes(D,v),this.mpState.roomCode&&this.mpClient&&this.mpClient.sendHomeSelection(D,v),this.homePickerOpen=!1,this.homePickerData=null,this.render()}});const be=document.getElementById("btn-close-computer-modal");be&&(be.onclick=()=>{this.computerModalOpen=!1,this.render()});const ue=document.getElementById("btn-cm-format-2p"),Ie=document.getElementById("btn-cm-format-4p");ue&&(ue.onclick=()=>{this.computerPlayerCount=2,this.render()}),Ie&&(Ie.onclick=()=>{this.computerPlayerCount=4,this.render()}),document.querySelectorAll(".btn-cm-bet").forEach(m=>{m.onclick=()=>{const v=parseInt(m.getAttribute("data-bet"),10);v&&(this.computerBet=v,this.render())}}),document.querySelectorAll(".btn-cm-home, .btn-room-home").forEach(m=>{m.onclick=()=>{const v=parseInt(m.getAttribute("data-cm-home")||m.getAttribute("data-room-home"),10);v&&(this.selectedHome=v,this.mpClient&&(this.mpClient.team1Home=v,this.mpClient.team2Home=Me(v)),this.render())}});const it=document.getElementById("btn-start-computer-game");it&&(it.onclick=()=>{if(!z.canAfford(this.computerBet)){alert(`You need 🪙${this.computerBet.toLocaleString()} coins! Current balance: 🪙${z.getBalance().toLocaleString()}`);return}z.placeBet(this.computerBet),this.currentBet=this.computerBet,this.matchPot=this.computerBet*2,this.inLobby=!1,this.computerModalOpen=!1,this.mpState.roomCode=null,this.mpState.myPlayerId=null,this.mpState.myTeam=null,this.mpState.isHost=!1,this.mpState.players=[],this.mpClient&&(this.mpClient.roomCode=null,this.mpClient.myPlayerId=null,this.mpClient.myTeam=null);const m=Y.getCurrentUser(),v=m?m.nickName||m.name:"Player 1";this.computerPlayerCount===4?(this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${v} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Teammate AI",avatar:"🦁",color:"#d35400",isAI:!0},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}],null),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 4-Player Offline match vs System AI Pair started! Pot: 🪙${this.matchPot.toLocaleString()}`)):(this.engine.gameMode="2p",this.engine.initGame([{id:1,team:1,name:`${v} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI (Top)",avatar:"🦚",color:"#27ae60",isAI:!0}],null),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 2-Player Offline match vs System AI started! Stake: 🪙${this.currentBet.toLocaleString()} | Pot: 🪙${this.matchPot.toLocaleString()}`)),this.render()});const st=document.getElementById("btn-count-2p"),Ge=document.getElementById("btn-count-4p");st&&(st.onclick=()=>{this.playerCount=2,this.lobbyMode="solo",this.render()}),Ge&&(Ge.onclick=()=>{this.playerCount=4,this.lobbyMode="4p_ai_pair",this.render()});const ot=document.getElementById("btn-select-mode-solo"),qe=document.getElementById("btn-select-mode-friend"),rt=document.getElementById("btn-select-mode-4p-pair"),at=document.getElementById("btn-select-mode-4p-solo"),Je=document.getElementById("btn-select-mode-4p-friends");ot&&(ot.onclick=()=>{this.lobbyMode="solo",this.render()}),qe&&(qe.onclick=()=>{this.lobbyMode="friend",this.render()}),rt&&(rt.onclick=()=>{this.lobbyMode="4p_ai_pair",this.render()}),at&&(at.onclick=()=>{this.lobbyMode="4p_solo",this.render()}),Je&&(Je.onclick=()=>{this.lobbyMode="4p_friends",this.render()});const We=document.getElementById("btn-lobby-request-friend");We&&(We.onclick=()=>{this.friendsHubOpen=!0,this.render()});const Le=document.getElementById("btn-header-friends");Le&&(Le.onclick=()=>{this.friendsHubOpen=!0,this.render()});const lt=document.getElementById("btn-close-friends-hub");lt&&(lt.onclick=()=>{this.friendsHubOpen=!1,this.render()}),document.querySelectorAll("[data-fhub-tab]").forEach(m=>{m.onclick=()=>{const v=m.getAttribute("data-fhub-tab");this.friendsTab!==v&&(this.friendsTab=v,v==="join"&&this.mpState.isHost&&this.mpState.players.length<=1&&(this.mpClient&&this.mpClient.leaveRoom(),this.mpState.roomCode=null,this.mpState.isHost=!1),this.render())}});const ct=document.getElementById("input-fhub-search");ct&&(ct.oninput=m=>{this.friendsSearchQuery=m.target.value,this.render()});const An=document.getElementById("btn-clear-fhub-search");An&&(An.onclick=()=>{this.friendsSearchQuery="",this.render()});const dt=document.getElementById("btn-copy-4digit-code");dt&&(dt.onclick=()=>{var v;const m=dt.getAttribute("data-code")||this.current4DigitCode;(v=navigator.clipboard)!=null&&v.writeText&&navigator.clipboard.writeText(m),dt.textContent=`✅ Copied (${m})!`,setTimeout(()=>this.render(),1500)}),document.querySelectorAll("[data-create-bet]").forEach(m=>{m.onclick=()=>{const v=parseInt(m.getAttribute("data-create-bet"),10);v&&(this.currentBet=v,this.render())}}),document.querySelectorAll("input[name='create-room-mode']").forEach(m=>{m.onchange=()=>{this.roomCreationMode=m.value,this.render()}});const Ee=document.getElementById("input-4digit-code"),xn=document.getElementById("btn-submit-join-code");Ee&&(Ee.oninput=m=>{this.enteredJoinCode=m.target.value.replace(/[^0-9]/g,"").slice(0,4),this.render()},Ee.onkeydown=m=>{m.key==="Enter"&&this.submitJoinTableCode(this.enteredJoinCode||Ee.value)}),document.querySelectorAll(".btn-fhub-keypad-key[data-join-key]").forEach(m=>{m.onclick=()=>{const v=m.getAttribute("data-join-key");this.enteredJoinCode||(this.enteredJoinCode=""),v==="clear"?(this.enteredJoinCode="",this.joinRoomError=null):v==="back"?(this.enteredJoinCode=this.enteredJoinCode.slice(0,-1),this.joinRoomError=null):/^[0-9]$/.test(v)&&this.enteredJoinCode.length<4&&(this.enteredJoinCode+=v,this.joinRoomError=null),this.render()}});const $n=document.getElementById("btn-paste-join-code");$n&&($n.onclick=async()=>{var m;try{if((m=navigator.clipboard)!=null&&m.readText){const v=await navigator.clipboard.readText();if(v){const D=v.match(/\b\d{4}\b/);if(D)this.enteredJoinCode=D[0],this.joinRoomError=null,this.render();else{const te=v.replace(/[^0-9]/g,"").slice(0,4);te.length>0&&(this.enteredJoinCode=te,this.joinRoomError=null,this.render())}}}}catch(v){console.warn("Could not read clipboard:",v)}}),xn&&(xn.onclick=()=>{this.submitJoinTableCode(this.enteredJoinCode||(Ee==null?void 0:Ee.value))});const On=document.getElementById("btn-fhub-invite-whatsapp");On&&(On.onclick=()=>{const m=this.mpState.roomCode||this.current4DigitCode||Xe(),v=`${this.baseMobileUrl}?room=${m}`,D=encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta table room! Table Code: *${m}*
Tap here to play: ${v}`);window.open(`https://api.whatsapp.com/send?text=${D}`,"_blank")});const wn=document.getElementById("btn-fhub-add-friend"),Bn=document.getElementById("btn-fhub-empty-add");wn&&(wn.onclick=()=>{this.addFriendModalOpen=!0,this.addFriendError=null,this.render()}),Bn&&(Bn.onclick=()=>{this.addFriendModalOpen=!0,this.addFriendError=null,this.render()});const Nn=document.getElementById("btn-fhub-toggle-edit");Nn&&(Nn.onclick=()=>{this.isEditingFriends=!this.isEditingFriends,this.render()}),document.querySelectorAll(".btn-fcard-gift").forEach(m=>{m.onclick=()=>{ie.playBonusRoll(),ve.light(),alert("🎁 You sent 100 Free Coins Gift to your friend!")}}),document.querySelectorAll(".btn-fcard-challenge").forEach(m=>{m.onclick=async()=>{const v=m.getAttribute("data-friend-name")||"Friend";this.current4DigitCode=Xe();const D=Y.getCurrentUser(),te=D?D.nickName||D.name:"Player 1",ne={mobile:(D==null?void 0:D.mobile)||"",nickName:(D==null?void 0:D.nickName)||te,fullName:(D==null?void 0:D.name)||te};await this.mpClient.createRoom("2p",te,this.current4DigitCode,ne,this.currentBet,this.selectedHome),this.createRoomModalOpen=!0,this.engine.log(`⚔️ Challenged ${v} to Table #${this.current4DigitCode}!`),this.render()}}),document.querySelectorAll(".btn-fcard-delete").forEach(m=>{m.onclick=()=>{const v=m.getAttribute("data-friend-id");v&&(Y.removeFriend(v),this.render())}});const Ln=document.getElementById("btn-nav-home"),Hn=document.getElementById("btn-nav-friends"),Fn=document.getElementById("btn-nav-reward"),Dn=document.getElementById("btn-nav-history"),Un=document.getElementById("btn-nav-profile");Ln&&(Ln.onclick=()=>{this.computerModalOpen=!1,this.friendsHubOpen=!1,this.joinRoomModalOpen=!1,this.createRoomModalOpen=!1,this.profileModalOpen=!1,this.rulesOpen=!1,this.matchHistoryModalOpen=!1,this.inLobby=!0,this.render()}),Hn&&(Hn.onclick=()=>{this.friendsHubOpen=!0,this.render()});const jn=()=>{const m=Y.claimHourlyReward();m.success?(ie.playBonusRoll(),ve.heavy(),this.engine.log(m.message),alert(m.message)):alert(m.error),this.render()};Fn&&(Fn.onclick=jn);const Gn=document.getElementById("btn-lobby-hourly-reward");Gn&&(Gn.onclick=jn),Dn&&(Dn.onclick=()=>{this.matchHistoryModalOpen=!0,this.render()});const qn=document.getElementById("btn-lobby-history");qn&&(qn.onclick=()=>{this.matchHistoryModalOpen=!0,this.render()});const Jn=document.getElementById("btn-close-match-history"),Wn=document.getElementById("btn-done-match-history");Jn&&(Jn.onclick=()=>{this.matchHistoryModalOpen=!1,this.render()}),Wn&&(Wn.onclick=()=>{this.matchHistoryModalOpen=!1,this.render()}),Un&&(Un.onclick=()=>{this.profileModalOpen=!0,this.render()});const Vn=document.getElementById("btn-close-create-room");Vn&&(Vn.onclick=()=>{this.createRoomModalOpen=!1,this.render()});const zn=document.getElementById("radio-mode-1v1"),Kn=document.getElementById("radio-mode-2v2");zn&&(zn.onchange=()=>{this.roomCreationMode="2p",this.render()}),Kn&&(Kn.onchange=()=>{this.roomCreationMode="4p",this.render()}),document.querySelectorAll("[data-create-bet]").forEach(m=>{m.onclick=()=>{const v=parseInt(m.getAttribute("data-create-bet"),10);v&&(this.currentBet=v,this.matchPot=v*2,this.render())}});const He=document.getElementById("btn-copy-4digit-code");He&&(He.onclick=()=>{const m=He.getAttribute("data-code");m&&(navigator.clipboard.writeText(m),He.textContent="✅ Copied!",setTimeout(()=>{He&&(He.textContent=`📋 Copy Code (${m})`)},1800))});const Yn=document.getElementById("btn-close-join-room");if(Yn&&(Yn.onclick=()=>{this.joinRoomModalOpen=!1,this.render()}),this.joinRoomModalOpen){const m=document.getElementById("input-4digit-code"),v=document.getElementById("btn-submit-join-code");m&&(m.oninput=D=>{this.enteredJoinCode=D.target.value.replace(/[^0-9]/g,"").slice(0,4),this.render()},m.onkeydown=D=>{D.key==="Enter"&&this.submitJoinTableCode(this.enteredJoinCode||m.value)}),v&&(v.onclick=()=>{this.submitJoinTableCode(this.enteredJoinCode||(m==null?void 0:m.value))})}const Qn=document.getElementById("btn-close-add-friend");Qn&&(Qn.onclick=()=>{this.addFriendModalOpen=!1,this.render()});const ut=document.getElementById("input-friend-mobile"),Zn=document.getElementById("btn-submit-add-friend"),Xn=()=>{if(!ut)return;const m=ut.value.trim(),v=Y.addFriendByMobile(m);v.success?(this.addFriendModalOpen=!1,this.addFriendError=null,alert(v.message),this.render()):(this.addFriendError=v.error,this.render())};Zn&&(Zn.onclick=Xn),ut&&(ut.onkeydown=m=>{m.key==="Enter"&&Xn()}),document.querySelectorAll(".btn-lobby-tier").forEach(m=>{m.onclick=()=>{const v=parseInt(m.getAttribute("data-bet"),10);v&&(this.selectedBet=v,this.render())}});const ei=document.getElementById("btn-lobby-start-game");ei&&(ei.onclick=()=>{this.startGame(this.lobbyMode,this.selectedBet)});const ti=document.getElementById("btn-lobby-profile");ti&&(ti.onclick=()=>{this.profileModalOpen=!0,this.render()});const ni=document.getElementById("btn-lobby-rules");ni&&(ni.onclick=()=>{this.rulesOpen=!0,this.render()});const ii=document.getElementById("btn-lobby-switch-acc");ii&&(ii.onclick=()=>{Y.logout(),this.inLobby=!1,this.loginModalOpen=!0,this.loginError=null,this.render()});const si=document.getElementById("btn-open-profile"),oi=document.getElementById("btn-close-profile"),ri=document.getElementById("btn-profile-done"),ai=document.getElementById("btn-switch-account");si&&(si.onclick=()=>{this.profileModalOpen=!0,this.render()}),oi&&(oi.onclick=()=>{this.profileModalOpen=!1,this.render()}),ri&&(ri.onclick=()=>{this.profileModalOpen=!1,this.render()}),ai&&(ai.onclick=()=>{Y.logout(),this.profileModalOpen=!1,this.inLobby=!1,this.loginModalOpen=!0,this.loginError=null,this.render()});const li=document.getElementById("btn-open-exit"),ci=document.getElementById("btn-close-exit"),di=document.getElementById("btn-cancel-exit"),ui=document.getElementById("btn-confirm-exit");li&&(li.onclick=()=>{this.exitModalOpen=!0,this.render()}),ci&&(ci.onclick=()=>{this.exitModalOpen=!1,this.render()}),di&&(di.onclick=()=>{this.exitModalOpen=!1,this.render()}),ui&&(ui.onclick=()=>{const m=this.mpState.roomCode?this.mpState.myTeam:1;Y.recordMatch({matchId:`m_${Date.now()}`,opponent:this.mpState.roomCode?m===1?this.mpClient.guestName:this.mpClient.hostName:"System AI",mode:this.mpState.roomCode?`Online Room #${this.mpState.roomCode}`:"Solo vs AI",bet:this.currentBet,pot:this.matchPot,result:"FORFEITED",coinsChange:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:m===1?this.engine.team1Kills:this.engine.team2Kills}),this.mpState.roomCode&&(this.mpClient.sendForfeit(m,this.mpState.myPlayerId),this.mpClient.leaveRoom()),this.engine.forfeit(m),this.exitModalOpen=!1,this.turnTimer.stop(),this.inLobby=!0,this.engine.log("🚪 You exited the match."),this.render()});const hi=document.getElementById("btn-inactivity-dismiss");hi&&(hi.onclick=()=>{this.inactivityModalOpen=!1,this.turnTimer.stop(),this.inLobby=!0,this.render()});const pi=document.getElementById("btn-gate-continue");pi&&(pi.onclick=()=>this.handleGate23Decision("continue"));const mi=document.getElementById("btn-gate-restart");mi&&(mi.onclick=()=>this.handleGate23Decision("restart"));const fi=document.getElementById("btn-toggle-lang");fi&&(fi.onclick=()=>{Pt(),this.render()});const gi=document.getElementById("btn-lobby-lang-toggle");gi&&(gi.onclick=()=>{Pt(),this.render()});const bi=document.getElementById("btn-login-lang-toggle");bi&&(bi.onclick=()=>{Pt(),this.render()});const yi=document.getElementById("btn-lobby-add-coins"),vi=document.getElementById("btn-nav-store"),Ci=()=>{const m=z.claimRefill();m.success?(ie.playBonusRoll(),alert(`🎁 Free Refill! Added 🪙${m.amount.toLocaleString()} coins!
New Balance: 🪙${m.balance.toLocaleString()}`),this.render()):alert(`🪙 Coin Refill: Available when balance is under 🪙250. You currently have 🪙${z.getBalance().toLocaleString()}!`)};yi&&(yi.onclick=m=>{m.stopPropagation(),Ci()}),vi&&(vi.onclick=Ci)}}function bn(){new qr}window.initBharakhatta=bn;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bn):bn();
