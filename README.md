# YNA Portal - Opportunity Board

A comprehensive opportunity board web application for YN Academy students that aggregates and displays relevant opportunities based on their educational track.

## Features

### ✅ Implemented (Phase 1)

- **Atomic Design Architecture**: Components organized by atoms, molecules, and organisms
- **Smart Filtering System**: Filter by track and opportunity type
- **Real-time Search**: Search across titles, organizations, and descriptions
- **Responsive Grid View**: Mobile-first responsive card layout
- **Golden Ratio Spacing**: Fibonacci-based spacing (8px, 13px, 21px, 34px, 55px)
- **Dark Mode Support**: Automatic dark/light theme switching
- **Save Opportunities**: Mark opportunities for later review
- **8 Sample Opportunities**: Covering all tracks (Engineering, Media, IT/Coding, Business, Athletics, Communications, Agriculture, General)

### Component Structure

```
client/src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   ├── molecules/       # Combined atoms
│   │   ├── OpportunityCard.tsx
│   │   ├── SearchBox.tsx
│   │   └── FilterBar.tsx
│   └── organisms/       # Complex sections
│       ├── OpportunityGrid.tsx
│       └── FilterPanel.tsx
├── hooks/
│   └── useOpportunities.ts  # Filtering & search logic
├── types/
│   └── opportunity.ts       # TypeScript types
└── data/
    └── opportunities.ts     # Sample data
```

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 3 with custom golden ratio spacing
- **Build Tool**: Vite 7
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Calendar**: react-calendar

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
yna-portal/
├── client/              # React frontend source
│   ├── src/
│   ├── public/
│   ├── .gitignore
│   └── README.md
├── server/              # Future backend (TBD)
├── shared/              # Shared types (future)
├── index.html           # Entry HTML
├── vite.config.ts       # Vite configuration
├── tailwind.config.cjs  # Tailwind CSS config
├── postcss.config.cjs   # PostCSS config
├── tsconfig.json        # Root TypeScript config
├── tsconfig.app.json    # App TypeScript config
├── tsconfig.node.json   # Node TypeScript config
├── package.json         # Dependencies & scripts
└── node_modules/        # All dependencies
```

## Opportunity Data Schema

Each opportunity includes:

- **Basic Info**: Title, organization, type, tracks
- **Description**: Detailed description
- **Requirements**: Age, skills, experience level, eligibility
- **Dates**: Application open/close, program start/end, event date
- **Benefits**: Monetary, equipment, mentorship, certificates
- **Meta**: Location, time commitment, success rate, alumni notes, difficulty

## Filtering & Search

- **Track Filter**: Engineering, Media, IT/Coding, Business, Athletics, Communications, Agriculture, General
- **Type Filter**: Scholarship, Competition, Job, Grant, Internship, Event, Workshop, Hackathon
- **Search**: Real-time search across title, description, organization, and tracks
- **Active Filters**: Visual display of active filters with one-click removal

## UI Validation Report

✅ **COMPLETED** - Validated by frontend-ui-validator agent on 2025-10-02

**Strengths:**
- ✅ Proper atomic design structure (atoms, molecules, organisms)
- ✅ 33 opportunities across all tracks
- ✅ Comprehensive TypeScript types
- ✅ Dark mode support throughout
- ✅ Three view modes (Grid, List, Calendar)
- ✅ Responsive mobile-first design
- ✅ Clean state management with custom hooks

**Fixed Issues:**
- ✅ Added `recognition` field to OpportunityBenefits interface
- ✅ Removed unused Badge import from FilterBar
- ✅ Fixed type imports using `import type` syntax

**Remaining Improvements (Non-Critical):**
- ⚠️ Golden ratio spacing configured but not consistently applied
- ⚠️ CalendarView has inline styles (should extract to CSS module)
- ⚠️ Duplicate `getDeadlineDate()` logic (should extract to utility)
- ⚠️ No dark mode toggle (relies on system preferences only)
- ⚠️ Missing ARIA live regions and fieldsets for better accessibility

**Overall Grade: B+** - Production-ready with recommended enhancements

## Roadmap

### Phase 2 (Completed)
- [x] Calendar view with react-calendar
- [x] List view for detailed scanning
- [x] View switcher component
- [ ] Map view for local opportunities (future)

### Phase 3 (Future)
- [ ] Backend with Neon DB + Drizzle ORM
- [ ] User authentication with Stack Auth
- [ ] Personal dashboard with saved opportunities
- [ ] Notification system for deadlines
- [ ] Admin panel for managing opportunities

### Phase 4 (Future)
- [ ] Matching algorithm based on student profile
- [ ] Application helper tools
- [ ] Success tracker
- [ ] Mentor connect feature

## Design Principles

### Atomic Design
Components are organized following the atomic design methodology:
- **Atoms**: Button, Badge, Input, Card
- **Molecules**: OpportunityCard, SearchBox, FilterBar
- **Organisms**: OpportunityGrid, FilterPanel
- **Templates**: App layout (future)
- **Pages**: Specific instances (future)

### Golden Ratio Spacing
Spacing follows the Fibonacci sequence for visual harmony:
- XS: 8px
- SM: 13px
- MD: 21px
- LG: 34px
- XL: 55px

Typography:
- Body: 16px
- Subheading: 26px
- Heading: 42px

## Contributing

This is a YN Academy project. Future enhancements should maintain:
- Atomic design structure
- Golden ratio spacing
- TypeScript type safety
- Mobile-first responsive design
- Accessibility standards

## License

MIT - YN Academy 2025
