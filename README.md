Library Management System
This is a web-based Library Management System developed for Lab 3 of the course Application of Web Systems in Information Systems at Menedżerska Akademia Nauk Stosowanych w Warszawie. The system enables students to search and borrow books, administrators to generate overdue book reports, and new users to register, aligning with the functional requirements defined in Lab 2 and prototyped in Lab 3.
The project uses React with Vite for the frontend, styled with Tailwind CSS, and is structured to support future integration with Node.js and MongoDB for backend functionality. This repository contains the initial implementation of core user flows, reusable components, and responsive design, as specified in the Lab 3 deliverables.
Project Overview
The Library Management System supports three core user flows:

Student Borrows a Book (Sarah): Search for books by title/author, view details, and borrow with confirmation.
Admin Generates a Report (John): Generate and export overdue book reports as PDFs.
User Registration: Register new users with email and password to access the system.

The system is designed to be responsive (mobile and desktop), accessible (WCAG 2.1 AA compliant), and user-friendly, with features like form validation, loading states, and error handling.
Setup Instructions
Follow these steps to set up and run the project locally:

Clone the Repository:
git clone https://github.com/pravinteli/library-management-system.git
cd library-management-system


Install Dependencies:Ensure Node.js is installed, then run:
npm install


Run the Development Server:
npm run dev

Open http://localhost:5173 in your browser to view the application.

Build for Production (Optional):
npm run build

The production-ready files will be in the dist/ folder.


Folder Structure
The project follows a clear folder structure as required by Lab 3:
library-management-system/
├── public/              # Static assets (e.g., favicon, images)
│   └── vite.svg
├── src/                 # Source code
│   ├── assets/          # Images and other static assets
│   ├── components/      # Reusable components (e.g., Button, Card)
│   │   └── Button.jsx
│   ├── pages/           # Page components (e.g., LoginPage, SearchPage)
│   │   ├── App.jsx
│   │   └── LoginPage.jsx
│   ├── data/            # Mock data (e.g., books.js)
│   │   └── books.js
│   ├── styles/          # Tailwind CSS configuration
│   │   └── index.css
│   ├── utils/           # Utility functions
│   ├── index.css        # Global styles with Tailwind directives
│   ├── main.jsx         # Entry point
│   └── App.css
├── screenshots/         # Screenshots of implemented screens
│   ├── login.png
│   └── search.png
├── .gitignore           # Ignored files (e.g., node_modules)
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file

Technologies

Frontend: React, Vite, Tailwind CSS
State Management: React useState and useContext
Data: Mock JSON files (e.g., books.js)
Planned Backend: Node.js, MongoDB (from Lab 2 architecture)
Version Control: Git, GitHub
Development Tools: npm, VS Code

Implemented Features
The initial implementation includes the following screens for the core user flows, as specified in Lab 3:
Public Screens

Login Page: Form with email/password validation and error states.
Search Page: Search bar with filters, responsive book grid, and loading/empty states.
Book Details Page: Displays book information with a “Borrow Now” button.
Borrow Confirmation: Success modal with due date and calendar integration.

Administrative Screens

Admin Dashboard: Quick filters for reports and recent activity feed.
Report Generation: Form with date range picker and results table.
Report View: Exportable table with a prominent “Export PDF” button.

Registration Screens

Registration Page: Form with real-time password strength meter.
Success Message: Confirmation with a clear “Go to Login” button.

Reusable Components

Button: Variants for primary/secondary actions.
Card: Used for book and report displays.
Modal: For success/error messages.
TextField: Input with validation for forms.
Navbar: Public navigation bar.
AdminSidebar: Admin navigation menu.

Accessibility

Semantic HTML and ARIA attributes for screen reader compatibility.
Keyboard navigation for all interactive elements.
Minimum 4.5:1 color contrast ratio.
Responsive design with mobile-first breakpoints.

Screenshots
Login Page

Search Page

Note: Replace screenshots/login.png and screenshots/search.png with actual screenshots of your implemented screens. Additional screenshots (e.g., Book Details, Admin Dashboard) can be added as you implement more pages.
Development Notes

Form Validation: Includes checks for required fields, email format, and password strength, with contextual error messages.
Feedback States: Loading spinners, error messages, success modals, and empty state placeholders are implemented.
Responsive Design: Uses Tailwind CSS with breakpoints for mobile (<640px), tablet (640–1023px), and desktop (≥1024px).
Mock Data: src/data/books.js provides sample book data for development.

Future Enhancements

Integrate Node.js and MongoDB for backend functionality (e.g., user authentication, book borrowing).
Add more screens (e.g., Book Details, Admin Dashboard) as per Lab 3 wireframes.
Implement advanced reporting features (e.g., usage statistics).
Enhance accessibility with additional ARIA landmarks and testing.

License
This project is licensed under the MIT License.
Contact
For questions or feedback, contact:
