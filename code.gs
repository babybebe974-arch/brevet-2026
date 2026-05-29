// ============================================================
//  BREVET 2026 — Script Apps Script CORRIGÉ (CORS + JSONP)
//  À coller dans Extensions > Apps Script de chaque Sheet
//  Déployer comme Web App (accès : Tout le monde)
// ============================================================

function doGet(e) {
  const action   = e.parameter.action || 'ping';
  const callback = e.parameter.callback; // JSONP support

  let result;
  if (action === 'ping')               result = { status: 'ok', msg: 'Fiche connectée' };
  else if (action === 'getProgression') result = getProgression();
  else if (action === 'getSessions')    result = getSessions();
  else if (action === 'getFlashcardsAujourdHui') result = getFlashcardsAujourdHui();
  else                                  result = { error: 'Action inconnue' };

  const json = JSON.stringify(result);

  // Si callback JSONP demandé
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  // Sinon JSON standard avec headers CORS
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const data   = JSON.parse(e.postData.contents);
  const action = data.action;
  let result;

  if (action === 'logSession')       result = logSession(data);
  else if (action === 'logAutomatismes') result = logAutomatismes(data);
  else if (action === 'logAnnale')   result = logAnnale(data);
  else if (action === 'updateFlashcard') result = updateFlashcard(data);
  else if (action === 'logOral')     result = logOral(data);
  else                               result = { error: 'Action inconnue' };

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── LECTURE : PROGRESSION ────────────────────────────────
function getProgression() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('🏠 Tableau de bord');
  if (!ws) return { error: 'Onglet introuvable' };

  const matieres = ['Mathématiques', 'Français', 'Histoire-Géographie', 'SVT', 'Physique-Chimie', 'Oral'];
  const result   = {};

  for (let i = 0; i < matieres.length; i++) {
    const row = 6 + i;
    result[matieres[i]] = {
      sessions:        ws.getRange(row, 2).getValue() || 0,
      scoreMoyAuto:    ws.getRange(row, 3).getValue() || 0,
      scoreMoyAnnales: ws.getRange(row, 4).getValue() || 0,
      pctNotions:      ws.getRange(row, 5).getValue() || 0,
      derniereSession: ws.getRange(row, 6).getValue() || '',
      statut:          ws.getRange(row, 8).getValue() || '🔴 À travailler',
    };
  }

  const today = new Date();
  const exam  = new Date('2026-06-30');
  const jours = Math.ceil((exam - today) / (1000 * 60 * 60 * 24));

  const wsS      = ss.getSheetByName('📅 Sessions');
  const nbSessions = wsS ? Math.max(0, wsS.getLastRow() - 2) : 0;

  return { matieres: result, joursRestants: jours, nbSessionsTotal: nbSessions };
}

// ── LECTURE : SESSIONS ───────────────────────────────────
function getSessions() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('📅 Sessions');
  if (!ws) return { sessions: [] };

  const last = ws.getLastRow();
  if (last < 3) return { sessions: [] };

  const startRow = Math.max(3, last - 14);
  const data     = ws.getRange(startRow, 1, last - startRow + 1, 6).getValues();

  return {
    sessions: data.reverse().map(row => ({
      date:     row[0] ? Utilities.formatDate(new Date(row[0]), 'Europe/Paris', 'dd/MM/yyyy') : '',
      matiere:  row[1],
      activite: row[2],
      duree:    row[3],
      score:    row[4],
      notes:    row[5],
    }))
  };
}

// ── LECTURE : FLASHCARDS ─────────────────────────────────
function getFlashcardsAujourdHui() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const ws    = ss.getSheetByName('🗂 Flashcards');
  if (!ws) return { flashcards: [], total: 0 };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const last  = ws.getLastRow();
  if (last < 3) return { flashcards: [], total: 0 };

  const data = ws.getRange(3, 1, last - 2, 6).getValues();
  const dues = [];

  data.forEach((row, i) => {
    if (!row[0] || !row[1]) return;
    const nextRev = row[5] ? new Date(row[5]) : null;
    if (!nextRev) return;
    nextRev.setHours(0, 0, 0, 0);
    if (nextRev <= today) dues.push({ rowIndex: i + 3, matiere: row[0], notion: row[1], definition: row[2], statut: row[3] });
  });

  return { flashcards: dues, total: dues.length };
}

// ── ÉCRITURE : SESSION ───────────────────────────────────
function logSession(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('📅 Sessions');
  if (!ws) return { error: 'Onglet Sessions introuvable' };
  ws.appendRow([new Date(), data.matiere||'', data.activite||'', data.duree||'', data.score||'', data.notes||'']);
  return { success: true };
}

// ── ÉCRITURE : AUTOMATISMES ──────────────────────────────
function logAutomatismes(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('⚡ Automatismes');
  if (!ws) return { error: 'Onglet Automatismes introuvable' };
  ws.appendRow([new Date(), data.matiere||'Mathématiques', data.serie||'', data.score||0, data.nbQuestions||'', data.notionsReussies||'', data.notionsRatees||'']);
  logSession({ matiere: data.matiere||'Mathématiques', activite: 'Automatismes — '+(data.serie||''), duree: 20, score: ((data.score||0)/6*20).toFixed(1), notes: 'Score : '+data.score+'/6' });
  return { success: true, score: data.score };
}

// ── ÉCRITURE : ANNALE ────────────────────────────────────
function logAnnale(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('📋 Annales');
  if (!ws) return { error: 'Onglet Annales introuvable' };
  ws.appendRow([new Date(), data.matiere||'', data.annee||'', data.exercice||'', data.score||'', data.pointsPerdus||'', data.bloque||'', data.aRetravailler||'']);
  return { success: true };
}

// ── ÉCRITURE : FLASHCARD ─────────────────────────────────
function updateFlashcard(data) {
  const ss  = SpreadsheetApp.getActiveSpreadsheet();
  const ws  = ss.getSheetByName('🗂 Flashcards');
  if (!ws) return { error: 'Onglet Flashcards introuvable' };
  const delai = data.statut === 'Maîtrisé' ? 7 : data.statut === 'En cours' ? 3 : 1;
  const next  = new Date();
  next.setDate(next.getDate() + delai);
  ws.getRange(data.rowIndex, 4).setValue(data.statut);
  ws.getRange(data.rowIndex, 5).setValue(new Date());
  ws.getRange(data.rowIndex, 6).setValue(next);
  return { success: true, prochaine: Utilities.formatDate(next, 'Europe/Paris', 'dd/MM/yyyy') };
}

// ── ÉCRITURE : ORAL ──────────────────────────────────────
function logOral(data) {
  const ss   = SpreadsheetApp.getActiveSpreadsheet();
  const ws   = ss.getSheetByName('🎤 Oral');
  if (!ws) return { error: 'Onglet Oral introuvable' };
  const last = Math.max(27, ws.getLastRow() + 1);
  ws.getRange(last, 1, 1, 6).setValues([[new Date(), data.duree||'', data.pointsForts||'', data.pointsFaibles||'', data.note||'', data.objectifSuivant||'']]);
  return { success: true };
}