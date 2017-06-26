# Walmart Product Manager

## Description
Walmart Product Manager is an interface for working with locally-managed data pulled from Walmart Open API.

## Features
* Built with ReactJS with Redux and Webpack and run locally using webpack-dev-server
* Edits to state are synced with localStorage, ensuring a seamless user experience with minimal page reloads and persistent data
* Information is sortable by product Name, Price, MSRP, and Avg. Customer Review using a custom sort function integrated into the Redux data flow path at the reducer level
* Brand name is an editable field, allowing for customizable input
* Individual products can be deleted from the master list
* Locally-managed products can be filtered by name
* Entire repository can be deleted with the click of a button, allowing for easy purge of browser storage
* Information is checked for duplicity before being added to state, reducing redundency
* Advanced search gives the user the option to narrow down their query for a customized request from Walmart Open API
  * Filter by brand name, number of results (max is 25 per request), and the starting index of the results as designated in Walmart Open API
  * Sort by relevance, price, title, bestseller, customer rating, or new

## Installing
1. `git clone`
1. `npm install`
1. `npm start`
1. Navigate to http://localhost:8080

## Use
* To pull products directly from the Walmart Open API and populate a new data store, enter a search query in the top toolbar
* Filter results using the search feature above the data table
* To clear all results and start a new request, click the 'Clear Table' button (this is permanent!)
* To append to the current data store (localStorage) with an additional request, simply enter a new query in the top toolbar. The API will check for duplicity in results and update localStorage and state accordingly!
* To edit brand name, click on the carat and an editable field will open; make changes to the suggested name to update, or submit without changes to cancel
* Columns with a caret next to them are sortable in both ascending and descending order; click on the caret to toggle
* Click on the link next to the product name to take you to the product URL on Walmart.com
* To delete a project from the locally-managed data, click the 'X' on the right-hand side of the product row

## Areas for Further Development
* Add a button to pull more search results from Walmart Open API where the previous search left off (max pull at one time is 25 products)
* Add pagination as product list grows, with an option to customize number of results per page
* Fix styling of toolbar when  <AdvancedSearch /> renders
* Make editable brand name field more intuitive, e.g. not a caret
* Add functionality to group products by category
  * Make the category path breadcrumb trail into a list of links
  * Clicking a link will filter the list of products to include only those within the designated category
* Integrate frontend testing using Mocha/Chai/Enzyme
* Modularize CSS stylesheets using CSS modules and Sass
* Integrate functionality so user can work with their own API key for queries
* Add an alert or modal to warn user that clearing the table cannot be undone, thereby reducing the risks of accidental data loss while still preserving the option for an easy purge method
* Integrate column-resizing functionality
* Integrate a feature so the user can customize exactly what data is stored locally and/or displayed on the table at any given time (currently limited to product image, name, url, price, msrp, avg. customer review, number of reviews, and brand name)

## Author
* Meredith Kiung
