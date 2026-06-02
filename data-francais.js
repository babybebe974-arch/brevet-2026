<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🇫🇷 Flashcards Français</title>
  <script src="data-francais.js"></script>
  <style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{background:#000;font-family:'DM Sans',sans-serif;padding:1rem;color:#fff;}
    .container{max-width:1000px;margin:0 auto;background:#1a1a1a;border-radius:2rem;padding:1.5rem;border:1px solid #ffcc00;}
    h1{font-size:2rem;color:#ffcc00;}
    .sub{color:#aaa;margin-bottom:1rem;}
    .stats{background:#2a2a2a;border-radius:1rem;padding:0.8rem;margin-bottom:1rem;display:flex;justify-content:space-between;}
    .chapitres-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;max-height:320px;overflow-y:auto;margin-bottom:1rem;background:#2a2a2a;border-radius:1rem;padding:8px;}
    .ch-item{background:#111118;border:1px solid #333;border-radius:8px;padding:8px 12px;cursor:pointer;}
    .ch-item.selected{border-color:#ffcc00;background:rgba(255,204,0,0.1);}
    button{background:#1e2a3e;border:1px solid #5ecfb1;border-radius:40px;padding:8px 16px;color:#5ecfb1;cursor:pointer;}
    .btn-primary{background:#ffcc00;border-color:#ffcc00;color:#000;font-weight:700;}
    .flashcard{background:#2a2a2a;border-radius:1.5rem;padding:2rem;text-align:center;cursor:pointer;margin-top:1rem;}
    .question{font-size:1.1rem;margin-bottom:1rem;}
    .answer{color:#ffcc00;margin-top:1rem;display:none;}
    .back-link{display:inline-block;margin-top:1rem;color:#5ecfb1;}
  </style>
</head>
<body>
<div class="container">
  <h1>🇫🇷 Flashcards Français</h1>
  <div class="sub">Sélectionne plusieurs chapitres • 260 cartes</div>
  <div class="stats"><span>📚 <b id="nbCartes">0</b> cartes</span><span>✅ <b id="nbMaitrisees">0</b> maîtrisées</span><span>📈 <b id="nbProgress">0</b>%</span></div>
  <div class="chapitres-grid" id="chapitresGrid"></div>
  <div><button onclick="selectAll(true)">✅ Tout sélectionner</button> <button onclick="selectAll(false)">❌ Tout désélectionner</button> <button onclick="resetProgression()">🔄 Réinitialiser</button></div>
  <button id="startBtn" class="btn-primary" onclick="startSession()" disabled style="margin-top:1rem;">🎯 Démarrer</button>
  <div id="cardArea"></div>
  <a href="index.html" class="back-link">← Retour</a>
</div>
<script>
  let progression = {}, sessionCards = [], currentIndex = 0, currentCard = null;
  function getStorageKey() { return 'flashcards_francais_progression'; }
  function saveProgress() { localStorage.setItem(getStorageKey(), JSON.stringify(progression)); }
  function loadProgress() { const s = localStorage.getItem(getStorageKey()); if(s) progression = JSON.parse(s); else progression = {}; }
  function getCardKey(c) { return `${c.chapitre}_${c.q.substring(0,50)}`; }
  function getScore(k) { return progression[k]?.score || 0; }
  function setScore(k, v) { progression[k] = { score: Math.min(3, v) }; saveProgress(); updateStats(); }
  function getSelected() { let sel = []; for(let i=1;i<=26;i++) if(document.getElementById(`ch_${i}`)?.classList.contains('selected')) sel.push(i); return sel; }
  function getAllCards() { let sel = getSelected(), cards = []; for(let ch of sel) if(CHAPITRES_FR[ch]) for(let c of CHAPITRES_FR[ch].cartes) cards.push({...c, chapitre:ch, chapitreTitre:CHAPITRES_FR[ch].titre}); return cards; }
  function updateStats() { let cards = getAllCards(), maitrisees = 0; for(let c of cards) if(getScore(getCardKey(c)) >= 3) maitrisees++; document.getElementById('nbCartes').innerHTML = cards.length; document.getElementById('nbMaitrisees').innerHTML = maitrisees; document.getElementById('nbProgress').innerHTML = cards.length ? Math.round(maitrisees/cards.length*100)+'%' : '0%'; document.getElementById('startBtn').disabled = cards.length === 0; }
  function buildGrid() { let grid = document.getElementById('chapitresGrid'); grid.innerHTML = ''; for(let i=1;i<=26;i++) { let d = document.createElement('div'); d.className = 'ch-item'; d.id = `ch_${i}`; d.onclick = () => { d.classList.toggle('selected'); updateStats(); }; d.innerHTML = `${i}. ${CHAPITRES_FR[i].titre}`; grid.appendChild(d); } }
  function selectAll(val) { for(let i=1;i<=26;i++) document.getElementById(`ch_${i}`)?.classList.toggle('selected', val); updateStats(); }
  function resetProgression() { if(confirm('Réinitialiser ?')) { localStorage.removeItem(getStorageKey()); loadProgress(); updateStats(); } }
  function melanger(arr) { for(let i=arr.length-1;i>0;i--) { let j = Math.floor(Math.random()*(i+1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
  function selectDailyCards() { let all = getAllCards(); let news = all.filter(c => getScore(getCardKey(c)) === 0).slice(0,20); let errors = all.filter(c => getScore(getCardKey(c)) > 0 && getScore(getCardKey(c)) < 3).slice(0,10); let reviews = all.filter(c => getScore(getCardKey(c)) >= 3).slice(0,5); let session = [...news, ...errors, ...reviews]; let ids = new Set(); session = session.filter(c => { let k = getCardKey(c); if(ids.has(k)) return false; ids.add(k); return true; }); return melanger(session); }
  function startSession() { sessionCards = selectDailyCards(); if(sessionCards.length === 0) { alert('Aucune carte.'); return; } currentIndex = 0; showCard(); }
  function showCard() { if(currentIndex >= sessionCards.length) { document.getElementById('cardArea').innerHTML = '<div style="text-align:center;padding:1rem;">🎉 Session terminée !</div>'; return; } currentCard = sessionCards[currentIndex]; let niveau = getScore(getCardKey(currentCard)); document.getElementById('cardArea').innerHTML = `
    <div class="flashcard" onclick="revealAnswer()">
      <div style="font-size:0.7rem;color:#aaa;">${currentCard.chapitreTitre}</div>
      <div class="question">📖 ${currentCard.q}</div>
      <div class="answer" id="answer">📌 ${currentCard.r}</div>
      <div style="color:#5ecfb1;margin-top:1rem;">👆 Cliquez pour voir la réponse</div>
    </div>
    <div style="display:flex;gap:1rem;justify-content:center;margin-top:1rem;">
      <button onclick="reply(true)">✅ Je sais (${niveau}/3)</button>
      <button onclick="reply(false)">❌ Je ne sais pas</button>
    </div>
  `; }
  window.revealAnswer = function() { document.getElementById('answer').style.display = 'block'; };
  window.reply = function(ok) { let key = getCardKey(currentCard); let score = getScore(key); if(ok) score = Math.min(score+1,3); else score = Math.max(0,score-1); setScore(key, score); currentIndex++; showCard(); };
  loadProgress(); buildGrid(); updateStats();
</script>
</body>
</html>