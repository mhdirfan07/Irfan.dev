# Project PRD: Technical Blueprint Portfolio

## 1. Vision & Strategy
A high-fidelity, single-page portfolio website designed for system architects, backend engineers, and technical leads. The aesthetic moves away from generic creative portfolios, instead embracing a "Technical Blueprint" or "Brutalist Wireframe" style that communicates precision, engineering rigor, and data-driven performance.

## 2. Target Audience
*   **Engineering Managers & Recruiters:** Looking for technical depth and organizational skills.
*   **Startup Founders:** Seeking developers who understand system architecture and scalability.
*   **Technical Partners:** Potential collaborators in the AI/Infrastructure space.

## 3. Design Principles
*   **Precision (1px Border):** Every element is encapsulated in a 1px solid border (#D1D5DB), creating a strict bento-grid structure.
*   **Brutalist Utility:** Zero border-radius. Sharp edges only. Function over flourish.
*   **Monospace Typography:** Use JetBrains Mono or Space Grotesk for all metrics and descriptions to mimic code documentation.
*   **Blueprint Aesthetics:** Light gray background (#F3F4F6) with high-contrast black text and vibrant orange (#F97316) accents for CTA/Status.

## 4. Key Sections & Functional Requirements

### 4.1. Header & Navigation
*   **Logo:** Minimalist "DEV_LABS" text.
*   **Nav Links:** Terminal-style navigation (e.g., `<- BACK TO LAB`, `[ PORTFOLIO ]`).
*   **Global CTA:** Persistent "CONTACT ME" button in accent orange.

### 4.2. Hero Section (Visual Anchor)
*   **Display Title:** Large, split-screen "PORT | FOLIO" typography.
*   **Stats Dashboard:** A high-level overview of total projects completed.
*   **Featured Project:** A dedicated slot for the most significant work, highlighted with a "NEW_RELEASE" tag and performance metrics (Perf, Eff, Scale).

### 4.3. Project Grid (The "Systems" Registry)
*   **Filtering System:** Categorize projects by "Backend", "AI Models", or "Infrastructure".
*   **System Cards:** Each card represents a project "system" with:
    *   System ID (e.g., SYST_01).
    *   Technical Labels (e.g., [ CLOUD_RUN ]).
    *   Centralized Logo/Visual.
    *   Metric Table: Real-world data points like Latency, Uptime, Nodes, and Status.

### 4.4. Work History (Chronological Logs)
*   **Experience Grid:** Timeline-based bento cells.
*   **Log Entries:** Each role includes a "Performance Log" showing specific impact (e.g., "Optimized Latency: -34%").
*   **Tech Stack Tags:** Minimalist monospace tags for tools used.

### 4.5. Validation Logs (Social Proof)
*   **KPI Metrics:** Overall Satisfaction and Retention rates.
*   **Client Icons:** Geometric, wireframe-style logos for partner companies or open-source projects.

### 4.6. Footer & Final CTA
*   **Action Hub:** A split-cell layout with a large "HIRE ME" button and a "DOWNLOAD CV" secondary action.
*   **System Info:** Copyright, coordinates, and social links (GitHub, LinkedIn).

## 5. Technical Stack (Visual Implementation)
*   **Framework:** Tailwind CSS for grid layout and utility styling.
*   **Layout:** CSS Grid (Bento Style) with responsive breakpoints for Mobile/Tablet/Desktop.
*   **Icons:** Minimalist geometric SVGs.

## 6. Technical Stack backend
*   **Framework:** Next.js
