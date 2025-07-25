# VetPet 🐾 - Animal Shelter & Pet Shop React Template

Welcome to **VetPet**! A premium, fully responsive React template designed for modern pet adoption centers, veterinary clinics, and pet supply stores. Whether you're helping furry friends find a home or selling top-quality pet products, VetPet is the perfect starting point for your next project.

<br/>

> Engage pet lovers with VetPet – a premium React template designed for modern pet adoption centers, veterinary clinics, and pet supply stores. This feature-rich solution combines emotional adoption storytelling with seamless e-commerce functionality, helping users find their perfect furry companion while shopping for premium pet supplies.

<br/>

## 🚀 Live Demo

[View Live Demo](https://vetpet-shop.com)

## ✨ Key Features

-   **Modern & Clean Design**: A beautiful and professional design to attract pet lovers.
-   **Fully Responsive**: Looks great on all devices, from desktops to mobile phones.
-   **Built with React & Vite**: Fast, modern, and developer-friendly.
-   **Easy to Customize**: Most of the content can be updated by editing simple JSON files. No deep coding knowledge is required for basic changes!
-   **Component-Based Architecture**: Well-organized and reusable components.
-   **Dedicated Pages**: Includes all the essential pages like About, Adopt, Support, and Contact.

## 🛠️ Getting Started

Get your VetPet site up and running in just a few minutes.

1.  **Install Dependencies:**
    Open your terminal, navigate to the `code` directory, and run:
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    Once the dependencies are installed, start the development server:
    ```bash
    npm run dev
    ```
    Your site will be available at `http://localhost:5173`.

## 🎨 Customization Guide

We've made VetPet incredibly easy to customize. You can change almost everything to fit your needs.

### 📝 Easy Content Updates via JSON

The simplest way to update the content on your website is by editing the JSON files located in the `code/StoredJsons/` directory. This allows you to change text, lists, and other data without touching the source code.

Here is a list of the JSON files and what they control:

-   `Starters.json`: Manages the content for the initial sections on the main (Welcome) page.
-   `Missions.json`: Controls the text for the "Our Mission" section.
-   `Helps.json`: Populates the section that describes how people can help.
-   `PetsShow1.json` & `PetsShow2.json`: Manages the lists of pets available for adoption on the "Adopt" page. You can easily add, remove, or update pet details here.
-   `Supports.json`: Controls the content on the "Support" page.

### 🖼️ Updating Images

All the images for the website are located in the `code/public/` directory. They are organized into folders based on the page they appear on (e.g., `About/`, `Adopt/`, `Contact/`).

To use your own images, simply replace the existing image files with your new ones. **Make sure your new images have the same name and file extension as the ones you are replacing** to avoid breaking the image links.

### 💻 Advanced Page Customization

If you want to make more significant changes to the layout or structure of the pages, you can edit the React components directly. These files are located in the `code/app/pages/` directory.

-   `Welcome.tsx`: The main landing page of the website.
-   `About.tsx`: The "About Us" page.
-   `Adopt.tsx`: The pet adoption and shop page.
-   `Support.tsx`: The page explaining how to support your organization.
-   `Contact.tsx`: The contact information and form page.

---

We hope you enjoy using the VetPet template. Happy coding! 💖
