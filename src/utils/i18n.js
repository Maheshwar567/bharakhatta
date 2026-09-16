// Comprehensive Telugu and English Localization Dictionary for Bharakhatta

export const LANGUAGES = {
  EN: "en",
  TE: "te"
};

let currentLanguage = "en";
try {
  const saved = localStorage.getItem("bk_language");
  if (saved === "te" || saved === "en") {
    currentLanguage = saved;
  }
} catch (_) {}

export function getLanguage() {
  return currentLanguage;
}

export function setLanguage(lang) {
  if (lang === "te" || lang === "en") {
    currentLanguage = lang;
    try {
      localStorage.setItem("bk_language", lang);
    } catch (_) {}
  }
  return currentLanguage;
}

export function toggleLanguage() {
  const next = currentLanguage === "en" ? "te" : "en";
  return setLanguage(next);
}

export const TRANSLATIONS = {
  en: {
    // App & Header
    appTitle: "BHARAKHATTA",
    appSubtitle: "Traditional 7x7 Village Cowrie Board Game",
    gameCoins: "Game Coins",
    name: "Name",
    potCoins: "Pot Coins",
    room: "Room",
    boardNumber: "Board Number",
    chat: "Chat",
    playWithFriend: "Play with Friend",
    bet: "Bet",
    exit: "Exit",
    rules: "Rules",
    
    // Lobby
    selectPlayerCount: "Choose Player Count (2 or 4)",
    twoPlayers: "2 Players",
    twoPlayersSub: "1 vs 1 Head to Head",
    fourPlayers: "4 Players",
    fourPlayersSub: "2 vs 2 Team Match (2 Homes)",
    selectMode2p: "Select 2-Player Mode",
    selectMode4p: "Select 4-Player Mode",
    playVsComputer: "Play vs Computer (1v1)",
    playVsComputerSub: "Solo match with System AI",
    playWithFriend2p: "Play with Friend (1v1)",
    playWithFriend2pSub: "Invite friend on other mobile with Board #",
    twoFriendsAIPair: "2 Friends + 2 AI Pair",
    twoFriendsAIPairSub: "You & Friend (Team 1) vs System AI Pair (Team 2)",
    solo4p: "Solo (1 Human + 3 AI)",
    solo4pSub: "You & AI Partner vs 2 AI Opponents",
    fourFriendsOnline: "4 Friends Online",
    fourFriendsOnlineSub: "Send Board # to request friends",
    requestFriendHero: "Request Friend to Play on Same Board",
    requestFriendHeroSub: "Share Board Number, WhatsApp Invite & QR Code",
    choosePotCoins: "Choose Pot Coins / Bet Stakes",
    yourStake: "Your Stake",
    winnerTakesPot: "Winner Takes Pot",
    startGame: "Start Game",
    rulesGuide: "Rules Guide",
    matchHistory: "Match History",
    switchAccount: "Switch Account",
    
    // Cowries & Palm
    tossGuvvalu: "TOSS GUVVALU",
    tossingGuvvalu: "Tossing...",
    guvvaluInPalm: "Guvvalu in Palm",
    tapPalmToToss: "Guvvalu in Palm — Tap to Toss!",
    tossedOnMat: "Tossed on Board Mat",
    yourTurn: "👉 Your Turn!",
    waitingForTurn: "⏳ Turn: {name}",
    computerThinking: "Computer Thinking...",
    bonusRoll: "⭐ BONUS!",
    
    // Rolls
    roll_1: "Okkati (1)",
    roll_2: "Rendu (2)",
    roll_3: "Moodu (3)",
    roll_4: "Naalugu (4)",
    roll_5: "Aidu (5)",
    roll_6: "Aaru (6)",
    roll_12: "Baara! (12)",
    
    // Dual Gate 23 Prompt
    gate23Title: "⚔️ Both Homes Unlocked Gate 23!",
    gate23Msg: "Both Team 1 and Team 2 have killed an opponent coin and unlocked Gate 23! Both teams can now enter the inside 5/5 squad. Do you want to continue playing or start again?",
    btnContinueGame: "▶️ Continue Game",
    btnStartAgain: "🔄 Start Again",
    
    // Victory & Win Conditions
    victoryTitle: "VICTORY!",
    victoryDesc: "Team {team} won the match!",
    winReasonSquad: "🎉 ALL 6 COINS ENTERED 5/5 SQUAD! Team {team} has no coins left in the outer 7/7 track for the opponent to kill!",
    winReasonCenter: "🏆 All 6 coins reached the Center Sanctum (Final Home)!",
    rematchBtn: "🎲 Return to Lobby",
    
    // Multiplayer Modal
    mpTitle: "Request Friend to Play on Same Board",
    mpSubtitle: "Real-time multiplayer over Wi-Fi / Mobile Network",
    guaranteedBoardNumber: "GUARANTEED BOARD NUMBER",
    uniqueBnHint: "Guaranteed unique board number — will never repeat in match history!",
    whatsappShare: "Request Friend on WhatsApp",
    scanQrHint: "Friend can scan this with mobile camera to join instantly!",
    copyLink: "Copy Link",
    copyCode: "Copy",
    copied: "✅ Copied!",
    boardPlayers: "Board Players",
    startWithAIPair: "🤝 Start Now with System AI Opposite Pair",
    twoFriendsNotice: "2 Friends Connected! You two are Team 1. You can start right now with the System AI playing as the opposite pair (Team 2)!",
    waitingFriendNotice: "Waiting for your friend to open the link or enter Board Number on their phone...",
    allPlayersReady: "All players connected! Board match is active in real time.",
    generateBoardBtn: "🚀 Generate Board Number & Invite Friends",
    joinBoardBtn: "🤝 Join Board",
    yourName: "Your Name",
    matchType: "Match Type",
    joinExistingCard: "Join with Friend's Board Number",
    enterBnPlaceholder: "e.g. BK-260915-101-482",
    
    // Language Toggle
    langBtnText: "🌐 తెలుగు"
  },
  te: {
    // App & Header
    appTitle: "బాఱఖట్టా",
    appSubtitle: "సాంప్రదాయ 7x7 పల్లెటూరి గవ్వల బోర్డు ఆట",
    gameCoins: "గేమ్ కాయిన్స్",
    name: "పేరు",
    potCoins: "పాట్ కాయిన్స్",
    room: "రూమ్",
    boardNumber: "బోర్డు నంబర్",
    chat: "చాట్",
    playWithFriend: "మిత్రుడితో ఆట",
    bet: "బెట్",
    exit: "నిష్క్రమించు",
    rules: "నియమాలు",
    
    // Lobby
    selectPlayerCount: "ఆటగాళ్ల సంఖ్య ఎంచుకోండి (2 లేదా 4)",
    twoPlayers: "2 గురు ఆటగాళ్ళు",
    twoPlayersSub: "1 vs 1 ముఖాముఖి ఆట",
    fourPlayers: "4 గురు ఆటగాళ్ళు",
    fourPlayersSub: "2 vs 2 టీమ్ మ్యాచ్ (2 హోమ్స్)",
    selectMode2p: "2-ఆటగాళ్ల విధానం ఎంచుకోండి",
    selectMode4p: "4-ఆటగాళ్ల విధానం ఎంచుకోండి",
    playVsComputer: "కంప్యూటర్‌తో ఆడండి (1v1)",
    playVsComputerSub: "సిస్టమ్ AI తో సింగిల్ ప్లేయర్ ఆట",
    playWithFriend2p: "మిత్రుడితో ఆడండి (1v1)",
    playWithFriend2pSub: "బోర్డు నంబర్‌తో వేరే ఫోన్‌లో ఉన్న మిత్రుడిని ఆహ్వానించండి",
    twoFriendsAIPair: "2 గురు మిత్రులు + 2 AI జోడీ",
    twoFriendsAIPairSub: "మీరు & మిత్రుడు (టీమ్ 1) vs సిస్టమ్ AI జోడీ (టీమ్ 2)",
    solo4p: "సోలో (1 మనిషి + 3 AI)",
    solo4pSub: "మీరు & AI మిత్రుడు vs 2 AI ప్రత్యర్థులు",
    fourFriendsOnline: "4 గురు మిత్రులు ఆన్‌లైన్",
    fourFriendsOnlineSub: "బోర్డు నంబర్ పంపి మిత్రులను ఆహ్వానించండి",
    requestFriendHero: "ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",
    requestFriendHeroSub: "బోర్డు నంబర్, వాట్సాప్ లింక్ & QR కోడ్ షేర్ చేయండి",
    choosePotCoins: "పాట్ కాయిన్స్ / బెట్ పందెం ఎంచుకోండి",
    yourStake: "మీ పందెం",
    winnerTakesPot: "విజేతకు మొత్తం పాట్",
    startGame: "ఆట ప్రారంభించండి",
    rulesGuide: "ఆట నియమాలు",
    matchHistory: "మ్యాచ్ హిస్టరీ",
    switchAccount: "ఖాతా మార్చండి",
    
    // Cowries & Palm
    tossGuvvalu: "గువ్వలు విసరండి",
    tossingGuvvalu: "విసురుతున్నారు...",
    guvvaluInPalm: "అరచేతిలో గువ్వలు",
    tapPalmToToss: "అరచేతిలో గువ్వలు — విసరడానికి నొక్కండి!",
    tossedOnMat: "బోర్డు చాపపై పడిన గువ్వలు",
    yourTurn: "👉 మీ వంతు!",
    waitingForTurn: "⏳ {name} వంతు",
    computerThinking: "కంప్యూటర్ ఆలోచిస్తోంది...",
    bonusRoll: "⭐ బోనస్ టర్న్!",
    
    // Rolls
    roll_1: "ఒక్కటి (1)",
    roll_2: "రెండు (2)",
    roll_3: "మూడు (3)",
    roll_4: "నాలుగు (4)",
    roll_5: "ఐదు (5)",
    roll_6: "ఆరు (6)",
    roll_12: "బాఱ! (12)",
    
    // Dual Gate 23 Prompt
    gate23Title: "⚔️ రెండు హోమ్‌ల గేట్ 23 తెరుచుకుంది!",
    gate23Msg: "టీమ్ 1 మరియు టీమ్ 2 రెండూ కట్టా కొట్టి గేట్ 23 తెరిచాయి! రెండు జట్లూ ఇప్పుడు లోపలి 5/5 స్క్వాడ్‌లోకి ప్రవేశించవచ్చు. ఆటను ఇలాగే కొనసాగించాలా లేదా మళ్లీ మొదటి నుండి ప్రారంభించాలా?",
    btnContinueGame: "▶️ ఆట కొనసాగించు",
    btnStartAgain: "🔄 మళ్లీ ప్రారంభించు",
    
    // Victory & Win Conditions
    victoryTitle: "విజయం!",
    victoryDesc: "టీమ్ {team} ఘన విజయం సాధించింది!",
    winReasonSquad: "🎉 6 గువ్వలూ 5/5 స్క్వాడ్‌లోకి చేరాయి! బయటి 7/7 ట్రాక్‌లో ప్రత్యర్థి చంపడానికి ఏ కాయిన్ మిగల్లేదు! టీమ్ {team} విజేత!",
    winReasonCenter: "🏆 మొత్తం 6 గువ్వలూ సెంటర్ హోమ్ (సెంట్ మార్క్) చేరుకున్నాయి!",
    rematchBtn: "🎲 లాబీకి తిరిగి వెళ్ళు",
    
    // Multiplayer Modal
    mpTitle: "ఒకే బోర్డుపై ఆడటానికి మిత్రుడిని ఆహ్వానించండి",
    mpSubtitle: "Wi-Fi / మొబైల్ నెట్‌వర్క్ ద్వారా రియల్-టైమ్ మల్టీప్లేయర్",
    guaranteedBoardNumber: "ఖచ్చితమైన బోర్డు నంబర్",
    uniqueBnHint: "ప్రత్యేక బోర్డు నంబర్ — హిస్టరీలో ఎప్పటికీ పునరావృతం కాదు!",
    whatsappShare: "వాట్సాప్‌లో మిత్రుడిని ఆహ్వానించండి",
    scanQrHint: "వెంటనే జాయిన్ కావడానికి మిత్రుడు కెమెరాతో స్కాన్ చేయవచ్చు!",
    copyLink: "లింక్ కాపీ చేయండి",
    copyCode: "కాపీ",
    copied: "✅ కాపీ అయింది!",
    boardPlayers: "బోర్డు ఆటగాళ్ళు",
    startWithAIPair: "🤝 సిస్టమ్ AI జోడీతో ఇప్పుడే ఆడండి",
    twoFriendsNotice: "2 గురు మిత్రులు కనెక్ట్ అయ్యారు! మీరిద్దరూ టీమ్ 1. సిస్టమ్ AI ని ఎదుటి జోడీగా (టీమ్ 2) పెట్టి ఇప్పుడే ఆట మొదలుపెట్టవచ్చు!",
    waitingFriendNotice: "మిత్రుడు లింక్ ఓపెన్ చేయడం లేదా బోర్డు నంబర్ నమోదు చేయడం కోసం వేచి చూస్తున్నాం...",
    allPlayersReady: "ఆటగాళ్లంతా కనెక్ట్ అయ్యారు! మ్యాచ్ లైవ్‌లో ఉంది.",
    generateBoardBtn: "🚀 బోర్డు నంబర్ సృష్టించి ఆహ్వానించండి",
    joinBoardBtn: "🤝 బోర్డులో జాయిన్ అవ్వండి",
    yourName: "మీ పేరు",
    matchType: "మ్యాచ్ విధానం",
    joinExistingCard: "మిత్రుడి బోర్డు నంబర్‌తో జాయిన్ అవ్వండి",
    enterBnPlaceholder: "ఉదా: BK-260915-101-482",
    
    // Language Toggle
    langBtnText: "🌐 English"
  }
};

export function t(key, params = {}) {
  const lang = currentLanguage in TRANSLATIONS ? currentLanguage : "en";
  let text = TRANSLATIONS[lang][key] || TRANSLATIONS.en[key] || key;
  
  Object.keys(params).forEach(p => {
    text = text.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
  });
  
  return text;
}
