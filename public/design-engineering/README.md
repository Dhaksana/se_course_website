# Design Engineering Educational Website

A comprehensive, multi-page, interactive educational website teaching "Design Engineering" based on Pressman's Software Engineering principles.

## Features constraints met:
- **NOT an SPA**: Multi-page site with standard HTML file navigation.
- **Offline-First**: Uses local CSS, local JS, system fonts, and inline configurations. Zero external CDNs required.
- **Visual Direction**: Implements a glassmorphism/cinematic look with animated gradients, custom styling, dark/light modes, and a "Presenter Mode".
- **Content Aligned**: Contains exhaustive coverage of the 5 Design Model elements, Architecture, Quality, etc.

## How to Run Locally
1. Simply double-click `index.html` on your computer. 
2. Because it uses standard file paths, everything will load correctly via `file://`.
3. *Note on Search:* Local search utilizes JavaScript `fetch()` on a JSON file (`assets/search-index.json`). Most modern browsers block CORS/Fetch requests on `file://` protocols for security. **To test search**, run a simple local server in this directory:
   - Python 3: `python3 -m http.server`
   - Node.js: `npx serve`
   - Then navigate to `http://localhost:8000`.

## How to Host on GitHub Pages
1. Push this folder to a new GitHub repository.
2. Go to the repository **Settings** > **Pages**.
3. Under "Source", select the `main` branch and `/ (root)` folder.
4. Click Save. The site will be live within minutes.

## How to Edit Content / Add Quizzes
- **Edit Content:** Simply open `lecture1.html`, `lecture2.html`, or `lecture3.html` in any text editor and edit the HTML. The styles apply automatically to semantic tags like `<h2>`, `<p>`, `<ul>`.
- **Add Exam Questions:** Open `resources.html` and copy/paste one of the `<div class="question-box">` blocks. Modify the Question text and Model Answer text.
- **Add Quizzes:** Open `tools.html` and find the `<script>` tag near the bottom. Locate the `const questions = [...]` array and add another object block:
  ```javascript
  {
    q: "Your custom question?",
    options: ["A", "B", "C", "D"],
    answer: 0, // 0-based index of correct option
    explanation: "Feedback explanation."
  }
  ```
- **Update Search:** If you add new sections, edit `assets/search-index.json` to include the keywords and URL mapping so users can find it. 

## Presenter Mode
To enable presenter mode, click the "Toggle Presenter Mode" button on the bottom of the `index.html` page. This will enlarge all typography, hide the sidebars, and reveal big Next/Prev links at the bottom of the page, making it perfectly suited for a projector screen.
