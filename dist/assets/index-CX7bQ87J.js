var cs=s=>{throw TypeError(s)};var Fe=(s,e,t)=>e.has(s)?cs("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);function ls(s,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in s)){const r=Object.getOwnPropertyDescriptor(n,i);r&&Object.defineProperty(s,i,r.get?r:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const ds=[{r:0,c:3,id:"top-home",name:"Top Home Base"},{r:6,c:3,id:"bottom-home",name:"Bottom Home Base"},{r:3,c:0,id:"left-ghatta",name:"West Safe Katta"},{r:3,c:6,id:"right-ghatta",name:"East Safe Katta"},{r:1,c:1,id:"nw-ghatta",name:"North-West Safe Katta"},{r:1,c:5,id:"ne-ghatta",name:"North-East Safe Katta"},{r:5,c:1,id:"sw-ghatta",name:"South-West Safe Katta"},{r:5,c:5,id:"se-ghatta",name:"South-East Safe Katta"},{r:3,c:3,id:"center-sanctum",name:"Center Home Sanctum"}];function je(s,e){return ds.some(t=>t.r===s&&t.c===e)}function us(s,e){return s===3&&e===3}const ht=[{r:6,c:3,step:0,label:"Home 1"},{r:6,c:4,step:1},{r:6,c:5,step:2},{r:6,c:6,step:3},{r:5,c:6,step:4},{r:4,c:6,step:5},{r:3,c:6,step:6,safe:!0},{r:2,c:6,step:7},{r:1,c:6,step:8},{r:0,c:6,step:9},{r:0,c:5,step:10},{r:0,c:4,step:11},{r:0,c:3,step:12,safe:!0,label:"Opponent Home 2"},{r:0,c:2,step:13},{r:0,c:1,step:14},{r:0,c:0,step:15},{r:1,c:0,step:16},{r:2,c:0,step:17},{r:3,c:0,step:18,safe:!0},{r:4,c:0,step:19},{r:5,c:0,step:20},{r:6,c:0,step:21},{r:6,c:1,step:22},{r:6,c:2,step:23}],di=[...ht.slice(12),...ht.slice(0,12)].map((s,e)=>({...s,step:e})),hs=[{r:5,c:3,step:24},{r:4,c:3,step:25},{r:3,c:3,step:26,isCenter:!0,safe:!0}],ps=[{r:1,c:3,step:24},{r:2,c:3,step:25},{r:3,c:3,step:26,isCenter:!0,safe:!0}],fs=[{r:5,c:1,step:24},{r:4,c:1,step:25},{r:3,c:1,step:26},{r:2,c:1,step:27},{r:1,c:1,step:28,safe:!0},{r:1,c:2,step:29},{r:1,c:3,step:30},{r:1,c:4,step:31},{r:2,c:4,step:32},{r:3,c:4,step:33},{r:4,c:4,step:34},{r:4,c:3,step:35},{r:4,c:2,step:36},{r:3,c:2,step:37},{r:2,c:2,step:38},{r:2,c:3,step:39},{r:3,c:3,step:40,isCenter:!0,safe:!0}],ms=[...ht,...fs].map((s,e)=>({...s,step:e})),gs=[{r:1,c:5,step:24},{r:2,c:5,step:25},{r:3,c:5,step:26},{r:4,c:5,step:27},{r:5,c:5,step:28,safe:!0},{r:5,c:4,step:29},{r:5,c:3,step:30},{r:5,c:2,step:31},{r:4,c:2,step:32},{r:3,c:2,step:33},{r:2,c:2,step:34},{r:2,c:3,step:35},{r:2,c:4,step:36},{r:3,c:4,step:37},{r:4,c:4,step:38},{r:4,c:3,step:39},{r:3,c:3,step:40,isCenter:!0,safe:!0}],ys=[...di,...gs].map((s,e)=>({...s,step:e})),bs=[...ht,...hs].map((s,e)=>({...s,step:e})),vs=[...di,...ps].map((s,e)=>({...s,step:e}));function Cn(s,e="spiral"){return e==="classic"?s===1?bs:vs:s===1?ms:ys}const nt={team1:{r:7,c:3,name:"Bottom Jail (Team 1)"},team2:{r:-1,c:3,name:"Top Jail (Team 2)"}},Sn={1:{te:"Okkati",en:"One",isBonus:!0,releasesCoins:1},2:{te:"Rendu",en:"Two",isBonus:!1,releasesCoins:0},3:{te:"Moodu",en:"Three",isBonus:!1,releasesCoins:0},4:{te:"Naalugu",en:"Four",isBonus:!1,releasesCoins:0},5:{te:"Aidu",en:"Five",isBonus:!0,releasesCoins:0},6:{te:"Aaru",en:"Six",isBonus:!0,releasesCoins:0},12:{te:"Baara",en:"Twelve (Baara!)",isBonus:!0,releasesCoins:0}};class Cs{constructor(){this.shells=[{id:0,isOpen:!0,rot:15,x:0,y:0},{id:1,isOpen:!0,rot:-25,x:0,y:0},{id:2,isOpen:!1,rot:40,x:0,y:0},{id:3,isOpen:!0,rot:-10,x:0,y:0},{id:4,isOpen:!1,rot:65,x:0,y:0},{id:5,isOpen:!0,rot:-50,x:0,y:0}]}roll(e=null){let t=0,n=0;e!==null?(n=e,t=n===12?0:n):(this.shells.forEach(r=>{r.isOpen=Math.random()<.48,r.isOpen&&t++,r.rot=Math.floor(Math.random()*360),r.x=(Math.random()-.5)*24,r.y=(Math.random()-.5)*16}),t===0?n=12:n=t),e!==null&&this.shells.forEach((r,o)=>{r.isOpen=o<t,r.rot=Math.floor(Math.random()*360),r.x=(Math.random()-.5)*24,r.y=(Math.random()-.5)*16});const i=Sn[n]||{te:`${n}`,en:`${n}`,isBonus:!1,releasesCoins:0};return{score:n,openCount:t,shells:this.shells.map(r=>({...r})),isBonus:i.isBonus,releasesCoins:i.releasesCoins,titleTe:i.te,titleEn:i.en}}rollDie(){const e=Math.floor(Math.random()*6)+1,t=e===1||e===5||e===6,n=e===1?1:0,i=Sn[e];return{score:e,openCount:e,shells:[],isBonus:t,releasesCoins:n,titleTe:i.te,titleEn:i.en}}}class Ss{constructor(){this.ctx=null,this.muted=!1,this.initialized=!1}init(){if(!this.initialized&&!(typeof window>"u"))try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.initialized=!0)}catch(e){console.warn("Web Audio API not supported",e)}}toggleMute(){return this.muted=!this.muted,this.muted}playCowrieRoll(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=14+Math.floor(Math.random()*8);for(let n=0;n<t;n++){const i=n/t*.45+(Math.random()*.04-.02),r=e+Math.max(0,i),o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.createBiquadFilter(),l=2200+Math.random()*2600;o.type=Math.random()>.4?"triangle":"sine",o.frequency.setValueAtTime(l,r),o.frequency.exponentialRampToValueAtTime(l*.4,r+.035),c.type="bandpass",c.frequency.setValueAtTime(2800+Math.random()*1200,r),c.Q.setValueAtTime(4,r);const d=(.05+n/t*.12)*(.8+Math.random()*.4);a.gain.setValueAtTime(d,r),a.gain.exponentialRampToValueAtTime(1e-4,r+.04),o.connect(c),c.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.045)}}playCoinStep(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(480,e),t.frequency.exponentialRampToValueAtTime(720,e+.04),t.frequency.exponentialRampToValueAtTime(320,e+.09),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.11)}playJailRelease(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=e+i*.05,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.1,r),a.gain.exponentialRampToValueAtTime(.001,r+.14),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.15)})}playCapture(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(40,e+.25),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.26),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.28);const i=this.ctx.createBuffer(1,this.ctx.sampleRate*.15,this.ctx.sampleRate),r=i.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1500,e),a.Q.setValueAtTime(3,e);const c=this.ctx.createGain();c.gain.setValueAtTime(.25,e),c.gain.exponentialRampToValueAtTime(.001,e+.14),o.connect(a),a.connect(c),c.connect(this.ctx.destination),o.start(e),o.stop(e+.16)}playBonusRoll(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[587.33,739.99,880,1174.66].forEach((n,i)=>{const r=e+i*.04,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.09,r),a.gain.exponentialRampToValueAtTime(5e-4,r+.35),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.36)})}playBaaraTwelve(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[440,554.37,659.25,880,1108.73,1318.51].forEach((n,i)=>{const r=e+i*.06,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.12,r),a.gain.exponentialRampToValueAtTime(.001,r+.5),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+.52)})}playVictory(){if(this.muted||(this.init(),!this.ctx))return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=[{f:523.25,d:.2},{f:659.25,d:.2},{f:783.99,d:.25},{f:1046.5,d:.5},{f:880,d:.2},{f:1046.5,d:.7}];let n=e;t.forEach(i=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(i.f,n),o.gain.setValueAtTime(.15,n),o.gain.exponentialRampToValueAtTime(.001,n+i.d*1.1),r.connect(o),o.connect(this.ctx.destination),r.start(n),r.stop(n+i.d*1.15),n+=i.d})}}const te=new Ss,K={WAITING_FOR_ROLL:"WAITING_FOR_ROLL",ROLLING:"ROLLING",WAITING_FOR_MOVE:"WAITING_FOR_MOVE",ANIMATING_MOVE:"ANIMATING_MOVE",GAME_OVER:"GAME_OVER"};class Ts{constructor(e={}){this.dice=new Cs,this.diceMode=e.diceMode||"cowries",this.gameMode=e.gameMode||"2p",this.pathStyle=e.pathStyle||"spiral",this.requireKill=e.requireKill!==void 0?e.requireKill:!0,this.onStateChange=e.onStateChange||(()=>{}),this.onLog=e.onLog||(()=>{}),this.onTurnChange=e.onTurnChange||(()=>{}),this.onBothGatesOpen=e.onBothGatesOpen||(()=>{}),this.isMultiplayer=e.isMultiplayer||!1,this.isHost=e.isHost!==void 0?e.isHost:!0,this.bothGatesPrompted=!1,this.initGame()}initGame(e=null){this.bothGatesPrompted=!1,e&&Array.isArray(e)&&e.length>0?(this.players=e.map(t=>({...t})),this.gameMode=this.players.length>=4?"4p":"2p"):this.isMultiplayer?this.players=[{id:1,team:1,name:"Player 1",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2",avatar:"🦚",color:"#27ae60",isAI:!1}]:this.gameMode==="4p"?this.players=[{id:1,team:1,name:"Player 1",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Player 3",avatar:"🦁",color:"#d35400",isAI:!1},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]:this.players=[{id:1,team:1,name:"Player 1 (Bottom)",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2 (Top)",avatar:"🦚",color:"#27ae60",isAI:!0}],this.coins=[];for(let t=1;t<=6;t++)this.coins.push({id:`t1_c${t}`,num:t,team:1,inJail:!0,stepIndex:-1,isFinished:!1,coord:{...nt.team1}}),this.coins.push({id:`t2_c${t}`,num:t,team:2,inJail:!0,stepIndex:-1,isFinished:!1,coord:{...nt.team2}});this.currentPlayerIndex=0,this.currentRoll=null,this.status=K.WAITING_FOR_ROLL,this.validMoves=[],this.winner=null,this.team1Kills=0,this.team2Kills=0,this.stats={rollsCount:0,capturesCount:0,bonusTurnsCount:0,startTime:Date.now()},this.emitChange(),this.log("🎮 Game initialized! Welcome to Bharakhatta. Team 1 starts.")}getCurrentPlayer(){return this.players[this.currentPlayerIndex]}getCurrentTeam(){return this.getCurrentPlayer().team}getTeamCoins(e){return this.coins.filter(t=>t.team===e)}getCoinsAtCoord(e,t){return this.coins.filter(n=>!n.inJail&&!n.isFinished&&n.coord.r===e&&n.coord.c===t)}getJailCoins(e){return this.coins.filter(t=>t.team===e&&t.inJail)}getFinishedCoins(e){return this.coins.filter(t=>t.team===e&&t.isFinished)}roll(){if(this.status!==K.WAITING_FOR_ROLL)return null;this.getCurrentPlayer(),this.status=K.ROLLING,this.stats.rollsCount++,te.playCowrieRoll(),this.emitChange();let e;return this.diceMode==="die"?e=this.dice.rollDie():e=this.dice.roll(),this.currentRoll=e,setTimeout(()=>{this.resolveRoll(e)},600),e}resolveRoll(e){const t=this.getCurrentPlayer(),n=t.team,i=e.score;e.score===12?te.playBaaraTwelve():e.isBonus&&te.playBonusRoll(),this.log(`🎲 ${t.name} rolled ${e.titleEn} (${i})! ${e.isBonus?"⭐ Bonus Turn Awarded!":""}`);const r=this.getLegalMoves(n,i);if(this.validMoves=r,r.length===0){this.log(`⚠️ No valid moves possible with roll of ${i}.`),e.isBonus?(this.stats.bonusTurnsCount++,this.log(`✨ Bonus roll allowed ${t.name} another roll!`),this.status=K.WAITING_FOR_ROLL,this.emitChange(),this.checkAITurn()):setTimeout(()=>{this.advanceTurn()},900);return}this.status=K.WAITING_FOR_MOVE,this.emitChange(),this.checkAITurn()}getLegalMoves(e,t){const n=[],i=this.getTeamCoins(e),r=this.getJailCoins(e),o=Cn(e,this.pathStyle);t===1&&r.length>0&&n.push({type:"RELEASE_JAIL",coin:r[0],count:1,description:`Release 1 coin (#${r[0].num}) from Jail to Home base`});const c=i.filter(d=>!d.inJail&&!d.isFinished),l=e===1?this.team1Kills>0:this.team2Kills>0;for(const d of c){const u=o.length-1;if(this.requireKill&&!l){if(d.stepIndex===23)continue;if(d.stepIndex<23&&d.stepIndex+t>=23){const m=o[23];n.push({type:"MOVE_COIN",coin:d,fromStep:d.stepIndex,toStep:23,targetCoord:m,isCapture:this.checkWillCapture(e,m),isSafe:m.safe||je(m.r,m.c),description:`Advance coin #${d.num} to Step 23 (Stopped! Opponent kill needed to enter inside 5/5 ring)`});continue}}const p=d.stepIndex+t;if(p<u){const m=o[p],y=d.stepIndex<=23&&p>23;n.push({type:"MOVE_COIN",coin:d,fromStep:d.stepIndex,toStep:p,targetCoord:m,isCapture:this.checkWillCapture(e,m),isSafe:m.safe||je(m.r,m.c),description:y?`Advance coin #${d.num} into Inside 5/5 Ring (Step ${p})!`:`Move coin #${d.num} to (${m.r}, ${m.c})`})}else if(p===u){const m=o[u];n.push({type:"FINISH_COIN",coin:d,fromStep:d.stepIndex,toStep:u,targetCoord:m,description:`Goal! Coin #${d.num} enters the Center Sanctum (Final Home)!`})}}return n}checkWillCapture(e,t){if(je(t.r,t.c))return!1;const n=e===1?2:1;return this.getCoinsAtCoord(t.r,t.c).some(r=>r.team===n)}executeMove(e,t=!1,n=!1){if(!t&&this.status!==K.WAITING_FOR_MOVE)return;this.status=K.ANIMATING_MOVE,this.validMoves=[],this.emitChange();const i=this.getCurrentPlayer(),r=i.team,o=Cn(r,this.pathStyle);if(e.type==="RELEASE_JAIL"){const a=this.getJailCoins(r),c=e.count||1,l=o[0];te.playJailRelease();for(let u=0;u<c&&u<a.length;u++){const p=a[u];p.inJail=!1,p.stepIndex=0,p.coord={r:l.r,c:l.c}}this.log(`🚪 ${i.name} released ${c} coin(s) from Jail onto Home Base!`);const d=this.currentRoll?this.currentRoll.isBonus:!1;this.finishMove(d)}else if(e.type==="MOVE_COIN"||e.type==="FINISH_COIN"){const a=e.coin&&e.coin.id&&this.coins.find(p=>p.id===e.coin.id)||e.coin,c=a.stepIndex,l=e.toStep,d=e.looped,u=()=>{a.stepIndex=l,a.coord={...e.targetCoord},e.type==="FINISH_COIN"&&(a.isFinished=!0,te.playBaaraTwelve(),this.log(`🎉 Goal! ${i.name}'s Coin #${a.num} reached the Center Sanctum!`));let p=!1;if(!je(a.coord.r,a.coord.c)){const T=r===1?2:1,L=this.getCoinsAtCoord(a.coord.r,a.coord.c).filter(P=>P.team===T);L.length>0&&(p=!0,this.stats.capturesCount++,r===1?this.team1Kills++:this.team2Kills++,te.playCapture(),L.forEach(P=>{P.inJail=!0,P.stepIndex=-1,P.coord={...P.team===1?nt.team1:nt.team2},this.log(`💥 Katta! ${i.name} killed Team ${T}'s Coin #${P.num}! Returned to Jail.`)}),this.log(`⚡ Katta strike earned ${i.name} a Bonus Turn! Inside 5/5 ring unlocked.`),this.team1Kills>=1&&this.team2Kills>=1&&!this.bothGatesPrompted&&(this.bothGatesPrompted=!0,this.log("⚔️ Both Home 1 and Home 2 have unlocked Gate 23!"),this.onBothGatesOpen&&this.onBothGatesOpen()))}const m=this.checkWinCondition(r),y=this.checkSquad5x5Win(r);if(m||y){const T=y&&!m?"SQUAD_5X5_COMPLETE":"CENTER_SANCTUM";this.winner={team:r,player:i,reason:T,stats:{...this.stats,durationSec:Math.round((Date.now()-this.stats.startTime)/1e3)}},this.status=K.GAME_OVER,te.playVictory(),T==="SQUAD_5X5_COMPLETE"?this.log(`🏆 ALL 6 COINS ENTERED 5/5 SQUAD! Team ${r} has no coins left in outer 7/7 zone! Team ${r} Wins!`):this.log(`🏆 GAME OVER! Team ${r} has won the game of Bharakhatta! Congratulations!`),this.emitChange();return}const A=(this.currentRoll?this.currentRoll.isBonus:!1)||p;this.finishMove(A)};n?u():this.animateCoinHop(a,o,c,l,d,u)}}animateCoinHop(e,t,n,i,r,o){const a=[];if(r){for(let d=n+1;d<=23;d++)a.push(d);for(let d=0;d<=i;d++)a.push(d)}else for(let d=n+1;d<=i;d++)a.push(d);if(a.length===0){o();return}const c=Math.max(70,Math.min(150,600/a.length)),l=()=>{if(a.length===0){o();return}const d=a.shift();e.coord={r:t[d].r,c:t[d].c},te.playCoinStep(),this.emitChange(),setTimeout(l,c)};l()}finishMove(e){const t=this.getCurrentPlayer();e?(this.stats.bonusTurnsCount++,this.log(`✨ ${t.name} gets a BONUS TURN! Roll again.`),this.status=K.WAITING_FOR_ROLL,this.currentRoll=null,this.validMoves=[],this.emitChange(),this.checkAITurn()):setTimeout(()=>{this.advanceTurn()},500)}advanceTurn(){this.currentPlayerIndex=(this.currentPlayerIndex+1)%this.players.length,this.currentRoll=null,this.validMoves=[],this.status=K.WAITING_FOR_ROLL;const e=this.getCurrentPlayer();this.log(`👉 Turn: ${e.name} (Team ${e.team})`),this.emitChange(),this.onTurnChange&&this.onTurnChange(e),this.checkAITurn()}getBestLegalMove(){if(this.validMoves.length===0)return null;let e=this.validMoves[0],t=-999;for(const n of this.validMoves){let i=0;n.type==="FINISH_COIN"&&(i+=500),n.isCapture&&(i+=400),n.type==="RELEASE_JAIL"&&(i+=250+(n.count||1)*20),n.isSafe&&(i+=150),n.type==="MOVE_COIN"&&(i+=n.toStep),i>t&&(t=i,e=n)}return e}autoPlayTurn(){if(this.status===K.WAITING_FOR_ROLL)return this.roll();if(this.status===K.WAITING_FOR_MOVE){const e=this.getBestLegalMove();if(e)return this.executeMove(e),e}return null}checkWinCondition(e){return this.getFinishedCoins(e).length===6}checkSquad5x5Win(e){const t=this.getTeamCoins(e);return t.length!==6?!1:t.every(n=>!n.inJail&&(n.stepIndex>=24||n.isFinished))}checkAITurn(){!this.getCurrentPlayer().isAI||this.status===K.GAME_OVER||this.isMultiplayer&&!this.isHost||(this.status===K.WAITING_FOR_ROLL?setTimeout(()=>{this.roll()},900):this.status===K.WAITING_FOR_MOVE&&setTimeout(()=>{this.executeAIMove()},800))}executeAIMove(){const e=this.getBestLegalMove();e&&this.executeMove(e)}log(e){this.onLog&&this.onLog({id:Date.now()+Math.random(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),text:e})}emitChange(){this.onStateChange&&this.onStateChange(this.getStateSnapshot())}getStateSnapshot(){return{status:this.status,gameMode:this.gameMode,diceMode:this.diceMode,pathStyle:this.pathStyle,requireKill:this.requireKill,players:this.players,currentPlayer:this.getCurrentPlayer(),currentRoll:this.currentRoll,coins:this.coins.map(e=>({...e})),validMoves:this.validMoves,winner:this.winner,team1Kills:this.team1Kills,team2Kills:this.team2Kills,stats:{...this.stats}}}applyStateSnapshot(e){if(e){if(this.status=e.status,this.gameMode=e.gameMode||this.gameMode,e.players&&Array.isArray(e.players)&&(this.players=e.players.map(t=>({...t}))),e.currentPlayer){const t=this.players.findIndex(n=>n.id===e.currentPlayer.id);t!==-1&&(this.currentPlayerIndex=t)}this.currentRoll=e.currentRoll||null,e.coins&&Array.isArray(e.coins)&&(this.coins=e.coins.map(t=>({...t}))),this.validMoves=e.validMoves||[],this.winner=e.winner||null,e.team1Kills!==void 0&&(this.team1Kills=e.team1Kills),e.team2Kills!==void 0&&(this.team2Kills=e.team2Kills),e.stats&&(this.stats={...e.stats}),this.emitChange()}}}function _s(s,e=null){const{coins:t,validMoves:n,currentPlayer:i,status:r,team1Kills:o,team2Kills:a,players:c}=s,l=r==="WAITING_FOR_MOVE",d=i.team;let u=!0;e&&e.roomCode?u=i.id===e.myPlayerId:i.isAI&&(u=!1);const p={};t.forEach(g=>{if(!g.inJail&&!g.isFinished){const b=`${g.coord.r}_${g.coord.c}`;p[b]||(p[b]=[]),p[b].push(g)}});const m=t.filter(g=>g.team===1&&g.inJail),y=t.filter(g=>g.team===2&&g.inJail),v=t.filter(g=>g.team===1&&g.isFinished),A=t.filter(g=>g.team===2&&g.isFinished),T=n.find(g=>g.type==="RELEASE_JAIL"),L=l&&u&&!!T,P=c.find(g=>g.team===1)||{name:"Team 1"},w=c.find(g=>g.team===2)||{name:"Team 2"};let J="";for(let g=0;g<7;g++)for(let b=0;b<7;b++){const I=je(g,b),E=us(g,b),F=`${g}_${b}`,ne=p[F]||[],le=l&&u?n.find(C=>C.targetCoord&&C.targetCoord.r===g&&C.targetCoord.c===b):null,Ce=g===6&&b===2,ge=g===0&&b===4;let ae=["board-cell"];I&&ae.push("cell-safe-katta"),E&&ae.push("cell-center-sanctum"),g===0&&b===3&&ae.push("cell-home-team2"),g===6&&b===3&&ae.push("cell-home-team1"),Ce&&ae.push("cell-gate-step23","gate-t1"),ge&&ae.push("cell-gate-step23","gate-t2"),le&&ae.push("cell-valid-target");let f="";E?f=`
          <div class="center-sanctum-emblem happy-home-emblem ${v.length+A.length>0?"has-happy-coins":""}">
            <svg viewBox="0 0 100 100" class="sanctum-svg">
              <circle cx="50" cy="50" r="46" fill="rgba(241, 196, 15, 0.18)" stroke="#d4ac0d" stroke-width="3" stroke-dasharray="6 3" />
              <circle cx="50" cy="50" r="34" fill="rgba(230, 126, 34, 0.22)" />
              <line x1="16" y1="16" x2="84" y2="84" stroke="#c0392b" stroke-width="3" />
              <line x1="84" y1="16" x2="16" y2="84" stroke="#c0392b" stroke-width="3" />
              <circle cx="50" cy="50" r="18" fill="#ffd700" opacity="0.45" />
            </svg>
            <div class="happy-home-label">
              <span class="happy-home-star">✨</span>
              <span class="happy-home-text">HAPPY HOME</span>
              <span class="happy-home-star">🎉</span>
            </div>
            <div class="finished-coins-stack">
              ${ks(v,A)}
            </div>
          </div>
        `:I?f=`
          <div class="katta-x-mark">
            <svg viewBox="0 0 100 100" class="cross-svg">
              <line x1="10" y1="10" x2="90" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
              <line x1="90" y1="10" x2="10" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
            </svg>
            ${g===0&&b===3?'<span class="cell-tag">HOME 2</span>':""}
            ${g===6&&b===3?'<span class="cell-tag">HOME 1</span>':""}
          </div>
        `:Ce?f=`
          <div class="gate-marker" title="Gate 23 (Team 1): Coins stop here unless you have killed an opponent!">
            <span class="cell-gate-tag">GATE 23</span>
          </div>
        `:ge&&(f=`
          <div class="gate-marker" title="Gate 23 (Team 2): Coins stop here unless you have killed an opponent!">
            <span class="cell-gate-tag">GATE 23</span>
          </div>
        `);const h=ne.map((C,O)=>{const G=l&&u&&n.some(N=>N.coin&&N.coin.id===C.id);return gt(C,G,ne.length,O)}).join("");J+=`
        <div class="${ae.join(" ")}" data-r="${g}" data-c="${b}">
          ${f}
          <div class="cell-coins-container">
            ${h}
          </div>
          ${le?'<div class="target-indicator">⭐</div>':""}
        </div>
      `}const _=d===2,B=`
    <div class="jail-box jail-top ${_?"jail-turn-active":""} ${d===2&&L?"jail-actionable":""}" id="jail-team2">
      <div class="jail-header-compact">
        <div class="jail-team-tag t2-tag">
          <span>🦚 ${w.name}</span>
          ${_?'<span class="jail-turn-pulse">👉 TURN</span>':""}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${a} Kills ${a>0?"🔓 5/5 Open":"🔒 Gate 23 Stop"}</span>
          <span class="meta-count">${y.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${y.map((g,b)=>gt(g,l&&u&&d===2&&L,y.length,b,!0)).join("")}
        </div>

        ${d===2&&L?`
          <button class="btn-release-jail" id="btn-release-jail-t2">
            ⚡ Release ${T.count} to Home!
          </button>
        `:""}
      </div>
    </div>
  `,M=d===1,k=`
    <div class="jail-box jail-bottom ${M?"jail-turn-active":""} ${d===1&&L?"jail-actionable":""}" id="jail-team1">
      <div class="jail-header-compact">
        <div class="jail-team-tag t1-tag">
          <span>👑 ${P.name}</span>
          ${M?'<span class="jail-turn-pulse">👉 TURN</span>':""}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${o} Kills ${o>0?"🔓 5/5 Open":"🔒 Gate 23 Stop"}</span>
          <span class="meta-count">${m.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${m.map((g,b)=>gt(g,l&&u&&d===1&&L,m.length,b,!0)).join("")}
        </div>

        ${d===1&&L?`
          <button class="btn-release-jail" id="btn-release-jail-t1">
            ⚡ Release ${T.count} to Home!
          </button>
        `:""}
      </div>
    </div>
  `;return`
    <div class="board-wrapper">
      ${B}
      
      <div class="board-container">
        <div class="board-frame">
          <div class="board-grid">
            ${J}
          </div>
        </div>
      </div>

      ${k}
    </div>
  `}function gt(s,e,t=1,n=0,i=!1){const r=s.team===1?"coin-team1":"coin-team2",o=e?"coin-selectable":"",a=s.stepIndex===23;let c="";if(!i&&t>1){const d=n/t*2*Math.PI,u=Math.min(14,t*3.5),p=Math.round(Math.cos(d)*u),m=Math.round(Math.sin(d)*u);c=`style="transform: translate(${p}px, ${m}px); z-index: ${10+n};"`}const l=a?`Team ${s.team} Coin #${s.num} (Stopped at Step 23 Gate - Opponent kill required to enter inside 5/5 ring)`:`Team ${s.team} Coin #${s.num} ${e?"- Click to Move":""}`;return`
    <div class="coin-piece ${r} ${o} ${a?"coin-stopped-23":""}" 
         data-coin-id="${s.id}" 
         data-team="${s.team}"
         ${c}
         title="${l}">
      <span class="coin-num">${s.num}</span>
      ${a?'<span class="coin-gate-badge">23</span>':""}
      ${e?'<span class="coin-pulse-ring"></span>':""}
    </div>
  `}function ks(s,e){return s.length===0&&e.length===0?"":`
    <div class="finished-summary happy-coins-summary">
      ${s.length>0?`<span class="fin-badge t1-fin" title="${s.length} Team 1 coins reached Happy Home!">👑 ${s.length} 🎉</span>`:""}
      ${e.length>0?`<span class="fin-badge t2-fin" title="${e.length} Team 2 coins reached Happy Home!">🦚 ${e.length} 🌟</span>`:""}
    </div>
  `}function ui(s,e){const t=s.isOpen,n=s.rot||0,i=(s.x||0)*.7,r=(s.y||0)*.7,o=t?`
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
    <div class="cowrie-shell-wrapper ${e?"rolling-tumble":""}" 
         style="transform: translate(${i}px, ${r}px) rotate(${n}deg);">
      ${o}
    </div>
  `}function Rs(s,e,t,n){return`
    <div class="palm-toss-stage ${e?"palm-state-tossing":"palm-state-cupped"} ${t?"palm-clickable":""}" 
         id="palm-cupped-box" 
         title="${t?"Tap palm to shake and toss guvvalu on board!":""}">
      
      <!-- Authentic Village Cupped Hands Graphic -->
      <div class="cupped-hands-graphic ${e?"hands-shaking-toss":""}">
        <svg viewBox="0 0 160 110" class="cupped-palm-svg">
          <defs>
            <radialGradient id="palmShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#2a1607" stop-opacity="0.95" />
              <stop offset="70%" stop-color="#422510" stop-opacity="0.7" />
              <stop offset="100%" stop-color="#1a0b04" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="handSkinLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f7d4aa" />
              <stop offset="50%" stop-color="#d49a6a" />
              <stop offset="100%" stop-color="#9a5a2e" />
            </linearGradient>
            <linearGradient id="handSkinRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f7d4aa" />
              <stop offset="50%" stop-color="#d49a6a" />
              <stop offset="100%" stop-color="#9a5a2e" />
            </linearGradient>
          </defs>

          <!-- Deep Palm Cavity Shadow where Guvvalu are cupped -->
          <ellipse cx="80" cy="56" rx="48" ry="30" fill="url(#palmShadow)" />

          <!-- Left Hand Palm & Curved Fingers -->
          <path d="M 32,86 C 18,72 16,48 28,32 C 38,20 54,22 60,34 C 66,46 64,66 54,84 C 46,92 38,94 32,86 Z" 
                fill="url(#handSkinLeft)" stroke="#5a2f12" stroke-width="2" />
          <path d="M 46,26 C 52,16 66,16 70,26 C 74,38 70,54 58,64" 
                fill="none" stroke="#5a2f12" stroke-width="1.8" stroke-linecap="round" />
          <path d="M 28,40 C 22,32 32,20 44,24" 
                fill="none" stroke="#7a411b" stroke-width="1.5" stroke-linecap="round" />

          <!-- Right Hand Palm & Curved Fingers (Cupping together) -->
          <path d="M 128,86 C 142,72 144,48 132,32 C 122,20 106,22 100,34 C 94,46 96,66 106,84 C 114,92 122,94 128,86 Z" 
                fill="url(#handSkinRight)" stroke="#5a2f12" stroke-width="2" />
          <path d="M 114,26 C 108,16 94,16 90,26 C 86,38 90,54 102,64" 
                fill="none" stroke="#5a2f12" stroke-width="1.8" stroke-linecap="round" />
          <path d="M 132,40 C 138,32 128,20 116,24" 
                fill="none" stroke="#7a411b" stroke-width="1.5" stroke-linecap="round" />

          <!-- Joined Wrists at Bottom -->
          <path d="M 46,88 Q 80,108 114,88 Q 80,96 46,88 Z" 
                fill="#7a411b" stroke="#46220a" stroke-width="1.8" />
        </svg>

        <!-- 6 Cowrie Shells Nestled Inside Palm -->
        <div class="palm-shells-nest ${e?"shells-flying-out":""}">
          ${s.map((i,r)=>{const o=[-18,14,-6,16,-12,4][r]||0,a=[-6,-6,6,8,14,0][r]||0,c=[-15,20,-8,14,25,-20][r]||0;return`
              <div class="nestled-shell shell-pos-${r}" style="transform: translate(${o}px, ${a}px) rotate(${c}deg);">
                ${ui(i,e)}
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- Village Cupped Palm Interaction Prompt -->
      <div class="palm-prompt-badge ${t?"pulse-gold":""}">
        <span class="palm-prompt-icon">🤲</span>
        <span class="palm-prompt-text">${t?"Guvvalu in Palm — Tap to Toss!":e?"Shaking & Tossing...":"Guvvalu in Palm"}</span>
      </div>
    </div>
  `}function Ps(s,e=null,t=30){const{status:n,currentRoll:i,diceMode:r,currentPlayer:o}=s,a=n==="ROLLING";let c=!0;e&&e.roomCode?c=o.id===e.myPlayerId:o.isAI&&(c=!1);const l=n==="WAITING_FOR_ROLL"&&c;let d="";if(r==="die"){const m=i?i.score:6;d=`
      <div class="dice-single-cube ${a?"dice-shake":""}">
        <span class="dice-val">${m}</span>
      </div>
    `}else{const m=i&&i.shells&&i.shells.length===6?i.shells:[{id:0,isOpen:!0,rot:10,x:-3,y:-2},{id:1,isOpen:!0,rot:-15,x:2,y:1},{id:2,isOpen:!1,rot:25,x:-1,y:2},{id:3,isOpen:!0,rot:-8,x:3,y:-1},{id:4,isOpen:!1,rot:30,x:-2,y:2},{id:5,isOpen:!0,rot:-25,x:1,y:-2}];n==="WAITING_FOR_ROLL"||a?d=Rs(m,a,l):d=`
        <div class="settled-cowrie-mat">
          <div class="mat-label">🌾 Tossed on Board Mat</div>
          <div class="compact-cowrie-tray">
            ${m.map(y=>ui(y,!1)).join("")}
          </div>
        </div>
      `}let u="";if(i&&!a){const m=i.isBonus;u=`
      <div class="compact-score-badge ${m?"score-bonus-glow":""}">
        <div class="score-main">
          <span class="score-large">${i.score}</span>
          <span class="score-name">${i.titleTe}</span>
        </div>
        ${m?'<span class="bonus-pill">⭐ BONUS!</span>':""}
      </div>
    `}else a?u=`
      <div class="compact-score-badge rolling-badge">
        <span class="rolling-dot">⏳</span>
        <span>Tossing from Palm...</span>
      </div>
    `:u=`
      <div class="compact-score-badge idle-badge ${c?"badge-my-turn":""}">
        <span class="turn-prompt">${c?"👉 Your Turn!":`⏳ ${o.name}'s Turn`}</span>
        <span class="turn-timer-sub">⏳ ${t}s</span>
      </div>
    `;let p="🤲 TOSS GUVVALU";return a?p="Tossing...":c||(p=e&&e.roomCode?`Waiting for ${o.name}...`:"Computer Thinking..."),`
    <div class="mobile-cowrie-console ${c&&l?"console-my-turn":""}">
      <div class="cowrie-left-zone">
        ${d}
        ${u}
      </div>

      <div class="cowrie-right-zone">
        <button id="btn-roll-dice" class="btn-roll ${l?"btn-roll-active":"btn-roll-disabled"}" 
                ${l?"":"disabled"}>
          ${p}
        </button>
      </div>
    </div>
  `}let Pe="en";try{const s=localStorage.getItem("bk_language");(s==="te"||s==="en")&&(Pe=s)}catch{}function hi(){return Pe}function Ms(s){if(s==="te"||s==="en"){Pe=s;try{localStorage.setItem("bk_language",s)}catch{}}return Pe}function Tn(){return Ms(Pe==="en"?"te":"en")}const yt={en:{appTitle:"BHARAKHATTA",appSubtitle:"Traditional 7x7 Village Cowrie Board Game",gameCoins:"Game Coins",name:"Name",potCoins:"Pot Coins",room:"Room",boardNumber:"Board Number",chat:"Chat",playWithFriend:"Play with Friend",bet:"Bet",exit:"Exit",rules:"Rules",selectPlayerCount:"Choose Player Count (2 or 4)",twoPlayers:"2 Players",twoPlayersSub:"1 vs 1 Head to Head",fourPlayers:"4 Players",fourPlayersSub:"2 vs 2 Team Match (2 Homes)",selectMode2p:"Select 2-Player Mode",selectMode4p:"Select 4-Player Mode",playVsComputer:"Play vs Computer (1v1)",playVsComputerSub:"Solo match with System AI",playWithFriend2p:"Play with Friend (1v1)",playWithFriend2pSub:"Invite friend on other mobile with Board #",twoFriendsAIPair:"2 Friends + 2 AI Pair",twoFriendsAIPairSub:"You & Friend (Team 1) vs System AI Pair (Team 2)",solo4p:"Solo (1 Human + 3 AI)",solo4pSub:"You & AI Partner vs 2 AI Opponents",fourFriendsOnline:"4 Friends Online",fourFriendsOnlineSub:"Send Board # to request friends",requestFriendHero:"Request Friend to Play on Same Board",requestFriendHeroSub:"Share Board Number, WhatsApp Invite & QR Code",choosePotCoins:"Choose Pot Coins / Bet Stakes",yourStake:"Your Stake",winnerTakesPot:"Winner Takes Pot",startGame:"Start Game",rulesGuide:"Rules Guide",matchHistory:"Match History",switchAccount:"Switch Account",tossGuvvalu:"TOSS GUVVALU",tossingGuvvalu:"Tossing...",guvvaluInPalm:"Guvvalu in Palm",tapPalmToToss:"Guvvalu in Palm — Tap to Toss!",tossedOnMat:"Tossed on Board Mat",yourTurn:"👉 Your Turn!",waitingForTurn:"⏳ Turn: {name}",computerThinking:"Computer Thinking...",bonusRoll:"⭐ BONUS!",roll_1:"Okkati (1)",roll_2:"Rendu (2)",roll_3:"Moodu (3)",roll_4:"Naalugu (4)",roll_5:"Aidu (5)",roll_6:"Aaru (6)",roll_12:"Baara! (12)",gate23Title:"⚔️ Both Homes Unlocked Gate 23!",gate23Msg:"Both Team 1 and Team 2 have killed an opponent coin and unlocked Gate 23! Both teams can now enter the inside 5/5 squad. Do you want to continue playing or start again?",btnContinueGame:"▶️ Continue Game",btnStartAgain:"🔄 Start Again",victoryTitle:"VICTORY!",victoryDesc:"Team {team} won the match!",winReasonSquad:"🎉 ALL 6 COINS ENTERED 5/5 SQUAD! Team {team} has no coins left in the outer 7/7 track for the opponent to kill!",winReasonCenter:"🏆 All 6 coins reached the Center Sanctum (Final Home)!",rematchBtn:"🎲 Return to Lobby",mpTitle:"Request Friend to Play on Same Board",mpSubtitle:"Real-time multiplayer over Wi-Fi / Mobile Network",guaranteedBoardNumber:"GUARANTEED BOARD NUMBER",uniqueBnHint:"Guaranteed unique board number — will never repeat in match history!",whatsappShare:"Request Friend on WhatsApp",scanQrHint:"Friend can scan this with mobile camera to join instantly!",copyLink:"Copy Link",copyCode:"Copy",copied:"✅ Copied!",boardPlayers:"Board Players",startWithAIPair:"🤝 Start Now with System AI Opposite Pair",twoFriendsNotice:"2 Friends Connected! You two are Team 1. You can start right now with the System AI playing as the opposite pair (Team 2)!",waitingFriendNotice:"Waiting for your friend to open the link or enter Board Number on their phone...",allPlayersReady:"All players connected! Board match is active in real time.",generateBoardBtn:"🚀 Generate Board Number & Invite Friends",joinBoardBtn:"🤝 Join Board",yourName:"Your Name",matchType:"Match Type",joinExistingCard:"Join with Friend's Board Number",enterBnPlaceholder:"e.g. BK-260915-101-482",langBtnText:"🌐 తెలుగు"},te:{appTitle:"బాఱఖట్టా",appSubtitle:"సాంప్రదాయ 7x7 పల్లెటూరి గవ్వల బోర్డు ఆట",gameCoins:"గేమ్ కాయిన్స్",name:"పేరు",potCoins:"పాట్ కాయిన్స్",room:"రూమ్",boardNumber:"బోర్డు నంబర్",chat:"చాట్",playWithFriend:"మిత్రుడితో ఆట",bet:"బెట్",exit:"నిష్క్రమించు",rules:"నియమాలు",selectPlayerCount:"ఆటగాళ్ల సంఖ్య ఎంచుకోండి (2 లేదా 4)",twoPlayers:"2 గురు ఆటగాళ్ళు",twoPlayersSub:"1 vs 1 ముఖాముఖి ఆట",fourPlayers:"4 గురు ఆటగాళ్ళు",fourPlayersSub:"2 vs 2 టీమ్ మ్యాచ్ (2 హోమ్స్)",selectMode2p:"2-ఆటగాళ్ల విధానం ఎంచుకోండి",selectMode4p:"4-ఆటగాళ్ల విధానం ఎంచుకోండి",playVsComputer:"కంప్యూటర్‌తో ఆడండి (1v1)",playVsComputerSub:"సిస్టమ్ AI తో సింగిల్ ప్లేయర్ ఆట",playWithFriend2p:"మిత్రుడితో ఆడండి (1v1)",playWithFriend2pSub:"బోర్డు నంబర్‌తో వేరే ఫోన్‌లో ఉన్న మిత్రుడిని ఆహ్వానించండి",twoFriendsAIPair:"2 గురు మిత్రులు + 2 AI జోడీ",twoFriendsAIPairSub:"మీరు & మిత్రుడు (టీమ్ 1) vs సిస్టమ్ AI జోడీ (టీమ్ 2)",solo4p:"సోలో (1 మనిషి + 3 AI)",solo4pSub:"మీరు & AI మిత్రుడు vs 2 AI ప్రత్యర్థులు",fourFriendsOnline:"4 గురు మిత్రులు ఆన్‌లైన్",fourFriendsOnlineSub:"బోర్డు నంబర్ పంపి మిత్రులను ఆహ్వానించండి",requestFriendHero:"ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",requestFriendHeroSub:"బోర్డు నంబర్, వాట్సాప్ లింక్ & QR కోడ్ షేర్ చేయండి",choosePotCoins:"పాట్ కాయిన్స్ / బెట్ పందెం ఎంచుకోండి",yourStake:"మీ పందెం",winnerTakesPot:"విజేతకు మొత్తం పాట్",startGame:"ఆట ప్రారంభించండి",rulesGuide:"ఆట నియమాలు",matchHistory:"మ్యాచ్ హిస్టరీ",switchAccount:"ఖాతా మార్చండి",tossGuvvalu:"గువ్వలు విసరండి",tossingGuvvalu:"విసురుతున్నారు...",guvvaluInPalm:"అరచేతిలో గువ్వలు",tapPalmToToss:"అరచేతిలో గువ్వలు — విసరడానికి నొక్కండి!",tossedOnMat:"బోర్డు చాపపై పడిన గువ్వలు",yourTurn:"👉 మీ వంతు!",waitingForTurn:"⏳ {name} వంతు",computerThinking:"కంప్యూటర్ ఆలోచిస్తోంది...",bonusRoll:"⭐ బోనస్ టర్న్!",roll_1:"ఒక్కటి (1)",roll_2:"రెండు (2)",roll_3:"మూడు (3)",roll_4:"నాలుగు (4)",roll_5:"ఐదు (5)",roll_6:"ఆరు (6)",roll_12:"బాఱ! (12)",gate23Title:"⚔️ రెండు హోమ్‌ల గేట్ 23 తెరుచుకుంది!",gate23Msg:"టీమ్ 1 మరియు టీమ్ 2 రెండూ కట్టా కొట్టి గేట్ 23 తెరిచాయి! రెండు జట్లూ ఇప్పుడు లోపలి 5/5 స్క్వాడ్‌లోకి ప్రవేశించవచ్చు. ఆటను ఇలాగే కొనసాగించాలా లేదా మళ్లీ మొదటి నుండి ప్రారంభించాలా?",btnContinueGame:"▶️ ఆట కొనసాగించు",btnStartAgain:"🔄 మళ్లీ ప్రారంభించు",victoryTitle:"విజయం!",victoryDesc:"టీమ్ {team} ఘన విజయం సాధించింది!",winReasonSquad:"🎉 6 గువ్వలూ 5/5 స్క్వాడ్‌లోకి చేరాయి! బయటి 7/7 ట్రాక్‌లో ప్రత్యర్థి చంపడానికి ఏ కాయిన్ మిగల్లేదు! టీమ్ {team} విజేత!",winReasonCenter:"🏆 మొత్తం 6 గువ్వలూ సెంటర్ హోమ్ (సెంట్ మార్క్) చేరుకున్నాయి!",rematchBtn:"🎲 లాబీకి తిరిగి వెళ్ళు",mpTitle:"ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",mpSubtitle:"Wi-Fi / మొబైల్ నెట్‌వర్క్ ద్వారా రియల్-టైమ్ మల్టీప్లేయర్",guaranteedBoardNumber:"ఖచ్చితమైన బోర్డు నంబర్",uniqueBnHint:"ప్రత్యేక బోర్డు నంబర్ — హిస్టరీలో ఎప్పటికీ పునరావృతం కాదు!",whatsappShare:"వాట్సాప్‌లో మిత్రుడిని ఆహ్వానించండి",scanQrHint:"వెంటనే జాయిన్ కావడానికి మిత్రుడు కెమెరాతో స్కాన్ చేయవచ్చు!",copyLink:"లింక్ కాపీ చేయండి",copyCode:"కాపీ",copied:"✅ కాపీ అయింది!",boardPlayers:"బోర్డు ఆటగాళ్ళు",startWithAIPair:"🤝 సిస్టమ్ AI జోడీతో ఇప్పుడే ఆడండి",twoFriendsNotice:"2 గురు మిత్రులు కనెక్ట్ అయ్యారు! మీరిద్దరూ టీమ్ 1. సిస్టమ్ AI ని ఎదుటి జోడీగా (టీమ్ 2) పెట్టి ఇప్పుడే ఆట మొదలుపెట్టవచ్చు!",waitingFriendNotice:"మిత్రుడు లింక్ ఓపెన్ చేయడం లేదా బోర్డు నంబర్ నమోదు చేయడం కోసం వేచి చూస్తున్నాం...",allPlayersReady:"ఆటగాళ్లంతా కనెక్ట్ అయ్యారు! మ్యాచ్ లైవ్‌లో ఉంది.",generateBoardBtn:"🚀 బోర్డు నంబర్ సృష్టించి ఆహ్వానించండి",joinBoardBtn:"🤝 బోర్డులో జాయిన్ అవ్వండి",yourName:"మీ పేరు",matchType:"మ్యాచ్ విధానం",joinExistingCard:"మిత్రుడి బోర్డు నంబర్‌తో జాయిన్ అవ్వండి",enterBnPlaceholder:"ఉదా: BK-260915-101-482",langBtnText:"🌐 English"}};function $(s,e={}){const t=Pe in yt?Pe:"en";let n=yt[t][s]||yt.en[s]||s;return Object.keys(e).forEach(i=>{n=n.replace(new RegExp(`\\{${i}\\}`,"g"),e[i])}),n}function Is(s,e,t=null,n={}){const{gameMode:i,diceMode:r,status:o,currentPlayer:a,winner:c}=s,l=t&&t.roomCode,d=l&&t.players&&t.players.length>=2,u=n.walletCoins!==void 0?n.walletCoins:1e3,p=n.matchPot||0,m=n.timeLeft!==void 0?n.timeLeft:30,y=n.unreadChatCount||0,v=hi();let A="timer-normal";return m<=5?A="timer-urgent":m<=10&&(A="timer-warning"),`
    <header class="app-header">
      <div class="header-brand">
        <div class="brand-logo">
          <span class="logo-icon">🐚</span>
          <div>
            <h1 class="brand-title">${$("appTitle")}</h1>
            <span class="brand-subtitle">${v==="en"?"బాఱఖట్టా":"Bharakhatta"}</span>
          </div>
        </div>

        <!-- Formatted Top Line: Game Coins - Login Name (Nick) - Pot Coins -->
        <div class="header-economy-bar" id="game-header-bar">
          <div class="econ-pill econ-wallet" id="btn-open-wallet" title="${$("gameCoins")}">
            <span class="econ-icon">🪙</span>
            <span class="econ-label">${$("gameCoins")}:</span>
            <strong class="econ-val">${u.toLocaleString()}</strong>
          </div>

          <span class="econ-sep">•</span>

          ${n.user?`
            <div class="econ-pill econ-user" id="btn-open-profile" title="${$("name")}">
              <span class="econ-icon">👤</span>
              <span class="econ-label">${$("name")}:</span>
              <strong class="econ-val econ-nick">${n.user.nickName||n.user.name}</strong>
            </div>
          `:`
            <button class="btn-login-header" id="btn-header-login" title="Login with Mobile Number">
              📱 Login
            </button>
          `}

          <span class="econ-sep">•</span>

          <div class="econ-pill econ-pot" id="btn-open-bet" title="${$("potCoins")}">
            <span class="econ-icon">🏆</span>
            <span class="econ-label">${$("potCoins")}:</span>
            <strong class="econ-val">🪙${p.toLocaleString()}</strong>
          </div>
        </div>

        <!-- Room Indicator -->
        ${l?`
          <div class="room-indicator-pill" id="btn-open-mp-badge" title="${$("boardNumber")}: #${t.roomCode}">
            <span class="live-dot">${d?"🟢":"⏳"}</span>
            <span>${$("room")}: <strong>#${t.roomCode}</strong></span>
          </div>
        `:""}
      </div>

      <div class="header-controls">
        <!-- 30s Turn Timer Pill -->
        <div class="turn-timer-pill ${A}" title="30-Second Turn Timer">
          <span class="timer-icon">⏳</span>
          <span class="timer-seconds">${m}s</span>
        </div>

        <!-- Language Toggle Button: English / Telugu -->
        <button id="btn-toggle-lang" class="btn-icon btn-lang-toggle" title="Switch Language / భాష మార్చండి" style="font-weight: 700; color: #f1c40f; border: 1px solid rgba(241,196,15,0.4); background: rgba(241,196,15,0.12);">
          ${v==="en"?"🌐 తెలుగు":"🌐 English"}
        </button>

        <!-- In-Game Chat Button (Always available for smilies & text) -->
        <button id="btn-open-chat" class="btn-icon btn-chat-glow" title="${$("chat")}">
          💬 ${$("chat")} ${y>0?`<span class="chat-badge">${y}</span>`:""}
        </button>

        <!-- Only show 'Play with Friend' when NOT yet paired -->
        ${d?"":`
          <button id="btn-open-multiplayer" class="btn-icon btn-mp-glow" title="${$("playWithFriend")}">
            👥 ${$("playWithFriend")}
          </button>
        `}

        <button id="btn-open-bet" class="btn-icon btn-bet-chip" title="${$("bet")}">
          🪙 ${$("bet")}
        </button>

        <button id="btn-toggle-dice" class="btn-toggle-mode" title="Switch between 6 Guvvalu and Standard Die">
          ${r==="cowries"?"🐚 Guvvalu":"🎲 Die"}
        </button>

        <button id="btn-toggle-sound" class="btn-icon ${e?"btn-muted":""}" title="Toggle Sound">
          ${e?"🔇":"🔊"}
        </button>

        <button id="btn-open-rules" class="btn-icon" title="${$("rules")}">
          📜
        </button>

        <!-- Exit Match Button -->
        <button id="btn-open-exit" class="btn-icon btn-exit-glow" title="${$("exit")}">
          🚪 ${$("exit")}
        </button>
      </div>
    </header>
  `}function _n(s){return!s||s.length===0?"":`
    <div class="live-ticker-strip">
      <span class="ticker-icon">📢</span>
      <span class="ticker-text">${s[s.length-1].text}</span>
    </div>
  `}function Es(s){return`
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
  `}var dn={};(function s(e,t,n,i){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!e.OffscreenCanvas)return!1;try{var f=new OffscreenCanvas(1,1),h=f.getContext("2d");h.fillRect(0,0,1,1);var C=f.transferToImageBitmap();h.createPattern(C,"no-repeat")}catch{return!1}return!0})();function c(){}function l(f){var h=t.exports.Promise,C=h!==void 0?h:e.Promise;return typeof C=="function"?new C(f):(f(c,c),null)}var d=(function(f,h){return{transform:function(C){if(f)return C;if(h.has(C))return h.get(C);var O=new OffscreenCanvas(C.width,C.height),G=O.getContext("2d");return G.drawImage(C,0,0),h.set(C,O),O},clear:function(){h.clear()}}})(a,new Map),u=(function(){var f=Math.floor(16.666666666666668),h,C,O={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(N){var U=Math.random();return O[U]=requestAnimationFrame(function S(D){G===D||G+f-1<D?(G=D,delete O[U],N()):O[U]=requestAnimationFrame(S)}),U},C=function(N){O[N]&&cancelAnimationFrame(O[N])}):(h=function(N){return setTimeout(N,f)},C=function(N){return clearTimeout(N)}),{frame:h,cancel:C}})(),p=(function(){var f,h,C={};function O(G){function N(U,S){G.postMessage({options:U||{},callback:S})}G.init=function(S){var D=S.transferControlToOffscreen();G.postMessage({canvas:D},[D])},G.fire=function(S,D,H){if(h)return N(S,null),h;var V=Math.random().toString(36).slice(2);return h=l(function(z){function W(Q){Q.data.callback===V&&(delete C[V],G.removeEventListener("message",W),h=null,d.clear(),H(),z())}G.addEventListener("message",W),N(S,V),C[V]=W.bind(null,{data:{callback:V}})}),h},G.reset=function(){G.postMessage({reset:!0});for(var S in C)C[S](),delete C[S]}}return function(){if(f)return f;if(!n&&r){var G=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{f=new Worker(URL.createObjectURL(new Blob([G])))}catch(N){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",N),null}O(f)}return f}})(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(f,h){return h?h(f):f}function v(f){return f!=null}function A(f,h,C){return y(f&&v(f[h])?f[h]:m[h],C)}function T(f){return f<0?0:Math.floor(f)}function L(f,h){return Math.floor(Math.random()*(h-f))+f}function P(f){return parseInt(f,16)}function w(f){return f.map(J)}function J(f){var h=String(f).replace(/[^0-9a-f]/gi,"");return h.length<6&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]),{r:P(h.substring(0,2)),g:P(h.substring(2,4)),b:P(h.substring(4,6))}}function _(f){var h=A(f,"origin",Object);return h.x=A(h,"x",Number),h.y=A(h,"y",Number),h}function B(f){f.width=document.documentElement.clientWidth,f.height=document.documentElement.clientHeight}function M(f){var h=f.getBoundingClientRect();f.width=h.width,f.height=h.height}function k(f){var h=document.createElement("canvas");return h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=f,h}function g(f,h,C,O,G,N,U,S,D){f.save(),f.translate(h,C),f.rotate(N),f.scale(O,G),f.arc(0,0,1,U,S,D),f.restore()}function b(f){var h=f.angle*(Math.PI/180),C=f.spread*(Math.PI/180);return{x:f.x,y:f.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:f.startVelocity*.5+Math.random()*f.startVelocity,angle2D:-h+(.5*C-Math.random()*C),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:f.color,shape:f.shape,tick:0,totalTicks:f.ticks,decay:f.decay,drift:f.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:f.gravity*3,ovalScalar:.6,scalar:f.scalar,flat:f.flat}}function I(f,h){h.x+=Math.cos(h.angle2D)*h.velocity+h.drift,h.y+=Math.sin(h.angle2D)*h.velocity+h.gravity,h.velocity*=h.decay,h.flat?(h.wobble=0,h.wobbleX=h.x+10*h.scalar,h.wobbleY=h.y+10*h.scalar,h.tiltSin=0,h.tiltCos=0,h.random=1):(h.wobble+=h.wobbleSpeed,h.wobbleX=h.x+10*h.scalar*Math.cos(h.wobble),h.wobbleY=h.y+10*h.scalar*Math.sin(h.wobble),h.tiltAngle+=.1,h.tiltSin=Math.sin(h.tiltAngle),h.tiltCos=Math.cos(h.tiltAngle),h.random=Math.random()+2);var C=h.tick++/h.totalTicks,O=h.x+h.random*h.tiltCos,G=h.y+h.random*h.tiltSin,N=h.wobbleX+h.random*h.tiltCos,U=h.wobbleY+h.random*h.tiltSin;if(f.fillStyle="rgba("+h.color.r+", "+h.color.g+", "+h.color.b+", "+(1-C)+")",f.beginPath(),o&&h.shape.type==="path"&&typeof h.shape.path=="string"&&Array.isArray(h.shape.matrix))f.fill(Ce(h.shape.path,h.shape.matrix,h.x,h.y,Math.abs(N-O)*.1,Math.abs(U-G)*.1,Math.PI/10*h.wobble));else if(h.shape.type==="bitmap"){var S=Math.PI/10*h.wobble,D=Math.abs(N-O)*.1,H=Math.abs(U-G)*.1,V=h.shape.bitmap.width*h.scalar,z=h.shape.bitmap.height*h.scalar,W=new DOMMatrix([Math.cos(S)*D,Math.sin(S)*D,-Math.sin(S)*H,Math.cos(S)*H,h.x,h.y]);W.multiplySelf(new DOMMatrix(h.shape.matrix));var Q=f.createPattern(d.transform(h.shape.bitmap),"no-repeat");Q.setTransform(W),f.globalAlpha=1-C,f.fillStyle=Q,f.fillRect(h.x-V/2,h.y-z/2,V,z),f.globalAlpha=1}else if(h.shape==="circle")f.ellipse?f.ellipse(h.x,h.y,Math.abs(N-O)*h.ovalScalar,Math.abs(U-G)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI):g(f,h.x,h.y,Math.abs(N-O)*h.ovalScalar,Math.abs(U-G)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI);else if(h.shape==="star")for(var q=Math.PI/2*3,se=4*h.scalar,de=8*h.scalar,ue=h.x,me=h.y,ye=5,pe=Math.PI/ye;ye--;)ue=h.x+Math.cos(q)*de,me=h.y+Math.sin(q)*de,f.lineTo(ue,me),q+=pe,ue=h.x+Math.cos(q)*se,me=h.y+Math.sin(q)*se,f.lineTo(ue,me),q+=pe;else f.moveTo(Math.floor(h.x),Math.floor(h.y)),f.lineTo(Math.floor(h.wobbleX),Math.floor(G)),f.lineTo(Math.floor(N),Math.floor(U)),f.lineTo(Math.floor(O),Math.floor(h.wobbleY));return f.closePath(),f.fill(),h.tick<h.totalTicks}function E(f,h,C,O,G){var N=h.slice(),U=f.getContext("2d"),S,D,H=l(function(V){function z(){S=D=null,U.clearRect(0,0,O.width,O.height),d.clear(),G(),V()}function W(){n&&!(O.width===i.width&&O.height===i.height)&&(O.width=f.width=i.width,O.height=f.height=i.height),!O.width&&!O.height&&(C(f),O.width=f.width,O.height=f.height),U.clearRect(0,0,O.width,O.height),N=N.filter(function(Q){return I(U,Q)}),N.length?S=u.frame(W):z()}S=u.frame(W),D=z});return{addFettis:function(V){return N=N.concat(V),H},canvas:f,promise:H,reset:function(){S&&u.cancel(S),D&&D()}}}function F(f,h){var C=!f,O=!!A(h||{},"resize"),G=!1,N=A(h,"disableForReducedMotion",Boolean),U=r&&!!A(h||{},"useWorker"),S=U?p():null,D=C?B:M,H=f&&S?!!f.__confetti_initialized:!1,V=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,z;function W(q,se,de){for(var ue=A(q,"particleCount",T),me=A(q,"angle",Number),ye=A(q,"spread",Number),pe=A(q,"startVelocity",Number),Je=A(q,"decay",Number),We=A(q,"gravity",Number),Ke=A(q,"drift",Number),we=A(q,"colors",w),Ye=A(q,"ticks",Number),Le=A(q,"shapes"),Qe=A(q,"scalar"),Xe=!!A(q,"flat"),Ne=_(q),De=ue,Be=[],Ze=f.width*Ne.x,et=f.height*Ne.y;De--;)Be.push(b({x:Ze,y:et,angle:me,spread:ye,startVelocity:pe,color:we[De%we.length],shape:Le[L(0,Le.length)],ticks:Ye,decay:Je,gravity:We,drift:Ke,scalar:Qe,flat:Xe}));return z?z.addFettis(Be):(z=E(f,Be,D,se,de),z.promise)}function Q(q){var se=N||A(q,"disableForReducedMotion",Boolean),de=A(q,"zIndex",Number);if(se&&V)return l(function(pe){pe()});C&&z?f=z.canvas:C&&!f&&(f=k(de),document.body.appendChild(f)),O&&!H&&D(f);var ue={width:f.width,height:f.height};S&&!H&&S.init(f),H=!0,S&&(f.__confetti_initialized=!0);function me(){if(S){var pe={getBoundingClientRect:function(){if(!C)return f.getBoundingClientRect()}};D(pe),S.postMessage({resize:{width:pe.width,height:pe.height}});return}ue.width=ue.height=null}function ye(){z=null,O&&(G=!1,e.removeEventListener("resize",me)),C&&f&&(document.body.contains(f)&&document.body.removeChild(f),f=null,H=!1)}return O&&!G&&(G=!0,e.addEventListener("resize",me,!1)),S?S.fire(q,ue,ye):W(q,ue,ye)}return Q.reset=function(){S&&S.reset(),z&&z.reset()},Q}var ne;function le(){return ne||(ne=F(null,{useWorker:!0,resize:!0})),ne}function Ce(f,h,C,O,G,N,U){var S=new Path2D(f),D=new Path2D;D.addPath(S,new DOMMatrix(h));var H=new Path2D;return H.addPath(D,new DOMMatrix([Math.cos(U)*G,Math.sin(U)*G,-Math.sin(U)*N,Math.cos(U)*N,C,O])),H}function ge(f){if(!o)throw new Error("path confetti are not supported in this browser");var h,C;typeof f=="string"?h=f:(h=f.path,C=f.matrix);var O=new Path2D(h),G=document.createElement("canvas"),N=G.getContext("2d");if(!C){for(var U=1e3,S=U,D=U,H=0,V=0,z,W,Q=0;Q<U;Q+=2)for(var q=0;q<U;q+=2)N.isPointInPath(O,Q,q,"nonzero")&&(S=Math.min(S,Q),D=Math.min(D,q),H=Math.max(H,Q),V=Math.max(V,q));z=H-S,W=V-D;var se=10,de=Math.min(se/z,se/W);C=[de,0,0,de,-Math.round(z/2+S)*de,-Math.round(W/2+D)*de]}return{type:"path",path:h,matrix:C}}function ae(f){var h,C=1,O="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof f=="string"?h=f:(h=f.text,C="scalar"in f?f.scalar:C,G="fontFamily"in f?f.fontFamily:G,O="color"in f?f.color:O);var N=10*C,U=""+N+"px "+G,S=new OffscreenCanvas(N,N),D=S.getContext("2d");D.font=U;var H=D.measureText(h),V=Math.ceil(H.actualBoundingBoxRight+H.actualBoundingBoxLeft),z=Math.ceil(H.actualBoundingBoxAscent+H.actualBoundingBoxDescent),W=2,Q=H.actualBoundingBoxLeft+W,q=H.actualBoundingBoxAscent+W;V+=W+W,z+=W+W,S=new OffscreenCanvas(V,z),D=S.getContext("2d"),D.font=U,D.fillStyle=O,D.fillText(h,Q,q);var se=1/C;return{type:"bitmap",bitmap:S.transferToImageBitmap(),matrix:[se,0,0,se,-V*se/2,-z*se/2]}}t.exports=function(){return le().apply(this,arguments)},t.exports.reset=function(){le().reset()},t.exports.create=F,t.exports.shapeFromPath=ge,t.exports.shapeFromText=ae})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),dn,!1);const bt=dn.exports;dn.exports.create;function xs(s,e){if(!s)return"";setTimeout(()=>{try{bt({particleCount:90,spread:70,origin:{y:.6}}),setTimeout(()=>{bt({particleCount:60,angle:60,spread:55,origin:{x:0}}),bt({particleCount:60,angle:120,spread:55,origin:{x:1}})},250)}catch(r){console.log("Confetti trigger:",r)}},100);const t=s.team===1?"Team 1 (Saffron / Bottom)":"Team 2 (Green / Top)",i=s.reason==="SQUAD_5X5_COMPLETE"?$("winReasonSquad",{team:s.team}):$("winReasonCenter");return`
    <div class="modal-backdrop" id="victory-modal-backdrop">
      <div class="modal-dialog victory-dialog">
        <div class="victory-header">
          <div class="trophy-bounce">🏆</div>
          <h2 class="victory-title">${$("victoryTitle")}</h2>
          <span class="victory-subtitle">${$("victoryDesc",{team:s.team})} (${t})</span>
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
            ${$("rematchBtn")}
          </button>
        </div>
      </div>
    </div>
  `}function pi(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Oe={},vt,kn;function As(){return kn||(kn=1,vt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),vt}var Ct={},Te={},Rn;function Me(){if(Rn)return Te;Rn=1;let s;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Te.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Te.getSymbolTotalCodewords=function(n){return e[n]},Te.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Te.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');s=n},Te.isKanjiModeEnabled=function(){return typeof s<"u"},Te.toSJIS=function(n){return s(n)},Te}var St={},Pn;function un(){return Pn||(Pn=1,(function(s){s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+t)}}s.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},s.from=function(n,i){if(s.isValid(n))return n;try{return e(n)}catch{return i}}})(St)),St}var Tt,Mn;function Bs(){if(Mn)return Tt;Mn=1;function s(){this.buffer=[],this.length=0}return s.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Tt=s,Tt}var _t,In;function Os(){if(In)return _t;In=1;function s(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return s.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)},s.prototype.get=function(e,t){return this.data[e*this.size+t]},s.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},s.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},_t=s,_t}var kt={},En;function $s(){return En||(En=1,(function(s){const e=Me().getSymbolSize;s.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,r=e(n),o=r===145?26:Math.ceil((r-13)/(2*i-2))*2,a=[r-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},s.getPositions=function(n){const i=[],r=s.getRowColCoords(n),o=r.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([r[a],r[c]]);return i}})(kt)),kt}var Rt={},xn;function ws(){if(xn)return Rt;xn=1;const s=Me().getSymbolSize,e=7;return Rt.getPositions=function(n){const i=s(n);return[[0,0],[i-e,0],[0,i-e]]},Rt}var Pt={},An;function Ls(){return An||(An=1,(function(s){s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};s.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},s.from=function(i){return s.isValid(i)?parseInt(i,10):void 0},s.getPenaltyN1=function(i){const r=i.size;let o=0,a=0,c=0,l=null,d=null;for(let u=0;u<r;u++){a=c=0,l=d=null;for(let p=0;p<r;p++){let m=i.get(u,p);m===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=m,a=1),m=i.get(p,u),m===d?c++:(c>=5&&(o+=e.N1+(c-5)),d=m,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},s.getPenaltyN2=function(i){const r=i.size;let o=0;for(let a=0;a<r-1;a++)for(let c=0;c<r-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},s.getPenaltyN3=function(i){const r=i.size;let o=0,a=0,c=0;for(let l=0;l<r;l++){a=c=0;for(let d=0;d<r;d++)a=a<<1&2047|i.get(l,d),d>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(d,l),d>=10&&(c===1488||c===93)&&o++}return o*e.N3},s.getPenaltyN4=function(i){let r=0;const o=i.data.length;for(let c=0;c<o;c++)r+=i.data[c];return Math.abs(Math.ceil(r*100/o/5)-10)*e.N4};function t(n,i,r){switch(n){case s.Patterns.PATTERN000:return(i+r)%2===0;case s.Patterns.PATTERN001:return i%2===0;case s.Patterns.PATTERN010:return r%3===0;case s.Patterns.PATTERN011:return(i+r)%3===0;case s.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2===0;case s.Patterns.PATTERN101:return i*r%2+i*r%3===0;case s.Patterns.PATTERN110:return(i*r%2+i*r%3)%2===0;case s.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}s.applyMask=function(i,r){const o=r.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)r.isReserved(c,a)||r.xor(c,a,t(i,c,a))},s.getBestMask=function(i,r){const o=Object.keys(s.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){r(l),s.applyMask(l,i);const d=s.getPenaltyN1(i)+s.getPenaltyN2(i)+s.getPenaltyN3(i)+s.getPenaltyN4(i);s.applyMask(l,i),d<c&&(c=d,a=l)}return a}})(Pt)),Pt}var it={},Bn;function fi(){if(Bn)return it;Bn=1;const s=un(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return it.getBlocksCount=function(i,r){switch(r){case s.L:return e[(i-1)*4+0];case s.M:return e[(i-1)*4+1];case s.Q:return e[(i-1)*4+2];case s.H:return e[(i-1)*4+3];default:return}},it.getTotalCodewordsCount=function(i,r){switch(r){case s.L:return t[(i-1)*4+0];case s.M:return t[(i-1)*4+1];case s.Q:return t[(i-1)*4+2];case s.H:return t[(i-1)*4+3];default:return}},it}var Mt={},Ue={},On;function Ns(){if(On)return Ue;On=1;const s=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)s[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)s[i]=s[i-255]})(),Ue.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Ue.exp=function(n){return s[n]},Ue.mul=function(n,i){return n===0||i===0?0:s[e[n]+e[i]]},Ue}var $n;function Ds(){return $n||($n=1,(function(s){const e=Ns();s.mul=function(n,i){const r=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<i.length;a++)r[o+a]^=e.mul(n[o],i[a]);return r},s.mod=function(n,i){let r=new Uint8Array(n);for(;r.length-i.length>=0;){const o=r[0];for(let c=0;c<i.length;c++)r[c]^=e.mul(i[c],o);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},s.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let r=0;r<n;r++)i=s.mul(i,new Uint8Array([1,e.exp(r)]));return i}})(Mt)),Mt}var It,wn;function Fs(){if(wn)return It;wn=1;const s=Ds();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=s.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const r=s.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(r,o),a}return r},It=e,It}var Et={},xt={},At={},Ln;function mi(){return Ln||(Ln=1,At.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),At}var be={},Nn;function gi(){if(Nn)return be;Nn=1;const s="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;be.KANJI=new RegExp(t,"g"),be.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),be.BYTE=new RegExp(n,"g"),be.NUMERIC=new RegExp(s,"g"),be.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),r=new RegExp("^"+s+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return be.testKanji=function(c){return i.test(c)},be.testNumeric=function(c){return r.test(c)},be.testAlphanumeric=function(c){return o.test(c)},be}var Dn;function Ie(){return Dn||(Dn=1,(function(s){const e=mi(),t=gi();s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(r,o){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?r.ccBits[0]:o<27?r.ccBits[1]:r.ccBits[2]},s.getBestModeForData=function(r){return t.testNumeric(r)?s.NUMERIC:t.testAlphanumeric(r)?s.ALPHANUMERIC:t.testKanji(r)?s.KANJI:s.BYTE},s.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},s.isValid=function(r){return r&&r.bit&&r.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+i)}}s.from=function(r,o){if(s.isValid(r))return r;try{return n(r)}catch{return o}}})(xt)),xt}var Fn;function Us(){return Fn||(Fn=1,(function(s){const e=Me(),t=fi(),n=un(),i=Ie(),r=mi(),o=7973,a=e.getBCHDigit(o);function c(p,m,y){for(let v=1;v<=40;v++)if(m<=s.getCapacity(v,y,p))return v}function l(p,m){return i.getCharCountIndicator(p,m)+4}function d(p,m){let y=0;return p.forEach(function(v){const A=l(v.mode,m);y+=A+v.getBitsLength()}),y}function u(p,m){for(let y=1;y<=40;y++)if(d(p,y)<=s.getCapacity(y,m,i.MIXED))return y}s.from=function(m,y){return r.isValid(m)?parseInt(m,10):y},s.getCapacity=function(m,y,v){if(!r.isValid(m))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=i.BYTE);const A=e.getSymbolTotalCodewords(m),T=t.getTotalCodewordsCount(m,y),L=(A-T)*8;if(v===i.MIXED)return L;const P=L-l(v,m);switch(v){case i.NUMERIC:return Math.floor(P/10*3);case i.ALPHANUMERIC:return Math.floor(P/11*2);case i.KANJI:return Math.floor(P/13);case i.BYTE:default:return Math.floor(P/8)}},s.getBestVersionForData=function(m,y){let v;const A=n.from(y,n.M);if(Array.isArray(m)){if(m.length>1)return u(m,A);if(m.length===0)return 1;v=m[0]}else v=m;return c(v.mode,v.getLength(),A)},s.getEncodedBits=function(m){if(!r.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return m<<12|y}})(Et)),Et}var Bt={},Un;function Gs(){if(Un)return Bt;Un=1;const s=Me(),e=1335,t=21522,n=s.getBCHDigit(e);return Bt.getEncodedBits=function(r,o){const a=r.bit<<3|o;let c=a<<10;for(;s.getBCHDigit(c)-n>=0;)c^=e<<s.getBCHDigit(c)-n;return(a<<10|c)^t},Bt}var Ot={},$t,Gn;function js(){if(Gn)return $t;Gn=1;const s=Ie();function e(t){this.mode=s.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),n.put(o,10);const a=this.data.length-i;a>0&&(r=this.data.substr(i),o=parseInt(r,10),n.put(o,a*3+1))},$t=e,$t}var wt,jn;function Hs(){if(jn)return wt;jn=1;const s=Ie(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=s.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r+2<=this.data.length;r+=2){let o=e.indexOf(this.data[r])*45;o+=e.indexOf(this.data[r+1]),i.put(o,11)}this.data.length%2&&i.put(e.indexOf(this.data[r]),6)},wt=t,wt}var Lt,Hn;function qs(){if(Hn)return Lt;Hn=1;const s=Ie();function e(t){this.mode=s.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Lt=e,Lt}var Nt,qn;function Vs(){if(qn)return Nt;qn=1;const s=Ie(),e=Me();function t(n){this.mode=s.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let r=e.toSJIS(this.data[i]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),n.put(r,13)}},Nt=t,Nt}var Dt={exports:{}},Vn;function zs(){return Vn||(Vn=1,(function(s){var e={single_source_shortest_paths:function(t,n,i){var r={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,l,d,u,p,m,y,v,A;!a.empty();){c=a.pop(),l=c.value,u=c.cost,p=t[l]||{};for(d in p)p.hasOwnProperty(d)&&(m=p[d],y=u+m,v=o[d],A=typeof o[d]>"u",(A||v>y)&&(o[d]=y,a.push(d,y),r[d]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var T=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(T)}return r},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],r=n;r;)i.push(r),t[r],r=t[r];return i.reverse(),i},find_path:function(t,n,i){var r=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(r,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},r;t=t||{};for(r in n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};s.exports=e})(Dt)),Dt.exports}var zn;function Js(){return zn||(zn=1,(function(s){const e=Ie(),t=js(),n=Hs(),i=qs(),r=Vs(),o=gi(),a=Me(),c=zs();function l(T){return unescape(encodeURIComponent(T)).length}function d(T,L,P){const w=[];let J;for(;(J=T.exec(P))!==null;)w.push({data:J[0],index:J.index,mode:L,length:J[0].length});return w}function u(T){const L=d(o.NUMERIC,e.NUMERIC,T),P=d(o.ALPHANUMERIC,e.ALPHANUMERIC,T);let w,J;return a.isKanjiModeEnabled()?(w=d(o.BYTE,e.BYTE,T),J=d(o.KANJI,e.KANJI,T)):(w=d(o.BYTE_KANJI,e.BYTE,T),J=[]),L.concat(P,w,J).sort(function(B,M){return B.index-M.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function p(T,L){switch(L){case e.NUMERIC:return t.getBitsLength(T);case e.ALPHANUMERIC:return n.getBitsLength(T);case e.KANJI:return r.getBitsLength(T);case e.BYTE:return i.getBitsLength(T)}}function m(T){return T.reduce(function(L,P){const w=L.length-1>=0?L[L.length-1]:null;return w&&w.mode===P.mode?(L[L.length-1].data+=P.data,L):(L.push(P),L)},[])}function y(T){const L=[];for(let P=0;P<T.length;P++){const w=T[P];switch(w.mode){case e.NUMERIC:L.push([w,{data:w.data,mode:e.ALPHANUMERIC,length:w.length},{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.ALPHANUMERIC:L.push([w,{data:w.data,mode:e.BYTE,length:w.length}]);break;case e.KANJI:L.push([w,{data:w.data,mode:e.BYTE,length:l(w.data)}]);break;case e.BYTE:L.push([{data:w.data,mode:e.BYTE,length:l(w.data)}])}}return L}function v(T,L){const P={},w={start:{}};let J=["start"];for(let _=0;_<T.length;_++){const B=T[_],M=[];for(let k=0;k<B.length;k++){const g=B[k],b=""+_+k;M.push(b),P[b]={node:g,lastCount:0},w[b]={};for(let I=0;I<J.length;I++){const E=J[I];P[E]&&P[E].node.mode===g.mode?(w[E][b]=p(P[E].lastCount+g.length,g.mode)-p(P[E].lastCount,g.mode),P[E].lastCount+=g.length):(P[E]&&(P[E].lastCount=g.length),w[E][b]=p(g.length,g.mode)+4+e.getCharCountIndicator(g.mode,L))}}J=M}for(let _=0;_<J.length;_++)w[J[_]].end=0;return{map:w,table:P}}function A(T,L){let P;const w=e.getBestModeForData(T);if(P=e.from(L,w),P!==e.BYTE&&P.bit<w.bit)throw new Error('"'+T+'" cannot be encoded with mode '+e.toString(P)+`.
 Suggested mode is: `+e.toString(w));switch(P===e.KANJI&&!a.isKanjiModeEnabled()&&(P=e.BYTE),P){case e.NUMERIC:return new t(T);case e.ALPHANUMERIC:return new n(T);case e.KANJI:return new r(T);case e.BYTE:return new i(T)}}s.fromArray=function(L){return L.reduce(function(P,w){return typeof w=="string"?P.push(A(w,null)):w.data&&P.push(A(w.data,w.mode)),P},[])},s.fromString=function(L,P){const w=u(L,a.isKanjiModeEnabled()),J=y(w),_=v(J,P),B=c.find_path(_.map,"start","end"),M=[];for(let k=1;k<B.length-1;k++)M.push(_.table[B[k]].node);return s.fromArray(m(M))},s.rawSplit=function(L){return s.fromArray(u(L,a.isKanjiModeEnabled()))}})(Ot)),Ot}var Jn;function Ws(){if(Jn)return Ct;Jn=1;const s=Me(),e=un(),t=Bs(),n=Os(),i=$s(),r=ws(),o=Ls(),a=fi(),c=Fs(),l=Us(),d=Gs(),u=Ie(),p=Js();function m(_,B){const M=_.size,k=r.getPositions(B);for(let g=0;g<k.length;g++){const b=k[g][0],I=k[g][1];for(let E=-1;E<=7;E++)if(!(b+E<=-1||M<=b+E))for(let F=-1;F<=7;F++)I+F<=-1||M<=I+F||(E>=0&&E<=6&&(F===0||F===6)||F>=0&&F<=6&&(E===0||E===6)||E>=2&&E<=4&&F>=2&&F<=4?_.set(b+E,I+F,!0,!0):_.set(b+E,I+F,!1,!0))}}function y(_){const B=_.size;for(let M=8;M<B-8;M++){const k=M%2===0;_.set(M,6,k,!0),_.set(6,M,k,!0)}}function v(_,B){const M=i.getPositions(B);for(let k=0;k<M.length;k++){const g=M[k][0],b=M[k][1];for(let I=-2;I<=2;I++)for(let E=-2;E<=2;E++)I===-2||I===2||E===-2||E===2||I===0&&E===0?_.set(g+I,b+E,!0,!0):_.set(g+I,b+E,!1,!0)}}function A(_,B){const M=_.size,k=l.getEncodedBits(B);let g,b,I;for(let E=0;E<18;E++)g=Math.floor(E/3),b=E%3+M-8-3,I=(k>>E&1)===1,_.set(g,b,I,!0),_.set(b,g,I,!0)}function T(_,B,M){const k=_.size,g=d.getEncodedBits(B,M);let b,I;for(b=0;b<15;b++)I=(g>>b&1)===1,b<6?_.set(b,8,I,!0):b<8?_.set(b+1,8,I,!0):_.set(k-15+b,8,I,!0),b<8?_.set(8,k-b-1,I,!0):b<9?_.set(8,15-b-1+1,I,!0):_.set(8,15-b-1,I,!0);_.set(k-8,8,1,!0)}function L(_,B){const M=_.size;let k=-1,g=M-1,b=7,I=0;for(let E=M-1;E>0;E-=2)for(E===6&&E--;;){for(let F=0;F<2;F++)if(!_.isReserved(g,E-F)){let ne=!1;I<B.length&&(ne=(B[I]>>>b&1)===1),_.set(g,E-F,ne),b--,b===-1&&(I++,b=7)}if(g+=k,g<0||M<=g){g-=k,k=-k;break}}}function P(_,B,M){const k=new t;M.forEach(function(F){k.put(F.mode.bit,4),k.put(F.getLength(),u.getCharCountIndicator(F.mode,_)),F.write(k)});const g=s.getSymbolTotalCodewords(_),b=a.getTotalCodewordsCount(_,B),I=(g-b)*8;for(k.getLengthInBits()+4<=I&&k.put(0,4);k.getLengthInBits()%8!==0;)k.putBit(0);const E=(I-k.getLengthInBits())/8;for(let F=0;F<E;F++)k.put(F%2?17:236,8);return w(k,_,B)}function w(_,B,M){const k=s.getSymbolTotalCodewords(B),g=a.getTotalCodewordsCount(B,M),b=k-g,I=a.getBlocksCount(B,M),E=k%I,F=I-E,ne=Math.floor(k/I),le=Math.floor(b/I),Ce=le+1,ge=ne-le,ae=new c(ge);let f=0;const h=new Array(I),C=new Array(I);let O=0;const G=new Uint8Array(_.buffer);for(let H=0;H<I;H++){const V=H<F?le:Ce;h[H]=G.slice(f,f+V),C[H]=ae.encode(h[H]),f+=V,O=Math.max(O,V)}const N=new Uint8Array(k);let U=0,S,D;for(S=0;S<O;S++)for(D=0;D<I;D++)S<h[D].length&&(N[U++]=h[D][S]);for(S=0;S<ge;S++)for(D=0;D<I;D++)N[U++]=C[D][S];return N}function J(_,B,M,k){let g;if(Array.isArray(_))g=p.fromArray(_);else if(typeof _=="string"){let ne=B;if(!ne){const le=p.rawSplit(_);ne=l.getBestVersionForData(le,M)}g=p.fromString(_,ne||40)}else throw new Error("Invalid data");const b=l.getBestVersionForData(g,M);if(!b)throw new Error("The amount of data is too big to be stored in a QR Code");if(!B)B=b;else if(B<b)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+b+`.
`);const I=P(B,M,g),E=s.getSymbolSize(B),F=new n(E);return m(F,B),y(F),v(F,B),T(F,M,0),B>=7&&A(F,B),L(F,I),isNaN(k)&&(k=o.getBestMask(F,T.bind(null,F,M))),o.applyMask(k,F),T(F,M,k),{modules:F,version:B,errorCorrectionLevel:M,maskPattern:k,segments:g}}return Ct.create=function(B,M){if(typeof B>"u"||B==="")throw new Error("No input text");let k=e.M,g,b;return typeof M<"u"&&(k=e.from(M.errorCorrectionLevel,e.M),g=l.from(M.version),b=o.from(M.maskPattern),M.toSJISFunc&&s.setToSJISFunction(M.toSJISFunc)),J(B,g,k,b)},Ct}var Ft={},Ut={},Wn;function yi(){return Wn||(Wn=1,(function(s){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}s.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:r,scale:r?4:o,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},s.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},s.getImageWidth=function(n,i){const r=s.getScale(n,i);return Math.floor((n+i.margin*2)*r)},s.qrToImageData=function(n,i,r){const o=i.modules.size,a=i.modules.data,c=s.getScale(o,r),l=Math.floor((o+r.margin*2)*c),d=r.margin*c,u=[r.color.light,r.color.dark];for(let p=0;p<l;p++)for(let m=0;m<l;m++){let y=(p*l+m)*4,v=r.color.light;if(p>=d&&m>=d&&p<l-d&&m<l-d){const A=Math.floor((p-d)/c),T=Math.floor((m-d)/c);v=u[a[A*o+T]?1:0]}n[y++]=v.r,n[y++]=v.g,n[y++]=v.b,n[y]=v.a}}})(Ut)),Ut}var Kn;function Ks(){return Kn||(Kn=1,(function(s){const e=yi();function t(i,r,o){i.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=o,r.width=o,r.style.height=o+"px",r.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}s.render=function(r,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=n()),c=e.getOptions(c);const d=e.getImageWidth(r.modules.size,c),u=l.getContext("2d"),p=u.createImageData(d,d);return e.qrToImageData(p.data,r,c),t(u,l,d),u.putImageData(p,0,0),l},s.renderToDataURL=function(r,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=s.render(r,o,c),d=c.type||"image/png",u=c.rendererOpts||{};return l.toDataURL(d,u.quality)}})(Ft)),Ft}var Gt={},Yn;function Ys(){if(Yn)return Gt;Yn=1;const s=yi();function e(i,r){const o=i.a/255,a=r+'="'+i.hex+'"';return o<1?a+" "+r+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function t(i,r,o){let a=i+r;return typeof o<"u"&&(a+=" "+o),a}function n(i,r,o){let a="",c=0,l=!1,d=0;for(let u=0;u<i.length;u++){const p=Math.floor(u%r),m=Math.floor(u/r);!p&&!l&&(l=!0),i[u]?(d++,u>0&&p>0&&i[u-1]||(a+=l?t("M",p+o,.5+m+o):t("m",c,0),c=0,l=!1),p+1<r&&i[u+1]||(a+=t("h",d),d=0)):c++}return a}return Gt.render=function(r,o,a){const c=s.getOptions(o),l=r.modules.size,d=r.modules.data,u=l+c.margin*2,p=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",m="<path "+e(c.color.dark,"stroke")+' d="'+n(d,l,c.margin)+'"/>',y='viewBox="0 0 '+u+" "+u+'"',A='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+y+' shape-rendering="crispEdges">'+p+m+`</svg>
`;return typeof a=="function"&&a(null,A),A},Gt}var Qn;function Qs(){if(Qn)return Oe;Qn=1;const s=As(),e=Ws(),t=Ks(),n=Ys();function i(r,o,a,c,l){const d=[].slice.call(arguments,1),u=d.length,p=typeof d[u-1]=="function";if(!p&&!s())throw new Error("Callback required as last argument");if(p){if(u<2)throw new Error("Too few arguments provided");u===2?(l=a,a=o,o=c=void 0):u===3&&(o.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=a,a=o,o=void 0))}else{if(u<1)throw new Error("Too few arguments provided");return u===1?(a=o,o=c=void 0):u===2&&!o.getContext&&(c=a,a=o,o=void 0),new Promise(function(m,y){try{const v=e.create(a,c);m(r(v,o,c))}catch(v){y(v)}})}try{const m=e.create(a,c);l(null,r(m,o,c))}catch(m){l(m)}}return Oe.create=e.create,Oe.toCanvas=i.bind(null,t.render),Oe.toDataURL=i.bind(null,t.renderToDataURL),Oe.toString=i.bind(null,function(r,o,a){return n.render(r,a)}),Oe}var Xs=Qs();const Zs=pi(Xs);let st=null;async function jt(s){if(st)return st;try{return st=await Zs.toDataURL(s,{width:260,margin:2,color:{dark:"#1e130c",light:"#fffdf7"}}),st}catch(e){return console.error("QR Code generation error:",e),""}}function er(s,e,t){return`
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
  `}function tr(s,e,t,n){const{isConnected:i,roomCode:r,myPlayerId:o,isHost:a,players:c,errorMsg:l,gameMode:d="2p"}=e,u=d==="4p"||e.mode==="4p";let p="";if(r){const m=u?c.length>=4:c.length>=2,y=c.length>=2,A=`https://api.whatsapp.com/send?text=${encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta cowrie board match! 🐚
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
          <a href="${A}" target="_blank" class="btn-whatsapp-share" id="btn-share-whatsapp" rel="noopener noreferrer">
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
          ${l?`<div class="mp-error-banner">⚠️ ${l}</div>`:""}
          
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
  `}const bi=[{emoji:"🎲",label:"బాఱ! (Baara 12!)",text:"బాఱ! (Baara 12!) 🎲"},{emoji:"💥",label:"కట్టా! (Katta!)",text:"కట్టా! (Katta Strike!) 💥"},{emoji:"👏",label:"Good Move!",text:"Super move, friend! 👏"},{emoji:"🏃",label:"Catch me!",text:"Catch my coin if you can! 🏃"},{emoji:"⏳",label:"Hurry up!",text:"Hurry up, timer is running! ⏳"},{emoji:"😂",label:"Haha!",text:"Haha! Better luck next roll! 😂"},{emoji:"🤝",label:"Good match!",text:"Great game! Good match! 🤝"},{emoji:"🔥",label:"I will win!",text:"Center Home is mine! 🔥"}],nr=["😀","😂","🤣","😎","🥳","🔥","👏","🎲","💥","🏃","⏳","👑","🪙","🤝","🎯","🤩"];function ir(s,e=[],t=1){const n=e.length===0?'<div class="chat-empty-state">💬 Send a smiley, village taunt, or chat message!</div>':e.map(i=>{const r=i.senderId===t;return`
          <div class="chat-msg-row ${r?"msg-me":"msg-friend"}">
            <span class="msg-sender">${r?"You":i.senderName}:</span>
            <span class="msg-bubble">${Kt(i.text)}</span>
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
              ${nr.map(i=>`
                <button class="btn-smiley-chip" data-emoji="${i}" title="${i}">${i}</button>
              `).join("")}
            </div>
          </div>

          <!-- Quick Village Taunts -->
          <div class="quick-taunts-section">
            <div class="quick-taunts-title">⚡ Quick Village Taunts:</div>
            <div class="quick-taunts-grid">
              ${bi.map((i,r)=>`
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
  `}function sr(s){return s?`
    <div class="floating-chat-bubble animated-bubble">
      <span class="bubble-avatar">💬</span>
      <div class="bubble-content">
        <span class="bubble-sender">${Kt(s.senderName)}:</span>
        <span class="bubble-text">${Kt(s.text)}</span>
      </div>
    </div>
  `:""}function Kt(s){return s?s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}const Ht="bharakhatta_coins_wallet",qt=1e3,rr=500,or=100,vi=[100,250,500,1e3,2500,5e3];class ar{constructor(){this.balance=this.loadBalance()}loadBalance(){try{const e=localStorage.getItem(Ht);if(e!==null){const t=parseInt(e,10);if(!isNaN(t)&&t>=0)return t}return localStorage.setItem(Ht,qt.toString()),qt}catch{return qt}}saveBalance(){try{localStorage.setItem(Ht,this.balance.toString())}catch{}}getBalance(){return this.balance}canAfford(e){return this.balance>=e}placeBet(e){return this.canAfford(e)?(this.balance-=e,this.saveBalance(),!0):!1}awardPot(e){return this.balance+=e,this.saveBalance(),this.balance}claimRefill(){return this.balance<or?(this.balance+=rr,this.saveBalance(),!0):!1}}const Y=new ar;function cr(s,e,t=250,n="solo"){const i=t*2,r=e>=t;return`
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
              ${vi.map(o=>{const a=o===t,c=e>=o;return`
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
  `}class lr{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return dr(e).buffer}}function dr(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s){const r=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(r,n),n+=i.byteLength}return t}function Ci(s){return new ur(s).unpack()}function Si(s){const e=new hr,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class ur{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(o);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class hr{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const r=this.pack(e[i]);return r instanceof Promise?r.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,r=Math.floor(i*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>i(r+1))}return i(r+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new lr,this._textEncoder=new TextEncoder}}let Ti=!0,_i=!0;function He(s,e,t){const n=s.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Ee(s,e,t){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){hn("Unable to polyfill events");return}const i=s.RTCPeerConnection.prototype,r=i.addEventListener;i.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const l=d=>{const u=t(d);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[a,l])};const o=i.removeEventListener;i.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function pr(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(Ti=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function fr(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(_i=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function hn(){if(typeof window=="object"){if(Ti)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function pn(s,e){_i&&console.warn(s+" is deprecated, please use "+e+" instead.")}function mr(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n){const i=parseInt(n.version,10);if(i>=90)return{browser:"chrome",version:i}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(He(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(He(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(He(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=He(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Xn(s){return Object.prototype.toString.call(s)==="[object Object]"}function ki(s){return Xn(s)?Object.keys(s).reduce(function(e,t){const n=Xn(s[t]),i=n?ki(s[t]):s[t],r=n&&!Object.keys(i).length;return i===void 0||r?e:Object.assign(e,{[t]:i})},{}):s}function Yt(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Yt(s,s.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{Yt(s,s.get(i),t)})}))}function Zn(s,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const r=[];return s.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{s.forEach(a=>{a.type===n&&a.trackId===o.id&&Yt(s,a,i)})}),i}const ei=hn;function Ri(s,e){if(e.version>=64)return;const t=s&&s.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const d=typeof a[l]=="object"?a[l]:{ideal:a[l]};d.exact!==void 0&&typeof d.exact=="number"&&(d.min=d.max=d.exact);const u=function(p,m){return p?p+m.charAt(0).toUpperCase()+m.slice(1):m==="deviceId"?"sourceId":m};if(d.ideal!==void 0){c.optional=c.optional||[];let p={};typeof d.ideal=="number"?(p[u("min",l)]=d.ideal,c.optional.push(p),p={},p[u("max",l)]=d.ideal,c.optional.push(p)):(p[u("",l)]=d.ideal,c.optional.push(p))}d.exact!==void 0&&typeof d.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=d.exact):["min","max"].forEach(p=>{d[p]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(p,l)]=d[p])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},i=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(d,u,p){u in d&&!(p in d)&&(d[p]=d[u],delete d[u])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const d=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!d)){delete a.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(p=>{p=p.filter(y=>y.kind==="videoinput");let m=p.find(y=>u.some(v=>y.label.toLowerCase().includes(v)));return!m&&p.length&&u.includes("back")&&(m=p[p.length-1]),m&&(a.video.deviceId=l.exact?{exact:m.deviceId}:{ideal:m.deviceId}),a.video=n(a.video),ei("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return ei("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){i(a,d=>{t.webkitGetUserMedia(d,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,l=>a(l).then(d=>{if(l.audio&&!d.getAudioTracks().length||l.video&&!d.getVideoTracks().length)throw d.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return d},d=>Promise.reject(r(d))))}}}function Pi(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function Mi(s,e){if(!(e.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",r=>{let o;s.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)}),i.stream.getTracks().forEach(r=>{let o;s.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Ee(s,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Ii(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(i,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=i.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:i}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(a,c){let l=i.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const r=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Ei(s,e){if(e.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const n=s.RTCPeerConnection.prototype.getSenders;n&&(s.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const i=s.RTCPeerConnection.prototype.addTrack;i&&(s.RTCPeerConnection.prototype.addTrack=function(){const o=i.apply(this,arguments);return o._pc=this,o}),s.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>Zn(a,o.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const n=s.RTCPeerConnection.prototype.getReceivers;n&&(s.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),Ee(s,"track",i=>(i.receiver._pc=i.srcElement,i)),s.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>Zn(o,r.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const t=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const i=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===i&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===i&&(o?a=!0:o=c),c.track===i)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function xi(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const i=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),i.apply(this,arguments)}}function Ai(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return xi(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const d=t.apply(this);return this._reverseStreams=this._reverseStreams||{},d.map(u=>this._reverseStreams[u.id])};const n=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(d){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},d.getTracks().forEach(u=>{if(this.getSenders().find(m=>m.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[d.id]){const u=new s.MediaStream(d.getTracks());this._streams[d.id]=u,this._reverseStreams[u.id]=d,d=u}n.apply(this,[d])};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(d){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[d.id]||d]),delete this._reverseStreams[this._streams[d.id]?this._streams[d.id].id:d.id],delete this._streams[d.id]},s.RTCPeerConnection.prototype.addTrack=function(d,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const p=[].slice.call(arguments,1);if(p.length!==1||!p[0].getTracks().find(v=>v===d))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===d))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const y=this._streams[u.id];if(y)y.addTrack(d),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new s.MediaStream([d]);this._streams[u.id]=v,this._reverseStreams[v.id]=u,this.addStream(v)}return this.getSenders().find(v=>v.track===d)};function r(l,d){let u=d.sdp;return Object.keys(l._reverseStreams||[]).forEach(p=>{const m=l._reverseStreams[p],y=l._streams[m.id];u=u.replace(new RegExp(y.id,"g"),m.id)}),new RTCSessionDescription({type:d.type,sdp:u})}function o(l,d){let u=d.sdp;return Object.keys(l._reverseStreams||[]).forEach(p=>{const m=l._reverseStreams[p],y=l._streams[m.id];u=u.replace(new RegExp(m.id,"g"),y.id)}),new RTCSessionDescription({type:d.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const d=s.RTCPeerConnection.prototype[l],u={[l](){const p=arguments;return arguments.length&&typeof arguments[0]=="function"?d.apply(this,[y=>{const v=r(this,y);p[0].apply(null,[v])},y=>{p[1]&&p[1].apply(null,y)},arguments[2]]):d.apply(this,arguments).then(y=>r(this,y))}};s.RTCPeerConnection.prototype[l]=u[l]});const a=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),s.RTCPeerConnection.prototype.removeTrack=function(d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!d._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(d._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let p;Object.keys(this._streams).forEach(m=>{this._streams[m].getTracks().find(v=>d.track===v)&&(p=this._streams[m])}),p&&(p.getTracks().length===1?this.removeStream(this._reverseStreams[p.id]):p.removeTrack(d.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Qt(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]})}function Bi(s,e){e.version>102||Ee(s,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const ti=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Bi,shimAddTrackRemoveTrack:Ai,shimAddTrackRemoveTrackWithNative:xi,shimGetSendersWithDtmf:Ii,shimGetUserMedia:Ri,shimMediaStream:Pi,shimOnTrack:Mi,shimPeerConnection:Qt,shimSenderReceiverGetStats:Ei},Symbol.toStringTag,{value:"Module"}));function Oi(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const n=s&&s.MediaStreamTrack;if(t.getUserMedia=function(i,r,o){pn("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o.audio,"autoGainControl","mozAutoGainControl"),i(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function gr(s,e){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(n)}))}function $i(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Xt(s,e){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]}))}function wi(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((d,u)=>{c.set(u,Object.assign({},d,{type:t[d.type]||d.type}))})}return c}).then(o,a)}}function Li(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Ni(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),Ee(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Di(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){pn("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Fi(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function Ui(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.addTransceiver;t&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const r=i.length>0;r&&i.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=i,a.sendEncodings=i,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function Gi(s,e){if(!(typeof s=="object"&&s.RTCRtpSender)||e.version>=110)return;const t=s.RTCRtpSender.prototype.getParameters;t&&(s.RTCRtpSender.prototype.getParameters=function(){const i=t.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function ji(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Hi(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const ni=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Ui,shimCreateAnswer:Hi,shimCreateOffer:ji,shimGetDisplayMedia:gr,shimGetParameters:Gi,shimGetStats:wi,shimGetUserMedia:Oi,shimOnTrack:$i,shimPeerConnection:Xt,shimRTCDataChannel:Fi,shimReceiverGetStats:Ni,shimRemoveStream:Di,shimSenderGetStats:Li},Symbol.toStringTag,{value:"Module"}));function qi(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},s.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(r=>{i.includes(r.track)&&this.removeTrack(r)})})}}function Vi(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const r=new Event("addstream");r.stream=i,this.dispatchEvent(r)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function zi(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,d){const u=arguments.length>=2?arguments[2]:arguments[0],p=t.apply(this,[u]);return d?(p.then(l,d),Promise.resolve()):p},e.createAnswer=function(l,d){const u=arguments.length>=2?arguments[2]:arguments[0],p=n.apply(this,[u]);return d?(p.then(l,d),Promise.resolve()):p};let a=function(c,l,d){const u=i.apply(this,[c]);return d?(u.then(l,d),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,l,d){const u=r.apply(this,[c]);return d?(u.then(l,d),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,l,d){const u=o.apply(this,[c]);return d?(u.then(l,d),Promise.resolve()):u},e.addIceCandidate=a}function Ji(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(Wi(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,i,r){e.mediaDevices.getUserMedia(n).then(i,r)}).bind(e))}function Wi(s){return s&&s.video!==void 0?Object.assign({},s,{video:ki(s.video)}):s}function Ki(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(pn("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,i)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Yi(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Qi(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Xi(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const ii=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Xi,shimCallbacksAPI:zi,shimConstraints:Wi,shimCreateOfferLegacy:Qi,shimGetUserMedia:Ji,shimLocalStreamsAPI:qi,shimRTCIceServerUrls:Ki,shimRemoteStreamsAPI:Vi,shimTrackEventTransceiver:Yi},Symbol.toStringTag,{value:"Module"}));var Vt={exports:{}},si;function yr(){return si||(si=1,(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
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
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const d=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(d.parameters=u.length?e.parseFmtp(u[0]):{},d.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(d),d.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(d.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(d=>d.type===c.type&&d.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{i+=e.writeRtpMap(o),i+=e.writeFmtp(o),i+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(i+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{i+=e.writeExtmap(o)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),r=i.fecMechanisms.indexOf("RED")!==-1,o=i.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(p=>e.parseSsrcMedia(p)).filter(p=>p.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const d=e.matchPrefix(t,"a=ssrc-group:FID").map(p=>p.substring(17).split(" ").map(y=>parseInt(y,10)));d.length>0&&d[0].length>1&&d[0][0]===c&&(l=d[0][1]),i.codecs.forEach(p=>{if(p.name.toUpperCase()==="RTX"&&p.parameters.apt){let m={ssrc:c,codecPayloadType:parseInt(p.parameters.apt,10)};c&&l&&(m.rtx={ssrc:l}),n.push(m),r&&(m=JSON.parse(JSON.stringify(m)),m.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(m))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(p=>{p.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
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
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let r=0;r<i.length;r++)switch(i[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},s.exports=e})(Vt)),Vt.exports}var Zi=yr();const $e=pi(Zi),br=ls({__proto__:null,default:$e},[Zi]);function ot(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),r=$e.parseCandidate(n.candidate);for(const o in r)o in i||Object.defineProperty(i,o,{value:r[o]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},s.RTCIceCandidate.prototype=e.prototype,Ee(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Zt(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||Ee(s,"icecandidate",e=>{if(e.candidate){const t=$e.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function at(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=$e.splitSections(a.sdp);return c.shift(),c.some(l=>{const d=$e.parseMLine(l);return d&&d.kind==="application"&&d.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},i=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const d=$e.matchPrefix(a.sdp,"a=max-message-size:");return d.length>0?l=parseInt(d[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=i(c),d=r(arguments[0],c);let u;l===0&&d===0?u=Number.POSITIVE_INFINITY:l===0||d===0?u=Math.max(l,d):u=Math.min(l,d);const p={};Object.defineProperty(p,"maxMessageSize",{get(){return u}}),this._sctp=p}return o.apply(this,arguments)}}function ct(s,e){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(i,r){const o=i.send;i.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(i.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(i,arguments)}}const n=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Ee(s,"datachannel",i=>(t(i.channel,i.target),i))}function en(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const r=i.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",i);r.dispatchEvent(o)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function tn(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=i.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&i instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:i.type,sdp:r}):i.sdp=r}return t.apply(this,arguments)}}function lt(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function dt(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const vr=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:tn,shimAddIceCandidateNullOrEmpty:lt,shimConnectionState:en,shimMaxMessageSize:at,shimParameterlessSetLocalDescription:dt,shimRTCIceCandidate:ot,shimRTCIceCandidateRelayProtocol:Zt,shimSendThrowTypeError:ct},Symbol.toStringTag,{value:"Module"}));function Cr({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=hn,n=mr(s),i={browserDetails:n,commonShim:vr,extractVersion:He,disableLog:pr,disableWarnings:fr,sdp:br};switch(n.browser){case"chrome":if(!ti||!Qt||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=ti,lt(s,n),dt(s),Ri(s,n),Pi(s),Qt(s,n),Mi(s,n),Ai(s,n),Ii(s),Ei(s,n),Bi(s,n),ot(s),Zt(s),en(s),at(s,n),ct(s,n),tn(s,n);break;case"firefox":if(!ni||!Xt||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=ni,lt(s,n),dt(s),Oi(s,n),Xt(s,n),wi(s,n),$i(s),Di(s),Li(s),Ni(s),Fi(s),Ui(s,n),Gi(s,n),ji(s,n),Hi(s,n),ot(s),en(s),at(s,n),ct(s,n);break;case"safari":if(!ii||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=ii,lt(s,n),dt(s),Ki(s),Qi(s),zi(s),qi(s),Vi(s),Yi(s),Ji(s),Xi(s),ot(s),Zt(s),at(s,n),ct(s,n),tn(s,n);break;default:t("Unsupported browser!");break}return i}const ri=Cr({window:typeof window>"u"?void 0:window});function xe(s,e,t,n){Object.defineProperty(s,e,{get:t,set:n,enumerable:!0,configurable:!0})}class es{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:i};t.push(l),o=a,r++}return this._dataCount++,t}}}function Sr(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s)t.set(i,n),n+=i.byteLength;return t}const zt=ri.default||ri,Ge=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return zt.browserDetails.browser}getVersion(){return zt.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=zt.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Tr=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),ts=()=>Math.random().toString(36).slice(2),oi={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class _r extends es{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=oi,this.browser=Ge.getBrowser(),this.browserVersion=Ge.getVersion(),this.pack=Si,this.unpack=Ci,this.supports=(function(){const t={browser:Ge.isBrowserSupported(),webRTC:Ge.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(oi),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Ge.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Tr,this.randomToken=ts}}const he=new _r,kr="PeerJS: ";class Rr{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[kr,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var R=new Rr,fn={},Pr=Object.prototype.hasOwnProperty,ce="~";function ze(){}Object.create&&(ze.prototype=Object.create(null),new ze().__proto__||(ce=!1));function Mr(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function ns(s,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Mr(t,n||s,i),o=ce?ce+e:e;return s._events[o]?s._events[o].fn?s._events[o]=[s._events[o],r]:s._events[o].push(r):(s._events[o]=r,s._eventsCount++),s}function ut(s,e){--s._eventsCount===0?s._events=new ze:delete s._events[e]}function oe(){this._events=new ze,this._eventsCount=0}oe.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Pr.call(t,n)&&e.push(ce?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};oe.prototype.listeners=function(e){var t=ce?ce+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,o=new Array(r);i<r;i++)o[i]=n[i].fn;return o};oe.prototype.listenerCount=function(e){var t=ce?ce+e:e,n=this._events[t];return n?n.fn?1:n.length:0};oe.prototype.emit=function(e,t,n,i,r,o){var a=ce?ce+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,d,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,r),!0;case 6:return c.fn.call(c.context,t,n,i,r,o),!0}for(u=1,d=new Array(l-1);u<l;u++)d[u-1]=arguments[u];c.fn.apply(c.context,d)}else{var p=c.length,m;for(u=0;u<p;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,i);break;default:if(!d)for(m=1,d=new Array(l-1);m<l;m++)d[m-1]=arguments[m];c[u].fn.apply(c[u].context,d)}}return!0};oe.prototype.on=function(e,t,n){return ns(this,e,t,n,!1)};oe.prototype.once=function(e,t,n){return ns(this,e,t,n,!0)};oe.prototype.removeListener=function(e,t,n,i){var r=ce?ce+e:e;if(!this._events[r])return this;if(!t)return ut(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&ut(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||i&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:ut(this,r)}return this};oe.prototype.removeAllListeners=function(e){var t;return e?(t=ce?ce+e:e,this._events[t]&&ut(this,t)):(this._events=new ze,this._eventsCount=0),this};oe.prototype.off=oe.prototype.removeListener;oe.prototype.addListener=oe.prototype.on;oe.prefixed=ce;oe.EventEmitter=oe;fn=oe;var Ae={};xe(Ae,"ConnectionType",()=>ke);xe(Ae,"PeerErrorType",()=>Z);xe(Ae,"BaseConnectionErrorType",()=>nn);xe(Ae,"DataConnectionErrorType",()=>mn);xe(Ae,"SerializationType",()=>mt);xe(Ae,"SocketEventType",()=>_e);xe(Ae,"ServerMessageType",()=>re);var ke=(function(s){return s.Data="data",s.Media="media",s})({}),Z=(function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s})({}),nn=(function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s})({}),mn=(function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s})({}),mt=(function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s})({}),_e=(function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s})({}),re=(function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s})({});const is="1.5.5";class Ir extends fn.EventEmitter{constructor(e,t,n,i,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+i+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+is),this._disconnected=!1,this._socket.onmessage=i=>{let r;try{r=JSON.parse(i.data),R.log("Server message received:",r)}catch{R.log("Invalid server message",i.data);return}this.emit(_e.Message,r)},this._socket.onclose=i=>{this._disconnected||(R.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(_e.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),R.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){R.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:re.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(_e.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class ss{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===ke.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},r=t.createDataChannel(n.label,i);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){R.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,r=this.connection.provider;R.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(R.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:re.Candidate,payload:{candidate:o.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":R.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(nn.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":R.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(nn.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":R.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},R.log("Listening for data channel"),e.ondatachannel=o=>{R.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},R.log("Listening for remote stream"),e.ontrack=o=>{R.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===ke.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){R.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);R.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),R.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===ke.Data){const r=this.connection;i={...i,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:re.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Z.WebRTC,i),R.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(Z.WebRTC,n),R.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();R.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),R.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:re.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(Z.WebRTC,i),R.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(Z.WebRTC,n),R.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;R.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),R.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){i.emitError(Z.WebRTC,o),R.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){R.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),R.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Z.WebRTC,t),R.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(R.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return R.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){R.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class rs extends fn.EventEmitter{emitError(e,t){R.error("Error:",t),this.emit("error",new Er(`${e}`,t))}}class Er extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class os extends rs{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var on;const qe=class qe extends os{get type(){return ke.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||qe.ID_PREFIX+he.randomToken(),this._negotiator=new ss(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{R.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{R.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){R.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case re.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case re.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:R.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){R.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};on=new WeakMap,Fe(qe,on,qe.ID_PREFIX="mc_");let pt=qe;class xr{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${i}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",is),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){R.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==he.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===he.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw R.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var an,cn;const Re=class Re extends os{get type(){return ke.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Re.ID_PREFIX+ts(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new ss(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{R.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{R.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{R.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(mn.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case re.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case re.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:R.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};an=new WeakMap,cn=new WeakMap,Fe(Re,an,Re.ID_PREFIX="dc_"),Fe(Re,cn,Re.MAX_BUFFERED_AMOUNT=8388608);let ft=Re;class gn extends ft{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>ft.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return R.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Jt extends gn{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new es,this.serialization=mt.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Ci(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=Sr(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=Si(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);R.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Ar extends gn{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=mt.None}}class Br extends gn{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=he.chunkedMTU){this.emitError(mn.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=mt.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var ln;const Ve=class Ve extends rs{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Ar,json:Br,binary:Jt,"binary-utf8":Jt,default:Jt},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:he.CLOUD_HOST,port:he.CLOUD_PORT,path:"/",key:Ve.DEFAULT_KEY,token:he.randomToken(),config:he.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==he.CLOUD_HOST?this._options.secure=he.isSecure():this._options.host==he.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&R.setLogFunction(this._options.logFunction),R.logLevel=this._options.debug||0,this._api=new xr(t),this._socket=this._createServerConnection(),!he.supports.audioVideo&&!he.supports.data){this._delayedAbort(Z.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!he.validateId(n)){this._delayedAbort(Z.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(Z.ServerError,i))}_createServerConnection(){const e=new Ir(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(_e.Message,t=>{this._handleMessage(t)}),e.on(_e.Error,t=>{this._abort(Z.SocketError,t)}),e.on(_e.Disconnected,()=>{this.disconnected||(this.emitError(Z.Network,"Lost connection to server."),this.disconnect())}),e.on(_e.Close,()=>{this.disconnected||this._abort(Z.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case re.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case re.Error:this._abort(Z.ServerError,n.msg);break;case re.IdTaken:this._abort(Z.UnavailableID,`ID "${this.id}" is taken`);break;case re.InvalidKey:this._abort(Z.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case re.Leave:R.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case re.Expire:this.emitError(Z.PeerUnavailable,`Could not connect to peer ${i}`);break;case re.Offer:{const r=n.connectionId;let o=this.getConnection(i,r);if(o&&(o.close(),R.warn(`Offer received for existing Connection ID:${r}`)),n.type===ke.Media){const c=new pt(i,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(i,o),this.emit("call",c)}else if(n.type===ke.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(i,o),this.emit("connection",c)}else{R.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){R.warn(`You received a malformed message from ${i} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(i,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):R.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){R.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Z.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){R.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Z.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){R.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new pt(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){R.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){R.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(R.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;R.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)R.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)R.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Z.ServerError,t))}};ln=new WeakMap,Fe(Ve,ln,Ve.DEFAULT_KEY="peerjs");let sn=Ve;var Wt=sn;const ai=Wt.Peer||Wt.default||Wt;function Or(){const s=new Date,e=String(s.getFullYear()).slice(-2),t=String(s.getMonth()+1).padStart(2,"0"),n=String(s.getDate()).padStart(2,"0"),i=`BK-${e}${t}${n}`;let r=101;try{const c=localStorage.getItem("bk_board_seq");c&&(r=parseInt(c,10)+1),localStorage.setItem("bk_board_seq",String(r))}catch{r=Math.floor(100+Math.random()*900)}let o=Math.floor(100+Math.random()*900),a=`${i}-${r}-${o}`;try{let c=JSON.parse(localStorage.getItem("bk_used_board_numbers")||"[]");for(;c.includes(a);)r++,o=Math.floor(100+Math.random()*900),a=`${i}-${r}-${o}`;c.push(a),c.length>1e3&&(c=c.slice(-1e3)),localStorage.setItem("bk_used_board_numbers",JSON.stringify(c)),localStorage.setItem("bk_board_seq",String(r))}catch{}return a}function $r(s){if(!s)return"";let e=s.trim().toUpperCase().replace(/\s+/g,"");return!e.startsWith("BK-")&&!e.startsWith("BK")&&(e=`BK-${e}`),e}class wr{constructor(e={}){this.ws=null,this.peer=null,this.peerConn=null,this.mode="auto",this.roomCode=null,this.myPlayerId=null,this.myTeam=null,this.isHost=!1,this.connected=!1,this.hostName="Player 1",this.guestName="Player 2",this.onRoomCreated=e.onRoomCreated||(()=>{}),this.onRoomJoined=e.onRoomJoined||(()=>{}),this.onPlayerJoined=e.onPlayerJoined||(()=>{}),this.onPlayerLeft=e.onPlayerLeft||(()=>{}),this.onSyncRoll=e.onSyncRoll||(()=>{}),this.onSyncMove=e.onSyncMove||(()=>{}),this.onSyncRestart=e.onSyncRestart||(()=>{}),this.onChatReceived=e.onChatReceived||(()=>{}),this.onBetSynced=e.onBetSynced||(()=>{}),this.onSyncTimeoutPass=e.onSyncTimeoutPass||(()=>{}),this.onStart4pAIPair=e.onStart4pAIPair||(()=>{}),this.onSyncGameState=e.onSyncGameState||(()=>{}),this.onGate23Decision=e.onGate23Decision||(()=>{}),this.onError=e.onError||(()=>{}),this.onStatusChange=e.onStatusChange||(()=>{}),this.currentBet=250,this.gameMode="2p",this.peerConns=new Set}isP2PPreferred(){const e=window.location.hostname;return e.includes("github.io")||window.location.protocol==="file:"||!e.includes("localhost")&&!e.includes("127.0.0.1")&&!e.includes("192.168.")}connectWS(){return this.ws&&(this.ws.readyState===0||this.ws.readyState===1)?Promise.resolve():new Promise((e,t)=>{try{const n=window.location.protocol==="https:"?"wss:":"ws:",i=window.location.host,r=`${n}//${i}/ws`;this.ws=new WebSocket(r),this.ws.onopen=()=>{this.connected=!0,this.mode="ws",this.onStatusChange("connected"),e()},this.ws.onclose=()=>{this.connected=!1,this.onStatusChange("disconnected")},this.ws.onerror=o=>{console.warn("WebSocket not available, falling back to WebRTC:",o),this.ws=null,t(o)},this.ws.onmessage=o=>{try{const a=JSON.parse(o.data);this.handleMessage(a)}catch(a){console.error("Failed to parse WS message:",a)}}}catch(n){t(n)}})}handleMessage(e){switch(e.type){case"ROOM_CREATED":this.roomCode=e.roomCode,this.myPlayerId=e.playerId,this.myTeam=e.team,this.isHost=!0,this.gameMode=e.mode||"2p",this.onRoomCreated(e);break;case"ROOM_JOINED":this.roomCode=e.roomCode,this.myPlayerId=e.playerId,this.myTeam=e.team,this.isHost=!1,this.gameMode=e.mode||"2p",this.onRoomJoined(e);break;case"PLAYER_JOINED":this.onPlayerJoined(e.player,e.players);break;case"PLAYER_LEFT":this.onPlayerLeft(e.playerId,e.players);break;case"ACTION_ROLL":this.onSyncRoll(e.rollResult);break;case"ACTION_MOVE":this.onSyncMove(e.move);break;case"ACTION_RESTART":this.onSyncRestart();break;case"ACTION_CHAT":this.onChatReceived(e);break;case"ROOM_BET":this.currentBet=e.bet,this.onBetSynced(e.bet);break;case"ACTION_TIMEOUT_PASS":this.onSyncTimeoutPass(e);break;case"START_4P_AI_PAIR":this.onStart4pAIPair(e);break;case"SYNC_GAME_STATE":this.onSyncGameState(e.state);break;case"GATE_23_DECISION":this.onGate23Decision(e.decision);break;case"ERROR":this.onError(e.message);break}}async createRoom(e="2p",t="Player 1"){if(this.hostName=t,this.gameMode=e,!this.isP2PPreferred())try{await this.connectWS(),this.send({type:"CREATE_ROOM",mode:e,playerName:t});return}catch(r){console.log("WS failed, switching to P2P WebRTC:",r)}this.mode="p2p";const n=Or(),i=`bk-board-${n.toLowerCase().replace(/[^a-z0-9]/g,"")}`;if(this.peer)try{this.peer.destroy()}catch{}this.peer=new ai(i),this.peer.on("open",()=>{this.roomCode=n,this.myPlayerId=1,this.myTeam=1,this.isHost=!0,this.connected=!0,this.onStatusChange("connected"),this.onRoomCreated({roomCode:n,playerId:1,team:1,mode:e,players:[{id:1,team:1,name:t,isHost:!0}]})}),this.peer.on("connection",r=>{this.peerConn=r,this.peerConns.add(r),r.on("open",()=>{}),r.on("data",o=>{if(this.isHost&&this.peerConns.size>1)for(const a of this.peerConns)a!==r&&a.open&&a.send(o);if(o.type==="JOIN_ROOM"){this.guestName=o.playerName||"Player 2";const a=this.gameMode==="4p",c=a?3:2,l=a?1:2,d=[{id:1,team:1,name:this.hostName,isHost:!0},{id:c,team:l,name:this.guestName,isHost:!1}];r.send({type:"ROOM_JOINED",roomCode:n,playerId:c,team:l,mode:this.gameMode,players:d,bet:this.currentBet}),this.onPlayerJoined({id:c,team:l,name:this.guestName},d)}else this.handleMessage(o)}),r.on("close",()=>{this.peerConns.delete(r),this.onPlayerLeft(2,[{id:1,team:1,name:this.hostName}])})}),this.peer.on("error",r=>{console.error("PeerJS Host error:",r),r.type==="unavailable-id"?this.createRoom(e,t):this.onError(`Network error: ${r.message||r.type}`)})}async joinRoom(e,t="Player 2"){this.guestName=t;const n=$r(e);if(!this.isP2PPreferred())try{await this.connectWS(),this.send({type:"JOIN_ROOM",roomCode:n,playerName:t});return}catch(i){console.log("WS failed, switching to P2P WebRTC:",i)}if(this.mode="p2p",this.peer)try{this.peer.destroy()}catch{}this.peer=new ai,this.peer.on("open",()=>{const i=`bk-board-${n.toLowerCase().replace(/[^a-z0-9]/g,"")}`,r=this.peer.connect(i,{reliable:!0});this.peerConn=r,r.on("open",()=>{this.connected=!0,this.onStatusChange("connected"),r.send({type:"JOIN_ROOM",roomCode:n,playerName:t})}),r.on("data",o=>{this.handleMessage(o)}),r.on("close",()=>{this.connected=!1,this.onStatusChange("disconnected"),this.onError("Room host has disconnected.")})}),this.peer.on("error",i=>{console.error("PeerJS Guest error:",i),this.onError(`Could not join Board #${n}. Please ensure host is waiting and try again.`)})}sendStart4pAIPair(){this.roomCode&&this.send({type:"START_4P_AI_PAIR",roomCode:this.roomCode,bet:this.currentBet})}sendRoll(e){this.roomCode&&this.send({type:"ACTION_ROLL",roomCode:this.roomCode,rollResult:e})}sendMove(e){this.roomCode&&this.send({type:"ACTION_MOVE",roomCode:this.roomCode,move:e})}sendRestart(){this.roomCode&&this.send({type:"ACTION_RESTART",roomCode:this.roomCode})}sendChat(e,t="Player"){if(!this.roomCode)return;const n={type:"ACTION_CHAT",roomCode:this.roomCode,senderId:this.myPlayerId,senderName:t,text:e,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.send(n),this.onChatReceived(n)}sendBet(e){this.currentBet=e,this.roomCode&&this.send({type:"ROOM_BET",roomCode:this.roomCode,bet:e})}sendTimeoutPass(e){this.roomCode&&this.send({type:"ACTION_TIMEOUT_PASS",roomCode:this.roomCode,playerId:e})}sendGameState(e){this.roomCode&&this.send({type:"SYNC_GAME_STATE",roomCode:this.roomCode,state:e})}sendGate23Decision(e){this.roomCode&&this.send({type:"GATE_23_DECISION",roomCode:this.roomCode,decision:e})}send(e){if(this.mode==="p2p")if(this.peerConns&&this.peerConns.size>0)for(const t of this.peerConns)t&&t.open&&t.send(e);else this.peerConn&&this.peerConn.open&&this.peerConn.send(e);else this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(e))}leaveRoom(){if(this.roomCode=null,this.myPlayerId=null,this.myTeam=null,this.isHost=!1,this.connected=!1,this.peerConns){for(const e of this.peerConns)try{e.close()}catch{}this.peerConns.clear()}if(this.peerConn){try{this.peerConn.close()}catch{}this.peerConn=null}if(this.peer){try{this.peer.destroy()}catch{}this.peer=null}if(this.ws){try{this.ws.close()}catch{}this.ws=null}}}const rt="bk_current_user_mobile",ci="bk_all_registered_mobiles",Se={getItem(s){try{if(typeof localStorage<"u")return localStorage.getItem(s)}catch{}return null},setItem(s,e){try{typeof localStorage<"u"&&localStorage.setItem(s,e)}catch{}},removeItem(s){try{typeof localStorage<"u"&&localStorage.removeItem(s)}catch{}}};function rn(s,e){if(e&&e.trim())return e.trim();if(!s||!s.trim())return"Player";const t=s.trim().split(/\s+/).filter(Boolean);return t.length===0?"Player":t.map(n=>n[0].toUpperCase()).join("")}class Lr{constructor(){this.currentUser=null,this.init()}init(){try{const e=Se.getItem(rt);e&&(this.currentUser=this.loadUserProfile(e),this.currentUser&&(Y.balance=this.currentUser.walletBalance??1e3,Y.saveBalance()))}catch(e){console.error("Failed to load active user:",e)}}cleanMobile(e){return e?e.toString().replace(/[^0-9]/g,"").slice(-10):""}isRegistered(e){const t=this.cleanMobile(e);return!t||t.length!==10?!1:Se.getItem(`bk_user_${t}`)!==null}loadUserProfile(e){const t=this.cleanMobile(e);if(!t)return null;try{const n=Se.getItem(`bk_user_${t}`);if(n){const i=JSON.parse(n);return i.nickName||(i.nickName=rn(i.fullName||i.name||"","")),i.name=i.nickName,i}}catch(n){console.error("Failed to parse user profile:",n)}return null}saveUserProfile(e){if(!(!e||!e.mobile))try{e.walletBalance=Y.getBalance(),Se.setItem(`bk_user_${e.mobile}`,JSON.stringify(e))}catch(t){console.error("Failed to save user profile:",t)}}login(e,t="",n=""){const i=this.cleanMobile(e);if(!i||i.length!==10)return{success:!1,error:"Please enter a valid 10-digit mobile number."};const r=(t||"").trim(),o=rn(r,n),a=this.loadUserProfile(i);if(a)return a.lastLoginAt=Date.now(),r&&(a.fullName=r),n&&n.trim()?(a.nickName=n.trim(),a.name=a.nickName):a.nickName||(a.nickName=o,a.name=o),this.currentUser=a,Se.setItem(rt,i),Y.balance=a.walletBalance??1e3,Y.saveBalance(),this.saveUserProfile(this.currentUser),{success:!0,isNewUser:!1,user:this.currentUser,message:`Welcome back, ${this.currentUser.nickName}! (Existing player)`};const c={mobile:i,fullName:r||"Player",nickName:o,name:o,joinedAt:Date.now(),lastLoginAt:Date.now(),walletBalance:1e3,gamesPlayed:0,gamesWon:0,totalKills:0,totalCoinsWon:0,matchHistory:[]};this.currentUser=c,Se.setItem(rt,i);try{const l=JSON.parse(Se.getItem(ci)||"[]");l.includes(i)||(l.push(i),Se.setItem(ci,JSON.stringify(l)))}catch{}return Y.balance=1e3,Y.saveBalance(),this.saveUserProfile(c),{success:!0,isNewUser:!0,user:c,message:`Welcome, ${c.nickName}! 🪙1,000 joining bonus credited!`}}isLoggedIn(){return this.currentUser!==null}getCurrentUser(){return this.currentUser&&(this.currentUser.walletBalance=Y.getBalance()),this.currentUser}recordMatch({matchId:e,opponent:t,mode:n,bet:i,pot:r,result:o,coinsChange:a,durationSec:c,kills:l}){if(!this.currentUser)return;const d={id:e||`m_${Date.now()}`,date:new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),mode:n||"1v1 Match",opponent:t||"System AI",bet:i||250,pot:r||500,result:o||"WON",coinsChange:a||0,durationSec:c||0,kills:l||0};this.currentUser.gamesPlayed=(this.currentUser.gamesPlayed||0)+1,o==="WON"&&(this.currentUser.gamesWon=(this.currentUser.gamesWon||0)+1,this.currentUser.totalCoinsWon=(this.currentUser.totalCoinsWon||0)+(r||0)),this.currentUser.totalKills=(this.currentUser.totalKills||0)+(l||0),Array.isArray(this.currentUser.matchHistory)||(this.currentUser.matchHistory=[]),this.currentUser.matchHistory.unshift(d),this.currentUser.matchHistory.length>50&&this.currentUser.matchHistory.pop(),this.saveUserProfile(this.currentUser)}getHistory(){return!this.currentUser||!this.currentUser.matchHistory?[]:this.currentUser.matchHistory}getStats(){if(!this.currentUser)return{gamesPlayed:0,gamesWon:0,winRate:0,totalKills:0,balance:1e3};const e=this.currentUser.gamesPlayed||0,t=this.currentUser.gamesWon||0,n=e>0?Math.round(t/e*100):0;return{gamesPlayed:e,gamesWon:t,winRate:n,totalKills:this.currentUser.totalKills||0,balance:Y.getBalance()}}logout(){this.currentUser&&this.saveUserProfile(this.currentUser),this.currentUser=null,Se.removeItem(rt)}}const ie=new Lr;function Nr(s,e="",t="",n="",i=null){return`
    <div class="modal-backdrop" id="login-modal-backdrop">
      <div class="modal-dialog modal-login modal-login-redesign">
        <div class="modal-header login-header-styled">
          <div class="login-brand-banner">
            <span class="login-brand-icon">🐚</span>
            <div>
              <h2 class="login-main-title">బాఱఖట్టా • BHARAKHATTA</h2>
              <span class="login-sub-title">Traditional Indian Village Board Game</span>
            </div>
          </div>
        </div>

        <div class="modal-body login-body-styled">
          <div class="login-perks-row">
            <div class="perk-pill">
              <span class="perk-ico">🪙</span>
              <span><strong>1,000 Coins</strong> Joining Bonus</span>
            </div>
            <div class="perk-pill">
              <span class="perk-ico">📜</span>
              <span><strong>Lifetime Stats</strong> & History Saved</span>
            </div>
          </div>

          ${i?`<div class="login-error-box">⚠️ ${i}</div>`:""}

          <!-- Mobile Number -->
          <div class="form-group">
            <label for="input-login-mobile" class="form-label">
              <span>📱 Mobile Number</span>
              <span class="label-badge required">10 Digits</span>
            </label>
            <div class="mobile-input-wrapper">
              <span class="country-prefix">+91</span>
              <input 
                type="tel" 
                id="input-login-mobile" 
                class="form-input mobile-input" 
                placeholder="e.g. 9876543210" 
                maxlength="10" 
                pattern="[0-9]{10}" 
                value="${e}" 
                autocomplete="tel"
                required
              />
            </div>
            <span class="input-hint">Existing players restore all saved coins, win rate & match history</span>
          </div>

          <!-- Full Name -->
          <div class="form-group">
            <label for="input-login-fullname" class="form-label">
              <span>👤 Full Name</span>
              <span class="label-badge required">Required</span>
            </label>
            <input 
              type="text" 
              id="input-login-fullname" 
              class="form-input" 
              placeholder="e.g. Mahesh Reddy or maheshreddy" 
              maxlength="30"
              value="${t}" 
            />
          </div>

          <!-- Nick Name -->
          <div class="form-group">
            <label for="input-login-nickname" class="form-label">
              <span>🏷️ Nick Name</span>
              <span class="label-badge optional">Optional</span>
            </label>
            <input 
              type="text" 
              id="input-login-nickname" 
              class="form-input" 
              placeholder="Leave blank for auto-initials (e.g. MR or M)" 
              maxlength="15"
              value="${n}" 
            />
            <div class="nickname-preview-box">
              <span>Game In-Game Name: </span>
              <strong id="nickname-preview-badge" class="preview-badge">${n||"MR"}</strong>
            </div>
          </div>
        </div>

        <div class="modal-footer login-footer-centered">
          <button class="btn-primary btn-enter-bharakhatta" id="btn-submit-login">
            🎮 Enter Bharakhatta
          </button>
        </div>
      </div>
    </div>
  `}function Dr(s,e,t,n=[]){if(!e)return"";const i=t.gamesPlayed>0?Math.round(t.gamesWon/t.gamesPlayed*100):0,r=n&&n.length>0?n.map(o=>{const a=o.result==="WON",c=a?"result-won":"result-lost",l=a?"🏆":o.result==="FORFEITED"?"⚠️":"❌",d=o.coinsChange>0?"delta-positive":o.coinsChange<0?"delta-negative":"",u=o.coinsChange>0?"+":"";return`
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
                ${l} ${o.result}
              </span>
            </td>
            <td>
              <span class="history-kills">⚔️ ${o.kills}</span>
            </td>
            <td class="text-right">
              <span class="history-delta ${d}">
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
  `}function Fr(s){return`
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
  `}function Ur(s,e=120,t=!1){const n=Math.floor(e/60),i=e%60;return`
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
  `}function Gr(s){return`
    <div class="modal-backdrop" id="gate-prompt-backdrop" style="z-index: 1050;">
      <div class="modal-dialog modal-confirm" style="max-width: 480px; text-align: center;">
        <div class="modal-header" style="justify-content: center; flex-direction: column; align-items: center; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
          <span style="font-size: 2.4rem; margin-bottom: 8px;">⚔️</span>
          <h2 class="modal-title" style="color: #f1c40f; font-size: 1.3rem; margin: 0;">
            ${$("gate23Title")}
          </h2>
        </div>

        <div class="modal-body" style="padding: 16px;">
          <div style="background: rgba(241, 196, 15, 0.1); border: 1px solid rgba(241, 196, 15, 0.3); border-radius: 10px; padding: 12px; margin-bottom: 14px; text-align: left;">
            <p style="margin: 0; font-size: 0.92rem; line-height: 1.5; color: #f39c12;">
              ${$("gate23Msg")}
            </p>
          </div>
          <div style="display: flex; justify-content: space-around; font-size: 0.82rem; color: #bdc3c7; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 8px;">
            <span>🚪 <strong>H1 (Bottom):</strong> <span style="color:#2ecc71;">Unlocked</span></span>
            <span>🚪 <strong>H2 (Top):</strong> <span style="color:#2ecc71;">Unlocked</span></span>
          </div>
        </div>

        <div class="modal-footer modal-footer-split" style="display: flex; gap: 10px; justify-content: center;">
          <button class="btn-primary" id="btn-gate-continue" style="flex: 1; padding: 12px 14px; font-weight: bold;">
            ${$("btnContinueGame")}
          </button>
          <button class="btn-secondary" id="btn-gate-restart" style="flex: 1; padding: 12px 14px;">
            ${$("btnStartAgain")}
          </button>
        </div>
      </div>
    </div>
  `}function jr(s={}){const{user:e,walletCoins:t=1e3,selectedBet:n=250,playerCount:i=2,selectedMode:r="solo"}=s,o=e&&(e.nickName||e.name)||"Player",a=n*2,c=hi();return`
    <div class="lobby-overlay-container">
      <div class="lobby-card">
        <!-- Lobby Brand Header -->
        <div class="lobby-header">
          <div class="lobby-title-wrap">
            <span class="lobby-shell-icon">🐚</span>
            <div>
              <h1 class="lobby-title">బాఱఖట్టా • BHARAKHATTA</h1>
              <span class="lobby-subtitle">${$("appSubtitle")}</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn-icon btn-lang-toggle" id="btn-lobby-lang-toggle" title="Switch Language / భాష మార్చండి" style="font-weight: 700; color: #f1c40f; border: 1px solid rgba(241,196,15,0.4); background: rgba(241,196,15,0.12); padding: 6px 10px; border-radius: 20px; cursor: pointer;">
              ${c==="en"?"🌐 తెలుగు":"🌐 English"}
            </button>
            <div class="lobby-user-pill" id="btn-lobby-profile" title="View Profile & Match History">
              <span class="user-avatar">👤</span>
              <span class="user-nick">${o}</span>
              <span class="user-balance">🪙 ${t.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div class="lobby-body">
          <!-- Step 1: Player Count Selection (2 or 4 Players) -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">1</span>
              <span class="section-heading">${$("selectPlayerCount")}</span>
            </div>
            <div class="player-count-toggle-grid">
              <button class="btn-player-count ${i===2?"count-active":""}" id="btn-count-2p" data-count="2">
                <span class="count-icon">👥</span>
                <div class="count-text">
                  <strong>${$("twoPlayers")}</strong>
                  <span>${$("twoPlayersSub")}</span>
                </div>
                ${i===2?'<span class="count-check">✔</span>':""}
              </button>

              <button class="btn-player-count ${i===4?"count-active":""}" id="btn-count-4p" data-count="4">
                <span class="count-icon">👥👥</span>
                <div class="count-text">
                  <strong>${$("fourPlayers")}</strong>
                  <span>${$("fourPlayersSub")}</span>
                </div>
                ${i===4?'<span class="count-check">✔</span>':""}
              </button>
            </div>
          </div>

          <!-- Step 2: Match Setup / Mode Selection -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">2</span>
              <span class="section-heading">${$(i===2?"selectMode2p":"selectMode4p")}</span>
            </div>

            ${i===2?`
              <!-- 2-Player Options -->
              <div class="mode-options-grid">
                <button class="btn-mode-card ${r==="solo"?"mode-active":""}" id="btn-select-mode-solo">
                  <span class="mode-icon">🤖</span>
                  <div class="mode-info">
                    <strong>${$("playVsComputer")}</strong>
                    <span>${$("playVsComputerSub")}</span>
                  </div>
                  ${r==="solo"?'<span class="mode-check">✔</span>':""}
                </button>

                <button class="btn-mode-card ${r==="friend"?"mode-active":""}" id="btn-select-mode-friend">
                  <span class="mode-icon">👥</span>
                  <div class="mode-info">
                    <strong>${$("playWithFriend2p")}</strong>
                    <span>${$("playWithFriend2pSub")}</span>
                  </div>
                  ${r==="friend"?'<span class="mode-check">✔</span>':""}
                </button>
              </div>
            `:`
              <!-- 4-Player Options -->
              <div class="mode-options-grid mode-grid-3">
                <button class="btn-mode-card ${r==="4p_ai_pair"?"mode-active":""}" id="btn-select-mode-4p-pair">
                  <span class="mode-icon">🤝</span>
                  <div class="mode-info">
                    <strong>${$("twoFriendsAIPair")}</strong>
                    <span>${$("twoFriendsAIPairSub")}</span>
                  </div>
                  ${r==="4p_ai_pair"?'<span class="mode-check">✔</span>':""}
                </button>

                <button class="btn-mode-card ${r==="4p_solo"?"mode-active":""}" id="btn-select-mode-4p-solo">
                  <span class="mode-icon">🤖</span>
                  <div class="mode-info">
                    <strong>${$("solo4p")}</strong>
                    <span>${$("solo4pSub")}</span>
                  </div>
                  ${r==="4p_solo"?'<span class="mode-check">✔</span>':""}
                </button>

                <button class="btn-mode-card ${r==="4p_friends"?"mode-active":""}" id="btn-select-mode-4p-friends">
                  <span class="mode-icon">👥👥</span>
                  <div class="mode-info">
                    <strong>${$("fourFriendsOnline")}</strong>
                    <span>${$("fourFriendsOnlineSub")}</span>
                  </div>
                  ${r==="4p_friends"?'<span class="mode-check">✔</span>':""}
                </button>
              </div>
            `}

            <!-- Prominent Request Friend to Play on Same Board Button -->
            <div class="request-friend-banner">
              <button class="btn-request-friend-hero" id="btn-lobby-request-friend">
                <span class="rf-icon">📲</span>
                <div class="rf-content">
                  <strong>${$("requestFriendHero")}</strong>
                  <span>${$("requestFriendHeroSub")}</span>
                </div>
                <span class="rf-arrow">➔</span>
              </button>
            </div>
          </div>

          <!-- Step 3: Bet Stakes & Pot Selection -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">3</span>
              <span class="section-heading">${$("choosePotCoins")}</span>
            </div>
            
            <div class="bet-chips-grid">
              ${vi.map(l=>{const d=l===n,u=l*2,p=t>=l;return`
                  <button 
                    class="btn-lobby-tier ${d?"tier-selected":""} ${p?"":"tier-disabled"}"
                    data-bet="${l}"
                    ${p?"":'disabled title="Not enough coins"'}
                  >
                    <span class="tier-chip-icon">🪙</span>
                    <span class="tier-stake">${l.toLocaleString()}</span>
                    <span class="tier-pot-label">Pot: 🪙${u.toLocaleString()}</span>
                  </button>
                `}).join("")}
            </div>

            <!-- Pot Summary Card -->
            <div class="pot-preview-banner">
              <div class="preview-item">
                <span class="preview-label">${$("yourStake")}</span>
                <span class="preview-val stake-val">🪙 ${n.toLocaleString()}</span>
              </div>
              <div class="preview-arrow">➔</div>
              <div class="preview-item">
                <span class="preview-label">${$("winnerTakesPot")}</span>
                <span class="preview-val pot-val">🏆 🪙 ${a.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4: Start Game (Centered Down Middle) -->
        <div class="lobby-footer-center">
          <button class="btn-primary btn-start-game-lobby" id="btn-lobby-start-game">
            🎲 ${$("startGame")} (Pot: 🪙${a.toLocaleString()})
          </button>

          <div class="lobby-sub-actions">
            <button class="btn-sub-link" id="btn-lobby-rules">📜 ${$("rulesGuide")}</button>
            <span class="dot-sep">•</span>
            <button class="btn-sub-link" id="btn-lobby-history">📊 ${$("matchHistory")}</button>
            <span class="dot-sep">•</span>
            <button class="btn-sub-link" id="btn-lobby-switch-acc">🔄 ${$("switchAccount")}</button>
          </div>
        </div>
      </div>
    </div>
  `}class Hr{constructor(e={}){this.duration=e.duration||30,this.timeLeft=this.duration,this.timerId=null,this.isPaused=!1,this.onTick=e.onTick||(()=>{}),this.onWarning=e.onWarning||(()=>{}),this.onUrgent=e.onUrgent||(()=>{}),this.onTimeout=e.onTimeout||(()=>{})}start(){this.stop(),this.timeLeft=this.duration,this.isPaused=!1,this.onTick(this.timeLeft),this.timerId=setInterval(()=>{this.isPaused||(this.timeLeft--,this.onTick(this.timeLeft),this.timeLeft===10?this.onWarning(this.timeLeft):this.timeLeft===5?this.onUrgent(this.timeLeft):this.timeLeft<=0&&(this.stop(),this.onTimeout()))},1e3)}pause(){this.isPaused=!0}resume(){this.isPaused=!1}reset(){this.start()}stop(){this.timerId&&(clearInterval(this.timerId),this.timerId=null),this.isPaused=!1}getTimeLeft(){return this.timeLeft}}const ve={light(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(15)}catch{}},rollTumble(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([20,30,25])}catch{}},step(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(20)}catch{}},capture(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([50,40,80])}catch{}},baara(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([40,30,40,30,100])}catch{}},victory(){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([80,50,80,50,120,60,200])}catch{}}};class qr{constructor(){this.logs=[],this.rulesOpen=!1,this.mobileOpen=!1,this.mpModalOpen=!1,this.chatOpen=!1,this.betModalOpen=!1,this.gatePromptOpen=!1,this.loginModalOpen=!ie.isLoggedIn(),this.inLobby=ie.isLoggedIn(),this.playerCount=2,this.lobbyMode="solo",this.selectedBet=250,this.profileModalOpen=!1,this.exitModalOpen=!1,this.inactivityModalOpen=!1,this.awayDurationSec=0,this.backgroundTimestamp=null,this.loginError=null,this.soundMuted=!1,this.qrDataUrl=null,this.roomQrDataUrl=null,this.currentBet=250,this.matchPot=500,this.winnerAwarded=!1,this.chatMessages=[],this.activeChatToast=null,this.chatToastTimer=null,this.unreadChatCount=0,this.turnTimer=new Hr({duration:30,onTick:n=>this.renderTimerOnly(n),onWarning:()=>{this.soundMuted||te.playCoinStep()},onUrgent:()=>{this.soundMuted||te.playBonusRoll()},onTimeout:()=>this.handleTurnTimeout()});const e="https://maheshwar567.github.io/bharakhatta/",t=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";this.baseMobileUrl=t?e:window.location.href.split("?")[0].replace(/\/?$/,"/"),this.localWifiUrl="http://192.168.31.186:5173/",this.mpState={isConnected:!1,roomCode:null,myPlayerId:null,myTeam:null,isHost:!1,players:[],errorMsg:null},this.mpClient=new wr({onRoomCreated:n=>this.handleRoomCreated(n),onRoomJoined:n=>this.handleRoomJoined(n),onPlayerJoined:(n,i)=>this.handlePlayerJoined(n,i),onPlayerLeft:(n,i)=>this.handlePlayerLeft(n,i),onSyncRoll:n=>this.handleRemoteRoll(n),onSyncMove:n=>this.handleRemoteMove(n),onSyncRestart:()=>this.handleRemoteRestart(),onChatReceived:n=>this.handleChatReceived(n),onBetSynced:n=>this.handleBetSynced(n),onSyncTimeoutPass:n=>this.handleRemoteTimeoutPass(n),onStart4pAIPair:n=>this.handleStart4pAIPair(n),onSyncGameState:n=>this.handleRemoteGameState(n),onGate23Decision:n=>this.handleRemoteGate23Decision(n),onError:n=>{this.mpState.errorMsg=n,this.render()},onStatusChange:n=>{this.mpState.isConnected=n==="connected",this.render()}}),this.initDOM(),this.engine=new Ts({gameMode:"2p",diceMode:"cowries",onStateChange:()=>{this.engine&&this.render()},onLog:n=>this.addLog(n),onTurnChange:n=>this.handleTurnChange(n),onBothGatesOpen:()=>this.handleBothGatesOpen()}),this.bindGlobalKeys(),this.initMobileAudioUnlock(),this.initBackgroundDetection(),this.checkUrlRoomParam(),!this.loginModalOpen&&!this.inLobby&&this.turnTimer.start(),this.render()}startGame(e="solo",t=250){if(!Y.canAfford(t))return alert(`You don't have enough coins (Need 🪙${t.toLocaleString()}! Current: 🪙${Y.getBalance().toLocaleString()})`),!1;Y.placeBet(t),this.currentBet=t,this.matchPot=t*2,this.inLobby=!1;const n=ie.getCurrentUser(),i=n?n.nickName||n.name:"Player 1";return this.playerCount===4?e==="4p_solo"?(this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${i} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:"Teammate AI",avatar:"🦁",color:"#d35400",isAI:!0},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 4-Player Solo match started! You & Teammate AI (Team 1) vs System AI Pair (Team 2). Pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),!0):(this.mpModalOpen=!0,this.turnTimer.stop(),this.mpState.roomCode||this.mpClient.createRoom("4p",i),this.render(),!0):e==="friend"?(this.mpModalOpen=!0,this.turnTimer.stop(),this.mpState.roomCode||this.mpClient.createRoom("2p",i),this.render(),!0):(this.engine.gameMode="2p",this.engine.initGame([{id:1,team:1,name:`${i} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI (Top)",avatar:"🦚",color:"#27ae60",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🎲 2-Player Game started vs System AI! Stake: 🪙${t.toLocaleString()} | Winner Pot: 🪙${this.matchPot.toLocaleString()}`),this.render(),!0)}async checkUrlRoomParam(){const t=new URLSearchParams(window.location.search).get("room");if(t){this.mpModalOpen=!0;try{await this.mpClient.joinRoom(t,"Player 2")}catch(n){console.error("Auto-join room failed:",n)}}}initMobileAudioUnlock(){const e=()=>{te.init(),ve.light(),document.removeEventListener("touchstart",e),document.removeEventListener("pointerdown",e)};document.addEventListener("touchstart",e,{passive:!0}),document.addEventListener("pointerdown",e,{passive:!0})}initDOM(){const e=document.getElementById("app");e.innerHTML=`
      <div id="header-container"></div>
      
      <main class="game-main-content">
        <div id="board-container" class="board-wrapper"></div>
        <div id="cowrie-container" style="width: 100%; display: flex; justify-content: center;"></div>
        <div id="ticker-container" style="width: 100%; display: flex; justify-content: center;"></div>
      </main>

      <div id="modal-container"></div>
    `}addLog(e){this.logs.push(e),this.logs.length>40&&this.logs.shift();const t=document.getElementById("ticker-container");t&&(t.innerHTML=_n(this.logs))}bindGlobalKeys(){window.addEventListener("keydown",e=>{e.code==="Space"&&!this.rulesOpen&&!this.mobileOpen&&!this.mpModalOpen&&!this.chatOpen&&!this.betModalOpen&&(e.preventDefault(),this.attemptRoll()),e.key==="Escape"&&(this.rulesOpen=!1,this.mobileOpen=!1,this.mpModalOpen=!1,this.chatOpen=!1,this.betModalOpen=!1,this.render())})}handleTurnChange(e){this.turnTimer.reset(),(this.mpState.roomCode?e.id===this.mpState.myPlayerId:!e.isAI)&&!this.soundMuted&&(te.playBaaraTwelve(),ve.light()),this.render()}handleTurnTimeout(){const e=this.engine.getStateSnapshot();if(e.status===K.GAME_OVER)return;(this.mpState.roomCode?e.currentPlayer.id===this.mpState.myPlayerId:!e.currentPlayer.isAI)?(this.engine.log("⏰ Time's up (30s)! No roll chance. Turn forfeited to next player."),this.mpState.roomCode&&this.mpClient.sendTimeoutPass(this.mpState.myPlayerId),this.turnTimer.reset(),this.engine.advanceTurn()):this.mpState.roomCode?(this.engine.log("⏰ Opponent timed out (30s)! No roll chance. Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn()):e.currentPlayer.isAI&&(this.engine.log("⏰ System AI timed out (30s)! Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn())}initBackgroundDetection(){document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")this.backgroundTimestamp=Date.now();else if(document.visibilityState==="visible"&&this.backgroundTimestamp){const e=Math.floor((Date.now()-this.backgroundTimestamp)/1e3);this.backgroundTimestamp=null,e>=120&&this.engine&&this.engine.status!==K.GAME_OVER&&!this.loginModalOpen&&this.handleInactivityForfeit(e)}})}handleInactivityForfeit(e){if(this.awayDurationSec=e,this.turnTimer.stop(),this.mpState.roomCode){this.engine.log(`⏰ Match forfeited: You were away in other apps for >2 minutes (${Math.floor(e/60)}m ${e%60}s).`),this.mpClient.sendTimeoutPass(this.mpState.myPlayerId);const t=this.mpState.myTeam||1,n=t===1?2:1;this.engine.winner={team:n,player:this.engine.players.find(i=>i.team===n)||{name:"Opponent",team:n}},this.engine.status=K.GAME_OVER,ie.recordMatch({matchId:`m_${Date.now()}`,opponent:t===1?this.mpClient.guestName:this.mpClient.hostName,mode:`Online Room #${this.mpState.roomCode}`,bet:this.currentBet,pot:this.matchPot,result:"FORFEITED",coinsChange:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:t===1?this.engine.team1Kills:this.engine.team2Kills})}else this.engine.log(`⏸️ You were away in other apps for >2 minutes (${Math.floor(e/60)}m ${e%60}s).`);this.inactivityModalOpen=!0,this.render()}renderTimerOnly(e){const t=document.querySelector(".timer-seconds"),n=document.querySelector(".turn-timer-pill"),i=document.querySelector(".turn-timer-sub");t&&(t.textContent=`${e}s`),i&&(i.textContent=`⏳ ${e}s`),n&&(n.classList.remove("timer-normal","timer-warning","timer-urgent"),e<=5?n.classList.add("timer-urgent"):e<=10?n.classList.add("timer-warning"):n.classList.add("timer-normal"))}handleChatReceived(e){this.chatMessages.push(e),this.chatOpen||(this.unreadChatCount++,this.showChatToast(e)),this.soundMuted||te.playCoinStep(),this.render()}showChatToast(e){this.activeChatToast=e,this.chatToastTimer&&clearTimeout(this.chatToastTimer),this.chatToastTimer=setTimeout(()=>{this.activeChatToast=null,this.render()},3500)}handleBetSynced(e){this.currentBet=e,this.matchPot=e*2,this.engine.log(`🪙 Match bet set to 🪙${e}! Pot: 🪙${this.matchPot.toLocaleString()}`),this.render()}attemptRoll(){const e=this.engine.getStateSnapshot();if(e.status!==K.WAITING_FOR_ROLL||this.mpState.roomCode&&e.currentPlayer.id!==this.mpState.myPlayerId||!this.mpState.roomCode&&e.currentPlayer.isAI)return;ve.rollTumble(),this.turnTimer.reset();const t=this.engine.roll();this.mpState.roomCode&&t&&(this.mpClient.sendRoll(t),setTimeout(()=>{this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot())},650))}attemptMove(e){const t=this.engine.getStateSnapshot();t.status===K.WAITING_FOR_MOVE&&(this.mpState.roomCode&&t.currentPlayer.id!==this.mpState.myPlayerId||(ve.step(),this.turnTimer.reset(),this.engine.executeMove(e),this.mpState.roomCode&&(this.mpClient.sendMove(e),setTimeout(()=>{this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot())},700))))}async handleRoomCreated(e){this.mpState.roomCode=e.roomCode,this.mpState.myPlayerId=e.playerId,this.mpState.myTeam=e.team,this.mpState.isHost=!0,this.mpState.players=e.players,this.mpState.errorMsg=null,this.winnerAwarded=!1,Y.placeBet(this.currentBet),this.matchPot=this.currentBet*2,this.engine.isMultiplayer=!0,this.engine.isHost=!0;const t=ie.getCurrentUser(),i=[{id:1,team:1,name:`${t?t.nickName||t.name:"Player 1"} (You)`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"Player 2 (Friend)",avatar:"🦚",color:"#27ae60",isAI:!1}];this.engine.initGame(i),this.turnTimer.start();const r=`${this.baseMobileUrl}?room=${e.roomCode}`;this.roomQrDataUrl=await jt(r),this.engine.log(`🏠 Created Room #${e.roomCode} (Bet 🪙${this.currentBet}). Share code with friend!`),this.render()}async handleRoomJoined(e){this.mpState.roomCode=e.roomCode,this.mpState.myPlayerId=e.playerId,this.mpState.myTeam=e.team,this.mpState.isHost=!1,this.mpState.players=e.players,this.mpState.errorMsg=null,this.winnerAwarded=!1,e.bet&&(this.currentBet=e.bet,this.matchPot=e.bet*2),Y.placeBet(this.currentBet),this.engine.isMultiplayer=!0,this.engine.isHost=!1;const t=ie.getCurrentUser(),n=t?t.nickName||t.name:"Player 2",i=[{id:1,team:1,name:"Player 1 (Friend)",avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:`${n} (You)`,avatar:"🦚",color:"#27ae60",isAI:!1}];this.engine.initGame(i),this.turnTimer.start();const r=`${this.baseMobileUrl}?room=${e.roomCode}`;this.roomQrDataUrl=await jt(r),this.engine.log(`🤝 Joined Room #${e.roomCode}! You are Team ${e.team}. Match pot: 🪙${this.matchPot.toLocaleString()}`),this.render()}handlePlayerJoined(e,t){this.mpState.players=t,this.engine.log(`🎉 ${e.name} connected! Both players paired. Match pot: 🪙${this.matchPot.toLocaleString()}`),te.playBonusRoll(),this.turnTimer.reset(),this.mpState.isHost&&this.mpClient&&this.mpClient.sendGameState(this.engine.getStateSnapshot()),this.render()}handlePlayerLeft(e,t){this.mpState.players=t,this.engine.log("⚠️ Opponent disconnected."),this.render()}handleRemoteRoll(e){ve.rollTumble(),this.engine.status=K.ROLLING,te.playCowrieRoll(),this.engine.currentRoll=e,this.turnTimer.reset(),this.render(),setTimeout(()=>{this.engine.resolveRoll(e),this.render()},600)}handleRemoteMove(e){ve.step(),this.engine.executeMove(e,!0),this.turnTimer.reset(),this.render()}handleRemoteGameState(e){!e||!this.engine||(this.engine.applyStateSnapshot(e),this.render())}handleBothGatesOpen(){this.gatePromptOpen=!0,te.playBaaraTwelve(),this.render()}handleGate23Decision(e){this.gatePromptOpen=!1,this.mpState.roomCode&&this.mpClient.sendGate23Decision(e),e==="continue"?(this.engine.log("⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad."),this.render()):e==="restart"&&(this.engine.log("🔄 Restarting match by mutual agreement."),this.mpState.roomCode&&this.mpClient.sendRestart(),this.engine.initGame(),this.turnTimer.start(),this.render())}handleRemoteGate23Decision(e){this.gatePromptOpen=!1,e==="continue"?(this.engine.log("⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad."),this.render()):e==="restart"&&(this.engine.log("🔄 Opponent agreed to restart match from scratch."),this.engine.initGame(),this.turnTimer.start(),this.render())}handleRemoteRestart(){this.engine.initGame(),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log("🔄 Host restarted the game!"),this.render()}handleRemoteTimeoutPass(e){this.engine.log("⏰ Opponent timed out (30s)! No roll chance. Turn forfeited."),this.turnTimer.reset(),this.engine.advanceTurn()}handleStart4pAIPair(e){this.mpModalOpen=!1,e&&e.bet&&(this.currentBet=e.bet,this.matchPot=e.bet*2);const t=this.mpClient.hostName||"Host",n=this.mpClient.guestName||"Friend";this.engine.gameMode="4p",this.engine.initGame([{id:1,team:1,name:`${t} ${this.mpState.isHost?"(You)":""}`,avatar:"👑",color:"#e67e22",isAI:!1},{id:2,team:2,name:"System AI 1",avatar:"🦚",color:"#27ae60",isAI:!0},{id:3,team:1,name:`${n} ${this.mpState.isHost?"":"(You)"}`,avatar:"🦁",color:"#d35400",isAI:!1},{id:4,team:2,name:"System AI 2",avatar:"🦜",color:"#16a085",isAI:!0}]),this.winnerAwarded=!1,this.turnTimer.start(),this.engine.log(`🤝 4-Player Match Active! Team 1 (${t} & ${n}) vs Team 2 (System AI Opposite Pair). Pot: 🪙${this.matchPot.toLocaleString()}`),te.playBonusRoll(),this.render()}render(){if(!this.engine)return;const e=this.engine.getStateSnapshot(),t=document.getElementById("header-container"),n=document.getElementById("board-container"),i=document.getElementById("cowrie-container"),r=document.getElementById("ticker-container"),o=document.getElementById("modal-container"),a={user:ie.getCurrentUser(),walletCoins:Y.getBalance(),matchPot:this.matchPot,timeLeft:this.turnTimer.getTimeLeft(),unreadChatCount:this.unreadChatCount};t&&(t.innerHTML=Is(e,this.soundMuted,this.mpState,a)),n&&(n.innerHTML=_s(e,this.mpState)),i&&(i.innerHTML=Ps(e,this.mpState,this.turnTimer.getTimeLeft())),r&&(r.innerHTML=_n(this.logs));let c="";if(this.loginModalOpen?c+=Nr(!0,"","","",this.loginError):this.inLobby&&(c+=jr({user:ie.getCurrentUser(),walletCoins:Y.getBalance(),selectedBet:this.selectedBet,playerCount:this.playerCount,selectedMode:this.lobbyMode})),this.profileModalOpen){const l=ie.getCurrentUser(),d=ie.getStats(),u=ie.getHistory();c+=Dr(!0,l,d,u)}if(this.exitModalOpen&&(c+=Fr()),this.inactivityModalOpen&&(c+=Ur(!0,this.awayDurationSec,!!this.mpState.roomCode)),this.rulesOpen&&(c+=Es()),this.mobileOpen&&(c+=er(!0,this.qrDataUrl,this.baseMobileUrl)),this.mpModalOpen){const l=this.mpState.roomCode?`${this.baseMobileUrl}?room=${this.mpState.roomCode}`:"";c+=tr(!0,this.mpState,this.roomQrDataUrl,l)}if(this.gatePromptOpen&&(c+=Gr()),this.chatOpen&&(c+=ir(!0,this.chatMessages,this.mpState.myPlayerId||1)),this.betModalOpen&&(c+=cr(!0,Y.getBalance(),this.currentBet,this.mpState.roomCode?"multiplayer":"solo")),this.activeChatToast&&(c+=sr(this.activeChatToast)),e.winner){if(!this.winnerAwarded){this.winnerAwarded=!0,this.turnTimer.stop();const l=this.mpState.roomCode?this.mpState.myTeam:1,d=e.winner.team===l;d&&(Y.awardPot(this.matchPot),this.engine.log(`🏆 MATCH WON! You received the full pot: 🪙${this.matchPot.toLocaleString()} coins!`)),ie.recordMatch({matchId:`m_${Date.now()}`,opponent:this.mpState.roomCode?l===1?this.mpClient.guestName:this.mpClient.hostName:"System AI",mode:this.mpState.roomCode?`Online Room #${this.mpState.roomCode}`:"Solo vs AI",bet:this.currentBet,pot:this.matchPot,result:d?"WON":"LOST",coinsChange:d?this.matchPot-this.currentBet:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:l===1?e.team1Kills:e.team2Kills})}ve.victory(),c+=xs(e.winner)}o&&(o.innerHTML=c),this.attachEventListeners(e)}attachEventListeners(e){const t=document.getElementById("btn-roll-dice"),n=document.getElementById("palm-cupped-box");t&&(t.onclick=()=>this.attemptRoll()),n&&(n.onclick=()=>this.attemptRoll());const i=document.getElementById("btn-release-jail-t1");i&&(i.onclick=()=>{const x=e.validMoves.find(j=>j.type==="RELEASE_JAIL");x&&this.attemptMove(x)});const r=document.getElementById("btn-release-jail-t2");r&&(r.onclick=()=>{const x=e.validMoves.find(j=>j.type==="RELEASE_JAIL");x&&this.attemptMove(x)}),document.querySelectorAll(".coin-selectable").forEach(x=>{x.onclick=j=>{j.stopPropagation();const ee=x.getAttribute("data-coin-id"),X=e.validMoves.find(fe=>fe.coin&&fe.coin.id===ee);if(X)this.attemptMove(X);else if(e.validMoves.some(fe=>fe.type==="RELEASE_JAIL")){const fe=e.validMoves.find(tt=>tt.type==="RELEASE_JAIL");fe&&this.attemptMove(fe)}}}),document.querySelectorAll(".cell-valid-target").forEach(x=>{x.onclick=()=>{const j=parseInt(x.getAttribute("data-r"),10),ee=parseInt(x.getAttribute("data-c"),10),X=e.validMoves.find(fe=>fe.targetCoord&&fe.targetCoord.r===j&&fe.targetCoord.c===ee);X&&this.attemptMove(X)}});const c=document.getElementById("btn-open-multiplayer"),l=document.getElementById("btn-open-mp-badge");c&&(c.onclick=()=>{this.mpModalOpen=!0,this.render()}),l&&(l.onclick=()=>{this.mpModalOpen=!0,this.render()});const d=document.getElementById("btn-open-chat"),u=document.getElementById("btn-close-chat");d&&(d.onclick=()=>{this.chatOpen=!0,this.unreadChatCount=0,this.render()}),u&&(u.onclick=()=>{this.chatOpen=!1,this.render()});const p=document.getElementById("btn-send-chat"),m=document.getElementById("input-chat-text"),y=(x=null)=>{let j=x;if(!j&&m&&(j=m.value.trim(),m.value=""),!j)return;const ee=ie.getCurrentUser(),X=ee?ee.nickName||ee.name:this.mpState.myPlayerId===2?"Player 2":"Player 1";if(this.mpState.roomCode)this.mpClient.sendChat(j,X);else{const fe={senderId:1,senderName:X,text:j,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.handleChatReceived(fe),this.engine.players&&this.engine.players[1]&&this.engine.players[1].isAI&&setTimeout(()=>{const tt=["బాగుంది! కానీ సెంటర్ హోమ్ నాదే! (Nice! But the Center is mine!) 🦚","కట్టా పడకుండా జాగ్రత్త మిత్రమా! (Watch out for Katta strike!) 💥","హాహా! బాఱ 12 పడితే నేనే విజేత! (Haha! If I roll Baara 12, I win!) 🎲","మంచి మూవ్! చూద్దాం ఎవరు గెలుస్తారో! (Good move! Let's see who wins!) 👑","గువ్వలు నా వైపే ఉన్నాయి! (The cowries favor me!) 🐚"],as=tt[Math.floor(Math.random()*tt.length)];this.handleChatReceived({senderId:2,senderName:"System AI 🦚",text:as,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})},650)}};p&&(p.onclick=()=>y()),m&&(m.onkeydown=x=>{x.key==="Enter"&&y()}),document.querySelectorAll(".btn-smiley-chip").forEach(x=>{x.onclick=()=>{const j=x.getAttribute("data-emoji");j&&y(j)}}),document.querySelectorAll(".btn-quick-taunt").forEach(x=>{x.onclick=()=>{const j=parseInt(x.getAttribute("data-taunt-index"),10),ee=bi[j];ee&&y(ee.text)}});const v=document.getElementById("btn-open-wallet"),A=document.getElementById("btn-open-bet"),T=document.getElementById("btn-close-bet");v&&(v.onclick=()=>{this.betModalOpen=!0,this.render()}),A&&(A.onclick=()=>{this.betModalOpen=!0,this.render()}),T&&(T.onclick=()=>{this.betModalOpen=!1,this.render()}),document.querySelectorAll(".bet-chip").forEach(x=>{x.onclick=()=>{const j=parseInt(x.getAttribute("data-bet-amount"),10);j&&Y.canAfford(j)&&(this.currentBet=j,this.render())}});const L=document.getElementById("btn-confirm-bet");L&&(L.onclick=()=>{Y.canAfford(this.currentBet)&&(this.matchPot=this.currentBet*2,this.mpState.roomCode&&this.mpClient.sendBet(this.currentBet),this.betModalOpen=!1,this.engine.log(`🪙 Bet set to 🪙${this.currentBet}! Total pot: 🪙${this.matchPot.toLocaleString()}`),this.render())});const P=document.getElementById("btn-claim-village-bonus");P&&(P.onclick=()=>{Y.claimRefill()&&(te.playBonusRoll(),ve.light(),this.engine.log("🎁 Claimed Village Bonus! +500 Coins added to wallet."),this.render())});const w=document.getElementById("btn-action-create-room");w&&(w.onclick=async()=>{const x=document.getElementById("input-host-name"),j=document.getElementById("select-mp-mode"),ee=x?x.value.trim():"Player 1",X=j?j.value:"2p";await this.mpClient.createRoom(X,ee)});const J=document.getElementById("btn-action-join-room");J&&(J.onclick=async()=>{const x=document.getElementById("input-join-code"),j=document.getElementById("input-join-name"),ee=x?x.value.trim():"",X=j?j.value.trim():"Player 2";if(!ee){alert("Please enter the Board Number (e.g. BK-260915-101-482).");return}await this.mpClient.joinRoom(ee,X)});const _=document.getElementById("btn-copy-board-number");_&&(_.onclick=()=>{const x=document.getElementById("text-board-number");x&&(navigator.clipboard.writeText(x.textContent.trim()),_.textContent="✅ Copied!",setTimeout(()=>{_&&(_.textContent="📋 Copy")},1800))});const B=document.getElementById("btn-start-4p-ai-pair");B&&(B.onclick=()=>{this.mpClient.sendStart4pAIPair(),this.handleStart4pAIPair({bet:this.currentBet})});const M=document.getElementById("btn-copy-room-link");M&&(M.onclick=()=>{const x=document.getElementById("input-mp-room-link");x&&(navigator.clipboard.writeText(x.value),M.textContent="✅ Copied!",setTimeout(()=>{M&&(M.textContent="📋 Copy Link")},1800))});const k=document.getElementById("btn-leave-room");k&&(k.onclick=()=>{this.mpClient.leaveRoom(),this.mpState.roomCode=null,this.mpState.players=[],this.mpModalOpen=!1,this.winnerAwarded=!1,this.engine.initGame(),this.turnTimer.start(),this.render()});const g=document.getElementById("btn-mp-play-now");g&&(g.onclick=()=>{this.mpModalOpen=!1,this.render()});const b=document.getElementById("btn-close-mp"),I=document.getElementById("btn-modal-mp-close");b&&(b.onclick=()=>{this.mpModalOpen=!1,this.render()}),I&&(I.onclick=()=>{this.mpModalOpen=!1,this.render()});const E=document.getElementById("btn-open-mobile");E&&(E.onclick=async()=>{this.qrDataUrl||(this.qrDataUrl=await jt(this.baseMobileUrl)),this.mobileOpen=!0,this.render()});const F=document.getElementById("btn-close-mobile"),ne=document.getElementById("btn-modal-mobile-done");F&&(F.onclick=()=>{this.mobileOpen=!1,this.render()}),ne&&(ne.onclick=()=>{this.mobileOpen=!1,this.render()});const le=document.getElementById("btn-open-rules");le&&(le.onclick=()=>{this.rulesOpen=!0,this.render()});const Ce=document.getElementById("btn-close-rules"),ge=document.getElementById("btn-modal-got-it");Ce&&(Ce.onclick=()=>{this.rulesOpen=!1,this.render()}),ge&&(ge.onclick=()=>{this.rulesOpen=!1,this.render()});const ae=document.getElementById("btn-toggle-dice");ae&&(ae.onclick=()=>{this.engine.diceMode=this.engine.diceMode==="cowries"?"die":"cowries",ve.light(),this.render()});const f=document.getElementById("btn-toggle-sound");f&&(f.onclick=()=>{this.soundMuted=te.toggleMute(),ve.light(),this.render()});const h=document.getElementById("btn-restart-game");h&&(h.onclick=()=>{confirm("Start a new match?")&&(this.engine.initGame(),this.winnerAwarded=!1,this.turnTimer.start(),this.mpState.roomCode&&this.mpClient.sendRestart())});const C=document.getElementById("btn-victory-restart");C&&(C.onclick=()=>{this.winnerAwarded=!1,this.turnTimer.stop(),this.inLobby=!0,this.render()});const O=document.getElementById("btn-header-login");O&&(O.onclick=()=>{this.loginModalOpen=!0,this.loginError=null,this.render()});const G=document.getElementById("btn-submit-login"),N=document.getElementById("input-login-mobile"),U=document.getElementById("input-login-fullname"),S=document.getElementById("input-login-nickname"),D=document.getElementById("nickname-preview-badge"),H=()=>{if(!D)return;const x=U?U.value:"",j=S?S.value:"";D.textContent=rn(x,j)};U&&(U.oninput=H),S&&(S.oninput=H);const V=()=>{if(!N)return;const x=N.value,j=U?U.value:"",ee=S?S.value:"",X=ie.login(x,j,ee);X.success?(this.loginModalOpen=!1,this.loginError=null,this.inLobby=!0,this.engine.players&&this.engine.players[0]&&(this.engine.players[0].name=X.user.nickName||X.user.name),this.engine.log(`👤 Logged in as ${X.user.nickName||X.user.name}. ${X.isNewUser?"🪙1,000 joining bonus credited!":"Profile & history restored."}`),this.render()):(this.loginError=X.error,this.render())};G&&(G.onclick=V),N&&(N.onkeydown=x=>{x.key==="Enter"&&V()}),U&&(U.onkeydown=x=>{x.key==="Enter"&&V()}),S&&(S.onkeydown=x=>{x.key==="Enter"&&V()});const z=document.getElementById("btn-count-2p"),W=document.getElementById("btn-count-4p");z&&(z.onclick=()=>{this.playerCount=2,this.lobbyMode="solo",this.render()}),W&&(W.onclick=()=>{this.playerCount=4,this.lobbyMode="4p_ai_pair",this.render()});const Q=document.getElementById("btn-select-mode-solo"),q=document.getElementById("btn-select-mode-friend"),se=document.getElementById("btn-select-mode-4p-pair"),de=document.getElementById("btn-select-mode-4p-solo"),ue=document.getElementById("btn-select-mode-4p-friends");Q&&(Q.onclick=()=>{this.lobbyMode="solo",this.render()}),q&&(q.onclick=()=>{this.lobbyMode="friend",this.render()}),se&&(se.onclick=()=>{this.lobbyMode="4p_ai_pair",this.render()}),de&&(de.onclick=()=>{this.lobbyMode="4p_solo",this.render()}),ue&&(ue.onclick=()=>{this.lobbyMode="4p_friends",this.render()});const me=document.getElementById("btn-lobby-request-friend");me&&(me.onclick=()=>{const x=ie.getCurrentUser(),j=x?x.nickName||x.name:"Player 1",ee=this.playerCount===4?"4p":"2p";this.mpModalOpen=!0,this.mpState.roomCode||this.mpClient.createRoom(ee,j),this.render()}),document.querySelectorAll(".btn-lobby-tier").forEach(x=>{x.onclick=()=>{const j=parseInt(x.getAttribute("data-bet"),10);j&&(this.selectedBet=j,this.render())}});const ye=document.getElementById("btn-lobby-start-game");ye&&(ye.onclick=()=>{this.startGame(this.lobbyMode,this.selectedBet)});const pe=document.getElementById("btn-lobby-profile");pe&&(pe.onclick=()=>{this.profileModalOpen=!0,this.render()});const Je=document.getElementById("btn-lobby-rules");Je&&(Je.onclick=()=>{this.rulesOpen=!0,this.render()});const We=document.getElementById("btn-lobby-history");We&&(We.onclick=()=>{this.profileModalOpen=!0,this.render()});const Ke=document.getElementById("btn-lobby-switch-acc");Ke&&(Ke.onclick=()=>{ie.logout(),this.inLobby=!1,this.loginModalOpen=!0,this.loginError=null,this.render()});const we=document.getElementById("btn-open-profile"),Ye=document.getElementById("btn-close-profile"),Le=document.getElementById("btn-profile-done"),Qe=document.getElementById("btn-switch-account");we&&(we.onclick=()=>{this.profileModalOpen=!0,this.render()}),Ye&&(Ye.onclick=()=>{this.profileModalOpen=!1,this.render()}),Le&&(Le.onclick=()=>{this.profileModalOpen=!1,this.render()}),Qe&&(Qe.onclick=()=>{ie.logout(),this.profileModalOpen=!1,this.inLobby=!1,this.loginModalOpen=!0,this.loginError=null,this.render()});const Xe=document.getElementById("btn-open-exit"),Ne=document.getElementById("btn-close-exit"),De=document.getElementById("btn-cancel-exit"),Be=document.getElementById("btn-confirm-exit");Xe&&(Xe.onclick=()=>{this.exitModalOpen=!0,this.render()}),Ne&&(Ne.onclick=()=>{this.exitModalOpen=!1,this.render()}),De&&(De.onclick=()=>{this.exitModalOpen=!1,this.render()}),Be&&(Be.onclick=()=>{const x=this.mpState.roomCode?this.mpState.myTeam:1;ie.recordMatch({matchId:`m_${Date.now()}`,opponent:this.mpState.roomCode?x===1?this.mpClient.guestName:this.mpClient.hostName:"System AI",mode:this.mpState.roomCode?`Online Room #${this.mpState.roomCode}`:"Solo vs AI",bet:this.currentBet,pot:this.matchPot,result:"FORFEITED",coinsChange:-this.currentBet,durationSec:Math.round((Date.now()-this.engine.stats.startTime)/1e3),kills:x===1?this.engine.team1Kills:this.engine.team2Kills}),this.mpState.roomCode&&(this.mpClient.sendTimeoutPass(this.mpState.myPlayerId),this.mpClient.leaveRoom()),this.exitModalOpen=!1,this.turnTimer.stop(),this.inLobby=!0,this.engine.log("🚪 You exited the match."),this.render()});const Ze=document.getElementById("btn-inactivity-dismiss");Ze&&(Ze.onclick=()=>{this.inactivityModalOpen=!1,this.turnTimer.stop(),this.inLobby=!0,this.render()});const et=document.getElementById("btn-gate-continue");et&&(et.onclick=()=>this.handleGate23Decision("continue"));const yn=document.getElementById("btn-gate-restart");yn&&(yn.onclick=()=>this.handleGate23Decision("restart"));const bn=document.getElementById("btn-toggle-lang");bn&&(bn.onclick=()=>{Tn(),this.render()});const vn=document.getElementById("btn-lobby-lang-toggle");vn&&(vn.onclick=()=>{Tn(),this.render()})}}function li(){new qr}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",li):li();
