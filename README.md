# Benedict Korie — DevOps Hub

A live DevOps portfolio and pipeline dashboard built with Node.js, containerised with Docker, and deployed automatically to Render.com via GitHub Actions on every push to main.

🌐 **Live URL:** https://benedict-devops-hub.onrender.com
> Free tier — allow ~30 seconds to load if the service has been idle.

---

## What It Does

- Displays my DevOps projects with descriptions, tech stack tags and links
- Pulls live pipeline run data from the GitHub Actions API and renders it in real time
- Automatically deploys on every push via GitHub Actions → Docker Hub → Render.com

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express |
| Frontend | HTML, CSS, Vanilla JS |
| API Integration | GitHub Actions REST API |
| Containerisation | Docker |
| CI/CD | GitHub Actions |
| Hosting | Render.com |

---

## Pipeline Overview
Push to main → Build Docker image → Push to Docker Hub → Trigger Render deploy

## Project Structure
benedict-devops-hub/
├── public/
│   ├── index.html        # Frontend layout
│   ├── style.css         # Styling
│   └── app.js            # GitHub API calls and DOM rendering
├── server.js             # Express server and API proxy
├── Dockerfile            # Container definition
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline
└── .env                  # Local environment variables (not committed)

---

## Secrets Required

| Secret | Purpose |
|---|---|
| `DOCKERHUB_USERNAME` | Docker Hub authentication |
| `DOCKERHUB_TOKEN` | Docker Hub authentication |
| `RENDER_DEPLOY_HOOK` | Triggers deployment on Render |
| `GITHUB_TOKEN` | GitHub API access for pipeline data (set in Render environment variables) |

---

## Author

**Benedict Korie** — DevOps & Cloud Engineer, London  
[GitHub](https://github.com/Joshuche22) · [LinkedIn](https://linkedin.com/in/benedict-chijindu-korie-4b29a837b) · benedictkorie785@gmail.com