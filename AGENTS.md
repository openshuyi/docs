# AGENTS.md - Development Guidelines

This file provides instructions for agentic coding agents working in this repository.

---

## 📦 Project Overview

**Stack:** Next.js 16 + Fumadocs (MDX) + React 19 + TypeScript + Tailwind CSS 4  
**Purpose:** Documentation site with AI-powered features  
**Deployment:** GitHub Pages (static export)

---

## 🛠 Build & Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production (static export)
pnpm build

# Start production server (local testing)
pnpm start

# Type checking (includes MDX type generation)
pnpm types:check
```

### Running Single Tests
This project does not have a traditional test suite. For validation:
- **Type checking:** `pnpm types:check`
- **Build validation:** `pnpm build`
- **MDX validation:** `fumadocs-mdx` (runs automatically via postinstall)

---

## 📁 Project Structure

```
docs/
├── app/                      # Next.js App Router pages
│   ├── (home)/               # Home route group (landing pages)
│   ├── docs/                 # Documentation pages
│   ├── og/                   # OpenGraph image generation
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # Reusable React components
│   └── ai/                   # AI-related components
├── content/                  # MDX content files
│   ├── docs/                 # Documentation content
│   ├── log/                  # Diary/journal entries
│   ├── milestones/           # Milestone records
│   └── observations/         # Observation notes
├── lib/                      # Utility functions & shared code
│   ├── cn.ts                 # Tailwind class merger
│   ├── layout.shared.tsx     # Shared layout configuration
│   └── source.ts             # Content source adapter
├── source.config.ts          # Fumadocs MDX configuration
└── mdx-components.tsx        # MDX component mapping
```

---

## 📝 Code Style Guidelines

### Imports
- **Order:** External packages → Internal aliases (`@/`) → Relative imports
- **Style:** Use named imports over default when possible
- **Path alias:** `@/*` maps to root directory

```typescript
// ✅ Good
import { loader } from 'fumadocs-core/source';
import { cn } from '@/lib/cn';
import { MyComponent } from './my-component';
```

### TypeScript
- **Strict mode:** Enabled (`strict: true` in tsconfig)
- **No implicit any:** Always define types explicitly
- **Function types:** Use type aliases for function signatures
- **Generics:** Prefer `const` type parameter inference (TypeScript 5+)

```typescript
// ✅ Good
export function getPageImage(page: InferPageType<typeof source>) {
  // ...
}

// ✅ Good
export default function Layout({ children }: LayoutProps<'/'>) {
  // ...
}
```

### Naming Conventions
- **Files:** kebab-case for content (`.mdx`), PascalCase for components (`.tsx`)
- **Components:** PascalCase
- **Utilities:** camelCase
- **Shared layout files:** `*.shared.tsx` suffix
- **Type exports:** PascalCase, prefixed with `type` in imports

### Formatting
- **Quotes:** Single quotes for strings
- **Semicolons:** Always use semicolons
- **Trailing commas:** Use in multi-line objects/arrays
- **Line length:** No hard limit, but keep lines readable

### Error Handling
- **Next.js routing:** Use `notFound()` for 404 scenarios
- **Try/finally:** Use for cleanup (e.g., loading state management)
- **Type safety:** Leverage TypeScript for compile-time error prevention

```typescript
// ✅ Good
try {
  setLoading(true);
  // ... async operation
} finally {
  setLoading(false);
}
```

### React Conventions
- **'use client':** Add at top of client components
- **Hooks:** Use built-in hooks (`useMemo`, `useState`) before custom hooks
- **Props typing:** Use inline type annotations for component props
- **Children:** Type as `React.ReactNode` or use layout pattern

### Tailwind CSS
- **Utility-first:** Prefer inline Tailwind classes
- **Class merging:** Use `cn()` from `@/lib/cn` for conditional classes
- **Custom styles:** Use inline `style` prop for dynamic values

```typescript
// ✅ Good
className={cn(
  buttonVariants({ color: 'secondary', size: 'sm' }),
  'gap-2 [&_svg]:size-3.5',
)}
```

### MDX/Fumadocs
- **Content location:** All MDX files go in `content/` directory
- **Frontmatter:** Use Fumadocs schema (`pageSchema`, `metaSchema`)
- **Components:** Extend MDX via `mdx-components.tsx`
- **Relative links:** Use `createRelativeLink` helper

---

## 🎯 Key Patterns

### Client Components
```tsx
'use client';
import { useState } from 'react';

export function MyComponent({ url }: { url: string }) {
  const [loading, setLoading] = useState(false);
  // ...
}
```

### Server Components (Pages)
```tsx
export default async function Page(props: PageProps<'/path'>) {
  const params = await props.params;
  // ... server-side logic
}
```

### Shared Configuration
```typescript
// lib/layout.shared.tsx
export const gitConfig = {
  user: 'username',
  repo: 'repo-name',
  branch: 'main',
};
```

---

## 🚫 Anti-Patterns

- ❌ Don't use `any` type
- ❌ Don't skip `await` for async params in Next.js 15+
- ❌ Don't use `var` - always use `const` or `let`
- ❌ Don't commit `.next/` or `node_modules/`
- ❌ Don't add secrets to code (use environment variables)

---

## 📌 Additional Notes

- **Package manager:** pnpm (lockfile: `pnpm-lock.yaml`)
- **Node version:** 20+
- **GitHub Pages:** Configured with `basePath: '/docs'`
- **Images:** Unoptimized (required for static export)
- **Trailing slashes:** Enabled (`trailingSlash: true`)

---

*Last updated: March 2026*
