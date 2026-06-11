# Jordan Misseos — Portfolio Website

Dark, modern single-page portfolio. Pure HTML/CSS/JS — no build step, no dependencies.

## Run it

Open `index.html` in any browser. That's it.

## Add a project

Open `projects.js`, copy the template at the top of the file, paste a new entry at the top of the `PROJECTS` array, and fill it in. The site renders cards, tags, and filter buttons automatically.

Images: drop them in an `assets/` folder and set `image: "assets/your-file.jpg"`. Leave `image: ""` for a styled placeholder.

## Customise

- **Accent color**: change `--accent` in `styles.css` (one line).
- **Resume link**: update the `Resume (PDF)` href in `index.html` contact section.
- **LinkedIn**: update the LinkedIn href in the contact section.

## Deploy free

1. Create a GitHub repo, push these files.
2. Repo Settings → Pages → deploy from `main` branch root.
3. Site goes live at `https://<username>.github.io/<repo>/`.
