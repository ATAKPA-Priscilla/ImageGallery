#  Responsive Image Gallery: The Priscilla Project 

A dynamic, fully responsive photo gallery built using modern CSS Grid for layout and Vanilla JavaScript for smooth, state-based navigation and visual effects.

**Live Demo:** [https://image-gallery-ten-sigma.vercel.app/]

---

##  Technical Highlights

This project demonstrates strong fundamental skills in layout, interactivity, and visual polish:

| Feature | Implementation | Skill Demonstrated |
| :--- | :--- | :--- |
| **Responsive Grid** | CSS Grid used with `repeat(auto-fit, minmax(250px, 1fr))` to automatically adjust column count based on viewport size. | Modern, adaptive layout techniques. |
| **State Management** | JavaScript tracks the image position using a global `currentIndex` and `data-index` attributes for reliable navigation. | Core programming concepts and DOM manipulation. |
| **Smooth Visual Toggling** | Lightbox state is managed by toggling CSS `opacity` and `visibility` (instead of just `display`), allowing for seamless **CSS transitions** during opening and closing. | Advanced CSS/JS integration. |
| **Circular Navigation** | Implemented **wrap-around logic** for the Next/Previous buttons, ensuring seamless looping from the last image back to the first, and vice-versa. | Conditional logic and edge-case handling. |
| **Orchestrated Transitions** | Used JavaScript's `setTimeout` function to delay content changes, perfectly synchronizing the image fade-in with the lightbox container's appearance. | Mastering asynchronous code for superior user experience (UX). |

---

##  Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ATAKPA-Priscilla/ImageGallery.git](https://github.com/ATAKPA-Priscilla/ImageGallery.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd ImageGallery
    ```
3.  **Launch:** Open `index.html` in your web browser.

---
