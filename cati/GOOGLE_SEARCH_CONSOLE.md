# Instrucțiuni pentru Google Search Console

## 📋 Pași pentru indexarea site-ului

### 1. Verificare Domeniu
1. Accesează [Google Search Console](https://search.google.com/search-console)
2. Adaugă proprietatea `https://drcatalinaiancu.ro`
3. Verifică proprietatea folosind una dintre metodele disponibile:
   - **Recomandat**: Adaugă tag-ul HTML în `app/layout.tsx` în secțiunea `verification`
   - Alternativ: Verifică prin DNS sau prin fișier HTML

### 2. Adăugare Sitemap
1. După verificarea domeniului, accesează "Sitemaps" din meniul lateral
2. Adaugă URL-ul sitemap-ului: `https://drcatalinaiancu.ro/sitemap.xml`
3. Google va începe să indexeze automat toate paginile

### 3. Verificare Robots.txt
- Verifică că robots.txt este accesibil: `https://drcatalinaiancu.ro/robots.txt`
- Acesta este deja configurat și include link-ul către sitemap

## ✅ Ce este deja configurat

### Sitemap.xml
- ✅ Generat automat de Next.js
- ✅ Include toate paginile importante
- ✅ Priorities și changeFrequency optimizate
- ✅ URL complet: `https://drcatalinaiancu.ro/sitemap.xml`

### Robots.txt
- ✅ Configurat corect
- ✅ Permite indexarea tuturor paginilor
- ✅ Blochează `/api/`
- ✅ Link către sitemap inclus

### Metadata SEO
- ✅ Title optimizat pentru fiecare pagină
- ✅ Meta descriptions complete
- ✅ Keywords relevante
- ✅ Open Graph tags pentru social media
- ✅ Twitter Cards configurate
- ✅ Canonical URLs
- ✅ Structured Data (JSON-LD Schema.org)

## 📊 Pagini configurate

1. **Homepage** (`/`)
   - Title: "Dr. Catalina-Ionela Iancu - Cabinet Stomatologic București"
   - Priority: 1.0

2. **Servicii** (`/servicii`)
   - Title: "Servicii și Prețuri - Dr. Catalina-Ionela Iancu"
   - Priority: 0.9

3. **Contact** (`/contact`)
   - Title: "Contact - Dr. Catalina-Ionela Iancu"
   - Priority: 0.8

4. **Lucrări** (`/lucrari`)
   - Title: "Lucrări - Portofoliu Tratamente Dentare"
   - Priority: 0.8

5. **Despre** (`/despre`)
   - Title: "Despre - Dr. Catalina-Ionela Iancu"
   - Priority: 0.7

## 🔍 Structured Data (Schema.org)

Site-ul include JSON-LD structured data pentru:
- ✅ Dentist (tip MedicalBusiness)
- ✅ Adresă completă
- ✅ Coordonate geografice
- ✅ Program de lucru
- ✅ Specialități medicale
- ✅ Contact (telefon, email)

Acest lucru permite Google să afișeze rich snippets în rezultatele de căutare.

## 📝 Note importante

- După deploy, așteaptă 24-48 de ore pentru ca Google să indexeze site-ul
- Monitorizează erorile de indexare în Google Search Console
- Verifică periodic Coverage Report pentru a vedea paginile indexate
- Folosește "URL Inspection" pentru a verifica statusul individual al paginilor

## 🚀 Optimizări suplimentare

Pentru performanță SEO maximă, asigură-te că:
- Site-ul are viteza bună (Core Web Vitals)
- Imagini sunt optimizate (Next.js Image component)
- Site-ul este responsive (mobile-friendly)
- Există link-uri interne între pagini
- Conținutul este original și de calitate
