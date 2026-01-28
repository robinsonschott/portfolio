# Portfolio Robinson Schott - Version HTML/CSS/JS Pure

Ce projet est une refonte complète du portfolio original qui utilisait SCSS. Toutes les fonctionnalités ont été conservées mais le code a été converti en HTML, CSS et JavaScript purs.

## 🎨 Caractéristiques

- **Design responsive** : S'adapte parfaitement aux mobiles, tablettes et ordinateurs
- **Modèle 3D interactif** : Un personnage 3D qui suit le mouvement de la souris sur la page d'accueil
- **Menu burger mobile** : Navigation adaptée aux petits écrans
- **Carousel d'images** : Pour présenter les différents projets
- **Formulaire de contact** : Avec intégration EmailJS
- **Animations fluides** : Transitions et effets visuels soignés

## 📁 Structure du projet

```
portfolio-refait/
│
├── index.html              # Page d'accueil
├── about.html              # Page à propos
├── projets.html            # Page projets
├── contact.html            # Page contact
│
├── css/
│   └── style.css           # Styles CSS compilés (sans SCSS)
│
├── js/
│   ├── app.js              # Script principal
│   └── burger.js           # Menu burger mobile
│
├── fonts/
│   ├── redaction-35-latin-400-italic.ttf
│   └── NeueMontreal-Regular.otf
│
└── public/
    ├── img/                # Images et logos
    └── model/              # Modèle 3D (.glb)
```

## 🚀 Installation et utilisation

1. **Aucune installation nécessaire** - C'est du HTML/CSS/JS pur !
2. Ouvrez simplement `index.html` dans votre navigateur
3. Ou hébergez le dossier sur n'importe quel serveur web

## 📱 Pages disponibles

- **Accueil** : Présentation avec modèle 3D interactif
- **Projets** : 3 projets détaillés (Prix Pépite, Haro sur les écolos, U3T)
- **À propos** : Présentation de Robinson
- **Contact** : Formulaire de contact fonctionnel

## 🎯 Fonctionnalités techniques

### Modèle 3D interactif
- Suit le mouvement de la souris
- Animation fluide avec `requestAnimationFrame`
- Utilise la bibliothèque `model-viewer` de Google

### Menu responsive
- Navigation desktop avec liens horizontaux
- Menu burger sur mobile
- Désactivation du scroll quand le menu est ouvert

### Système de projets
- Affichage dynamique des projets au clic
- Scroll automatique vers le projet sélectionné
- Bouton retour en haut de page
- Carousel pour les images de chaque projet

### Formulaire de contact
- Validation HTML5
- Intégration avec EmailJS
- Messages de confirmation/erreur

## 🎨 Palette de couleurs

```css
--primary-color: #E55A46    /* Rouge principal */
--secondary-color: #EF9689  /* Rouge clair */
--tertiary-color: #151515   /* Noir */
--bg-color: #F4F3F4         /* Gris clair */
```

## 📐 Breakpoints responsive

- **Mobile** : < 768px
- **Tablet** : ≥ 768px
- **Desktop** : ≥ 1024px

## 🔧 Différences avec la version SCSS

### Améliorations :
- ✅ Pas de compilation nécessaire
- ✅ Plus facile à maintenir
- ✅ Meilleure compatibilité navigateurs
- ✅ Chargement plus rapide
- ✅ Code plus accessible pour les débutants

### Conversions effectuées :
- Variables SCSS → Variables CSS natives
- Mixins SCSS → Media queries standards
- Nesting SCSS → Sélecteurs CSS classiques
- Imports SCSS → Fichier CSS unique

## 📝 Notes importantes

1. **EmailJS** : Le formulaire de contact nécessite une clé API EmailJS valide
2. **Modèle 3D** : Le fichier `character.glb` doit être présent dans `public/model/`
3. **Fonts** : Les polices personnalisées sont chargées via `@font-face`

## 🌐 Compatibilité

- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobiles iOS/Android

## 📄 Licence

Ce portfolio a été créé pour Robinson Schott. Tous droits réservés.
