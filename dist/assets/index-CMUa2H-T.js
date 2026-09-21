var cr=s=>{throw TypeError(s)};var Je=(s,e,t)=>e.has(s)?cr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);function lr(s,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in s)){const r=Object.getOwnPropertyDescriptor(n,i);r&&Object.defineProperty(s,i,r.get?r:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const dr=[{r:3,c:6,id:"home-1",name:"Home 1 Base (East)"},{r:0,c:3,id:"home-2",name:"Home 2 Base (North)"},{r:3,c:0,id:"home-3",name:"Home 3 Base (West)"},{r:6,c:3,id:"home-4",name:"Home 4 Base (South)"},{r:1,c:1,id:"nw-ghatta",name:"North-West Safe Katta"},{r:1,c:5,id:"ne-ghatta",name:"North-East Safe Katta"},{r:5,c:1,id:"sw-ghatta",name:"South-West Safe Katta"},{r:5,c:5,id:"se-ghatta",name:"South-East Safe Katta"},{r:3,c:3,id:"center-sanctum",name:"Happy Home Sanctum"}];function Ye(s,e){return dr.some(t=>t.r===s&&t.c===e)}function ur(s,e){return s===3&&e===3}const Ue=[{r:3,c:6,step:0,safe:!0,label:"Home 1"},{r:2,c:6,step:1},{r:1,c:6,step:2},{r:0,c:6,step:3},{r:0,c:5,step:4},{r:0,c:4,step:5},{r:0,c:3,step:6,safe:!0,label:"Home 2"},{r:0,c:2,step:7},{r:0,c:1,step:8},{r:0,c:0,step:9},{r:1,c:0,step:10},{r:2,c:0,step:11},{r:3,c:0,step:12,safe:!0,label:"Home 3"},{r:4,c:0,step:13},{r:5,c:0,step:14},{r:6,c:0,step:15},{r:6,c:1,step:16},{r:6,c:2,step:17},{r:6,c:3,step:18,safe:!0,label:"Home 4"},{r:6,c:4,step:19},{r:6,c:5,step:20},{r:6,c:6,step:21},{r:5,c:6,step:22},{r:4,c:6,step:23,isGate:!0},{r:5,c:5,step:24,safe:!0},{r:5,c:4,step:25},{r:5,c:3,step:26},{r:5,c:2,step:27},{r:5,c:1,step:28,safe:!0},{r:4,c:1,step:29},{r:3,c:1,step:30},{r:2,c:1,step:31},{r:1,c:1,step:32,safe:!0},{r:1,c:2,step:33},{r:1,c:3,step:34},{r:1,c:4,step:35},{r:1,c:5,step:36,safe:!0},{r:2,c:5,step:37},{r:3,c:5,step:38},{r:4,c:5,step:39},{r:4,c:4,step:40},{r:4,c:3,step:41},{r:4,c:2,step:42},{r:3,c:2,step:43},{r:2,c:2,step:44},{r:2,c:3,step:45},{r:2,c:4,step:46},{r:3,c:4,step:47},{r:3,c:3,step:48,isCenter:!0,safe:!0,label:"Happy Home"}],ms=Ue.map((s,e)=>({...s,r:6-s.c,c:s.r,step:e,label:e===0?"Home 2":e===48?"Happy Home":s.label})),hr=Ue.map((s,e)=>({...s,r:6-s.r,c:6-s.c,step:e,label:e===0?"Home 3":e===48?"Happy Home":s.label})),pr=Ue.map((s,e)=>({...s,r:s.c,c:6-s.r,step:e,label:e===0?"Home 4":e===48?"Happy Home":s.label}));function _e(s){const e=parseInt(s,10)||1;return{1:3,2:4,3:1,4:2}[e]||3}function mr(s,e="spiral"){return s===1?Ue:s===2?ms:s===3?hr:s===4?pr:Ue}const Ne={1:{r:3,c:6,name:"Home 1 Jail (East)"},2:{r:0,c:3,name:"Home 2 Jail (North)"},3:{r:3,c:0,name:"Home 3 Jail (West)"},4:{r:6,c:3,name:"Home 4 Jail (South)"},team1:{r:3,c:6,name:"Home 1 Jail (East)"},team2:{r:3,c:0,name:"Home 3 Jail (West)"},team3:{r:3,c:0,name:"Home 3 Jail (West)"},team4:{r:6,c:3,name:"Home 4 Jail (South)"}};Ue.slice(0,24);ms.slice(0,24);const ki={1:{te:"Okkati",en:"One",isBonus:!0,releasesCoins:1},2:{te:"Rendu",en:"Two",isBonus:!1,releasesCoins:0},3:{te:"Moodu",en:"Three",isBonus:!1,releasesCoins:0},4:{te:"Naalugu",en:"Four",isBonus:!1,releasesCoins:0},5:{te:"Aidu",en:"Five",isBonus:!0,releasesCoins:0},6:{te:"Aaru",en:"Six",isBonus:!0,releasesCoins:0},12:{te:"Baara",en:"Twelve (Baara!)",isBonus:!0,releasesCoins:0}};class fr{constructor(){this.shells=[{id:0,isOpen:!0,rot:15,x:0,y:0},{id:1,isOpen:!0,rot:-25,x:0,y:0},{id:2,isOpen:!1,rot:40,x:0,y:0},{id:3,isOpen:!0,rot:-10,x:0,y:0},{id:4,isOpen:!1,rot:65,x:0,y:0},{id:5,isOpen:!0,rot:-50,x:0,y:0}]}roll(e=null){let t=0,n=0;e!==null?(n=e,t=n===12?0:n):(this.shells.forEach(r=>{r.isOpen=Math.random()<.48,r.isOpen&&t++,r.rot=Math.floor(Math.random()*360),r.x=(Math.random()-.5)*24,r.y=(Math.random()-.5)*16}),t===0?n=12:n=t),e!==null&&this.shells.forEach((r,o)=>{r.isOpen=o<t,r.rot=Math.floor(Math.random()*360),r.x=(Math.random()-.5)*24,r.y=(Math.random()-.5)*16});const i=ki[n]||{te:`${n}`,en:`${n}`,isBonus:!1,releasesCoins:0};return{score:n,openCount:t,shells:this.shells.map(r=>({...r})),isBonus:i.isBonus,releasesCoins:i.releasesCoins,titleTe:i.te,titleEn:i.en}}rollDie(){const e=Math.floor(Math.random()*6)+1,t=e===1||e===5||e===6,n=e===1?1:0,i=ki[e];return{score:e,openCount:e,shells:[],isBonus:t,releasesCoins:n,titleTe:i.te,titleEn:i.en}}}class gr{constructor(){this.ctx=null,this.muted=!1,this.initialized=!1}init(){if(!this.initialized&&!(typeof window>"u"))try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.initialized=!0)}catch(e){console.warn("Web Audio API not supported",e)}}toggleMute(){return this.muted=!this.muted,this.muted}playCowrieRoll(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=32+Math.floor(Math.random()*10);for(let n=0;n<t;n++){const i=n/t*1.85+(Math.random()*.04-.02),r=e+Math.max(0,i),o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.createBiquadFilter(),d=2200+Math.random()*2600;o.type=Math.random()>.4?"triangle":"sine",o.frequency.setValueAtTime(d,r),o.frequency.exponentialRampToValueAtTime(d*.4,r+.035),c.type="bandpass",c.frequency.setValueAtTime(2800+Math.random()*1200,r),c.Q.setValueAtTime(4,r);const l=n>=t-4,u=l?.22*(.8+Math.random()*.4):(.05+n/t*.12)*(.8+Math.random()*.4);a.gain.setValueAtTime(u,r),a.gain.exponentialRampToValueAtTime(1e-4,r+(l?.06:.04)),o.connect(c),c.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+(l?.07:.045))}}playCoinStep(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(480,e),t.frequency.exponentialRampToValueAtTime(720,e+.04),t.frequency.exponentialRampToValueAtTime(320,e+.09),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.11)}playJailRelease(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=e+i*.05,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.1,r),a.gain.exponentialRampToValueAtTime(.001,r+.14),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.15)})}playCapture(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(40,e+.25),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.26),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.28);const i=this.ctx.createBuffer(1,this.ctx.sampleRate*.15,this.ctx.sampleRate),r=i.getChannelData(0);for(let d=0;d<r.length;d++)r[d]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1500,e),a.Q.setValueAtTime(3,e);const c=this.ctx.createGain();c.gain.setValueAtTime(.25,e),c.gain.exponentialRampToValueAtTime(.001,e+.14),o.connect(a),a.connect(c),c.connect(this.ctx.destination),o.start(e),o.stop(e+.16)}playBonusRoll(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[587.33,739.99,880,1174.66].forEach((n,i)=>{const r=e+i*.04,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.09,r),a.gain.exponentialRampToValueAtTime(5e-4,r+.35),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.36)})}playBaaraTwelve(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[440,554.37,659.25,880,1108.73,1318.51].forEach((n,i)=>{const r=e+i*.06,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.12,r),a.gain.exponentialRampToValueAtTime(.001,r+.5),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.52)})}playVictory(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=[{f:523.25,d:.2},{f:659.25,d:.2},{f:783.99,d:.25},{f:1046.5,d:.5},{f:880,d:.2},{f:1046.5,d:.7}];let n=e;t.forEach(i=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(i.f,n),o.gain.setValueAtTime(.15,n),o.gain.exponentialRampToValueAtTime(.001,n+i.d*1.1),r.connect(o),o.connect(this.ctx.destination),r.start(n),r.stop(n+i.d*1.15),n+=i.d})}}const te=new gr,Z={WAITING_FOR_ROLL:"WAITING_FOR_ROLL",ROLLING:"ROLLING",WAITING_FOR_MOVE:"WAITING_FOR_MOVE",ANIMATING_MOVE:"ANIMATING_MOVE",GAME_OVER:"GAME_OVER"};class br{constructor(e={}){this.dice=new fr,this.diceMode=e.diceMode||"cowries",this.gameMode=e.gameMode||"2p",this.pathStyle=e.pathStyle||"spiral",this.requireKill=e.requireKill!==void 0?e.requireKill:!0,this.team1Home=e.team1Home?parseInt(e.team1Home,10):1,this.team2Home=e.team2Home?parseInt(e.team2Home,10):_e(this.team1Home),this.onStateChange=e.onStateChange||(()=>{}),this.onLog=e.onLog||(()=>{}),this.onTurnChange=e.onTurnChange||(()=>{}),this.onBothGatesOpen=e.onBothGatesOpen||(()=>{}),this.isMultiplayer=e.isMultiplayer||!1,this.isHost=e.isHost!==void 0?e.isHost:!0,this.bothGatesPrompted=!1,this.initGame()}getTeamHome(e){return e===1?this.team1Home||1:this.team2Home||_e(this.team1Home||1)}getTeamPath(e){const t=this.getTeamHome(e);return mr(t,this.pathStyle)}initGame(e=null,t=null){this.bothGatesPrompted=!1,t?(this.team1Home=parseInt(t,10)||1,this.team2Home=_e(this.team1Home)):this.team2Home=_e(this.team1Home||1),e&&Array.isArray(e)&&e.length>0?(this.players=e.map(r=>({...r})),this.gameMode=this.players.length>=4?"4p":"2p"):this.isMultiplayer?this.players=[{id:1,team:1,name:"Player 1",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2",avatar:"🦚",color:"#27ae60",isAI:!1}]:this.gameMode==="4p"?this.players=[{id:1,team:1,name:"Player 1",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Player 3",avatar:"🦁",color:"#d35400",isAI:!1},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]:this.players=[{id:1,team:1,name:"Player 1 (Team 1)",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2 (Opponent)",avatar:"🦚",color:"#27ae60",isAI:!0}];const n=Ne[this.team1Home]||Ne.team1,i=Ne[this.team2Home]||Ne.team2;this.coins=[];for(let r=1;r<=6;r++)this.coins.push({id:`t1_c${r}`,num:r,team:1,inJail:!0,stepIndex:-1,isFinished:!1,coord:{...n}}),this.coins.push({id:`t2_c${r}`,num:r,team:2,inJail:!0,stepIndex:-1,isFinished:!1,coord:{...i}});this.currentPlayerIndex=0,this.currentRoll=null,this.lastRoll=null,this.status=Z.WAITING_FOR_ROLL,this.validMoves=[],this.winner=null,this.team1Kills=0,this.team2Kills=0,this.stats={rollsCount:0,capturesCount:0,bonusTurnsCount:0,startTime:Date.now()},this.emitChange(),this.log("🎮 Game initialized! Welcome to Bharakhatta. Team 1 starts.")}getCurrentPlayer(){return this.players[this.currentPlayerIndex]}getCurrentTeam(){return this.getCurrentPlayer().team}getTeamCoins(e){return this.coins.filter(t=>t.team===e)}getCoinsAtCoord(e,t){return this.coins.filter(n=>!n.inJail&&!n.isFinished&&n.coord.r===e&&n.coord.c===t)}getJailCoins(e){return this.coins.filter(t=>t.team===e&&t.inJail)}getFinishedCoins(e){return this.coins.filter(t=>t.team===e&&t.isFinished)}roll(){if(this.status!==Z.WAITING_FOR_ROLL)return null;this.getCurrentPlayer(),this.status=Z.ROLLING,this.stats.rollsCount++,te.playCowrieRoll(),this.emitChange();let e;return this.diceMode==="die"?e=this.dice.rollDie():e=this.dice.roll(),this.currentRoll=e,this.lastRoll=e,setTimeout(()=>{this.resolveRoll(e)},2e3),e}resolveRoll(e){const t=this.getCurrentPlayer(),n=t.team,i=e.score;this.lastRoll=e,e.score===12?te.playBaaraTwelve():e.isBonus&&te.playBonusRoll(),this.log(`🎲 ${t.name} rolled ${e.titleEn} (${i})! ${e.isBonus?"⭐ Bonus Turn Awarded!":""}`);const r=this.getLegalMoves(n,i);if(this.validMoves=r,r.length===0){this.status=Z.WAITING_FOR_MOVE,this.emitChange(),this.log(`⚠️ No valid moves possible with roll of ${i}.`),e.isBonus?(this.stats.bonusTurnsCount++,this.log(`✨ Bonus roll allowed ${t.name} another roll!`),setTimeout(()=>{this.status=Z.WAITING_FOR_ROLL,this.currentRoll=null,this.validMoves=[],this.emitChange(),this.checkAITurn()},1200)):setTimeout(()=>{this.advanceTurn()},1200);return}this.status=Z.WAITING_FOR_MOVE,this.emitChange(),this.checkAITurn()}getLegalMoves(e,t){const n=[],i=this.getTeamCoins(e),r=this.getJailCoins(e),o=this.getTeamPath(e);t===1&&r.length>0&&n.push({type:"RELEASE_JAIL",coin:r[0],count:1,description:`Release 1 coin (#${r[0].num}) from Jail to Home base`});const c=i.filter(l=>!l.inJail&&!l.isFinished),d=e===1?this.team1Kills>0:this.team2Kills>0;for(const l of c){const u=o.length-1;if(this.requireKill&&!d){if(l.stepIndex===23)continue;if(l.stepIndex<23){if(l.stepIndex+t>23)continue;if(l.stepIndex+t===23){const m=o[23];n.push({type:"MOVE_COIN",coin:l,fromStep:l.stepIndex,toStep:23,targetCoord:m,isCapture:this.checkWillCapture(e,m),isSafe:m.safe||Ye(m.r,m.c),description:`Advance coin #${l.num} to Step 23 (Gate 23! Opponent kill needed to enter inside 5/5 ring)`});continue}}}const p=l.stepIndex+t;if(p<u){const m=o[p],y=l.stepIndex<=23&&p>23;n.push({type:"MOVE_COIN",coin:l,fromStep:l.stepIndex,toStep:p,targetCoord:m,isCapture:this.checkWillCapture(e,m),isSafe:m.safe||Ye(m.r,m.c),description:y?`Advance coin #${l.num} into Inside 5/5 Ring (Step ${p})!`:`Move coin #${l.num} to (${m.r}, ${m.c})`})}else if(p===u){const m=o[u];n.push({type:"FINISH_COIN",coin:l,fromStep:l.stepIndex,toStep:u,targetCoord:m,description:`Goal! Coin #${l.num} enters the Center Sanctum (Final Home)!`})}}return n}checkWillCapture(e,t){if(Ye(t.r,t.c))return!1;const n=e===1?2:1;return this.getCoinsAtCoord(t.r,t.c).some(r=>r.team===n)}executeMove(e,t=!1,n=!1){if(!e||!t&&this.status!==Z.WAITING_FOR_MOVE)return;this.status=Z.ANIMATING_MOVE,this.validMoves=[],this.emitChange();const i=this.getCurrentPlayer(),r=i.team,o=this.getTeamPath(r);if(e.type==="RELEASE_JAIL"){const a=this.getJailCoins(r),c=e.count||1,d=o[0];te.playJailRelease();for(let u=0;u<c&&u<a.length;u++){const p=a[u];p.inJail=!1,p.stepIndex=0,p.coord={r:d.r,c:d.c}}this.log(`🚪 ${i.name} released ${c} coin(s) from Jail onto Home Base!`);const l=this.currentRoll?this.currentRoll.isBonus:!1;this.finishMove(l)}else if(e.type==="MOVE_COIN"||e.type==="FINISH_COIN"){const a=e.coin&&e.coin.id&&this.coins.find(p=>p.id===e.coin.id)||e.coin,c=a.stepIndex,d=e.toStep,l=e.looped,u=()=>{a.stepIndex=d,a.coord={...e.targetCoord},e.type==="FINISH_COIN"&&(a.isFinished=!0,te.playBaaraTwelve(),this.log(`🎉 Goal! ${i.name}'s Coin #${a.num} reached the Center Sanctum!`));let p=!1;if(!Ye(a.coord.r,a.coord.c)){const _=r===1?2:1,H=this.getCoinsAtCoord(a.coord.r,a.coord.c).filter(E=>E.team===_);H.length>0&&(p=!0,this.stats.capturesCount++,r===1?this.team1Kills++:this.team2Kills++,te.playCapture(),H.forEach(E=>{E.inJail=!0,E.stepIndex=-1,E.coord={...E.team===1?Ne.team1:Ne.team2},this.log(`💥 Katta! ${i.name} killed Team ${_}'s Coin #${E.num}! Returned to Jail.`)}),this.log(`⚡ Katta strike earned ${i.name} a Bonus Turn! Inside 5/5 ring unlocked.`),this.team1Kills>=1&&this.team2Kills>=1&&!this.bothGatesPrompted&&(this.bothGatesPrompted=!0,this.log("⚔️ Both Home 1 and Home 2 have unlocked Gate 23!"),this.onBothGatesOpen&&this.onBothGatesOpen()))}const m=this.checkWinCondition(r),y=this.checkSquad5x5Win(r);if(m||y){const _=y&&!m?"SQUAD_5X5_COMPLETE":"CENTER_SANCTUM";this.winner={team:r,player:i,reason:_,stats:{...this.stats,durationSec:Math.round((Date.now()-this.stats.startTime)/1e3)}},this.status=Z.GAME_OVER,te.playVictory(),_==="SQUAD_5X5_COMPLETE"?this.log(`🏆 ALL 6 COINS ENTERED 5/5 SQUAD! Team ${r} has no coins left in outer 7/7 zone! Team ${r} Wins!`):this.log(`🏆 GAME OVER! Team ${r} has won the game of Bharakhatta! Congratulations!`),this.emitChange();return}const k=(this.currentRoll?this.currentRoll.isBonus:!1)||p;this.finishMove(k)};n?u():this.animateCoinHop(a,o,c,d,l,u)}}animateCoinHop(e,t,n,i,r,o){const a=[];if(r){for(let l=n+1;l<=23;l++)a.push(l);for(let l=0;l<=i;l++)a.push(l)}else for(let l=n+1;l<=i;l++)a.push(l);if(a.length===0){o();return}const c=Math.max(70,Math.min(150,600/a.length)),d=()=>{if(a.length===0){o();return}const l=a.shift();e.coord={r:t[l].r,c:t[l].c},te.playCoinStep(),this.emitChange(),setTimeout(d,c)};d()}finishMove(e){const t=this.getCurrentPlayer();this.currentRoll&&(this.lastRoll=this.currentRoll),e?(this.stats.bonusTurnsCount++,this.log(`✨ ${t.name} gets a BONUS TURN! Roll again.`),this.status=Z.WAITING_FOR_ROLL,this.currentRoll=null,this.validMoves=[],this.emitChange(),this.checkAITurn()):setTimeout(()=>{this.advanceTurn()},500)}advanceTurn(){this.currentPlayerIndex=(this.currentPlayerIndex+1)%this.players.length,this.currentRoll&&(this.lastRoll=this.currentRoll),this.currentRoll=null,this.validMoves=[],this.status=Z.WAITING_FOR_ROLL;const e=this.getCurrentPlayer();this.log(`👉 Turn: ${e.name} (Team ${e.team})`),this.emitChange(),this.onTurnChange&&this.onTurnChange(e),this.checkAITurn()}getBestLegalMove(){if(this.validMoves.length===0)return null;let e=this.validMoves[0],t=-999;for(const n of this.validMoves){let i=0;n.type==="FINISH_COIN"&&(i+=500),n.isCapture&&(i+=400),n.type==="RELEASE_JAIL"&&(i+=250+(n.count||1)*20),n.isSafe&&(i+=150),n.type==="MOVE_COIN"&&(i+=n.toStep),i>t&&(t=i,e=n)}return e}autoPlayTurn(){if(this.status===Z.WAITING_FOR_ROLL)return this.roll();if(this.status===Z.WAITING_FOR_MOVE){const e=this.getBestLegalMove();if(e)return this.executeMove(e),e}return null}getSingleMovableMove(){if(this.status!==Z.WAITING_FOR_MOVE||!this.validMoves||this.validMoves.length===0)return null;const e=this.getCurrentTeam();if(this.getTeamCoins(e).filter(i=>!i.inJail&&!i.isFinished).length===1){const i=this.validMoves.filter(r=>r.type==="MOVE_COIN"||r.type==="FINISH_COIN");if(i.length===1&&!this.validMoves.some(r=>r.type==="RELEASE_JAIL"))return i[0];if(this.validMoves.length===1)return this.validMoves[0]}return this.validMoves.length===1?this.validMoves[0]:null}checkWinCondition(e){return this.getFinishedCoins(e).length===6}checkSquad5x5Win(e){const t=this.getTeamCoins(e);return t.length!==6?!1:t.every(n=>!n.inJail&&(n.stepIndex>=24||n.isFinished))}checkAITurn(){!this.getCurrentPlayer().isAI||this.status===Z.GAME_OVER||this.isMultiplayer&&!this.isHost||(this.status===Z.WAITING_FOR_ROLL?setTimeout(()=>{this.roll()},900):this.status===Z.WAITING_FOR_MOVE&&setTimeout(()=>{this.executeAIMove()},1e3))}executeAIMove(){const e=this.getBestLegalMove();e&&this.executeMove(e)}forfeit(e){var o;const t=parseInt(e,10)||1,n=t===1?2:1,i=this.players.find(a=>a.team===n)||{name:`Team ${n}`,team:n},r=this.players.find(a=>a.team===t)||{name:`Team ${t}`};this.winner={team:n,player:i,reason:"OPPONENT_QUIT",quittingPlayerName:r.name,stats:{...this.stats,durationSec:Math.round((Date.now()-(((o=this.stats)==null?void 0:o.startTime)||Date.now()))/1e3)}},this.status=Z.GAME_OVER,te.playVictory(),this.log(`🏆 ${r.name} quit the match! ${i.name} (Team ${n}) wins by default!`),this.emitChange()}log(e){this.onLog&&this.onLog({id:Date.now()+Math.random(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),text:e})}emitChange(){this.onStateChange&&this.onStateChange(this.getStateSnapshot())}getStateSnapshot(){return{status:this.status,gameMode:this.gameMode,diceMode:this.diceMode,pathStyle:this.pathStyle,requireKill:this.requireKill,team1Home:this.team1Home,team2Home:this.team2Home,players:this.players,currentPlayer:this.getCurrentPlayer(),currentRoll:this.currentRoll,lastRoll:this.lastRoll,coins:this.coins.map(e=>({...e})),validMoves:this.validMoves,winner:this.winner,team1Kills:this.team1Kills,team2Kills:this.team2Kills,stats:{...this.stats}}}applyStateSnapshot(e){if(e){if(this.status=e.status,this.gameMode=e.gameMode||this.gameMode,e.team1Home!==void 0&&(this.team1Home=e.team1Home),e.team2Home!==void 0&&(this.team2Home=e.team2Home),e.players&&Array.isArray(e.players)&&(this.players=e.players.map(t=>({...t}))),e.currentPlayer){const t=this.players.findIndex(n=>n.id===e.currentPlayer.id);t!==-1&&(this.currentPlayerIndex=t)}this.currentRoll=e.currentRoll||null,e.lastRoll&&(this.lastRoll=e.lastRoll),e.coins&&Array.isArray(e.coins)&&(this.coins=e.coins.map(t=>({...t}))),this.validMoves=e.validMoves||[],this.winner=e.winner||null,e.team1Kills!==void 0&&(this.team1Kills=e.team1Kills),e.team2Kills!==void 0&&(this.team2Kills=e.team2Kills),e.stats&&(this.stats={...e.stats}),this.emitChange()}}}function yr(s,e=null,t=null){const{coins:n,validMoves:i,currentPlayer:r,status:o,team1Kills:a,team2Kills:c,players:d,currentRoll:l}=s,u=o==="WAITING_FOR_MOVE",p=r.team;let m=!0;e&&e.roomCode?m=r.id===e.myPlayerId:r.isAI&&(m=!1);const y={};n.forEach(b=>{if(!b.inJail&&!b.isFinished){const T=`${b.coord.r}_${b.coord.c}`;y[T]||(y[T]=[]),y[T].push(b)}});const C=n.filter(b=>b.team===1&&b.inJail),k=n.filter(b=>b.team===2&&b.inJail),_=n.filter(b=>b.team===1&&b.isFinished),H=n.filter(b=>b.team===2&&b.isFinished),E=i.find(b=>b.type==="RELEASE_JAIL"),w=u&&m&&!!E,X=d.find(b=>b.team===1)||{name:"Team 1"},M=d.find(b=>b.team===2)||{name:"Team 2"};let O="";for(let b=0;b<7;b++)for(let T=0;T<7;T++){const ie=Ye(b,T),pe=ur(b,T),Te=`${b}_${T}`,me=y[Te]||[];let ye=null;u&&m&&(t?ye=i.find(B=>B.coin&&B.coin.id===t&&B.targetCoord&&B.targetCoord.r===b&&B.targetCoord.c===T):ye=i.find(B=>B.targetCoord&&B.targetCoord.r===b&&B.targetCoord.c===T));const U=b===4&&T===6||b===0&&T===4||b===2&&T===0||b===6&&T===2,G=s.team1Home||1,V=s.team2Home||3;let S=0;b===3&&T===6?S=1:b===0&&T===3?S=2:b===3&&T===0?S=3:b===6&&T===3&&(S=4);const D=S===G,W=S===V;let j=["board-cell"];ie&&j.push("cell-safe-katta"),pe&&j.push("cell-center-sanctum"),S===1&&j.push("cell-home-h1"),S===2&&j.push("cell-home-h2"),S===3&&j.push("cell-home-h3"),S===4&&j.push("cell-home-h4"),D&&j.push("cell-team1-base"),W&&j.push("cell-team2-base"),U&&j.push("cell-gate-step23"),ye&&j.push("cell-valid-target");let J="";if(pe)J=`
          <div class="center-sanctum-emblem happy-home-emblem ${_.length+H.length>0?"has-happy-coins":""}">
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
              ${vr(_,H)}
            </div>
          </div>
        `;else if(ie){let B="";D?B=`👑 T1 (H${S})`:W?B=`🦚 T2 OPPOSITE (H${S})`:S>0&&(B=`H${S} SAFE`),J=`
          <div class="katta-x-mark">
            <svg viewBox="0 0 100 100" class="cross-svg">
              <line x1="10" y1="10" x2="90" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
              <line x1="90" y1="10" x2="10" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
            </svg>
            ${B?`<span class="cell-tag ${D?"cell-tag-t1":W?"cell-tag-t2":""}">${B}</span>`:""}
          </div>
        `}else U&&(J=`
          <div class="gate-marker" title="Gate 23: Opponent kill needed to enter inside 5/5 ring!">
            <span class="cell-gate-tag">GATE 23</span>
          </div>
        `);const Y=me.map((B,re)=>{const oe=u&&m&&i.some(ue=>ue.coin&&ue.coin.id===B.id),ae=t===B.id;return _t(B,oe,ae,me.length,re)}).join(""),ne=me.length>=2?`<span class="cell-stack-badge" title="${me.length} coins sharing this box">x${me.length}</span>`:"";O+=`
        <div class="${j.join(" ")}" data-r="${b}" data-c="${T}">
          ${J}
          ${ne}
          <div class="cell-coins-container coins-count-${me.length}">
            ${Y}
          </div>
          ${ye?`<div class="target-indicator ${t?"target-for-selected":""}">⭐</div>`:""}
        </div>
      `}const x=p===2,P=`
    <div class="jail-box jail-top ${x?"jail-turn-active":""} ${p===2&&w?"jail-actionable":""}" id="jail-team2">
      <div class="jail-header-compact">
        <div class="jail-team-tag t2-tag">
          <span>🦚 ${M.name} <small class="jail-home-sub">(Opposite Home ${s.team2Home||3})</small></span>
          ${x?'<span class="jail-turn-pulse">👉 TURN</span>':""}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${c} Kills ${c>0?"🔓 5/5 Open":"🔒 Gate 23 Stop"}</span>
          <span class="meta-count">${k.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${k.map((b,T)=>_t(b,u&&m&&p===2&&w,!1,k.length,T,!0)).join("")}
        </div>

        ${p===2&&w?`
          <button class="btn-release-jail" id="btn-release-jail-t2">
            ⚡ Release ${E.count} to Home!
          </button>
        `:""}
      </div>
    </div>
  `,F=p===1,$=`
    <div class="jail-box jail-bottom ${F?"jail-turn-active":""} ${p===1&&w?"jail-actionable":""}" id="jail-team1">
      <div class="jail-header-compact">
        <div class="jail-team-tag t1-tag">
          <span>👑 ${X.name} <small class="jail-home-sub">(Home ${s.team1Home||1})</small></span>
          ${F?'<span class="jail-turn-pulse">👉 TURN</span>':""}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${a} Kills ${a>0?"🔓 5/5 Open":"🔒 Gate 23 Stop"}</span>
          <span class="meta-count">${C.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${C.map((b,T)=>_t(b,u&&m&&p===1&&w,!1,C.length,T,!0)).join("")}
        </div>

        ${p===1&&w?`
          <button class="btn-release-jail" id="btn-release-jail-t1">
            ⚡ Release ${E.count} to Home!
          </button>
        `:""}
      </div>
    </div>
  `;let N="";if(l&&o!=="ROLLING"){const b=l.isBonus;N=`
      <div class="screen-roll-banner animate-pop-in" title="Rolled ${l.score} (${l.titleTe||l.titleEn})">
        <div class="roll-banner-badge ${b?"roll-banner-bonus-glow":""}">
          <span class="roll-banner-dice">🎲</span>
          <span class="roll-banner-num">${l.score}</span>
          <div class="roll-banner-details">
            <span class="roll-banner-te">${l.titleTe||""}</span>
            <span class="roll-banner-en">${l.titleEn||""}</span>
          </div>
          ${b?'<span class="roll-banner-star">⭐ BONUS TURN!</span>':""}
        </div>
      </div>
    `}return`
    <div class="board-wrapper">
      ${P}
      
      <div class="board-container">
        ${N}
        <div class="board-frame">
          <div class="board-grid">
            ${O}
          </div>
        </div>
      </div>

      ${$}
    </div>
  `}function _t(s,e,t=!1,n=1,i=0,r=!1){const o=s.team===1?"coin-team1":"coin-team2",a=e?"coin-selectable":"",c=t?"coin-selected":"",d=s.stepIndex===23;let l="coin-size-1";r||(n===2?l="coin-size-2":n>=3&&n<=4?l="coin-size-4":n>=5&&(l="coin-size-6"));const u=d?`Team ${s.team} Coin #${s.num} (Stopped at Step 23 Gate - Opponent kill required to enter inside 5/5 ring)`:`Team ${s.team} Coin #${s.num} ${t?"(Selected) - Tap destination to move":e?"- Tap to Select & Move":""}`;return`
    <div class="coin-piece ${o} ${a} ${c} ${l} ${d?"coin-stopped-23":""}" 
         data-coin-id="${s.id}" 
         data-team="${s.team}"
         title="${u}">
      <span class="coin-num">${s.num}</span>
      ${d?'<span class="coin-gate-badge">23</span>':""}
      ${e&&!t?'<span class="coin-pulse-ring"></span>':""}
    </div>
  `}function vr(s,e){return s.length===0&&e.length===0?"":`
    <div class="finished-summary happy-coins-summary">
      ${s.length>0?`<span class="fin-badge t1-fin" title="${s.length} Team 1 coins reached Happy Home!">👑 ${s.length} 🎉</span>`:""}
      ${e.length>0?`<span class="fin-badge t2-fin" title="${e.length} Team 2 coins reached Happy Home!">🦚 ${e.length} 🌟</span>`:""}
    </div>
  `}function _i(s,e){const t=s.isOpen,n=s.rot||0,i=(s.x||0)*.7,r=(s.y||0)*.7,o=t?`
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
         style="transform: translate(${i}px, ${r}px) rotate(${n}deg);">
      ${o}
    </div>
  `}function Ri(s,e,t){return`
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
  `}function Cr(s,e=null,t=30){const{status:n,currentRoll:i,lastRoll:r,diceMode:o,currentPlayer:a,validMoves:c}=s,d=n==="ROLLING";let l=!0;e&&e.roomCode?l=a.id===e.myPlayerId:a.isAI&&(l=!1);const u=n==="WAITING_FOR_ROLL"&&l;let p="";if(o==="die"){const C=i?i.score:r?r.score:6;p=`
      <div class="dice-single-cube ${d?"dice-shake":""}">
        <span class="dice-val">${C}</span>
      </div>
    `}else{const C=i||(n==="WAITING_FOR_ROLL"?null:r),k=C&&C.shells&&C.shells.length===6?C.shells:[{id:0,isOpen:!0,rot:10,x:-3,y:-2},{id:1,isOpen:!0,rot:-15,x:2,y:1},{id:2,isOpen:!1,rot:25,x:-1,y:2},{id:3,isOpen:!0,rot:-8,x:3,y:-1},{id:4,isOpen:!1,rot:30,x:-2,y:2},{id:5,isOpen:!0,rot:-25,x:1,y:-2}];if(d)p=Ri(!0,!1);else if(i){const _=i.isBonus;p=`
        <div class="settled-cowrie-mat post-shake-screen-display">
          <div class="post-shake-number-hero ${_?"number-hero-bonus":""}">
            <div class="post-shake-num-badge">
              <span class="post-shake-number-digit">${i.score}</span>
            </div>
            <div class="post-shake-number-meta">
              <span class="post-shake-title-te">${i.titleTe||""}</span>
              <span class="post-shake-title-en">${i.titleEn||""}</span>
              ${_?'<span class="post-shake-bonus-pill">⭐ BONUS TURN</span>':""}
            </div>
          </div>
          <div class="compact-cowrie-tray">
            ${k.map(H=>_i(H)).join("")}
          </div>
        </div>
      `}else n==="WAITING_FOR_ROLL"?p=Ri(!1,u):p=`
        <div class="settled-cowrie-mat">
          <div class="mat-label">🌾 Tossed on Board Mat</div>
          <div class="compact-cowrie-tray">
            ${k.map(_=>_i(_)).join("")}
          </div>
        </div>
      `}let m="";if(i&&!d){const C=i.isBonus;let k="";c&&c.length===0?k=`
        <span class="score-action-hint hint-no-moves">⚠️ No Moves</span>
        <span class="score-action-sub">${C?"Bonus Roll...":"Passes Turn..."}</span>
      `:c&&c.length===1&&!a.isAI?k=`
        <span class="score-action-hint hint-auto">⚡ Auto Move</span>
        <span class="score-action-sub">Moving in 1s...</span>
      `:c&&c.length>1&&l?k=`
        <span class="score-action-hint hint-choose">👉 Your Move</span>
        <span class="score-action-sub">Tap Coin / Target</span>
      `:k=`
        <span class="turn-prompt">${l?"👉 Your Turn!":`⏳ ${a.name}'s Turn`}</span>
        <span class="turn-timer-sub">⏳ ${t}s</span>
      `,m=`
      <div class="compact-score-badge settled-action-badge ${C?"score-bonus-glow":""}">
        ${k}
      </div>
    `}else d?m=`
      <div class="compact-score-badge rolling-badge">
        <span class="rolling-dot">⏳</span>
        <span>Shaking Palm (2 sec)...</span>
      </div>
    `:m=`
      <div class="compact-score-badge idle-badge ${l?"badge-my-turn":""}">
        <span class="turn-prompt">${l?"👉 Your Turn!":`⏳ ${a.name}'s Turn`}</span>
        ${r?`<span class="last-roll-reminder">Last: 🎲 ${r.score} (${r.titleTe||r.titleEn})</span>`:`<span class="turn-timer-sub">⏳ ${t}s</span>`}
      </div>
    `;let y="✊ TOSS GUVVALU";return d?y="Shaking (2s)...":l||(y=e&&e.roomCode?`Waiting for ${a.name}...`:"Computer Thinking..."),`
    <div class="mobile-cowrie-console ${l&&u?"console-my-turn":""}">
      <div class="cowrie-left-zone">
        ${p}
        ${m}
      </div>

      <div class="cowrie-right-zone">
        <button id="btn-roll-dice" class="btn-roll ${u?"btn-roll-active":"btn-roll-disabled"}" 
                ${u?"":"disabled"}>
          ${y}
        </button>
      </div>
    </div>
  `}let Ie="en";try{const s=localStorage.getItem("bk_language");(s==="te"||s==="en")&&(Ie=s)}catch{}function Cn(){return Ie}function Sr(s){if(s==="te"||s==="en"){Ie=s;try{localStorage.setItem("bk_language",s)}catch{}}return Ie}function Rt(){return Sr(Ie==="en"?"te":"en")}const Mt={en:{appTitle:"BHARAKHATTA",appSubtitle:"Traditional 7x7 Village Cowrie Board Game",gameCoins:"Game Coins",name:"Name",potCoins:"Pot Coins",room:"Room",boardNumber:"Board Number",chat:"Chat",playWithFriend:"Play with Friend",bet:"Bet",exit:"Exit",rules:"Rules",selectPlayerCount:"Choose Player Count (2 or 4)",twoPlayers:"2 Players",twoPlayersSub:"1 vs 1 Head to Head",fourPlayers:"4 Players",fourPlayersSub:"2 vs 2 Team Match (2 Homes)",selectMode2p:"Select 2-Player Mode",selectMode4p:"Select 4-Player Mode",playVsComputer:"Play vs Computer (1v1)",playVsComputerSub:"Solo match with System AI",playWithFriend2p:"Play with Friend (1v1)",playWithFriend2pSub:"Invite friend on other mobile with Board #",twoFriendsAIPair:"2 Friends + 2 AI Pair",twoFriendsAIPairSub:"You & Friend (Team 1) vs System AI Pair (Team 2)",solo4p:"Solo (1 Human + 3 AI)",solo4pSub:"You & AI Partner vs 2 AI Opponents",fourFriendsOnline:"4 Friends Online",fourFriendsOnlineSub:"Send Board # to request friends",requestFriendHero:"Request Friend to Play on Same Board",requestFriendHeroSub:"Share Board Number, WhatsApp Invite & QR Code",choosePotCoins:"Choose Pot Coins / Bet Stakes",yourStake:"Your Stake",winnerTakesPot:"Winner Takes Pot",startGame:"Start Game",rulesGuide:"Rules Guide",matchHistory:"Match History",switchAccount:"Switch Account",tossGuvvalu:"TOSS GUVVALU",tossingGuvvalu:"Tossing...",guvvaluInPalm:"Guvvalu in Palm",tapPalmToToss:"Guvvalu in Palm — Tap to Toss!",tossedOnMat:"Tossed on Board Mat",yourTurn:"👉 Your Turn!",waitingForTurn:"⏳ Turn: {name}",computerThinking:"Computer Thinking...",bonusRoll:"⭐ BONUS!",roll_1:"Okkati (1)",roll_2:"Rendu (2)",roll_3:"Moodu (3)",roll_4:"Naalugu (4)",roll_5:"Aidu (5)",roll_6:"Aaru (6)",roll_12:"Baara! (12)",gate23Title:"⚔️ Both Homes Unlocked Gate 23!",gate23Msg:"Both Team 1 and Team 2 have killed an opponent coin and unlocked Gate 23! Both teams can now enter the inside 5/5 squad. Do you want to continue playing or start again?",btnContinueGame:"▶️ Continue Game",btnStartAgain:"🔄 Start Again",victoryTitle:"VICTORY!",victoryDesc:"Team {team} won the match!",winReasonSquad:"🎉 ALL 6 COINS ENTERED 5/5 SQUAD! Team {team} has no coins left in the outer 7/7 track for the opponent to kill!",winReasonCenter:"🏆 All 6 coins reached the Center Sanctum (Final Home)!",winReasonForfeit:"🏆 Opponent quit the game! You won by default!",homeSelection:"Starting Home Base",oppositeHomeNotice:"Opponent will automatically get the Opposite Home",rematchBtn:"🎲 Return to Lobby",mpTitle:"Request Friend to Play on Same Board",mpSubtitle:"Real-time multiplayer over Wi-Fi / Mobile Network",guaranteedBoardNumber:"GUARANTEED BOARD NUMBER",uniqueBnHint:"Guaranteed unique board number — will never repeat in match history!",whatsappShare:"Request Friend on WhatsApp",scanQrHint:"Friend can scan this with mobile camera to join instantly!",copyLink:"Copy Link",copyCode:"Copy",copied:"✅ Copied!",boardPlayers:"Board Players",startWithAIPair:"🤝 Start Now with System AI Opposite Pair",twoFriendsNotice:"2 Friends Connected! You two are Team 1. You can start right now with the System AI playing as the opposite pair (Team 2)!",waitingFriendNotice:"Waiting for your friend to open the link or enter Board Number on their phone...",allPlayersReady:"All players connected! Board match is active in real time.",generateBoardBtn:"🚀 Generate Board Number & Invite Friends",joinBoardBtn:"🤝 Join Board",yourName:"Your Name",matchType:"Match Type",joinExistingCard:"Join with Friend's Board Number",enterBnPlaceholder:"e.g. BK-260915-101-482",tabExistingLogin:"📱 Existing Player: Login",tabNewSignUp:"✨ New Player: Sign Up",mobileNumber:"Mobile Number",tenDigits:"10 Digits",mobilePlaceholder:"e.g. 9876543210",loginMobileHint:"Enter your 10-digit number to restore your Nick Name, Coins & History",signupMobileHint:"Your mobile number is securely kept private. Only your Nick Name is shown in-game",fullName:"Full Name",required:"Required",optional:"Optional",fullNamePlaceholder:"e.g. Mahesh Reddy",nickName:"Nick Name",nickNamePlaceholder:"Leave blank for auto-initials (e.g. MR)",gameDisplayName:"Game Display Name",loginSubmitBtn:"🎮 Login to Bharakhatta",signUpSubmitBtn:"🚀 Sign Up & Claim 1,000 Coins",firstTimePrompt:"First time playing Bharakhatta?",signUpHere:"Sign Up here ➔",alreadyHaveAccount:"Already have an account?",loginHere:"Login with mobile ➔",errUnregistered:"Account not found with this mobile number. Please select 'Sign Up' to create your account!",errMissingName:"Please enter your Full Name to sign up.",errInvalidMobile:"Please enter a valid 10-digit mobile number.",menuComputer:"Computer",menuFriends:"Friends",menuComputerSub:"100% Offline • No internet needed",menuFriendsSub:"4-Digit Table Code • Invite Friends",freeCoinsClaim:"CLAIM!",freeCoinsBtn:"Free 500🪙",store:"Store",inventory:"Inventory",home:"Home",club:"Club",langBtnText:"🌐 తెలుగు"},te:{appTitle:"బాఱఖట్టా",appSubtitle:"సాంప్రదాయ 7x7 పల్లెటూరి గవ్వల బోర్డు ఆట",gameCoins:"గేమ్ కాయిన్స్",name:"పేరు",potCoins:"పాట్ కాయిన్స్",room:"రూమ్",boardNumber:"బోర్డు నంబర్",chat:"చాట్",playWithFriend:"మిత్రుడితో ఆట",bet:"బెట్",exit:"నిష్క్రమించు",rules:"నియమాలు",selectPlayerCount:"ఆటగాళ్ల సంఖ్య ఎంచుకోండి (2 లేదా 4)",twoPlayers:"2 గురు ఆటగాళ్ళు",twoPlayersSub:"1 vs 1 ముఖాముఖి ఆట",fourPlayers:"4 గురు ఆటగాళ్ళు",fourPlayersSub:"2 vs 2 టీమ్ మ్యాచ్ (2 హోమ్స్)",selectMode2p:"2-ఆటగాళ్ల విధానం ఎంచుకోండి",selectMode4p:"4-ఆటగాళ్ల విధానం ఎంచుకోండి",playVsComputer:"కంప్యూటర్‌తో ఆడండి (1v1)",playVsComputerSub:"సిస్టమ్ AI తో సింగిల్ ప్లేయర్ ఆట",playWithFriend2p:"మిత్రుడితో ఆడండి (1v1)",playWithFriend2pSub:"బోర్డు నంబర్‌తో వేరే ఫోన్‌లో ఉన్న మిత్రుడిని ఆహ్వానించండి",twoFriendsAIPair:"2 గురు మిత్రులు + 2 AI జోడీ",twoFriendsAIPairSub:"మీరు & మిత్రుడు (టీమ్ 1) vs సిస్టమ్ AI జోడీ (టీమ్ 2)",solo4p:"సోలో (1 మనిషి + 3 AI)",solo4pSub:"మీరు & AI మిత్రుడు vs 2 AI ప్రత్యర్థులు",fourFriendsOnline:"4 గురు మిత్రులు ఆన్‌లైన్",fourFriendsOnlineSub:"బోర్డు నంబర్ పంపి మిత్రులను ఆహ్వానించండి",requestFriendHero:"ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",requestFriendHeroSub:"బోర్డు నంబర్, వాట్సాప్ లింక్ & QR కోడ్ షేర్ చేయండి",choosePotCoins:"పాట్ కాయిన్స్ / బెట్ పందెం ఎంచుకోండి",yourStake:"మీ పందెం",winnerTakesPot:"విజేతకు మొత్తం పాట్",startGame:"ఆట ప్రారంభించండి",rulesGuide:"ఆట నియమాలు",matchHistory:"మ్యాచ్ హిస్టరీ",switchAccount:"ఖాతా మార్చండి",tossGuvvalu:"గువ్వలు విసరండి",tossingGuvvalu:"విసురుతున్నారు...",guvvaluInPalm:"అరచేతిలో గువ్వలు",tapPalmToToss:"అరచేతిలో గువ్వలు — విసరడానికి నొక్కండి!",tossedOnMat:"బోర్డు చాపపై పడిన గువ్వలు",yourTurn:"👉 మీ వంతు!",waitingForTurn:"⏳ {name} వంతు",computerThinking:"కంప్యూటర్ ఆలోచిస్తోంది...",bonusRoll:"⭐ బోనస్ టర్న్!",roll_1:"ఒక్కటి (1)",roll_2:"రెండు (2)",roll_3:"మూడు (3)",roll_4:"నాలుగు (4)",roll_5:"ఐదు (5)",roll_6:"ఆరు (6)",roll_12:"బాఱ! (12)",gate23Title:"⚔️ రెండు హోమ్‌ల గేట్ 23 తెరుచుకుంది!",gate23Msg:"టీమ్ 1 మరియు టీమ్ 2 రెండూ కట్టా కొట్టి గేట్ 23 తెరిచాయి! రెండు జట్లూ ఇప్పుడు లోపలి 5/5 స్క్వాడ్‌లోకి ప్రవేశించవచ్చు. ఆటను ఇలాగే కొనసాగించాలా లేదా మళ్లీ మొదటి నుండి ప్రారంభించాలా?",btnContinueGame:"▶️ ఆట కొనసాగించు",btnStartAgain:"🔄 మళ్లీ ప్రారంభించు",victoryTitle:"విజయం!",victoryDesc:"టీమ్ {team} ఘన విజయం సాధించింది!",winReasonSquad:"🎉 6 గువ్వలూ 5/5 స్క్వాడ్‌లోకి చేరాయి! బయటి 7/7 ట్రాక్‌లో ప్రత్యర్థి చంపడానికి ఏ కాయిన్ మిగల్లేదు! టీమ్ {team} విజేత!",winReasonCenter:"🏆 మొత్తం 6 గువ్వలూ సెంటర్ హోమ్ (సెంట్ మార్క్) చేరుకున్నాయి!",winReasonForfeit:"🏆 ప్రత్యర్థి ఆటను విడిచిపెట్టారు! మీరు డిఫాల్ట్‌గా గెలిచారు!",homeSelection:"ప్రారంభ హోమ్ బేస్",oppositeHomeNotice:"ఎదుటి ఆటగాడికి స్వయంచాలకంగా ఎదురుగా ఉన్న హోమ్ వస్తుంది",rematchBtn:"🎲 లాబీకి తిరిగి వెళ్ళు",mpTitle:"ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",mpSubtitle:"Wi-Fi / మొబైల్ నెట్‌వర్క్ ద్వారా రియల్-టైమ్ మల్టీప్లేయర్",guaranteedBoardNumber:"ఖచ్చితమైన బోర్డు నంబర్",uniqueBnHint:"ప్రత్యేక బోర్డు నంబర్ — హిస్టరీలో ఎప్పటికీ పునరావృతం కాదు!",whatsappShare:"వాట్సాప్‌లో మిత్రుడిని ఆహ్వానించండి",scanQrHint:"వెంటనే జాయిన్ కావడానికి మిత్రుడు కెమెరాతో స్కాన్ చేయవచ్చు!",copyLink:"లింక్ కాపీ చేయండి",copyCode:"కాపీ",copied:"✅ కాపీ అయింది!",boardPlayers:"బోర్డు ఆటగాళ్ళు",startWithAIPair:"🤝 సిస్టమ్ AI జోడీతో ఇప్పుడే ఆడండి",twoFriendsNotice:"2 గురు మిత్రులు కనెక్ట్ అయ్యారు! మీరిద్దరూ టీమ్ 1. సిస్టమ్ AI ని ఎదుటి జోడీగా (టీమ్ 2) పెట్టి ఇప్పుడే ఆట మొదలుపెట్టవచ్చు!",waitingFriendNotice:"మిత్రుడు లింక్ ఓపెన్ చేయడం లేదా బోర్డు నంబర్ నమోదు చేయడం కోసం వేచి చూస్తున్నాం...",allPlayersReady:"ఆటగాళ్లంతా కనెక్ట్ అయ్యారు! మ్యాచ్ లైవ్‌లో ఉంది.",generateBoardBtn:"🚀 బోర్డు నంబర్ సృష్టించి ఆహ్వానించండి",joinBoardBtn:"🤝 బోర్డులో జాయిన్ అవ్వండి",yourName:"మీ పేరు",matchType:"మ్యాచ్ విధానం",joinExistingCard:"మిత్రుడి బోర్డు నంబర్‌తో జాయిన్ అవ్వండి",enterBnPlaceholder:"ఉదా: BK-260915-101-482",tabExistingLogin:"📱 పాత ఆటగాడు: లాగిన్",tabNewSignUp:"✨ కొత్త ఆటగాడు: సైన్ అప్",mobileNumber:"మొబైల్ నంబర్",tenDigits:"10 అంకెలు",mobilePlaceholder:"ఉదా: 9876543210",loginMobileHint:"మీ ముద్దు పేరు, కాయిన్స్ & హిస్టరీ పొందడానికి 10 అంకెల నంబర్ నమోదు చేయండి",signupMobileHint:"మీ మొబైల్ నంబర్ గోప్యంగా ఉంటుంది. ఆటలో ముద్దు పేరు మాత్రమే కనిపిస్తుంది",fullName:"పూర్తి పేరు",required:"తప్పనిసరి",optional:"ఐచ్ఛికం",fullNamePlaceholder:"ఉదా: మహేష్ రెడ్డి",nickName:"ముద్దు పేరు",nickNamePlaceholder:"ఖాళీగా ఉంచితే మొదటి అక్షరాలు వస్తాయి (ఉదా: MR)",gameDisplayName:"ఆటలో కనిపించే పేరు",loginSubmitBtn:"🎮 బాఱఖట్టా లోకి లాగిన్ అవ్వండి",signUpSubmitBtn:"🚀 సైన్ అప్ చేసి 1,000 కాయిన్స్ పొందండి",firstTimePrompt:"మొదటిసారి బాఱఖట్టా ఆడుతున్నారా?",signUpHere:"ఇక్కడ సైన్ అప్ చేయండి ➔",alreadyHaveAccount:"ఇప్పటికే ఖాతా ఉందా?",loginHere:"మొబైల్‌తో లాగిన్ అవ్వండి ➔",errUnregistered:"ఈ మొబైల్ నంబర్‌తో ఖాతా లేదు. దయచేసి 'సైన్ అప్' ఎంచుకుని ఖాతాను నమోదు చేసుకోండి!",errMissingName:"సైన్ అప్ చేయడానికి దయచేసి మీ పూర్తి పేరు నమోదు చేయండి.",errInvalidMobile:"దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.",menuComputer:"కంప్యూటర్",menuFriends:"మిత్రులు",menuComputerSub:"100% ఆఫ్‌లైన్ • ఇంటర్నెట్ అవసరం లేదు",menuFriendsSub:"4 అంకెల కోడ్ • మిత్రులతో ఆడండి",freeCoinsClaim:"పొందండి!",freeCoinsBtn:"ఉచిత 500🪙",store:"స్టోర్",inventory:"సామాగ్రి",home:"హోమ్",club:"క్లబ్",langBtnText:"🌐 English"}};function R(s,e={}){const t=Ie in Mt?Ie:"en";let n=Mt[t][s]||Mt.en[s]||s;return Object.keys(e).forEach(i=>{n=n.replace(new RegExp(`\\{${i}\\}`,"g"),e[i])}),n}function Tr(s,e,t=null,n={}){const{gameMode:i,diceMode:r,status:o,currentPlayer:a,winner:c}=s,d=t&&t.roomCode,l=d&&t.players&&t.players.length>=2,u=n.walletCoins!==void 0?n.walletCoins:1e3,p=n.matchPot||0,m=n.timeLeft!==void 0?n.timeLeft:30,y=n.unreadChatCount||0,C=Cn();let k="timer-normal";return m<=5?k="timer-urgent":m<=10&&(k="timer-warning"),`
    <header class="app-header">
      <!-- Top Row: Logo, Live Timer, and Prominent Quit Button -->
      <div class="header-top-row">
        <div class="header-brand">
          <span class="logo-icon">🐚</span>
          <div class="brand-text-col">
            <h1 class="brand-title">${R("appTitle")}</h1>
            <span class="brand-subtitle">${C==="en"?"బాఱఖట్టా":"Bharakhatta"}</span>
          </div>
        </div>

        <!-- 30s Turn Timer -->
        <div class="turn-timer-pill ${k}" title="30-Second Turn Timer">
          <span class="timer-icon">⏳</span>
          <span class="timer-seconds">${m}s</span>
        </div>

        <!-- Prominent ALWAYS VISIBLE Quit Match Button -->
        <button id="btn-open-exit" class="btn-quit-game-header" title="${R("exit")}">
          🚪 ${R("exit")}
        </button>
      </div>

      <!-- Formatted Middle Line: Game Coins - Nick Name - Pot Coins -->
      <div class="header-economy-bar" id="game-header-bar">
        <div class="econ-pill econ-wallet" id="btn-open-wallet" title="${R("gameCoins")}">
          <span class="econ-icon">🪙</span>
          <span class="econ-label">${R("gameCoins")}:</span>
          <strong class="econ-val">${u.toLocaleString()}</strong>
        </div>

        <span class="econ-sep">•</span>

        ${n.user?`
          <div class="econ-pill econ-user" id="btn-open-profile" title="${R("name")}">
            <span class="econ-icon">👤</span>
            <span class="econ-label">${R("name")}:</span>
            <strong class="econ-val econ-nick">${n.user.nickName||n.user.name}</strong>
          </div>
        `:`
          <button class="btn-login-header" id="btn-header-login" title="Login with Mobile Number">
            📱 Login
          </button>
        `}

        <span class="econ-sep">•</span>

        <div class="econ-pill econ-pot" id="btn-open-bet" title="${R("potCoins")}">
          <span class="econ-icon">🏆</span>
          <span class="econ-label">${R("potCoins")}:</span>
          <strong class="econ-val">🪙${p.toLocaleString()}</strong>
        </div>

        <!-- Room Indicator -->
        ${d?`
          <div class="room-indicator-pill table-live-badge ${l?"table-connected":"table-waiting"}" id="btn-open-mp-badge" title="${R("boardNumber")}: #${t.roomCode}">
            <span class="live-dot">${l?"🟢":"⏳"}</span>
            <span>Table: <strong>#${t.roomCode}</strong></span>
          </div>
        `:""}
      </div>

      <!-- Quick Action Controls -->
      <div class="header-controls">
        <!-- In-Game Chat Button -->
        <button id="btn-open-chat" class="btn-icon btn-chat-glow" title="${R("chat")}">
          💬 ${R("chat")} ${y>0?`<span class="chat-badge">${y}</span>`:""}
        </button>

        <!-- Friends Hub Button -->
        <button id="btn-header-friends" class="btn-icon btn-friends-glow" title="Friends & Rooms">
          👥 Friends
        </button>

        <!-- Bet Adjust -->
        <button id="btn-open-bet" class="btn-icon btn-bet-chip" title="${R("bet")}">
          🪙 ${R("bet")}
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
        <button id="btn-open-rules" class="btn-icon" title="${R("rules")}">
          📜
        </button>
      </div>
    </header>
  `}function Mi(s){return!s||s.length===0?"":`
    <div class="live-ticker-strip">
      <span class="ticker-icon">📢</span>
      <span class="ticker-text">${s[s.length-1].text}</span>
    </div>
  `}function kr(s){return`
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
  `}var Sn={};(function s(e,t,n,i){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!e.OffscreenCanvas)return!1;try{var f=new OffscreenCanvas(1,1),h=f.getContext("2d");h.fillRect(0,0,1,1);var A=f.transferToImageBitmap();h.createPattern(A,"no-repeat")}catch{return!1}return!0})();function c(){}function d(f){var h=t.exports.Promise,A=h!==void 0?h:e.Promise;return typeof A=="function"?new A(f):(f(c,c),null)}var l=(function(f,h){return{transform:function(A){if(f)return A;if(h.has(A))return h.get(A);var L=new OffscreenCanvas(A.width,A.height),U=L.getContext("2d");return U.drawImage(A,0,0),h.set(A,L),L},clear:function(){h.clear()}}})(a,new Map),u=(function(){var f=Math.floor(16.666666666666668),h,A,L={},U=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(G){var V=Math.random();return L[V]=requestAnimationFrame(function S(D){U===D||U+f-1<D?(U=D,delete L[V],G()):L[V]=requestAnimationFrame(S)}),V},A=function(G){L[G]&&cancelAnimationFrame(L[G])}):(h=function(G){return setTimeout(G,f)},A=function(G){return clearTimeout(G)}),{frame:h,cancel:A}})(),p=(function(){var f,h,A={};function L(U){function G(V,S){U.postMessage({options:V||{},callback:S})}U.init=function(S){var D=S.transferControlToOffscreen();U.postMessage({canvas:D},[D])},U.fire=function(S,D,W){if(h)return G(S,null),h;var j=Math.random().toString(36).slice(2);return h=d(function(J){function Y(ne){ne.data.callback===j&&(delete A[j],U.removeEventListener("message",Y),h=null,l.clear(),W(),J())}U.addEventListener("message",Y),G(S,j),A[j]=Y.bind(null,{data:{callback:j}})}),h},U.reset=function(){U.postMessage({reset:!0});for(var S in A)A[S](),delete A[S]}}return function(){if(f)return f;if(!n&&r){var U=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{f=new Worker(URL.createObjectURL(new Blob([U])))}catch(G){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",G),null}L(f)}return f}})(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(f,h){return h?h(f):f}function C(f){return f!=null}function k(f,h,A){return y(f&&C(f[h])?f[h]:m[h],A)}function _(f){return f<0?0:Math.floor(f)}function H(f,h){return Math.floor(Math.random()*(h-f))+f}function E(f){return parseInt(f,16)}function w(f){return f.map(X)}function X(f){var h=String(f).replace(/[^0-9a-f]/gi,"");return h.length<6&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]),{r:E(h.substring(0,2)),g:E(h.substring(2,4)),b:E(h.substring(4,6))}}function M(f){var h=k(f,"origin",Object);return h.x=k(h,"x",Number),h.y=k(h,"y",Number),h}function O(f){f.width=document.documentElement.clientWidth,f.height=document.documentElement.clientHeight}function x(f){var h=f.getBoundingClientRect();f.width=h.width,f.height=h.height}function P(f){var h=document.createElement("canvas");return h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=f,h}function F(f,h,A,L,U,G,V,S,D){f.save(),f.translate(h,A),f.rotate(G),f.scale(L,U),f.arc(0,0,1,V,S,D),f.restore()}function $(f){var h=f.angle*(Math.PI/180),A=f.spread*(Math.PI/180);return{x:f.x,y:f.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:f.startVelocity*.5+Math.random()*f.startVelocity,angle2D:-h+(.5*A-Math.random()*A),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:f.color,shape:f.shape,tick:0,totalTicks:f.ticks,decay:f.decay,drift:f.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:f.gravity*3,ovalScalar:.6,scalar:f.scalar,flat:f.flat}}function N(f,h){h.x+=Math.cos(h.angle2D)*h.velocity+h.drift,h.y+=Math.sin(h.angle2D)*h.velocity+h.gravity,h.velocity*=h.decay,h.flat?(h.wobble=0,h.wobbleX=h.x+10*h.scalar,h.wobbleY=h.y+10*h.scalar,h.tiltSin=0,h.tiltCos=0,h.random=1):(h.wobble+=h.wobbleSpeed,h.wobbleX=h.x+10*h.scalar*Math.cos(h.wobble),h.wobbleY=h.y+10*h.scalar*Math.sin(h.wobble),h.tiltAngle+=.1,h.tiltSin=Math.sin(h.tiltAngle),h.tiltCos=Math.cos(h.tiltAngle),h.random=Math.random()+2);var A=h.tick++/h.totalTicks,L=h.x+h.random*h.tiltCos,U=h.y+h.random*h.tiltSin,G=h.wobbleX+h.random*h.tiltCos,V=h.wobbleY+h.random*h.tiltSin;if(f.fillStyle="rgba("+h.color.r+", "+h.color.g+", "+h.color.b+", "+(1-A)+")",f.beginPath(),o&&h.shape.type==="path"&&typeof h.shape.path=="string"&&Array.isArray(h.shape.matrix))f.fill(Te(h.shape.path,h.shape.matrix,h.x,h.y,Math.abs(G-L)*.1,Math.abs(V-U)*.1,Math.PI/10*h.wobble));else if(h.shape.type==="bitmap"){var S=Math.PI/10*h.wobble,D=Math.abs(G-L)*.1,W=Math.abs(V-U)*.1,j=h.shape.bitmap.width*h.scalar,J=h.shape.bitmap.height*h.scalar,Y=new DOMMatrix([Math.cos(S)*D,Math.sin(S)*D,-Math.sin(S)*W,Math.cos(S)*W,h.x,h.y]);Y.multiplySelf(new DOMMatrix(h.shape.matrix));var ne=f.createPattern(l.transform(h.shape.bitmap),"no-repeat");ne.setTransform(Y),f.globalAlpha=1-A,f.fillStyle=ne,f.fillRect(h.x-j/2,h.y-J/2,j,J),f.globalAlpha=1}else if(h.shape==="circle")f.ellipse?f.ellipse(h.x,h.y,Math.abs(G-L)*h.ovalScalar,Math.abs(V-U)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI):F(f,h.x,h.y,Math.abs(G-L)*h.ovalScalar,Math.abs(V-U)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI);else if(h.shape==="star")for(var B=Math.PI/2*3,re=4*h.scalar,oe=8*h.scalar,ae=h.x,ue=h.y,ve=5,ge=Math.PI/ve;ve--;)ae=h.x+Math.cos(B)*oe,ue=h.y+Math.sin(B)*oe,f.lineTo(ae,ue),B+=ge,ae=h.x+Math.cos(B)*re,ue=h.y+Math.sin(B)*re,f.lineTo(ae,ue),B+=ge;else f.moveTo(Math.floor(h.x),Math.floor(h.y)),f.lineTo(Math.floor(h.wobbleX),Math.floor(U)),f.lineTo(Math.floor(G),Math.floor(V)),f.lineTo(Math.floor(L),Math.floor(h.wobbleY));return f.closePath(),f.fill(),h.tick<h.totalTicks}function b(f,h,A,L,U){var G=h.slice(),V=f.getContext("2d"),S,D,W=d(function(j){function J(){S=D=null,V.clearRect(0,0,L.width,L.height),l.clear(),U(),j()}function Y(){n&&!(L.width===i.width&&L.height===i.height)&&(L.width=f.width=i.width,L.height=f.height=i.height),!L.width&&!L.height&&(A(f),L.width=f.width,L.height=f.height),V.clearRect(0,0,L.width,L.height),G=G.filter(function(ne){return N(V,ne)}),G.length?S=u.frame(Y):J()}S=u.frame(Y),D=J});return{addFettis:function(j){return G=G.concat(j),W},canvas:f,promise:W,reset:function(){S&&u.cancel(S),D&&D()}}}function T(f,h){var A=!f,L=!!k(h||{},"resize"),U=!1,G=k(h,"disableForReducedMotion",Boolean),V=r&&!!k(h||{},"useWorker"),S=V?p():null,D=A?O:x,W=f&&S?!!f.__confetti_initialized:!1,j=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,J;function Y(B,re,oe){for(var ae=k(B,"particleCount",_),ue=k(B,"angle",Number),ve=k(B,"spread",Number),ge=k(B,"startVelocity",Number),tt=k(B,"decay",Number),nt=k(B,"gravity",Number),it=k(B,"drift",Number),Ge=k(B,"colors",w),st=k(B,"ticks",Number),je=k(B,"shapes"),rt=k(B,"scalar"),ot=!!k(B,"flat"),qe=M(B),Ve=ae,$e=[],at=f.width*qe.x,ct=f.height*qe.y;Ve--;)$e.push($({x:at,y:ct,angle:ue,spread:ve,startVelocity:ge,color:Ge[Ve%Ge.length],shape:je[H(0,je.length)],ticks:st,decay:tt,gravity:nt,drift:it,scalar:rt,flat:ot}));return J?J.addFettis($e):(J=b(f,$e,D,re,oe),J.promise)}function ne(B){var re=G||k(B,"disableForReducedMotion",Boolean),oe=k(B,"zIndex",Number);if(re&&j)return d(function(ge){ge()});A&&J?f=J.canvas:A&&!f&&(f=P(oe),document.body.appendChild(f)),L&&!W&&D(f);var ae={width:f.width,height:f.height};S&&!W&&S.init(f),W=!0,S&&(f.__confetti_initialized=!0);function ue(){if(S){var ge={getBoundingClientRect:function(){if(!A)return f.getBoundingClientRect()}};D(ge),S.postMessage({resize:{width:ge.width,height:ge.height}});return}ae.width=ae.height=null}function ve(){J=null,L&&(U=!1,e.removeEventListener("resize",ue)),A&&f&&(document.body.contains(f)&&document.body.removeChild(f),f=null,W=!1)}return L&&!U&&(U=!0,e.addEventListener("resize",ue,!1)),S?S.fire(B,ae,ve):Y(B,ae,ve)}return ne.reset=function(){S&&S.reset(),J&&J.reset()},ne}var ie;function pe(){return ie||(ie=T(null,{useWorker:!0,resize:!0})),ie}function Te(f,h,A,L,U,G,V){var S=new Path2D(f),D=new Path2D;D.addPath(S,new DOMMatrix(h));var W=new Path2D;return W.addPath(D,new DOMMatrix([Math.cos(V)*U,Math.sin(V)*U,-Math.sin(V)*G,Math.cos(V)*G,A,L])),W}function me(f){if(!o)throw new Error("path confetti are not supported in this browser");var h,A;typeof f=="string"?h=f:(h=f.path,A=f.matrix);var L=new Path2D(h),U=document.createElement("canvas"),G=U.getContext("2d");if(!A){for(var V=1e3,S=V,D=V,W=0,j=0,J,Y,ne=0;ne<V;ne+=2)for(var B=0;B<V;B+=2)G.isPointInPath(L,ne,B,"nonzero")&&(S=Math.min(S,ne),D=Math.min(D,B),W=Math.max(W,ne),j=Math.max(j,B));J=W-S,Y=j-D;var re=10,oe=Math.min(re/J,re/Y);A=[oe,0,0,oe,-Math.round(J/2+S)*oe,-Math.round(Y/2+D)*oe]}return{type:"path",path:h,matrix:A}}function ye(f){var h,A=1,L="#000000",U='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof f=="string"?h=f:(h=f.text,A="scalar"in f?f.scalar:A,U="fontFamily"in f?f.fontFamily:U,L="color"in f?f.color:L);var G=10*A,V=""+G+"px "+U,S=new OffscreenCanvas(G,G),D=S.getContext("2d");D.font=V;var W=D.measureText(h),j=Math.ceil(W.actualBoundingBoxRight+W.actualBoundingBoxLeft),J=Math.ceil(W.actualBoundingBoxAscent+W.actualBoundingBoxDescent),Y=2,ne=W.actualBoundingBoxLeft+Y,B=W.actualBoundingBoxAscent+Y;j+=Y+Y,J+=Y+Y,S=new OffscreenCanvas(j,J),D=S.getContext("2d"),D.font=V,D.fillStyle=L,D.fillText(h,ne,B);var re=1/A;return{type:"bitmap",bitmap:S.transferToImageBitmap(),matrix:[re,0,0,re,-j*re/2,-J*re/2]}}t.exports=function(){return pe().apply(this,arguments)},t.exports.reset=function(){pe().reset()},t.exports.create=T,t.exports.shapeFromPath=me,t.exports.shapeFromText=ye})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Sn,!1);const Pt=Sn.exports;Sn.exports.create;function _r(s,e){var a;if(!s)return"";setTimeout(()=>{try{Pt({particleCount:90,spread:70,origin:{y:.6}}),setTimeout(()=>{Pt({particleCount:60,angle:60,spread:55,origin:{x:0}}),Pt({particleCount:60,angle:120,spread:55,origin:{x:1}})},250)}catch(c){console.log("Confetti trigger:",c)}},100);const t=s.team===1?"Team 1 (Saffron)":"Team 2 (Green)",n=s.reason==="SQUAD_5X5_COMPLETE",i=s.reason==="OPPONENT_QUIT",r=i?s.quittingPlayerName?`🚪 ${s.quittingPlayerName} quit the match! ${R("winReasonForfeit")}`:R("winReasonForfeit"):n?R("winReasonSquad",{team:s.team}):R("winReasonCenter"),o=i?`Default Win • ${((a=s.player)==null?void 0:a.name)||t}`:`${R("victoryDesc",{team:s.team})} (${t})`;return`
    <div class="modal-backdrop" id="victory-modal-backdrop">
      <div class="modal-dialog victory-dialog">
        <div class="victory-header">
          <div class="trophy-bounce">🏆</div>
          <h2 class="victory-title">${R("victoryTitle")}</h2>
          <span class="victory-subtitle">${o}</span>
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
              ${r}
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-play-again" id="btn-victory-restart">
            ${R("rematchBtn")}
          </button>
        </div>
      </div>
    </div>
  `}function fs(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Le={},It,Pi;function Rr(){return Pi||(Pi=1,It=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),It}var Et={},ke={},Ii;function Ee(){if(Ii)return ke;Ii=1;let s;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return ke.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},ke.getSymbolTotalCodewords=function(n){return e[n]},ke.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},ke.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');s=n},ke.isKanjiModeEnabled=function(){return typeof s<"u"},ke.toSJIS=function(n){return s(n)},ke}var xt={},Ei;function Tn(){return Ei||(Ei=1,(function(s){s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+t)}}s.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},s.from=function(n,i){if(s.isValid(n))return n;try{return e(n)}catch{return i}}})(xt)),xt}var At,xi;function Mr(){if(xi)return At;xi=1;function s(){this.buffer=[],this.length=0}return s.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},At=s,At}var Bt,Ai;function Pr(){if(Ai)return Bt;Ai=1;function s(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return s.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)},s.prototype.get=function(e,t){return this.data[e*this.size+t]},s.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},s.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Bt=s,Bt}var wt={},Bi;function Ir(){return Bi||(Bi=1,(function(s){const e=Ee().getSymbolSize;s.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,r=e(n),o=r===145?26:Math.ceil((r-13)/(2*i-2))*2,a=[r-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},s.getPositions=function(n){const i=[],r=s.getRowColCoords(n),o=r.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([r[a],r[c]]);return i}})(wt)),wt}var $t={},wi;function Er(){if(wi)return $t;wi=1;const s=Ee().getSymbolSize,e=7;return $t.getPositions=function(n){const i=s(n);return[[0,0],[i-e,0],[0,i-e]]},$t}var Ot={},$i;function xr(){return $i||($i=1,(function(s){s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};s.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},s.from=function(i){return s.isValid(i)?parseInt(i,10):void 0},s.getPenaltyN1=function(i){const r=i.size;let o=0,a=0,c=0,d=null,l=null;for(let u=0;u<r;u++){a=c=0,d=l=null;for(let p=0;p<r;p++){let m=i.get(u,p);m===d?a++:(a>=5&&(o+=e.N1+(a-5)),d=m,a=1),m=i.get(p,u),m===l?c++:(c>=5&&(o+=e.N1+(c-5)),l=m,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},s.getPenaltyN2=function(i){const r=i.size;let o=0;for(let a=0;a<r-1;a++)for(let c=0;c<r-1;c++){const d=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(d===4||d===0)&&o++}return o*e.N2},s.getPenaltyN3=function(i){const r=i.size;let o=0,a=0,c=0;for(let d=0;d<r;d++){a=c=0;for(let l=0;l<r;l++)a=a<<1&2047|i.get(d,l),l>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(l,d),l>=10&&(c===1488||c===93)&&o++}return o*e.N3},s.getPenaltyN4=function(i){let r=0;const o=i.data.length;for(let c=0;c<o;c++)r+=i.data[c];return Math.abs(Math.ceil(r*100/o/5)-10)*e.N4};function t(n,i,r){switch(n){case s.Patterns.PATTERN000:return(i+r)%2===0;case s.Patterns.PATTERN001:return i%2===0;case s.Patterns.PATTERN010:return r%3===0;case s.Patterns.PATTERN011:return(i+r)%3===0;case s.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2===0;case s.Patterns.PATTERN101:return i*r%2+i*r%3===0;case s.Patterns.PATTERN110:return(i*r%2+i*r%3)%2===0;case s.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}s.applyMask=function(i,r){const o=r.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)r.isReserved(c,a)||r.xor(c,a,t(i,c,a))},s.getBestMask=function(i,r){const o=Object.keys(s.Patterns).length;let a=0,c=1/0;for(let d=0;d<o;d++){r(d),s.applyMask(d,i);const l=s.getPenaltyN1(i)+s.getPenaltyN2(i)+s.getPenaltyN3(i)+s.getPenaltyN4(i);s.applyMask(d,i),l<c&&(c=l,a=d)}return a}})(Ot)),Ot}var ut={},Oi;function gs(){if(Oi)return ut;Oi=1;const s=Tn(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ut.getBlocksCount=function(i,r){switch(r){case s.L:return e[(i-1)*4+0];case s.M:return e[(i-1)*4+1];case s.Q:return e[(i-1)*4+2];case s.H:return e[(i-1)*4+3];default:return}},ut.getTotalCodewordsCount=function(i,r){switch(r){case s.L:return t[(i-1)*4+0];case s.M:return t[(i-1)*4+1];case s.Q:return t[(i-1)*4+2];case s.H:return t[(i-1)*4+3];default:return}},ut}var Nt={},ze={},Ni;function Ar(){if(Ni)return ze;Ni=1;const s=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)s[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)s[i]=s[i-255]})(),ze.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},ze.exp=function(n){return s[n]},ze.mul=function(n,i){return n===0||i===0?0:s[e[n]+e[i]]},ze}var Li;function Br(){return Li||(Li=1,(function(s){const e=Ar();s.mul=function(n,i){const r=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<i.length;a++)r[o+a]^=e.mul(n[o],i[a]);return r},s.mod=function(n,i){let r=new Uint8Array(n);for(;r.length-i.length>=0;){const o=r[0];for(let c=0;c<i.length;c++)r[c]^=e.mul(i[c],o);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},s.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let r=0;r<n;r++)i=s.mul(i,new Uint8Array([1,e.exp(r)]));return i}})(Nt)),Nt}var Lt,Di;function wr(){if(Di)return Lt;Di=1;const s=Br();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=s.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const r=s.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(r,o),a}return r},Lt=e,Lt}var Dt={},Ft={},Ht={},Fi;function bs(){return Fi||(Fi=1,Ht.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Ht}var Ce={},Hi;function ys(){if(Hi)return Ce;Hi=1;const s="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Ce.KANJI=new RegExp(t,"g"),Ce.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Ce.BYTE=new RegExp(n,"g"),Ce.NUMERIC=new RegExp(s,"g"),Ce.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),r=new RegExp("^"+s+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Ce.testKanji=function(c){return i.test(c)},Ce.testNumeric=function(c){return r.test(c)},Ce.testAlphanumeric=function(c){return o.test(c)},Ce}var Ui;function xe(){return Ui||(Ui=1,(function(s){const e=bs(),t=ys();s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(r,o){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?r.ccBits[0]:o<27?r.ccBits[1]:r.ccBits[2]},s.getBestModeForData=function(r){return t.testNumeric(r)?s.NUMERIC:t.testAlphanumeric(r)?s.ALPHANUMERIC:t.testKanji(r)?s.KANJI:s.BYTE},s.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},s.isValid=function(r){return r&&r.bit&&r.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+i)}}s.from=function(r,o){if(s.isValid(r))return r;try{return n(r)}catch{return o}}})(Ft)),Ft}var Gi;function $r(){return Gi||(Gi=1,(function(s){const e=Ee(),t=gs(),n=Tn(),i=xe(),r=bs(),o=7973,a=e.getBCHDigit(o);function c(p,m,y){for(let C=1;C<=40;C++)if(m<=s.getCapacity(C,y,p))return C}function d(p,m){return i.getCharCountIndicator(p,m)+4}function l(p,m){let y=0;return p.forEach(function(C){const k=d(C.mode,m);y+=k+C.getBitsLength()}),y}function u(p,m){for(let y=1;y<=40;y++)if(l(p,y)<=s.getCapacity(y,m,i.MIXED))return y}s.from=function(m,y){return r.isValid(m)?parseInt(m,10):y},s.getCapacity=function(m,y,C){if(!r.isValid(m))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=i.BYTE);const k=e.getSymbolTotalCodewords(m),_=t.getTotalCodewordsCount(m,y),H=(k-_)*8;if(C===i.MIXED)return H;const E=H-d(C,m);switch(C){case i.NUMERIC:return Math.floor(E/10*3);case i.ALPHANUMERIC:return Math.floor(E/11*2);case i.KANJI:return Math.floor(E/13);case i.BYTE:default:return Math.floor(E/8)}},s.getBestVersionForData=function(m,y){let C;const k=n.from(y,n.M);if(Array.isArray(m)){if(m.length>1)return u(m,k);if(m.length===0)return 1;C=m[0]}else C=m;return c(C.mode,C.getLength(),k)},s.getEncodedBits=function(m){if(!r.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return m<<12|y}})(Dt)),Dt}var Ut={},ji;function Or(){if(ji)return Ut;ji=1;const s=Ee(),e=1335,t=21522,n=s.getBCHDigit(e);return Ut.getEncodedBits=function(r,o){const a=r.bit<<3|o;let c=a<<10;for(;s.getBCHDigit(c)-n>=0;)c^=e<<s.getBCHDigit(c)-n;return(a<<10|c)^t},Ut}var Gt={},jt,qi;function Nr(){if(qi)return jt;qi=1;const s=xe();function e(t){this.mode=s.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),n.put(o,10);const a=this.data.length-i;a>0&&(r=this.data.substr(i),o=parseInt(r,10),n.put(o,a*3+1))},jt=e,jt}var qt,Vi;function Lr(){if(Vi)return qt;Vi=1;const s=xe(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=s.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r+2<=this.data.length;r+=2){let o=e.indexOf(this.data[r])*45;o+=e.indexOf(this.data[r+1]),i.put(o,11)}this.data.length%2&&i.put(e.indexOf(this.data[r]),6)},qt=t,qt}var Vt,Wi;function Dr(){if(Wi)return Vt;Wi=1;const s=xe();function e(t){this.mode=s.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Vt=e,Vt}var Wt,Ji;function Fr(){if(Ji)return Wt;Ji=1;const s=xe(),e=Ee();function t(n){this.mode=s.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let r=e.toSJIS(this.data[i]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),n.put(r,13)}},Wt=t,Wt}var Jt={exports:{}},zi;function Hr(){return zi||(zi=1,(function(s){var e={single_source_shortest_paths:function(t,n,i){var r={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,d,l,u,p,m,y,C,k;!a.empty();){c=a.pop(),d=c.value,u=c.cost,p=t[d]||{};for(l in p)p.hasOwnProperty(l)&&(m=p[l],y=u+m,C=o[l],k=typeof o[l]>"u",(k||C>y)&&(o[l]=y,a.push(l,y),r[l]=d))}if(typeof i<"u"&&typeof o[i]>"u"){var _=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(_)}return r},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],r=n;r;)i.push(r),t[r],r=t[r];return i.reverse(),i},find_path:function(t,n,i){var r=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(r,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},r;t=t||{};for(r in n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};s.exports=e})(Jt)),Jt.exports}var Ki;function Ur(){return Ki||(Ki=1,(function(s){const e=xe(),t=Nr(),n=Lr(),i=Dr(),r=Fr(),o=ys(),a=Ee(),c=Hr();function d(_){return unescape(encodeURIComponent(_)).length}function l(_,H,E){const w=[];let X;for(;(X=_.exec(E))!==null;)w.push({data:X[0],index:X.index,mode:H,length:X[0].length});return w}function u(_){const H=l(o.NUMERIC,e.NUMERIC,_),E=l(o.ALPHANUMERIC,e.ALPHANUMERIC,_);let w,X;return a.isKanjiModeEnabled()?(w=l(o.BYTE,e.BYTE,_),X=l(o.KANJI,e.KANJI,_)):(w=l(o.BYTE_KANJI,e.BYTE,_),X=[]),H.concat(E,w,X).sort(function(O,x){return O.index-x.index}).map(function(O){return{data:O.data,mode:O.mode,length:O.length}})}function p(_,H){switch(H){case e.NUMERIC:return t.getBitsLength(_);case e.ALPHANUMERIC:return n.getBitsLength(_);case e.KANJI:return r.getBitsLength(_);case e.BYTE:return i.getBitsLength(_)}}function m(_){return _.reduce(function(H,E){const w=H.length-1>=0?H[H.length-1]:null;return w&&w.mode===E.mode?(H[H.length-1].data+=E.data,H):(H.push(E),H)},[])}function y(_){const H=[];for(let E=0;E<_.length;E++){const w=_[E];switch(w.mode){case e.NUMERIC:H.push([w,{data:w.data,mode:e.ALPHANUMERIC,length:w.length},{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.ALPHANUMERIC:H.push([w,{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.KANJI:H.push([w,{data:w.data,mode:e.BYTE,length:d(w.data)}]);break;case e.BYTE:H.push([{data:w.data,mode:e.BYTE,length:d(w.data)}])}}return H}function C(_,H){const E={},w={start:{}};let X=["start"];for(let M=0;M<_.length;M++){const O=_[M],x=[];for(let P=0;P<O.length;P++){const F=O[P],$=""+M+P;x.push($),E[$]={node:F,lastCount:0},w[$]={};for(let N=0;N<X.length;N++){const b=X[N];E[b]&&E[b].node.mode===F.mode?(w[b][$]=p(E[b].lastCount+F.length,F.mode)-p(E[b].lastCount,F.mode),E[b].lastCount+=F.length):(E[b]&&(E[b].lastCount=F.length),w[b][$]=p(F.length,F.mode)+4+e.getCharCountIndicator(F.mode,H))}}X=x}for(let M=0;M<X.length;M++)w[X[M]].end=0;return{map:w,table:E}}function k(_,H){let E;const w=e.getBestModeForData(_);if(E=e.from(H,w),E!==e.BYTE&&E.bit<w.bit)throw new Error('"'+_+'" cannot be encoded with mode '+e.toString(E)+`.
 Suggested mode is: `+e.toString(w));switch(E===e.KANJI&&!a.isKanjiModeEnabled()&&(E=e.BYTE),E){case e.NUMERIC:return new t(_);case e.ALPHANUMERIC:return new n(_);case e.KANJI:return new r(_);case e.BYTE:return new i(_)}}s.fromArray=function(H){return H.reduce(function(E,w){return typeof w=="string"?E.push(k(w,null)):w.data&&E.push(k(w.data,w.mode)),E},[])},s.fromString=function(H,E){const w=u(H,a.isKanjiModeEnabled()),X=y(w),M=C(X,E),O=c.find_path(M.map,"start","end"),x=[];for(let P=1;P<O.length-1;P++)x.push(M.table[O[P]].node);return s.fromArray(m(x))},s.rawSplit=function(H){return s.fromArray(u(H,a.isKanjiModeEnabled()))}})(Gt)),Gt}var Yi;function Gr(){if(Yi)return Et;Yi=1;const s=Ee(),e=Tn(),t=Mr(),n=Pr(),i=Ir(),r=Er(),o=xr(),a=gs(),c=wr(),d=$r(),l=Or(),u=xe(),p=Ur();function m(M,O){const x=M.size,P=r.getPositions(O);for(let F=0;F<P.length;F++){const $=P[F][0],N=P[F][1];for(let b=-1;b<=7;b++)if(!($+b<=-1||x<=$+b))for(let T=-1;T<=7;T++)N+T<=-1||x<=N+T||(b>=0&&b<=6&&(T===0||T===6)||T>=0&&T<=6&&(b===0||b===6)||b>=2&&b<=4&&T>=2&&T<=4?M.set($+b,N+T,!0,!0):M.set($+b,N+T,!1,!0))}}function y(M){const O=M.size;for(let x=8;x<O-8;x++){const P=x%2===0;M.set(x,6,P,!0),M.set(6,x,P,!0)}}function C(M,O){const x=i.getPositions(O);for(let P=0;P<x.length;P++){const F=x[P][0],$=x[P][1];for(let N=-2;N<=2;N++)for(let b=-2;b<=2;b++)N===-2||N===2||b===-2||b===2||N===0&&b===0?M.set(F+N,$+b,!0,!0):M.set(F+N,$+b,!1,!0)}}function k(M,O){const x=M.size,P=d.getEncodedBits(O);let F,$,N;for(let b=0;b<18;b++)F=Math.floor(b/3),$=b%3+x-8-3,N=(P>>b&1)===1,M.set(F,$,N,!0),M.set($,F,N,!0)}function _(M,O,x){const P=M.size,F=l.getEncodedBits(O,x);let $,N;for($=0;$<15;$++)N=(F>>$&1)===1,$<6?M.set($,8,N,!0):$<8?M.set($+1,8,N,!0):M.set(P-15+$,8,N,!0),$<8?M.set(8,P-$-1,N,!0):$<9?M.set(8,15-$-1+1,N,!0):M.set(8,15-$-1,N,!0);M.set(P-8,8,1,!0)}function H(M,O){const x=M.size;let P=-1,F=x-1,$=7,N=0;for(let b=x-1;b>0;b-=2)for(b===6&&b--;;){for(let T=0;T<2;T++)if(!M.isReserved(F,b-T)){let ie=!1;N<O.length&&(ie=(O[N]>>>$&1)===1),M.set(F,b-T,ie),$--,$===-1&&(N++,$=7)}if(F+=P,F<0||x<=F){F-=P,P=-P;break}}}function E(M,O,x){const P=new t;x.forEach(function(T){P.put(T.mode.bit,4),P.put(T.getLength(),u.getCharCountIndicator(T.mode,M)),T.write(P)});const F=s.getSymbolTotalCodewords(M),$=a.getTotalCodewordsCount(M,O),N=(F-$)*8;for(P.getLengthInBits()+4<=N&&P.put(0,4);P.getLengthInBits()%8!==0;)P.putBit(0);const b=(N-P.getLengthInBits())/8;for(let T=0;T<b;T++)P.put(T%2?17:236,8);return w(P,M,O)}function w(M,O,x){const P=s.getSymbolTotalCodewords(O),F=a.getTotalCodewordsCount(O,x),$=P-F,N=a.getBlocksCount(O,x),b=P%N,T=N-b,ie=Math.floor(P/N),pe=Math.floor($/N),Te=pe+1,me=ie-pe,ye=new c(me);let f=0;const h=new Array(N),A=new Array(N);let L=0;const U=new Uint8Array(M.buffer);for(let W=0;W<N;W++){const j=W<T?pe:Te;h[W]=U.slice(f,f+j),A[W]=ye.encode(h[W]),f+=j,L=Math.max(L,j)}const G=new Uint8Array(P);let V=0,S,D;for(S=0;S<L;S++)for(D=0;D<N;D++)S<h[D].length&&(G[V++]=h[D][S]);for(S=0;S<me;S++)for(D=0;D<N;D++)G[V++]=A[D][S];return G}function X(M,O,x,P){let F;if(Array.isArray(M))F=p.fromArray(M);else if(typeof M=="string"){let ie=O;if(!ie){const pe=p.rawSplit(M);ie=d.getBestVersionForData(pe,x)}F=p.fromString(M,ie||40)}else throw new Error("Invalid data");const $=d.getBestVersionForData(F,x);if(!$)throw new Error("The amount of data is too big to be stored in a QR Code");if(!O)O=$;else if(O<$)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+$+`.
`);const N=E(O,x,F),b=s.getSymbolSize(O),T=new n(b);return m(T,O),y(T),C(T,O),_(T,x,0),O>=7&&k(T,O),H(T,N),isNaN(P)&&(P=o.getBestMask(T,_.bind(null,T,x))),o.applyMask(P,T),_(T,x,P),{modules:T,version:O,errorCorrectionLevel:x,maskPattern:P,segments:F}}return Et.create=function(O,x){if(typeof O>"u"||O==="")throw new Error("No input text");let P=e.M,F,$;return typeof x<"u"&&(P=e.from(x.errorCorrectionLevel,e.M),F=d.from(x.version),$=o.from(x.maskPattern),x.toSJISFunc&&s.setToSJISFunction(x.toSJISFunc)),X(O,F,P,$)},Et}var zt={},Kt={},Qi;function vs(){return Qi||(Qi=1,(function(s){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}s.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:r,scale:r?4:o,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},s.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},s.getImageWidth=function(n,i){const r=s.getScale(n,i);return Math.floor((n+i.margin*2)*r)},s.qrToImageData=function(n,i,r){const o=i.modules.size,a=i.modules.data,c=s.getScale(o,r),d=Math.floor((o+r.margin*2)*c),l=r.margin*c,u=[r.color.light,r.color.dark];for(let p=0;p<d;p++)for(let m=0;m<d;m++){let y=(p*d+m)*4,C=r.color.light;if(p>=l&&m>=l&&p<d-l&&m<d-l){const k=Math.floor((p-l)/c),_=Math.floor((m-l)/c);C=u[a[k*o+_]?1:0]}n[y++]=C.r,n[y++]=C.g,n[y++]=C.b,n[y]=C.a}}})(Kt)),Kt}var Zi;function jr(){return Zi||(Zi=1,(function(s){const e=vs();function t(i,r,o){i.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=o,r.width=o,r.style.height=o+"px",r.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}s.render=function(r,o,a){let c=a,d=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(d=n()),c=e.getOptions(c);const l=e.getImageWidth(r.modules.size,c),u=d.getContext("2d"),p=u.createImageData(l,l);return e.qrToImageData(p.data,r,c),t(u,d,l),u.putImageData(p,0,0),d},s.renderToDataURL=function(r,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const d=s.render(r,o,c),l=c.type||"image/png",u=c.rendererOpts||{};return d.toDataURL(l,u.quality)}})(zt)),zt}var Yt={},Xi;function qr(){if(Xi)return Yt;Xi=1;const s=vs();function e(i,r){const o=i.a/255,a=r+'="'+i.hex+'"';return o<1?a+" "+r+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function t(i,r,o){let a=i+r;return typeof o<"u"&&(a+=" "+o),a}function n(i,r,o){let a="",c=0,d=!1,l=0;for(let u=0;u<i.length;u++){const p=Math.floor(u%r),m=Math.floor(u/r);!p&&!d&&(d=!0),i[u]?(l++,u>0&&p>0&&i[u-1]||(a+=d?t("M",p+o,.5+m+o):t("m",c,0),c=0,d=!1),p+1<r&&i[u+1]||(a+=t("h",l),l=0)):c++}return a}return Yt.render=function(r,o,a){const c=s.getOptions(o),d=r.modules.size,l=r.modules.data,u=d+c.margin*2,p=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",m="<path "+e(c.color.dark,"stroke")+' d="'+n(l,d,c.margin)+'"/>',y='viewBox="0 0 '+u+" "+u+'"',k='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+y+' shape-rendering="crispEdges">'+p+m+`</svg>
`;return typeof a=="function"&&a(null,k),k},Yt}var es;function Vr(){if(es)return Le;es=1;const s=Rr(),e=Gr(),t=jr(),n=qr();function i(r,o,a,c,d){const l=[].slice.call(arguments,1),u=l.length,p=typeof l[u-1]=="function";if(!p&&!s())throw new Error("Callback required as last argument");if(p){if(u<2)throw new Error("Too few arguments provided");u===2?(d=a,a=o,o=c=void 0):u===3&&(o.getContext&&typeof d>"u"?(d=c,c=void 0):(d=c,c=a,a=o,o=void 0))}else{if(u<1)throw new Error("Too few arguments provided");return u===1?(a=o,o=c=void 0):u===2&&!o.getContext&&(c=a,a=o,o=void 0),new Promise(function(m,y){try{const C=e.create(a,c);m(r(C,o,c))}catch(C){y(C)}})}try{const m=e.create(a,c);d(null,r(m,o,c))}catch(m){d(m)}}return Le.create=e.create,Le.toCanvas=i.bind(null,t.render),Le.toDataURL=i.bind(null,t.renderToDataURL),Le.toString=i.bind(null,function(r,o,a){return n.render(r,a)}),Le}var Wr=Vr();const Jr=fs(Wr);let ht=null;async function Qt(s){if(ht)return ht;try{return ht=await Jr.toDataURL(s,{width:260,margin:2,color:{dark:"#1e130c",light:"#fffdf7"}}),ht}catch(e){return console.error("QR Code generation error:",e),""}}function zr(s,e,t){return`
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
  `}function Kr(s,e,t,n){const{isConnected:i,roomCode:r,myPlayerId:o,isHost:a,players:c,errorMsg:d,gameMode:l="2p"}=e,u=l==="4p"||e.mode==="4p";let p="";if(r){const m=u?c.length>=4:c.length>=2,y=c.length>=2,k=`https://api.whatsapp.com/send?text=${encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta cowrie board match! 🐚
Board Number: ${r}
Tap here to join immediately on your mobile: ${n}`)}`;p=`
      <div class="mp-room-active">
        <!-- Guaranteed Non-Repeating Board Number Hero Card -->
        <div class="board-number-hero-card">
          <div class="bn-badge-tag">🎯 GUARANTEED BOARD NUMBER</div>
          <div class="bn-code-row">
            <span class="bn-digits" id="text-board-number">${r}</span>
            <button class="btn-copy-bn" id="btn-copy-board-number" title="Copy Board Number">📋 Copy</button>
          </div>
          <span class="bn-subhint">Guaranteed unique board number — will never repeat in match history!</span>
        </div>

        <!-- 1-Tap Quick Share Actions -->
        <div class="mp-quick-actions-bar">
          <a href="${k}" target="_blank" class="btn-whatsapp-share" id="btn-share-whatsapp" rel="noopener noreferrer">
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
            <h4>👥 Board Players (${c.length} / ${u?"4":"2"}):</h4>
            <span class="slots-mode-tag">${u?"4-Player 2v2 Teams":"2-Player 1v1"}</span>
          </div>

          <div class="mp-player-chips">
            ${c.map(_=>`
              <div class="mp-player-chip ${_.id===o?"mp-chip-me":""}">
                <span class="chip-avatar">${_.team===1?_.id===1?"👑":"🦁":_.id===2?"🦚":"🦜"}</span>
                <div class="chip-details">
                  <span class="chip-name">${_.name}</span>
                  <span class="chip-team">Team ${_.team} ${_.id===o?"(You)":""}</span>
                </div>
              </div>
            `).join("")}

            ${u&&c.length<4?`
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
        ${u&&y&&c.length<4?`
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

        ${!m&&(!u||c.length<2)?`
          <div class="mp-waiting-notice">
            <div class="waiting-spinner">⏳</div>
            <p>Waiting for your friend to open the link or enter Board Number on their phone...</p>
          </div>
        `:m?`
          <div class="mp-ready-notice">
            <span>🎉 All players connected! Board match is active in real time.</span>
          </div>
        `:""}
      </div>
    `}else p=`
      <div class="mp-setup-tabs">
        <div class="mp-tab-content">
          ${d?`<div class="mp-error-banner">⚠️ ${d}</div>`:""}
          
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
          ${r?`
            <button class="btn-icon btn-leave-room" id="btn-leave-room">Leave Board</button>
            <button class="btn-primary" id="btn-mp-play-now">Start Playing!</button>
          `:`
            <button class="btn-primary" id="btn-modal-mp-close">Close</button>
          `}
        </div>
      </div>
    </div>
  `}const Cs=[{emoji:"🎲",label:"బాఱ! (Baara 12!)",text:"బాఱ! (Baara 12!) 🎲"},{emoji:"💥",label:"కట్టా! (Katta!)",text:"కట్టా! (Katta Strike!) 💥"},{emoji:"👏",label:"Good Move!",text:"Super move, friend! 👏"},{emoji:"🏃",label:"Catch me!",text:"Catch my coin if you can! 🏃"},{emoji:"⏳",label:"Hurry up!",text:"Hurry up, timer is running! ⏳"},{emoji:"😂",label:"Haha!",text:"Haha! Better luck next roll! 😂"},{emoji:"🤝",label:"Good match!",text:"Great game! Good match! 🤝"},{emoji:"🔥",label:"I will win!",text:"Center Home is mine! 🔥"}],Yr=["😀","😂","🤣","😎","🥳","🔥","👏","🎲","💥","🏃","⏳","👑","🪙","🤝","🎯","🤩"];function Qr(s,e=[],t=1){const n=e.length===0?'<div class="chat-empty-state">💬 Send a smiley, village taunt, or chat message!</div>':e.map(i=>{const r=i.senderId===t;return`
          <div class="chat-msg-row ${r?"msg-me":"msg-friend"}">
            <span class="msg-sender">${r?"You":i.senderName}:</span>
            <span class="msg-bubble">${rn(i.text)}</span>
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
              ${Yr.map(i=>`
                <button class="btn-smiley-chip" data-emoji="${i}" title="${i}">${i}</button>
              `).join("")}
            </div>
          </div>

          <!-- Quick Village Taunts -->
          <div class="quick-taunts-section">
            <div class="quick-taunts-title">⚡ Quick Village Taunts:</div>
            <div class="quick-taunts-grid">
              ${Cs.map((i,r)=>`
                <button class="btn-quick-taunt" data-taunt-index="${r}">
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
  `}function Zr(s){return s?`
    <div class="floating-chat-bubble animated-bubble">
      <span class="bubble-avatar">💬</span>
      <div class="bubble-content">
        <span class="bubble-sender">${rn(s.senderName)}:</span>
        <span class="bubble-text">${rn(s.text)}</span>
      </div>
    </div>
  `:""}function rn(s){return s?s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}const Zt="bharakhatta_coins_wallet",Xt=1e3,Xr=500,eo=100,kn=[100,250,500,1e3,2500,5e3];class to{constructor(){this.balance=this.loadBalance()}loadBalance(){try{const e=localStorage.getItem(Zt);if(e!==null){const t=parseInt(e,10);if(!isNaN(t)&&t>=0)return t}return localStorage.setItem(Zt,Xt.toString()),Xt}catch{return Xt}}saveBalance(){try{localStorage.setItem(Zt,this.balance.toString())}catch{}}getBalance(){return this.balance}canAfford(e){return this.balance>=e}placeBet(e){return this.canAfford(e)?(this.balance-=e,this.saveBalance(),!0):!1}awardPot(e){return this.balance+=e,this.saveBalance(),this.balance}addCoins(e){return this.balance+=Math.max(0,e),this.saveBalance(),this.balance}claimRefill(){return this.balance<eo?(this.balance+=Xr,this.saveBalance(),!0):!1}}const K=new to;function no(s,e,t=250,n="solo"){const i=t*2,r=e>=t;return`
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
              ${kn.map(o=>{const a=o===t,c=e>=o;return`
                  <button class="bet-chip ${a?"bet-chip-selected":""} ${c?"":"bet-chip-disabled"}"
                          data-bet-amount="${o}" ${c?"":"disabled"}>
                    <span class="chip-coin-icon">🪙</span>
                    <span class="chip-amount">${o>=1e3?o/1e3+"K":o}</span>
                  </button>
                `}).join("")}
            </div>
          </div>

          ${r?"":`
            <div class="bet-error-msg">⚠️ Insufficient coins for this bet. Select a lower bet or claim your bonus!</div>
          `}
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-confirm-bet" id="btn-confirm-bet" ${r?"":"disabled"}>
            ⚔️ Start Match (Bet 🪙${t})
          </button>
        </div>
      </div>
    </div>
  `}class io{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return so(e).buffer}}function so(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s){const r=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(r,n),n+=i.byteLength}return t}function Ss(s){return new ro(s).unpack()}function Ts(s){const e=new oo,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class ro{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(o);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class oo{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const r=this.pack(e[i]);return r instanceof Promise?r.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,r=Math.floor(i*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>i(r+1))}return i(r+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new io,this._textEncoder=new TextEncoder}}let ks=!0,_s=!0;function Qe(s,e,t){const n=s.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Ae(s,e,t){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){_n("Unable to polyfill events");return}const i=s.RTCPeerConnection.prototype,r=i.addEventListener;i.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const d=l=>{const u=t(l);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,d),r.apply(this,[a,d])};const o=i.removeEventListener;i.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const d=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,d])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function ao(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(ks=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function co(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(_s=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function _n(){if(typeof window=="object"){if(ks)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Rn(s,e){_s&&console.warn(s+" is deprecated, please use "+e+" instead.")}function lo(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n){const i=parseInt(n.version,10);if(i>=90)return{browser:"chrome",version:i}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Qe(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Qe(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Qe(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=Qe(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function ts(s){return Object.prototype.toString.call(s)==="[object Object]"}function Rs(s){return ts(s)?Object.keys(s).reduce(function(e,t){const n=ts(s[t]),i=n?Rs(s[t]):s[t],r=n&&!Object.keys(i).length;return i===void 0||r?e:Object.assign(e,{[t]:i})},{}):s}function on(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?on(s,s.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{on(s,s.get(i),t)})}))}function ns(s,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const r=[];return s.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{s.forEach(a=>{a.type===n&&a.trackId===o.id&&on(s,a,i)})}),i}const is=_n;function Ms(s,e){if(e.version>=64)return;const t=s&&s.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(d=>{if(d==="require"||d==="advanced"||d==="mediaSource")return;const l=typeof a[d]=="object"?a[d]:{ideal:a[d]};l.exact!==void 0&&typeof l.exact=="number"&&(l.min=l.max=l.exact);const u=function(p,m){return p?p+m.charAt(0).toUpperCase()+m.slice(1):m==="deviceId"?"sourceId":m};if(l.ideal!==void 0){c.optional=c.optional||[];let p={};typeof l.ideal=="number"?(p[u("min",d)]=l.ideal,c.optional.push(p),p={},p[u("max",d)]=l.ideal,c.optional.push(p)):(p[u("",d)]=l.ideal,c.optional.push(p))}l.exact!==void 0&&typeof l.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",d)]=l.exact):["min","max"].forEach(p=>{l[p]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(p,d)]=l[p])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},i=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const d=function(l,u,p){u in l&&!(p in l)&&(l[p]=l[u],delete l[u])};a=JSON.parse(JSON.stringify(a)),d(a.audio,"autoGainControl","googAutoGainControl"),d(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let d=a.video.facingMode;d=d&&(typeof d=="object"?d:{ideal:d});const l=e.version<66;if(d&&(d.exact==="user"||d.exact==="environment"||d.ideal==="user"||d.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!l)){delete a.video.facingMode;let u;if(d.exact==="environment"||d.ideal==="environment"?u=["back","rear"]:(d.exact==="user"||d.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(p=>{p=p.filter(y=>y.kind==="videoinput");let m=p.find(y=>u.some(C=>y.label.toLowerCase().includes(C)));return!m&&p.length&&u.includes("back")&&(m=p[p.length-1]),m&&(a.video.deviceId=d.exact?{exact:m.deviceId}:{ideal:m.deviceId}),a.video=n(a.video),is("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return is("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,d){i(a,l=>{t.webkitGetUserMedia(l,c,u=>{d&&d(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,d=>a(d).then(l=>{if(d.audio&&!l.getAudioTracks().length||d.video&&!l.getVideoTracks().length)throw l.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return l},l=>Promise.reject(r(l))))}}}function Ps(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function Is(s,e){if(!(e.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",r=>{let o;s.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)}),i.stream.getTracks().forEach(r=>{let o;s.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Ae(s,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Es(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(i,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=i.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:i}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(a,c){let d=i.apply(this,arguments);return d||(d=e(this,a),this._senders.push(d)),d};const r=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function xs(s,e){if(e.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const n=s.RTCPeerConnection.prototype.getSenders;n&&(s.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const i=s.RTCPeerConnection.prototype.addTrack;i&&(s.RTCPeerConnection.prototype.addTrack=function(){const o=i.apply(this,arguments);return o._pc=this,o}),s.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>ns(a,o.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const n=s.RTCPeerConnection.prototype.getReceivers;n&&(s.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),Ae(s,"track",i=>(i.receiver._pc=i.srcElement,i)),s.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>ns(o,r.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const t=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const i=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===i&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===i&&(o?a=!0:o=c),c.track===i)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function As(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(d=>{if(this.getSenders().find(u=>u.track===d))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(d=>a.indexOf(d)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const i=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),i.apply(this,arguments)}}function Bs(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return As(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const l=t.apply(this);return this._reverseStreams=this._reverseStreams||{},l.map(u=>this._reverseStreams[u.id])};const n=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(l){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},l.getTracks().forEach(u=>{if(this.getSenders().find(m=>m.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[l.id]){const u=new s.MediaStream(l.getTracks());this._streams[l.id]=u,this._reverseStreams[u.id]=l,l=u}n.apply(this,[l])};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(l){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[l.id]||l]),delete this._reverseStreams[this._streams[l.id]?this._streams[l.id].id:l.id],delete this._streams[l.id]},s.RTCPeerConnection.prototype.addTrack=function(l,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const p=[].slice.call(arguments,1);if(p.length!==1||!p[0].getTracks().find(C=>C===l))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(C=>C.track===l))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const y=this._streams[u.id];if(y)y.addTrack(l),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const C=new s.MediaStream([l]);this._streams[u.id]=C,this._reverseStreams[C.id]=u,this.addStream(C)}return this.getSenders().find(C=>C.track===l)};function r(d,l){let u=l.sdp;return Object.keys(d._reverseStreams||[]).forEach(p=>{const m=d._reverseStreams[p],y=d._streams[m.id];u=u.replace(new RegExp(y.id,"g"),m.id)}),new RTCSessionDescription({type:l.type,sdp:u})}function o(d,l){let u=l.sdp;return Object.keys(d._reverseStreams||[]).forEach(p=>{const m=d._reverseStreams[p],y=d._streams[m.id];u=u.replace(new RegExp(m.id,"g"),y.id)}),new RTCSessionDescription({type:l.type,sdp:u})}["createOffer","createAnswer"].forEach(function(d){const l=s.RTCPeerConnection.prototype[d],u={[d](){const p=arguments;return arguments.length&&typeof arguments[0]=="function"?l.apply(this,[y=>{const C=r(this,y);p[0].apply(null,[C])},y=>{p[1]&&p[1].apply(null,y)},arguments[2]]):l.apply(this,arguments).then(y=>r(this,y))}};s.RTCPeerConnection.prototype[d]=u[d]});const a=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const d=c.get.apply(this);return d.type===""?d:r(this,d)}}),s.RTCPeerConnection.prototype.removeTrack=function(l){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!l._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(l._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let p;Object.keys(this._streams).forEach(m=>{this._streams[m].getTracks().find(C=>l.track===C)&&(p=this._streams[m])}),p&&(p.getTracks().length===1?this.removeStream(this._reverseStreams[p.id]):p.removeTrack(l.track),this.dispatchEvent(new Event("negotiationneeded")))}}function an(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]})}function ws(s,e){e.version>102||Ae(s,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const ss=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:ws,shimAddTrackRemoveTrack:Bs,shimAddTrackRemoveTrackWithNative:As,shimGetSendersWithDtmf:Es,shimGetUserMedia:Ms,shimMediaStream:Ps,shimOnTrack:Is,shimPeerConnection:an,shimSenderReceiverGetStats:xs},Symbol.toStringTag,{value:"Module"}));function $s(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const n=s&&s.MediaStreamTrack;if(t.getUserMedia=function(i,r,o){Rn("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o.audio,"autoGainControl","mozAutoGainControl"),i(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function uo(s,e){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(n)}))}function Os(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function cn(s,e){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]}))}function Ns(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(d=>{d.type=t[d.type]||d.type})}catch(d){if(d.name!=="TypeError")throw d;c.forEach((l,u)=>{c.set(u,Object.assign({},l,{type:t[l.type]||l.type}))})}return c}).then(o,a)}}function Ls(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Ds(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),Ae(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Fs(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){Rn("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Hs(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function Us(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.addTransceiver;t&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const r=i.length>0;r&&i.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=i,a.sendEncodings=i,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function Gs(s,e){if(!(typeof s=="object"&&s.RTCRtpSender)||e.version>=110)return;const t=s.RTCRtpSender.prototype.getParameters;t&&(s.RTCRtpSender.prototype.getParameters=function(){const i=t.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function js(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function qs(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const rs=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Us,shimCreateAnswer:qs,shimCreateOffer:js,shimGetDisplayMedia:uo,shimGetParameters:Gs,shimGetStats:Ns,shimGetUserMedia:$s,shimOnTrack:Os,shimPeerConnection:cn,shimRTCDataChannel:Hs,shimReceiverGetStats:Ds,shimRemoveStream:Fs,shimSenderGetStats:Ls},Symbol.toStringTag,{value:"Module"}));function Vs(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},s.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(r=>{i.includes(r.track)&&this.removeTrack(r)})})}}function Ws(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const r=new Event("addstream");r.stream=i,this.dispatchEvent(r)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Js(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(d,l){const u=arguments.length>=2?arguments[2]:arguments[0],p=t.apply(this,[u]);return l?(p.then(d,l),Promise.resolve()):p},e.createAnswer=function(d,l){const u=arguments.length>=2?arguments[2]:arguments[0],p=n.apply(this,[u]);return l?(p.then(d,l),Promise.resolve()):p};let a=function(c,d,l){const u=i.apply(this,[c]);return l?(u.then(d,l),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,d,l){const u=r.apply(this,[c]);return l?(u.then(d,l),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,d,l){const u=o.apply(this,[c]);return l?(u.then(d,l),Promise.resolve()):u},e.addIceCandidate=a}function zs(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(Ks(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,i,r){e.mediaDevices.getUserMedia(n).then(i,r)}).bind(e))}function Ks(s){return s&&s.video!==void 0?Object.assign({},s,{video:Rs(s.video)}):s}function Ys(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(Rn("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,i)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Qs(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Zs(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Xs(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const os=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Xs,shimCallbacksAPI:Js,shimConstraints:Ks,shimCreateOfferLegacy:Zs,shimGetUserMedia:zs,shimLocalStreamsAPI:Vs,shimRTCIceServerUrls:Ys,shimRemoteStreamsAPI:Ws,shimTrackEventTransceiver:Qs},Symbol.toStringTag,{value:"Module"}));var en={exports:{}},as;function ho(){return as||(as=1,(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((i,r)=>(r>0?"m="+i:i).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(i=>i.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const i={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":i.relatedAddress=n[r+1];break;case"rport":i.relatedPort=parseInt(n[r+1],10);break;case"tcptype":i.tcpType=n[r+1];break;case"ufrag":i.ufrag=n[r+1],i.usernameFragment=n[r+1];break;default:i[n[r]]===void 0&&(i[n[r]]=n[r+1]);break}return i},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const i=t.component;i==="rtp"?n.push(1):i==="rtcp"?n.push(2):n.push(i),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const i={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),i.name=n[0],i.clockRate=parseInt(n[1],10),i.channels=n.length===3?parseInt(n[2],10):1,i.numChannels=i.channels,i},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const i=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(i!==1?"/"+i:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let i;const r=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<r.length;o++)i=r[o].trim().split("="),n[i[0].trim()]=i[1];return n},e.writeFmtp=function(t){let n="",i=t.payloadType;if(t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),n+="a=fmtp:"+i+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",i=t.payloadType;return t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+i+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),i={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(i.attribute=t.substring(n+1,r),i.value=t.substring(r+1)):i.attribute=t.substring(n+1),i},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(i=>parseInt(i,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let i="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{i+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),i},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const i=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return i&&r?{usernameFragment:i.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],d=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(d){const l=e.parseRtpMap(d),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(l.parameters=u.length?e.parseFmtp(u[0]):{},l.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(l),l.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(l.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(l=>l.type===c.type&&l.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{i+=e.writeRtpMap(o),i+=e.writeFmtp(o),i+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(i+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{i+=e.writeExtmap(o)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),r=i.fecMechanisms.indexOf("RED")!==-1,o=i.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(p=>e.parseSsrcMedia(p)).filter(p=>p.attribute==="cname"),c=a.length>0&&a[0].ssrc;let d;const l=e.matchPrefix(t,"a=ssrc-group:FID").map(p=>p.substring(17).split(" ").map(y=>parseInt(y,10)));l.length>0&&l[0].length>1&&l[0][0]===c&&(d=l[0][1]),i.codecs.forEach(p=>{if(p.name.toUpperCase()==="RTX"&&p.parameters.apt){let m={ssrc:c,codecPayloadType:parseInt(p.parameters.apt,10)};c&&d&&(m.rtx={ssrc:d}),n.push(m),r&&(m=JSON.parse(JSON.stringify(m)),m.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(m))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(p=>{p.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const i=e.matchPrefix(t,"a=msid:");if(i.length===1)return n=i[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),i=e.matchPrefix(t,"a=max-message-size:");let r;i.length>0&&(r=parseInt(i[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let i=[];return t.protocol!=="DTLS/SCTP"?i=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:i=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&i.push("a=max-message-size:"+n.maxMessageSize+`\r
`),i.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,i){let r;const o=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(i||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let r=0;r<i.length;r++)switch(i[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},s.exports=e})(en)),en.exports}var er=ho();const He=fs(er),po=lr({__proto__:null,default:He},[er]);function mt(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),r=He.parseCandidate(n.candidate);for(const o in r)o in i||Object.defineProperty(i,o,{value:r[o]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},s.RTCIceCandidate.prototype=e.prototype,Ae(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function ln(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||Ae(s,"icecandidate",e=>{if(e.candidate){const t=He.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function ft(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=He.splitSections(a.sdp);return c.shift(),c.some(d=>{const l=He.parseMLine(d);return l&&l.kind==="application"&&l.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const d=parseInt(c[1],10);return d!==d?-1:d},i=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let d=65536;e.browser==="firefox"&&e.version===57&&(d=65535);const l=He.matchPrefix(a.sdp,"a=max-message-size:");return l.length>0?d=parseInt(l[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(d=2147483637),d},o=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),d=i(c),l=r(arguments[0],c);let u;d===0&&l===0?u=Number.POSITIVE_INFINITY:d===0||l===0?u=Math.max(d,l):u=Math.min(d,l);const p={};Object.defineProperty(p,"maxMessageSize",{get(){return u}}),this._sctp=p}return o.apply(this,arguments)}}function gt(s,e){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(i,r){const o=i.send;i.send=function(){const c=arguments[0],d=c.length||c.size||c.byteLength;if(i.readyState==="open"&&r.sctp&&d>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(i,arguments)}}const n=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Ae(s,"datachannel",i=>(t(i.channel,i.target),i))}function dn(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const r=i.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",i);r.dispatchEvent(o)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function un(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=i.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&i instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:i.type,sdp:r}):i.sdp=r}return t.apply(this,arguments)}}function bt(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function yt(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const mo=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:un,shimAddIceCandidateNullOrEmpty:bt,shimConnectionState:dn,shimMaxMessageSize:ft,shimParameterlessSetLocalDescription:yt,shimRTCIceCandidate:mt,shimRTCIceCandidateRelayProtocol:ln,shimSendThrowTypeError:gt},Symbol.toStringTag,{value:"Module"}));function fo({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=_n,n=lo(s),i={browserDetails:n,commonShim:mo,extractVersion:Qe,disableLog:ao,disableWarnings:co,sdp:po};switch(n.browser){case"chrome":if(!ss||!an||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=ss,bt(s,n),yt(s),Ms(s,n),Ps(s),an(s,n),Is(s,n),Bs(s,n),Es(s),xs(s,n),ws(s,n),mt(s),ln(s),dn(s),ft(s,n),gt(s,n),un(s,n);break;case"firefox":if(!rs||!cn||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=rs,bt(s,n),yt(s),$s(s,n),cn(s,n),Ns(s,n),Os(s),Fs(s),Ls(s),Ds(s),Hs(s),Us(s,n),Gs(s,n),js(s,n),qs(s,n),mt(s),dn(s),ft(s,n),gt(s,n);break;case"safari":if(!os||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=os,bt(s,n),yt(s),Ys(s),Zs(s),Js(s),Vs(s),Ws(s),Qs(s),zs(s),Xs(s),mt(s),ln(s),ft(s,n),gt(s,n),un(s,n);break;default:t("Unsupported browser!");break}return i}const cs=fo({window:typeof window>"u"?void 0:window});function Be(s,e,t,n){Object.defineProperty(s,e,{get:t,set:n,enumerable:!0,configurable:!0})}class tr{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),d={__peerData:this._dataCount,n:r,data:c,total:i};t.push(d),o=a,r++}return this._dataCount++,t}}}function go(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s)t.set(i,n),n+=i.byteLength;return t}const tn=cs.default||cs,Ke=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return tn.browserDetails.browser}getVersion(){return tn.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=tn.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},bo=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),nr=()=>Math.random().toString(36).slice(2),ls={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class yo extends tr{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=ls,this.browser=Ke.getBrowser(),this.browserVersion=Ke.getVersion(),this.pack=Ts,this.unpack=Ss,this.supports=(function(){const t={browser:Ke.isBrowserSupported(),webRTC:Ke.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(ls),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Ke.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=bo,this.randomToken=nr}}const fe=new yo,vo="PeerJS: ";class Co{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[vo,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var I=new Co,Mn={},So=Object.prototype.hasOwnProperty,he="~";function et(){}Object.create&&(et.prototype=Object.create(null),new et().__proto__||(he=!1));function To(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function ir(s,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new To(t,n||s,i),o=he?he+e:e;return s._events[o]?s._events[o].fn?s._events[o]=[s._events[o],r]:s._events[o].push(r):(s._events[o]=r,s._eventsCount++),s}function vt(s,e){--s._eventsCount===0?s._events=new et:delete s._events[e]}function de(){this._events=new et,this._eventsCount=0}de.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)So.call(t,n)&&e.push(he?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};de.prototype.listeners=function(e){var t=he?he+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,o=new Array(r);i<r;i++)o[i]=n[i].fn;return o};de.prototype.listenerCount=function(e){var t=he?he+e:e,n=this._events[t];return n?n.fn?1:n.length:0};de.prototype.emit=function(e,t,n,i,r,o){var a=he?he+e:e;if(!this._events[a])return!1;var c=this._events[a],d=arguments.length,l,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),d){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,r),!0;case 6:return c.fn.call(c.context,t,n,i,r,o),!0}for(u=1,l=new Array(d-1);u<d;u++)l[u-1]=arguments[u];c.fn.apply(c.context,l)}else{var p=c.length,m;for(u=0;u<p;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),d){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,i);break;default:if(!l)for(m=1,l=new Array(d-1);m<d;m++)l[m-1]=arguments[m];c[u].fn.apply(c[u].context,l)}}return!0};de.prototype.on=function(e,t,n){return ir(this,e,t,n,!1)};de.prototype.once=function(e,t,n){return ir(this,e,t,n,!0)};de.prototype.removeListener=function(e,t,n,i){var r=he?he+e:e;if(!this._events[r])return this;if(!t)return vt(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&vt(this,r);else{for(var a=0,c=[],d=o.length;a<d;a++)(o[a].fn!==t||i&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:vt(this,r)}return this};de.prototype.removeAllListeners=function(e){var t;return e?(t=he?he+e:e,this._events[t]&&vt(this,t)):(this._events=new et,this._eventsCount=0),this};de.prototype.off=de.prototype.removeListener;de.prototype.addListener=de.prototype.on;de.prefixed=he;de.EventEmitter=de;Mn=de;var we={};Be(we,"ConnectionType",()=>Me);Be(we,"PeerErrorType",()=>se);Be(we,"BaseConnectionErrorType",()=>hn);Be(we,"DataConnectionErrorType",()=>Pn);Be(we,"SerializationType",()=>Tt);Be(we,"SocketEventType",()=>Re);Be(we,"ServerMessageType",()=>le);var Me=(function(s){return s.Data="data",s.Media="media",s})({}),se=(function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s})({}),hn=(function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s})({}),Pn=(function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s})({}),Tt=(function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s})({}),Re=(function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s})({}),le=(function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s})({});const sr="1.5.5";class ko extends Mn.EventEmitter{constructor(e,t,n,i,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+i+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+sr),this._disconnected=!1,this._socket.onmessage=i=>{let r;try{r=JSON.parse(i.data),I.log("Server message received:",r)}catch{I.log("Invalid server message",i.data);return}this.emit(Re.Message,r)},this._socket.onclose=i=>{this._disconnected||(I.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(Re.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),I.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){I.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:le.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Re.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class rr{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Me.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},r=t.createDataChannel(n.label,i);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){I.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,r=this.connection.provider;I.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(I.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:le.Candidate,payload:{candidate:o.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":I.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(hn.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":I.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(hn.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":I.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},I.log("Listening for data channel"),e.ondatachannel=o=>{I.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},I.log("Listening for remote stream"),e.ontrack=o=>{I.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===Me.Media){const d=c;this._addStreamToMediaConnection(a,d)}}}cleanup(){I.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);I.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),I.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Me.Data){const r=this.connection;i={...i,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:le.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(se.WebRTC,i),I.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(se.WebRTC,n),I.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();I.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),I.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:le.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(se.WebRTC,i),I.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(se.WebRTC,n),I.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;I.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),I.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){i.emitError(se.WebRTC,o),I.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){I.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),I.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(se.WebRTC,t),I.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(I.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return I.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){I.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class or extends Mn.EventEmitter{emitError(e,t){I.error("Error:",t),this.emit("error",new _o(`${e}`,t))}}class _o extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class ar extends or{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var gn;const Ze=class Ze extends ar{get type(){return Me.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Ze.ID_PREFIX+fe.randomToken(),this._negotiator=new rr(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{I.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{I.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){I.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case le.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case le.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:I.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){I.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};gn=new WeakMap,Je(Ze,gn,Ze.ID_PREFIX="mc_");let Ct=Ze;class Ro{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${i}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",sr),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){I.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==fe.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===fe.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw I.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var bn,yn;const Pe=class Pe extends ar{get type(){return Me.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Pe.ID_PREFIX+nr(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new rr(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{I.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{I.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{I.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Pn.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case le.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case le.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:I.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};bn=new WeakMap,yn=new WeakMap,Je(Pe,bn,Pe.ID_PREFIX="dc_"),Je(Pe,yn,Pe.MAX_BUFFERED_AMOUNT=8388608);let St=Pe;class In extends St{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>St.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return I.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class nn extends In{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new tr,this.serialization=Tt.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Ss(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=go(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=Ts(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);I.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Mo extends In{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Tt.None}}class Po extends In{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=fe.chunkedMTU){this.emitError(Pn.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Tt.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var vn;const Xe=class Xe extends or{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Mo,json:Po,binary:nn,"binary-utf8":nn,default:nn},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:fe.CLOUD_HOST,port:fe.CLOUD_PORT,path:"/",key:Xe.DEFAULT_KEY,token:fe.randomToken(),config:fe.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==fe.CLOUD_HOST?this._options.secure=fe.isSecure():this._options.host==fe.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&I.setLogFunction(this._options.logFunction),I.logLevel=this._options.debug||0,this._api=new Ro(t),this._socket=this._createServerConnection(),!fe.supports.audioVideo&&!fe.supports.data){this._delayedAbort(se.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!fe.validateId(n)){this._delayedAbort(se.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(se.ServerError,i))}_createServerConnection(){const e=new ko(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Re.Message,t=>{this._handleMessage(t)}),e.on(Re.Error,t=>{this._abort(se.SocketError,t)}),e.on(Re.Disconnected,()=>{this.disconnected||(this.emitError(se.Network,"Lost connection to server."),this.disconnect())}),e.on(Re.Close,()=>{this.disconnected||this._abort(se.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case le.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case le.Error:this._abort(se.ServerError,n.msg);break;case le.IdTaken:this._abort(se.UnavailableID,`ID "${this.id}" is taken`);break;case le.InvalidKey:this._abort(se.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case le.Leave:I.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case le.Expire:this.emitError(se.PeerUnavailable,`Could not connect to peer ${i}`);break;case le.Offer:{const r=n.connectionId;let o=this.getConnection(i,r);if(o&&(o.close(),I.warn(`Offer received for existing Connection ID:${r}`)),n.type===Me.Media){const c=new Ct(i,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(i,o),this.emit("call",c)}else if(n.type===Me.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(i,o),this.emit("connection",c)}else{I.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){I.warn(`You received a malformed message from ${i} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(i,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):I.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){I.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(se.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){I.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(se.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){I.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new Ct(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){I.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){I.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(I.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;I.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)I.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)I.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(se.ServerError,t))}};vn=new WeakMap,Je(Xe,vn,Xe.DEFAULT_KEY="peerjs");let pn=Xe;var sn=pn;const ds=sn.Peer||sn.default||sn;function Fe(){let s=[];try{typeof localStorage<"u"&&(s=JSON.parse(localStorage.getItem("bk_used_4digit_codes")||"[]"))}catch{}let e=1;try{if(typeof localStorage<"u"){const n=localStorage.getItem("bk_4digit_seq");n&&(e=parseInt(n,10)+1)}}catch{}let t="";for(let n=0;n<9e3;n++){const i=((e+n)*3137+1729)%9e3+1e3,r=String(i);if(!s.includes(r)){t=r;break}}t||(t=String(Math.floor(1e3+Math.random()*9e3)));try{typeof localStorage<"u"&&(s.push(t),s.length>8500&&(s=s.slice(-2e3)),localStorage.setItem("bk_used_4digit_codes",JSON.stringify(s)),localStorage.setItem("bk_4digit_seq",String(e+1)))}catch{}return t}function us(s){if(!s)return"";let e=s.toString().trim().toUpperCase().replace(/\s+/g,"");const t=e.match(/^(?:BK-?)?(\d{4})$/);return t?t[1]:(!e.startsWith("BK-")&&!e.startsWith("BK")&&(e=`BK-${e}`),e)}const hs={config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}};class Io{constructor(e={}){this.ws=null,this.peer=null,this.peerConn=null,this.mode="auto",this.roomCode=null,this.myPlayerId=null,this.myTeam=null,this.isHost=!1,this.connected=!1,this.hostName="Player 1",this.guestName="Player 2",this.onRoomCreated=e.onRoomCreated||(()=>{}),this.onRoomJoined=e.onRoomJoined||(()=>{}),this.onPlayerJoined=e.onPlayerJoined||(()=>{}),this.onPlayerLeft=e.onPlayerLeft||(()=>{}),this.onSyncRoll=e.onSyncRoll||(()=>{}),this.onSyncMove=e.onSyncMove||(()=>{}),this.onSyncRestart=e.onSyncRestart||(()=>{}),this.onChatReceived=e.onChatReceived||(()=>{}),this.onBetSynced=e.onBetSynced||(()=>{}),this.onSyncTimeoutPass=e.onSyncTimeoutPass||(()=>{}),this.onStart4pAIPair=e.onStart4pAIPair||(()=>{}),this.onSyncGameState=e.onSyncGameState||(()=>{}),this.onGate23Decision=e.onGate23Decision||(()=>{}),this.onForfeit=e.onForfeit||(()=>{}),this.onError=e.onError||(()=>{}),this.onStatusChange=e.onStatusChange||(()=>{}),this.currentBet=250,this.gameMode="2p",this.team1Home=1,this.team2Home=3,this.peerConns=new Set}isP2PPreferred(){const e=window.location.hostname;return e.includes("github.io")||window.location.protocol==="file:"||!e.includes("localhost")&&!e.includes("127.0.0.1")&&!e.includes("192.168.")}connectWS(){return this.ws&&(this.ws.readyState===0||this.ws.readyState===1)?Promise.resolve():new Promise((e,t)=>{try{const n=window.location.protocol==="https:"?"wss:":"ws:",i=window.location.host,r=`${n}//${i}/ws`;this.ws=new WebSocket(r),this.ws.onopen=()=>{this.connected=!0,this.mode="ws",this.onStatusChange("connected"),e()},this.ws.onclose=()=>{this.connected=!1,this.onStatusChange("disconnected")},this.ws.onerror=o=>{console.warn("WebSocket not available, falling back to WebRTC:",o),this.ws=null,t(o)},this.ws.onmessage=o=>{try{const a=JSON.parse(o.data);this.handleMessage(a)}catch(a){console.error("Failed to parse WS message:",a)}}}catch(n){t(n)}})}handleMessage(e){switch(e.type){case"ROOM_CREATED":this.roomCode=e.roomCode,this.myPlayerId=e.playerId,this.myTeam=e.team,this.isHost=!0,this.gameMode=e.mode||"2p",this.team1Home=e.team1Home||1,this.team2Home=e.team2Home||_e(this.team1Home),this.onRoomCreated(e);break;case"ROOM_JOINED":this.roomCode=e.roomCode,this.myPlayerId=e.playerId,this.myTeam=e.team,this.isHost=!1,this.gameMode=e.mode||"2p",this.team1Home=e.team1Home||1,this.team2Home=e.team2Home||_e(this.team1Home),this.onRoomJoined(e);break;case"PLAYER_JOINED":this.onPlayerJoined(e.player,e.players);break;case"PLAYER_LEFT":this.onPlayerLeft(e.playerId,e.players);break;case"ACTION_ROLL":this.onSyncRoll(e.rollResult);break;case"ACTION_MOVE":this.onSyncMove(e.move);break;case"ACTION_RESTART":this.onSyncRestart();break;case"ACTION_CHAT":this.onChatReceived(e);break;case"ROOM_BET":this.currentBet=e.bet,this.onBetSynced(e.bet);break;case"ACTION_TIMEOUT_PASS":this.onSyncTimeoutPass(e);break;case"ACTION_FORFEIT":this.onForfeit(e);break;case"START_4P_AI_PAIR":this.onStart4pAIPair(e);break;case"SYNC_GAME_STATE":this.onSyncGameState(e.state);break;case"GATE_23_DECISION":this.onGate23Decision(e.decision);break;case"ERROR":this.onError(e.message);break}}sendForfeit(e,t=null){this.send({type:"ACTION_FORFEIT",roomCode:this.roomCode,quittingTeam:e||this.myTeam,playerId:t||this.myPlayerId})}async createRoom(e="2p",t="Player 1",n=null,i=null,r=1){if(this.hostName=t,this.hostMeta=i,this.gameMode=e,this.team1Home=parseInt(r,10)||1,this.team2Home=_e(this.team1Home),!this.isP2PPreferred())try{await this.connectWS(),this.send({type:"CREATE_ROOM",mode:e,playerName:t,roomCode:n,userMeta:i,team1Home:this.team1Home});return}catch(c){console.log("WS failed, switching to P2P WebRTC:",c)}this.mode="p2p";const o=n?us(n):Fe(),a=`bk-board-${o.toLowerCase().replace(/[^a-z0-9]/g,"")}`;if(this.peer)try{this.peer.destroy()}catch{}this.peer=new ds(a,hs),this.peer.on("open",()=>{this.roomCode=o,this.myPlayerId=1,this.myTeam=1,this.isHost=!0,this.connected=!0,this.onStatusChange("connected"),this.onRoomCreated({roomCode:o,playerId:1,team:1,mode:e,team1Home:this.team1Home,team2Home:this.team2Home,players:[{id:1,team:1,name:t,isHost:!0}]})}),this.peer.on("connection",c=>{this.peerConn=c,this.peerConns.add(c),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{if(c.open)try{c.send({type:"HEARTBEAT_PING",t:Date.now()})}catch{}},3e3),c.on("open",()=>{}),c.on("data",d=>{var l,u,p;if(d.type==="HEARTBEAT_PING"){try{c.send({type:"HEARTBEAT_PONG"})}catch{}return}if(d.type!=="HEARTBEAT_PONG"){if(this.isHost&&this.peerConns.size>1)for(const m of this.peerConns)m!==c&&m.open&&m.send(d);if(d.type==="JOIN_ROOM"){this.guestName=d.playerName||"Player 2",this.guestMeta={mobile:d.mobile||"",nickName:d.nickName||d.playerName||"Player 2",fullName:d.fullName||d.playerName||"Player 2"};const m=this.gameMode==="4p",y=m?3:2,C=m?1:2,k=[{id:1,team:1,name:this.hostName,isHost:!0},{id:y,team:C,name:this.guestName,isHost:!1}];c.send({type:"ROOM_JOINED",roomCode:o,playerId:y,team:C,mode:this.gameMode,team1Home:this.team1Home,team2Home:this.team2Home,players:k,bet:this.currentBet,hostMobile:((l=this.hostMeta)==null?void 0:l.mobile)||"",hostNick:((u=this.hostMeta)==null?void 0:u.nickName)||this.hostName,hostFullName:((p=this.hostMeta)==null?void 0:p.fullName)||this.hostName}),this.onPlayerJoined({id:y,team:C,name:this.guestName,mobile:d.mobile||"",nickName:d.nickName||this.guestName,fullName:d.fullName||this.guestName},k)}else this.handleMessage(d)}}),c.on("close",()=>{this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.peerConns.delete(c),this.onPlayerLeft(2,[{id:1,team:1,name:this.hostName}])})}),this.peer.on("error",c=>{console.error("PeerJS Host error:",c),c.type==="unavailable-id"?this.createRoom(e,t,null,i):this.onError(`Network error: ${c.message||c.type}`)})}async joinRoom(e,t="Player 2",n=null){this.guestName=t,this.guestMeta=n;const i=us(e);if(!this.isP2PPreferred())try{await this.connectWS(),this.send({type:"JOIN_ROOM",roomCode:i,playerName:t,userMeta:n});return}catch(r){console.log("WS failed, switching to P2P WebRTC:",r)}if(this.mode="p2p",this.peer)try{this.peer.destroy()}catch{}this.peer=new ds(null,hs),this.peer.on("open",()=>{const r=`bk-board-${i.toLowerCase().replace(/[^a-z0-9]/g,"")}`,o=this.peer.connect(r,{reliable:!0});this.peerConn=o,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{if(o.open)try{o.send({type:"HEARTBEAT_PING",t:Date.now()})}catch{}},3e3),o.on("open",()=>{var a,c,d;this.connected=!0,this.onStatusChange("connected"),o.send({type:"JOIN_ROOM",roomCode:i,playerName:t,mobile:((a=this.guestMeta)==null?void 0:a.mobile)||"",nickName:((c=this.guestMeta)==null?void 0:c.nickName)||t,fullName:((d=this.guestMeta)==null?void 0:d.fullName)||t})}),o.on("data",a=>{if(a.type==="HEARTBEAT_PING"){try{o.send({type:"HEARTBEAT_PONG"})}catch{}return}a.type!=="HEARTBEAT_PONG"&&this.handleMessage(a)}),o.on("close",()=>{this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.connected=!1,this.onStatusChange("disconnected"),this.onError("Room host has disconnected.")})}),this.peer.on("error",r=>{console.error("PeerJS Guest error:",r),this.onError(`Could not join Board #${i}. Please ensure host is waiting and try again.`)})}sendStart4pAIPair(){this.roomCode&&this.send({type:"START_4P_AI_PAIR",roomCode:this.roomCode,bet:this.currentBet})}sendRoll(e){this.roomCode&&this.send({type:"ACTION_ROLL",roomCode:this.roomCode,rollResult:e})}sendMove(e){this.roomCode&&this.send({type:"ACTION_MOVE",roomCode:this.roomCode,move:e})}sendRestart(){this.roomCode&&this.send({type:"ACTION_RESTART",roomCode:this.roomCode})}sendChat(e,t="Player"){if(!this.roomCode)return;const n={type:"ACTION_CHAT",roomCode:this.roomCode,senderId:this.myPlayerId,senderName:t,text:e,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.send(n),this.onChatReceived(n)}sendBet(e){this.currentBet=e,this.roomCode&&this.send({type:"ROOM_BET",roomCode:this.roomCode,bet:e})}sendTimeoutPass(e){this.roomCode&&this.send({type:"ACTION_TIMEOUT_PASS",roomCode:this.roomCode,playerId:e})}sendGameState(e){this.roomCode&&this.send({type:"SYNC_GAME_STATE",roomCode:this.roomCode,state:e})}sendGate23Decision(e){this.roomCode&&this.send({type:"GATE_23_DECISION",roomCode:this.roomCode,decision:e})}send(e){if(this.mode==="p2p")if(this.peerConns&&this.peerConns.size>0)for(const t of this.peerConns)t&&t.open&&t.send(e);else this.peerConn&&this.peerConn.open&&this.peerConn.send(e);else this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(e))}leaveRoom(){if(this.roomCode=null,this.myPlayerId=null,this.myTeam=null,this.isHost=!1,this.connected=!1,this.peerConns){for(const e of this.peerConns)try{e.close()}catch{}this.peerConns.clear()}if(this.peerConn){try{this.peerConn.close()}catch{}this.peerConn=null}if(this.peer){try{this.peer.destroy()}catch{}this.peer=null}if(this.ws){try{this.ws.close()}catch{}this.ws=null}}}const pt="bk_current_user_mobile",ps="bk_all_registered_mobiles",Se={getItem(s){try{if(typeof localStorage<"u")return localStorage.getItem(s)}catch{}return null},setItem(s,e){try{typeof localStorage<"u"&&localStorage.setItem(s,e)}catch{}},removeItem(s){try{typeof localStorage<"u"&&localStorage.removeItem(s)}catch{}}};function mn(s,e){if(e&&e.trim())return e.trim();if(!s||!s.trim())return"Player";const t=s.trim().split(/\s+/).filter(Boolean);return t.length===0?"Player":t.map(n=>n[0].toUpperCase()).join("")}const De=[{id:"f_1",mobile:"9876543210",nickName:"Aatikur",fullName:"Aatikur Rahman",avatar:"👤",level:33},{id:"f_2",mobile:"9876543211",nickName:"sumongamingf9c",fullName:"Sumon Gaming",avatar:"🕵️",level:34},{id:"f_3",mobile:"9876543212",nickName:"sarker",fullName:"Sarker Babu",avatar:"😎",level:64},{id:"f_4",mobile:"9876543213",nickName:"king",fullName:"King Kumar",avatar:"🕶️",level:54},{id:"f_5",mobile:"9876543214",nickName:"jogi",fullName:"Jogi Reddy",avatar:"🏯",level:54},{id:"f_6",mobile:"9876543215",nickName:"Sk",fullName:"SK Nayak",avatar:"🤵",level:68}];class Eo{constructor(){this.currentUser=null,this.init()}init(){try{const e=Se.getItem(pt);e&&(this.currentUser=this.loadUserProfile(e),this.currentUser&&(K.balance=this.currentUser.walletBalance??1e3,K.saveBalance()))}catch(e){console.error("Failed to load active user:",e)}}cleanMobile(e){return e?e.toString().replace(/[^0-9]/g,"").slice(-10):""}isRegistered(e){const t=this.cleanMobile(e);return!t||t.length!==10?!1:Se.getItem(`bk_user_${t}`)!==null}loadUserProfile(e){const t=this.cleanMobile(e);if(!t)return null;try{const n=Se.getItem(`bk_user_${t}`);if(n){const i=JSON.parse(n);return i.nickName||(i.nickName=mn(i.fullName||i.name||"","")),i.name=i.nickName,Array.isArray(i.friends)||(i.friends=[...De]),typeof i.lastHourlyRewardClaim!="number"&&(i.lastHourlyRewardClaim=0),i}}catch(n){console.error("Failed to parse user profile:",n)}return null}saveUserProfile(e){if(!(!e||!e.mobile))try{e.walletBalance=K.getBalance(),Se.setItem(`bk_user_${e.mobile}`,JSON.stringify(e))}catch(t){console.error("Failed to save user profile:",t)}}login(e,t="",n="",i=null){const r=this.cleanMobile(e);if(!r||r.length!==10)return{success:!1,error:R("errInvalidMobile")};const o=this.loadUserProfile(r),a=(t||"").trim(),c=i===!0||i===null&&a.length>0;if(!c&&!o)return{success:!1,isNotRegistered:!0,error:R("errUnregistered")};if(c&&!o&&!a)return{success:!1,error:R("errMissingName")};const d=mn(a||(o==null?void 0:o.fullName)||(o==null?void 0:o.name)||"",n);if(o)return o.lastLoginAt=Date.now(),a&&(o.fullName=a),n&&n.trim()?(o.nickName=n.trim(),o.name=o.nickName):o.nickName||(o.nickName=d,o.name=d),Array.isArray(o.friends)||(o.friends=[...De]),this.currentUser=o,Se.setItem(pt,r),K.balance=o.walletBalance??1e3,K.saveBalance(),this.saveUserProfile(this.currentUser),{success:!0,isNewUser:!1,user:this.currentUser,message:`Welcome back, ${this.currentUser.nickName}! (Existing player)`};const l={mobile:r,fullName:a||"Player",nickName:d,name:d,joinedAt:Date.now(),lastLoginAt:Date.now(),walletBalance:1e3,gamesPlayed:0,gamesWon:0,totalKills:0,totalCoinsWon:0,matchHistory:[],friends:[...De],lastHourlyRewardClaim:0};this.currentUser=l,Se.setItem(pt,r);try{const u=JSON.parse(Se.getItem(ps)||"[]");u.includes(r)||(u.push(r),Se.setItem(ps,JSON.stringify(u)))}catch{}return K.balance=1e3,K.saveBalance(),this.saveUserProfile(l),{success:!0,isNewUser:!0,user:l,message:`Welcome, ${l.nickName}! 🪙1,000 joining bonus credited!`}}isLoggedIn(){return this.currentUser!==null}getCurrentUser(){return this.currentUser&&(this.currentUser.walletBalance=K.getBalance()),this.currentUser}recordMatch({matchId:e,tableCode:t,opponent:n,mode:i,bet:r,pot:o,result:a,coinsChange:c,durationSec:d,kills:l}){if(!this.currentUser)return;const u={id:e||`m_${Date.now()}`,tableCode:t||(e?String(e).replace(/[^0-9]/g,"").slice(-4):"1001"),date:new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),mode:i||"1v1 Match",opponent:n||"System AI",bet:r||250,pot:o||500,result:a||"WON",coinsChange:c||0,durationSec:d||0,kills:l||0};this.currentUser.gamesPlayed=(this.currentUser.gamesPlayed||0)+1,a==="WON"&&(this.currentUser.gamesWon=(this.currentUser.gamesWon||0)+1,this.currentUser.totalCoinsWon=(this.currentUser.totalCoinsWon||0)+(o||0)),this.currentUser.totalKills=(this.currentUser.totalKills||0)+(l||0),Array.isArray(this.currentUser.matchHistory)||(this.currentUser.matchHistory=[]),this.currentUser.matchHistory.unshift(u),this.currentUser.matchHistory.length>50&&this.currentUser.matchHistory.pop(),this.saveUserProfile(this.currentUser)}getFriends(e=""){let t=this.currentUser&&Array.isArray(this.currentUser.friends)?this.currentUser.friends:De;if(e&&e.trim()){const n=e.trim().toLowerCase();return t.filter(i=>i.nickName&&i.nickName.toLowerCase().includes(n)||i.fullName&&i.fullName.toLowerCase().includes(n))}return t}addFriendByMobile(e){const t=this.cleanMobile(e);if(!t||t.length!==10)return{success:!1,error:"Please enter a valid 10-digit mobile number."};if(!this.currentUser)return{success:!1,error:"Please login to add friends."};if(this.currentUser.mobile===t)return{success:!1,error:"You cannot add yourself as a friend!"};if(Array.isArray(this.currentUser.friends)||(this.currentUser.friends=[...De]),this.currentUser.friends.some(r=>r.mobile===t))return{success:!1,error:"This friend is already in your list."};const n=this.loadUserProfile(t);let i;if(n)i={id:`f_${Date.now()}`,mobile:t,nickName:n.nickName||n.name||"Friend",fullName:n.fullName||n.name||"Friend",avatar:"👑",level:Math.max(20,(n.gamesPlayed||0)*3+15),addedAt:Date.now()};else{const r=["😎","🕶️","👤","🕵️","🦁","🦚"],o=r[Math.floor(Math.random()*r.length)];i={id:`f_${Date.now()}`,mobile:t,nickName:`Friend ${t.slice(-4)}`,fullName:`Player ${t.slice(-4)}`,avatar:o,level:Math.floor(25+Math.random()*30),addedAt:Date.now()}}return this.currentUser.friends.unshift(i),this.saveUserProfile(this.currentUser),{success:!0,friend:i,message:`Added ${i.nickName} to your friends!`}}addOrUpdateFriend(e){if(!this.currentUser||!e||!e.mobile)return{success:!1,error:"Invalid friend data"};const t=this.cleanMobile(e.mobile);if(!t||t===this.currentUser.mobile)return{success:!1,error:"Cannot add self"};Array.isArray(this.currentUser.friends)||(this.currentUser.friends=[...De]);const n=e.nickName||e.name||`Friend ${t.slice(-4)}`,i=e.fullName||e.name||`Player ${t.slice(-4)}`,r=this.currentUser.friends.findIndex(a=>a.mobile===t);if(r!==-1)return this.currentUser.friends[r].nickName=n,this.currentUser.friends[r].name=n,this.currentUser.friends[r].fullName=i,this.saveUserProfile(this.currentUser),{success:!0,isNew:!1,friend:this.currentUser.friends[r]};const o={id:`f_${Date.now()}_${Math.floor(Math.random()*1e3)}`,mobile:t,nickName:n,name:n,fullName:i,avatar:e.avatar||"👤",level:e.level||Math.floor(25+Math.random()*30),addedAt:Date.now()};return this.currentUser.friends.unshift(o),this.saveUserProfile(this.currentUser),{success:!0,isNew:!0,friend:o}}removeFriend(e){return!this.currentUser||!Array.isArray(this.currentUser.friends)?{success:!1,error:"No friends list found."}:(this.currentUser.friends=this.currentUser.friends.filter(t=>t.id!==e&&t.mobile!==e),this.saveUserProfile(this.currentUser),{success:!0})}getHourlyRewardStatus(){var o;const t=((o=this.currentUser)==null?void 0:o.lastHourlyRewardClaim)||0,i=Date.now()-t;return t===0||i>=36e5?{canClaim:!0,secondsLeft:0,rewardAmount:500}:{canClaim:!1,secondsLeft:Math.max(0,Math.ceil((36e5-i)/1e3)),rewardAmount:500}}claimHourlyReward(){const e=this.getHourlyRewardStatus();return e.canClaim?(this.currentUser&&(this.currentUser.lastHourlyRewardClaim=Date.now(),this.saveUserProfile(this.currentUser)),K.addCoins(500),{success:!0,reward:500,newBalance:K.getBalance(),message:"🎉 Claimed 500 Free Coins! Next reward in 1 hour."}):{success:!1,error:`Hourly reward available in ${Math.ceil(e.secondsLeft/60)}m.`}}getHistory(){return!this.currentUser||!this.currentUser.matchHistory?[]:this.currentUser.matchHistory}getStats(){if(!this.currentUser)return{gamesPlayed:0,gamesWon:0,winRate:0,totalKills:0,balance:1e3};const e=this.currentUser.gamesPlayed||0,t=this.currentUser.gamesWon||0,n=e>0?Math.round(t/e*100):0;return{gamesPlayed:e,gamesWon:t,winRate:n,totalKills:this.currentUser.totalKills||0,balance:K.getBalance()}}logout(){this.currentUser&&this.saveUserProfile(this.currentUser),this.currentUser=null,Se.removeItem(pt)}}const z=new Eo;function xo(s,e="",t="",n="",i=null,r="login"){const o=r==="login",a=Cn();return`
    <div class="modal-backdrop login-modal-backdrop" id="login-modal-backdrop">
      <div class="modal-dialog modal-login modal-login-redesign">
        <!-- Header with Brand and Instant Language Switcher -->
        <div class="modal-header login-header-styled">
          <div class="login-brand-banner">
            <span class="login-brand-icon">🐚</span>
            <div>
              <h2 class="login-main-title">${R("appTitle")}</h2>
              <span class="login-sub-title">${R("appSubtitle")}</span>
            </div>
          </div>
          <button class="btn-login-lang-toggle" id="btn-login-lang-toggle" title="Switch Language / భాష మార్చండి">
            ${a==="en"?"🌐 తెలుగు":"🌐 English"}
          </button>
        </div>

        <!-- Login / Sign Up Tab Switcher -->
        <div class="login-tabs-bar">
          <button class="btn-login-tab ${o?"tab-active":""}" id="tab-login-btn">
            ${R("tabExistingLogin")}
          </button>
          <button class="btn-login-tab ${o?"":"tab-active"}" id="tab-signup-btn">
            ${R("tabNewSignUp")}
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
              <span>📱 ${R("mobileNumber")}</span>
              <span class="label-badge required">${R("tenDigits")}</span>
            </label>
            <div class="mobile-input-wrapper">
              <span class="country-prefix">+91</span>
              <input 
                type="tel" 
                id="input-login-mobile" 
                class="form-input mobile-input" 
                placeholder="${R("mobilePlaceholder")}" 
                maxlength="10" 
                pattern="[0-9]{10}" 
                value="${e}" 
                autocomplete="tel"
                required
              />
            </div>
            <span class="input-hint">
              ${R(o?"loginMobileHint":"signupMobileHint")}
            </span>
          </div>

          ${o?`
            <!-- Quick Hint for Returning User -->
            <div class="existing-login-hint-box">
              <span>⚡ ${R("loginMobileHint")}</span>
            </div>
          `:`
            <!-- Full Name (Required for Sign Up) -->
            <div class="form-group">
              <label for="input-login-fullname" class="form-label">
                <span>👤 ${R("fullName")}</span>
                <span class="label-badge required">${R("required")}</span>
              </label>
              <input 
                type="text" 
                id="input-login-fullname" 
                class="form-input" 
                placeholder="${R("fullNamePlaceholder")}" 
                maxlength="30"
                value="${t}" 
              />
            </div>

            <!-- Nick Name (Optional for Sign Up) -->
            <div class="form-group">
              <label for="input-login-nickname" class="form-label">
                <span>🏷️ ${R("nickName")}</span>
                <span class="label-badge optional">${R("optional")}</span>
              </label>
              <input 
                type="text" 
                id="input-login-nickname" 
                class="form-input" 
                placeholder="${R("nickNamePlaceholder")}" 
                maxlength="15"
                value="${n}" 
              />
              <div class="nickname-preview-box">
                <span>${R("gameDisplayName")}: </span>
                <strong id="nickname-preview-badge" class="preview-badge">${n||"MR"}</strong>
              </div>
            </div>
          `}
        </div>

        <div class="modal-footer login-footer-centered">
          <button class="btn-primary btn-enter-bharakhatta" id="btn-submit-login">
            ${R(o?"loginSubmitBtn":"signUpSubmitBtn")}
          </button>

          <div class="login-switch-action-row">
            ${o?`
              <span class="switch-prompt">${R("firstTimePrompt")} </span>
              <button class="btn-link-switch" id="link-switch-signup">${R("signUpHere")}</button>
            `:`
              <span class="switch-prompt">${R("alreadyHaveAccount")} </span>
              <button class="btn-link-switch" id="link-switch-login">${R("loginHere")}</button>
            `}
          </div>
        </div>
      </div>
    </div>
  `}function Ao(s=!1,e={}){let t={};typeof s=="boolean"?t={isOpen:s,...e}:typeof s=="object"&&s!==null&&(t=s);const{isOpen:n=!1,playerCount:i=2,selectedBet:r=250,selectedHome:o=1,walletCoins:a=1e3}=t;if(!n)return"";const c=r*2;return`
    <div class="modal-backdrop" id="computer-match-backdrop">
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
              ${kn.map(d=>{const l=d===r,u=a>=d;return`
                  <button 
                    class="btn-cm-bet ${l?"bet-active":""} ${u?"":"bet-disabled"}" 
                    data-bet="${d}"
                    ${u?"":'disabled title="Not enough coins"'}
                  >
                    <span class="bet-chip">🪙</span>
                    <span class="bet-amount">${d.toLocaleString()}</span>
                    <span class="bet-pot">Pot: 🪙${(d*2).toLocaleString()}</span>
                  </button>
                `}).join("")}
            </div>

            <!-- Pot Summary Card -->
            <div class="cm-pot-summary">
              <div class="cm-pot-box">
                <span class="pot-lbl">Your Stake</span>
                <strong class="pot-val stake-val">🪙 ${r.toLocaleString()}</strong>
              </div>
              <span class="cm-arrow">➔</span>
              <div class="cm-pot-box">
                <span class="pot-lbl">Winner Takes Pot</span>
                <strong class="pot-val pot-highlight">🏆 🪙 ${c.toLocaleString()}</strong>
              </div>
            </div>
          </div>

          <!-- 3. Choose Starting Home (Opposite Home Guaranteed) -->
          <div class="cm-section">
            <div class="cm-section-header-row">
              <label class="cm-section-label">3. Choose Your Starting Home</label>
              <span class="cm-opposite-hint">Opponent gets Opposite Home</span>
            </div>
            <div class="cm-homes-grid">
              <button type="button" class="btn-cm-home ${o===1?"home-active":""}" data-cm-home="1">
                <span class="cm-home-badge">H1</span>
                <div class="cm-home-info">
                  <strong>Home 1 (East)</strong>
                  <span>Opponent: Home 3 (West)</span>
                </div>
                ${o===1?'<span class="format-check">✔</span>':""}
              </button>
              <button type="button" class="btn-cm-home ${o===4?"home-active":""}" data-cm-home="4">
                <span class="cm-home-badge">H4</span>
                <div class="cm-home-info">
                  <strong>Home 4 (South)</strong>
                  <span>Opponent: Home 2 (North)</span>
                </div>
                ${o===4?'<span class="format-check">✔</span>':""}
              </button>
              <button type="button" class="btn-cm-home ${o===2?"home-active":""}" data-cm-home="2">
                <span class="cm-home-badge">H2</span>
                <div class="cm-home-info">
                  <strong>Home 2 (North)</strong>
                  <span>Opponent: Home 4 (South)</span>
                </div>
                ${o===2?'<span class="format-check">✔</span>':""}
              </button>
              <button type="button" class="btn-cm-home ${o===3?"home-active":""}" data-cm-home="3">
                <span class="cm-home-badge">H3</span>
                <div class="cm-home-info">
                  <strong>Home 3 (West)</strong>
                  <span>Opponent: Home 1 (East)</span>
                </div>
                ${o===3?'<span class="format-check">✔</span>':""}
              </button>
            </div>
          </div>
        </div>

        <div class="modal-footer computer-match-footer">
          <button class="btn-primary btn-start-computer-match" id="btn-start-computer-game">
            🎲 Start Game (Pot: 🪙${c.toLocaleString()})
          </button>
        </div>
      </div>
    </div>
  `}function Bo(s,e,t,n=[]){if(!e)return"";const i=t.gamesPlayed>0?Math.round(t.gamesWon/t.gamesPlayed*100):0,r=n&&n.length>0?n.map(o=>{const a=o.result==="WON",c=a?"result-won":"result-lost",d=a?"🏆":o.result==="FORFEITED"?"⚠️":"❌",l=o.coinsChange>0?"delta-positive":o.coinsChange<0?"delta-negative":"",u=o.coinsChange>0?"+":"";return`
          <tr class="history-row">
            <td>
              <div class="history-date">${o.date}</div>
              <div class="history-time">${o.time}</div>
            </td>
            <td>
              <div class="history-mode">${o.mode}</div>
              <div class="history-opp">vs ${o.opponent}</div>
            </td>
            <td>
              <span class="history-badge ${c}">
                ${d} ${o.result}
              </span>
            </td>
            <td>
              <span class="history-kills">⚔️ ${o.kills}</span>
            </td>
            <td class="text-right">
              <span class="history-delta ${l}">
                ${u}${o.coinsChange?o.coinsChange.toLocaleString():"0"} 🪙
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
                  ${r}
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
  `}function wo(s){return`
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
  `}function $o(s,e=120,t=!1){const n=Math.floor(e/60),i=e%60;return`
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
  `}function Oo(s){return`
    <div class="modal-backdrop" id="gate-prompt-backdrop" style="z-index: 1050;">
      <div class="modal-dialog modal-confirm" style="max-width: 480px; text-align: center;">
        <div class="modal-header" style="justify-content: center; flex-direction: column; align-items: center; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
          <span style="font-size: 2.4rem; margin-bottom: 8px;">⚔️</span>
          <h2 class="modal-title" style="color: #f1c40f; font-size: 1.3rem; margin: 0;">
            ${R("gate23Title")}
          </h2>
        </div>

        <div class="modal-body" style="padding: 16px;">
          <div style="background: rgba(241, 196, 15, 0.1); border: 1px solid rgba(241, 196, 15, 0.3); border-radius: 10px; padding: 12px; margin-bottom: 14px; text-align: left;">
            <p style="margin: 0; font-size: 0.92rem; line-height: 1.5; color: #f39c12;">
              ${R("gate23Msg")}
            </p>
          </div>
          <div style="display: flex; justify-content: space-around; font-size: 0.82rem; color: #bdc3c7; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 8px;">
            <span>🚪 <strong>H1 (Bottom):</strong> <span style="color:#2ecc71;">Unlocked</span></span>
            <span>🚪 <strong>H2 (Top):</strong> <span style="color:#2ecc71;">Unlocked</span></span>
          </div>
        </div>

        <div class="modal-footer modal-footer-split" style="display: flex; gap: 10px; justify-content: center;">
          <button class="btn-primary" id="btn-gate-continue" style="flex: 1; padding: 12px 14px; font-weight: bold;">
            ${R("btnContinueGame")}
          </button>
          <button class="btn-secondary" id="btn-gate-restart" style="flex: 1; padding: 12px 14px;">
            ${R("btnStartAgain")}
          </button>
        </div>
      </div>
    </div>
  `}function No(s={}){const{user:e,walletCoins:t=1e3,hourlyRewardStatus:n=null}=s,i=e&&(e.nickName||e.name)||"Player",r=Cn(),o=n==null?void 0:n.canClaim,a=Math.floor(((n==null?void 0:n.secondsLeft)||0)/60),c=((n==null?void 0:n.secondsLeft)||0)%60,d=o?R("freeCoinsClaim"):`${a}m ${c}s`;return`
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
              <span class="profile-nick">${i}</span>
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
            class="golden-claim-ticket ${o?"claim-ticket-ready":"claim-ticket-cooldown"}" 
            id="btn-lobby-hourly-reward"
            title="Claim 500 Free Coins every hour based on mobile device time!"
          >
            <div class="ticket-sawtooth left-saw"></div>
            <div class="ticket-body">
              <span class="ticket-star">✨</span>
              <div class="ticket-text-wrap">
                <span class="ticket-title">${R(o?"freeCoinsClaim":"freeCoinsBtn")}</span>
                <span class="ticket-sub">${o?"Free 500 Coins Ready!":`Wait: ${d}`}</span>
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
            <h1 class="brand-game-name">${R("appTitle")}</h1>
            <span class="brand-tagline">${R("appSubtitle")}</span>
          </div>
        </div>

        <!-- 4. Main Center Stage: 3D Game Buttons (Computer vs Friends) -->
        <div class="hero-game-modes-grid">
          <!-- Yellow 3D Button: Play with Computer (100% Offline) -->
          <button class="game-mode-3d-btn btn-mode-yellow" id="btn-mode-computer">
            <div class="btn-3d-sheen"></div>
            <div class="btn-3d-icon-box yellow-icon-box">
              <span class="device-icon">📱</span>
              <span class="vs-badge">VS</span>
            </div>
            <div class="btn-3d-text-wrap">
              <h2 class="btn-3d-title">${R("menuComputer")}</h2>
              <span class="btn-3d-desc">${R("menuComputerSub")}</span>
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
              <h2 class="btn-3d-title">${R("menuFriends")}</h2>
              <span class="btn-3d-desc">${R("menuFriendsSub")}</span>
            </div>
            <span class="btn-3d-pill pill-friends">4-DIGIT ROOM</span>
          </button>
        </div>

        <!-- 5. Bottom Navigation Bar -->
        <div class="casual-bottom-nav">
          <button class="bnav-item" id="btn-nav-store" title="Free Coin Refill">
            <span class="bnav-icon">🛒</span>
            <span class="bnav-badge-free">FREE</span>
            <span class="bnav-label">${R("store")}</span>
          </button>
          <button class="bnav-item bnav-active" id="btn-nav-home" title="Home Menu">
            <span class="bnav-icon">🏠</span>
            <span class="bnav-label">${R("home")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-friends-direct" title="Friends Hub">
            <span class="bnav-icon">👥</span>
            <span class="bnav-label">${R("menuFriends")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-history" title="Match History">
            <span class="bnav-icon">📜</span>
            <span class="bnav-label">${R("matchHistory")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-rules" title="Rules Guide">
            <span class="bnav-icon">📖</span>
            <span class="bnav-label">${R("rules")}</span>
          </button>
        </div>
      </div>
    </div>
  `}function Lo(s={}){const{isOpen:e=!1,friends:t=[],searchQuery:n="",isEditing:i=!1,activeTab:r="challenge",walletCoins:o=1e3,diamonds:a=385,hourlyRewardStatus:c={canClaim:!0,secondsLeft:0,rewardAmount:500}}=s;if(!e)return"";const d=l=>{const u=Math.floor(l/60),p=l%60;return`${u}m ${p<10?"0":""}${p}s`};return`
    <div class="modal-backdrop friends-hub-backdrop" id="friends-hub-backdrop">
      <div class="friends-hub-dialog">
        <!-- Top Bar: Title & Currencies -->
        <header class="friends-hub-topbar">
          <div class="fhub-title-row">
            <button class="btn-fhub-back" id="btn-close-friends-hub" title="Back to Game">
              ‹
            </button>
            <h2 class="fhub-title">Friends</h2>
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
              <span class="curr-val">${o.toLocaleString()}</span>
              <button class="btn-curr-plus">+</button>
            </div>
          </div>
        </header>

        <!-- Sub-Tabs: Challenge | Gifts | Inbox -->
        <nav class="fhub-tabs-strip">
          <button class="fhub-tab ${r==="challenge"?"tab-active":""}" data-fhub-tab="challenge">
            Challenge
          </button>
          <button class="fhub-tab ${r==="gifts"?"tab-active":""}" data-fhub-tab="gifts">
            Gifts
          </button>
          <button class="fhub-tab ${r==="inbox"?"tab-active":""}" data-fhub-tab="inbox">
            Inbox
            <span class="tab-badge-dot">!</span>
          </button>
        </nav>

        <div class="friends-hub-content-scroll">
          <!-- Private Room Action Banner -->
          <div class="fhub-private-room-banner">
            <div class="pr-text-col">
              <span class="pr-title">Private room with</span>
              <span class="pr-subtitle">up to 4 friends</span>
            </div>
            <div class="pr-buttons-col">
              <button class="btn-glossy-green" id="btn-fhub-create-room">
                Create Room
              </button>
              <button class="btn-glossy-gold" id="btn-fhub-join-room">
                Join Room
              </button>
            </div>
          </div>

          <!-- Search & Action Strip -->
          <div class="fhub-action-strip">
            <div class="fhub-search-box">
              <span class="search-icon">🔍</span>
              <input 
                type="text" 
                id="input-fhub-search" 
                placeholder="Search list..." 
                value="${n}" 
              />
              ${n?'<button class="btn-clear-search" id="btn-clear-fhub-search">&times;</button>':""}
            </div>

            <button class="btn-fhub-pill btn-invite-whatsapp" id="btn-fhub-invite-whatsapp" title="Share via WhatsApp">
              <span class="pill-icon">👥</span>
              <span>Invite friends</span>
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
            `:t.map(l=>`
              <div class="friend-card-row">
                <div class="fcard-avatar-wrap">
                  <div class="fcard-avatar">
                    <span>${l.avatar||"👤"}</span>
                  </div>
                  <div class="fcard-level-star">
                    <span>⭐</span>
                    <span class="star-num">${l.level||33}</span>
                  </div>
                </div>

                <div class="fcard-info">
                  <span class="fcard-name">${l.nickName||l.name||"Friend"}</span>
                </div>

                <div class="fcard-actions">
                  <button class="btn-fcard-gift" data-friend-id="${l.id}" title="Send Free Coins Gift">
                    🎁
                  </button>

                  <button class="btn-glossy-green btn-fcard-challenge" data-friend-name="${l.nickName||l.name}" data-friend-id="${l.id}">
                    Challenge
                  </button>

                  ${i?`
                    <button class="btn-fcard-delete" data-friend-id="${l.id}" title="Delete Friend">
                      🗑️
                    </button>
                  `:""}
                </div>
              </div>
            `).join("")}
          </div>
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
              ${c.canClaim?"Free 500🪙":d(c.secondsLeft)}
            </span>
            ${c.canClaim?'<span class="nav-badge-dot">!</span>':""}
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
  `}function Do(s,e={}){const{roomCode:t="4821",mode:n="2p",selectedBet:i=250,selectedHome:r=1,walletCoins:o=1e3,shareUrl:a="",qrDataUrl:c=null,isWaiting:d=!0}=e,l=i*2,u=n==="4p",m=`https://api.whatsapp.com/send?text=${encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta match on table *${t}* (${u?"2v2 Teams":"1v1"})!
Pot: 🪙${l.toLocaleString()} coins.
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
              ${kn.map(y=>{const C=y===i,k=o>=y;return`
                  <button 
                    type="button"
                    class="btn-lobby-tier ${C?"tier-selected":""} ${k?"":"tier-disabled"}"
                    data-create-bet="${y}"
                    ${k?"":"disabled"}
                  >
                    <span class="tier-chip-icon">🪙</span>
                    <span class="tier-stake">${y}</span>
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
              <button type="button" class="btn-cm-home btn-room-home ${r===1?"home-active":""}" data-room-home="1">
                <span class="cm-home-badge">H1</span>
                <div class="cm-home-info">
                  <strong>Home 1 (East)</strong>
                  <span>Opponent: Home 3 (West)</span>
                </div>
                ${r===1?'<span class="format-check">✔</span>':""}
              </button>
              <button type="button" class="btn-cm-home btn-room-home ${r===4?"home-active":""}" data-room-home="4">
                <span class="cm-home-badge">H4</span>
                <div class="cm-home-info">
                  <strong>Home 4 (South)</strong>
                  <span>Opponent: Home 2 (North)</span>
                </div>
                ${r===4?'<span class="format-check">✔</span>':""}
              </button>
              <button type="button" class="btn-cm-home btn-room-home ${r===2?"home-active":""}" data-room-home="2">
                <span class="cm-home-badge">H2</span>
                <div class="cm-home-info">
                  <strong>Home 2 (North)</strong>
                  <span>Opponent: Home 4 (South)</span>
                </div>
                ${r===2?'<span class="format-check">✔</span>':""}
              </button>
              <button type="button" class="btn-cm-home btn-room-home ${r===3?"home-active":""}" data-room-home="3">
                <span class="cm-home-badge">H3</span>
                <div class="cm-home-info">
                  <strong>Home 3 (West)</strong>
                  <span>Opponent: Home 1 (East)</span>
                </div>
                ${r===3?'<span class="format-check">✔</span>':""}
              </button>
            </div>
          </div>

          <!-- Huge 4-Digit Table Code Display -->
          <div class="table-code-hero-card">
            <span class="table-code-label">TABLE CODE (SHARE WITH FRIEND)</span>
            <div class="table-digits-display">
              ${t.split("").map(y=>`<span class="digit-box">${y}</span>`).join("")}
            </div>
            <div class="table-code-actions">
              <button class="btn-copy-code" id="btn-copy-4digit-code" data-code="${t}">
                📋 Copy Code (${t})
              </button>
              <a href="${m}" target="_blank" class="btn-whatsapp-share-code" id="btn-whatsapp-room-share" rel="noopener noreferrer">
                💬 Share on WhatsApp
              </a>
            </div>
          </div>

          <!-- Waiting Spinner -->
          ${d?`
            <div class="room-waiting-indicator">
              <div class="pulse-waiting-ring"></div>
              <span>Waiting for friend to enter code <strong>${t}</strong>...</span>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `}function Fo(s,e={}){const{errorMsg:t=null,enteredCode:n=""}=e;return`
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
            <label class="join-code-label" for="input-4digit-code">4-Digit Table Code:</label>
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

            ${t?`<div class="join-code-error">⚠️ ${t}</div>`:""}

            <button class="btn-glossy-green btn-submit-join" id="btn-submit-join-code">
              🚀 Join Table & Play
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function Ho(s,e={}){const{errorMsg:t=null}=e;return`
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
  `}function Uo(s,e,t){return`
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
  `}function Go(s,e={},t=[]){const{gamesPlayed:n=0,gamesWon:i=0,winRate:r=0,totalCoinsWon:o=0,totalKills:a=0}=e;return`
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
              <span class="hstat-val stat-gold">${r}%</span>
              <span class="hstat-label">Win Rate</span>
            </div>
            <div class="hstat-box">
              <span class="hstat-val stat-gold">🪙 ${(o||0).toLocaleString()}</span>
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
            `:t.map(c=>{const d=c.result==="WON",l=c.result==="FORFEITED",u=c.tableCode||(c.id?String(c.id).replace(/[^0-9]/g,"").slice(-4):"1001"),p=Math.floor((c.durationSec||0)/60),m=(c.durationSec||0)%60;return`
                <div class="history-record-card ${d?"record-win":l?"record-forfeit":"record-loss"}">
                  <div class="record-top-row">
                    <div class="record-table-badge">
                      <span class="table-icon">🎯</span>
                      <strong>Table #${u}</strong>
                      <span class="record-mode-tag">${c.mode||"1v1"}</span>
                    </div>

                    <div class="record-result-badge ${d?"badge-win":l?"badge-forfeit":"badge-loss"}">
                      ${d?`🏆 WON (+🪙${(c.pot||c.coinsChange||500).toLocaleString()})`:l?`🚪 FORFEIT (-🪙${(c.bet||250).toLocaleString()})`:`❌ LOST (-🪙${(c.bet||250).toLocaleString()})`}
                    </div>
                  </div>

                  <div class="record-details-row">
                    <div class="record-opponent">
                      <span class="opponent-label">Opponent:</span>
                      <span class="opponent-name">${c.opponent||"System AI"}</span>
                    </div>

                    <div class="record-meta">
                      <span>⚔️ ${c.kills||0} kills</span>
                      <span>•</span>
                      <span>⏱️ ${p}m ${m<10?"0":""}${m}s</span>
                      <span>•</span>
                      <span>📅 ${c.date||""} ${c.time||""}</span>
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
  `}class jo{constructor(e={}){this.duration=e.duration||30,this.timeLeft=this.duration,this.timerId=null,this.isPaused=!1,this.onTick=e.onTick||(()=>{}),this.onWarning=e.onWarning||(()=>{}),this.onUrgent=e.onUrgent||(()=>{}),this.onTimeout=e.onTimeout||(()=>{})}start(){this.stop(),this.timeLeft=this.duration,this.isPaused=!1,this.onTick(this.timeLeft),this.timerId=setInterval(()=>{this.isPaused||(this.timeLeft--,this.onTick(this.timeLeft),this.timeLeft===10?this.onWarning(this.timeLeft):this.timeLeft===5?this.onUrgent(this.timeLeft):this.timeLeft<=0&&(this.stop(),this.onTimeout()))},1e3)}pause(){this.isPaused=!0}resume(){this.isPaused=!1}reset(){this.start()}stop(){this.timerId&&(clearInterval(this.timerId),this.timerId=null),this.isPaused=!1}getTimeLeft(){return this.timeLeft}}const be={light(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(15)}catch{}},rollTumble(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([20,30,25])}catch{}},step(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(20)}catch{}},capture(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([50,40,80])}catch{}},baara(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([40,30,40,30,100])}catch{}},victory(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([80,50,80,50,120,60,200])}catch{}}};class qo{constructor(){this.logs=[],this.rulesOpen=!1,this.mobileOpen=!1,this.mpModalOpen=!1,this.chatOpen=!1,this.betModalOpen=!1,this.gatePromptOpen=!1,this.loginModalOpen=!z.isLoggedIn(),this.loginTab="login",this.computerModalOpen=!1,this.computerPlayerCount=2,this.computerBet=250,this.inLobby=z.isLoggedIn(),this.playerCount=2,this.lobbyMode="solo",this.selectedBet=250,this.profileModalOpen=!1,this.exitModalOpen=!1,this.inactivityModalOpen=!1,this.awayDurationSec=0,this.backgroundTimestamp=null,this.loginError=null,this.soundMuted=!1,this.qrDataUrl=null,this.roomQrDataUrl=null,this.friendsHubOpen=!1,this.friendsTab="challenge",this.friendsSearchQuery="",this.isEditingFriends=!1,this.createRoomModalOpen=!1,this.joinRoomModalOpen=!1,this.addFriendModalOpen=!1,this.matchHistoryModalOpen=!1,this.celebrationSplash={isOpen:!1,tableCode:"",friendName:""},this.enteredJoinCode="",this.joinRoomError=null,this.addFriendError=null,this.roomCreationMode="2p",this.current4DigitCode=Fe(),this.hourlyTicker=setInterval(()=>{if(this.friendsHubOpen||this.inLobby){const n=document.getElementById("btn-lobby-hourly-reward"),i=document.getElementById("btn-nav-reward"),r=z.getHourlyRewardStatus(),o=r.canClaim?"Free 500🪙":`${Math.floor(r.secondsLeft/60)}m ${r.secondsLeft%60}s`;if(n){const a=n.querySelector(".ticket-sub"),c=n.querySelector(".ticket-title");a&&c?(c.textContent=r.canClaim?R("freeCoinsClaim"):R("freeCoinsBtn"),a.textContent=r.canClaim?"Free 500 Coins Ready!":`Wait: ${o}`,r.canClaim?(n.classList.remove("claim-ticket-cooldown"),n.classList.add("claim-ticket-ready")):(n.classList.remove("claim-ticket-ready"),n.classList.add("claim-ticket-cooldown"))):(n.className=`btn-hourly-reward-lobby ${r.canClaim?"reward-claim-glow":"reward-wait"}`,n.innerHTML=`<span>🎁</span><span>${o}</span>`)}i&&(i.innerHTML=`<span class="nav-icon">🎁</span><span class="nav-label">${o}</span>${r.canClaim?'<span class="nav-badge-dot">!</span>':""}`)}},1e3),this.currentBet=250,this.matchPot=500,this.winnerAwarded=!1,this.chatMessages=[],this.activeChatToast=null,this.chatToastTimer=null,this.unreadChatCount=0,this.turnTimer=new jo({duration:30,onTick:n=>this.renderTimerOnly(n),onWarning:()=>{this.soundMuted||te.playCoinStep()},onUrgent:()=>{this.soundMuted||te.playBonusRoll()},onTimeout:()=>this.handleTurnTimeout()});const e="https://maheshwar567.github.io/bharakhatta/",t=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";this.baseMobileUrl=t?e:window.location.href.split("?")[0].replace(/\/?$/,"/"),this.localWifiUrl="http://192.168.31.186:5173/",this.selectedHome=1,this.mpState={isConnected:!1,roomCode:null,myPlayerId:null,myTeam:null,isHost:!1,players:[],errorMsg:null},this.mpClient=new Io({onRoomCreated:n=>this.handleRoomCreated(n),onRoomJoined:n=>this.handleRoomJoined(n),onPlayerJoined:(n,i)=>this.handlePlayerJoined(n,i),onPlayerLeft:(n,i)=>this.handlePlayerLeft(n,i),onForfeit:n=>this.handleRemoteForfeit(n),onSyncRoll:n=>this.handleRemoteRoll(n),onSyncMove:n=>this.handleRemoteMove(n),onSyncRestart:()=>this.handleRemoteRestart(),onChatReceived:n=>this.handleChatReceived(n),onBetSynced:n=>this.handleBetSynced(n),onSyncTimeoutPass:n=>this.handleRemoteTimeoutPass(n),onStart4pAIPair:n=>this.handleStart4pAIPair(n),onSyncGameState:n=>this.handleRemoteGameState(n),onGate23Decision:n=>this.handleRemoteGate23Decision(n),onError:n=>{this.mpState.errorMsg=n,this.render()},onStatusChange:n=>{this.mpState.isConnected=n==="connected",this.render()}}),this.autoMoveTimer=null,this.selectedCoinId=null,this.initDOM(),this.engine=new br({gameMode:"2p",diceMode:"cowries",onStateChange:()=>{this.engine&&(this.render(),this.checkAutoMove())},onLog:n=>this.addLog(n),onTurnChange:n=>this.handleTurnChange(n),onBothGatesOpen:()=>this.handleBothGatesOpen()}),this.bindGlobalKeys(),this.initMobileAudioUnlock(),this.initBackgroundDetection(),this.checkUrlRoomParam(),!this.loginModalOpen&&!this.inLobby&&this.turnTimer.start(),this.render()}startGame(e="solo",t=250){if(!K.canAfford(t))return alert(`You don't have enough coins (Need 🪙${t.toLocaleString()}! Current: 🪙${K.getBalance().toLocaleString()})`),!1;K.placeBet(t),this.currentBet=t,this.matchPot=t*2,this.inLobby=!1;const n=z.getCurrentUser(),i=n?n.nickName||n.name:"Player 1";return this.playerCount===4?e==="4p_solo"?(this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${i} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Teammate AI",avatar:"🦁",color:"#d35400",isAI:!0},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}],this.selectedHome),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 4-Player Solo match started! You & Teammate AI (Team 1) vs System AI Pair (Team 2). Pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),!0):(this.mpModalOpen=!0,this.turnTimer.stop(),this.mpState.roomCode||this.mpClient.createRoom("4p",i,null,null,this.currentBet,this.selectedHome),this.render(),!0):e==="friend"?(this.mpModalOpen=!0,this.turnTimer.stop(),this.mpState.roomCode||this.mpClient.createRoom("2p",i,null,null,this.currentBet,this.selectedHome),this.render(),!0):(this.engine.gameMode="2p",this.engine.initGame([{id:1,team:1,name:`${i} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI (Top)",avatar:"🦚",color:"#27ae60",isAI:!0}],this.selectedHome),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 2-Player Game started vs System AI! Stake: 🪙${t.toLocaleString()} | Winner Pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),!0)}async checkUrlRoomParam(){const t=new URLSearchParams(window.location.search).get("room");if(t){this.mpModalOpen=!0;try{await this.mpClient.joinRoom(t,"Player 2")}catch(n){console.error("Auto-join room failed:",n)}}}initMobileAudioUnlock(){const e=()=>{te.init(),be.light(),document.removeEventListener("touchstart",e),document.removeEventListener("pointerdown",e)};document.addEventListener("touchstart",e,{passive:!0}),document.addEventListener("pointerdown",e,{passive:!0})}initDOM(){const e=document.getElementById("app");e.innerHTML=`
      <div id="header-container"></div>
      
      <main class="game-main-content">
        <div id="board-container" class="board-wrapper"></div>
        <div id="cowrie-container" style="width: 100%; display: flex; justify-content: center;"></div>
        <div id="ticker-container" style="width: 100%; display: flex; justify-content: center;"></div>
      </main>

      <div id="modal-container"></div>
    `}addLog(e){this.logs.push(e),this.logs.length>40&&this.logs.shift();const t=document.getElementById("ticker-container");t&&(t.innerHTML=Mi(this.logs))}bindGlobalKeys(){window.addEventListener("keydown",e=>{e.code==="Space"&&!this.rulesOpen&&!this.mobileOpen&&!this.mpModalOpen&&!this.chatOpen&&!this.betModalOpen&&(e.preventDefault(),this.attemptRoll()),e.key==="Escape"&&(this.rulesOpen=!1,this.mobileOpen=!1,this.mpModalOpen=!1,this.chatOpen=!1,this.betModalOpen=!1,this.render())})}handleTurnChange(e){this.selectedCoinId=null,this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null),this.turnTimer.reset(),(this.mpState.roomCode?e.id===this.mpState.myPlayerId:!e.isAI)&&!this.soundMuted&&(te.playBaaraTwelve(),be.light()),this.render()}handleTurnTimeout(){const e=this.engine.getStateSnapshot();if(e.status===Z.GAME_OVER)return;(this.mpState.roomCode?e.currentPlayer.id===this.mpState.myPlayerId:!e.currentPlayer.isAI)?(this.engine.log("⏰ Time's up (30s)! No roll chance. Turn forfeited to next player."),this.mpState.roomCode&&this.mpClient.sendTimeoutPass(this.mpState.myPlayerId),this.turnTimer.reset(),this.engine.advanceTurn()):this.mpState.roomCode?(this.engine.log("⏰ Opponent timed out (30s)! No roll chance. Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn()):e.currentPlayer.isAI&&(this.engine.log("⏰ System AI timed out (30s)! Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn())}initBackgroundDetection(){document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")this.backgroundTimestamp=Date.now();else if(document.visibilityState==="visible"&&this.backgroundTimestamp){const e=Math.floor((Date.now()-this.backgroundTimestamp)/1e3);this.backgroundTimestamp=null,e>=120&&this.engine&&this.engine.status!==Z.GAME_OVER&&!this.loginModalOpen&&this.handleInactivityForfeit(e)}})}handleInactivityForfeit(e){if(this.awayDurationSec=e,this.turnTimer.stop(),this.mpState.roomCode){this.engine.log(`⏰ Match forfeited: You were away in other apps for >2 minutes (${Math.floor(e/60)}m ${e%60}s).`);const t=this.mpState.myTeam||1;this.mpClient.sendForfeit(t,this.mpState.myPlayerId),this.engine.forfeit(t),z.recordMatch({matchId:`m_${Date.now()}`,opponent:t===1?this.mpClient.guestName:this.mpClient.hostName,mode:`Online Room #${this.mpState.roomCode}`,bet:this.currentBet,pot:this.matchPot,result:"FORFEITED",coinsChange:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:t===1?this.engine.team1Kills:this.engine.team2Kills})}else this.engine.log(`⏸️ You were away in other apps for >2 minutes (${Math.floor(e/60)}m ${e%60}s).`);this.inactivityModalOpen=!0,this.render()}renderTimerOnly(e){const t=document.querySelector(".timer-seconds"),n=document.querySelector(".turn-timer-pill"),i=document.querySelector(".turn-timer-sub");t&&(t.textContent=`${e}s`),i&&(i.textContent=`⏳ ${e}s`),n&&(n.classList.remove("timer-normal","timer-warning","timer-urgent"),e<=5?n.classList.add("timer-urgent"):e<=10?n.classList.add("timer-warning"):n.classList.add("timer-normal"))}handleChatReceived(e){this.chatMessages.push(e),this.chatOpen||(this.unreadChatCount++,this.showChatToast(e)),this.soundMuted||te.playCoinStep(),this.render()}showChatToast(e){this.activeChatToast=e,this.chatToastTimer&&clearTimeout(this.chatToastTimer),this.chatToastTimer=setTimeout(()=>{this.activeChatToast=null,this.render()},3500)}handleBetSynced(e){this.currentBet=e,this.matchPot=e*2,this.engine.log(`🪙 Match bet set to 🪙${e}! Pot: 🪙${this.matchPot.toLocaleString()}`),this.render()}attemptRoll(){const e=this.engine.getStateSnapshot();if(e.status!==Z.WAITING_FOR_ROLL||this.mpState.roomCode&&e.currentPlayer.id!==this.mpState.myPlayerId||!this.mpState.roomCode&&e.currentPlayer.isAI)return;this.selectedCoinId=null,this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null),be.rollTumble(),this.turnTimer.reset();const t=this.engine.roll();this.mpState.roomCode&&t&&(this.mpClient.sendRoll(t),setTimeout(()=>{this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot())},2100))}attemptMove(e){this.selectedCoinId=null,this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null);const t=this.engine.getStateSnapshot();t.status===Z.WAITING_FOR_MOVE&&(this.mpState.roomCode&&t.currentPlayer.id!==this.mpState.myPlayerId||(be.step(),this.turnTimer.reset(),this.engine.executeMove(e),this.mpState.roomCode&&(this.mpClient.sendMove(e),setTimeout(()=>{this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot())},700))))}checkAutoMove(){var i;const e=this.engine.getStateSnapshot();if(e.status!==Z.WAITING_FOR_MOVE){this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null);return}if(!(this.mpState.roomCode?e.currentPlayer.id===this.mpState.myPlayerId:!e.currentPlayer.isAI)){this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null);return}if(this.autoMoveTimer)return;const n=this.engine.getSingleMovableMove();n&&(this.engine.log(`⚡ Single movable coin (#${((i=n.coin)==null?void 0:i.num)||1}) - auto-moving in 1s...`),this.autoMoveTimer=setTimeout(()=>{this.autoMoveTimer=null,this.engine&&this.engine.status===Z.WAITING_FOR_MOVE&&this.attemptMove(n)},1e3))}async handleRoomCreated(e){this.mpState.roomCode=e.roomCode,this.mpState.myPlayerId=e.playerId,this.mpState.myTeam=e.team,this.mpState.isHost=!0,this.mpState.players=e.players,this.mpState.errorMsg=null,this.winnerAwarded=!1,K.placeBet(this.currentBet),this.matchPot=this.currentBet*2,this.engine.isMultiplayer=!0,this.engine.isHost=!0;const t=z.getCurrentUser(),i=[{id:1,team:1,name:`${t?t.nickName||t.name:"Player 1"} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2 (Friend)",avatar:"🦚",color:"#27ae60",isAI:!1}],r=e.team1Home||this.selectedHome||1;this.engine.initGame(i,r),this.turnTimer.start();const o=`${this.baseMobileUrl}?room=${e.roomCode}`;this.roomQrDataUrl=await Qt(o),this.engine.log(`🏠 Created Room #${e.roomCode} (Bet 🪙${this.currentBet}). Share code with friend!`),this.render()}async handleRoomJoined(e){this.mpState.roomCode=e.roomCode,this.mpState.myPlayerId=e.playerId,this.mpState.myTeam=e.team,this.mpState.isHost=!1,this.mpState.players=e.players,this.mpState.errorMsg=null,this.winnerAwarded=!1,e.bet&&(this.currentBet=e.bet,this.matchPot=e.bet*2),K.placeBet(this.currentBet),this.engine.isMultiplayer=!0,this.engine.isHost=!1;const t=z.getCurrentUser(),n=t?t.nickName||t.name:"Player 2",i=[{id:1,team:1,name:"Player 1 (Friend)",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:`${n} (You)`,avatar:"🦚",color:"#27ae60",isAI:!1}],r=e.team1Home||1;this.engine.initGame(i,r),this.turnTimer.start(),e.hostMobile&&z.addOrUpdateFriend({mobile:e.hostMobile,nickName:e.hostNick||"Host",fullName:e.hostFullName||e.hostNick||"Host"}),this.inLobby=!1,this.joinRoomModalOpen=!1,this.createRoomModalOpen=!1,this.friendsHubOpen=!1,this.mpModalOpen=!1,this.celebrationSplash={isOpen:!0,tableCode:e.roomCode,friendName:e.hostNick||"Host"};const o=`${this.baseMobileUrl}?room=${e.roomCode}`;this.roomQrDataUrl=await Qt(o),this.engine.log(`🤝 Joined Room #${e.roomCode}! You are Team ${e.team}. Match pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),setTimeout(()=>{this.celebrationSplash.isOpen=!1,this.render()},1500)}handlePlayerJoined(e,t){this.mpState.players=t,this.engine.log(`🎉 ${e.name} connected to Table #${this.mpState.roomCode}! Starting match directly...`),te.playBonusRoll(),this.turnTimer.reset(),e.mobile&&z.addOrUpdateFriend({mobile:e.mobile,nickName:e.nickName||e.name||"Friend",fullName:e.fullName||e.name||"Friend"}),this.inLobby=!1,this.createRoomModalOpen=!1,this.joinRoomModalOpen=!1,this.friendsHubOpen=!1,this.mpModalOpen=!1,this.celebrationSplash={isOpen:!0,tableCode:this.mpState.roomCode,friendName:e.nickName||e.name||"Friend"},this.mpState.isHost&&this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot()),this.render(),setTimeout(()=>{this.celebrationSplash.isOpen=!1,this.render()},1500)}handlePlayerLeft(e,t){if(this.mpState.players=t,this.engine.log("⚠️ Opponent disconnected / left the table."),this.engine&&!this.engine.winner&&this.engine.status!==Z.GAME_OVER&&!this.inLobby){const i=(this.mpState.myTeam||1)===1?2:1;this.engine.forfeit(i)}this.render()}handleRemoteForfeit(e){this.engine.log("🚪 Opponent quit the game. You won by default!");const t=e&&e.quittingTeam?e.quittingTeam:this.mpState.myTeam===1?2:1;this.engine&&!this.engine.winner&&this.engine.forfeit(t),this.render()}handleRemoteRoll(e){this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null),be.rollTumble(),this.engine.status=Z.ROLLING,te.playCowrieRoll(),this.engine.currentRoll=e,this.turnTimer.reset(),this.render(),setTimeout(()=>{this.engine.resolveRoll(e),this.render()},2e3)}handleRemoteMove(e){be.step(),this.engine.executeMove(e,!0),this.turnTimer.reset(),this.render()}handleRemoteGameState(e){!e||!this.engine||(this.engine.applyStateSnapshot(e),this.render())}handleBothGatesOpen(){this.gatePromptOpen=!0,te.playBaaraTwelve(),this.render()}handleGate23Decision(e){this.gatePromptOpen=!1,this.mpState.roomCode&&this.mpClient.sendGate23Decision(e),e==="continue"?(this.engine.log("⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad."),this.render()):e==="restart"&&(this.engine.log("🔄 Restarting match by mutual agreement."),this.mpState.roomCode&&this.mpClient.sendRestart(),this.engine.initGame(),this.turnTimer.start(),this.render())}handleRemoteGate23Decision(e){this.gatePromptOpen=!1,e==="continue"?(this.engine.log("⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad."),this.render()):e==="restart"&&(this.engine.log("🔄 Opponent agreed to restart match from scratch."),this.engine.initGame(),this.turnTimer.start(),this.render())}handleRemoteRestart(){this.engine.initGame(),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log("🔄 Host restarted the game!"),this.render()}handleRemoteTimeoutPass(e){this.engine.log("⏰ Opponent timed out (30s)! No roll chance. Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn()}handleStart4pAIPair(e){this.mpModalOpen=!1,e&&e.bet&&(this.currentBet=e.bet,this.matchPot=e.bet*2);const t=this.mpClient.hostName||"Host",n=this.mpClient.guestName||"Friend";this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${t} ${this.mpState.isHost?"(You)":""}`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:`${n} ${this.mpState.isHost?"":"(You)"}`,avatar:"🦁",color:"#d35400",isAI:!1},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🤝 4-Player Match Active! Team 1 (${t} & ${n}) vs Team 2 (System AI Opposite Pair). Pot: 🪙${this.matchPot.toLocaleString()}`),te.playBonusRoll(),this.render()}render(){if(!this.engine)return;const e=this.engine.getStateSnapshot(),t=document.getElementById("header-container"),n=document.getElementById("board-container"),i=document.getElementById("cowrie-container"),r=document.getElementById("ticker-container"),o=document.getElementById("modal-container"),a={user:z.getCurrentUser(),walletCoins:K.getBalance(),matchPot:this.matchPot,timeLeft:this.turnTimer.getTimeLeft(),unreadChatCount:this.unreadChatCount};t&&(t.innerHTML=Tr(e,this.soundMuted,this.mpState,a)),n&&(n.innerHTML=yr(e,this.mpState,this.selectedCoinId)),i&&(i.innerHTML=Cr(e,this.mpState,this.turnTimer.getTimeLeft())),r&&(r.innerHTML=Mi(this.logs));let c="";if(this.loginModalOpen?c+=xo(!0,"","","",this.loginError,this.loginTab):this.inLobby&&(c+=No({user:z.getCurrentUser(),walletCoins:K.getBalance(),selectedBet:this.selectedBet,playerCount:this.playerCount,selectedMode:this.lobbyMode,hourlyRewardStatus:z.getHourlyRewardStatus()})),this.computerModalOpen&&(c+=Ao(!0,{playerCount:this.computerPlayerCount,selectedBet:this.computerBet,selectedHome:this.selectedHome,walletCoins:K.getBalance()})),this.friendsHubOpen){const d=z.getFriends(this.friendsSearchQuery),l=z.getHourlyRewardStatus();c+=Lo({isOpen:!0,friends:d,searchQuery:this.friendsSearchQuery,isEditing:this.isEditingFriends,activeTab:this.friendsTab,walletCoins:K.getBalance(),diamonds:385,hourlyRewardStatus:l})}if(this.createRoomModalOpen){const d=this.mpState.roomCode||this.current4DigitCode,l=`${this.baseMobileUrl}?room=${d}`;c+=Do(!0,{roomCode:d,mode:this.roomCreationMode,selectedBet:this.currentBet,selectedHome:this.selectedHome,walletCoins:K.getBalance(),shareUrl:l,qrDataUrl:this.roomQrDataUrl,isWaiting:!0})}if(this.joinRoomModalOpen&&(c+=Fo(!0,{errorMsg:this.joinRoomError,enteredCode:this.enteredJoinCode})),this.addFriendModalOpen&&(c+=Ho(!0,{errorMsg:this.addFriendError})),this.matchHistoryModalOpen){const d=z.getStats(),l=z.getHistory();c+=Go(!0,d,l)}if(this.celebrationSplash.isOpen&&(c+=Uo(!0,this.celebrationSplash.tableCode,this.celebrationSplash.friendName)),this.profileModalOpen){const d=z.getCurrentUser(),l=z.getStats(),u=z.getHistory();c+=Bo(!0,d,l,u)}if(this.exitModalOpen&&(c+=wo()),this.inactivityModalOpen&&(c+=$o(!0,this.awayDurationSec,!!this.mpState.roomCode)),this.rulesOpen&&(c+=kr()),this.mobileOpen&&(c+=zr(!0,this.qrDataUrl,this.baseMobileUrl)),this.mpModalOpen){const d=this.mpState.roomCode?`${this.baseMobileUrl}?room=${this.mpState.roomCode}`:"";c+=Kr(!0,this.mpState,this.roomQrDataUrl,d)}if(this.gatePromptOpen&&(c+=Oo()),this.chatOpen&&(c+=Qr(!0,this.chatMessages,this.mpState.myPlayerId||1)),this.betModalOpen&&(c+=no(!0,K.getBalance(),this.currentBet,this.mpState.roomCode?"multiplayer":"solo")),this.activeChatToast&&(c+=Zr(this.activeChatToast)),e.winner){if(!this.winnerAwarded){this.winnerAwarded=!0,this.turnTimer.stop();const d=this.mpState.roomCode?this.mpState.myTeam:1,l=e.winner.team===d;l&&(K.awardPot(this.matchPot),this.engine.log(`🏆 MATCH WON! You received the full pot: 🪙${this.matchPot.toLocaleString()} coins!`)),z.recordMatch({matchId:`m_${Date.now()}`,opponent:this.mpState.roomCode?d===1?this.mpClient.guestName:this.mpClient.hostName:"System AI",mode:this.mpState.roomCode?`Online Room #${this.mpState.roomCode}`:"Solo vs AI",bet:this.currentBet,pot:this.matchPot,result:l?"WON":"LOST",coinsChange:l?this.matchPot-this.currentBet:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:d===1?e.team1Kills:e.team2Kills})}be.victory(),c+=_r(e.winner)}o&&(o.innerHTML=c),this.attachEventListeners(e)}attachEventListeners(e){const t=document.getElementById("btn-roll-dice"),n=document.getElementById("palm-cupped-box");t&&(t.onclick=()=>this.attemptRoll()),n&&(n.onclick=()=>this.attemptRoll());const i=document.getElementById("btn-release-jail-t1");i&&(i.onclick=()=>{const g=e.validMoves.find(v=>v.type==="RELEASE_JAIL");g&&this.attemptMove(g)});const r=document.getElementById("btn-release-jail-t2");r&&(r.onclick=()=>{const g=e.validMoves.find(v=>v.type==="RELEASE_JAIL");g&&this.attemptMove(g)}),document.querySelectorAll(".coin-piece").forEach(g=>{g.onclick=v=>{v.stopPropagation();const q=g.getAttribute("data-coin-id");if(!q)return;if(this.selectedCoinId&&this.selectedCoinId!==q){const Q=g.closest(".board-cell");if(Q){const ce=parseInt(Q.getAttribute("data-r"),10),kt=parseInt(Q.getAttribute("data-c"),10),Ti=e.validMoves.find(We=>We.coin&&We.coin.id===this.selectedCoinId&&We.targetCoord&&We.targetCoord.r===ce&&We.targetCoord.c===kt);if(Ti){this.selectedCoinId=null,this.attemptMove(Ti);return}}}const ee=e.validMoves.filter(Q=>Q.coin&&Q.coin.id===q);if(ee.length>0){const Q=new Set(e.validMoves.filter(ce=>ce.coin).map(ce=>ce.coin.id));this.selectedCoinId===q||Q.size===1?(this.selectedCoinId=null,this.attemptMove(ee[0])):(this.selectedCoinId=q,this.render());return}if(e.validMoves.some(Q=>Q.type==="RELEASE_JAIL")){const Q=e.validMoves.find(ce=>ce.type==="RELEASE_JAIL");Q&&(this.selectedCoinId=null,this.attemptMove(Q))}}}),document.querySelectorAll(".cell-valid-target").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-r"),10),q=parseInt(g.getAttribute("data-c"),10);if(this.selectedCoinId){const Q=e.validMoves.find(ce=>ce.coin&&ce.coin.id===this.selectedCoinId&&ce.targetCoord&&ce.targetCoord.r===v&&ce.targetCoord.c===q);if(Q){this.selectedCoinId=null,this.attemptMove(Q);return}}const ee=e.validMoves.find(Q=>Q.targetCoord&&Q.targetCoord.r===v&&Q.targetCoord.c===q);ee&&(this.selectedCoinId=null,this.attemptMove(ee))}});const c=document.getElementById("btn-open-multiplayer"),d=document.getElementById("btn-open-mp-badge");c&&(c.onclick=()=>{this.mpModalOpen=!0,this.render()}),d&&(d.onclick=()=>{this.mpModalOpen=!0,this.render()});const l=document.getElementById("btn-open-chat"),u=document.getElementById("btn-close-chat");l&&(l.onclick=()=>{this.chatOpen=!0,this.unreadChatCount=0,this.render()}),u&&(u.onclick=()=>{this.chatOpen=!1,this.render()});const p=document.getElementById("btn-send-chat"),m=document.getElementById("input-chat-text"),y=(g=null)=>{let v=g;if(!v&&m&&(v=m.value.trim(),m.value=""),!v)return;const q=z.getCurrentUser(),ee=q?q.nickName||q.name:this.mpState.myPlayerId===2?"Player 2":"Player 1";if(this.mpState.roomCode)this.mpClient.sendChat(v,ee);else{const Q={senderId:1,senderName:ee,text:v,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.handleChatReceived(Q),this.engine.players&&this.engine.players[1]&&this.engine.players[1].isAI&&setTimeout(()=>{const ce=["బాగుంది! కానీ సెంటర్ హోమ్ నాదే! (Nice! But the Center is mine!) 🦚","కట్టా పడకుండా జాగ్రత్త మిత్రమా! (Watch out for Katta strike!) 💥","హాహా! బాఱ 12 పడితే నేనే విజేత! (Haha! If I roll Baara 12, I win!) 🎲","మంచి మూవ్! చూద్దాం ఎవరు గెలుస్తారో! (Good move! Let's see who wins!) 👑","గువ్వలు నా వైపే ఉన్నాయి! (The cowries favor me!) 🐚"],kt=ce[Math.floor(Math.random()*ce.length)];this.handleChatReceived({senderId:2,senderName:"System AI 🦚",text:kt,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})},650)}};p&&(p.onclick=()=>y()),m&&(m.onkeydown=g=>{g.key==="Enter"&&y()}),document.querySelectorAll(".btn-smiley-chip").forEach(g=>{g.onclick=()=>{const v=g.getAttribute("data-emoji");v&&y(v)}}),document.querySelectorAll(".btn-quick-taunt").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-taunt-index"),10),q=Cs[v];q&&y(q.text)}});const C=document.getElementById("btn-open-wallet"),k=document.getElementById("btn-open-bet"),_=document.getElementById("btn-close-bet");C&&(C.onclick=()=>{this.betModalOpen=!0,this.render()}),k&&(k.onclick=()=>{this.betModalOpen=!0,this.render()}),_&&(_.onclick=()=>{this.betModalOpen=!1,this.render()}),document.querySelectorAll(".bet-chip").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-bet-amount"),10);v&&K.canAfford(v)&&(this.currentBet=v,this.render())}});const H=document.getElementById("btn-confirm-bet");H&&(H.onclick=()=>{K.canAfford(this.currentBet)&&(this.matchPot=this.currentBet*2,this.mpState.roomCode&&this.mpClient.sendBet(this.currentBet),this.betModalOpen=!1,this.engine.log(`🪙 Bet set to 🪙${this.currentBet}! Total pot: 🪙${this.matchPot.toLocaleString()}`),this.render())});const E=document.getElementById("btn-claim-village-bonus");E&&(E.onclick=()=>{K.claimRefill()&&(te.playBonusRoll(),be.light(),this.engine.log("🎁 Claimed Village Bonus! +500 Coins added to wallet."),this.render())});const w=document.getElementById("btn-action-create-room");w&&(w.onclick=async()=>{const g=document.getElementById("input-host-name"),v=document.getElementById("select-mp-mode"),q=g?g.value.trim():"Player 1",ee=v?v.value:"2p";await this.mpClient.createRoom(ee,q)});const X=document.getElementById("btn-action-join-room");X&&(X.onclick=async()=>{const g=document.getElementById("input-join-code"),v=document.getElementById("input-join-name"),q=g?g.value.trim():"",ee=v?v.value.trim():"Player 2";if(!q){alert("Please enter the Board Number (e.g. BK-260915-101-482).");return}await this.mpClient.joinRoom(q,ee)});const M=document.getElementById("btn-copy-board-number");M&&(M.onclick=()=>{const g=document.getElementById("text-board-number");g&&(navigator.clipboard.writeText(g.textContent.trim()),M.textContent="✅ Copied!",setTimeout(()=>{M&&(M.textContent="📋 Copy")},1800))});const O=document.getElementById("btn-start-4p-ai-pair");O&&(O.onclick=()=>{this.mpClient.sendStart4pAIPair(),this.handleStart4pAIPair({bet:this.currentBet})});const x=document.getElementById("btn-copy-room-link");x&&(x.onclick=()=>{const g=document.getElementById("input-mp-room-link");g&&(navigator.clipboard.writeText(g.value),x.textContent="✅ Copied!",setTimeout(()=>{x&&(x.textContent="📋 Copy Link")},1800))});const P=document.getElementById("btn-leave-room");P&&(P.onclick=()=>{this.mpClient.leaveRoom(),this.mpState.roomCode=null,this.mpState.players=[],this.mpModalOpen=!1,this.winnerAwarded=!1,this.engine.initGame(),this.turnTimer.start(),this.render()});const F=document.getElementById("btn-mp-play-now");F&&(F.onclick=()=>{this.mpModalOpen=!1,this.render()});const $=document.getElementById("btn-close-mp"),N=document.getElementById("btn-modal-mp-close");$&&($.onclick=()=>{this.mpModalOpen=!1,this.render()}),N&&(N.onclick=()=>{this.mpModalOpen=!1,this.render()});const b=document.getElementById("btn-open-mobile");b&&(b.onclick=async()=>{this.qrDataUrl||(this.qrDataUrl=await Qt(this.baseMobileUrl)),this.mobileOpen=!0,this.render()});const T=document.getElementById("btn-close-mobile"),ie=document.getElementById("btn-modal-mobile-done");T&&(T.onclick=()=>{this.mobileOpen=!1,this.render()}),ie&&(ie.onclick=()=>{this.mobileOpen=!1,this.render()});const pe=document.getElementById("btn-open-rules");pe&&(pe.onclick=()=>{this.rulesOpen=!0,this.render()});const Te=document.getElementById("btn-close-rules"),me=document.getElementById("btn-modal-got-it");Te&&(Te.onclick=()=>{this.rulesOpen=!1,this.render()}),me&&(me.onclick=()=>{this.rulesOpen=!1,this.render()});const ye=document.getElementById("btn-toggle-dice");ye&&(ye.onclick=()=>{this.engine.diceMode=this.engine.diceMode==="cowries"?"die":"cowries",be.light(),this.render()});const f=document.getElementById("btn-toggle-sound");f&&(f.onclick=()=>{this.soundMuted=te.toggleMute(),be.light(),this.render()});const h=document.getElementById("btn-restart-game");h&&(h.onclick=()=>{confirm("Start a new match?")&&(this.engine.initGame(),this.winnerAwarded=!1,this.turnTimer.start(),this.mpState.roomCode&&this.mpClient.sendRestart())});const A=document.getElementById("btn-victory-restart");A&&(A.onclick=()=>{this.winnerAwarded=!1,this.turnTimer.stop(),this.inLobby=!0,this.render()});const L=document.getElementById("btn-header-login");L&&(L.onclick=()=>{this.loginModalOpen=!0,this.loginError=null,this.render()});const U=document.getElementById("tab-login-btn"),G=document.getElementById("tab-signup-btn"),V=document.getElementById("link-switch-signup"),S=document.getElementById("link-switch-login");U&&(U.onclick=()=>{this.loginTab="login",this.loginError=null,this.render()}),G&&(G.onclick=()=>{this.loginTab="signup",this.loginError=null,this.render()}),V&&(V.onclick=g=>{g.preventDefault(),this.loginTab="signup",this.loginError=null,this.render()}),S&&(S.onclick=g=>{g.preventDefault(),this.loginTab="login",this.loginError=null,this.render()});const D=document.getElementById("btn-submit-login"),W=document.getElementById("input-login-mobile"),j=document.getElementById("input-login-fullname"),J=document.getElementById("input-login-nickname"),Y=document.getElementById("nickname-preview-badge"),ne=()=>{if(!Y)return;const g=j?j.value:"",v=J?J.value:"";Y.textContent=mn(g,v)};j&&(j.oninput=ne),J&&(J.oninput=ne);const B=()=>{if(!W)return;const g=W.value.trim();if(this.loginTab==="login"){const v=z.login(g,"","",!1);v.success?(this.loginModalOpen=!1,this.loginError=null,this.inLobby=!0,this.engine.players&&this.engine.players[0]&&(this.engine.players[0].name=v.user.nickName||v.user.name),this.engine.log(`👤 Welcome back, ${v.user.nickName||v.user.name}! Profile restored.`),this.render()):(this.loginError=v.error,v.isNotRegistered&&(this.loginTab="signup"),this.render())}else{const v=j?j.value.trim():"",q=J?J.value.trim():"",ee=z.login(g,v,q,!0);ee.success?(this.loginModalOpen=!1,this.loginError=null,this.inLobby=!0,this.engine.players&&this.engine.players[0]&&(this.engine.players[0].name=ee.user.nickName||ee.user.name),this.engine.log(`👤 Welcome, ${ee.user.nickName||ee.user.name}! 🪙1,000 joining bonus credited!`),this.render()):(this.loginError=ee.error,this.render())}};D&&(D.onclick=B),W&&(W.onkeydown=g=>{g.key==="Enter"&&B()}),j&&(j.onkeydown=g=>{g.key==="Enter"&&B()}),J&&(J.onkeydown=g=>{g.key==="Enter"&&B()});const re=document.getElementById("btn-mode-computer");re&&(re.onclick=()=>{this.computerModalOpen=!0,this.render()});const oe=document.getElementById("btn-mode-online");oe&&(oe.onclick=async()=>{this.current4DigitCode=Fe();const g=z.getCurrentUser(),v=g?g.nickName||g.name:"Player 1",q={mobile:(g==null?void 0:g.mobile)||"",nickName:(g==null?void 0:g.nickName)||v,fullName:(g==null?void 0:g.name)||v};await this.mpClient.createRoom("2p",v,this.current4DigitCode,q),this.createRoomModalOpen=!0,this.render()});const ae=document.getElementById("btn-mode-friends");ae&&(ae.onclick=()=>{this.friendsHubOpen=!0,this.render()});const ue=document.getElementById("btn-lobby-friends-direct");ue&&(ue.onclick=()=>{this.friendsHubOpen=!0,this.render()});const ve=document.getElementById("btn-close-computer-modal");ve&&(ve.onclick=()=>{this.computerModalOpen=!1,this.render()});const ge=document.getElementById("btn-cm-format-2p"),tt=document.getElementById("btn-cm-format-4p");ge&&(ge.onclick=()=>{this.computerPlayerCount=2,this.render()}),tt&&(tt.onclick=()=>{this.computerPlayerCount=4,this.render()}),document.querySelectorAll(".btn-cm-bet").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-bet"),10);v&&(this.computerBet=v,this.render())}}),document.querySelectorAll(".btn-cm-home, .btn-room-home").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-cm-home")||g.getAttribute("data-room-home"),10);v&&(this.selectedHome=v,this.mpClient&&(this.mpClient.team1Home=v,this.mpClient.team2Home=_e(v)),this.render())}});const nt=document.getElementById("btn-start-computer-game");nt&&(nt.onclick=()=>{if(!K.canAfford(this.computerBet)){alert(`You need 🪙${this.computerBet.toLocaleString()} coins! Current balance: 🪙${K.getBalance().toLocaleString()}`);return}K.placeBet(this.computerBet),this.currentBet=this.computerBet,this.matchPot=this.computerBet*2,this.inLobby=!1,this.computerModalOpen=!1;const g=z.getCurrentUser(),v=g?g.nickName||g.name:"Player 1";this.computerPlayerCount===4?(this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${v} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Teammate AI",avatar:"🦁",color:"#d35400",isAI:!0},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}],this.selectedHome),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 4-Player Offline match vs System AI Pair started! Pot: 🪙${this.matchPot.toLocaleString()}`)):(this.engine.gameMode="2p",this.engine.initGame([{id:1,team:1,name:`${v} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI (Top)",avatar:"🦚",color:"#27ae60",isAI:!0}],this.selectedHome),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 2-Player Offline match vs System AI started! Pot: 🪙${this.matchPot.toLocaleString()}`)),this.render()});const it=document.getElementById("btn-count-2p"),Ge=document.getElementById("btn-count-4p");it&&(it.onclick=()=>{this.playerCount=2,this.lobbyMode="solo",this.render()}),Ge&&(Ge.onclick=()=>{this.playerCount=4,this.lobbyMode="4p_ai_pair",this.render()});const st=document.getElementById("btn-select-mode-solo"),je=document.getElementById("btn-select-mode-friend"),rt=document.getElementById("btn-select-mode-4p-pair"),ot=document.getElementById("btn-select-mode-4p-solo"),qe=document.getElementById("btn-select-mode-4p-friends");st&&(st.onclick=()=>{this.lobbyMode="solo",this.render()}),je&&(je.onclick=()=>{this.lobbyMode="friend",this.render()}),rt&&(rt.onclick=()=>{this.lobbyMode="4p_ai_pair",this.render()}),ot&&(ot.onclick=()=>{this.lobbyMode="4p_solo",this.render()}),qe&&(qe.onclick=()=>{this.lobbyMode="4p_friends",this.render()});const Ve=document.getElementById("btn-lobby-request-friend");Ve&&(Ve.onclick=()=>{this.friendsHubOpen=!0,this.render()});const $e=document.getElementById("btn-header-friends");$e&&($e.onclick=()=>{this.friendsHubOpen=!0,this.render()});const at=document.getElementById("btn-close-friends-hub");at&&(at.onclick=()=>{this.friendsHubOpen=!1,this.render()}),document.querySelectorAll("[data-fhub-tab]").forEach(g=>{g.onclick=()=>{this.friendsTab=g.getAttribute("data-fhub-tab"),this.render()}});const ct=document.getElementById("input-fhub-search");ct&&(ct.oninput=g=>{this.friendsSearchQuery=g.target.value,this.render()});const En=document.getElementById("btn-clear-fhub-search");En&&(En.onclick=()=>{this.friendsSearchQuery="",this.render()});const xn=document.getElementById("btn-fhub-create-room");xn&&(xn.onclick=async()=>{this.current4DigitCode=Fe();const g=z.getCurrentUser(),v=g?g.nickName||g.name:"Player 1",q={mobile:(g==null?void 0:g.mobile)||"",nickName:(g==null?void 0:g.nickName)||v,fullName:(g==null?void 0:g.name)||v};await this.mpClient.createRoom(this.roomCreationMode,v,this.current4DigitCode,q,this.currentBet,this.selectedHome),this.createRoomModalOpen=!0,this.render()});const An=document.getElementById("btn-fhub-join-room");An&&(An.onclick=()=>{this.joinRoomModalOpen=!0,this.joinRoomError=null,this.enteredJoinCode="",this.render()});const Bn=document.getElementById("btn-fhub-invite-whatsapp");Bn&&(Bn.onclick=()=>{const g=this.mpState.roomCode||this.current4DigitCode||Fe(),v=`${this.baseMobileUrl}?room=${g}`,q=encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta table room! Table Code: *${g}*
Tap here to play: ${v}`);window.open(`https://api.whatsapp.com/send?text=${q}`,"_blank")});const wn=document.getElementById("btn-fhub-add-friend"),$n=document.getElementById("btn-fhub-empty-add");wn&&(wn.onclick=()=>{this.addFriendModalOpen=!0,this.addFriendError=null,this.render()}),$n&&($n.onclick=()=>{this.addFriendModalOpen=!0,this.addFriendError=null,this.render()});const On=document.getElementById("btn-fhub-toggle-edit");On&&(On.onclick=()=>{this.isEditingFriends=!this.isEditingFriends,this.render()}),document.querySelectorAll(".btn-fcard-gift").forEach(g=>{g.onclick=()=>{te.playBonusRoll(),be.light(),alert("🎁 You sent 100 Free Coins Gift to your friend!")}}),document.querySelectorAll(".btn-fcard-challenge").forEach(g=>{g.onclick=async()=>{const v=g.getAttribute("data-friend-name")||"Friend";this.current4DigitCode=Fe();const q=z.getCurrentUser(),ee=q?q.nickName||q.name:"Player 1",Q={mobile:(q==null?void 0:q.mobile)||"",nickName:(q==null?void 0:q.nickName)||ee,fullName:(q==null?void 0:q.name)||ee};await this.mpClient.createRoom("2p",ee,this.current4DigitCode,Q,this.currentBet,this.selectedHome),this.createRoomModalOpen=!0,this.engine.log(`⚔️ Challenged ${v} to Table #${this.current4DigitCode}!`),this.render()}}),document.querySelectorAll(".btn-fcard-delete").forEach(g=>{g.onclick=()=>{const v=g.getAttribute("data-friend-id");v&&(z.removeFriend(v),this.render())}});const Nn=document.getElementById("btn-nav-home"),Ln=document.getElementById("btn-nav-friends"),Dn=document.getElementById("btn-nav-reward"),Fn=document.getElementById("btn-nav-history"),Hn=document.getElementById("btn-nav-profile");Nn&&(Nn.onclick=()=>{this.computerModalOpen=!1,this.friendsHubOpen=!1,this.joinRoomModalOpen=!1,this.createRoomModalOpen=!1,this.profileModalOpen=!1,this.rulesOpen=!1,this.matchHistoryModalOpen=!1,this.inLobby=!0,this.render()}),Ln&&(Ln.onclick=()=>{this.friendsHubOpen=!0,this.render()});const Un=()=>{const g=z.claimHourlyReward();g.success?(te.playBonusRoll(),be.heavy(),this.engine.log(g.message),alert(g.message)):alert(g.error),this.render()};Dn&&(Dn.onclick=Un);const Gn=document.getElementById("btn-lobby-hourly-reward");Gn&&(Gn.onclick=Un),Fn&&(Fn.onclick=()=>{this.matchHistoryModalOpen=!0,this.render()});const jn=document.getElementById("btn-lobby-history");jn&&(jn.onclick=()=>{this.matchHistoryModalOpen=!0,this.render()});const qn=document.getElementById("btn-close-match-history"),Vn=document.getElementById("btn-done-match-history");qn&&(qn.onclick=()=>{this.matchHistoryModalOpen=!1,this.render()}),Vn&&(Vn.onclick=()=>{this.matchHistoryModalOpen=!1,this.render()}),Hn&&(Hn.onclick=()=>{this.profileModalOpen=!0,this.render()});const Wn=document.getElementById("btn-close-create-room");Wn&&(Wn.onclick=()=>{this.createRoomModalOpen=!1,this.render()});const Jn=document.getElementById("radio-mode-1v1"),zn=document.getElementById("radio-mode-2v2");Jn&&(Jn.onchange=()=>{this.roomCreationMode="2p",this.render()}),zn&&(zn.onchange=()=>{this.roomCreationMode="4p",this.render()}),document.querySelectorAll("[data-create-bet]").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-create-bet"),10);v&&(this.currentBet=v,this.matchPot=v*2,this.render())}});const Oe=document.getElementById("btn-copy-4digit-code");Oe&&(Oe.onclick=()=>{const g=Oe.getAttribute("data-code");g&&(navigator.clipboard.writeText(g),Oe.textContent="✅ Copied!",setTimeout(()=>{Oe&&(Oe.textContent=`📋 Copy Code (${g})`)},1800))});const Kn=document.getElementById("btn-close-join-room");Kn&&(Kn.onclick=()=>{this.joinRoomModalOpen=!1,this.render()});const lt=document.getElementById("input-4digit-code"),Yn=document.getElementById("btn-submit-join-code"),Qn=async()=>{if(!lt)return;const g=lt.value.trim();if(!g||g.length!==4){this.joinRoomError="Please enter a valid 4-digit code (e.g. 4821).",this.render();return}const v=z.getCurrentUser(),q=v?v.nickName||v.name:"Player 2",ee={mobile:(v==null?void 0:v.mobile)||"",nickName:(v==null?void 0:v.nickName)||q,fullName:(v==null?void 0:v.name)||q};this.joinRoomError=null;try{await this.mpClient.joinRoom(g,q,ee)}catch(Q){this.joinRoomError=Q.message||"Failed to connect to table.",this.render()}};Yn&&(Yn.onclick=Qn),lt&&(lt.onkeydown=g=>{g.key==="Enter"&&Qn()});const Zn=document.getElementById("btn-close-add-friend");Zn&&(Zn.onclick=()=>{this.addFriendModalOpen=!1,this.render()});const dt=document.getElementById("input-friend-mobile"),Xn=document.getElementById("btn-submit-add-friend"),ei=()=>{if(!dt)return;const g=dt.value.trim(),v=z.addFriendByMobile(g);v.success?(this.addFriendModalOpen=!1,this.addFriendError=null,alert(v.message),this.render()):(this.addFriendError=v.error,this.render())};Xn&&(Xn.onclick=ei),dt&&(dt.onkeydown=g=>{g.key==="Enter"&&ei()}),document.querySelectorAll(".btn-lobby-tier").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-bet"),10);v&&(this.selectedBet=v,this.render())}});const ti=document.getElementById("btn-lobby-start-game");ti&&(ti.onclick=()=>{this.startGame(this.lobbyMode,this.selectedBet)});const ni=document.getElementById("btn-lobby-profile");ni&&(ni.onclick=()=>{this.profileModalOpen=!0,this.render()});const ii=document.getElementById("btn-lobby-rules");ii&&(ii.onclick=()=>{this.rulesOpen=!0,this.render()});const si=document.getElementById("btn-lobby-switch-acc");si&&(si.onclick=()=>{z.logout(),this.inLobby=!1,this.loginModalOpen=!0,this.loginError=null,this.render()});const ri=document.getElementById("btn-open-profile"),oi=document.getElementById("btn-close-profile"),ai=document.getElementById("btn-profile-done"),ci=document.getElementById("btn-switch-account");ri&&(ri.onclick=()=>{this.profileModalOpen=!0,this.render()}),oi&&(oi.onclick=()=>{this.profileModalOpen=!1,this.render()}),ai&&(ai.onclick=()=>{this.profileModalOpen=!1,this.render()}),ci&&(ci.onclick=()=>{z.logout(),this.profileModalOpen=!1,this.inLobby=!1,this.loginModalOpen=!0,this.loginError=null,this.render()});const li=document.getElementById("btn-open-exit"),di=document.getElementById("btn-close-exit"),ui=document.getElementById("btn-cancel-exit"),hi=document.getElementById("btn-confirm-exit");li&&(li.onclick=()=>{this.exitModalOpen=!0,this.render()}),di&&(di.onclick=()=>{this.exitModalOpen=!1,this.render()}),ui&&(ui.onclick=()=>{this.exitModalOpen=!1,this.render()}),hi&&(hi.onclick=()=>{const g=this.mpState.roomCode?this.mpState.myTeam:1;z.recordMatch({matchId:`m_${Date.now()}`,opponent:this.mpState.roomCode?g===1?this.mpClient.guestName:this.mpClient.hostName:"System AI",mode:this.mpState.roomCode?`Online Room #${this.mpState.roomCode}`:"Solo vs AI",bet:this.currentBet,pot:this.matchPot,result:"FORFEITED",coinsChange:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:g===1?this.engine.team1Kills:this.engine.team2Kills}),this.mpState.roomCode&&(this.mpClient.sendForfeit(g,this.mpState.myPlayerId),this.mpClient.leaveRoom()),this.engine.forfeit(g),this.exitModalOpen=!1,this.turnTimer.stop(),this.inLobby=!0,this.engine.log("🚪 You exited the match."),this.render()});const pi=document.getElementById("btn-inactivity-dismiss");pi&&(pi.onclick=()=>{this.inactivityModalOpen=!1,this.turnTimer.stop(),this.inLobby=!0,this.render()});const mi=document.getElementById("btn-gate-continue");mi&&(mi.onclick=()=>this.handleGate23Decision("continue"));const fi=document.getElementById("btn-gate-restart");fi&&(fi.onclick=()=>this.handleGate23Decision("restart"));const gi=document.getElementById("btn-toggle-lang");gi&&(gi.onclick=()=>{Rt(),this.render()});const bi=document.getElementById("btn-lobby-lang-toggle");bi&&(bi.onclick=()=>{Rt(),this.render()});const yi=document.getElementById("btn-login-lang-toggle");yi&&(yi.onclick=()=>{Rt(),this.render()});const vi=document.getElementById("btn-lobby-add-coins"),Ci=document.getElementById("btn-nav-store"),Si=()=>{const g=K.claimRefill();g.success?(te.playBonusRoll(),alert(`🎁 Free Refill! Added 🪙${g.amount.toLocaleString()} coins!
New Balance: 🪙${g.balance.toLocaleString()}`),this.render()):alert(`🪙 Coin Refill: Available when balance is under 🪙250. You currently have 🪙${K.getBalance().toLocaleString()}!`)};vi&&(vi.onclick=g=>{g.stopPropagation(),Si()}),Ci&&(Ci.onclick=Si)}}function fn(){new qo}window.initBharakhatta=fn;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fn):fn();
