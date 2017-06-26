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

## Author
* Meredith Kiung
