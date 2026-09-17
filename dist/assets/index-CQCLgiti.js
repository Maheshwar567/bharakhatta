var cr=s=>{throw TypeError(s)};var Ve=(s,e,t)=>e.has(s)?cr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);function lr(s,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in s)){const r=Object.getOwnPropertyDescriptor(n,i);r&&Object.defineProperty(s,i,r.get?r:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const dr=[{r:3,c:6,id:"home-1",name:"Home 1 Base (East)"},{r:0,c:3,id:"home-2",name:"Home 2 Base (North)"},{r:3,c:0,id:"home-3",name:"Home 3 Base (West)"},{r:6,c:3,id:"home-4",name:"Home 4 Base (South)"},{r:1,c:1,id:"nw-ghatta",name:"North-West Safe Katta"},{r:1,c:5,id:"ne-ghatta",name:"North-East Safe Katta"},{r:5,c:1,id:"sw-ghatta",name:"South-West Safe Katta"},{r:5,c:5,id:"se-ghatta",name:"South-East Safe Katta"},{r:3,c:3,id:"center-sanctum",name:"Happy Home Sanctum"}];function ze(s,e){return dr.some(t=>t.r===s&&t.c===e)}function ur(s,e){return s===3&&e===3}const Fe=[{r:3,c:6,step:0,safe:!0,label:"Home 1"},{r:2,c:6,step:1},{r:1,c:6,step:2},{r:0,c:6,step:3},{r:0,c:5,step:4},{r:0,c:4,step:5},{r:0,c:3,step:6,safe:!0,label:"Home 2"},{r:0,c:2,step:7},{r:0,c:1,step:8},{r:0,c:0,step:9},{r:1,c:0,step:10},{r:2,c:0,step:11},{r:3,c:0,step:12,safe:!0,label:"Home 3"},{r:4,c:0,step:13},{r:5,c:0,step:14},{r:6,c:0,step:15},{r:6,c:1,step:16},{r:6,c:2,step:17},{r:6,c:3,step:18,safe:!0,label:"Home 4"},{r:6,c:4,step:19},{r:6,c:5,step:20},{r:6,c:6,step:21},{r:5,c:6,step:22},{r:4,c:6,step:23,isGate:!0},{r:5,c:5,step:24,safe:!0},{r:5,c:4,step:25},{r:5,c:3,step:26},{r:5,c:2,step:27},{r:5,c:1,step:28,safe:!0},{r:4,c:1,step:29},{r:3,c:1,step:30},{r:2,c:1,step:31},{r:1,c:1,step:32,safe:!0},{r:1,c:2,step:33},{r:1,c:3,step:34},{r:1,c:4,step:35},{r:1,c:5,step:36,safe:!0},{r:2,c:5,step:37},{r:3,c:5,step:38},{r:4,c:5,step:39},{r:4,c:4,step:40},{r:4,c:3,step:41},{r:4,c:2,step:42},{r:3,c:2,step:43},{r:2,c:2,step:44},{r:2,c:3,step:45},{r:2,c:4,step:46},{r:3,c:4,step:47},{r:3,c:3,step:48,isCenter:!0,safe:!0,label:"Happy Home"}],fs=Fe.map((s,e)=>({...s,r:6-s.c,c:s.r,step:e,label:e===0?"Home 2":e===48?"Happy Home":s.label})),hr=Fe.map((s,e)=>({...s,r:6-s.r,c:6-s.c,step:e,label:e===0?"Home 3":e===48?"Happy Home":s.label})),pr=Fe.map((s,e)=>({...s,r:s.c,c:6-s.r,step:e,label:e===0?"Home 4":e===48?"Happy Home":s.label}));function Ti(s,e="spiral"){return s===1?Fe:s===2?fs:s===3?hr:s===4?pr:Fe}const lt={team1:{r:3,c:6,name:"Home 1 Jail"},team2:{r:0,c:3,name:"Home 2 Jail"}};Fe.slice(0,24);fs.slice(0,24);const ki={1:{te:"Okkati",en:"One",isBonus:!0,releasesCoins:1},2:{te:"Rendu",en:"Two",isBonus:!1,releasesCoins:0},3:{te:"Moodu",en:"Three",isBonus:!1,releasesCoins:0},4:{te:"Naalugu",en:"Four",isBonus:!1,releasesCoins:0},5:{te:"Aidu",en:"Five",isBonus:!0,releasesCoins:0},6:{te:"Aaru",en:"Six",isBonus:!0,releasesCoins:0},12:{te:"Baara",en:"Twelve (Baara!)",isBonus:!0,releasesCoins:0}};class fr{constructor(){this.shells=[{id:0,isOpen:!0,rot:15,x:0,y:0},{id:1,isOpen:!0,rot:-25,x:0,y:0},{id:2,isOpen:!1,rot:40,x:0,y:0},{id:3,isOpen:!0,rot:-10,x:0,y:0},{id:4,isOpen:!1,rot:65,x:0,y:0},{id:5,isOpen:!0,rot:-50,x:0,y:0}]}roll(e=null){let t=0,n=0;e!==null?(n=e,t=n===12?0:n):(this.shells.forEach(r=>{r.isOpen=Math.random()<.48,r.isOpen&&t++,r.rot=Math.floor(Math.random()*360),r.x=(Math.random()-.5)*24,r.y=(Math.random()-.5)*16}),t===0?n=12:n=t),e!==null&&this.shells.forEach((r,o)=>{r.isOpen=o<t,r.rot=Math.floor(Math.random()*360),r.x=(Math.random()-.5)*24,r.y=(Math.random()-.5)*16});const i=ki[n]||{te:`${n}`,en:`${n}`,isBonus:!1,releasesCoins:0};return{score:n,openCount:t,shells:this.shells.map(r=>({...r})),isBonus:i.isBonus,releasesCoins:i.releasesCoins,titleTe:i.te,titleEn:i.en}}rollDie(){const e=Math.floor(Math.random()*6)+1,t=e===1||e===5||e===6,n=e===1?1:0,i=ki[e];return{score:e,openCount:e,shells:[],isBonus:t,releasesCoins:n,titleTe:i.te,titleEn:i.en}}}class mr{constructor(){this.ctx=null,this.muted=!1,this.initialized=!1}init(){if(!this.initialized&&!(typeof window>"u"))try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.initialized=!0)}catch(e){console.warn("Web Audio API not supported",e)}}toggleMute(){return this.muted=!this.muted,this.muted}playCowrieRoll(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=32+Math.floor(Math.random()*10);for(let n=0;n<t;n++){const i=n/t*1.85+(Math.random()*.04-.02),r=e+Math.max(0,i),o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.createBiquadFilter(),d=2200+Math.random()*2600;o.type=Math.random()>.4?"triangle":"sine",o.frequency.setValueAtTime(d,r),o.frequency.exponentialRampToValueAtTime(d*.4,r+.035),c.type="bandpass",c.frequency.setValueAtTime(2800+Math.random()*1200,r),c.Q.setValueAtTime(4,r);const l=n>=t-4,u=l?.22*(.8+Math.random()*.4):(.05+n/t*.12)*(.8+Math.random()*.4);a.gain.setValueAtTime(u,r),a.gain.exponentialRampToValueAtTime(1e-4,r+(l?.06:.04)),o.connect(c),c.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+(l?.07:.045))}}playCoinStep(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(480,e),t.frequency.exponentialRampToValueAtTime(720,e+.04),t.frequency.exponentialRampToValueAtTime(320,e+.09),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.11)}playJailRelease(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=e+i*.05,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.1,r),a.gain.exponentialRampToValueAtTime(.001,r+.14),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.15)})}playCapture(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(40,e+.25),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.26),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.28);const i=this.ctx.createBuffer(1,this.ctx.sampleRate*.15,this.ctx.sampleRate),r=i.getChannelData(0);for(let d=0;d<r.length;d++)r[d]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1500,e),a.Q.setValueAtTime(3,e);const c=this.ctx.createGain();c.gain.setValueAtTime(.25,e),c.gain.exponentialRampToValueAtTime(.001,e+.14),o.connect(a),a.connect(c),c.connect(this.ctx.destination),o.start(e),o.stop(e+.16)}playBonusRoll(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[587.33,739.99,880,1174.66].forEach((n,i)=>{const r=e+i*.04,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.09,r),a.gain.exponentialRampToValueAtTime(5e-4,r+.35),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.36)})}playBaaraTwelve(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[440,554.37,659.25,880,1108.73,1318.51].forEach((n,i)=>{const r=e+i*.06,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.12,r),a.gain.exponentialRampToValueAtTime(.001,r+.5),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.52)})}playVictory(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=[{f:523.25,d:.2},{f:659.25,d:.2},{f:783.99,d:.25},{f:1046.5,d:.5},{f:880,d:.2},{f:1046.5,d:.7}];let n=e;t.forEach(i=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(i.f,n),o.gain.setValueAtTime(.15,n),o.gain.exponentialRampToValueAtTime(.001,n+i.d*1.1),r.connect(o),o.connect(this.ctx.destination),r.start(n),r.stop(n+i.d*1.15),n+=i.d})}}const ne=new mr,ee={WAITING_FOR_ROLL:"WAITING_FOR_ROLL",ROLLING:"ROLLING",WAITING_FOR_MOVE:"WAITING_FOR_MOVE",ANIMATING_MOVE:"ANIMATING_MOVE",GAME_OVER:"GAME_OVER"};class gr{constructor(e={}){this.dice=new fr,this.diceMode=e.diceMode||"cowries",this.gameMode=e.gameMode||"2p",this.pathStyle=e.pathStyle||"spiral",this.requireKill=e.requireKill!==void 0?e.requireKill:!0,this.onStateChange=e.onStateChange||(()=>{}),this.onLog=e.onLog||(()=>{}),this.onTurnChange=e.onTurnChange||(()=>{}),this.onBothGatesOpen=e.onBothGatesOpen||(()=>{}),this.isMultiplayer=e.isMultiplayer||!1,this.isHost=e.isHost!==void 0?e.isHost:!0,this.bothGatesPrompted=!1,this.initGame()}initGame(e=null){this.bothGatesPrompted=!1,e&&Array.isArray(e)&&e.length>0?(this.players=e.map(t=>({...t})),this.gameMode=this.players.length>=4?"4p":"2p"):this.isMultiplayer?this.players=[{id:1,team:1,name:"Player 1",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2",avatar:"🦚",color:"#27ae60",isAI:!1}]:this.gameMode==="4p"?this.players=[{id:1,team:1,name:"Player 1",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Player 3",avatar:"🦁",color:"#d35400",isAI:!1},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]:this.players=[{id:1,team:1,name:"Player 1 (Bottom)",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2 (Top)",avatar:"🦚",color:"#27ae60",isAI:!0}],this.coins=[];for(let t=1;t<=6;t++)this.coins.push({id:`t1_c${t}`,num:t,team:1,inJail:!0,stepIndex:-1,isFinished:!1,coord:{...lt.team1}}),this.coins.push({id:`t2_c${t}`,num:t,team:2,inJail:!0,stepIndex:-1,isFinished:!1,coord:{...lt.team2}});this.currentPlayerIndex=0,this.currentRoll=null,this.lastRoll=null,this.status=ee.WAITING_FOR_ROLL,this.validMoves=[],this.winner=null,this.team1Kills=0,this.team2Kills=0,this.stats={rollsCount:0,capturesCount:0,bonusTurnsCount:0,startTime:Date.now()},this.emitChange(),this.log("🎮 Game initialized! Welcome to Bharakhatta. Team 1 starts.")}getCurrentPlayer(){return this.players[this.currentPlayerIndex]}getCurrentTeam(){return this.getCurrentPlayer().team}getTeamCoins(e){return this.coins.filter(t=>t.team===e)}getCoinsAtCoord(e,t){return this.coins.filter(n=>!n.inJail&&!n.isFinished&&n.coord.r===e&&n.coord.c===t)}getJailCoins(e){return this.coins.filter(t=>t.team===e&&t.inJail)}getFinishedCoins(e){return this.coins.filter(t=>t.team===e&&t.isFinished)}roll(){if(this.status!==ee.WAITING_FOR_ROLL)return null;this.getCurrentPlayer(),this.status=ee.ROLLING,this.stats.rollsCount++,ne.playCowrieRoll(),this.emitChange();let e;return this.diceMode==="die"?e=this.dice.rollDie():e=this.dice.roll(),this.currentRoll=e,this.lastRoll=e,setTimeout(()=>{this.resolveRoll(e)},2e3),e}resolveRoll(e){const t=this.getCurrentPlayer(),n=t.team,i=e.score;this.lastRoll=e,e.score===12?ne.playBaaraTwelve():e.isBonus&&ne.playBonusRoll(),this.log(`🎲 ${t.name} rolled ${e.titleEn} (${i})! ${e.isBonus?"⭐ Bonus Turn Awarded!":""}`);const r=this.getLegalMoves(n,i);if(this.validMoves=r,r.length===0){this.status=ee.WAITING_FOR_MOVE,this.emitChange(),this.log(`⚠️ No valid moves possible with roll of ${i}.`),e.isBonus?(this.stats.bonusTurnsCount++,this.log(`✨ Bonus roll allowed ${t.name} another roll!`),setTimeout(()=>{this.status=ee.WAITING_FOR_ROLL,this.currentRoll=null,this.validMoves=[],this.emitChange(),this.checkAITurn()},1200)):setTimeout(()=>{this.advanceTurn()},1200);return}this.status=ee.WAITING_FOR_MOVE,this.emitChange(),this.checkAITurn()}getLegalMoves(e,t){const n=[],i=this.getTeamCoins(e),r=this.getJailCoins(e),o=Ti(e,this.pathStyle);t===1&&r.length>0&&n.push({type:"RELEASE_JAIL",coin:r[0],count:1,description:`Release 1 coin (#${r[0].num}) from Jail to Home base`});const c=i.filter(l=>!l.inJail&&!l.isFinished),d=e===1?this.team1Kills>0:this.team2Kills>0;for(const l of c){const u=o.length-1;if(this.requireKill&&!d){if(l.stepIndex===23)continue;if(l.stepIndex<23){if(l.stepIndex+t>23)continue;if(l.stepIndex+t===23){const f=o[23];n.push({type:"MOVE_COIN",coin:l,fromStep:l.stepIndex,toStep:23,targetCoord:f,isCapture:this.checkWillCapture(e,f),isSafe:f.safe||ze(f.r,f.c),description:`Advance coin #${l.num} to Step 23 (Gate 23! Opponent kill needed to enter inside 5/5 ring)`});continue}}}const p=l.stepIndex+t;if(p<u){const f=o[p],y=l.stepIndex<=23&&p>23;n.push({type:"MOVE_COIN",coin:l,fromStep:l.stepIndex,toStep:p,targetCoord:f,isCapture:this.checkWillCapture(e,f),isSafe:f.safe||ze(f.r,f.c),description:y?`Advance coin #${l.num} into Inside 5/5 Ring (Step ${p})!`:`Move coin #${l.num} to (${f.r}, ${f.c})`})}else if(p===u){const f=o[u];n.push({type:"FINISH_COIN",coin:l,fromStep:l.stepIndex,toStep:u,targetCoord:f,description:`Goal! Coin #${l.num} enters the Center Sanctum (Final Home)!`})}}return n}checkWillCapture(e,t){if(ze(t.r,t.c))return!1;const n=e===1?2:1;return this.getCoinsAtCoord(t.r,t.c).some(r=>r.team===n)}executeMove(e,t=!1,n=!1){if(!e||!t&&this.status!==ee.WAITING_FOR_MOVE)return;this.status=ee.ANIMATING_MOVE,this.validMoves=[],this.emitChange();const i=this.getCurrentPlayer(),r=i.team,o=Ti(r,this.pathStyle);if(e.type==="RELEASE_JAIL"){const a=this.getJailCoins(r),c=e.count||1,d=o[0];ne.playJailRelease();for(let u=0;u<c&&u<a.length;u++){const p=a[u];p.inJail=!1,p.stepIndex=0,p.coord={r:d.r,c:d.c}}this.log(`🚪 ${i.name} released ${c} coin(s) from Jail onto Home Base!`);const l=this.currentRoll?this.currentRoll.isBonus:!1;this.finishMove(l)}else if(e.type==="MOVE_COIN"||e.type==="FINISH_COIN"){const a=e.coin&&e.coin.id&&this.coins.find(p=>p.id===e.coin.id)||e.coin,c=a.stepIndex,d=e.toStep,l=e.looped,u=()=>{a.stepIndex=d,a.coord={...e.targetCoord},e.type==="FINISH_COIN"&&(a.isFinished=!0,ne.playBaaraTwelve(),this.log(`🎉 Goal! ${i.name}'s Coin #${a.num} reached the Center Sanctum!`));let p=!1;if(!ze(a.coord.r,a.coord.c)){const T=r===1?2:1,H=this.getCoinsAtCoord(a.coord.r,a.coord.c).filter(E=>E.team===T);H.length>0&&(p=!0,this.stats.capturesCount++,r===1?this.team1Kills++:this.team2Kills++,ne.playCapture(),H.forEach(E=>{E.inJail=!0,E.stepIndex=-1,E.coord={...E.team===1?lt.team1:lt.team2},this.log(`💥 Katta! ${i.name} killed Team ${T}'s Coin #${E.num}! Returned to Jail.`)}),this.log(`⚡ Katta strike earned ${i.name} a Bonus Turn! Inside 5/5 ring unlocked.`),this.team1Kills>=1&&this.team2Kills>=1&&!this.bothGatesPrompted&&(this.bothGatesPrompted=!0,this.log("⚔️ Both Home 1 and Home 2 have unlocked Gate 23!"),this.onBothGatesOpen&&this.onBothGatesOpen()))}const f=this.checkWinCondition(r),y=this.checkSquad5x5Win(r);if(f||y){const T=y&&!f?"SQUAD_5X5_COMPLETE":"CENTER_SANCTUM";this.winner={team:r,player:i,reason:T,stats:{...this.stats,durationSec:Math.round((Date.now()-this.stats.startTime)/1e3)}},this.status=ee.GAME_OVER,ne.playVictory(),T==="SQUAD_5X5_COMPLETE"?this.log(`🏆 ALL 6 COINS ENTERED 5/5 SQUAD! Team ${r} has no coins left in outer 7/7 zone! Team ${r} Wins!`):this.log(`🏆 GAME OVER! Team ${r} has won the game of Bharakhatta! Congratulations!`),this.emitChange();return}const _=(this.currentRoll?this.currentRoll.isBonus:!1)||p;this.finishMove(_)};n?u():this.animateCoinHop(a,o,c,d,l,u)}}animateCoinHop(e,t,n,i,r,o){const a=[];if(r){for(let l=n+1;l<=23;l++)a.push(l);for(let l=0;l<=i;l++)a.push(l)}else for(let l=n+1;l<=i;l++)a.push(l);if(a.length===0){o();return}const c=Math.max(70,Math.min(150,600/a.length)),d=()=>{if(a.length===0){o();return}const l=a.shift();e.coord={r:t[l].r,c:t[l].c},ne.playCoinStep(),this.emitChange(),setTimeout(d,c)};d()}finishMove(e){const t=this.getCurrentPlayer();this.currentRoll&&(this.lastRoll=this.currentRoll),e?(this.stats.bonusTurnsCount++,this.log(`✨ ${t.name} gets a BONUS TURN! Roll again.`),this.status=ee.WAITING_FOR_ROLL,this.currentRoll=null,this.validMoves=[],this.emitChange(),this.checkAITurn()):setTimeout(()=>{this.advanceTurn()},500)}advanceTurn(){this.currentPlayerIndex=(this.currentPlayerIndex+1)%this.players.length,this.currentRoll&&(this.lastRoll=this.currentRoll),this.currentRoll=null,this.validMoves=[],this.status=ee.WAITING_FOR_ROLL;const e=this.getCurrentPlayer();this.log(`👉 Turn: ${e.name} (Team ${e.team})`),this.emitChange(),this.onTurnChange&&this.onTurnChange(e),this.checkAITurn()}getBestLegalMove(){if(this.validMoves.length===0)return null;let e=this.validMoves[0],t=-999;for(const n of this.validMoves){let i=0;n.type==="FINISH_COIN"&&(i+=500),n.isCapture&&(i+=400),n.type==="RELEASE_JAIL"&&(i+=250+(n.count||1)*20),n.isSafe&&(i+=150),n.type==="MOVE_COIN"&&(i+=n.toStep),i>t&&(t=i,e=n)}return e}autoPlayTurn(){if(this.status===ee.WAITING_FOR_ROLL)return this.roll();if(this.status===ee.WAITING_FOR_MOVE){const e=this.getBestLegalMove();if(e)return this.executeMove(e),e}return null}getSingleMovableMove(){if(this.status!==ee.WAITING_FOR_MOVE||!this.validMoves||this.validMoves.length===0)return null;const e=this.getCurrentTeam();if(this.getTeamCoins(e).filter(i=>!i.inJail&&!i.isFinished).length===1){const i=this.validMoves.filter(r=>r.type==="MOVE_COIN"||r.type==="FINISH_COIN");if(i.length===1&&!this.validMoves.some(r=>r.type==="RELEASE_JAIL"))return i[0];if(this.validMoves.length===1)return this.validMoves[0]}return this.validMoves.length===1?this.validMoves[0]:null}checkWinCondition(e){return this.getFinishedCoins(e).length===6}checkSquad5x5Win(e){const t=this.getTeamCoins(e);return t.length!==6?!1:t.every(n=>!n.inJail&&(n.stepIndex>=24||n.isFinished))}checkAITurn(){!this.getCurrentPlayer().isAI||this.status===ee.GAME_OVER||this.isMultiplayer&&!this.isHost||(this.status===ee.WAITING_FOR_ROLL?setTimeout(()=>{this.roll()},900):this.status===ee.WAITING_FOR_MOVE&&setTimeout(()=>{this.executeAIMove()},1e3))}executeAIMove(){const e=this.getBestLegalMove();e&&this.executeMove(e)}log(e){this.onLog&&this.onLog({id:Date.now()+Math.random(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),text:e})}emitChange(){this.onStateChange&&this.onStateChange(this.getStateSnapshot())}getStateSnapshot(){return{status:this.status,gameMode:this.gameMode,diceMode:this.diceMode,pathStyle:this.pathStyle,requireKill:this.requireKill,players:this.players,currentPlayer:this.getCurrentPlayer(),currentRoll:this.currentRoll,lastRoll:this.lastRoll,coins:this.coins.map(e=>({...e})),validMoves:this.validMoves,winner:this.winner,team1Kills:this.team1Kills,team2Kills:this.team2Kills,stats:{...this.stats}}}applyStateSnapshot(e){if(e){if(this.status=e.status,this.gameMode=e.gameMode||this.gameMode,e.players&&Array.isArray(e.players)&&(this.players=e.players.map(t=>({...t}))),e.currentPlayer){const t=this.players.findIndex(n=>n.id===e.currentPlayer.id);t!==-1&&(this.currentPlayerIndex=t)}this.currentRoll=e.currentRoll||null,e.lastRoll&&(this.lastRoll=e.lastRoll),e.coins&&Array.isArray(e.coins)&&(this.coins=e.coins.map(t=>({...t}))),this.validMoves=e.validMoves||[],this.winner=e.winner||null,e.team1Kills!==void 0&&(this.team1Kills=e.team1Kills),e.team2Kills!==void 0&&(this.team2Kills=e.team2Kills),e.stats&&(this.stats={...e.stats}),this.emitChange()}}}function br(s,e=null,t=null){const{coins:n,validMoves:i,currentPlayer:r,status:o,team1Kills:a,team2Kills:c,players:d,currentRoll:l}=s,u=o==="WAITING_FOR_MOVE",p=r.team;let f=!0;e&&e.roomCode?f=r.id===e.myPlayerId:r.isAI&&(f=!1);const y={};n.forEach(b=>{if(!b.inJail&&!b.isFinished){const S=`${b.coord.r}_${b.coord.c}`;y[S]||(y[S]=[]),y[S].push(b)}});const C=n.filter(b=>b.team===1&&b.inJail),_=n.filter(b=>b.team===2&&b.inJail),T=n.filter(b=>b.team===1&&b.isFinished),H=n.filter(b=>b.team===2&&b.isFinished),E=i.find(b=>b.type==="RELEASE_JAIL"),w=u&&f&&!!E,Z=d.find(b=>b.team===1)||{name:"Team 1"},R=d.find(b=>b.team===2)||{name:"Team 2"};let $="";for(let b=0;b<7;b++)for(let S=0;S<7;S++){const ie=ze(b,S),de=ur(b,S),Te=`${b}_${S}`,ue=y[Te]||[];let ye=null;u&&f&&(t?ye=i.find(x=>x.coin&&x.coin.id===t&&x.targetCoord&&x.targetCoord.r===b&&x.targetCoord.c===S):ye=i.find(x=>x.targetCoord&&x.targetCoord.r===b&&x.targetCoord.c===S));const G=b===4&&S===6||b===0&&S===4||b===2&&S===0||b===6&&S===2;let L=["board-cell"];ie&&L.push("cell-safe-katta"),de&&L.push("cell-center-sanctum"),b===3&&S===6&&L.push("cell-home-h1"),b===0&&S===3&&L.push("cell-home-h2"),b===3&&S===0&&L.push("cell-home-h3"),b===6&&S===3&&L.push("cell-home-h4"),G&&L.push("cell-gate-step23"),ye&&L.push("cell-valid-target");let j="";if(de)j=`
          <div class="center-sanctum-emblem happy-home-emblem ${T.length+H.length>0?"has-happy-coins":""}">
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
              ${yr(T,H)}
            </div>
          </div>
        `;else if(ie){let x="";b===3&&S===6?x="H1 (EAST)":b===0&&S===3?x="H2 (NORTH)":b===3&&S===0?x="H3 (WEST)":b===6&&S===3&&(x="H4 (SOUTH)"),j=`
          <div class="katta-x-mark">
            <svg viewBox="0 0 100 100" class="cross-svg">
              <line x1="10" y1="10" x2="90" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
              <line x1="90" y1="10" x2="10" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
            </svg>
            ${x?`<span class="cell-tag">${x}</span>`:""}
          </div>
        `}else G&&(j=`
          <div class="gate-marker" title="Gate 23: Opponent kill needed to enter inside 5/5 ring!">
            <span class="cell-gate-tag">GATE 23</span>
          </div>
        `);const I=ue.map((x,W)=>{const J=u&&f&&i.some(te=>te.coin&&te.coin.id===x.id),Y=t===x.id;return kt(x,J,Y,ue.length,W)}).join(""),U=ue.length>=2?`<span class="cell-stack-badge" title="${ue.length} coins sharing this box">x${ue.length}</span>`:"";$+=`
        <div class="${L.join(" ")}" data-r="${b}" data-c="${S}">
          ${j}
          ${U}
          <div class="cell-coins-container coins-count-${ue.length}">
            ${I}
          </div>
          ${ye?`<div class="target-indicator ${t?"target-for-selected":""}">⭐</div>`:""}
        </div>
      `}const A=p===2,M=`
    <div class="jail-box jail-top ${A?"jail-turn-active":""} ${p===2&&w?"jail-actionable":""}" id="jail-team2">
      <div class="jail-header-compact">
        <div class="jail-team-tag t2-tag">
          <span>🦚 ${R.name}</span>
          ${A?'<span class="jail-turn-pulse">👉 TURN</span>':""}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${c} Kills ${c>0?"🔓 5/5 Open":"🔒 Gate 23 Stop"}</span>
          <span class="meta-count">${_.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${_.map((b,S)=>kt(b,u&&f&&p===2&&w,!1,_.length,S,!0)).join("")}
        </div>

        ${p===2&&w?`
          <button class="btn-release-jail" id="btn-release-jail-t2">
            ⚡ Release ${E.count} to Home!
          </button>
        `:""}
      </div>
    </div>
  `,F=p===1,O=`
    <div class="jail-box jail-bottom ${F?"jail-turn-active":""} ${p===1&&w?"jail-actionable":""}" id="jail-team1">
      <div class="jail-header-compact">
        <div class="jail-team-tag t1-tag">
          <span>👑 ${Z.name}</span>
          ${F?'<span class="jail-turn-pulse">👉 TURN</span>':""}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${a} Kills ${a>0?"🔓 5/5 Open":"🔒 Gate 23 Stop"}</span>
          <span class="meta-count">${C.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${C.map((b,S)=>kt(b,u&&f&&p===1&&w,!1,C.length,S,!0)).join("")}
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
      ${M}
      
      <div class="board-container">
        ${N}
        <div class="board-frame">
          <div class="board-grid">
            ${$}
          </div>
        </div>
      </div>

      ${O}
    </div>
  `}function kt(s,e,t=!1,n=1,i=0,r=!1){const o=s.team===1?"coin-team1":"coin-team2",a=e?"coin-selectable":"",c=t?"coin-selected":"",d=s.stepIndex===23;let l="coin-size-1";r||(n===2?l="coin-size-2":n>=3&&n<=4?l="coin-size-4":n>=5&&(l="coin-size-6"));const u=d?`Team ${s.team} Coin #${s.num} (Stopped at Step 23 Gate - Opponent kill required to enter inside 5/5 ring)`:`Team ${s.team} Coin #${s.num} ${t?"(Selected) - Tap destination to move":e?"- Tap to Select & Move":""}`;return`
    <div class="coin-piece ${o} ${a} ${c} ${l} ${d?"coin-stopped-23":""}" 
         data-coin-id="${s.id}" 
         data-team="${s.team}"
         title="${u}">
      <span class="coin-num">${s.num}</span>
      ${d?'<span class="coin-gate-badge">23</span>':""}
      ${e&&!t?'<span class="coin-pulse-ring"></span>':""}
    </div>
  `}function yr(s,e){return s.length===0&&e.length===0?"":`
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
  `}function vr(s,e=null,t=30){const{status:n,currentRoll:i,lastRoll:r,diceMode:o,currentPlayer:a,validMoves:c}=s,d=n==="ROLLING";let l=!0;e&&e.roomCode?l=a.id===e.myPlayerId:a.isAI&&(l=!1);const u=n==="WAITING_FOR_ROLL"&&l;let p="";if(o==="die"){const C=i?i.score:r?r.score:6;p=`
      <div class="dice-single-cube ${d?"dice-shake":""}">
        <span class="dice-val">${C}</span>
      </div>
    `}else{const C=i||(n==="WAITING_FOR_ROLL"?null:r),_=C&&C.shells&&C.shells.length===6?C.shells:[{id:0,isOpen:!0,rot:10,x:-3,y:-2},{id:1,isOpen:!0,rot:-15,x:2,y:1},{id:2,isOpen:!1,rot:25,x:-1,y:2},{id:3,isOpen:!0,rot:-8,x:3,y:-1},{id:4,isOpen:!1,rot:30,x:-2,y:2},{id:5,isOpen:!0,rot:-25,x:1,y:-2}];if(d)p=Ri(!0,!1);else if(i){const T=i.isBonus;p=`
        <div class="settled-cowrie-mat post-shake-screen-display">
          <div class="post-shake-number-hero ${T?"number-hero-bonus":""}">
            <div class="post-shake-num-badge">
              <span class="post-shake-number-digit">${i.score}</span>
            </div>
            <div class="post-shake-number-meta">
              <span class="post-shake-title-te">${i.titleTe||""}</span>
              <span class="post-shake-title-en">${i.titleEn||""}</span>
              ${T?'<span class="post-shake-bonus-pill">⭐ BONUS TURN</span>':""}
            </div>
          </div>
          <div class="compact-cowrie-tray">
            ${_.map(H=>_i(H)).join("")}
          </div>
        </div>
      `}else n==="WAITING_FOR_ROLL"?p=Ri(!1,u):p=`
        <div class="settled-cowrie-mat">
          <div class="mat-label">🌾 Tossed on Board Mat</div>
          <div class="compact-cowrie-tray">
            ${_.map(T=>_i(T)).join("")}
          </div>
        </div>
      `}let f="";if(i&&!d){const C=i.isBonus;let _="";c&&c.length===0?_=`
        <span class="score-action-hint hint-no-moves">⚠️ No Moves</span>
        <span class="score-action-sub">${C?"Bonus Roll...":"Passes Turn..."}</span>
      `:c&&c.length===1&&!a.isAI?_=`
        <span class="score-action-hint hint-auto">⚡ Auto Move</span>
        <span class="score-action-sub">Moving in 1s...</span>
      `:c&&c.length>1&&l?_=`
        <span class="score-action-hint hint-choose">👉 Your Move</span>
        <span class="score-action-sub">Tap Coin / Target</span>
      `:_=`
        <span class="turn-prompt">${l?"👉 Your Turn!":`⏳ ${a.name}'s Turn`}</span>
        <span class="turn-timer-sub">⏳ ${t}s</span>
      `,f=`
      <div class="compact-score-badge settled-action-badge ${C?"score-bonus-glow":""}">
        ${_}
      </div>
    `}else d?f=`
      <div class="compact-score-badge rolling-badge">
        <span class="rolling-dot">⏳</span>
        <span>Shaking Palm (2 sec)...</span>
      </div>
    `:f=`
      <div class="compact-score-badge idle-badge ${l?"badge-my-turn":""}">
        <span class="turn-prompt">${l?"👉 Your Turn!":`⏳ ${a.name}'s Turn`}</span>
        ${r?`<span class="last-roll-reminder">Last: 🎲 ${r.score} (${r.titleTe||r.titleEn})</span>`:`<span class="turn-timer-sub">⏳ ${t}s</span>`}
      </div>
    `;let y="✊ TOSS GUVVALU";return d?y="Shaking (2s)...":l||(y=e&&e.roomCode?`Waiting for ${a.name}...`:"Computer Thinking..."),`
    <div class="mobile-cowrie-console ${l&&u?"console-my-turn":""}">
      <div class="cowrie-left-zone">
        ${p}
        ${f}
      </div>

      <div class="cowrie-right-zone">
        <button id="btn-roll-dice" class="btn-roll ${u?"btn-roll-active":"btn-roll-disabled"}" 
                ${u?"":"disabled"}>
          ${y}
        </button>
      </div>
    </div>
  `}let Pe="en";try{const s=localStorage.getItem("bk_language");(s==="te"||s==="en")&&(Pe=s)}catch{}function vn(){return Pe}function Cr(s){if(s==="te"||s==="en"){Pe=s;try{localStorage.setItem("bk_language",s)}catch{}}return Pe}function _t(){return Cr(Pe==="en"?"te":"en")}const Rt={en:{appTitle:"BHARAKHATTA",appSubtitle:"Traditional 7x7 Village Cowrie Board Game",gameCoins:"Game Coins",name:"Name",potCoins:"Pot Coins",room:"Room",boardNumber:"Board Number",chat:"Chat",playWithFriend:"Play with Friend",bet:"Bet",exit:"Exit",rules:"Rules",selectPlayerCount:"Choose Player Count (2 or 4)",twoPlayers:"2 Players",twoPlayersSub:"1 vs 1 Head to Head",fourPlayers:"4 Players",fourPlayersSub:"2 vs 2 Team Match (2 Homes)",selectMode2p:"Select 2-Player Mode",selectMode4p:"Select 4-Player Mode",playVsComputer:"Play vs Computer (1v1)",playVsComputerSub:"Solo match with System AI",playWithFriend2p:"Play with Friend (1v1)",playWithFriend2pSub:"Invite friend on other mobile with Board #",twoFriendsAIPair:"2 Friends + 2 AI Pair",twoFriendsAIPairSub:"You & Friend (Team 1) vs System AI Pair (Team 2)",solo4p:"Solo (1 Human + 3 AI)",solo4pSub:"You & AI Partner vs 2 AI Opponents",fourFriendsOnline:"4 Friends Online",fourFriendsOnlineSub:"Send Board # to request friends",requestFriendHero:"Request Friend to Play on Same Board",requestFriendHeroSub:"Share Board Number, WhatsApp Invite & QR Code",choosePotCoins:"Choose Pot Coins / Bet Stakes",yourStake:"Your Stake",winnerTakesPot:"Winner Takes Pot",startGame:"Start Game",rulesGuide:"Rules Guide",matchHistory:"Match History",switchAccount:"Switch Account",tossGuvvalu:"TOSS GUVVALU",tossingGuvvalu:"Tossing...",guvvaluInPalm:"Guvvalu in Palm",tapPalmToToss:"Guvvalu in Palm — Tap to Toss!",tossedOnMat:"Tossed on Board Mat",yourTurn:"👉 Your Turn!",waitingForTurn:"⏳ Turn: {name}",computerThinking:"Computer Thinking...",bonusRoll:"⭐ BONUS!",roll_1:"Okkati (1)",roll_2:"Rendu (2)",roll_3:"Moodu (3)",roll_4:"Naalugu (4)",roll_5:"Aidu (5)",roll_6:"Aaru (6)",roll_12:"Baara! (12)",gate23Title:"⚔️ Both Homes Unlocked Gate 23!",gate23Msg:"Both Team 1 and Team 2 have killed an opponent coin and unlocked Gate 23! Both teams can now enter the inside 5/5 squad. Do you want to continue playing or start again?",btnContinueGame:"▶️ Continue Game",btnStartAgain:"🔄 Start Again",victoryTitle:"VICTORY!",victoryDesc:"Team {team} won the match!",winReasonSquad:"🎉 ALL 6 COINS ENTERED 5/5 SQUAD! Team {team} has no coins left in the outer 7/7 track for the opponent to kill!",winReasonCenter:"🏆 All 6 coins reached the Center Sanctum (Final Home)!",rematchBtn:"🎲 Return to Lobby",mpTitle:"Request Friend to Play on Same Board",mpSubtitle:"Real-time multiplayer over Wi-Fi / Mobile Network",guaranteedBoardNumber:"GUARANTEED BOARD NUMBER",uniqueBnHint:"Guaranteed unique board number — will never repeat in match history!",whatsappShare:"Request Friend on WhatsApp",scanQrHint:"Friend can scan this with mobile camera to join instantly!",copyLink:"Copy Link",copyCode:"Copy",copied:"✅ Copied!",boardPlayers:"Board Players",startWithAIPair:"🤝 Start Now with System AI Opposite Pair",twoFriendsNotice:"2 Friends Connected! You two are Team 1. You can start right now with the System AI playing as the opposite pair (Team 2)!",waitingFriendNotice:"Waiting for your friend to open the link or enter Board Number on their phone...",allPlayersReady:"All players connected! Board match is active in real time.",generateBoardBtn:"🚀 Generate Board Number & Invite Friends",joinBoardBtn:"🤝 Join Board",yourName:"Your Name",matchType:"Match Type",joinExistingCard:"Join with Friend's Board Number",enterBnPlaceholder:"e.g. BK-260915-101-482",tabExistingLogin:"📱 Existing Player: Login",tabNewSignUp:"✨ New Player: Sign Up",mobileNumber:"Mobile Number",tenDigits:"10 Digits",mobilePlaceholder:"e.g. 9876543210",loginMobileHint:"Enter your 10-digit number to restore your Nick Name, Coins & History",signupMobileHint:"Your mobile number is securely kept private. Only your Nick Name is shown in-game",fullName:"Full Name",required:"Required",optional:"Optional",fullNamePlaceholder:"e.g. Mahesh Reddy",nickName:"Nick Name",nickNamePlaceholder:"Leave blank for auto-initials (e.g. MR)",gameDisplayName:"Game Display Name",loginSubmitBtn:"🎮 Login to Bharakhatta",signUpSubmitBtn:"🚀 Sign Up & Claim 1,000 Coins",firstTimePrompt:"First time playing Bharakhatta?",signUpHere:"Sign Up here ➔",alreadyHaveAccount:"Already have an account?",loginHere:"Login with mobile ➔",errUnregistered:"Account not found with this mobile number. Please select 'Sign Up' to create your account!",errMissingName:"Please enter your Full Name to sign up.",errInvalidMobile:"Please enter a valid 10-digit mobile number.",menuComputer:"Computer",menuFriends:"Friends",menuComputerSub:"100% Offline • No internet needed",menuFriendsSub:"4-Digit Table Code • Invite Friends",freeCoinsClaim:"CLAIM!",freeCoinsBtn:"Free 500🪙",store:"Store",inventory:"Inventory",home:"Home",club:"Club",langBtnText:"🌐 తెలుగు"},te:{appTitle:"బాఱఖట్టా",appSubtitle:"సాంప్రదాయ 7x7 పల్లెటూరి గవ్వల బోర్డు ఆట",gameCoins:"గేమ్ కాయిన్స్",name:"పేరు",potCoins:"పాట్ కాయిన్స్",room:"రూమ్",boardNumber:"బోర్డు నంబర్",chat:"చాట్",playWithFriend:"మిత్రుడితో ఆట",bet:"బెట్",exit:"నిష్క్రమించు",rules:"నియమాలు",selectPlayerCount:"ఆటగాళ్ల సంఖ్య ఎంచుకోండి (2 లేదా 4)",twoPlayers:"2 గురు ఆటగాళ్ళు",twoPlayersSub:"1 vs 1 ముఖాముఖి ఆట",fourPlayers:"4 గురు ఆటగాళ్ళు",fourPlayersSub:"2 vs 2 టీమ్ మ్యాచ్ (2 హోమ్స్)",selectMode2p:"2-ఆటగాళ్ల విధానం ఎంచుకోండి",selectMode4p:"4-ఆటగాళ్ల విధానం ఎంచుకోండి",playVsComputer:"కంప్యూటర్‌తో ఆడండి (1v1)",playVsComputerSub:"సిస్టమ్ AI తో సింగిల్ ప్లేయర్ ఆట",playWithFriend2p:"మిత్రుడితో ఆడండి (1v1)",playWithFriend2pSub:"బోర్డు నంబర్‌తో వేరే ఫోన్‌లో ఉన్న మిత్రుడిని ఆహ్వానించండి",twoFriendsAIPair:"2 గురు మిత్రులు + 2 AI జోడీ",twoFriendsAIPairSub:"మీరు & మిత్రుడు (టీమ్ 1) vs సిస్టమ్ AI జోడీ (టీమ్ 2)",solo4p:"సోలో (1 మనిషి + 3 AI)",solo4pSub:"మీరు & AI మిత్రుడు vs 2 AI ప్రత్యర్థులు",fourFriendsOnline:"4 గురు మిత్రులు ఆన్‌లైన్",fourFriendsOnlineSub:"బోర్డు నంబర్ పంపి మిత్రులను ఆహ్వానించండి",requestFriendHero:"ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",requestFriendHeroSub:"బోర్డు నంబర్, వాట్సాప్ లింక్ & QR కోడ్ షేర్ చేయండి",choosePotCoins:"పాట్ కాయిన్స్ / బెట్ పందెం ఎంచుకోండి",yourStake:"మీ పందెం",winnerTakesPot:"విజేతకు మొత్తం పాట్",startGame:"ఆట ప్రారంభించండి",rulesGuide:"ఆట నియమాలు",matchHistory:"మ్యాచ్ హిస్టరీ",switchAccount:"ఖాతా మార్చండి",tossGuvvalu:"గువ్వలు విసరండి",tossingGuvvalu:"విసురుతున్నారు...",guvvaluInPalm:"అరచేతిలో గువ్వలు",tapPalmToToss:"అరచేతిలో గువ్వలు — విసరడానికి నొక్కండి!",tossedOnMat:"బోర్డు చాపపై పడిన గువ్వలు",yourTurn:"👉 మీ వంతు!",waitingForTurn:"⏳ {name} వంతు",computerThinking:"కంప్యూటర్ ఆలోచిస్తోంది...",bonusRoll:"⭐ బోనస్ టర్న్!",roll_1:"ఒక్కటి (1)",roll_2:"రెండు (2)",roll_3:"మూడు (3)",roll_4:"నాలుగు (4)",roll_5:"ఐదు (5)",roll_6:"ఆరు (6)",roll_12:"బాఱ! (12)",gate23Title:"⚔️ రెండు హోమ్‌ల గేట్ 23 తెరుచుకుంది!",gate23Msg:"టీమ్ 1 మరియు టీమ్ 2 రెండూ కట్టా కొట్టి గేట్ 23 తెరిచాయి! రెండు జట్లూ ఇప్పుడు లోపలి 5/5 స్క్వాడ్‌లోకి ప్రవేశించవచ్చు. ఆటను ఇలాగే కొనసాగించాలా లేదా మళ్లీ మొదటి నుండి ప్రారంభించాలా?",btnContinueGame:"▶️ ఆట కొనసాగించు",btnStartAgain:"🔄 మళ్లీ ప్రారంభించు",victoryTitle:"విజయం!",victoryDesc:"టీమ్ {team} ఘన విజయం సాధించింది!",winReasonSquad:"🎉 6 గువ్వలూ 5/5 స్క్వాడ్‌లోకి చేరాయి! బయటి 7/7 ట్రాక్‌లో ప్రత్యర్థి చంపడానికి ఏ కాయిన్ మిగల్లేదు! టీమ్ {team} విజేత!",winReasonCenter:"🏆 మొత్తం 6 గువ్వలూ సెంటర్ హోమ్ (సెంట్ మార్క్) చేరుకున్నాయి!",rematchBtn:"🎲 లాబీకి తిరిగి వెళ్ళు",mpTitle:"ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",mpSubtitle:"Wi-Fi / మొబైల్ నెట్‌వర్క్ ద్వారా రియల్-టైమ్ మల్టీప్లేయర్",guaranteedBoardNumber:"ఖచ్చితమైన బోర్డు నంబర్",uniqueBnHint:"ప్రత్యేక బోర్డు నంబర్ — హిస్టరీలో ఎప్పటికీ పునరావృతం కాదు!",whatsappShare:"వాట్సాప్‌లో మిత్రుడిని ఆహ్వానించండి",scanQrHint:"వెంటనే జాయిన్ కావడానికి మిత్రుడు కెమెరాతో స్కాన్ చేయవచ్చు!",copyLink:"లింక్ కాపీ చేయండి",copyCode:"కాపీ",copied:"✅ కాపీ అయింది!",boardPlayers:"బోర్డు ఆటగాళ్ళు",startWithAIPair:"🤝 సిస్టమ్ AI జోడీతో ఇప్పుడే ఆడండి",twoFriendsNotice:"2 గురు మిత్రులు కనెక్ట్ అయ్యారు! మీరిద్దరూ టీమ్ 1. సిస్టమ్ AI ని ఎదుటి జోడీగా (టీమ్ 2) పెట్టి ఇప్పుడే ఆట మొదలుపెట్టవచ్చు!",waitingFriendNotice:"మిత్రుడు లింక్ ఓపెన్ చేయడం లేదా బోర్డు నంబర్ నమోదు చేయడం కోసం వేచి చూస్తున్నాం...",allPlayersReady:"ఆటగాళ్లంతా కనెక్ట్ అయ్యారు! మ్యాచ్ లైవ్‌లో ఉంది.",generateBoardBtn:"🚀 బోర్డు నంబర్ సృష్టించి ఆహ్వానించండి",joinBoardBtn:"🤝 బోర్డులో జాయిన్ అవ్వండి",yourName:"మీ పేరు",matchType:"మ్యాచ్ విధానం",joinExistingCard:"మిత్రుడి బోర్డు నంబర్‌తో జాయిన్ అవ్వండి",enterBnPlaceholder:"ఉదా: BK-260915-101-482",tabExistingLogin:"📱 పాత ఆటగాడు: లాగిన్",tabNewSignUp:"✨ కొత్త ఆటగాడు: సైన్ అప్",mobileNumber:"మొబైల్ నంబర్",tenDigits:"10 అంకెలు",mobilePlaceholder:"ఉదా: 9876543210",loginMobileHint:"మీ ముద్దు పేరు, కాయిన్స్ & హిస్టరీ పొందడానికి 10 అంకెల నంబర్ నమోదు చేయండి",signupMobileHint:"మీ మొబైల్ నంబర్ గోప్యంగా ఉంటుంది. ఆటలో ముద్దు పేరు మాత్రమే కనిపిస్తుంది",fullName:"పూర్తి పేరు",required:"తప్పనిసరి",optional:"ఐచ్ఛికం",fullNamePlaceholder:"ఉదా: మహేష్ రెడ్డి",nickName:"ముద్దు పేరు",nickNamePlaceholder:"ఖాళీగా ఉంచితే మొదటి అక్షరాలు వస్తాయి (ఉదా: MR)",gameDisplayName:"ఆటలో కనిపించే పేరు",loginSubmitBtn:"🎮 బాఱఖట్టా లోకి లాగిన్ అవ్వండి",signUpSubmitBtn:"🚀 సైన్ అప్ చేసి 1,000 కాయిన్స్ పొందండి",firstTimePrompt:"మొదటిసారి బాఱఖట్టా ఆడుతున్నారా?",signUpHere:"ఇక్కడ సైన్ అప్ చేయండి ➔",alreadyHaveAccount:"ఇప్పటికే ఖాతా ఉందా?",loginHere:"మొబైల్‌తో లాగిన్ అవ్వండి ➔",errUnregistered:"ఈ మొబైల్ నంబర్‌తో ఖాతా లేదు. దయచేసి 'సైన్ అప్' ఎంచుకుని ఖాతాను నమోదు చేసుకోండి!",errMissingName:"సైన్ అప్ చేయడానికి దయచేసి మీ పూర్తి పేరు నమోదు చేయండి.",errInvalidMobile:"దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.",menuComputer:"కంప్యూటర్",menuFriends:"మిత్రులు",menuComputerSub:"100% ఆఫ్‌లైన్ • ఇంటర్నెట్ అవసరం లేదు",menuFriendsSub:"4 అంకెల కోడ్ • మిత్రులతో ఆడండి",freeCoinsClaim:"పొందండి!",freeCoinsBtn:"ఉచిత 500🪙",store:"స్టోర్",inventory:"సామాగ్రి",home:"హోమ్",club:"క్లబ్",langBtnText:"🌐 English"}};function k(s,e={}){const t=Pe in Rt?Pe:"en";let n=Rt[t][s]||Rt.en[s]||s;return Object.keys(e).forEach(i=>{n=n.replace(new RegExp(`\\{${i}\\}`,"g"),e[i])}),n}function Sr(s,e,t=null,n={}){const{gameMode:i,diceMode:r,status:o,currentPlayer:a,winner:c}=s,d=t&&t.roomCode,l=d&&t.players&&t.players.length>=2,u=n.walletCoins!==void 0?n.walletCoins:1e3,p=n.matchPot||0,f=n.timeLeft!==void 0?n.timeLeft:30,y=n.unreadChatCount||0,C=vn();let _="timer-normal";return f<=5?_="timer-urgent":f<=10&&(_="timer-warning"),`
    <header class="app-header">
      <!-- Top Row: Logo, Live Timer, and Prominent Quit Button -->
      <div class="header-top-row">
        <div class="header-brand">
          <span class="logo-icon">🐚</span>
          <div class="brand-text-col">
            <h1 class="brand-title">${k("appTitle")}</h1>
            <span class="brand-subtitle">${C==="en"?"బాఱఖట్టా":"Bharakhatta"}</span>
          </div>
        </div>

        <!-- 30s Turn Timer -->
        <div class="turn-timer-pill ${_}" title="30-Second Turn Timer">
          <span class="timer-icon">⏳</span>
          <span class="timer-seconds">${f}s</span>
        </div>

        <!-- Prominent ALWAYS VISIBLE Quit Match Button -->
        <button id="btn-open-exit" class="btn-quit-game-header" title="${k("exit")}">
          🚪 ${k("exit")}
        </button>
      </div>

      <!-- Formatted Middle Line: Game Coins - Nick Name - Pot Coins -->
      <div class="header-economy-bar" id="game-header-bar">
        <div class="econ-pill econ-wallet" id="btn-open-wallet" title="${k("gameCoins")}">
          <span class="econ-icon">🪙</span>
          <span class="econ-label">${k("gameCoins")}:</span>
          <strong class="econ-val">${u.toLocaleString()}</strong>
        </div>

        <span class="econ-sep">•</span>

        ${n.user?`
          <div class="econ-pill econ-user" id="btn-open-profile" title="${k("name")}">
            <span class="econ-icon">👤</span>
            <span class="econ-label">${k("name")}:</span>
            <strong class="econ-val econ-nick">${n.user.nickName||n.user.name}</strong>
          </div>
        `:`
          <button class="btn-login-header" id="btn-header-login" title="Login with Mobile Number">
            📱 Login
          </button>
        `}

        <span class="econ-sep">•</span>

        <div class="econ-pill econ-pot" id="btn-open-bet" title="${k("potCoins")}">
          <span class="econ-icon">🏆</span>
          <span class="econ-label">${k("potCoins")}:</span>
          <strong class="econ-val">🪙${p.toLocaleString()}</strong>
        </div>

        <!-- Room Indicator -->
        ${d?`
          <div class="room-indicator-pill table-live-badge ${l?"table-connected":"table-waiting"}" id="btn-open-mp-badge" title="${k("boardNumber")}: #${t.roomCode}">
            <span class="live-dot">${l?"🟢":"⏳"}</span>
            <span>Table: <strong>#${t.roomCode}</strong></span>
          </div>
        `:""}
      </div>

      <!-- Quick Action Controls -->
      <div class="header-controls">
        <!-- In-Game Chat Button -->
        <button id="btn-open-chat" class="btn-icon btn-chat-glow" title="${k("chat")}">
          💬 ${k("chat")} ${y>0?`<span class="chat-badge">${y}</span>`:""}
        </button>

        <!-- Friends Hub Button -->
        <button id="btn-header-friends" class="btn-icon btn-friends-glow" title="Friends & Rooms">
          👥 Friends
        </button>

        <!-- Bet Adjust -->
        <button id="btn-open-bet" class="btn-icon btn-bet-chip" title="${k("bet")}">
          🪙 ${k("bet")}
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
        <button id="btn-open-rules" class="btn-icon" title="${k("rules")}">
          📜
        </button>
      </div>
    </header>
  `}function Mi(s){return!s||s.length===0?"":`
    <div class="live-ticker-strip">
      <span class="ticker-icon">📢</span>
      <span class="ticker-text">${s[s.length-1].text}</span>
    </div>
  `}function Tr(s){return`
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
  `}var Cn={};(function s(e,t,n,i){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!e.OffscreenCanvas)return!1;try{var m=new OffscreenCanvas(1,1),h=m.getContext("2d");h.fillRect(0,0,1,1);var B=m.transferToImageBitmap();h.createPattern(B,"no-repeat")}catch{return!1}return!0})();function c(){}function d(m){var h=t.exports.Promise,B=h!==void 0?h:e.Promise;return typeof B=="function"?new B(m):(m(c,c),null)}var l=(function(m,h){return{transform:function(B){if(m)return B;if(h.has(B))return h.get(B);var D=new OffscreenCanvas(B.width,B.height),G=D.getContext("2d");return G.drawImage(B,0,0),h.set(B,D),D},clear:function(){h.clear()}}})(a,new Map),u=(function(){var m=Math.floor(16.666666666666668),h,B,D={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(L){var j=Math.random();return D[j]=requestAnimationFrame(function I(U){G===U||G+m-1<U?(G=U,delete D[j],L()):D[j]=requestAnimationFrame(I)}),j},B=function(L){D[L]&&cancelAnimationFrame(D[L])}):(h=function(L){return setTimeout(L,m)},B=function(L){return clearTimeout(L)}),{frame:h,cancel:B}})(),p=(function(){var m,h,B={};function D(G){function L(j,I){G.postMessage({options:j||{},callback:I})}G.init=function(I){var U=I.transferControlToOffscreen();G.postMessage({canvas:U},[U])},G.fire=function(I,U,x){if(h)return L(I,null),h;var W=Math.random().toString(36).slice(2);return h=d(function(J){function Y(te){te.data.callback===W&&(delete B[W],G.removeEventListener("message",Y),h=null,l.clear(),x(),J())}G.addEventListener("message",Y),L(I,W),B[W]=Y.bind(null,{data:{callback:W}})}),h},G.reset=function(){G.postMessage({reset:!0});for(var I in B)B[I](),delete B[I]}}return function(){if(m)return m;if(!n&&r){var G=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{m=new Worker(URL.createObjectURL(new Blob([G])))}catch(L){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",L),null}D(m)}return m}})(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(m,h){return h?h(m):m}function C(m){return m!=null}function _(m,h,B){return y(m&&C(m[h])?m[h]:f[h],B)}function T(m){return m<0?0:Math.floor(m)}function H(m,h){return Math.floor(Math.random()*(h-m))+m}function E(m){return parseInt(m,16)}function w(m){return m.map(Z)}function Z(m){var h=String(m).replace(/[^0-9a-f]/gi,"");return h.length<6&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]),{r:E(h.substring(0,2)),g:E(h.substring(2,4)),b:E(h.substring(4,6))}}function R(m){var h=_(m,"origin",Object);return h.x=_(h,"x",Number),h.y=_(h,"y",Number),h}function $(m){m.width=document.documentElement.clientWidth,m.height=document.documentElement.clientHeight}function A(m){var h=m.getBoundingClientRect();m.width=h.width,m.height=h.height}function M(m){var h=document.createElement("canvas");return h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=m,h}function F(m,h,B,D,G,L,j,I,U){m.save(),m.translate(h,B),m.rotate(L),m.scale(D,G),m.arc(0,0,1,j,I,U),m.restore()}function O(m){var h=m.angle*(Math.PI/180),B=m.spread*(Math.PI/180);return{x:m.x,y:m.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:m.startVelocity*.5+Math.random()*m.startVelocity,angle2D:-h+(.5*B-Math.random()*B),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:m.color,shape:m.shape,tick:0,totalTicks:m.ticks,decay:m.decay,drift:m.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:m.gravity*3,ovalScalar:.6,scalar:m.scalar,flat:m.flat}}function N(m,h){h.x+=Math.cos(h.angle2D)*h.velocity+h.drift,h.y+=Math.sin(h.angle2D)*h.velocity+h.gravity,h.velocity*=h.decay,h.flat?(h.wobble=0,h.wobbleX=h.x+10*h.scalar,h.wobbleY=h.y+10*h.scalar,h.tiltSin=0,h.tiltCos=0,h.random=1):(h.wobble+=h.wobbleSpeed,h.wobbleX=h.x+10*h.scalar*Math.cos(h.wobble),h.wobbleY=h.y+10*h.scalar*Math.sin(h.wobble),h.tiltAngle+=.1,h.tiltSin=Math.sin(h.tiltAngle),h.tiltCos=Math.cos(h.tiltAngle),h.random=Math.random()+2);var B=h.tick++/h.totalTicks,D=h.x+h.random*h.tiltCos,G=h.y+h.random*h.tiltSin,L=h.wobbleX+h.random*h.tiltCos,j=h.wobbleY+h.random*h.tiltSin;if(m.fillStyle="rgba("+h.color.r+", "+h.color.g+", "+h.color.b+", "+(1-B)+")",m.beginPath(),o&&h.shape.type==="path"&&typeof h.shape.path=="string"&&Array.isArray(h.shape.matrix))m.fill(Te(h.shape.path,h.shape.matrix,h.x,h.y,Math.abs(L-D)*.1,Math.abs(j-G)*.1,Math.PI/10*h.wobble));else if(h.shape.type==="bitmap"){var I=Math.PI/10*h.wobble,U=Math.abs(L-D)*.1,x=Math.abs(j-G)*.1,W=h.shape.bitmap.width*h.scalar,J=h.shape.bitmap.height*h.scalar,Y=new DOMMatrix([Math.cos(I)*U,Math.sin(I)*U,-Math.sin(I)*x,Math.cos(I)*x,h.x,h.y]);Y.multiplySelf(new DOMMatrix(h.shape.matrix));var te=m.createPattern(l.transform(h.shape.bitmap),"no-repeat");te.setTransform(Y),m.globalAlpha=1-B,m.fillStyle=te,m.fillRect(h.x-W/2,h.y-J/2,W,J),m.globalAlpha=1}else if(h.shape==="circle")m.ellipse?m.ellipse(h.x,h.y,Math.abs(L-D)*h.ovalScalar,Math.abs(j-G)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI):F(m,h.x,h.y,Math.abs(L-D)*h.ovalScalar,Math.abs(j-G)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI);else if(h.shape==="star")for(var V=Math.PI/2*3,re=4*h.scalar,he=8*h.scalar,pe=h.x,ge=h.y,ve=5,me=Math.PI/ve;ve--;)pe=h.x+Math.cos(V)*he,ge=h.y+Math.sin(V)*he,m.lineTo(pe,ge),V+=me,pe=h.x+Math.cos(V)*re,ge=h.y+Math.sin(V)*re,m.lineTo(pe,ge),V+=me;else m.moveTo(Math.floor(h.x),Math.floor(h.y)),m.lineTo(Math.floor(h.wobbleX),Math.floor(G)),m.lineTo(Math.floor(L),Math.floor(j)),m.lineTo(Math.floor(D),Math.floor(h.wobbleY));return m.closePath(),m.fill(),h.tick<h.totalTicks}function b(m,h,B,D,G){var L=h.slice(),j=m.getContext("2d"),I,U,x=d(function(W){function J(){I=U=null,j.clearRect(0,0,D.width,D.height),l.clear(),G(),W()}function Y(){n&&!(D.width===i.width&&D.height===i.height)&&(D.width=m.width=i.width,D.height=m.height=i.height),!D.width&&!D.height&&(B(m),D.width=m.width,D.height=m.height),j.clearRect(0,0,D.width,D.height),L=L.filter(function(te){return N(j,te)}),L.length?I=u.frame(Y):J()}I=u.frame(Y),U=J});return{addFettis:function(W){return L=L.concat(W),x},canvas:m,promise:x,reset:function(){I&&u.cancel(I),U&&U()}}}function S(m,h){var B=!m,D=!!_(h||{},"resize"),G=!1,L=_(h,"disableForReducedMotion",Boolean),j=r&&!!_(h||{},"useWorker"),I=j?p():null,U=B?$:A,x=m&&I?!!m.__confetti_initialized:!1,W=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,J;function Y(V,re,he){for(var pe=_(V,"particleCount",T),ge=_(V,"angle",Number),ve=_(V,"spread",Number),me=_(V,"startVelocity",Number),Xe=_(V,"decay",Number),et=_(V,"gravity",Number),tt=_(V,"drift",Number),Ue=_(V,"colors",w),nt=_(V,"ticks",Number),He=_(V,"shapes"),it=_(V,"scalar"),st=!!_(V,"flat"),Ge=R(V),je=pe,we=[],rt=m.width*Ge.x,ot=m.height*Ge.y;je--;)we.push(O({x:rt,y:ot,angle:ge,spread:ve,startVelocity:me,color:Ue[je%Ue.length],shape:He[H(0,He.length)],ticks:nt,decay:Xe,gravity:et,drift:tt,scalar:it,flat:st}));return J?J.addFettis(we):(J=b(m,we,U,re,he),J.promise)}function te(V){var re=L||_(V,"disableForReducedMotion",Boolean),he=_(V,"zIndex",Number);if(re&&W)return d(function(me){me()});B&&J?m=J.canvas:B&&!m&&(m=M(he),document.body.appendChild(m)),D&&!x&&U(m);var pe={width:m.width,height:m.height};I&&!x&&I.init(m),x=!0,I&&(m.__confetti_initialized=!0);function ge(){if(I){var me={getBoundingClientRect:function(){if(!B)return m.getBoundingClientRect()}};U(me),I.postMessage({resize:{width:me.width,height:me.height}});return}pe.width=pe.height=null}function ve(){J=null,D&&(G=!1,e.removeEventListener("resize",ge)),B&&m&&(document.body.contains(m)&&document.body.removeChild(m),m=null,x=!1)}return D&&!G&&(G=!0,e.addEventListener("resize",ge,!1)),I?I.fire(V,pe,ve):Y(V,pe,ve)}return te.reset=function(){I&&I.reset(),J&&J.reset()},te}var ie;function de(){return ie||(ie=S(null,{useWorker:!0,resize:!0})),ie}function Te(m,h,B,D,G,L,j){var I=new Path2D(m),U=new Path2D;U.addPath(I,new DOMMatrix(h));var x=new Path2D;return x.addPath(U,new DOMMatrix([Math.cos(j)*G,Math.sin(j)*G,-Math.sin(j)*L,Math.cos(j)*L,B,D])),x}function ue(m){if(!o)throw new Error("path confetti are not supported in this browser");var h,B;typeof m=="string"?h=m:(h=m.path,B=m.matrix);var D=new Path2D(h),G=document.createElement("canvas"),L=G.getContext("2d");if(!B){for(var j=1e3,I=j,U=j,x=0,W=0,J,Y,te=0;te<j;te+=2)for(var V=0;V<j;V+=2)L.isPointInPath(D,te,V,"nonzero")&&(I=Math.min(I,te),U=Math.min(U,V),x=Math.max(x,te),W=Math.max(W,V));J=x-I,Y=W-U;var re=10,he=Math.min(re/J,re/Y);B=[he,0,0,he,-Math.round(J/2+I)*he,-Math.round(Y/2+U)*he]}return{type:"path",path:h,matrix:B}}function ye(m){var h,B=1,D="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof m=="string"?h=m:(h=m.text,B="scalar"in m?m.scalar:B,G="fontFamily"in m?m.fontFamily:G,D="color"in m?m.color:D);var L=10*B,j=""+L+"px "+G,I=new OffscreenCanvas(L,L),U=I.getContext("2d");U.font=j;var x=U.measureText(h),W=Math.ceil(x.actualBoundingBoxRight+x.actualBoundingBoxLeft),J=Math.ceil(x.actualBoundingBoxAscent+x.actualBoundingBoxDescent),Y=2,te=x.actualBoundingBoxLeft+Y,V=x.actualBoundingBoxAscent+Y;W+=Y+Y,J+=Y+Y,I=new OffscreenCanvas(W,J),U=I.getContext("2d"),U.font=j,U.fillStyle=D,U.fillText(h,te,V);var re=1/B;return{type:"bitmap",bitmap:I.transferToImageBitmap(),matrix:[re,0,0,re,-W*re/2,-J*re/2]}}t.exports=function(){return de().apply(this,arguments)},t.exports.reset=function(){de().reset()},t.exports.create=S,t.exports.shapeFromPath=ue,t.exports.shapeFromText=ye})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Cn,!1);const Mt=Cn.exports;Cn.exports.create;function kr(s,e){if(!s)return"";setTimeout(()=>{try{Mt({particleCount:90,spread:70,origin:{y:.6}}),setTimeout(()=>{Mt({particleCount:60,angle:60,spread:55,origin:{x:0}}),Mt({particleCount:60,angle:120,spread:55,origin:{x:1}})},250)}catch(r){console.log("Confetti trigger:",r)}},100);const t=s.team===1?"Team 1 (Saffron / Bottom)":"Team 2 (Green / Top)",i=s.reason==="SQUAD_5X5_COMPLETE"?k("winReasonSquad",{team:s.team}):k("winReasonCenter");return`
    <div class="modal-backdrop" id="victory-modal-backdrop">
      <div class="modal-dialog victory-dialog">
        <div class="victory-header">
          <div class="trophy-bounce">🏆</div>
          <h2 class="victory-title">${k("victoryTitle")}</h2>
          <span class="victory-subtitle">${k("victoryDesc",{team:s.team})} (${t})</span>
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
              ${i}
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-play-again" id="btn-victory-restart">
            ${k("rematchBtn")}
          </button>
        </div>
      </div>
    </div>
  `}function ms(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $e={},Pt,Pi;function _r(){return Pi||(Pi=1,Pt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Pt}var It={},ke={},Ii;function Ie(){if(Ii)return ke;Ii=1;let s;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return ke.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},ke.getSymbolTotalCodewords=function(n){return e[n]},ke.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},ke.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');s=n},ke.isKanjiModeEnabled=function(){return typeof s<"u"},ke.toSJIS=function(n){return s(n)},ke}var Et={},Ei;function Sn(){return Ei||(Ei=1,(function(s){s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+t)}}s.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},s.from=function(n,i){if(s.isValid(n))return n;try{return e(n)}catch{return i}}})(Et)),Et}var xt,xi;function Rr(){if(xi)return xt;xi=1;function s(){this.buffer=[],this.length=0}return s.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},xt=s,xt}var At,Ai;function Mr(){if(Ai)return At;Ai=1;function s(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return s.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)},s.prototype.get=function(e,t){return this.data[e*this.size+t]},s.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},s.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},At=s,At}var Bt={},Bi;function Pr(){return Bi||(Bi=1,(function(s){const e=Ie().getSymbolSize;s.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,r=e(n),o=r===145?26:Math.ceil((r-13)/(2*i-2))*2,a=[r-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},s.getPositions=function(n){const i=[],r=s.getRowColCoords(n),o=r.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([r[a],r[c]]);return i}})(Bt)),Bt}var wt={},wi;function Ir(){if(wi)return wt;wi=1;const s=Ie().getSymbolSize,e=7;return wt.getPositions=function(n){const i=s(n);return[[0,0],[i-e,0],[0,i-e]]},wt}var Ot={},Oi;function Er(){return Oi||(Oi=1,(function(s){s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};s.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},s.from=function(i){return s.isValid(i)?parseInt(i,10):void 0},s.getPenaltyN1=function(i){const r=i.size;let o=0,a=0,c=0,d=null,l=null;for(let u=0;u<r;u++){a=c=0,d=l=null;for(let p=0;p<r;p++){let f=i.get(u,p);f===d?a++:(a>=5&&(o+=e.N1+(a-5)),d=f,a=1),f=i.get(p,u),f===l?c++:(c>=5&&(o+=e.N1+(c-5)),l=f,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},s.getPenaltyN2=function(i){const r=i.size;let o=0;for(let a=0;a<r-1;a++)for(let c=0;c<r-1;c++){const d=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(d===4||d===0)&&o++}return o*e.N2},s.getPenaltyN3=function(i){const r=i.size;let o=0,a=0,c=0;for(let d=0;d<r;d++){a=c=0;for(let l=0;l<r;l++)a=a<<1&2047|i.get(d,l),l>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(l,d),l>=10&&(c===1488||c===93)&&o++}return o*e.N3},s.getPenaltyN4=function(i){let r=0;const o=i.data.length;for(let c=0;c<o;c++)r+=i.data[c];return Math.abs(Math.ceil(r*100/o/5)-10)*e.N4};function t(n,i,r){switch(n){case s.Patterns.PATTERN000:return(i+r)%2===0;case s.Patterns.PATTERN001:return i%2===0;case s.Patterns.PATTERN010:return r%3===0;case s.Patterns.PATTERN011:return(i+r)%3===0;case s.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2===0;case s.Patterns.PATTERN101:return i*r%2+i*r%3===0;case s.Patterns.PATTERN110:return(i*r%2+i*r%3)%2===0;case s.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}s.applyMask=function(i,r){const o=r.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)r.isReserved(c,a)||r.xor(c,a,t(i,c,a))},s.getBestMask=function(i,r){const o=Object.keys(s.Patterns).length;let a=0,c=1/0;for(let d=0;d<o;d++){r(d),s.applyMask(d,i);const l=s.getPenaltyN1(i)+s.getPenaltyN2(i)+s.getPenaltyN3(i)+s.getPenaltyN4(i);s.applyMask(d,i),l<c&&(c=l,a=d)}return a}})(Ot)),Ot}var dt={},$i;function gs(){if($i)return dt;$i=1;const s=Sn(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return dt.getBlocksCount=function(i,r){switch(r){case s.L:return e[(i-1)*4+0];case s.M:return e[(i-1)*4+1];case s.Q:return e[(i-1)*4+2];case s.H:return e[(i-1)*4+3];default:return}},dt.getTotalCodewordsCount=function(i,r){switch(r){case s.L:return t[(i-1)*4+0];case s.M:return t[(i-1)*4+1];case s.Q:return t[(i-1)*4+2];case s.H:return t[(i-1)*4+3];default:return}},dt}var $t={},We={},Ni;function xr(){if(Ni)return We;Ni=1;const s=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)s[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)s[i]=s[i-255]})(),We.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},We.exp=function(n){return s[n]},We.mul=function(n,i){return n===0||i===0?0:s[e[n]+e[i]]},We}var Li;function Ar(){return Li||(Li=1,(function(s){const e=xr();s.mul=function(n,i){const r=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<i.length;a++)r[o+a]^=e.mul(n[o],i[a]);return r},s.mod=function(n,i){let r=new Uint8Array(n);for(;r.length-i.length>=0;){const o=r[0];for(let c=0;c<i.length;c++)r[c]^=e.mul(i[c],o);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},s.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let r=0;r<n;r++)i=s.mul(i,new Uint8Array([1,e.exp(r)]));return i}})($t)),$t}var Nt,Di;function Br(){if(Di)return Nt;Di=1;const s=Ar();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=s.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const r=s.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(r,o),a}return r},Nt=e,Nt}var Lt={},Dt={},Ft={},Fi;function bs(){return Fi||(Fi=1,Ft.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Ft}var Ce={},Ui;function ys(){if(Ui)return Ce;Ui=1;const s="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Ce.KANJI=new RegExp(t,"g"),Ce.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Ce.BYTE=new RegExp(n,"g"),Ce.NUMERIC=new RegExp(s,"g"),Ce.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),r=new RegExp("^"+s+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Ce.testKanji=function(c){return i.test(c)},Ce.testNumeric=function(c){return r.test(c)},Ce.testAlphanumeric=function(c){return o.test(c)},Ce}var Hi;function Ee(){return Hi||(Hi=1,(function(s){const e=bs(),t=ys();s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(r,o){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?r.ccBits[0]:o<27?r.ccBits[1]:r.ccBits[2]},s.getBestModeForData=function(r){return t.testNumeric(r)?s.NUMERIC:t.testAlphanumeric(r)?s.ALPHANUMERIC:t.testKanji(r)?s.KANJI:s.BYTE},s.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},s.isValid=function(r){return r&&r.bit&&r.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+i)}}s.from=function(r,o){if(s.isValid(r))return r;try{return n(r)}catch{return o}}})(Dt)),Dt}var Gi;function wr(){return Gi||(Gi=1,(function(s){const e=Ie(),t=gs(),n=Sn(),i=Ee(),r=bs(),o=7973,a=e.getBCHDigit(o);function c(p,f,y){for(let C=1;C<=40;C++)if(f<=s.getCapacity(C,y,p))return C}function d(p,f){return i.getCharCountIndicator(p,f)+4}function l(p,f){let y=0;return p.forEach(function(C){const _=d(C.mode,f);y+=_+C.getBitsLength()}),y}function u(p,f){for(let y=1;y<=40;y++)if(l(p,y)<=s.getCapacity(y,f,i.MIXED))return y}s.from=function(f,y){return r.isValid(f)?parseInt(f,10):y},s.getCapacity=function(f,y,C){if(!r.isValid(f))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=i.BYTE);const _=e.getSymbolTotalCodewords(f),T=t.getTotalCodewordsCount(f,y),H=(_-T)*8;if(C===i.MIXED)return H;const E=H-d(C,f);switch(C){case i.NUMERIC:return Math.floor(E/10*3);case i.ALPHANUMERIC:return Math.floor(E/11*2);case i.KANJI:return Math.floor(E/13);case i.BYTE:default:return Math.floor(E/8)}},s.getBestVersionForData=function(f,y){let C;const _=n.from(y,n.M);if(Array.isArray(f)){if(f.length>1)return u(f,_);if(f.length===0)return 1;C=f[0]}else C=f;return c(C.mode,C.getLength(),_)},s.getEncodedBits=function(f){if(!r.isValid(f)||f<7)throw new Error("Invalid QR Code version");let y=f<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return f<<12|y}})(Lt)),Lt}var Ut={},ji;function Or(){if(ji)return Ut;ji=1;const s=Ie(),e=1335,t=21522,n=s.getBCHDigit(e);return Ut.getEncodedBits=function(r,o){const a=r.bit<<3|o;let c=a<<10;for(;s.getBCHDigit(c)-n>=0;)c^=e<<s.getBCHDigit(c)-n;return(a<<10|c)^t},Ut}var Ht={},Gt,qi;function $r(){if(qi)return Gt;qi=1;const s=Ee();function e(t){this.mode=s.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),n.put(o,10);const a=this.data.length-i;a>0&&(r=this.data.substr(i),o=parseInt(r,10),n.put(o,a*3+1))},Gt=e,Gt}var jt,Vi;function Nr(){if(Vi)return jt;Vi=1;const s=Ee(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=s.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r+2<=this.data.length;r+=2){let o=e.indexOf(this.data[r])*45;o+=e.indexOf(this.data[r+1]),i.put(o,11)}this.data.length%2&&i.put(e.indexOf(this.data[r]),6)},jt=t,jt}var qt,Wi;function Lr(){if(Wi)return qt;Wi=1;const s=Ee();function e(t){this.mode=s.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},qt=e,qt}var Vt,Ji;function Dr(){if(Ji)return Vt;Ji=1;const s=Ee(),e=Ie();function t(n){this.mode=s.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let r=e.toSJIS(this.data[i]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),n.put(r,13)}},Vt=t,Vt}var Wt={exports:{}},zi;function Fr(){return zi||(zi=1,(function(s){var e={single_source_shortest_paths:function(t,n,i){var r={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,d,l,u,p,f,y,C,_;!a.empty();){c=a.pop(),d=c.value,u=c.cost,p=t[d]||{};for(l in p)p.hasOwnProperty(l)&&(f=p[l],y=u+f,C=o[l],_=typeof o[l]>"u",(_||C>y)&&(o[l]=y,a.push(l,y),r[l]=d))}if(typeof i<"u"&&typeof o[i]>"u"){var T=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(T)}return r},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],r=n;r;)i.push(r),t[r],r=t[r];return i.reverse(),i},find_path:function(t,n,i){var r=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(r,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},r;t=t||{};for(r in n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};s.exports=e})(Wt)),Wt.exports}var Ki;function Ur(){return Ki||(Ki=1,(function(s){const e=Ee(),t=$r(),n=Nr(),i=Lr(),r=Dr(),o=ys(),a=Ie(),c=Fr();function d(T){return unescape(encodeURIComponent(T)).length}function l(T,H,E){const w=[];let Z;for(;(Z=T.exec(E))!==null;)w.push({data:Z[0],index:Z.index,mode:H,length:Z[0].length});return w}function u(T){const H=l(o.NUMERIC,e.NUMERIC,T),E=l(o.ALPHANUMERIC,e.ALPHANUMERIC,T);let w,Z;return a.isKanjiModeEnabled()?(w=l(o.BYTE,e.BYTE,T),Z=l(o.KANJI,e.KANJI,T)):(w=l(o.BYTE_KANJI,e.BYTE,T),Z=[]),H.concat(E,w,Z).sort(function($,A){return $.index-A.index}).map(function($){return{data:$.data,mode:$.mode,length:$.length}})}function p(T,H){switch(H){case e.NUMERIC:return t.getBitsLength(T);case e.ALPHANUMERIC:return n.getBitsLength(T);case e.KANJI:return r.getBitsLength(T);case e.BYTE:return i.getBitsLength(T)}}function f(T){return T.reduce(function(H,E){const w=H.length-1>=0?H[H.length-1]:null;return w&&w.mode===E.mode?(H[H.length-1].data+=E.data,H):(H.push(E),H)},[])}function y(T){const H=[];for(let E=0;E<T.length;E++){const w=T[E];switch(w.mode){case e.NUMERIC:H.push([w,{data:w.data,mode:e.ALPHANUMERIC,length:w.length},{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.ALPHANUMERIC:H.push([w,{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.KANJI:H.push([w,{data:w.data,mode:e.BYTE,length:d(w.data)}]);break;case e.BYTE:H.push([{data:w.data,mode:e.BYTE,length:d(w.data)}])}}return H}function C(T,H){const E={},w={start:{}};let Z=["start"];for(let R=0;R<T.length;R++){const $=T[R],A=[];for(let M=0;M<$.length;M++){const F=$[M],O=""+R+M;A.push(O),E[O]={node:F,lastCount:0},w[O]={};for(let N=0;N<Z.length;N++){const b=Z[N];E[b]&&E[b].node.mode===F.mode?(w[b][O]=p(E[b].lastCount+F.length,F.mode)-p(E[b].lastCount,F.mode),E[b].lastCount+=F.length):(E[b]&&(E[b].lastCount=F.length),w[b][O]=p(F.length,F.mode)+4+e.getCharCountIndicator(F.mode,H))}}Z=A}for(let R=0;R<Z.length;R++)w[Z[R]].end=0;return{map:w,table:E}}function _(T,H){let E;const w=e.getBestModeForData(T);if(E=e.from(H,w),E!==e.BYTE&&E.bit<w.bit)throw new Error('"'+T+'" cannot be encoded with mode '+e.toString(E)+`.
 Suggested mode is: `+e.toString(w));switch(E===e.KANJI&&!a.isKanjiModeEnabled()&&(E=e.BYTE),E){case e.NUMERIC:return new t(T);case e.ALPHANUMERIC:return new n(T);case e.KANJI:return new r(T);case e.BYTE:return new i(T)}}s.fromArray=function(H){return H.reduce(function(E,w){return typeof w=="string"?E.push(_(w,null)):w.data&&E.push(_(w.data,w.mode)),E},[])},s.fromString=function(H,E){const w=u(H,a.isKanjiModeEnabled()),Z=y(w),R=C(Z,E),$=c.find_path(R.map,"start","end"),A=[];for(let M=1;M<$.length-1;M++)A.push(R.table[$[M]].node);return s.fromArray(f(A))},s.rawSplit=function(H){return s.fromArray(u(H,a.isKanjiModeEnabled()))}})(Ht)),Ht}var Yi;function Hr(){if(Yi)return It;Yi=1;const s=Ie(),e=Sn(),t=Rr(),n=Mr(),i=Pr(),r=Ir(),o=Er(),a=gs(),c=Br(),d=wr(),l=Or(),u=Ee(),p=Ur();function f(R,$){const A=R.size,M=r.getPositions($);for(let F=0;F<M.length;F++){const O=M[F][0],N=M[F][1];for(let b=-1;b<=7;b++)if(!(O+b<=-1||A<=O+b))for(let S=-1;S<=7;S++)N+S<=-1||A<=N+S||(b>=0&&b<=6&&(S===0||S===6)||S>=0&&S<=6&&(b===0||b===6)||b>=2&&b<=4&&S>=2&&S<=4?R.set(O+b,N+S,!0,!0):R.set(O+b,N+S,!1,!0))}}function y(R){const $=R.size;for(let A=8;A<$-8;A++){const M=A%2===0;R.set(A,6,M,!0),R.set(6,A,M,!0)}}function C(R,$){const A=i.getPositions($);for(let M=0;M<A.length;M++){const F=A[M][0],O=A[M][1];for(let N=-2;N<=2;N++)for(let b=-2;b<=2;b++)N===-2||N===2||b===-2||b===2||N===0&&b===0?R.set(F+N,O+b,!0,!0):R.set(F+N,O+b,!1,!0)}}function _(R,$){const A=R.size,M=d.getEncodedBits($);let F,O,N;for(let b=0;b<18;b++)F=Math.floor(b/3),O=b%3+A-8-3,N=(M>>b&1)===1,R.set(F,O,N,!0),R.set(O,F,N,!0)}function T(R,$,A){const M=R.size,F=l.getEncodedBits($,A);let O,N;for(O=0;O<15;O++)N=(F>>O&1)===1,O<6?R.set(O,8,N,!0):O<8?R.set(O+1,8,N,!0):R.set(M-15+O,8,N,!0),O<8?R.set(8,M-O-1,N,!0):O<9?R.set(8,15-O-1+1,N,!0):R.set(8,15-O-1,N,!0);R.set(M-8,8,1,!0)}function H(R,$){const A=R.size;let M=-1,F=A-1,O=7,N=0;for(let b=A-1;b>0;b-=2)for(b===6&&b--;;){for(let S=0;S<2;S++)if(!R.isReserved(F,b-S)){let ie=!1;N<$.length&&(ie=($[N]>>>O&1)===1),R.set(F,b-S,ie),O--,O===-1&&(N++,O=7)}if(F+=M,F<0||A<=F){F-=M,M=-M;break}}}function E(R,$,A){const M=new t;A.forEach(function(S){M.put(S.mode.bit,4),M.put(S.getLength(),u.getCharCountIndicator(S.mode,R)),S.write(M)});const F=s.getSymbolTotalCodewords(R),O=a.getTotalCodewordsCount(R,$),N=(F-O)*8;for(M.getLengthInBits()+4<=N&&M.put(0,4);M.getLengthInBits()%8!==0;)M.putBit(0);const b=(N-M.getLengthInBits())/8;for(let S=0;S<b;S++)M.put(S%2?17:236,8);return w(M,R,$)}function w(R,$,A){const M=s.getSymbolTotalCodewords($),F=a.getTotalCodewordsCount($,A),O=M-F,N=a.getBlocksCount($,A),b=M%N,S=N-b,ie=Math.floor(M/N),de=Math.floor(O/N),Te=de+1,ue=ie-de,ye=new c(ue);let m=0;const h=new Array(N),B=new Array(N);let D=0;const G=new Uint8Array(R.buffer);for(let x=0;x<N;x++){const W=x<S?de:Te;h[x]=G.slice(m,m+W),B[x]=ye.encode(h[x]),m+=W,D=Math.max(D,W)}const L=new Uint8Array(M);let j=0,I,U;for(I=0;I<D;I++)for(U=0;U<N;U++)I<h[U].length&&(L[j++]=h[U][I]);for(I=0;I<ue;I++)for(U=0;U<N;U++)L[j++]=B[U][I];return L}function Z(R,$,A,M){let F;if(Array.isArray(R))F=p.fromArray(R);else if(typeof R=="string"){let ie=$;if(!ie){const de=p.rawSplit(R);ie=d.getBestVersionForData(de,A)}F=p.fromString(R,ie||40)}else throw new Error("Invalid data");const O=d.getBestVersionForData(F,A);if(!O)throw new Error("The amount of data is too big to be stored in a QR Code");if(!$)$=O;else if($<O)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+O+`.
`);const N=E($,A,F),b=s.getSymbolSize($),S=new n(b);return f(S,$),y(S),C(S,$),T(S,A,0),$>=7&&_(S,$),H(S,N),isNaN(M)&&(M=o.getBestMask(S,T.bind(null,S,A))),o.applyMask(M,S),T(S,A,M),{modules:S,version:$,errorCorrectionLevel:A,maskPattern:M,segments:F}}return It.create=function($,A){if(typeof $>"u"||$==="")throw new Error("No input text");let M=e.M,F,O;return typeof A<"u"&&(M=e.from(A.errorCorrectionLevel,e.M),F=d.from(A.version),O=o.from(A.maskPattern),A.toSJISFunc&&s.setToSJISFunction(A.toSJISFunc)),Z($,F,M,O)},It}var Jt={},zt={},Qi;function vs(){return Qi||(Qi=1,(function(s){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}s.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:r,scale:r?4:o,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},s.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},s.getImageWidth=function(n,i){const r=s.getScale(n,i);return Math.floor((n+i.margin*2)*r)},s.qrToImageData=function(n,i,r){const o=i.modules.size,a=i.modules.data,c=s.getScale(o,r),d=Math.floor((o+r.margin*2)*c),l=r.margin*c,u=[r.color.light,r.color.dark];for(let p=0;p<d;p++)for(let f=0;f<d;f++){let y=(p*d+f)*4,C=r.color.light;if(p>=l&&f>=l&&p<d-l&&f<d-l){const _=Math.floor((p-l)/c),T=Math.floor((f-l)/c);C=u[a[_*o+T]?1:0]}n[y++]=C.r,n[y++]=C.g,n[y++]=C.b,n[y]=C.a}}})(zt)),zt}var Zi;function Gr(){return Zi||(Zi=1,(function(s){const e=vs();function t(i,r,o){i.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=o,r.width=o,r.style.height=o+"px",r.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}s.render=function(r,o,a){let c=a,d=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(d=n()),c=e.getOptions(c);const l=e.getImageWidth(r.modules.size,c),u=d.getContext("2d"),p=u.createImageData(l,l);return e.qrToImageData(p.data,r,c),t(u,d,l),u.putImageData(p,0,0),d},s.renderToDataURL=function(r,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const d=s.render(r,o,c),l=c.type||"image/png",u=c.rendererOpts||{};return d.toDataURL(l,u.quality)}})(Jt)),Jt}var Kt={},Xi;function jr(){if(Xi)return Kt;Xi=1;const s=vs();function e(i,r){const o=i.a/255,a=r+'="'+i.hex+'"';return o<1?a+" "+r+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function t(i,r,o){let a=i+r;return typeof o<"u"&&(a+=" "+o),a}function n(i,r,o){let a="",c=0,d=!1,l=0;for(let u=0;u<i.length;u++){const p=Math.floor(u%r),f=Math.floor(u/r);!p&&!d&&(d=!0),i[u]?(l++,u>0&&p>0&&i[u-1]||(a+=d?t("M",p+o,.5+f+o):t("m",c,0),c=0,d=!1),p+1<r&&i[u+1]||(a+=t("h",l),l=0)):c++}return a}return Kt.render=function(r,o,a){const c=s.getOptions(o),d=r.modules.size,l=r.modules.data,u=d+c.margin*2,p=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",f="<path "+e(c.color.dark,"stroke")+' d="'+n(l,d,c.margin)+'"/>',y='viewBox="0 0 '+u+" "+u+'"',_='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+y+' shape-rendering="crispEdges">'+p+f+`</svg>
`;return typeof a=="function"&&a(null,_),_},Kt}var es;function qr(){if(es)return $e;es=1;const s=_r(),e=Hr(),t=Gr(),n=jr();function i(r,o,a,c,d){const l=[].slice.call(arguments,1),u=l.length,p=typeof l[u-1]=="function";if(!p&&!s())throw new Error("Callback required as last argument");if(p){if(u<2)throw new Error("Too few arguments provided");u===2?(d=a,a=o,o=c=void 0):u===3&&(o.getContext&&typeof d>"u"?(d=c,c=void 0):(d=c,c=a,a=o,o=void 0))}else{if(u<1)throw new Error("Too few arguments provided");return u===1?(a=o,o=c=void 0):u===2&&!o.getContext&&(c=a,a=o,o=void 0),new Promise(function(f,y){try{const C=e.create(a,c);f(r(C,o,c))}catch(C){y(C)}})}try{const f=e.create(a,c);d(null,r(f,o,c))}catch(f){d(f)}}return $e.create=e.create,$e.toCanvas=i.bind(null,t.render),$e.toDataURL=i.bind(null,t.renderToDataURL),$e.toString=i.bind(null,function(r,o,a){return n.render(r,a)}),$e}var Vr=qr();const Wr=ms(Vr);let ut=null;async function Yt(s){if(ut)return ut;try{return ut=await Wr.toDataURL(s,{width:260,margin:2,color:{dark:"#1e130c",light:"#fffdf7"}}),ut}catch(e){return console.error("QR Code generation error:",e),""}}function Jr(s,e,t){return`
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
  `}function zr(s,e,t,n){const{isConnected:i,roomCode:r,myPlayerId:o,isHost:a,players:c,errorMsg:d,gameMode:l="2p"}=e,u=l==="4p"||e.mode==="4p";let p="";if(r){const f=u?c.length>=4:c.length>=2,y=c.length>=2,_=`https://api.whatsapp.com/send?text=${encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta cowrie board match! 🐚
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
          <a href="${_}" target="_blank" class="btn-whatsapp-share" id="btn-share-whatsapp" rel="noopener noreferrer">
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
            ${c.map(T=>`
              <div class="mp-player-chip ${T.id===o?"mp-chip-me":""}">
                <span class="chip-avatar">${T.team===1?T.id===1?"👑":"🦁":T.id===2?"🦚":"🦜"}</span>
                <div class="chip-details">
                  <span class="chip-name">${T.name}</span>
                  <span class="chip-team">Team ${T.team} ${T.id===o?"(You)":""}</span>
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

        ${!f&&(!u||c.length<2)?`
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
  `}const Cs=[{emoji:"🎲",label:"బాఱ! (Baara 12!)",text:"బాఱ! (Baara 12!) 🎲"},{emoji:"💥",label:"కట్టా! (Katta!)",text:"కట్టా! (Katta Strike!) 💥"},{emoji:"👏",label:"Good Move!",text:"Super move, friend! 👏"},{emoji:"🏃",label:"Catch me!",text:"Catch my coin if you can! 🏃"},{emoji:"⏳",label:"Hurry up!",text:"Hurry up, timer is running! ⏳"},{emoji:"😂",label:"Haha!",text:"Haha! Better luck next roll! 😂"},{emoji:"🤝",label:"Good match!",text:"Great game! Good match! 🤝"},{emoji:"🔥",label:"I will win!",text:"Center Home is mine! 🔥"}],Kr=["😀","😂","🤣","😎","🥳","🔥","👏","🎲","💥","🏃","⏳","👑","🪙","🤝","🎯","🤩"];function Yr(s,e=[],t=1){const n=e.length===0?'<div class="chat-empty-state">💬 Send a smiley, village taunt, or chat message!</div>':e.map(i=>{const r=i.senderId===t;return`
          <div class="chat-msg-row ${r?"msg-me":"msg-friend"}">
            <span class="msg-sender">${r?"You":i.senderName}:</span>
            <span class="msg-bubble">${sn(i.text)}</span>
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
              ${Kr.map(i=>`
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
  `}function Qr(s){return s?`
    <div class="floating-chat-bubble animated-bubble">
      <span class="bubble-avatar">💬</span>
      <div class="bubble-content">
        <span class="bubble-sender">${sn(s.senderName)}:</span>
        <span class="bubble-text">${sn(s.text)}</span>
      </div>
    </div>
  `:""}function sn(s){return s?s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}const Qt="bharakhatta_coins_wallet",Zt=1e3,Zr=500,Xr=100,Tn=[100,250,500,1e3,2500,5e3];class eo{constructor(){this.balance=this.loadBalance()}loadBalance(){try{const e=localStorage.getItem(Qt);if(e!==null){const t=parseInt(e,10);if(!isNaN(t)&&t>=0)return t}return localStorage.setItem(Qt,Zt.toString()),Zt}catch{return Zt}}saveBalance(){try{localStorage.setItem(Qt,this.balance.toString())}catch{}}getBalance(){return this.balance}canAfford(e){return this.balance>=e}placeBet(e){return this.canAfford(e)?(this.balance-=e,this.saveBalance(),!0):!1}awardPot(e){return this.balance+=e,this.saveBalance(),this.balance}addCoins(e){return this.balance+=Math.max(0,e),this.saveBalance(),this.balance}claimRefill(){return this.balance<Xr?(this.balance+=Zr,this.saveBalance(),!0):!1}}const K=new eo;function to(s,e,t=250,n="solo"){const i=t*2,r=e>=t;return`
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
              ${Tn.map(o=>{const a=o===t,c=e>=o;return`
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
  `}class no{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return io(e).buffer}}function io(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s){const r=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(r,n),n+=i.byteLength}return t}function Ss(s){return new so(s).unpack()}function Ts(s){const e=new ro,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class so{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(o);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class ro{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const r=this.pack(e[i]);return r instanceof Promise?r.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,r=Math.floor(i*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>i(r+1))}return i(r+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new no,this._textEncoder=new TextEncoder}}let ks=!0,_s=!0;function Ke(s,e,t){const n=s.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function xe(s,e,t){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){kn("Unable to polyfill events");return}const i=s.RTCPeerConnection.prototype,r=i.addEventListener;i.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const d=l=>{const u=t(l);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,d),r.apply(this,[a,d])};const o=i.removeEventListener;i.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const d=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,d])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function oo(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(ks=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function ao(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(_s=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function kn(){if(typeof window=="object"){if(ks)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function _n(s,e){_s&&console.warn(s+" is deprecated, please use "+e+" instead.")}function co(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n){const i=parseInt(n.version,10);if(i>=90)return{browser:"chrome",version:i}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Ke(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Ke(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Ke(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=Ke(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function ts(s){return Object.prototype.toString.call(s)==="[object Object]"}function Rs(s){return ts(s)?Object.keys(s).reduce(function(e,t){const n=ts(s[t]),i=n?Rs(s[t]):s[t],r=n&&!Object.keys(i).length;return i===void 0||r?e:Object.assign(e,{[t]:i})},{}):s}function rn(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?rn(s,s.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{rn(s,s.get(i),t)})}))}function ns(s,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const r=[];return s.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{s.forEach(a=>{a.type===n&&a.trackId===o.id&&rn(s,a,i)})}),i}const is=kn;function Ms(s,e){if(e.version>=64)return;const t=s&&s.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(d=>{if(d==="require"||d==="advanced"||d==="mediaSource")return;const l=typeof a[d]=="object"?a[d]:{ideal:a[d]};l.exact!==void 0&&typeof l.exact=="number"&&(l.min=l.max=l.exact);const u=function(p,f){return p?p+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(l.ideal!==void 0){c.optional=c.optional||[];let p={};typeof l.ideal=="number"?(p[u("min",d)]=l.ideal,c.optional.push(p),p={},p[u("max",d)]=l.ideal,c.optional.push(p)):(p[u("",d)]=l.ideal,c.optional.push(p))}l.exact!==void 0&&typeof l.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",d)]=l.exact):["min","max"].forEach(p=>{l[p]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(p,d)]=l[p])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},i=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const d=function(l,u,p){u in l&&!(p in l)&&(l[p]=l[u],delete l[u])};a=JSON.parse(JSON.stringify(a)),d(a.audio,"autoGainControl","googAutoGainControl"),d(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let d=a.video.facingMode;d=d&&(typeof d=="object"?d:{ideal:d});const l=e.version<66;if(d&&(d.exact==="user"||d.exact==="environment"||d.ideal==="user"||d.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!l)){delete a.video.facingMode;let u;if(d.exact==="environment"||d.ideal==="environment"?u=["back","rear"]:(d.exact==="user"||d.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(p=>{p=p.filter(y=>y.kind==="videoinput");let f=p.find(y=>u.some(C=>y.label.toLowerCase().includes(C)));return!f&&p.length&&u.includes("back")&&(f=p[p.length-1]),f&&(a.video.deviceId=d.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),is("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return is("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,d){i(a,l=>{t.webkitGetUserMedia(l,c,u=>{d&&d(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,d=>a(d).then(l=>{if(d.audio&&!l.getAudioTracks().length||d.video&&!l.getVideoTracks().length)throw l.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return l},l=>Promise.reject(r(l))))}}}function Ps(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function Is(s,e){if(!(e.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",r=>{let o;s.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)}),i.stream.getTracks().forEach(r=>{let o;s.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else xe(s,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Es(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(i,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=i.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:i}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(a,c){let d=i.apply(this,arguments);return d||(d=e(this,a),this._senders.push(d)),d};const r=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function xs(s,e){if(e.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const n=s.RTCPeerConnection.prototype.getSenders;n&&(s.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const i=s.RTCPeerConnection.prototype.addTrack;i&&(s.RTCPeerConnection.prototype.addTrack=function(){const o=i.apply(this,arguments);return o._pc=this,o}),s.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>ns(a,o.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const n=s.RTCPeerConnection.prototype.getReceivers;n&&(s.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),xe(s,"track",i=>(i.receiver._pc=i.srcElement,i)),s.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>ns(o,r.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const t=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const i=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===i&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===i&&(o?a=!0:o=c),c.track===i)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function As(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(d=>{if(this.getSenders().find(u=>u.track===d))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(d=>a.indexOf(d)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const i=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),i.apply(this,arguments)}}function Bs(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return As(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const l=t.apply(this);return this._reverseStreams=this._reverseStreams||{},l.map(u=>this._reverseStreams[u.id])};const n=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(l){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},l.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[l.id]){const u=new s.MediaStream(l.getTracks());this._streams[l.id]=u,this._reverseStreams[u.id]=l,l=u}n.apply(this,[l])};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(l){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[l.id]||l]),delete this._reverseStreams[this._streams[l.id]?this._streams[l.id].id:l.id],delete this._streams[l.id]},s.RTCPeerConnection.prototype.addTrack=function(l,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const p=[].slice.call(arguments,1);if(p.length!==1||!p[0].getTracks().find(C=>C===l))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(C=>C.track===l))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const y=this._streams[u.id];if(y)y.addTrack(l),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const C=new s.MediaStream([l]);this._streams[u.id]=C,this._reverseStreams[C.id]=u,this.addStream(C)}return this.getSenders().find(C=>C.track===l)};function r(d,l){let u=l.sdp;return Object.keys(d._reverseStreams||[]).forEach(p=>{const f=d._reverseStreams[p],y=d._streams[f.id];u=u.replace(new RegExp(y.id,"g"),f.id)}),new RTCSessionDescription({type:l.type,sdp:u})}function o(d,l){let u=l.sdp;return Object.keys(d._reverseStreams||[]).forEach(p=>{const f=d._reverseStreams[p],y=d._streams[f.id];u=u.replace(new RegExp(f.id,"g"),y.id)}),new RTCSessionDescription({type:l.type,sdp:u})}["createOffer","createAnswer"].forEach(function(d){const l=s.RTCPeerConnection.prototype[d],u={[d](){const p=arguments;return arguments.length&&typeof arguments[0]=="function"?l.apply(this,[y=>{const C=r(this,y);p[0].apply(null,[C])},y=>{p[1]&&p[1].apply(null,y)},arguments[2]]):l.apply(this,arguments).then(y=>r(this,y))}};s.RTCPeerConnection.prototype[d]=u[d]});const a=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const d=c.get.apply(this);return d.type===""?d:r(this,d)}}),s.RTCPeerConnection.prototype.removeTrack=function(l){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!l._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(l._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let p;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(C=>l.track===C)&&(p=this._streams[f])}),p&&(p.getTracks().length===1?this.removeStream(this._reverseStreams[p.id]):p.removeTrack(l.track),this.dispatchEvent(new Event("negotiationneeded")))}}function on(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]})}function ws(s,e){e.version>102||xe(s,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const ss=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:ws,shimAddTrackRemoveTrack:Bs,shimAddTrackRemoveTrackWithNative:As,shimGetSendersWithDtmf:Es,shimGetUserMedia:Ms,shimMediaStream:Ps,shimOnTrack:Is,shimPeerConnection:on,shimSenderReceiverGetStats:xs},Symbol.toStringTag,{value:"Module"}));function Os(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const n=s&&s.MediaStreamTrack;if(t.getUserMedia=function(i,r,o){_n("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o.audio,"autoGainControl","mozAutoGainControl"),i(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function lo(s,e){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(n)}))}function $s(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function an(s,e){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]}))}function Ns(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(d=>{d.type=t[d.type]||d.type})}catch(d){if(d.name!=="TypeError")throw d;c.forEach((l,u)=>{c.set(u,Object.assign({},l,{type:t[l.type]||l.type}))})}return c}).then(o,a)}}function Ls(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Ds(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),xe(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Fs(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){_n("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Us(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function Hs(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.addTransceiver;t&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const r=i.length>0;r&&i.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=i,a.sendEncodings=i,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function Gs(s,e){if(!(typeof s=="object"&&s.RTCRtpSender)||e.version>=110)return;const t=s.RTCRtpSender.prototype.getParameters;t&&(s.RTCRtpSender.prototype.getParameters=function(){const i=t.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function js(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function qs(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const rs=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Hs,shimCreateAnswer:qs,shimCreateOffer:js,shimGetDisplayMedia:lo,shimGetParameters:Gs,shimGetStats:Ns,shimGetUserMedia:Os,shimOnTrack:$s,shimPeerConnection:an,shimRTCDataChannel:Us,shimReceiverGetStats:Ds,shimRemoveStream:Fs,shimSenderGetStats:Ls},Symbol.toStringTag,{value:"Module"}));function Vs(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},s.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(r=>{i.includes(r.track)&&this.removeTrack(r)})})}}function Ws(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const r=new Event("addstream");r.stream=i,this.dispatchEvent(r)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Js(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(d,l){const u=arguments.length>=2?arguments[2]:arguments[0],p=t.apply(this,[u]);return l?(p.then(d,l),Promise.resolve()):p},e.createAnswer=function(d,l){const u=arguments.length>=2?arguments[2]:arguments[0],p=n.apply(this,[u]);return l?(p.then(d,l),Promise.resolve()):p};let a=function(c,d,l){const u=i.apply(this,[c]);return l?(u.then(d,l),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,d,l){const u=r.apply(this,[c]);return l?(u.then(d,l),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,d,l){const u=o.apply(this,[c]);return l?(u.then(d,l),Promise.resolve()):u},e.addIceCandidate=a}function zs(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(Ks(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,i,r){e.mediaDevices.getUserMedia(n).then(i,r)}).bind(e))}function Ks(s){return s&&s.video!==void 0?Object.assign({},s,{video:Rs(s.video)}):s}function Ys(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(_n("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,i)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Qs(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Zs(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Xs(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const os=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Xs,shimCallbacksAPI:Js,shimConstraints:Ks,shimCreateOfferLegacy:Zs,shimGetUserMedia:zs,shimLocalStreamsAPI:Vs,shimRTCIceServerUrls:Ys,shimRemoteStreamsAPI:Ws,shimTrackEventTransceiver:Qs},Symbol.toStringTag,{value:"Module"}));var Xt={exports:{}},as;function uo(){return as||(as=1,(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
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
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{i+=e.writeExtmap(o)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),r=i.fecMechanisms.indexOf("RED")!==-1,o=i.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(p=>e.parseSsrcMedia(p)).filter(p=>p.attribute==="cname"),c=a.length>0&&a[0].ssrc;let d;const l=e.matchPrefix(t,"a=ssrc-group:FID").map(p=>p.substring(17).split(" ").map(y=>parseInt(y,10)));l.length>0&&l[0].length>1&&l[0][0]===c&&(d=l[0][1]),i.codecs.forEach(p=>{if(p.name.toUpperCase()==="RTX"&&p.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(p.parameters.apt,10)};c&&d&&(f.rtx={ssrc:d}),n.push(f),r&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(p=>{p.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
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
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let r=0;r<i.length;r++)switch(i[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},s.exports=e})(Xt)),Xt.exports}var er=uo();const De=ms(er),ho=lr({__proto__:null,default:De},[er]);function pt(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),r=De.parseCandidate(n.candidate);for(const o in r)o in i||Object.defineProperty(i,o,{value:r[o]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},s.RTCIceCandidate.prototype=e.prototype,xe(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function cn(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||xe(s,"icecandidate",e=>{if(e.candidate){const t=De.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function ft(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=De.splitSections(a.sdp);return c.shift(),c.some(d=>{const l=De.parseMLine(d);return l&&l.kind==="application"&&l.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const d=parseInt(c[1],10);return d!==d?-1:d},i=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let d=65536;e.browser==="firefox"&&e.version===57&&(d=65535);const l=De.matchPrefix(a.sdp,"a=max-message-size:");return l.length>0?d=parseInt(l[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(d=2147483637),d},o=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),d=i(c),l=r(arguments[0],c);let u;d===0&&l===0?u=Number.POSITIVE_INFINITY:d===0||l===0?u=Math.max(d,l):u=Math.min(d,l);const p={};Object.defineProperty(p,"maxMessageSize",{get(){return u}}),this._sctp=p}return o.apply(this,arguments)}}function mt(s,e){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(i,r){const o=i.send;i.send=function(){const c=arguments[0],d=c.length||c.size||c.byteLength;if(i.readyState==="open"&&r.sctp&&d>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(i,arguments)}}const n=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},xe(s,"datachannel",i=>(t(i.channel,i.target),i))}function ln(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const r=i.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",i);r.dispatchEvent(o)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function dn(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=i.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&i instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:i.type,sdp:r}):i.sdp=r}return t.apply(this,arguments)}}function gt(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function bt(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const po=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:dn,shimAddIceCandidateNullOrEmpty:gt,shimConnectionState:ln,shimMaxMessageSize:ft,shimParameterlessSetLocalDescription:bt,shimRTCIceCandidate:pt,shimRTCIceCandidateRelayProtocol:cn,shimSendThrowTypeError:mt},Symbol.toStringTag,{value:"Module"}));function fo({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=kn,n=co(s),i={browserDetails:n,commonShim:po,extractVersion:Ke,disableLog:oo,disableWarnings:ao,sdp:ho};switch(n.browser){case"chrome":if(!ss||!on||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=ss,gt(s,n),bt(s),Ms(s,n),Ps(s),on(s,n),Is(s,n),Bs(s,n),Es(s),xs(s,n),ws(s,n),pt(s),cn(s),ln(s),ft(s,n),mt(s,n),dn(s,n);break;case"firefox":if(!rs||!an||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=rs,gt(s,n),bt(s),Os(s,n),an(s,n),Ns(s,n),$s(s),Fs(s),Ls(s),Ds(s),Us(s),Hs(s,n),Gs(s,n),js(s,n),qs(s,n),pt(s),ln(s),ft(s,n),mt(s,n);break;case"safari":if(!os||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=os,gt(s,n),bt(s),Ys(s),Zs(s),Js(s),Vs(s),Ws(s),Qs(s),zs(s),Xs(s),pt(s),cn(s),ft(s,n),mt(s,n),dn(s,n);break;default:t("Unsupported browser!");break}return i}const cs=fo({window:typeof window>"u"?void 0:window});function Ae(s,e,t,n){Object.defineProperty(s,e,{get:t,set:n,enumerable:!0,configurable:!0})}class tr{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),d={__peerData:this._dataCount,n:r,data:c,total:i};t.push(d),o=a,r++}return this._dataCount++,t}}}function mo(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s)t.set(i,n),n+=i.byteLength;return t}const en=cs.default||cs,Je=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return en.browserDetails.browser}getVersion(){return en.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=en.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},go=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),nr=()=>Math.random().toString(36).slice(2),ls={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class bo extends tr{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=ls,this.browser=Je.getBrowser(),this.browserVersion=Je.getVersion(),this.pack=Ts,this.unpack=Ss,this.supports=(function(){const t={browser:Je.isBrowserSupported(),webRTC:Je.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(ls),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Je.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=go,this.randomToken=nr}}const fe=new bo,yo="PeerJS: ";class vo{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[yo,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var P=new vo,Rn={},Co=Object.prototype.hasOwnProperty,le="~";function Ze(){}Object.create&&(Ze.prototype=Object.create(null),new Ze().__proto__||(le=!1));function So(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function ir(s,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new So(t,n||s,i),o=le?le+e:e;return s._events[o]?s._events[o].fn?s._events[o]=[s._events[o],r]:s._events[o].push(r):(s._events[o]=r,s._eventsCount++),s}function yt(s,e){--s._eventsCount===0?s._events=new Ze:delete s._events[e]}function ce(){this._events=new Ze,this._eventsCount=0}ce.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Co.call(t,n)&&e.push(le?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};ce.prototype.listeners=function(e){var t=le?le+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,o=new Array(r);i<r;i++)o[i]=n[i].fn;return o};ce.prototype.listenerCount=function(e){var t=le?le+e:e,n=this._events[t];return n?n.fn?1:n.length:0};ce.prototype.emit=function(e,t,n,i,r,o){var a=le?le+e:e;if(!this._events[a])return!1;var c=this._events[a],d=arguments.length,l,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),d){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,r),!0;case 6:return c.fn.call(c.context,t,n,i,r,o),!0}for(u=1,l=new Array(d-1);u<d;u++)l[u-1]=arguments[u];c.fn.apply(c.context,l)}else{var p=c.length,f;for(u=0;u<p;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),d){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,i);break;default:if(!l)for(f=1,l=new Array(d-1);f<d;f++)l[f-1]=arguments[f];c[u].fn.apply(c[u].context,l)}}return!0};ce.prototype.on=function(e,t,n){return ir(this,e,t,n,!1)};ce.prototype.once=function(e,t,n){return ir(this,e,t,n,!0)};ce.prototype.removeListener=function(e,t,n,i){var r=le?le+e:e;if(!this._events[r])return this;if(!t)return yt(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&yt(this,r);else{for(var a=0,c=[],d=o.length;a<d;a++)(o[a].fn!==t||i&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:yt(this,r)}return this};ce.prototype.removeAllListeners=function(e){var t;return e?(t=le?le+e:e,this._events[t]&&yt(this,t)):(this._events=new Ze,this._eventsCount=0),this};ce.prototype.off=ce.prototype.removeListener;ce.prototype.addListener=ce.prototype.on;ce.prefixed=le;ce.EventEmitter=ce;Rn=ce;var Be={};Ae(Be,"ConnectionType",()=>Re);Ae(Be,"PeerErrorType",()=>se);Ae(Be,"BaseConnectionErrorType",()=>un);Ae(Be,"DataConnectionErrorType",()=>Mn);Ae(Be,"SerializationType",()=>St);Ae(Be,"SocketEventType",()=>_e);Ae(Be,"ServerMessageType",()=>ae);var Re=(function(s){return s.Data="data",s.Media="media",s})({}),se=(function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s})({}),un=(function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s})({}),Mn=(function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s})({}),St=(function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s})({}),_e=(function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s})({}),ae=(function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s})({});const sr="1.5.5";class To extends Rn.EventEmitter{constructor(e,t,n,i,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+i+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+sr),this._disconnected=!1,this._socket.onmessage=i=>{let r;try{r=JSON.parse(i.data),P.log("Server message received:",r)}catch{P.log("Invalid server message",i.data);return}this.emit(_e.Message,r)},this._socket.onclose=i=>{this._disconnected||(P.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(_e.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),P.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){P.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:ae.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(_e.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class rr{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Re.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},r=t.createDataChannel(n.label,i);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){P.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,r=this.connection.provider;P.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(P.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:ae.Candidate,payload:{candidate:o.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":P.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(un.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":P.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(un.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":P.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},P.log("Listening for data channel"),e.ondatachannel=o=>{P.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},P.log("Listening for remote stream"),e.ontrack=o=>{P.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===Re.Media){const d=c;this._addStreamToMediaConnection(a,d)}}}cleanup(){P.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);P.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),P.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Re.Data){const r=this.connection;i={...i,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:ae.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(se.WebRTC,i),P.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(se.WebRTC,n),P.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();P.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),P.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:ae.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(se.WebRTC,i),P.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(se.WebRTC,n),P.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;P.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),P.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){i.emitError(se.WebRTC,o),P.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){P.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),P.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(se.WebRTC,t),P.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(P.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return P.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){P.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class or extends Rn.EventEmitter{emitError(e,t){P.error("Error:",t),this.emit("error",new ko(`${e}`,t))}}class ko extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class ar extends or{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var mn;const Ye=class Ye extends ar{get type(){return Re.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Ye.ID_PREFIX+fe.randomToken(),this._negotiator=new rr(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{P.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{P.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){P.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case ae.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case ae.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:P.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){P.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};mn=new WeakMap,Ve(Ye,mn,Ye.ID_PREFIX="mc_");let vt=Ye;class _o{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${i}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",sr),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){P.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==fe.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===fe.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw P.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var gn,bn;const Me=class Me extends ar{get type(){return Re.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Me.ID_PREFIX+nr(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new rr(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{P.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{P.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{P.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Mn.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case ae.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case ae.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:P.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};gn=new WeakMap,bn=new WeakMap,Ve(Me,gn,Me.ID_PREFIX="dc_"),Ve(Me,bn,Me.MAX_BUFFERED_AMOUNT=8388608);let Ct=Me;class Pn extends Ct{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Ct.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return P.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class tn extends Pn{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new tr,this.serialization=St.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Ss(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=mo(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=Ts(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);P.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Ro extends Pn{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=St.None}}class Mo extends Pn{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=fe.chunkedMTU){this.emitError(Mn.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=St.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var yn;const Qe=class Qe extends or{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Ro,json:Mo,binary:tn,"binary-utf8":tn,default:tn},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:fe.CLOUD_HOST,port:fe.CLOUD_PORT,path:"/",key:Qe.DEFAULT_KEY,token:fe.randomToken(),config:fe.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==fe.CLOUD_HOST?this._options.secure=fe.isSecure():this._options.host==fe.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&P.setLogFunction(this._options.logFunction),P.logLevel=this._options.debug||0,this._api=new _o(t),this._socket=this._createServerConnection(),!fe.supports.audioVideo&&!fe.supports.data){this._delayedAbort(se.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!fe.validateId(n)){this._delayedAbort(se.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(se.ServerError,i))}_createServerConnection(){const e=new To(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(_e.Message,t=>{this._handleMessage(t)}),e.on(_e.Error,t=>{this._abort(se.SocketError,t)}),e.on(_e.Disconnected,()=>{this.disconnected||(this.emitError(se.Network,"Lost connection to server."),this.disconnect())}),e.on(_e.Close,()=>{this.disconnected||this._abort(se.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case ae.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case ae.Error:this._abort(se.ServerError,n.msg);break;case ae.IdTaken:this._abort(se.UnavailableID,`ID "${this.id}" is taken`);break;case ae.InvalidKey:this._abort(se.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case ae.Leave:P.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case ae.Expire:this.emitError(se.PeerUnavailable,`Could not connect to peer ${i}`);break;case ae.Offer:{const r=n.connectionId;let o=this.getConnection(i,r);if(o&&(o.close(),P.warn(`Offer received for existing Connection ID:${r}`)),n.type===Re.Media){const c=new vt(i,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(i,o),this.emit("call",c)}else if(n.type===Re.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(i,o),this.emit("connection",c)}else{P.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){P.warn(`You received a malformed message from ${i} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(i,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):P.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){P.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(se.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){P.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(se.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){P.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new vt(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){P.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){P.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(P.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;P.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)P.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)P.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(se.ServerError,t))}};yn=new WeakMap,Ve(Qe,yn,Qe.DEFAULT_KEY="peerjs");let hn=Qe;var nn=hn;const ds=nn.Peer||nn.default||nn;function Le(){let s=[];try{typeof localStorage<"u"&&(s=JSON.parse(localStorage.getItem("bk_used_4digit_codes")||"[]"))}catch{}let e=1;try{if(typeof localStorage<"u"){const n=localStorage.getItem("bk_4digit_seq");n&&(e=parseInt(n,10)+1)}}catch{}let t="";for(let n=0;n<9e3;n++){const i=((e+n)*3137+1729)%9e3+1e3,r=String(i);if(!s.includes(r)){t=r;break}}t||(t=String(Math.floor(1e3+Math.random()*9e3)));try{typeof localStorage<"u"&&(s.push(t),s.length>8500&&(s=s.slice(-2e3)),localStorage.setItem("bk_used_4digit_codes",JSON.stringify(s)),localStorage.setItem("bk_4digit_seq",String(e+1)))}catch{}return t}function us(s){if(!s)return"";let e=s.toString().trim().toUpperCase().replace(/\s+/g,"");const t=e.match(/^(?:BK-?)?(\d{4})$/);return t?t[1]:(!e.startsWith("BK-")&&!e.startsWith("BK")&&(e=`BK-${e}`),e)}const hs={config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}};class Po{constructor(e={}){this.ws=null,this.peer=null,this.peerConn=null,this.mode="auto",this.roomCode=null,this.myPlayerId=null,this.myTeam=null,this.isHost=!1,this.connected=!1,this.hostName="Player 1",this.guestName="Player 2",this.onRoomCreated=e.onRoomCreated||(()=>{}),this.onRoomJoined=e.onRoomJoined||(()=>{}),this.onPlayerJoined=e.onPlayerJoined||(()=>{}),this.onPlayerLeft=e.onPlayerLeft||(()=>{}),this.onSyncRoll=e.onSyncRoll||(()=>{}),this.onSyncMove=e.onSyncMove||(()=>{}),this.onSyncRestart=e.onSyncRestart||(()=>{}),this.onChatReceived=e.onChatReceived||(()=>{}),this.onBetSynced=e.onBetSynced||(()=>{}),this.onSyncTimeoutPass=e.onSyncTimeoutPass||(()=>{}),this.onStart4pAIPair=e.onStart4pAIPair||(()=>{}),this.onSyncGameState=e.onSyncGameState||(()=>{}),this.onGate23Decision=e.onGate23Decision||(()=>{}),this.onError=e.onError||(()=>{}),this.onStatusChange=e.onStatusChange||(()=>{}),this.currentBet=250,this.gameMode="2p",this.peerConns=new Set}isP2PPreferred(){const e=window.location.hostname;return e.includes("github.io")||window.location.protocol==="file:"||!e.includes("localhost")&&!e.includes("127.0.0.1")&&!e.includes("192.168.")}connectWS(){return this.ws&&(this.ws.readyState===0||this.ws.readyState===1)?Promise.resolve():new Promise((e,t)=>{try{const n=window.location.protocol==="https:"?"wss:":"ws:",i=window.location.host,r=`${n}//${i}/ws`;this.ws=new WebSocket(r),this.ws.onopen=()=>{this.connected=!0,this.mode="ws",this.onStatusChange("connected"),e()},this.ws.onclose=()=>{this.connected=!1,this.onStatusChange("disconnected")},this.ws.onerror=o=>{console.warn("WebSocket not available, falling back to WebRTC:",o),this.ws=null,t(o)},this.ws.onmessage=o=>{try{const a=JSON.parse(o.data);this.handleMessage(a)}catch(a){console.error("Failed to parse WS message:",a)}}}catch(n){t(n)}})}handleMessage(e){switch(e.type){case"ROOM_CREATED":this.roomCode=e.roomCode,this.myPlayerId=e.playerId,this.myTeam=e.team,this.isHost=!0,this.gameMode=e.mode||"2p",this.onRoomCreated(e);break;case"ROOM_JOINED":this.roomCode=e.roomCode,this.myPlayerId=e.playerId,this.myTeam=e.team,this.isHost=!1,this.gameMode=e.mode||"2p",this.onRoomJoined(e);break;case"PLAYER_JOINED":this.onPlayerJoined(e.player,e.players);break;case"PLAYER_LEFT":this.onPlayerLeft(e.playerId,e.players);break;case"ACTION_ROLL":this.onSyncRoll(e.rollResult);break;case"ACTION_MOVE":this.onSyncMove(e.move);break;case"ACTION_RESTART":this.onSyncRestart();break;case"ACTION_CHAT":this.onChatReceived(e);break;case"ROOM_BET":this.currentBet=e.bet,this.onBetSynced(e.bet);break;case"ACTION_TIMEOUT_PASS":this.onSyncTimeoutPass(e);break;case"START_4P_AI_PAIR":this.onStart4pAIPair(e);break;case"SYNC_GAME_STATE":this.onSyncGameState(e.state);break;case"GATE_23_DECISION":this.onGate23Decision(e.decision);break;case"ERROR":this.onError(e.message);break}}async createRoom(e="2p",t="Player 1",n=null,i=null){if(this.hostName=t,this.hostMeta=i,this.gameMode=e,!this.isP2PPreferred())try{await this.connectWS(),this.send({type:"CREATE_ROOM",mode:e,playerName:t,roomCode:n,userMeta:i});return}catch(a){console.log("WS failed, switching to P2P WebRTC:",a)}this.mode="p2p";const r=n?us(n):Le(),o=`bk-board-${r.toLowerCase().replace(/[^a-z0-9]/g,"")}`;if(this.peer)try{this.peer.destroy()}catch{}this.peer=new ds(o,hs),this.peer.on("open",()=>{this.roomCode=r,this.myPlayerId=1,this.myTeam=1,this.isHost=!0,this.connected=!0,this.onStatusChange("connected"),this.onRoomCreated({roomCode:r,playerId:1,team:1,mode:e,players:[{id:1,team:1,name:t,isHost:!0}]})}),this.peer.on("connection",a=>{this.peerConn=a,this.peerConns.add(a),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{if(a.open)try{a.send({type:"HEARTBEAT_PING",t:Date.now()})}catch{}},3e3),a.on("open",()=>{}),a.on("data",c=>{var d,l,u;if(c.type==="HEARTBEAT_PING"){try{a.send({type:"HEARTBEAT_PONG"})}catch{}return}if(c.type!=="HEARTBEAT_PONG"){if(this.isHost&&this.peerConns.size>1)for(const p of this.peerConns)p!==a&&p.open&&p.send(c);if(c.type==="JOIN_ROOM"){this.guestName=c.playerName||"Player 2",this.guestMeta={mobile:c.mobile||"",nickName:c.nickName||c.playerName||"Player 2",fullName:c.fullName||c.playerName||"Player 2"};const p=this.gameMode==="4p",f=p?3:2,y=p?1:2,C=[{id:1,team:1,name:this.hostName,isHost:!0},{id:f,team:y,name:this.guestName,isHost:!1}];a.send({type:"ROOM_JOINED",roomCode:r,playerId:f,team:y,mode:this.gameMode,players:C,bet:this.currentBet,hostMobile:((d=this.hostMeta)==null?void 0:d.mobile)||"",hostNick:((l=this.hostMeta)==null?void 0:l.nickName)||this.hostName,hostFullName:((u=this.hostMeta)==null?void 0:u.fullName)||this.hostName}),this.onPlayerJoined({id:f,team:y,name:this.guestName,mobile:c.mobile||"",nickName:c.nickName||this.guestName,fullName:c.fullName||this.guestName},C)}else this.handleMessage(c)}}),a.on("close",()=>{this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.peerConns.delete(a),this.onPlayerLeft(2,[{id:1,team:1,name:this.hostName}])})}),this.peer.on("error",a=>{console.error("PeerJS Host error:",a),a.type==="unavailable-id"?this.createRoom(e,t,null,i):this.onError(`Network error: ${a.message||a.type}`)})}async joinRoom(e,t="Player 2",n=null){this.guestName=t,this.guestMeta=n;const i=us(e);if(!this.isP2PPreferred())try{await this.connectWS(),this.send({type:"JOIN_ROOM",roomCode:i,playerName:t,userMeta:n});return}catch(r){console.log("WS failed, switching to P2P WebRTC:",r)}if(this.mode="p2p",this.peer)try{this.peer.destroy()}catch{}this.peer=new ds(null,hs),this.peer.on("open",()=>{const r=`bk-board-${i.toLowerCase().replace(/[^a-z0-9]/g,"")}`,o=this.peer.connect(r,{reliable:!0});this.peerConn=o,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{if(o.open)try{o.send({type:"HEARTBEAT_PING",t:Date.now()})}catch{}},3e3),o.on("open",()=>{var a,c,d;this.connected=!0,this.onStatusChange("connected"),o.send({type:"JOIN_ROOM",roomCode:i,playerName:t,mobile:((a=this.guestMeta)==null?void 0:a.mobile)||"",nickName:((c=this.guestMeta)==null?void 0:c.nickName)||t,fullName:((d=this.guestMeta)==null?void 0:d.fullName)||t})}),o.on("data",a=>{if(a.type==="HEARTBEAT_PING"){try{o.send({type:"HEARTBEAT_PONG"})}catch{}return}a.type!=="HEARTBEAT_PONG"&&this.handleMessage(a)}),o.on("close",()=>{this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.connected=!1,this.onStatusChange("disconnected"),this.onError("Room host has disconnected.")})}),this.peer.on("error",r=>{console.error("PeerJS Guest error:",r),this.onError(`Could not join Board #${i}. Please ensure host is waiting and try again.`)})}sendStart4pAIPair(){this.roomCode&&this.send({type:"START_4P_AI_PAIR",roomCode:this.roomCode,bet:this.currentBet})}sendRoll(e){this.roomCode&&this.send({type:"ACTION_ROLL",roomCode:this.roomCode,rollResult:e})}sendMove(e){this.roomCode&&this.send({type:"ACTION_MOVE",roomCode:this.roomCode,move:e})}sendRestart(){this.roomCode&&this.send({type:"ACTION_RESTART",roomCode:this.roomCode})}sendChat(e,t="Player"){if(!this.roomCode)return;const n={type:"ACTION_CHAT",roomCode:this.roomCode,senderId:this.myPlayerId,senderName:t,text:e,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.send(n),this.onChatReceived(n)}sendBet(e){this.currentBet=e,this.roomCode&&this.send({type:"ROOM_BET",roomCode:this.roomCode,bet:e})}sendTimeoutPass(e){this.roomCode&&this.send({type:"ACTION_TIMEOUT_PASS",roomCode:this.roomCode,playerId:e})}sendGameState(e){this.roomCode&&this.send({type:"SYNC_GAME_STATE",roomCode:this.roomCode,state:e})}sendGate23Decision(e){this.roomCode&&this.send({type:"GATE_23_DECISION",roomCode:this.roomCode,decision:e})}send(e){if(this.mode==="p2p")if(this.peerConns&&this.peerConns.size>0)for(const t of this.peerConns)t&&t.open&&t.send(e);else this.peerConn&&this.peerConn.open&&this.peerConn.send(e);else this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(e))}leaveRoom(){if(this.roomCode=null,this.myPlayerId=null,this.myTeam=null,this.isHost=!1,this.connected=!1,this.peerConns){for(const e of this.peerConns)try{e.close()}catch{}this.peerConns.clear()}if(this.peerConn){try{this.peerConn.close()}catch{}this.peerConn=null}if(this.peer){try{this.peer.destroy()}catch{}this.peer=null}if(this.ws){try{this.ws.close()}catch{}this.ws=null}}}const ht="bk_current_user_mobile",ps="bk_all_registered_mobiles",Se={getItem(s){try{if(typeof localStorage<"u")return localStorage.getItem(s)}catch{}return null},setItem(s,e){try{typeof localStorage<"u"&&localStorage.setItem(s,e)}catch{}},removeItem(s){try{typeof localStorage<"u"&&localStorage.removeItem(s)}catch{}}};function pn(s,e){if(e&&e.trim())return e.trim();if(!s||!s.trim())return"Player";const t=s.trim().split(/\s+/).filter(Boolean);return t.length===0?"Player":t.map(n=>n[0].toUpperCase()).join("")}const Ne=[{id:"f_1",mobile:"9876543210",nickName:"Aatikur",fullName:"Aatikur Rahman",avatar:"👤",level:33},{id:"f_2",mobile:"9876543211",nickName:"sumongamingf9c",fullName:"Sumon Gaming",avatar:"🕵️",level:34},{id:"f_3",mobile:"9876543212",nickName:"sarker",fullName:"Sarker Babu",avatar:"😎",level:64},{id:"f_4",mobile:"9876543213",nickName:"king",fullName:"King Kumar",avatar:"🕶️",level:54},{id:"f_5",mobile:"9876543214",nickName:"jogi",fullName:"Jogi Reddy",avatar:"🏯",level:54},{id:"f_6",mobile:"9876543215",nickName:"Sk",fullName:"SK Nayak",avatar:"🤵",level:68}];class Io{constructor(){this.currentUser=null,this.init()}init(){try{const e=Se.getItem(ht);e&&(this.currentUser=this.loadUserProfile(e),this.currentUser&&(K.balance=this.currentUser.walletBalance??1e3,K.saveBalance()))}catch(e){console.error("Failed to load active user:",e)}}cleanMobile(e){return e?e.toString().replace(/[^0-9]/g,"").slice(-10):""}isRegistered(e){const t=this.cleanMobile(e);return!t||t.length!==10?!1:Se.getItem(`bk_user_${t}`)!==null}loadUserProfile(e){const t=this.cleanMobile(e);if(!t)return null;try{const n=Se.getItem(`bk_user_${t}`);if(n){const i=JSON.parse(n);return i.nickName||(i.nickName=pn(i.fullName||i.name||"","")),i.name=i.nickName,Array.isArray(i.friends)||(i.friends=[...Ne]),typeof i.lastHourlyRewardClaim!="number"&&(i.lastHourlyRewardClaim=0),i}}catch(n){console.error("Failed to parse user profile:",n)}return null}saveUserProfile(e){if(!(!e||!e.mobile))try{e.walletBalance=K.getBalance(),Se.setItem(`bk_user_${e.mobile}`,JSON.stringify(e))}catch(t){console.error("Failed to save user profile:",t)}}login(e,t="",n="",i=null){const r=this.cleanMobile(e);if(!r||r.length!==10)return{success:!1,error:k("errInvalidMobile")};const o=this.loadUserProfile(r),a=(t||"").trim(),c=i===!0||i===null&&a.length>0;if(!c&&!o)return{success:!1,isNotRegistered:!0,error:k("errUnregistered")};if(c&&!o&&!a)return{success:!1,error:k("errMissingName")};const d=pn(a||(o==null?void 0:o.fullName)||(o==null?void 0:o.name)||"",n);if(o)return o.lastLoginAt=Date.now(),a&&(o.fullName=a),n&&n.trim()?(o.nickName=n.trim(),o.name=o.nickName):o.nickName||(o.nickName=d,o.name=d),Array.isArray(o.friends)||(o.friends=[...Ne]),this.currentUser=o,Se.setItem(ht,r),K.balance=o.walletBalance??1e3,K.saveBalance(),this.saveUserProfile(this.currentUser),{success:!0,isNewUser:!1,user:this.currentUser,message:`Welcome back, ${this.currentUser.nickName}! (Existing player)`};const l={mobile:r,fullName:a||"Player",nickName:d,name:d,joinedAt:Date.now(),lastLoginAt:Date.now(),walletBalance:1e3,gamesPlayed:0,gamesWon:0,totalKills:0,totalCoinsWon:0,matchHistory:[],friends:[...Ne],lastHourlyRewardClaim:0};this.currentUser=l,Se.setItem(ht,r);try{const u=JSON.parse(Se.getItem(ps)||"[]");u.includes(r)||(u.push(r),Se.setItem(ps,JSON.stringify(u)))}catch{}return K.balance=1e3,K.saveBalance(),this.saveUserProfile(l),{success:!0,isNewUser:!0,user:l,message:`Welcome, ${l.nickName}! 🪙1,000 joining bonus credited!`}}isLoggedIn(){return this.currentUser!==null}getCurrentUser(){return this.currentUser&&(this.currentUser.walletBalance=K.getBalance()),this.currentUser}recordMatch({matchId:e,tableCode:t,opponent:n,mode:i,bet:r,pot:o,result:a,coinsChange:c,durationSec:d,kills:l}){if(!this.currentUser)return;const u={id:e||`m_${Date.now()}`,tableCode:t||(e?String(e).replace(/[^0-9]/g,"").slice(-4):"1001"),date:new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),mode:i||"1v1 Match",opponent:n||"System AI",bet:r||250,pot:o||500,result:a||"WON",coinsChange:c||0,durationSec:d||0,kills:l||0};this.currentUser.gamesPlayed=(this.currentUser.gamesPlayed||0)+1,a==="WON"&&(this.currentUser.gamesWon=(this.currentUser.gamesWon||0)+1,this.currentUser.totalCoinsWon=(this.currentUser.totalCoinsWon||0)+(o||0)),this.currentUser.totalKills=(this.currentUser.totalKills||0)+(l||0),Array.isArray(this.currentUser.matchHistory)||(this.currentUser.matchHistory=[]),this.currentUser.matchHistory.unshift(u),this.currentUser.matchHistory.length>50&&this.currentUser.matchHistory.pop(),this.saveUserProfile(this.currentUser)}getFriends(e=""){let t=this.currentUser&&Array.isArray(this.currentUser.friends)?this.currentUser.friends:Ne;if(e&&e.trim()){const n=e.trim().toLowerCase();return t.filter(i=>i.nickName&&i.nickName.toLowerCase().includes(n)||i.fullName&&i.fullName.toLowerCase().includes(n))}return t}addFriendByMobile(e){const t=this.cleanMobile(e);if(!t||t.length!==10)return{success:!1,error:"Please enter a valid 10-digit mobile number."};if(!this.currentUser)return{success:!1,error:"Please login to add friends."};if(this.currentUser.mobile===t)return{success:!1,error:"You cannot add yourself as a friend!"};if(Array.isArray(this.currentUser.friends)||(this.currentUser.friends=[...Ne]),this.currentUser.friends.some(r=>r.mobile===t))return{success:!1,error:"This friend is already in your list."};const n=this.loadUserProfile(t);let i;if(n)i={id:`f_${Date.now()}`,mobile:t,nickName:n.nickName||n.name||"Friend",fullName:n.fullName||n.name||"Friend",avatar:"👑",level:Math.max(20,(n.gamesPlayed||0)*3+15),addedAt:Date.now()};else{const r=["😎","🕶️","👤","🕵️","🦁","🦚"],o=r[Math.floor(Math.random()*r.length)];i={id:`f_${Date.now()}`,mobile:t,nickName:`Friend ${t.slice(-4)}`,fullName:`Player ${t.slice(-4)}`,avatar:o,level:Math.floor(25+Math.random()*30),addedAt:Date.now()}}return this.currentUser.friends.unshift(i),this.saveUserProfile(this.currentUser),{success:!0,friend:i,message:`Added ${i.nickName} to your friends!`}}addOrUpdateFriend(e){if(!this.currentUser||!e||!e.mobile)return{success:!1,error:"Invalid friend data"};const t=this.cleanMobile(e.mobile);if(!t||t===this.currentUser.mobile)return{success:!1,error:"Cannot add self"};Array.isArray(this.currentUser.friends)||(this.currentUser.friends=[...Ne]);const n=e.nickName||e.name||`Friend ${t.slice(-4)}`,i=e.fullName||e.name||`Player ${t.slice(-4)}`,r=this.currentUser.friends.findIndex(a=>a.mobile===t);if(r!==-1)return this.currentUser.friends[r].nickName=n,this.currentUser.friends[r].name=n,this.currentUser.friends[r].fullName=i,this.saveUserProfile(this.currentUser),{success:!0,isNew:!1,friend:this.currentUser.friends[r]};const o={id:`f_${Date.now()}_${Math.floor(Math.random()*1e3)}`,mobile:t,nickName:n,name:n,fullName:i,avatar:e.avatar||"👤",level:e.level||Math.floor(25+Math.random()*30),addedAt:Date.now()};return this.currentUser.friends.unshift(o),this.saveUserProfile(this.currentUser),{success:!0,isNew:!0,friend:o}}removeFriend(e){return!this.currentUser||!Array.isArray(this.currentUser.friends)?{success:!1,error:"No friends list found."}:(this.currentUser.friends=this.currentUser.friends.filter(t=>t.id!==e&&t.mobile!==e),this.saveUserProfile(this.currentUser),{success:!0})}getHourlyRewardStatus(){var o;const t=((o=this.currentUser)==null?void 0:o.lastHourlyRewardClaim)||0,i=Date.now()-t;return t===0||i>=36e5?{canClaim:!0,secondsLeft:0,rewardAmount:500}:{canClaim:!1,secondsLeft:Math.max(0,Math.ceil((36e5-i)/1e3)),rewardAmount:500}}claimHourlyReward(){const e=this.getHourlyRewardStatus();return e.canClaim?(this.currentUser&&(this.currentUser.lastHourlyRewardClaim=Date.now(),this.saveUserProfile(this.currentUser)),K.addCoins(500),{success:!0,reward:500,newBalance:K.getBalance(),message:"🎉 Claimed 500 Free Coins! Next reward in 1 hour."}):{success:!1,error:`Hourly reward available in ${Math.ceil(e.secondsLeft/60)}m.`}}getHistory(){return!this.currentUser||!this.currentUser.matchHistory?[]:this.currentUser.matchHistory}getStats(){if(!this.currentUser)return{gamesPlayed:0,gamesWon:0,winRate:0,totalKills:0,balance:1e3};const e=this.currentUser.gamesPlayed||0,t=this.currentUser.gamesWon||0,n=e>0?Math.round(t/e*100):0;return{gamesPlayed:e,gamesWon:t,winRate:n,totalKills:this.currentUser.totalKills||0,balance:K.getBalance()}}logout(){this.currentUser&&this.saveUserProfile(this.currentUser),this.currentUser=null,Se.removeItem(ht)}}const z=new Io;function Eo(s,e="",t="",n="",i=null,r="login"){const o=r==="login",a=vn();return`
    <div class="modal-backdrop login-modal-backdrop" id="login-modal-backdrop">
      <div class="modal-dialog modal-login modal-login-redesign">
        <!-- Header with Brand and Instant Language Switcher -->
        <div class="modal-header login-header-styled">
          <div class="login-brand-banner">
            <span class="login-brand-icon">🐚</span>
            <div>
              <h2 class="login-main-title">${k("appTitle")}</h2>
              <span class="login-sub-title">${k("appSubtitle")}</span>
            </div>
          </div>
          <button class="btn-login-lang-toggle" id="btn-login-lang-toggle" title="Switch Language / భాష మార్చండి">
            ${a==="en"?"🌐 తెలుగు":"🌐 English"}
          </button>
        </div>

        <!-- Login / Sign Up Tab Switcher -->
        <div class="login-tabs-bar">
          <button class="btn-login-tab ${o?"tab-active":""}" id="tab-login-btn">
            ${k("tabExistingLogin")}
          </button>
          <button class="btn-login-tab ${o?"":"tab-active"}" id="tab-signup-btn">
            ${k("tabNewSignUp")}
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
              <span>📱 ${k("mobileNumber")}</span>
              <span class="label-badge required">${k("tenDigits")}</span>
            </label>
            <div class="mobile-input-wrapper">
              <span class="country-prefix">+91</span>
              <input 
                type="tel" 
                id="input-login-mobile" 
                class="form-input mobile-input" 
                placeholder="${k("mobilePlaceholder")}" 
                maxlength="10" 
                pattern="[0-9]{10}" 
                value="${e}" 
                autocomplete="tel"
                required
              />
            </div>
            <span class="input-hint">
              ${k(o?"loginMobileHint":"signupMobileHint")}
            </span>
          </div>

          ${o?`
            <!-- Quick Hint for Returning User -->
            <div class="existing-login-hint-box">
              <span>⚡ ${k("loginMobileHint")}</span>
            </div>
          `:`
            <!-- Full Name (Required for Sign Up) -->
            <div class="form-group">
              <label for="input-login-fullname" class="form-label">
                <span>👤 ${k("fullName")}</span>
                <span class="label-badge required">${k("required")}</span>
              </label>
              <input 
                type="text" 
                id="input-login-fullname" 
                class="form-input" 
                placeholder="${k("fullNamePlaceholder")}" 
                maxlength="30"
                value="${t}" 
              />
            </div>

            <!-- Nick Name (Optional for Sign Up) -->
            <div class="form-group">
              <label for="input-login-nickname" class="form-label">
                <span>🏷️ ${k("nickName")}</span>
                <span class="label-badge optional">${k("optional")}</span>
              </label>
              <input 
                type="text" 
                id="input-login-nickname" 
                class="form-input" 
                placeholder="${k("nickNamePlaceholder")}" 
                maxlength="15"
                value="${n}" 
              />
              <div class="nickname-preview-box">
                <span>${k("gameDisplayName")}: </span>
                <strong id="nickname-preview-badge" class="preview-badge">${n||"MR"}</strong>
              </div>
            </div>
          `}
        </div>

        <div class="modal-footer login-footer-centered">
          <button class="btn-primary btn-enter-bharakhatta" id="btn-submit-login">
            ${k(o?"loginSubmitBtn":"signUpSubmitBtn")}
          </button>

          <div class="login-switch-action-row">
            ${o?`
              <span class="switch-prompt">${k("firstTimePrompt")} </span>
              <button class="btn-link-switch" id="link-switch-signup">${k("signUpHere")}</button>
            `:`
              <span class="switch-prompt">${k("alreadyHaveAccount")} </span>
              <button class="btn-link-switch" id="link-switch-login">${k("loginHere")}</button>
            `}
          </div>
        </div>
      </div>
    </div>
  `}function xo(s={}){const{isOpen:e=!1,playerCount:t=2,selectedBet:n=250,walletCoins:i=1e3}=s;if(!e)return"";const r=n*2;return`
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
              <button class="btn-cm-format ${t===2?"format-active":""}" id="btn-cm-format-2p" data-count="2">
                <span class="format-icon">👥</span>
                <div class="format-info">
                  <strong>1 vs 1 Solo</strong>
                  <span>Head-to-head vs System AI</span>
                </div>
                ${t===2?'<span class="format-check">✔</span>':""}
              </button>

              <button class="btn-cm-format ${t===4?"format-active":""}" id="btn-cm-format-4p" data-count="4">
                <span class="format-icon">👥👥</span>
                <div class="format-info">
                  <strong>2 vs 2 Teams</strong>
                  <span>You & AI vs Opposite Pair AI</span>
                </div>
                ${t===4?'<span class="format-check">✔</span>':""}
              </button>
            </div>
          </div>

          <!-- Pot Stake Chips Selection -->
          <div class="cm-section">
            <div class="cm-section-header-row">
              <label class="cm-section-label">2. Choose Pot Coins / Bet</label>
              <span class="cm-wallet-badge">Wallet: 🪙 ${i.toLocaleString()}</span>
            </div>

            <div class="cm-bet-grid">
              ${Tn.map(o=>{const a=o===n,c=i>=o;return`
                  <button 
                    class="btn-cm-bet ${a?"bet-active":""} ${c?"":"bet-disabled"}" 
                    data-bet="${o}"
                    ${c?"":'disabled title="Not enough coins"'}
                  >
                    <span class="bet-chip">🪙</span>
                    <span class="bet-amount">${o.toLocaleString()}</span>
                    <span class="bet-pot">Pot: 🪙${(o*2).toLocaleString()}</span>
                  </button>
                `}).join("")}
            </div>

            <!-- Pot Summary Card -->
            <div class="cm-pot-summary">
              <div class="cm-pot-box">
                <span class="pot-lbl">Your Stake</span>
                <strong class="pot-val stake-val">🪙 ${n.toLocaleString()}</strong>
              </div>
              <span class="cm-arrow">➔</span>
              <div class="cm-pot-box">
                <span class="pot-lbl">Winner Takes Pot</span>
                <strong class="pot-val pot-highlight">🏆 🪙 ${r.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer computer-match-footer">
          <button class="btn-primary btn-start-computer-match" id="btn-start-computer-game">
            🎲 Start Game (Pot: 🪙${r.toLocaleString()})
          </button>
        </div>
      </div>
    </div>
  `}function Ao(s,e,t,n=[]){if(!e)return"";const i=t.gamesPlayed>0?Math.round(t.gamesWon/t.gamesPlayed*100):0,r=n&&n.length>0?n.map(o=>{const a=o.result==="WON",c=a?"result-won":"result-lost",d=a?"🏆":o.result==="FORFEITED"?"⚠️":"❌",l=o.coinsChange>0?"delta-positive":o.coinsChange<0?"delta-negative":"",u=o.coinsChange>0?"+":"";return`
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
  `}function Bo(s){return`
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
  `}function wo(s,e=120,t=!1){const n=Math.floor(e/60),i=e%60;return`
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
            ${k("gate23Title")}
          </h2>
        </div>

        <div class="modal-body" style="padding: 16px;">
          <div style="background: rgba(241, 196, 15, 0.1); border: 1px solid rgba(241, 196, 15, 0.3); border-radius: 10px; padding: 12px; margin-bottom: 14px; text-align: left;">
            <p style="margin: 0; font-size: 0.92rem; line-height: 1.5; color: #f39c12;">
              ${k("gate23Msg")}
            </p>
          </div>
          <div style="display: flex; justify-content: space-around; font-size: 0.82rem; color: #bdc3c7; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 8px;">
            <span>🚪 <strong>H1 (Bottom):</strong> <span style="color:#2ecc71;">Unlocked</span></span>
            <span>🚪 <strong>H2 (Top):</strong> <span style="color:#2ecc71;">Unlocked</span></span>
          </div>
        </div>

        <div class="modal-footer modal-footer-split" style="display: flex; gap: 10px; justify-content: center;">
          <button class="btn-primary" id="btn-gate-continue" style="flex: 1; padding: 12px 14px; font-weight: bold;">
            ${k("btnContinueGame")}
          </button>
          <button class="btn-secondary" id="btn-gate-restart" style="flex: 1; padding: 12px 14px;">
            ${k("btnStartAgain")}
          </button>
        </div>
      </div>
    </div>
  `}function $o(s={}){const{user:e,walletCoins:t=1e3,hourlyRewardStatus:n=null}=s,i=e&&(e.nickName||e.name)||"Player",r=vn(),o=n==null?void 0:n.canClaim,a=Math.floor(((n==null?void 0:n.secondsLeft)||0)/60),c=((n==null?void 0:n.secondsLeft)||0)%60,d=o?k("freeCoinsClaim"):`${a}m ${c}s`;return`
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
                <span class="ticket-title">${k(o?"freeCoinsClaim":"freeCoinsBtn")}</span>
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
            <h1 class="brand-game-name">${k("appTitle")}</h1>
            <span class="brand-tagline">${k("appSubtitle")}</span>
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
              <h2 class="btn-3d-title">${k("menuComputer")}</h2>
              <span class="btn-3d-desc">${k("menuComputerSub")}</span>
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
              <h2 class="btn-3d-title">${k("menuFriends")}</h2>
              <span class="btn-3d-desc">${k("menuFriendsSub")}</span>
            </div>
            <span class="btn-3d-pill pill-friends">4-DIGIT ROOM</span>
          </button>
        </div>

        <!-- 5. Bottom Navigation Bar -->
        <div class="casual-bottom-nav">
          <button class="bnav-item" id="btn-nav-store" title="Free Coin Refill">
            <span class="bnav-icon">🛒</span>
            <span class="bnav-badge-free">FREE</span>
            <span class="bnav-label">${k("store")}</span>
          </button>
          <button class="bnav-item bnav-active" id="btn-nav-home" title="Home Menu">
            <span class="bnav-icon">🏠</span>
            <span class="bnav-label">${k("home")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-friends-direct" title="Friends Hub">
            <span class="bnav-icon">👥</span>
            <span class="bnav-label">${k("menuFriends")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-history" title="Match History">
            <span class="bnav-icon">📜</span>
            <span class="bnav-label">${k("matchHistory")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-rules" title="Rules Guide">
            <span class="bnav-icon">📖</span>
            <span class="bnav-label">${k("rules")}</span>
          </button>
        </div>
      </div>
    </div>
  `}function No(s={}){const{isOpen:e=!1,friends:t=[],searchQuery:n="",isEditing:i=!1,activeTab:r="challenge",walletCoins:o=1e3,diamonds:a=385,hourlyRewardStatus:c={canClaim:!0,secondsLeft:0,rewardAmount:500}}=s;if(!e)return"";const d=l=>{const u=Math.floor(l/60),p=l%60;return`${u}m ${p<10?"0":""}${p}s`};return`
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
  `}function Lo(s,e={}){const{roomCode:t="4821",mode:n="2p",selectedBet:i=250,walletCoins:r=1e3,shareUrl:o="",qrDataUrl:a=null,isWaiting:c=!0}=e,d=i*2,l=n==="4p",p=`https://api.whatsapp.com/send?text=${encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta match on table *${t}* (${l?"2v2 Teams":"1v1"})!
Pot: 🪙${d.toLocaleString()} coins.
Tap here to play: ${o||"https://maheshwar567.github.io/bharakhatta/?room="+t}`)}`;return`
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
              <label class="mode-checkbox-card ${l?"":"mode-checked"}">
                <input type="radio" name="create-room-mode" value="2p" ${l?"":"checked"} id="radio-mode-1v1" />
                <div class="mode-card-content">
                  <span class="mode-card-icon">👥</span>
                  <div class="mode-card-texts">
                    <strong>1v1 (2 Players)</strong>
                    <span>Head-to-head match</span>
                  </div>
                </div>
              </label>

              <label class="mode-checkbox-card ${l?"mode-checked":""}">
                <input type="radio" name="create-room-mode" value="4p" ${l?"checked":""} id="radio-mode-2v2" />
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
              ${Tn.map(f=>{const y=f===i,C=r>=f;return`
                  <button 
                    type="button"
                    class="btn-lobby-tier ${y?"tier-selected":""} ${C?"":"tier-disabled"}"
                    data-create-bet="${f}"
                    ${C?"":"disabled"}
                  >
                    <span class="tier-chip-icon">🪙</span>
                    <span class="tier-stake">${f}</span>
                  </button>
                `}).join("")}
            </div>
          </div>

          <!-- Huge 4-Digit Table Code Display -->
          <div class="table-code-hero-card">
            <span class="table-code-label">TABLE CODE (SHARE WITH FRIEND)</span>
            <div class="table-digits-display">
              ${t.split("").map(f=>`<span class="digit-box">${f}</span>`).join("")}
            </div>
            <div class="table-code-actions">
              <button class="btn-copy-code" id="btn-copy-4digit-code" data-code="${t}">
                📋 Copy Code (${t})
              </button>
              <a href="${p}" target="_blank" class="btn-whatsapp-share-code" id="btn-whatsapp-room-share" rel="noopener noreferrer">
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
  `}function Do(s,e={}){const{errorMsg:t=null,enteredCode:n=""}=e;return`
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
  `}function Fo(s,e={}){const{errorMsg:t=null}=e;return`
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
  `}function Ho(s,e={},t=[]){const{gamesPlayed:n=0,gamesWon:i=0,winRate:r=0,totalCoinsWon:o=0,totalKills:a=0}=e;return`
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
            `:t.map(c=>{const d=c.result==="WON",l=c.result==="FORFEITED",u=c.tableCode||(c.id?String(c.id).replace(/[^0-9]/g,"").slice(-4):"1001"),p=Math.floor((c.durationSec||0)/60),f=(c.durationSec||0)%60;return`
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
                      <span>⏱️ ${p}m ${f<10?"0":""}${f}s</span>
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
  `}class Go{constructor(e={}){this.duration=e.duration||30,this.timeLeft=this.duration,this.timerId=null,this.isPaused=!1,this.onTick=e.onTick||(()=>{}),this.onWarning=e.onWarning||(()=>{}),this.onUrgent=e.onUrgent||(()=>{}),this.onTimeout=e.onTimeout||(()=>{})}start(){this.stop(),this.timeLeft=this.duration,this.isPaused=!1,this.onTick(this.timeLeft),this.timerId=setInterval(()=>{this.isPaused||(this.timeLeft--,this.onTick(this.timeLeft),this.timeLeft===10?this.onWarning(this.timeLeft):this.timeLeft===5?this.onUrgent(this.timeLeft):this.timeLeft<=0&&(this.stop(),this.onTimeout()))},1e3)}pause(){this.isPaused=!0}resume(){this.isPaused=!1}reset(){this.start()}stop(){this.timerId&&(clearInterval(this.timerId),this.timerId=null),this.isPaused=!1}getTimeLeft(){return this.timeLeft}}const be={light(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(15)}catch{}},rollTumble(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([20,30,25])}catch{}},step(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(20)}catch{}},capture(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([50,40,80])}catch{}},baara(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([40,30,40,30,100])}catch{}},victory(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([80,50,80,50,120,60,200])}catch{}}};class jo{constructor(){this.logs=[],this.rulesOpen=!1,this.mobileOpen=!1,this.mpModalOpen=!1,this.chatOpen=!1,this.betModalOpen=!1,this.gatePromptOpen=!1,this.loginModalOpen=!z.isLoggedIn(),this.loginTab="login",this.computerModalOpen=!1,this.computerPlayerCount=2,this.computerBet=250,this.inLobby=z.isLoggedIn(),this.playerCount=2,this.lobbyMode="solo",this.selectedBet=250,this.profileModalOpen=!1,this.exitModalOpen=!1,this.inactivityModalOpen=!1,this.awayDurationSec=0,this.backgroundTimestamp=null,this.loginError=null,this.soundMuted=!1,this.qrDataUrl=null,this.roomQrDataUrl=null,this.friendsHubOpen=!1,this.friendsTab="challenge",this.friendsSearchQuery="",this.isEditingFriends=!1,this.createRoomModalOpen=!1,this.joinRoomModalOpen=!1,this.addFriendModalOpen=!1,this.matchHistoryModalOpen=!1,this.celebrationSplash={isOpen:!1,tableCode:"",friendName:""},this.enteredJoinCode="",this.joinRoomError=null,this.addFriendError=null,this.roomCreationMode="2p",this.current4DigitCode=Le(),this.hourlyTicker=setInterval(()=>{if(this.friendsHubOpen||this.inLobby){const n=document.getElementById("btn-lobby-hourly-reward"),i=document.getElementById("btn-nav-reward"),r=z.getHourlyRewardStatus(),o=r.canClaim?"Free 500🪙":`${Math.floor(r.secondsLeft/60)}m ${r.secondsLeft%60}s`;if(n){const a=n.querySelector(".ticket-sub"),c=n.querySelector(".ticket-title");a&&c?(c.textContent=r.canClaim?k("freeCoinsClaim"):k("freeCoinsBtn"),a.textContent=r.canClaim?"Free 500 Coins Ready!":`Wait: ${o}`,r.canClaim?(n.classList.remove("claim-ticket-cooldown"),n.classList.add("claim-ticket-ready")):(n.classList.remove("claim-ticket-ready"),n.classList.add("claim-ticket-cooldown"))):(n.className=`btn-hourly-reward-lobby ${r.canClaim?"reward-claim-glow":"reward-wait"}`,n.innerHTML=`<span>🎁</span><span>${o}</span>`)}i&&(i.innerHTML=`<span class="nav-icon">🎁</span><span class="nav-label">${o}</span>${r.canClaim?'<span class="nav-badge-dot">!</span>':""}`)}},1e3),this.currentBet=250,this.matchPot=500,this.winnerAwarded=!1,this.chatMessages=[],this.activeChatToast=null,this.chatToastTimer=null,this.unreadChatCount=0,this.turnTimer=new Go({duration:30,onTick:n=>this.renderTimerOnly(n),onWarning:()=>{this.soundMuted||ne.playCoinStep()},onUrgent:()=>{this.soundMuted||ne.playBonusRoll()},onTimeout:()=>this.handleTurnTimeout()});const e="https://maheshwar567.github.io/bharakhatta/",t=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";this.baseMobileUrl=t?e:window.location.href.split("?")[0].replace(/\/?$/,"/"),this.localWifiUrl="http://192.168.31.186:5173/",this.mpState={isConnected:!1,roomCode:null,myPlayerId:null,myTeam:null,isHost:!1,players:[],errorMsg:null},this.mpClient=new Po({onRoomCreated:n=>this.handleRoomCreated(n),onRoomJoined:n=>this.handleRoomJoined(n),onPlayerJoined:(n,i)=>this.handlePlayerJoined(n,i),onPlayerLeft:(n,i)=>this.handlePlayerLeft(n,i),onSyncRoll:n=>this.handleRemoteRoll(n),onSyncMove:n=>this.handleRemoteMove(n),onSyncRestart:()=>this.handleRemoteRestart(),onChatReceived:n=>this.handleChatReceived(n),onBetSynced:n=>this.handleBetSynced(n),onSyncTimeoutPass:n=>this.handleRemoteTimeoutPass(n),onStart4pAIPair:n=>this.handleStart4pAIPair(n),onSyncGameState:n=>this.handleRemoteGameState(n),onGate23Decision:n=>this.handleRemoteGate23Decision(n),onError:n=>{this.mpState.errorMsg=n,this.render()},onStatusChange:n=>{this.mpState.isConnected=n==="connected",this.render()}}),this.autoMoveTimer=null,this.selectedCoinId=null,this.initDOM(),this.engine=new gr({gameMode:"2p",diceMode:"cowries",onStateChange:()=>{this.engine&&(this.render(),this.checkAutoMove())},onLog:n=>this.addLog(n),onTurnChange:n=>this.handleTurnChange(n),onBothGatesOpen:()=>this.handleBothGatesOpen()}),this.bindGlobalKeys(),this.initMobileAudioUnlock(),this.initBackgroundDetection(),this.checkUrlRoomParam(),!this.loginModalOpen&&!this.inLobby&&this.turnTimer.start(),this.render()}startGame(e="solo",t=250){if(!K.canAfford(t))return alert(`You don't have enough coins (Need 🪙${t.toLocaleString()}! Current: 🪙${K.getBalance().toLocaleString()})`),!1;K.placeBet(t),this.currentBet=t,this.matchPot=t*2,this.inLobby=!1;const n=z.getCurrentUser(),i=n?n.nickName||n.name:"Player 1";return this.playerCount===4?e==="4p_solo"?(this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${i} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Teammate AI",avatar:"🦁",color:"#d35400",isAI:!0},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 4-Player Solo match started! You & Teammate AI (Team 1) vs System AI Pair (Team 2). Pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),!0):(this.mpModalOpen=!0,this.turnTimer.stop(),this.mpState.roomCode||this.mpClient.createRoom("4p",i),this.render(),!0):e==="friend"?(this.mpModalOpen=!0,this.turnTimer.stop(),this.mpState.roomCode||this.mpClient.createRoom("2p",i),this.render(),!0):(this.engine.gameMode="2p",this.engine.initGame([{id:1,team:1,name:`${i} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI (Top)",avatar:"🦚",color:"#27ae60",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 2-Player Game started vs System AI! Stake: 🪙${t.toLocaleString()} | Winner Pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),!0)}async checkUrlRoomParam(){const t=new URLSearchParams(window.location.search).get("room");if(t){this.mpModalOpen=!0;try{await this.mpClient.joinRoom(t,"Player 2")}catch(n){console.error("Auto-join room failed:",n)}}}initMobileAudioUnlock(){const e=()=>{ne.init(),be.light(),document.removeEventListener("touchstart",e),document.removeEventListener("pointerdown",e)};document.addEventListener("touchstart",e,{passive:!0}),document.addEventListener("pointerdown",e,{passive:!0})}initDOM(){const e=document.getElementById("app");e.innerHTML=`
      <div id="header-container"></div>
      
      <main class="game-main-content">
        <div id="board-container" class="board-wrapper"></div>
        <div id="cowrie-container" style="width: 100%; display: flex; justify-content: center;"></div>
        <div id="ticker-container" style="width: 100%; display: flex; justify-content: center;"></div>
      </main>

      <div id="modal-container"></div>
    `}addLog(e){this.logs.push(e),this.logs.length>40&&this.logs.shift();const t=document.getElementById("ticker-container");t&&(t.innerHTML=Mi(this.logs))}bindGlobalKeys(){window.addEventListener("keydown",e=>{e.code==="Space"&&!this.rulesOpen&&!this.mobileOpen&&!this.mpModalOpen&&!this.chatOpen&&!this.betModalOpen&&(e.preventDefault(),this.attemptRoll()),e.key==="Escape"&&(this.rulesOpen=!1,this.mobileOpen=!1,this.mpModalOpen=!1,this.chatOpen=!1,this.betModalOpen=!1,this.render())})}handleTurnChange(e){this.selectedCoinId=null,this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null),this.turnTimer.reset(),(this.mpState.roomCode?e.id===this.mpState.myPlayerId:!e.isAI)&&!this.soundMuted&&(ne.playBaaraTwelve(),be.light()),this.render()}handleTurnTimeout(){const e=this.engine.getStateSnapshot();if(e.status===ee.GAME_OVER)return;(this.mpState.roomCode?e.currentPlayer.id===this.mpState.myPlayerId:!e.currentPlayer.isAI)?(this.engine.log("⏰ Time's up (30s)! No roll chance. Turn forfeited to next player."),this.mpState.roomCode&&this.mpClient.sendTimeoutPass(this.mpState.myPlayerId),this.turnTimer.reset(),this.engine.advanceTurn()):this.mpState.roomCode?(this.engine.log("⏰ Opponent timed out (30s)! No roll chance. Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn()):e.currentPlayer.isAI&&(this.engine.log("⏰ System AI timed out (30s)! Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn())}initBackgroundDetection(){document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")this.backgroundTimestamp=Date.now();else if(document.visibilityState==="visible"&&this.backgroundTimestamp){const e=Math.floor((Date.now()-this.backgroundTimestamp)/1e3);this.backgroundTimestamp=null,e>=120&&this.engine&&this.engine.status!==ee.GAME_OVER&&!this.loginModalOpen&&this.handleInactivityForfeit(e)}})}handleInactivityForfeit(e){if(this.awayDurationSec=e,this.turnTimer.stop(),this.mpState.roomCode){this.engine.log(`⏰ Match forfeited: You were away in other apps for >2 minutes (${Math.floor(e/60)}m ${e%60}s).`),this.mpClient.sendTimeoutPass(this.mpState.myPlayerId);const t=this.mpState.myTeam||1,n=t===1?2:1;this.engine.winner={team:n,player:this.engine.players.find(i=>i.team===n)||{name:"Opponent",team:n}},this.engine.status=ee.GAME_OVER,z.recordMatch({matchId:`m_${Date.now()}`,opponent:t===1?this.mpClient.guestName:this.mpClient.hostName,mode:`Online Room #${this.mpState.roomCode}`,bet:this.currentBet,pot:this.matchPot,result:"FORFEITED",coinsChange:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:t===1?this.engine.team1Kills:this.engine.team2Kills})}else this.engine.log(`⏸️ You were away in other apps for >2 minutes (${Math.floor(e/60)}m ${e%60}s).`);this.inactivityModalOpen=!0,this.render()}renderTimerOnly(e){const t=document.querySelector(".timer-seconds"),n=document.querySelector(".turn-timer-pill"),i=document.querySelector(".turn-timer-sub");t&&(t.textContent=`${e}s`),i&&(i.textContent=`⏳ ${e}s`),n&&(n.classList.remove("timer-normal","timer-warning","timer-urgent"),e<=5?n.classList.add("timer-urgent"):e<=10?n.classList.add("timer-warning"):n.classList.add("timer-normal"))}handleChatReceived(e){this.chatMessages.push(e),this.chatOpen||(this.unreadChatCount++,this.showChatToast(e)),this.soundMuted||ne.playCoinStep(),this.render()}showChatToast(e){this.activeChatToast=e,this.chatToastTimer&&clearTimeout(this.chatToastTimer),this.chatToastTimer=setTimeout(()=>{this.activeChatToast=null,this.render()},3500)}handleBetSynced(e){this.currentBet=e,this.matchPot=e*2,this.engine.log(`🪙 Match bet set to 🪙${e}! Pot: 🪙${this.matchPot.toLocaleString()}`),this.render()}attemptRoll(){const e=this.engine.getStateSnapshot();if(e.status!==ee.WAITING_FOR_ROLL||this.mpState.roomCode&&e.currentPlayer.id!==this.mpState.myPlayerId||!this.mpState.roomCode&&e.currentPlayer.isAI)return;this.selectedCoinId=null,this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null),be.rollTumble(),this.turnTimer.reset();const t=this.engine.roll();this.mpState.roomCode&&t&&(this.mpClient.sendRoll(t),setTimeout(()=>{this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot())},2100))}attemptMove(e){this.selectedCoinId=null,this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null);const t=this.engine.getStateSnapshot();t.status===ee.WAITING_FOR_MOVE&&(this.mpState.roomCode&&t.currentPlayer.id!==this.mpState.myPlayerId||(be.step(),this.turnTimer.reset(),this.engine.executeMove(e),this.mpState.roomCode&&(this.mpClient.sendMove(e),setTimeout(()=>{this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot())},700))))}checkAutoMove(){var i;const e=this.engine.getStateSnapshot();if(e.status!==ee.WAITING_FOR_MOVE){this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null);return}if(!(this.mpState.roomCode?e.currentPlayer.id===this.mpState.myPlayerId:!e.currentPlayer.isAI)){this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null);return}if(this.autoMoveTimer)return;const n=this.engine.getSingleMovableMove();n&&(this.engine.log(`⚡ Single movable coin (#${((i=n.coin)==null?void 0:i.num)||1}) - auto-moving in 1s...`),this.autoMoveTimer=setTimeout(()=>{this.autoMoveTimer=null,this.engine&&this.engine.status===ee.WAITING_FOR_MOVE&&this.attemptMove(n)},1e3))}async handleRoomCreated(e){this.mpState.roomCode=e.roomCode,this.mpState.myPlayerId=e.playerId,this.mpState.myTeam=e.team,this.mpState.isHost=!0,this.mpState.players=e.players,this.mpState.errorMsg=null,this.winnerAwarded=!1,K.placeBet(this.currentBet),this.matchPot=this.currentBet*2,this.engine.isMultiplayer=!0,this.engine.isHost=!0;const t=z.getCurrentUser(),i=[{id:1,team:1,name:`${t?t.nickName||t.name:"Player 1"} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2 (Friend)",avatar:"🦚",color:"#27ae60",isAI:!1}];this.engine.initGame(i),this.turnTimer.start();const r=`${this.baseMobileUrl}?room=${e.roomCode}`;this.roomQrDataUrl=await Yt(r),this.engine.log(`🏠 Created Room #${e.roomCode} (Bet 🪙${this.currentBet}). Share code with friend!`),this.render()}async handleRoomJoined(e){this.mpState.roomCode=e.roomCode,this.mpState.myPlayerId=e.playerId,this.mpState.myTeam=e.team,this.mpState.isHost=!1,this.mpState.players=e.players,this.mpState.errorMsg=null,this.winnerAwarded=!1,e.bet&&(this.currentBet=e.bet,this.matchPot=e.bet*2),K.placeBet(this.currentBet),this.engine.isMultiplayer=!0,this.engine.isHost=!1;const t=z.getCurrentUser(),n=t?t.nickName||t.name:"Player 2",i=[{id:1,team:1,name:"Player 1 (Friend)",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:`${n} (You)`,avatar:"🦚",color:"#27ae60",isAI:!1}];this.engine.initGame(i),this.turnTimer.start(),e.hostMobile&&z.addOrUpdateFriend({mobile:e.hostMobile,nickName:e.hostNick||"Host",fullName:e.hostFullName||e.hostNick||"Host"}),this.inLobby=!1,this.joinRoomModalOpen=!1,this.createRoomModalOpen=!1,this.friendsHubOpen=!1,this.mpModalOpen=!1,this.celebrationSplash={isOpen:!0,tableCode:e.roomCode,friendName:e.hostNick||"Host"};const r=`${this.baseMobileUrl}?room=${e.roomCode}`;this.roomQrDataUrl=await Yt(r),this.engine.log(`🤝 Joined Room #${e.roomCode}! You are Team ${e.team}. Match pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),setTimeout(()=>{this.celebrationSplash.isOpen=!1,this.render()},1500)}handlePlayerJoined(e,t){this.mpState.players=t,this.engine.log(`🎉 ${e.name} connected to Table #${this.mpState.roomCode}! Starting match directly...`),ne.playBonusRoll(),this.turnTimer.reset(),e.mobile&&z.addOrUpdateFriend({mobile:e.mobile,nickName:e.nickName||e.name||"Friend",fullName:e.fullName||e.name||"Friend"}),this.inLobby=!1,this.createRoomModalOpen=!1,this.joinRoomModalOpen=!1,this.friendsHubOpen=!1,this.mpModalOpen=!1,this.celebrationSplash={isOpen:!0,tableCode:this.mpState.roomCode,friendName:e.nickName||e.name||"Friend"},this.mpState.isHost&&this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot()),this.render(),setTimeout(()=>{this.celebrationSplash.isOpen=!1,this.render()},1500)}handlePlayerLeft(e,t){this.mpState.players=t,this.engine.log("⚠️ Opponent disconnected."),this.render()}handleRemoteRoll(e){this.autoMoveTimer&&(clearTimeout(this.autoMoveTimer),this.autoMoveTimer=null),be.rollTumble(),this.engine.status=ee.ROLLING,ne.playCowrieRoll(),this.engine.currentRoll=e,this.turnTimer.reset(),this.render(),setTimeout(()=>{this.engine.resolveRoll(e),this.render()},2e3)}handleRemoteMove(e){be.step(),this.engine.executeMove(e,!0),this.turnTimer.reset(),this.render()}handleRemoteGameState(e){!e||!this.engine||(this.engine.applyStateSnapshot(e),this.render())}handleBothGatesOpen(){this.gatePromptOpen=!0,ne.playBaaraTwelve(),this.render()}handleGate23Decision(e){this.gatePromptOpen=!1,this.mpState.roomCode&&this.mpClient.sendGate23Decision(e),e==="continue"?(this.engine.log("⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad."),this.render()):e==="restart"&&(this.engine.log("🔄 Restarting match by mutual agreement."),this.mpState.roomCode&&this.mpClient.sendRestart(),this.engine.initGame(),this.turnTimer.start(),this.render())}handleRemoteGate23Decision(e){this.gatePromptOpen=!1,e==="continue"?(this.engine.log("⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad."),this.render()):e==="restart"&&(this.engine.log("🔄 Opponent agreed to restart match from scratch."),this.engine.initGame(),this.turnTimer.start(),this.render())}handleRemoteRestart(){this.engine.initGame(),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log("🔄 Host restarted the game!"),this.render()}handleRemoteTimeoutPass(e){this.engine.log("⏰ Opponent timed out (30s)! No roll chance. Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn()}handleStart4pAIPair(e){this.mpModalOpen=!1,e&&e.bet&&(this.currentBet=e.bet,this.matchPot=e.bet*2);const t=this.mpClient.hostName||"Host",n=this.mpClient.guestName||"Friend";this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${t} ${this.mpState.isHost?"(You)":""}`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:`${n} ${this.mpState.isHost?"":"(You)"}`,avatar:"🦁",color:"#d35400",isAI:!1},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🤝 4-Player Match Active! Team 1 (${t} & ${n}) vs Team 2 (System AI Opposite Pair). Pot: 🪙${this.matchPot.toLocaleString()}`),ne.playBonusRoll(),this.render()}render(){if(!this.engine)return;const e=this.engine.getStateSnapshot(),t=document.getElementById("header-container"),n=document.getElementById("board-container"),i=document.getElementById("cowrie-container"),r=document.getElementById("ticker-container"),o=document.getElementById("modal-container"),a={user:z.getCurrentUser(),walletCoins:K.getBalance(),matchPot:this.matchPot,timeLeft:this.turnTimer.getTimeLeft(),unreadChatCount:this.unreadChatCount};t&&(t.innerHTML=Sr(e,this.soundMuted,this.mpState,a)),n&&(n.innerHTML=br(e,this.mpState,this.selectedCoinId)),i&&(i.innerHTML=vr(e,this.mpState,this.turnTimer.getTimeLeft())),r&&(r.innerHTML=Mi(this.logs));let c="";if(this.loginModalOpen?c+=Eo(!0,"","","",this.loginError,this.loginTab):this.inLobby&&(c+=$o({user:z.getCurrentUser(),walletCoins:K.getBalance(),selectedBet:this.selectedBet,playerCount:this.playerCount,selectedMode:this.lobbyMode,hourlyRewardStatus:z.getHourlyRewardStatus()})),this.computerModalOpen&&(c+=xo(!0,{playerCount:this.computerPlayerCount,selectedBet:this.computerBet,walletCoins:K.getBalance()})),this.friendsHubOpen){const d=z.getFriends(this.friendsSearchQuery),l=z.getHourlyRewardStatus();c+=No({isOpen:!0,friends:d,searchQuery:this.friendsSearchQuery,isEditing:this.isEditingFriends,activeTab:this.friendsTab,walletCoins:K.getBalance(),diamonds:385,hourlyRewardStatus:l})}if(this.createRoomModalOpen){const d=this.mpState.roomCode||this.current4DigitCode,l=`${this.baseMobileUrl}?room=${d}`;c+=Lo(!0,{roomCode:d,mode:this.roomCreationMode,selectedBet:this.currentBet,walletCoins:K.getBalance(),shareUrl:l,qrDataUrl:this.roomQrDataUrl,isWaiting:!0})}if(this.joinRoomModalOpen&&(c+=Do(!0,{errorMsg:this.joinRoomError,enteredCode:this.enteredJoinCode})),this.addFriendModalOpen&&(c+=Fo(!0,{errorMsg:this.addFriendError})),this.matchHistoryModalOpen){const d=z.getStats(),l=z.getHistory();c+=Ho(!0,d,l)}if(this.celebrationSplash.isOpen&&(c+=Uo(!0,this.celebrationSplash.tableCode,this.celebrationSplash.friendName)),this.profileModalOpen){const d=z.getCurrentUser(),l=z.getStats(),u=z.getHistory();c+=Ao(!0,d,l,u)}if(this.exitModalOpen&&(c+=Bo()),this.inactivityModalOpen&&(c+=wo(!0,this.awayDurationSec,!!this.mpState.roomCode)),this.rulesOpen&&(c+=Tr()),this.mobileOpen&&(c+=Jr(!0,this.qrDataUrl,this.baseMobileUrl)),this.mpModalOpen){const d=this.mpState.roomCode?`${this.baseMobileUrl}?room=${this.mpState.roomCode}`:"";c+=zr(!0,this.mpState,this.roomQrDataUrl,d)}if(this.gatePromptOpen&&(c+=Oo()),this.chatOpen&&(c+=Yr(!0,this.chatMessages,this.mpState.myPlayerId||1)),this.betModalOpen&&(c+=to(!0,K.getBalance(),this.currentBet,this.mpState.roomCode?"multiplayer":"solo")),this.activeChatToast&&(c+=Qr(this.activeChatToast)),e.winner){if(!this.winnerAwarded){this.winnerAwarded=!0,this.turnTimer.stop();const d=this.mpState.roomCode?this.mpState.myTeam:1,l=e.winner.team===d;l&&(K.awardPot(this.matchPot),this.engine.log(`🏆 MATCH WON! You received the full pot: 🪙${this.matchPot.toLocaleString()} coins!`)),z.recordMatch({matchId:`m_${Date.now()}`,opponent:this.mpState.roomCode?d===1?this.mpClient.guestName:this.mpClient.hostName:"System AI",mode:this.mpState.roomCode?`Online Room #${this.mpState.roomCode}`:"Solo vs AI",bet:this.currentBet,pot:this.matchPot,result:l?"WON":"LOST",coinsChange:l?this.matchPot-this.currentBet:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:d===1?e.team1Kills:e.team2Kills})}be.victory(),c+=kr(e.winner)}o&&(o.innerHTML=c),this.attachEventListeners(e)}attachEventListeners(e){const t=document.getElementById("btn-roll-dice"),n=document.getElementById("palm-cupped-box");t&&(t.onclick=()=>this.attemptRoll()),n&&(n.onclick=()=>this.attemptRoll());const i=document.getElementById("btn-release-jail-t1");i&&(i.onclick=()=>{const g=e.validMoves.find(v=>v.type==="RELEASE_JAIL");g&&this.attemptMove(g)});const r=document.getElementById("btn-release-jail-t2");r&&(r.onclick=()=>{const g=e.validMoves.find(v=>v.type==="RELEASE_JAIL");g&&this.attemptMove(g)}),document.querySelectorAll(".coin-piece").forEach(g=>{g.onclick=v=>{v.stopPropagation();const q=g.getAttribute("data-coin-id");if(!q)return;if(this.selectedCoinId&&this.selectedCoinId!==q){const Q=g.closest(".board-cell");if(Q){const oe=parseInt(Q.getAttribute("data-r"),10),Tt=parseInt(Q.getAttribute("data-c"),10),Si=e.validMoves.find(qe=>qe.coin&&qe.coin.id===this.selectedCoinId&&qe.targetCoord&&qe.targetCoord.r===oe&&qe.targetCoord.c===Tt);if(Si){this.selectedCoinId=null,this.attemptMove(Si);return}}}const X=e.validMoves.filter(Q=>Q.coin&&Q.coin.id===q);if(X.length>0){const Q=new Set(e.validMoves.filter(oe=>oe.coin).map(oe=>oe.coin.id));this.selectedCoinId===q||Q.size===1?(this.selectedCoinId=null,this.attemptMove(X[0])):(this.selectedCoinId=q,this.render());return}if(e.validMoves.some(Q=>Q.type==="RELEASE_JAIL")){const Q=e.validMoves.find(oe=>oe.type==="RELEASE_JAIL");Q&&(this.selectedCoinId=null,this.attemptMove(Q))}}}),document.querySelectorAll(".cell-valid-target").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-r"),10),q=parseInt(g.getAttribute("data-c"),10);if(this.selectedCoinId){const Q=e.validMoves.find(oe=>oe.coin&&oe.coin.id===this.selectedCoinId&&oe.targetCoord&&oe.targetCoord.r===v&&oe.targetCoord.c===q);if(Q){this.selectedCoinId=null,this.attemptMove(Q);return}}const X=e.validMoves.find(Q=>Q.targetCoord&&Q.targetCoord.r===v&&Q.targetCoord.c===q);X&&(this.selectedCoinId=null,this.attemptMove(X))}});const c=document.getElementById("btn-open-multiplayer"),d=document.getElementById("btn-open-mp-badge");c&&(c.onclick=()=>{this.mpModalOpen=!0,this.render()}),d&&(d.onclick=()=>{this.mpModalOpen=!0,this.render()});const l=document.getElementById("btn-open-chat"),u=document.getElementById("btn-close-chat");l&&(l.onclick=()=>{this.chatOpen=!0,this.unreadChatCount=0,this.render()}),u&&(u.onclick=()=>{this.chatOpen=!1,this.render()});const p=document.getElementById("btn-send-chat"),f=document.getElementById("input-chat-text"),y=(g=null)=>{let v=g;if(!v&&f&&(v=f.value.trim(),f.value=""),!v)return;const q=z.getCurrentUser(),X=q?q.nickName||q.name:this.mpState.myPlayerId===2?"Player 2":"Player 1";if(this.mpState.roomCode)this.mpClient.sendChat(v,X);else{const Q={senderId:1,senderName:X,text:v,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.handleChatReceived(Q),this.engine.players&&this.engine.players[1]&&this.engine.players[1].isAI&&setTimeout(()=>{const oe=["బాగుంది! కానీ సెంటర్ హోమ్ నాదే! (Nice! But the Center is mine!) 🦚","కట్టా పడకుండా జాగ్రత్త మిత్రమా! (Watch out for Katta strike!) 💥","హాహా! బాఱ 12 పడితే నేనే విజేత! (Haha! If I roll Baara 12, I win!) 🎲","మంచి మూవ్! చూద్దాం ఎవరు గెలుస్తారో! (Good move! Let's see who wins!) 👑","గువ్వలు నా వైపే ఉన్నాయి! (The cowries favor me!) 🐚"],Tt=oe[Math.floor(Math.random()*oe.length)];this.handleChatReceived({senderId:2,senderName:"System AI 🦚",text:Tt,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})},650)}};p&&(p.onclick=()=>y()),f&&(f.onkeydown=g=>{g.key==="Enter"&&y()}),document.querySelectorAll(".btn-smiley-chip").forEach(g=>{g.onclick=()=>{const v=g.getAttribute("data-emoji");v&&y(v)}}),document.querySelectorAll(".btn-quick-taunt").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-taunt-index"),10),q=Cs[v];q&&y(q.text)}});const C=document.getElementById("btn-open-wallet"),_=document.getElementById("btn-open-bet"),T=document.getElementById("btn-close-bet");C&&(C.onclick=()=>{this.betModalOpen=!0,this.render()}),_&&(_.onclick=()=>{this.betModalOpen=!0,this.render()}),T&&(T.onclick=()=>{this.betModalOpen=!1,this.render()}),document.querySelectorAll(".bet-chip").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-bet-amount"),10);v&&K.canAfford(v)&&(this.currentBet=v,this.render())}});const H=document.getElementById("btn-confirm-bet");H&&(H.onclick=()=>{K.canAfford(this.currentBet)&&(this.matchPot=this.currentBet*2,this.mpState.roomCode&&this.mpClient.sendBet(this.currentBet),this.betModalOpen=!1,this.engine.log(`🪙 Bet set to 🪙${this.currentBet}! Total pot: 🪙${this.matchPot.toLocaleString()}`),this.render())});const E=document.getElementById("btn-claim-village-bonus");E&&(E.onclick=()=>{K.claimRefill()&&(ne.playBonusRoll(),be.light(),this.engine.log("🎁 Claimed Village Bonus! +500 Coins added to wallet."),this.render())});const w=document.getElementById("btn-action-create-room");w&&(w.onclick=async()=>{const g=document.getElementById("input-host-name"),v=document.getElementById("select-mp-mode"),q=g?g.value.trim():"Player 1",X=v?v.value:"2p";await this.mpClient.createRoom(X,q)});const Z=document.getElementById("btn-action-join-room");Z&&(Z.onclick=async()=>{const g=document.getElementById("input-join-code"),v=document.getElementById("input-join-name"),q=g?g.value.trim():"",X=v?v.value.trim():"Player 2";if(!q){alert("Please enter the Board Number (e.g. BK-260915-101-482).");return}await this.mpClient.joinRoom(q,X)});const R=document.getElementById("btn-copy-board-number");R&&(R.onclick=()=>{const g=document.getElementById("text-board-number");g&&(navigator.clipboard.writeText(g.textContent.trim()),R.textContent="✅ Copied!",setTimeout(()=>{R&&(R.textContent="📋 Copy")},1800))});const $=document.getElementById("btn-start-4p-ai-pair");$&&($.onclick=()=>{this.mpClient.sendStart4pAIPair(),this.handleStart4pAIPair({bet:this.currentBet})});const A=document.getElementById("btn-copy-room-link");A&&(A.onclick=()=>{const g=document.getElementById("input-mp-room-link");g&&(navigator.clipboard.writeText(g.value),A.textContent="✅ Copied!",setTimeout(()=>{A&&(A.textContent="📋 Copy Link")},1800))});const M=document.getElementById("btn-leave-room");M&&(M.onclick=()=>{this.mpClient.leaveRoom(),this.mpState.roomCode=null,this.mpState.players=[],this.mpModalOpen=!1,this.winnerAwarded=!1,this.engine.initGame(),this.turnTimer.start(),this.render()});const F=document.getElementById("btn-mp-play-now");F&&(F.onclick=()=>{this.mpModalOpen=!1,this.render()});const O=document.getElementById("btn-close-mp"),N=document.getElementById("btn-modal-mp-close");O&&(O.onclick=()=>{this.mpModalOpen=!1,this.render()}),N&&(N.onclick=()=>{this.mpModalOpen=!1,this.render()});const b=document.getElementById("btn-open-mobile");b&&(b.onclick=async()=>{this.qrDataUrl||(this.qrDataUrl=await Yt(this.baseMobileUrl)),this.mobileOpen=!0,this.render()});const S=document.getElementById("btn-close-mobile"),ie=document.getElementById("btn-modal-mobile-done");S&&(S.onclick=()=>{this.mobileOpen=!1,this.render()}),ie&&(ie.onclick=()=>{this.mobileOpen=!1,this.render()});const de=document.getElementById("btn-open-rules");de&&(de.onclick=()=>{this.rulesOpen=!0,this.render()});const Te=document.getElementById("btn-close-rules"),ue=document.getElementById("btn-modal-got-it");Te&&(Te.onclick=()=>{this.rulesOpen=!1,this.render()}),ue&&(ue.onclick=()=>{this.rulesOpen=!1,this.render()});const ye=document.getElementById("btn-toggle-dice");ye&&(ye.onclick=()=>{this.engine.diceMode=this.engine.diceMode==="cowries"?"die":"cowries",be.light(),this.render()});const m=document.getElementById("btn-toggle-sound");m&&(m.onclick=()=>{this.soundMuted=ne.toggleMute(),be.light(),this.render()});const h=document.getElementById("btn-restart-game");h&&(h.onclick=()=>{confirm("Start a new match?")&&(this.engine.initGame(),this.winnerAwarded=!1,this.turnTimer.start(),this.mpState.roomCode&&this.mpClient.sendRestart())});const B=document.getElementById("btn-victory-restart");B&&(B.onclick=()=>{this.winnerAwarded=!1,this.turnTimer.stop(),this.inLobby=!0,this.render()});const D=document.getElementById("btn-header-login");D&&(D.onclick=()=>{this.loginModalOpen=!0,this.loginError=null,this.render()});const G=document.getElementById("tab-login-btn"),L=document.getElementById("tab-signup-btn"),j=document.getElementById("link-switch-signup"),I=document.getElementById("link-switch-login");G&&(G.onclick=()=>{this.loginTab="login",this.loginError=null,this.render()}),L&&(L.onclick=()=>{this.loginTab="signup",this.loginError=null,this.render()}),j&&(j.onclick=g=>{g.preventDefault(),this.loginTab="signup",this.loginError=null,this.render()}),I&&(I.onclick=g=>{g.preventDefault(),this.loginTab="login",this.loginError=null,this.render()});const U=document.getElementById("btn-submit-login"),x=document.getElementById("input-login-mobile"),W=document.getElementById("input-login-fullname"),J=document.getElementById("input-login-nickname"),Y=document.getElementById("nickname-preview-badge"),te=()=>{if(!Y)return;const g=W?W.value:"",v=J?J.value:"";Y.textContent=pn(g,v)};W&&(W.oninput=te),J&&(J.oninput=te);const V=()=>{if(!x)return;const g=x.value.trim();if(this.loginTab==="login"){const v=z.login(g,"","",!1);v.success?(this.loginModalOpen=!1,this.loginError=null,this.inLobby=!0,this.engine.players&&this.engine.players[0]&&(this.engine.players[0].name=v.user.nickName||v.user.name),this.engine.log(`👤 Welcome back, ${v.user.nickName||v.user.name}! Profile restored.`),this.render()):(this.loginError=v.error,v.isNotRegistered&&(this.loginTab="signup"),this.render())}else{const v=W?W.value.trim():"",q=J?J.value.trim():"",X=z.login(g,v,q,!0);X.success?(this.loginModalOpen=!1,this.loginError=null,this.inLobby=!0,this.engine.players&&this.engine.players[0]&&(this.engine.players[0].name=X.user.nickName||X.user.name),this.engine.log(`👤 Welcome, ${X.user.nickName||X.user.name}! 🪙1,000 joining bonus credited!`),this.render()):(this.loginError=X.error,this.render())}};U&&(U.onclick=V),x&&(x.onkeydown=g=>{g.key==="Enter"&&V()}),W&&(W.onkeydown=g=>{g.key==="Enter"&&V()}),J&&(J.onkeydown=g=>{g.key==="Enter"&&V()});const re=document.getElementById("btn-mode-computer");re&&(re.onclick=()=>{this.computerModalOpen=!0,this.render()});const he=document.getElementById("btn-mode-online");he&&(he.onclick=async()=>{this.current4DigitCode=Le();const g=z.getCurrentUser(),v=g?g.nickName||g.name:"Player 1",q={mobile:(g==null?void 0:g.mobile)||"",nickName:(g==null?void 0:g.nickName)||v,fullName:(g==null?void 0:g.name)||v};await this.mpClient.createRoom("2p",v,this.current4DigitCode,q),this.createRoomModalOpen=!0,this.render()});const pe=document.getElementById("btn-mode-friends");pe&&(pe.onclick=()=>{this.friendsHubOpen=!0,this.render()});const ge=document.getElementById("btn-lobby-friends-direct");ge&&(ge.onclick=()=>{this.friendsHubOpen=!0,this.render()});const ve=document.getElementById("btn-close-computer-modal");ve&&(ve.onclick=()=>{this.computerModalOpen=!1,this.render()});const me=document.getElementById("btn-cm-format-2p"),Xe=document.getElementById("btn-cm-format-4p");me&&(me.onclick=()=>{this.computerPlayerCount=2,this.render()}),Xe&&(Xe.onclick=()=>{this.computerPlayerCount=4,this.render()}),document.querySelectorAll(".btn-cm-bet").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-bet"),10);v&&(this.computerBet=v,this.render())}});const et=document.getElementById("btn-start-computer-game");et&&(et.onclick=()=>{if(!K.canAfford(this.computerBet)){alert(`You need 🪙${this.computerBet.toLocaleString()} coins! Current balance: 🪙${K.getBalance().toLocaleString()}`);return}K.placeBet(this.computerBet),this.currentBet=this.computerBet,this.matchPot=this.computerBet*2,this.inLobby=!1,this.computerModalOpen=!1;const g=z.getCurrentUser(),v=g?g.nickName||g.name:"Player 1";this.computerPlayerCount===4?(this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${v} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Teammate AI",avatar:"🦁",color:"#d35400",isAI:!0},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 4-Player Offline match vs System AI Pair started! Pot: 🪙${this.matchPot.toLocaleString()}`)):(this.engine.gameMode="2p",this.engine.initGame([{id:1,team:1,name:`${v} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI (Top)",avatar:"🦚",color:"#27ae60",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 2-Player Offline match vs System AI started! Pot: 🪙${this.matchPot.toLocaleString()}`)),this.render()});const tt=document.getElementById("btn-count-2p"),Ue=document.getElementById("btn-count-4p");tt&&(tt.onclick=()=>{this.playerCount=2,this.lobbyMode="solo",this.render()}),Ue&&(Ue.onclick=()=>{this.playerCount=4,this.lobbyMode="4p_ai_pair",this.render()});const nt=document.getElementById("btn-select-mode-solo"),He=document.getElementById("btn-select-mode-friend"),it=document.getElementById("btn-select-mode-4p-pair"),st=document.getElementById("btn-select-mode-4p-solo"),Ge=document.getElementById("btn-select-mode-4p-friends");nt&&(nt.onclick=()=>{this.lobbyMode="solo",this.render()}),He&&(He.onclick=()=>{this.lobbyMode="friend",this.render()}),it&&(it.onclick=()=>{this.lobbyMode="4p_ai_pair",this.render()}),st&&(st.onclick=()=>{this.lobbyMode="4p_solo",this.render()}),Ge&&(Ge.onclick=()=>{this.lobbyMode="4p_friends",this.render()});const je=document.getElementById("btn-lobby-request-friend");je&&(je.onclick=()=>{this.friendsHubOpen=!0,this.render()});const we=document.getElementById("btn-header-friends");we&&(we.onclick=()=>{this.friendsHubOpen=!0,this.render()});const rt=document.getElementById("btn-close-friends-hub");rt&&(rt.onclick=()=>{this.friendsHubOpen=!1,this.render()}),document.querySelectorAll("[data-fhub-tab]").forEach(g=>{g.onclick=()=>{this.friendsTab=g.getAttribute("data-fhub-tab"),this.render()}});const ot=document.getElementById("input-fhub-search");ot&&(ot.oninput=g=>{this.friendsSearchQuery=g.target.value,this.render()});const In=document.getElementById("btn-clear-fhub-search");In&&(In.onclick=()=>{this.friendsSearchQuery="",this.render()});const En=document.getElementById("btn-fhub-create-room");En&&(En.onclick=async()=>{this.current4DigitCode=Le();const g=z.getCurrentUser(),v=g?g.nickName||g.name:"Player 1",q={mobile:(g==null?void 0:g.mobile)||"",nickName:(g==null?void 0:g.nickName)||v,fullName:(g==null?void 0:g.name)||v};await this.mpClient.createRoom(this.roomCreationMode,v,this.current4DigitCode,q),this.createRoomModalOpen=!0,this.render()});const xn=document.getElementById("btn-fhub-join-room");xn&&(xn.onclick=()=>{this.joinRoomModalOpen=!0,this.joinRoomError=null,this.enteredJoinCode="",this.render()});const An=document.getElementById("btn-fhub-invite-whatsapp");An&&(An.onclick=()=>{const g=this.mpState.roomCode||this.current4DigitCode||Le(),v=`${this.baseMobileUrl}?room=${g}`,q=encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta table room! Table Code: *${g}*
Tap here to play: ${v}`);window.open(`https://api.whatsapp.com/send?text=${q}`,"_blank")});const Bn=document.getElementById("btn-fhub-add-friend"),wn=document.getElementById("btn-fhub-empty-add");Bn&&(Bn.onclick=()=>{this.addFriendModalOpen=!0,this.addFriendError=null,this.render()}),wn&&(wn.onclick=()=>{this.addFriendModalOpen=!0,this.addFriendError=null,this.render()});const On=document.getElementById("btn-fhub-toggle-edit");On&&(On.onclick=()=>{this.isEditingFriends=!this.isEditingFriends,this.render()}),document.querySelectorAll(".btn-fcard-gift").forEach(g=>{g.onclick=()=>{ne.playBonusRoll(),be.light(),alert("🎁 You sent 100 Free Coins Gift to your friend!")}}),document.querySelectorAll(".btn-fcard-challenge").forEach(g=>{g.onclick=async()=>{const v=g.getAttribute("data-friend-name")||"Friend";this.current4DigitCode=Le();const q=z.getCurrentUser(),X=q?q.nickName||q.name:"Player 1",Q={mobile:(q==null?void 0:q.mobile)||"",nickName:(q==null?void 0:q.nickName)||X,fullName:(q==null?void 0:q.name)||X};await this.mpClient.createRoom("2p",X,this.current4DigitCode,Q),this.createRoomModalOpen=!0,this.engine.log(`⚔️ Challenged ${v} to Table #${this.current4DigitCode}!`),this.render()}}),document.querySelectorAll(".btn-fcard-delete").forEach(g=>{g.onclick=()=>{const v=g.getAttribute("data-friend-id");v&&(z.removeFriend(v),this.render())}});const $n=document.getElementById("btn-nav-home"),Nn=document.getElementById("btn-nav-friends"),Ln=document.getElementById("btn-nav-reward"),Dn=document.getElementById("btn-nav-history"),Fn=document.getElementById("btn-nav-profile");$n&&($n.onclick=()=>{this.computerModalOpen=!1,this.friendsHubOpen=!1,this.joinRoomModalOpen=!1,this.createRoomModalOpen=!1,this.profileModalOpen=!1,this.rulesOpen=!1,this.matchHistoryModalOpen=!1,this.inLobby=!0,this.render()}),Nn&&(Nn.onclick=()=>{this.friendsHubOpen=!0,this.render()});const Un=()=>{const g=z.claimHourlyReward();g.success?(ne.playBonusRoll(),be.heavy(),this.engine.log(g.message),alert(g.message)):alert(g.error),this.render()};Ln&&(Ln.onclick=Un);const Hn=document.getElementById("btn-lobby-hourly-reward");Hn&&(Hn.onclick=Un),Dn&&(Dn.onclick=()=>{this.matchHistoryModalOpen=!0,this.render()});const Gn=document.getElementById("btn-lobby-history");Gn&&(Gn.onclick=()=>{this.matchHistoryModalOpen=!0,this.render()});const jn=document.getElementById("btn-close-match-history"),qn=document.getElementById("btn-done-match-history");jn&&(jn.onclick=()=>{this.matchHistoryModalOpen=!1,this.render()}),qn&&(qn.onclick=()=>{this.matchHistoryModalOpen=!1,this.render()}),Fn&&(Fn.onclick=()=>{this.profileModalOpen=!0,this.render()});const Vn=document.getElementById("btn-close-create-room");Vn&&(Vn.onclick=()=>{this.createRoomModalOpen=!1,this.render()});const Wn=document.getElementById("radio-mode-1v1"),Jn=document.getElementById("radio-mode-2v2");Wn&&(Wn.onchange=()=>{this.roomCreationMode="2p",this.render()}),Jn&&(Jn.onchange=()=>{this.roomCreationMode="4p",this.render()}),document.querySelectorAll("[data-create-bet]").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-create-bet"),10);v&&(this.currentBet=v,this.matchPot=v*2,this.render())}});const Oe=document.getElementById("btn-copy-4digit-code");Oe&&(Oe.onclick=()=>{const g=Oe.getAttribute("data-code");g&&(navigator.clipboard.writeText(g),Oe.textContent="✅ Copied!",setTimeout(()=>{Oe&&(Oe.textContent=`📋 Copy Code (${g})`)},1800))});const zn=document.getElementById("btn-close-join-room");zn&&(zn.onclick=()=>{this.joinRoomModalOpen=!1,this.render()});const at=document.getElementById("input-4digit-code"),Kn=document.getElementById("btn-submit-join-code"),Yn=async()=>{if(!at)return;const g=at.value.trim();if(!g||g.length!==4){this.joinRoomError="Please enter a valid 4-digit code (e.g. 4821).",this.render();return}const v=z.getCurrentUser(),q=v?v.nickName||v.name:"Player 2",X={mobile:(v==null?void 0:v.mobile)||"",nickName:(v==null?void 0:v.nickName)||q,fullName:(v==null?void 0:v.name)||q};this.joinRoomError=null;try{await this.mpClient.joinRoom(g,q,X)}catch(Q){this.joinRoomError=Q.message||"Failed to connect to table.",this.render()}};Kn&&(Kn.onclick=Yn),at&&(at.onkeydown=g=>{g.key==="Enter"&&Yn()});const Qn=document.getElementById("btn-close-add-friend");Qn&&(Qn.onclick=()=>{this.addFriendModalOpen=!1,this.render()});const ct=document.getElementById("input-friend-mobile"),Zn=document.getElementById("btn-submit-add-friend"),Xn=()=>{if(!ct)return;const g=ct.value.trim(),v=z.addFriendByMobile(g);v.success?(this.addFriendModalOpen=!1,this.addFriendError=null,alert(v.message),this.render()):(this.addFriendError=v.error,this.render())};Zn&&(Zn.onclick=Xn),ct&&(ct.onkeydown=g=>{g.key==="Enter"&&Xn()}),document.querySelectorAll(".btn-lobby-tier").forEach(g=>{g.onclick=()=>{const v=parseInt(g.getAttribute("data-bet"),10);v&&(this.selectedBet=v,this.render())}});const ei=document.getElementById("btn-lobby-start-game");ei&&(ei.onclick=()=>{this.startGame(this.lobbyMode,this.selectedBet)});const ti=document.getElementById("btn-lobby-profile");ti&&(ti.onclick=()=>{this.profileModalOpen=!0,this.render()});const ni=document.getElementById("btn-lobby-rules");ni&&(ni.onclick=()=>{this.rulesOpen=!0,this.render()});const ii=document.getElementById("btn-lobby-switch-acc");ii&&(ii.onclick=()=>{z.logout(),this.inLobby=!1,this.loginModalOpen=!0,this.loginError=null,this.render()});const si=document.getElementById("btn-open-profile"),ri=document.getElementById("btn-close-profile"),oi=document.getElementById("btn-profile-done"),ai=document.getElementById("btn-switch-account");si&&(si.onclick=()=>{this.profileModalOpen=!0,this.render()}),ri&&(ri.onclick=()=>{this.profileModalOpen=!1,this.render()}),oi&&(oi.onclick=()=>{this.profileModalOpen=!1,this.render()}),ai&&(ai.onclick=()=>{z.logout(),this.profileModalOpen=!1,this.inLobby=!1,this.loginModalOpen=!0,this.loginError=null,this.render()});const ci=document.getElementById("btn-open-exit"),li=document.getElementById("btn-close-exit"),di=document.getElementById("btn-cancel-exit"),ui=document.getElementById("btn-confirm-exit");ci&&(ci.onclick=()=>{this.exitModalOpen=!0,this.render()}),li&&(li.onclick=()=>{this.exitModalOpen=!1,this.render()}),di&&(di.onclick=()=>{this.exitModalOpen=!1,this.render()}),ui&&(ui.onclick=()=>{const g=this.mpState.roomCode?this.mpState.myTeam:1;z.recordMatch({matchId:`m_${Date.now()}`,opponent:this.mpState.roomCode?g===1?this.mpClient.guestName:this.mpClient.hostName:"System AI",mode:this.mpState.roomCode?`Online Room #${this.mpState.roomCode}`:"Solo vs AI",bet:this.currentBet,pot:this.matchPot,result:"FORFEITED",coinsChange:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:g===1?this.engine.team1Kills:this.engine.team2Kills}),this.mpState.roomCode&&(this.mpClient.sendTimeoutPass(this.mpState.myPlayerId),this.mpClient.leaveRoom()),this.exitModalOpen=!1,this.turnTimer.stop(),this.inLobby=!0,this.engine.log("🚪 You exited the match."),this.render()});const hi=document.getElementById("btn-inactivity-dismiss");hi&&(hi.onclick=()=>{this.inactivityModalOpen=!1,this.turnTimer.stop(),this.inLobby=!0,this.render()});const pi=document.getElementById("btn-gate-continue");pi&&(pi.onclick=()=>this.handleGate23Decision("continue"));const fi=document.getElementById("btn-gate-restart");fi&&(fi.onclick=()=>this.handleGate23Decision("restart"));const mi=document.getElementById("btn-toggle-lang");mi&&(mi.onclick=()=>{_t(),this.render()});const gi=document.getElementById("btn-lobby-lang-toggle");gi&&(gi.onclick=()=>{_t(),this.render()});const bi=document.getElementById("btn-login-lang-toggle");bi&&(bi.onclick=()=>{_t(),this.render()});const yi=document.getElementById("btn-lobby-add-coins"),vi=document.getElementById("btn-nav-store"),Ci=()=>{const g=K.claimRefill();g.success?(ne.playBonusRoll(),alert(`🎁 Free Refill! Added 🪙${g.amount.toLocaleString()} coins!
New Balance: 🪙${g.balance.toLocaleString()}`),this.render()):alert(`🪙 Coin Refill: Available when balance is under 🪙250. You currently have 🪙${K.getBalance().toLocaleString()}!`)};yi&&(yi.onclick=g=>{g.stopPropagation(),Ci()}),vi&&(vi.onclick=Ci)}}function fn(){new jo}window.initBharakhatta=fn;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fn):fn();
