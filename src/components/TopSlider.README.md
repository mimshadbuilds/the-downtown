# TopSlider Component

A responsive carousel/slider component for displaying featured content at the top of the page. Automatically rotates through featured news items with smooth transitions.

## Overview

TopSlider is designed to showcase hero/featured articles in an eye-catching rotating carousel. It provides an engaging entry point for users to discover top stories.

## Features

- Auto-rotating carousel with customizable interval
- Smooth transitions between slides
- Responsive design across all screen sizes
- Navigation indicators
- Previous/Next controls
- Lazy-loaded images for performance

## Props

Currently, TopSlider accepts featured article data. Refer to the component implementation for detailed prop structure.

## Usage Example

```jsx
import TopSlider from './components/TopSlider';

export default function HomePage() {
  const featuredArticles = [
    {
      id: 1,
      imgUrl: 'https://example.com/featured1.jpg',
      title: 'Breaking: Major Announcement',
      category: 'Headlines',
      detail: 'This is a major news story...',
      author: 'John Reporter',
      date: 'Sept 6, 2024'
    },
    {
      id: 2,
      imgUrl: 'https://example.com/featured2.jpg',
      title: 'Market Reaches New High',
      category: 'Business',
      detail: 'Financial markets show strong performance...',
      author: 'Finance Team',
      date: 'Sept 6, 2024'
    }
    // ... more articles
  ];

  return (
    <div>
      <TopSlider articles={featuredArticles} />
      {/* Rest of content */}
    </div>
  );
}
```

## Customization Tips

1. **Auto-rotation Speed:** Adjust the interval timing in the component state (typically 3000-5000ms)
2. **Transition Effect:** Modify CSS transitions or animation classes
3. **Navigation Position:** Reposition indicator dots and previous/next buttons
4. **Image Height:** Adjust responsive height classes (sm:h-X md:h-X lg:h-X)
5. **Pagination Style:** Customize the indicator dots styling

## Performance Considerations

- Images use lazy loading to improve initial page load
- Consider using optimized image formats (WebP)
- Limit number of slides to avoid excessive DOM elements
- Debounce navigation controls to prevent rapid clicking

## Accessibility

- Keyboard navigation support (arrow keys for previous/next)
- ARIA labels for screen readers
- Sufficient color contrast for all interactive elements
- Focus indicators visible on keyboard navigation

## Related Components

- **NewsCard** — Used for displaying individual slides
- **Header** — Often placed above TopSlider
- **Navbar** — Navigation context
