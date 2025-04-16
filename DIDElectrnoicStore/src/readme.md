# DID Electronic Store
This web application is designed to manage an electronic store's inventory efficiently. It enables users to perform essential CRUD (Create, Read, Update, Delete) operations on product data. The project is developed using HTML, CSS, and Bootstrap,javascript and Dexie.js(IndexDb wrapper).

# Features
Create: Add new products to the store.

Read: View all products in the store or display product records in a dynamic table.

Update: Edit existing product details.

Delete: Remove all products from the store. Note: if you click delete icon it will delete specific data by fetching the id.

User-friendly interface.

Bootstrap for responsive design.

Form inputs for Product ID, Product Name, Seller, and Price.

Local persistence using IndexDb via Dexie.js.

Instant UI feedback with success messages.

# Technologies Used

HTML
Bootstrap
Font Awesome 
javascript
Dexie.js(IndexDb wrapper)
css

# File Structure
- **index.html**: Main HTML file for the structure of the application.
- **style.css**: Custom CSS for additional styling.
- **main.js**: JavaScript file for database operations and app functionality.

# How to Use
Setup: Make sure you're connected to the internet, as some features rely on external libraries fetched from online sources.

Getting Started: Launch the index.html file in any modern web browser.

1. Clone or Download the Repo
bash
Copy
Edit
git clone https: https://github.com/Murali8327/B9IS123.git

2. Run the Project
Since it’s a frontend project with no backend, simply open the index.html file in your browser.

Or use a local development server (e.g., VS Code’s Live Server extension):

bash
Copy
Edit
# Open in VS Code and click "Go Live"
code

# How It Works
On page load, it initializes the IndexedDB database Productdb with a table named products.

Products can be added via the form and are saved using bulkAdd.

The "Read" button displays all stored products in a dynamic table.

Each entry comes with an "Edit" and "Delete" icon.

Updates and deletions happen in real-time and persist across page reloads.

# What You Can Do:
Use the input fields to manage product information.

The buttons let you perform different actions:
Create: Add new product details.

Read: View a list of all products saved.

Update: Edit the information of an existing product.

Delete All: Clear all product records from the database.

 # Known Issues
"Delete All" action resets the database schema manually (not ideal).

No input validation beyond checking for non-empty fields.

# Improvements
Add input validation and formatting (e.g., restrict price to numbers).

Filter or search functionality.

Confirm dialog before deleting entries.

Store product images.

Export data to CSV/JSON.

# Credits
Dexie.js
Bootstrap
Font Awesome



