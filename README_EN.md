# Jiangnan Cultural Tourism Website

This project is based on the [Next.js](https://nextjs.org) framework, aiming to showcase the culture, attractions, cuisine, and travel guides of the Jiangnan region. It adopts modular and component-based development, featuring a refined interface and rich content, suitable for learning and extension.

[中文 | Chinese](./README.md) | [English](./README_EN.md)

---

## Project Structure

```
jiangnan-website/
├── app/
│   ├── page.tsx                # Home Page
│   ├── attractions/            # Attractions Page
│   │   └── page.tsx
│   ├── culture/                # Jiangnan Culture Page
│   │   └── page.tsx
│   ├── food/                   # Cuisine & Specialty Page
│   │   └── page.tsx
│   ├── travel-guide/           # Travel Guide Page
│   │   └── page.tsx
│   ├── layout.tsx              # Global Layout
│   └── globals.css             # Global Styles
├── components/                 # Common Components (e.g., Navbar, Footer)
├── public/                     # Static Assets
└── ...
```

## Page Navigation & Features

- **Home (/)**
  - Showcases the overall charm of Jiangnan, including brief introductions to culture, attractions, and cuisine.
  - Provides navigation to main pages.

- **Attractions (/attractions)**
  - Introduces famous attractions in Jiangnan, such as Suzhou Gardens, West Lake, Zhouzhuang Ancient Town, etc.
  - Each attraction includes a brief description and images.

- **Jiangnan Culture (/culture)**
  - Displays cultural content like literature, garden architecture, and traditional crafts of Jiangnan.
  - Includes introductions to intangible heritage items such as Suzhou Embroidery, Kunqu Opera, Yue Opera, etc.

- **Cuisine & Specialty (/food)**
  - Introduces Jiangnan's special dishes, such as Dongpo Pork, Squirrel-shaped Mandarin Fish, Xiaolongbao, etc.
  - Each dish includes origin, features, and a brief cooking method.

- **Travel Guide (/travel-guide)**
  - Provides practical information such as the best travel seasons, transportation guides, and accommodation recommendations for Jiangnan.
  - Includes itinerary planning suggestions and tips.

---

## How to Extend Pages

1. Create a new subdirectory under `app/` and add a `page.tsx` file to create a new page.
2. It is recommended to split page content into small components and place them in the `components/` directory for better reusability and maintainability.
3. Styles are recommended to be written in `globals.css`, or use modular CSS for each page/component.
4. The navigation bar and footer can be customized in `components/Navbar.tsx` and `Footer.tsx`.

---