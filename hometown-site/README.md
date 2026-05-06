# Hometown Communities Website

A Next.js website for Hometown Communities with Sanity CMS integration.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **CMS:** Sanity
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## Project Structure

```
hometown-site/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with Header/Footer
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   └── layout/          # Layout components (Header, Footer)
│   ├── lib/
│   │   └── sanity/          # Sanity client configuration
│   │       ├── client.ts    # Sanity client setup
│   │       ├── image.ts     # Image URL builder
│   │       └── queries.ts   # GROQ queries
│   └── types/               # TypeScript type definitions
│       └── sanity.ts        # Sanity document types
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
└── .env.local.example       # Environment variables template
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository and navigate to the project:

```bash
cd hometown-site
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

4. Edit `.env.local` with your Sanity project credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://hometowncommunities.com
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Sanity CMS Setup

### Creating a Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage) and create a new project
2. Copy the Project ID and add it to your `.env.local` file
3. Set up your Sanity Studio separately (instructions below)

### Sanity Studio (Separate Setup)

The Sanity Studio should be set up as a separate project or in a `/studio` subdirectory. To initialize:

```bash
# In a separate directory or subdirectory
npm create sanity@latest
```

### Required Sanity Schemas

The following document types should be created in your Sanity Studio:

- `settings` - Site-wide settings (title, description, logo)
- `community` - Individual community pages
- `homePage` - Home page content
- `page` - Generic pages (About, Contact, etc.)

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Image Configuration

The Next.js config is set up to allow images from:
- `hometowncommunities.com`
- `www.hometowncommunities.com`
- `cdn.sanity.io` (Sanity hosted images)

## SEO

SEO defaults are configured in `src/app/layout.tsx` using Next.js Metadata API:

- Default title template: `%s | Hometown Communities`
- Open Graph and Twitter card defaults
- Robots configuration for search engine indexing

Individual pages can override metadata by exporting their own `metadata` object.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your hosting provider:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_SITE_URL`

## Next Steps

1. [ ] Create Sanity Studio project and schemas
2. [ ] Add real community data to Sanity
3. [ ] Create individual community pages (`/communities/[slug]`)
4. [ ] Add About, Contact, and other static pages
5. [ ] Implement contact form with form handling
6. [ ] Add analytics tracking
7. [ ] Set up sitemap generation
8. [ ] Configure preview mode for Sanity drafts

## License

Private - All rights reserved.
