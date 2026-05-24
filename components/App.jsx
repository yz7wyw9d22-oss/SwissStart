import { useState, useRef, useEffect } from “react”;

// ─── CONSTANTS ───────────────────────────────────────────────
const FREE_LIMIT = 3;

const SYSTEM_PROMPT = `Tu es SwissStart, un expert IA spécialisé dans la création d’entreprise en Suisse. Tu guides les entrepreneurs étape par étape avec des réponses précises, courtes et actionnables.

Tu réponds TOUJOURS en français. Sois direct, pratique, bienveillant.

Tu maîtrises parfaitement :

- Les formes juridiques suisses (Sàrl, SA, raison individuelle, association, fondation)
- Les démarches par canton (Genève, Vaud, Zurich, Berne, etc.)
- Les obligations AVS/AI, TVA, RC professionnelle
- Les coûts réels (notaire, capital, frais de registre du commerce)
- Les délais réalistes et les aides disponibles

Réponds en 3-5 phrases max. Utilise des listes courtes si nécessaire. Termine toujours par une question ou une action concrète.

Ne réponds qu’aux questions liées à la création ou gestion d’entreprise en Suisse.`;

const SUGGESTIONS = [
“Quelle forme juridique choisir ?”,
“Combien ça coûte de créer une Sàrl ?”,
“Par où commencer à Genève ?”,
“Quelles sont mes obligations fiscales ?”,
];

// ─── STYLES ──────────────────────────────────────────────────
const G = {
white: “#ffffff”,
off: “#fafaf8”,
ink: “#0e0e0c”,
mid: “#6e6e6a”,
faint: “#e8e8e4”,
gold: “#b8963e”,
};

const font = {
serif: “‘EB Garamond’, Georgia, serif”,
sans: “‘Instrument Sans’, ‘DM Sans’, system-ui, sans-serif”,
};

// ─── SHARED COMPONENTS ───────────────────────────────────────
const Logo = ({ onClick }) => (

  <div onClick={onClick} style={{ fontFamily: font.serif, fontSize: 18, fontWeight: 400, cursor: "pointer", letterSpacing: "0.01em" }}>
    SwissStart
  </div>
);

// ─── LANDING PAGE ─────────────────────────────────────────────
function Landing({ onStart }) {
const features = [
{ n: “i.”, title: “Forme juridique sur-mesure”, desc: “Sàrl, SA, raison individuelle — l’IA analyse votre situation et recommande la structure exacte.” },
{ n: “ii.”, title: “Documents générés”, desc: “Statuts, acte de constitution, contrats types — conformes au CO, prêts à soumettre.” },
{ n: “iii.”, title: “Checklist par canton”, desc: “Chaque canton a ses règles. SwissStart connaît les 26 par cœur.” },
{ n: “iv.”, title: “Simulateur de charges”, desc: “AVS, TVA, impôts cantonaux. Estimez tout avant de signer.” },
{ n: “v.”, title: “IA 24h/24”, desc: “Pas de rendez-vous. Pas d’attente. Une réponse en quelques secondes.” },
{ n: “vi.”, title: “Suivi complet”, desc: “De la première question jusqu’à l’immatriculation officielle.” },
];

return (
<div style={{ background: G.white, minHeight: “100vh”, fontFamily: font.sans, color: G.ink }}>
{/* NAV */}
<nav style={{ position: “fixed”, top: 0, left: 0, right: 0, zIndex: 50, height: 60, padding: “0 48px”, display: “flex”, alignItems: “center”, justifyContent: “space-between”, background: “rgba(255,255,255,0.92)”, backdropFilter: “blur(8px)”, borderBottom: `1px solid ${G.faint}` }}>
<Logo />
<div style={{ display: “flex”, alignItems: “center”, gap: 28 }}>
<a href=”#features” style={{ fontSize: 12, color: G.mid, textDecoration: “none”, fontWeight: 400 }}>Fonctionnalités</a>
<a href=”#pricing” style={{ fontSize: 12, color: G.mid, textDecoration: “none”, fontWeight: 400 }}>Tarifs</a>
<button onClick={onStart} style={{ fontSize: 12, fontWeight: 500, color: G.white, background: G.ink, border: “none”, padding: “9px 20px”, cursor: “pointer”, fontFamily: font.sans, letterSpacing: “0.03em” }}>
Essai gratuit
</button>
</div>
</nav>

```
  {/* HERO */}
  <section style={{ padding: "160px 48px 120px", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "flex-end", minHeight: "100vh", position: "relative" }}>
    <div style={{ paddingRight: 80 }}>
      <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: G.mid, marginBottom: 40, fontWeight: 400 }}>
        Intelligence artificielle · Suisse
      </p>
      <h1 style={{ fontFamily: font.serif, fontSize: "clamp(52px, 6.5vw, 88px)", fontWeight: 400, lineHeight: 1.02, letterSpacing: "-0.02em", color: G.ink }}>
        Créer en Suisse,<br /><em>sans avocat.</em>
      </h1>
      <p style={{ fontSize: 15, fontWeight: 300, color: G.mid, lineHeight: 1.75, marginTop: 32, maxWidth: 380 }}>
        L'IA qui connaît les 26 cantons, toutes les formes juridiques et chaque formulaire du registre du commerce.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 48 }}>
        <button onClick={onStart} style={{ fontFamily: font.sans, fontSize: 13, fontWeight: 500, color: G.white, background: G.ink, border: "none", padding: "14px 32px", cursor: "pointer", letterSpacing: "0.03em", transition: "opacity 0.2s" }}
          onMouseOver={e => e.target.style.opacity = "0.75"}
          onMouseOut={e => e.target.style.opacity = "1"}>
          Commencer — c'est gratuit
        </button>
        <a href="#features" style={{ fontSize: 13, color: G.mid, textDecoration: "none", borderBottom: `1px solid ${G.faint}`, paddingBottom: 2 }}>
          Comment ça marche
        </a>
      </div>
    </div>
    <div style={{ paddingBottom: 8, textAlign: "right" }}>
      <div style={{ fontFamily: font.serif, fontSize: "clamp(100px, 14vw, 160px)", fontWeight: 400, lineHeight: 0.85, color: G.ink, letterSpacing: "-0.04em" }}>26</div>
      <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: G.mid, marginTop: 16 }}>Cantons maîtrisés</p>
    </div>
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: G.faint }} />
  </section>

  {/* MARQUEE */}
  <div style={{ overflow: "hidden", borderBottom: `1px solid ${G.faint}`, borderTop: `1px solid ${G.faint}`, padding: "18px 0", background: G.off }}>
    <div style={{ display: "flex", animation: "marquee 28s linear infinite", whiteSpace: "nowrap" }}>
      {["Sàrl", "SA", "Raison individuelle", "Registre du commerce", "AVS · AI · APG", "TVA", "Genève · Zurich · Vaud", "Statuts", "Capital social",
        "Sàrl", "SA", "Raison individuelle", "Registre du commerce", "AVS · AI · APG", "TVA", "Genève · Zurich · Vaud", "Statuts", "Capital social"].map((t, i) => (
        <span key={i} style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: G.mid, padding: "0 40px", borderRight: `1px solid ${G.faint}`, flexShrink: 0 }}>{t}</span>
      ))}
    </div>
  </div>

  {/* FEATURES */}
  <section id="features" style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 48px" }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 72, borderBottom: `1px solid ${G.faint}`, paddingBottom: 24 }}>
      <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: G.mid, fontWeight: 400 }}>Ce que nous faisons</span>
      <h2 style={{ fontFamily: font.serif, fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", textAlign: "right" }}>
        Tout ce qu'il faut,<br /><em>rien de superflu.</em>
      </h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
      {features.map((f, i) => (
        <div key={i} style={{ padding: "36px 32px 36px 0", borderRight: (i + 1) % 3 !== 0 ? `1px solid ${G.faint}` : "none", borderBottom: i < 3 ? `1px solid ${G.faint}` : "none", paddingLeft: i % 3 !== 0 ? 32 : 0 }}>
          <p style={{ fontFamily: font.serif, fontSize: 13, fontStyle: "italic", color: G.mid, marginBottom: 20 }}>{f.n}</p>
          <h3 style={{ fontFamily: font.serif, fontSize: 20, fontWeight: 400, lineHeight: 1.2, marginBottom: 12, letterSpacing: "-0.01em" }}>{f.title}</h3>
          <p style={{ fontSize: 13, fontWeight: 300, color: G.mid, lineHeight: 1.75 }}>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* TESTIMONIAL */}
  <div style={{ borderTop: `1px solid ${G.faint}`, borderBottom: `1px solid ${G.faint}`, padding: "80px 48px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "center" }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: 2, color: G.ink, marginBottom: 16 }}>★★★★★</div>
        <div style={{ fontSize: 14, fontWeight: 500 }}>Karim M.</div>
        <div style={{ fontSize: 12, color: G.mid, marginTop: 4, fontWeight: 300 }}>Fondateur · Genève</div>
      </div>
      <blockquote style={{ fontFamily: font.serif, fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.35, color: G.ink, letterSpacing: "-0.01em", margin: 0 }}>
        "J'ai économisé 2 400 CHF en frais de conseil. SwissStart m'a guidé en trois heures là où j'aurais mis trois semaines."
      </blockquote>
    </div>
  </div>

  {/* PRICING */}
  <section id="pricing" style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 48px" }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 72, borderBottom: `1px solid ${G.faint}`, paddingBottom: 24 }}>
      <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: G.mid }}>Tarifs</span>
      <h2 style={{ fontFamily: font.serif, fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", textAlign: "right" }}>
        Transparent.<br /><em>Sans surprise.</em>
      </h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${G.faint}` }}>
      {[
        { tag: "Starter", price: "0", period: "pour toujours", desc: "Pour explorer avant de vous engager.", features: ["Diagnostic IA illimité", "Recommandation juridique", "Checklist de base", `${FREE_LIMIT} messages gratuits`], cta: "Commencer gratuitement", featured: false },
        { tag: "Pro", price: "29", period: "CHF / mois", desc: "Pour créer sans erreur, sans mauvaise surprise.", features: ["Tout le plan Starter", "Documents illimités", "Tous les cantons", "Simulateur de charges", "IA illimitée", "Support prioritaire"], cta: "Essai 14 jours gratuit", featured: true },
        { tag: "Business", price: "99", period: "CHF / mois", desc: "Pour fiduciaires et conseillers.", features: ["Tout le plan Pro", "10 dossiers simultanés", "Dashboard multi-clients", "Export PDF & Word", "Accès API"], cta: "Contacter l'équipe", featured: false },
      ].map((plan, i) => (
        <div key={i} style={{ padding: "44px 36px", borderRight: i < 2 ? `1px solid ${G.faint}` : "none", background: plan.featured ? G.ink : G.white, color: plan.featured ? G.white : G.ink, position: "relative" }}>
          {plan.featured && <span style={{ position: "absolute", top: -1, right: 28, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", background: G.white, color: G.ink, padding: "5px 12px", fontWeight: 500 }}>Recommandé</span>}
          <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: plan.featured ? "rgba(255,255,255,0.4)" : G.mid, marginBottom: 28 }}>{plan.tag}</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
            <span style={{ fontFamily: font.serif, fontSize: 16, color: plan.featured ? "rgba(255,255,255,0.4)" : G.mid, alignSelf: "flex-start", marginTop: 10 }}>CHF</span>
            <span style={{ fontFamily: font.serif, fontSize: 60, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>{plan.price}</span>
          </div>
          <p style={{ fontSize: 12, color: plan.featured ? "rgba(255,255,255,0.4)" : G.mid, fontWeight: 300, marginBottom: 16 }}>{plan.period}</p>
          <p style={{ fontSize: 13, color: plan.featured ? "rgba(255,255,255,0.5)" : G.mid, lineHeight: 1.65, fontWeight: 300, paddingBottom: 28, borderBottom: `1px solid ${plan.featured ? "rgba(255,255,255,0.1)" : G.faint}`, marginBottom: 28 }}>{plan.desc}</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
            {plan.features.map((f, j) => (
              <li key={j} style={{ fontSize: 13, fontWeight: 300, color: plan.featured ? "rgba(255,255,255,0.65)" : G.mid, paddingLeft: 16, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: plan.featured ? "rgba(255,255,255,0.2)" : G.faint }}>—</span>
                {f}
              </li>
            ))}
          </ul>
          <button onClick={onStart} style={{ width: "100%", padding: "13px 0", fontFamily: font.sans, fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", border: `1px solid ${plan.featured ? "rgba(255,255,255,0.2)" : G.faint}`, background: "transparent", color: plan.featured ? G.white : G.ink, cursor: "pointer", transition: "all 0.2s" }}
            onMouseOver={e => { e.currentTarget.style.background = plan.featured ? "rgba(255,255,255,0.1)" : G.ink; e.currentTarget.style.color = plan.featured ? G.white : G.white; }}
            onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = plan.featured ? G.white : G.ink; }}>
            {plan.cta}
          </button>
        </div>
      ))}
    </div>
  </section>

  {/* FOOTER CTA */}
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 48px 140px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "flex-end" }}>
    <h2 style={{ fontFamily: font.serif, fontSize: "clamp(44px, 6vw, 76px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: "-0.025em" }}>
      Votre entreprise<br />mérite un<br /><em>bon départ.</em>
    </h2>
    <div>
      <p style={{ fontSize: 15, fontWeight: 300, color: G.mid, lineHeight: 1.75, marginBottom: 36 }}>
        Rejoignez les entrepreneurs qui créent leur société en Suisse sans stress, sans heures facturées, sans mauvaises surprises.
      </p>
      <button onClick={onStart} style={{ fontFamily: font.sans, fontSize: 13, fontWeight: 500, color: G.white, background: G.ink, border: "none", padding: "14px 32px", cursor: "pointer", letterSpacing: "0.03em" }}>
        Démarrer maintenant
      </button>
    </div>
  </div>

  <footer style={{ borderTop: `1px solid ${G.faint}`, padding: "28px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <span style={{ fontFamily: font.serif, fontSize: 15 }}>SwissStart</span>
    <span style={{ fontSize: 11, color: G.mid, fontWeight: 300 }}>© 2026 · Genève · Pas un conseil juridique</span>
  </footer>

  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Instrument+Sans:wght@300;400;500&display=swap');
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    * { box-sizing: border-box; }
  `}</style>
</div>
```

);
}

// ─── AUTH MODAL ───────────────────────────────────────────────
function AuthModal({ onAuth, onClose }) {
const [mode, setMode] = useState(“signup”);
const [email, setEmail] = useState(””);
const [name, setName] = useState(””);
const [loading, setLoading] = useState(false);

const handle = async () => {
if (!email) return;
setLoading(true);
await new Promise(r => setTimeout(r, 800));
onAuth({ email, name: name || email.split(”@”)[0], plan: “free” });
};

return (
<div style={{ position: “fixed”, inset: 0, zIndex: 200, display: “flex”, alignItems: “center”, justifyContent: “center”, background: “rgba(14,14,12,0.5)”, backdropFilter: “blur(4px)” }}>
<div style={{ background: G.white, width: “100%”, maxWidth: 420, padding: “48px 44px”, position: “relative”, boxShadow: “0 32px 80px rgba(0,0,0,0.12)” }}>
<button onClick={onClose} style={{ position: “absolute”, top: 20, right: 24, background: “none”, border: “none”, fontSize: 18, color: G.mid, cursor: “pointer” }}>×</button>

```
    <div style={{ fontFamily: font.serif, fontSize: 16, fontWeight: 400, marginBottom: 8 }}>SwissStart</div>
    <h2 style={{ fontFamily: font.serif, fontSize: 28, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 8 }}>
      {mode === "signup" ? "Créer un compte" : "Se connecter"}
    </h2>
    <p style={{ fontSize: 13, color: G.mid, fontWeight: 300, marginBottom: 36 }}>
      {mode === "signup" ? `${FREE_LIMIT} messages gratuits, sans carte bancaire.` : "Bon retour parmi nous."}
    </p>

    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {mode === "signup" && (
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Votre prénom"
          style={{ fontFamily: font.sans, fontSize: 14, fontWeight: 300, padding: "13px 16px", border: `1px solid ${G.faint}`, outline: "none", background: G.off, width: "100%", color: G.ink }} />
      )}
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Adresse email" type="email"
        onKeyDown={e => e.key === "Enter" && handle()}
        style={{ fontFamily: font.sans, fontSize: 14, fontWeight: 300, padding: "13px 16px", border: `1px solid ${G.faint}`, outline: "none", background: G.off, width: "100%", color: G.ink }} />

      <button onClick={handle} disabled={loading || !email}
        style={{ fontFamily: font.sans, fontSize: 13, fontWeight: 500, color: G.white, background: loading ? G.mid : G.ink, border: "none", padding: "14px", cursor: "pointer", letterSpacing: "0.04em", marginTop: 4, transition: "background 0.2s" }}>
        {loading ? "Connexion…" : mode === "signup" ? "Créer mon compte" : "Se connecter"}
      </button>
    </div>

    <p style={{ fontSize: 12, color: G.mid, marginTop: 24, textAlign: "center", fontWeight: 300 }}>
      {mode === "signup" ? "Déjà un compte ? " : "Pas encore de compte ? "}
      <span onClick={() => setMode(mode === "signup" ? "login" : "signup")}
        style={{ color: G.ink, textDecoration: "underline", cursor: "pointer" }}>
        {mode === "signup" ? "Se connecter" : "S'inscrire"}
      </span>
    </p>
  </div>
</div>
```

);
}

// ─── PAYWALL MODAL ────────────────────────────────────────────
function PaywallModal({ onUpgrade, onClose }) {
const [loading, setLoading] = useState(false);

const handleUpgrade = async () => {
setLoading(true);
await new Promise(r => setTimeout(r, 1200));
onUpgrade();
};

return (
<div style={{ position: “fixed”, inset: 0, zIndex: 200, display: “flex”, alignItems: “center”, justifyContent: “center”, background: “rgba(14,14,12,0.6)”, backdropFilter: “blur(4px)” }}>
<div style={{ background: G.white, width: “100%”, maxWidth: 460, padding: “52px 48px”, position: “relative”, boxShadow: “0 40px 100px rgba(0,0,0,0.15)” }}>
<button onClick={onClose} style={{ position: “absolute”, top: 20, right: 24, background: “none”, border: “none”, fontSize: 18, color: G.mid, cursor: “pointer” }}>×</button>

```
    <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: G.mid, marginBottom: 20 }}>Plan Pro</p>
    <h2 style={{ fontFamily: font.serif, fontSize: 36, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
      Continuez sans<br /><em>limite.</em>
    </h2>
    <p style={{ fontSize: 14, color: G.mid, fontWeight: 300, lineHeight: 1.7, marginBottom: 36 }}>
      Vous avez utilisé vos {FREE_LIMIT} messages gratuits. Passez au plan Pro pour un accès illimité à SwissStart.
    </p>

    <div style={{ background: G.off, padding: "28px 28px", marginBottom: 28, borderLeft: `3px solid ${G.ink}` }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
        <span style={{ fontFamily: font.serif, fontSize: 48, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>29</span>
        <span style={{ fontSize: 14, color: G.mid, fontWeight: 300 }}>CHF / mois</span>
      </div>
      <p style={{ fontSize: 12, color: G.mid, fontWeight: 300 }}>Sans engagement · Annulez à tout moment</p>
    </div>

    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
      {["IA illimitée, 24h/24", "Génération de documents", "Tous les 26 cantons", "Simulateur de charges", "Support prioritaire"].map((f, i) => (
        <li key={i} style={{ fontSize: 13, color: G.mid, fontWeight: 300, paddingLeft: 16, position: "relative" }}>
          <span style={{ position: "absolute", left: 0, color: G.faint }}>—</span>{f}
        </li>
      ))}
    </ul>

    <button onClick={handleUpgrade} disabled={loading}
      style={{ width: "100%", fontFamily: font.sans, fontSize: 13, fontWeight: 500, color: G.white, background: loading ? G.mid : G.ink, border: "none", padding: "16px", cursor: "pointer", letterSpacing: "0.04em", transition: "background 0.2s" }}>
      {loading ? "Activation en cours…" : "Activer le plan Pro — 29 CHF/mois"}
    </button>
    <p style={{ fontSize: 11, color: G.mid, textAlign: "center", marginTop: 12, fontWeight: 300 }}>
      Essai 14 jours gratuit · Pas de surprise
    </p>
  </div>
</div>
```

);
}

// ─── CHAT ────────────────────────────────────────────────────
function Chat({ user, onUpgrade, onLogout }) {
const [messages, setMessages] = useState([
{ role: “assistant”, content: `Bonjour ${user.name} 👋 Je suis SwissStart, votre expert IA pour créer votre entreprise en Suisse.\n\nQuel est votre projet ?` }
]);
const [input, setInput] = useState(””);
const [loading, setLoading] = useState(false);
const [msgCount, setMsgCount] = useState(0);
const [showPaywall, setShowPaywall] = useState(false);
const [showSuggestions, setShowSuggestions] = useState(true);
const isPro = user.plan === “pro”;
const bottomRef = useRef(null);
const textRef = useRef(null);

useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: “smooth” }); }, [messages, loading]);

const send = async (text) => {
const t = text || input.trim();
if (!t || loading) return;

```
if (!isPro && msgCount >= FREE_LIMIT) {
  setShowPaywall(true);
  return;
}

setInput("");
setShowSuggestions(false);
const newMsgs = [...messages, { role: "user", content: t }];
setMessages(newMsgs);
setMsgCount(c => c + 1);
setLoading(true);

try {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: newMsgs.map(m => ({ role: m.role, content: m.content })),
    }),
  });
  const data = await res.json();
  const reply = data.content?.map(b => b.text || "").join("") || "Une erreur est survenue.";
  setMessages([...newMsgs, { role: "assistant", content: reply }]);

  // Trigger paywall after limit
  if (!isPro && msgCount + 1 >= FREE_LIMIT) {
    setTimeout(() => setShowPaywall(true), 1800);
  }
} catch {
  setMessages([...newMsgs, { role: "assistant", content: "Une erreur est survenue. Réessayez." }]);
} finally {
  setLoading(false);
}
```

};

const renderText = (text) =>
text.split(”\n”).map((line, i, arr) => {
const parts = line.split(/(**[^*]+**)/g).map((p, j) =>
p.startsWith(”**”) && p.endsWith(”**”)
? <strong key={j}>{p.slice(2, -2)}</strong>
: p
);
return <span key={i}>{parts}{i < arr.length - 1 && <br />}</span>;
});

return (
<div style={{ height: “100vh”, display: “flex”, flexDirection: “column”, background: G.white, fontFamily: font.sans, color: G.ink }}>
{/* HEADER */}
<div style={{ height: 60, padding: “0 24px”, display: “flex”, alignItems: “center”, justifyContent: “space-between”, borderBottom: `1px solid ${G.faint}`, flexShrink: 0 }}>
<Logo />
<div style={{ display: “flex”, alignItems: “center”, gap: 16 }}>
{!isPro && (
<div style={{ fontSize: 12, color: G.mid, fontWeight: 300 }}>
<span style={{ color: msgCount >= FREE_LIMIT ? “#c0392b” : G.ink, fontWeight: 500 }}>{Math.max(0, FREE_LIMIT - msgCount)}</span> messages gratuits
</div>
)}
{isPro && (
<span style={{ fontSize: 10, letterSpacing: “0.12em”, textTransform: “uppercase”, background: G.ink, color: G.white, padding: “4px 10px” }}>Pro</span>
)}
{!isPro && (
<button onClick={() => setShowPaywall(true)} style={{ fontSize: 12, fontWeight: 500, color: G.white, background: G.ink, border: “none”, padding: “8px 16px”, cursor: “pointer”, fontFamily: font.sans }}>
Passer Pro
</button>
)}
<button onClick={onLogout} style={{ fontSize: 12, color: G.mid, background: “none”, border: “none”, cursor: “pointer”, fontFamily: font.sans }}>
Déconnexion
</button>
</div>
</div>

```
  {/* MESSAGES */}
  <div style={{ flex: 1, overflowY: "auto", padding: "32px 0" }}>
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 24 }}>
      {messages.map((msg, i) => (
        <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", gap: 12, alignItems: "flex-end" }}>
          {msg.role === "assistant" && (
            <div style={{ width: 28, height: 28, background: G.ink, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0, marginBottom: 2, color: G.white, fontFamily: font.serif }}>S</div>
          )}
          <div style={{
            maxWidth: "75%",
            padding: "14px 18px",
            background: msg.role === "user" ? G.ink : G.off,
            color: msg.role === "user" ? G.white : G.ink,
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 1.65,
            border: msg.role === "assistant" ? `1px solid ${G.faint}` : "none",
          }}>
            {renderText(msg.content)}
          </div>
        </div>
      ))}

      {loading && (
        <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
          <div style={{ width: 28, height: 28, background: G.ink, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: G.white, fontFamily: font.serif }}>S</div>
          <div style={{ padding: "16px 20px", background: G.off, border: `1px solid ${G.faint}`, display: "flex", gap: 6, alignItems: "center" }}>
            {[0, 1, 2].map(d => (
              <div key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: G.mid, animation: "bounce 1.2s infinite", animationDelay: `${d * 0.2}s` }} />
            ))}
          </div>
        </div>
      )}

      {/* Suggestions */}
      {showSuggestions && messages.length === 1 && (
        <div style={{ paddingLeft: 40, display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: G.mid, marginBottom: 4 }}>Questions fréquentes</p>
          {SUGGESTIONS.map((s, i) => (
            <button key={i} onClick={() => send(s)} style={{ fontFamily: font.sans, background: "none", border: `1px solid ${G.faint}`, padding: "11px 16px", fontSize: 13, fontWeight: 300, color: G.mid, textAlign: "left", cursor: "pointer", transition: "all 0.15s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = G.ink; e.currentTarget.style.color = G.ink; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = G.faint; e.currentTarget.style.color = G.mid; }}>
              {s}
            </button>
          ))}
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  </div>

  {/* FREE LIMIT BANNER */}
  {!isPro && msgCount >= FREE_LIMIT && (
    <div style={{ background: G.ink, padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>Limite gratuite atteinte — passez Pro pour continuer</p>
      <button onClick={() => setShowPaywall(true)} style={{ fontFamily: font.sans, fontSize: 12, fontWeight: 500, color: G.ink, background: G.white, border: "none", padding: "8px 18px", cursor: "pointer", letterSpacing: "0.03em" }}>
        Passer Pro — 29 CHF/mois
      </button>
    </div>
  )}

  {/* INPUT */}
  <div style={{ padding: "16px 24px 24px", borderTop: `1px solid ${G.faint}`, flexShrink: 0 }}>
    <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", gap: 10, alignItems: "flex-end", border: `1px solid ${G.faint}`, padding: "12px 14px", background: G.off }}>
      <textarea
        ref={textRef}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
        placeholder={!isPro && msgCount >= FREE_LIMIT ? "Passez Pro pour continuer…" : "Posez votre question…"}
        disabled={!isPro && msgCount >= FREE_LIMIT}
        rows={1}
        style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: G.ink, fontSize: 14, fontWeight: 300, resize: "none", fontFamily: font.sans, lineHeight: 1.5, maxHeight: 100 }}
      />
      <button onClick={() => send()} disabled={!input.trim() || loading || (!isPro && msgCount >= FREE_LIMIT)}
        style={{ width: 34, height: 34, background: input.trim() && !loading && (isPro || msgCount < FREE_LIMIT) ? G.ink : G.faint, border: "none", color: G.white, cursor: "pointer", fontSize: 15, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
        ↑
      </button>
    </div>
  </div>

  {showPaywall && (
    <PaywallModal
      onUpgrade={() => { onUpgrade(); setShowPaywall(false); }}
      onClose={() => setShowPaywall(false)}
    />
  )}

  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;1,400&family=Instrument+Sans:wght@300;400;500&display=swap');
    @keyframes bounce { 0%,60%,100% { transform:translateY(0);opacity:0.4; } 30% { transform:translateY(-5px);opacity:1; } }
    textarea::placeholder { color: #aaa; }
    * { box-sizing: border-box; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-thumb { background: ${G.faint}; border-radius: 2px; }
  `}</style>
</div>
```

);
}

// ─── ROOT ─────────────────────────────────────────────────────
export default function App() {
const [screen, setScreen] = useState(“landing”); // landing | auth | chat
const [user, setUser] = useState(null);

const handleAuth = (u) => {
setUser(u);
setScreen(“chat”);
};

const handleUpgrade = () => {
setUser(u => ({ …u, plan: “pro” }));
};

if (screen === “landing”) {
return (
<>
<Landing onStart={() => setScreen(“auth”)} />
{/* No auth modal on landing */}
</>
);
}

if (screen === “auth”) {
return (
<div style={{ background: G.off, minHeight: “100vh” }}>
<AuthModal onAuth={handleAuth} onClose={() => setScreen(“landing”)} />
</div>
);
}

return (
<Chat
user={user}
onUpgrade={handleUpgrade}
onLogout={() => { setUser(null); setScreen(“landing”); }}
/>
);
}