# Sandra Bondon - Psychopraticienne

Site web informatif pour Sandra Bondon, psychopraticienne spécialisée dans la gestion des émotions, des traumatismes et des phobies grâce à des méthodes comme la **MOSAÏC®**, l'**hypnose thérapeutique**, et la **PNL**.

Ce projet est développé avec **Next.js (App Router)** et **Tailwind CSS** et déployé sur **Vercel**.

---

## 🚀 Fonctionnalités :

- **Galerie d'images flottantes** : Présentation interactive des thèmes abordés dans la thérapie.  
- **Effet parallaxe** : Animations immersives pour attirer l'attention sur les messages clés.  
- **Présentation des services** : Thérapies personnalisées pour adultes et enfants.  
- **Formulaire de contact** *(à venir)* : Permet aux visiteurs de prendre rendez-vous facilement.  
- **Avis Google** *(à venir)* : Intégration d’une API pour afficher des avis clients.  
- **Carte interactive** *(à venir)* : Localisation et itinéraire via Google Maps.  

---

## 🛠️ Technologies utilisées :

- **Next.js (App Router)** : Framework React pour le développement web moderne avec Server Components.  
- **Tailwind CSS** : Framework CSS utilitaire pour des mises en page rapides et réactives.  
- **GSAP** : Bibliothèque JavaScript pour des animations complexes et performantes.  
- **Vercel** : Plateforme pour hébergement et déploiement continu.  

🔐 Sécurité renforcée via HTTP Headers

Ce site est protégé par une configuration avancée de headers de sécurité HTTP, inspirée des recommandations de l’OWASP.

Les headers suivants sont définis dans le fichier next.config.mjs :
	•	Content-Security-Policy : contrôle strict des sources de scripts, styles, images et polices.
	•	Strict-Transport-Security : force l’utilisation de HTTPS.
	•	X-Content-Type-Options : empêche l’interprétation automatique du type MIME.
	•	X-Frame-Options : interdit l’intégration du site dans une iframe.
	•	Referrer-Policy : limite les informations envoyées dans les liens sortants.
	•	Permissions-Policy : désactive l’accès au micro, à la caméra et à la géolocalisation.
	•	Cross-Origin-Opener-Policy & Cross-Origin-Embedder-Policy : isolent le contexte de navigation pour renforcer la sécurité.

➡️ Ces mesures visent à protéger les visiteurs contre les attaques courantes (XSS, clickjacking, sniffing, etc.) tout en respectant les bonnes pratiques de confidentialité.

📌 Étapes de vérification post-déploiement

Après chaque déploiement sur Vercel, un test est réalisé via SecurityHeaders.com pour valider la bonne application de ces protections.

---

## 📦 Installation locale :

1. **Clonez ce dépôt** :
   ```bash
   git clone https://github.com/sandrine-cp/sandra-bondon.git

2. **Installer les dépendances** :
   ```bash
   npm install
3. **Lancer le serveur local** :
   ```bash
   npm run dev
4. **Ouvrez votre navigateur** :
   sur http://localhost:3000

---

## 🌍 Déploiement sur Vercel :
Le site est déployé automatiquement sur Vercel à chaque mise à jour de la branche main.

---

## 📖 Pages et routes :
en attente de la version finale

---

## 🔧 Maintenance et mises à jour :
Mises à jour gérées via GitHub avec des branches spécifiques pour chaque fonctionnalité.
Fusion dans dev pour les tests avant déploiement sur main.

---

## ✨ Contribuer :
Les contributions sont bienvenues ! Clonez le dépôt, créez une branche, développez et soumettez une pull request. 😊

---

## 📄 Licence :
Ce projet est sous licence MIT. Consultez le fichier [LICENSE](./LICENSE) pour plus d’informations.