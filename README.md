# Notebook – Multi-File Markdown Editor

## Project Choice
I chose **The "Notebook" - Multi-File Markdown Editor**. This project allows users to create, manage, and edit multiple Markdown files in a browser-based interface with a three-panel layout: a file list (sidebar), an editor, and a live preview.

## Justification of Tools
- **React (v19.2.4)**: For building a dynamic, responsive frontend interface.  
- **Vite (v7.3.1)**: For fast build times and simple project setup.  
- **CodeMirror 6 (@uiw/react-codemirror)**: Provides a lightweight, robust Markdown editor with syntax highlighting.  
- **ReactMarkdown**: For rendering Markdown content in the live preview panel.  
- **LocalStorage**: For persistent storage of notes directly in the browser without a backend.
- **ChatGPT (GPT-5-mini)**: Used for guidance to structure feature requirements, plan logic for file naming, responsive layout, and other behaviors. This demonstrates effective use of an LLM to assist software design and problem solving.

These tools allow the app to run entirely in the browser, providing a smooth, interactive experience without needing a server.

## High-Level Approach
1. **State Management**: All files are stored in a React state array. Each file has a unique `id`, `name`, and `content`.  
2. **File Operations**:
   - Add new notes → automatically generates unique names (`Untitled`, `Untitled 1`, …).  
   - Rename → double-click to edit the file name.  
   - Delete → removes selected file.  
   - Select → single-click to open a file in the editor.  
3. **Editor & Preview**:  
   - The editor panel uses CodeMirror 6 for Markdown editing.  
   - The preview panel preserves all line breaks and blank lines exactly as in the editor using ReactMarkdown with a `<br />` strategy.  
4. **Responsive Design**: The layout is fully responsive, adapting to different screen sizes while keeping three panels functional.

## Final Prompts
These are the copy-pastable prompts used to guide development:
1. "I want to build a browser-based multi-file Markdown editor with three panels: file list (sidebar), Markdown editor, and live preview."
2. "Make it responsive and modern minimalist, using React and JavaScript."
3. "Fix page not showing anything; provide complete working code."
4. "React version 19.2.4, Vite 7.3.1, Codemirror 6.0.2 — update imports and code accordingly."
5. "Make all three panels into separate components: Sidebar, Editor, Preview."
6. "Ensure the sidebar file names are visible, editable, and scrollable if long."
7. "Preserve all newlines and blank lines in the preview exactly as in the editor."
8. "Click once on a file → open note; double-click → edit the file name."
9. "When adding a new note, automatically generate unique names like Untitled, Untitled 1, Untitled 2… without duplicating the last note."
10. "Make the editor and preview panel fit the entire screen and be responsive on any device."
11. "Set readable font colors for file names and note content."
12. "Provide a fully functional solution with folder structure, components, and responsive layout."

## Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the project locally
```bash
npm run dev
```
- The app will open at http://localhost:5173 (Vite default).

### 4. Build for production
```bash
npm run build
```

### 5. Deploy
Vercel (recommended):
1. Create an account on Vercel
2. Connect your GitHub repository to Vercel.
3. Select the project and deploy.
4. Copy the public URL and replace the Deployment URL below.
- Alternative: any static host (Netlify, GitHub Pages, etc.) using the dist/ folder.

## Challenges & Iterations
1. Preserving blank lines in preview: Initially, ReactMarkdown collapsed multiple blank lines. Solved by converting each newline into <br /> elements.
2. Responsive three-panel layout: Panels initially didn’t scale to smaller screens. Fixed with CSS Grid and vh/vw units.
3. Unique file naming: Adding new notes would duplicate the last note name. Solved by checking existing names and appending an incremental number.
4. Editing file names: Initially, file names edited on single click, which conflicted with selecting a file. Solved by enabling double-click to edit and single-click to select.

## Deployment URL
https://markdown-notebook-kohl.vercel.app?_vercel_share=Gi3vyAzeVXQfodp9IaS6lP6494f9virN
