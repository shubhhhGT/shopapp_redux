**React Redux Shopping Cart App**

**Introduction:**

This is a modern e-commerce shopping cart app built with React and Redux. 

Features:
- User-friendly interface
- Real-time cart updates
- Smooth transitions and animations
- Redux for state management
- React Router for navigation

**Getting Started:**

**Prerequisites:**

- Node.js and npm installed

**Installation**:

Clone the repository:
`git clone https://github.com/your-username/react-redux-shopping-cart.git`

Navigate to the project directory: 
`cd react-redux-shopping-cart`

Install dependencies: 
`npm install`

**Usage:**

Run the app locally:
`npm start`

Access it at[ http://localhost:3000/](http://localhost:3000/)

**Project Structure:**

- src/index.js: Main entry point
- src/App.js: Main component
- src/pages/Home.js and src/pages/Cart.js: Page components
- src/components/Navbar.js: Navigation bar component
- src/redux/slices/CartSlice.js: Redux slice for cart state
- src/redux/store.js: Redux store configuration

**Components:**

This is a React-based e-commerce shopping cart application with two main components: Home and Cart. The app allows users to browse and purchase products, manage their shopping cart, and proceed to checkout.

**Home**

The Home component fetches product data from an external API, displays loading spinners during data retrieval, and presents product cards to users. Key features of the Home component include:

- Real-time loading indicators using the Spinner component.
- Toast notifications to handle API errors.
- Product cards rendered based on fetched data.
- Responsiveness for different screen sizes.

**Cart**

The Cart component manages the user's shopping cart, displaying cart contents, total amounts, and a checkout button. Key features of the Cart component include:

- Utilizes Redux for state management to keep track of the cart.
- Dynamically calculates and updates the total amount.
- Allows users to remove items from the cart individually.
- Provides a checkout button to proceed with the purchase.

**Other Components:**

**Product.jsx** 
Description
The Product.jsx component represents a product card in the e-commerce app. It allows users to view product details, add items to the cart, and remove them.

Features

- Displays product title, description, image, and price.
- Supports adding and removing products from the cart.
- Utilizes Redux for state management.
- Provides toast notifications for user feedback.

**Navbar.jsx** 
Description
The Navbar.jsx component is the application's navigation bar. It enables users to navigate between the home page and the shopping cart page.

Features

- Displays the company logo.
- Includes navigation links for the home page and cart.
- Dynamically updates the cart icon with the number of items in the cart.

**CartItem.jsx** 
Description
The CartItem.jsx component represents an item in the shopping cart. Users can view and remove items from the cart using this component.

Features

- Displays product information (title, description, price, and image).
- Supports the removal of items from the cart.
- Utilizes Redux for state management.
- Provides toast notifications for item removal.

**Spinner.jsx** 
Description
The Spinner.jsx component is a simple loading spinner. It adds a visual indicator to inform users that a process is in progress.

Features

- Displays a customizable loading spinner.
- Enhances user experience during data loading.
