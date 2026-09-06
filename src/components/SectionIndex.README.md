# SectionIndex Component

A utility or layout component that organizes and displays different content sections within The Downtown magazine.

## Overview

SectionIndex may be used for section headers, category indices, or organizing content into distinct editorial sections.

## Usage Example

```jsx
import SectionIndex from './components/SectionIndex';

export default function Magazine() {
  return (
    <div>
      <SectionIndex title="Latest News" />
      {/* Articles in this section */}
      
      <SectionIndex title="Opinion" />
      {/* Opinion pieces */}
    </div>
  );
}
```

## Customization Tips

1. **Section Title:** Pass title prop for section heading
2. **Styling:** Modify Tailwind classes for borders and spacing
3. **Icons:** Add section-specific icons or badges
4. **Layout:** Adjust flex or grid properties for different layouts

## Related Components

- **NewsCard** — Items displayed in sections
- **TopSlider** — Featured items section
- **Header** — Above all sections
