# 🌐 DevPulse UI

The high-performance, responsive frontend for the DevPulse ecosystem. Built with **Next.js 15** and **Tailwind CSS**, optimized for Core Web Vitals and seamless user experience.

---

## 🚀 Live Demo
**Primary Domain:** [mbilal.ca](https://mbilal.ca)  
**Status:** 🟢 Production Ready

---

## 🏗 Architecture & Tech Stack

This frontend is designed as a **Decoupled Client**, consuming data from a containerized Laravel API via secure REST endpoints.

### **Core Stack**
* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Data Fetching:** Server-side Fetch (ISR/SSR)
* **Deployment:** Vercel (Edge Network)

---

## ✨ Key Features

* **Server-Side Rendering (SSR):** Optimized initial load times and SEO performance.
* **Incremental Static Regeneration (ISR):** Project data is cached and revalidated every hour for peak performance.
* **Responsive Design:** A mobile-first approach ensuring a premium experience across all devices.
* **Dynamic Metadata:** Automated SEO optimization for individual project pages.
* **Pulsing Live Indicators:** Real-time visual feedback for projects currently live in production.

---

## ☁️ Deployment Workflow

The frontend is deployed on **Vercel**, benefiting from their global Edge Network and automated CI/CD.

* **Branch Protection:** Any push to `main` triggers an automatic production build.
* **Environment Management:** Utilizes `NEXT_PUBLIC_API_URL` to communicate securely with the AWS-hosted backend.
* **Optimization:** Automatic image optimization via the Next.js `<Image />` component.

---

## 🛠 Getting Started

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/your-username/devpulse-ui.git](https://github.com/your-username/devpulse-ui.git)```

2. **Install dependencies:**
```npm install```


3. **Setup Environment Variables: Create a .env.local file:**
```NEXT_PUBLIC_API_URL=[https://api.devpulse.mbilal.ca/api](https://api.devpulse.mbilal.ca/api)```


4. **Run Development Server:**
```npm run dev```


© 2026 M. Bilal | mbilal.ca



