# Conteille Prisca IP Project

- Contielle Prisca is a high-class luxury watch brand built for the modern age. This project is an e-commerce direct to consumer platform designed to bridge the gap between traditional horological prestige and modern accessibility. The brand identity is rooted in a "Best of Both Worlds" philosophy, merging the rugged, elegant spirit of the diver watches with the modern digital watches.

- Our mission is to provide an elite digital boutique experience where craftsmanship meets convenience. Every element of the site, from the minimalist typography to the seamless navigation, is engineered to reflect the precision of the timepieces themselves. Contielle Prisca isn't just selling a watch; it is offering a membership into a lifestyle of timeless sophistication and modern performance.
 
## Design Process

- The design process began with a deep dive into the "Quiet Luxury" aesthetic. This website was curated towards watch enthusiasts who want the epitome of watch craftmenship and evolution, something wasn't so flamboyant but neither 'flat' either. The goal was to create a visual language that felt established yet innovative. We wanted our website to allow users to experience website that prioritizes visual storytelling and high-conversion e-commerce flows.

User Stories:
- As a prospective buyer, I want to view high-definition 360-degree images of the watch, so that I can appreciate the craftsmanship before purchasing.

- As a member, I want to access an exclusive "Accessories" area, so that I can purchase bespoke straps and maintenance kits specifically for my model.

- As a mobile user, I want a responsive navigation menu, so that I can browse the collection easily on my phone.

- As a watch collector, I want to explore a fusion of timeless designs and brutalist futuristic watches, so that I can own timepieces that feels both familiar and unique.

- As a site visitor, I want a streamlined process, so that I can access features easier and clearly

- As an e-commerce shopper, I want a responsive interface that works perfectly on my mobile device, so that I can browse and purchase on the go.

https://www.figma.com/design/GHkMW0Y3JbCI6QRIXr7hZ7/IP-WebApp?node-id=32-2&t=fTT7zSSNLiwULmK4-1


## Features

### Existing Features

1. Homepage (Landing Page)
Hero Experience: A high-impact visual introduction to the brand’s "Seamaster-Submariner" fusion philosophy.

3D Masterpiece Viewer: Integration of the Sketchfab API, allowing users to interact with a 3D model of the flagship watch directly on the main stage.

Responsive Navigation: A luxury-tier header that adapts seamlessly from a desktop "Mega-Menu" to a sleek mobile "Hamburger" menu.

2. Membership Page (membership.html)
The "Inner Circle" Enrollment: A dedicated portal for users to join the exclusive Contielle Prisca membership program.

Intelligent Form Validation: Custom JavaScript logic that ensures user data is correct before submission, providing real-time feedback.

Exclusive Benefits Showcase: A section detailing the perks of membership, such as early access to limited edition drops.

3. Login & Authentication (login.html)
Boutique Gateway: A minimalist, high-security aesthetic login interface designed to feel like entering a private showroom.

Session-Ready Architecture: Structured to handle user authentication for returning collectors.

4. Accessories Gallery (accessories.html)
Precision Real-Time Clock: A live, functional digital clock integrated into the UI to symbolize the brand’s obsession with timing and precision.

Curated Product Grid: A clean, CSS Grid-powered gallery showcasing bespoke straps, maintenance kits, and premium watch winders.

Hover-Interactive Elements: Visual feedback on product cards to maintain an engaging, high-end shopping experience.

5. User Profile Page
Dynamic Tab System: A "Single Page Application" feel that allows users to toggle between Account Settings, Order History, and Digital Ranking without reloading the page.

Collection Registry: A dedicated space for members to view the specifications and serial numbers of their owned timepieces.

6. Community Forum
Automated Post Generation: A custom system that generates and displays forum posts, creating a "living" community of watch enthusiasts.

### Features Left to Implement
- Virtual Try-On: An AR feature allowing users to see the watch on their wrist via their webcam.

- Live Global Inventory: Real-time tracking of limited-edition stock levels.

## Technologies Used

[HTML5] 
- For the semantic structure of the boutique.

[CSS] 
- To create the layout and responsive breakpoints.

[JavaScript]
- For interactive elements, form validation, and dynamic UI updates.

[RestDB](https://restdb.io/)
- Store user login and account data




## Assistive AI

Assistive AI
AI tools (Gemini and ChatGPT) were used as collaborative partners to solve technical hurdles and ensure design consistency:

Sketchfab Implementation: AI was used to troubleshoot the integration of the Sketchfab API, ensuring the 3D models loaded efficiently.

Clock Logic: Assisted in writing the JavaScript functions for the real-time clock featured on the accessories page.

Profile Page Architecture: AI helped structure the Tab logic for the user profile page, allowing for seamless switching between account sections.

Forum Post Generation: Used AI to develop the logic for generating and displaying community forum posts dynamically.


![sample img](readme_img/sample.JPG)

## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

2. Responsive Design Check:

     1. View the site on iPhone (375px), iPad (768px), and Desktop (1440px).
     2. Verify that the navigation bar converts to a mobile-friendly menu on smaller screens.
     3. Verify that all navigation links (login.html, accessories.html, etc.) redirect to the correct pages without 404 errors.

3. 3D Viewer Interaction:

     1. Verified that the Sketchfab model is responsive to touch and mouse drag on all tested browsers.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
























Credits
Content
All brand copy and "Contielle Prisca" storytelling are original concepts.

Media
3D Models sourced/inspired by the public archives of Omega and Rolex via Sketchfab.

Images and icons sourced from high-quality royalty-free repositories.

Acknowledgements
Special thanks to the watch community for providing insights into the "Submariner/Seamaster" aesthetic preferences.