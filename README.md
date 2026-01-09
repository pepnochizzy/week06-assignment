# Photo Gallery with React + Vite

-This gallery uses React and Vite. It also uses the Unsplash API.

# How to use:

-Using either your mouse or tab key, you are able to navigate through the images. If you click on an image (or press enter whilst focus on one), it will bring up a larger resolution of the image.
-There is a search bar, you can type what images you want to see and then press enter/click with mouse. The result will show the first 12 results from the Unsplash API

- User Stories
  🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively. y
  🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API. y
  🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user. y
  🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page. y
  🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view. y
  🐿️ As a user who relies on assistive technologies, I want images to have descriptive alt text so I can understand their content. y
  🐿️ As a user who navigates with a keyboard, I want to be able to tab through the interactive elements (like thumbnails and buttons) in a logical order. y
- Requirements
  🎯 Implement the useState hook to manage gallery state (e.g. selected image).
  🎯 Use useEffect for initial fetching of images from an external API.
  🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
  🎯 Use the .map() function to render an array of images dynamically
  🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
  🎯 Ensure all images have meaningful alt text.
  🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

## Resources

- https://stackoverflow.com/questions/61353311/adding-background-blur-via-css-behind-pop-up-modal for blurred background when modal is open
