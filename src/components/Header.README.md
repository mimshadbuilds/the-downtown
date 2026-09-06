# Header Component

The main header component displayed at the top of The Downtown magazine template. Typically contains the site title/logo and branding information.

## Overview

Header provides the visual identity and navigation context for the entire application. It sets the tone for the magazine layout and is the first element users encounter.

## Features

- Responsive header layout
- Logo/branding area
- Clean, minimal design
- Integrates with Navbar component
- Tailwind CSS styling

## Usage Example

```jsx
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />
      {/* Rest of page content */}
    </div>
  );
}
```

## Customization Tips

1. **Add Logo:** Place logo image in `src/assets/` and import it
2. **Branding Text:** Update the title text in the component
3. **Background Color:** Modify Tailwind bg-* classes
4. **Spacing:** Adjust padding (px-*, py-*) and margins
5. **Typography:** Change font size and weight classes (text-*, font-*)

## Styling

- Uses Tailwind CSS utility classes for styling
- Implements responsive design with breakpoints
- Maintains consistent spacing with project design system

## Related Components

- **Navbar** — Navigation menu (often placed in or near Header)
- **TopSlider** — Featured content below Header
- **App.jsx** — Main layout wrapper
