# Mandal Jewellers — Next.js + Tailwind CSS

A responsive jewellery storefront starter built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons.

## Features
- Responsive layouts for mobile, tablet and desktop
- Premium editorial-style home page and collection cards
- Shop page with category filtering and sorting
- Product cards with wishlist interaction and add-to-cart
- Cart persisted in localStorage
- Search form UI, mobile navigation, newsletter interaction
- Reusable header, footer, product card and cart context

## Run locally

Requirements: Node.js 18.18+ (Node 20+ recommended) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Customise before publishing
1. Replace the sample Unsplash images with your own product and campaign photography.
2. Update product names, prices and details in `data/products.ts`.
3. Update contact details, address, WhatsApp, social links and policies in `components/footer.tsx`.
4. Connect the checkout button to a real backend/payment provider before accepting orders.
5. Add real inventory, shipping, tax, privacy and return policies.
6. Configure your domain and deployment environment.

## Notes
This is a front-end starter. Product data is sample data, and checkout is intentionally a demo. Do not accept real payments until a payment gateway and secure order backend are connected.
