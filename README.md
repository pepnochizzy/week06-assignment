# Photo Gallery with React + Vite

-This gallery uses React and Vite. It also uses the Unsplash API.

# How to use:

-Using either your mouse or tab key, you are able to navigate through the images. If you click on an image (or press enter whilst focus on one), it will bring up a larger resolution of the image (you can close this by using the esc key or clicking the X button).
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
- https://medium.com/@FrameMuse/react-modals-management-is-done-right-d44805d517b, https://www.youtube.com/watch?v=YwHJMlvZRCc, some stackOverflow.
- https://www.freecodecamp.org/news/optional-chaining-javascript/#:~:text=Optional%20chaining%2C%20introduced%20in%20ECMAScript,optional%20chaining%20operator%20(%20%3F.%20) Optional chaining further reading

## Reflection

- The Dialog/modal: I originally had a modal that was made with just divs, it worked fine but Bertie also suggested looking into Dialogs. When I looked into them, they looked interesting and I liked the automatic 'esc' key useage from the browser. They seem more accesible when done right. I was researching into it and saw that there are many ways to create a Dialog tag within react. Because I needed to pass information in and was using the browser methods of showModal() and close(), it made sense to go with the useEffect shown in the article linked. (from my understanding, useEffect has to run them after the component is in the DOM because React can't call the methods mentioned during render- because they are browser methods). I also liked that the dialog automatically centers itself and has a background (easy styling and less code to return in Modal.jsx)
- I found this project difficult due to the "put it all together" aspect. We had done individual lessons on everything needed but before the assignment we had not put many of the lessons together. I found the getting the api and the information simple, I also understood the use of components, how to format my code etc. But, the logic behind some parts such as how to get information around, where is the best place to store states etc was confusing. After speaking to Bertie, he encouraged me to draw a tree to see what components needed what useStates or props. This did help.
- For the css, I kept it pretty simple. I really wanted to go with a masonry style (set your columns and then set rows to masonry()) but, after doing some research, I found that this is not widely supported and I believe only firefox and safari support it. I was gutted because it would have been perfect for randomly generated images. I also looked up a lot of alternatives like using columns or flexbox but I found, because of the buttons and random image sizing, it was quite difficult to get the layout I really wanted. I think the current layout looks fine but the portrait images look smaller than the landscape images. In the future, I would spend a lot more time on the css aspects. I think it still looks somewhat professional but could look more styled and coherent. If the images were preselected like in my week 2 assignment, I could have styled it more professionaly but due to the random nature of the images, I found this week styling to be more complex. Any advice/feedback would be appreciated!
- I still tried to keep my work accessible and responsive. I went with mobile first, scaling back the number of columns for mobile users so the images did not shrink too much and also ensured the search bar was top right for easy reach on mobile. The images, buttons and text are responsive. The images all have alt but I did realise that my modal expanded image previews did not have an alt text so I had to go back and refactor my code to ensure that the modal state was an object array that took src and alt. Before it only stored src as a string meaning no alt existed in the dialog/modal.
- Overall, I am happy with the outcome but I feel the CSS needs some work as does my overall comprehension of React. I understand this will come with time, the idea of useState and useEffect is beginning to make more sense and become more intuitive. I am happy with my progress so far with React and enjoy the challenge.
- In lighthouse my app got 100% in accessibility and best practices but was a 70% on the performance due to the largest contentful paint taking 2.9s.
