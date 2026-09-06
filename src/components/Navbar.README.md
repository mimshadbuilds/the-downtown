# Navbar Component

Navigation bar component for The Downtown magazine. Provides category/section links and main navigation for the site.

## Overview

Navbar offers users a way to browse different article categories and sections of the magazine. It supports responsive design for mobile and desktop viewing.

## Features

- Category/section navigation links
- Responsive mobile menu
- Horizontal scrolling on mobile (if needed)
- Clean, minimal design
- Integration with Tailwind CSS

## Props

The component structure accepts navigation items. Refer to the component implementation for detailed props.

## Usage Example

```jsx
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <header>
        {/* Header content */}
      </header>
      <Navbar />
      {/* Page content */}
    </div>
  );
}
```

## Customization Tips

1. **Add Categories:** Update the navigation links/items array in the component
2. **Active State:** Add logic to highlight the current category
3. **Colors:** Modify Tailwind color classes (text-*, bg-*, border-*)
4. **Spacing:** Adjust padding and margins for density
5. **Font Size:** Change text size classes for different hierarchy
6. **Mobile Menu:** Add hamburger icon and toggle behavior for smaller screens

## Styling

- Uses Tailwind CSS for responsive design
- Implements breakpoints for mobile (sm:), tablet (md:), desktop (lg:)
- Maintains visual consistency with Header component

## Related Components

- **Header** — Typically above Navbar
- **NewsCard** — Items filtered by Navbar categories
- **TopSlider** — Main content area below navigation

## SEO Considerations

- Use semantic HTML nav tags
- Ensure links are crawlable by search engines
- Add appropriate ARIA labels for accessibility
