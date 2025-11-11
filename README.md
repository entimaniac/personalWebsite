# Personal Website

A personal portfolio website built with SvelteKit, showcasing skills, experience, and contact information.

## Tech Stack

- **SvelteKit** - Modern web framework
- **TypeScript** - Type-safe development
- **Bulma** - CSS framework
- **Font Awesome** - Icons

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Navigate to `http://localhost:5173/`. The app will automatically reload when you make changes.

## Building

To create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── lib/
│   └── components/     # Svelte components
│       ├── About.svelte
│       ├── Skills.svelte
│       ├── Experience.svelte
│       └── Links.svelte
├── routes/
│   ├── +layout.svelte  # Layout with CSS imports
│   ├── +page.svelte    # Main page
│   └── styles.css      # Custom styles
└── app.html            # HTML template
```

## Features

- Responsive design with Bulma CSS
- Hero section with background image
- Skills showcase with progress bars
- Timeline of work experience
- Social media links (LinkedIn, GitHub, Email)

## Deployment

To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment (Vercel, Netlify, etc.).
