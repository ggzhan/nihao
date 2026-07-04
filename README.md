# Nihao Asia Shop - Website

Dies ist die offizielle statische Website für den **Nihao Asia Shop** in Zürich Oerlikon. Die Seite ist für SEO optimiert, responsive gestaltet und nutzt Tailwind CSS für das Design.

## Voraussetzungen

Stellen Sie sicher, dass [Node.js](https://nodejs.org/) (enthält `npm`) auf Ihrem System installiert ist.

## Lokale Entwicklung

Folgen Sie diesen Schritten, um das Projekt lokal auf Ihrem Rechner auszuführen und zu bearbeiten:

### 1. Repository klonen
```bash
git clone https://github.com/ggzhan/nihao.git
cd nihao
```

### 2. Abhängigkeiten installieren
Installieren Sie die notwendigen Entwicklungs-Tools (Tailwind CSS CLI):
```bash
npm install
```

### 3. CSS bauen
Generieren Sie die `style.css` Datei aus der `input.css`:
```bash
npm run build:css
```

### 4. Website anzeigen
Sie können die `index.html` einfach direkt im Browser öffnen oder einen lokalen Webserver nutzen (empfohlen):

**Option A: Einfaches Öffnen**
Öffnen Sie die Datei `index.html` per Doppelklick in Ihrem bevorzugten Browser.

**Option B: Mit einem lokalen Server (Live-Server)**
```bash
npx serve .
```
Die Seite ist dann unter `http://localhost:3000` (oder einem ähnlichen Port) erreichbar.

### 5. Während der Entwicklung (Auto-Build)
Wenn Sie Änderungen am HTML oder CSS vornehmen, können Sie den Watch-Modus starten, damit das CSS automatisch neu gebaut wird:
```bash
npm run watch:css
```

## Projektstruktur

- `index.html`: Die Hauptseite des Webshops.
- `input.css`: Die Quelldatei für Tailwind CSS Direktiven.
- `style.css`: Die generierte CSS-Datei (wird von Tailwind gebaut).
- `logo.png`: Das Logo des Shops.
- `sitemap.xml` & `robots.txt`: SEO-Konfigurationsdateien.
- `package.json`: Enthält Build-Scripte und Abhängigkeiten.

## SEO & Tracking

Die Seite enthält:
- Google Analytics (GA4) Tracking.
- Google Ads Conversion Tracking (für den "Route planen" Button).
- Schema.org Structured Data (LocalBusiness, FAQPage).
- Open Graph & Twitter Meta-Tags.

---
© 2025 nihao-asiashop.ch
