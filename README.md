# Project 2 - Recipe App

### Description
This project is a web application that allows users to search for and save recipes. It was completed as part of a frontend web development course and utilizes technologies such as React and Axios to interact with a 3rd party API to fetch recipe data.  
  
### Deployment Link
The deployed project can be found at https://aesthetic-longma-3833b0.netlify.app/  
   
### Getting Started/Code Installation
To access the code for this project, follow these steps:
1. Clone the repository from https://github.com/3ddy1985/recipe-app.git
2. Install the required dependencies using npm install
3. Start the server using npm start
4. Visit http://localhost:3000 in your browser to view the app 
 
   
   
### Timeframe & Working Team
This project was completed individually over a period of 1 wee  
  
  
### Technologies Used
React
* HTML
* CSS
* JavaScript
* Axios
* Edamam API
* React Bootstrap  
     
### Brief
Select a Project Idea of your own. But the user must be able to:
* Add a new item to a list
* Mark the item as complete/favourite/(watch, read, listen) later/flag/etc
* Edit an item from a list
* Remove an item from a list
* Clear/delete all items
* Clear/delete only marked items
* Fetch data from at least one 3rd party API using Axios or fetch.
* Make frequent Git commits with descriptive messages, explaining your commit.

### Planning
During the planning stage, I created wireframes for the app's user interface and determined the API to be used for the project. I also spent some  time testing different API’s to find one that would do what I needed for the app.

![alt text](https://github.com/3ddy1985/recipe-app/blob/main/MVP%20WireFrame%20.png?raw=true)

### Build/Code Process
After setting up the React environment and creating the basic layout, I started working on the search functionality using class components. I used Axios, a popular JavaScript library for making HTTP requests, to fetch data from the Edamam API. To handle the search query and API key, I created an environment variable file (.env) to store the API key and used it in the Axios request.

In the Search component, I created a state variable to store the search query and a handleSubmit function to handle the form submission. When the form is submitted, the handleSubmit function makes an Axios request to the Edamam API with the search query and API key. Once the data is returned, it calls a callback function passed down as a prop to update the state of the Results component.

In the Results component, I created a state variable to store the search results and a function to handle displaying the recipe details when a user clicks on a recipe. I then mapped over the search results and rendered them as Recipe components, passing the recipe details as props.

To improve the visual design of the app, I used CSS modules to create separate stylesheets for each component and imported them as needed. I also used Flexbox and CSS Grid to create a responsive layout that looks great on desktop and mobile devices.

Overall, my approach to building this app was to break down the functionality into separate class components and focus on one feature at a time. This allowed me to create a modular and reusable codebase that is easy to maintain and update in the future.

Search Functionality:
```js
 searchRecipes = () => {
        const params = {
            type: 'public',
            q: this.state.selectedIngredients.join(','),
            app_id: appId,
            app_key: appKey,
            
        };

        axios
            .get(baseURL, { params })
            .then((response) => {
                console.log(response)
                this.setState({
                    recipes: response.data.hits
                });
                console.log(response.data.hits)
            })
            .catch((error) => console.log(error));
    };
```

Compare Ingredient search:
```js
compareIngredientsSearch = event => {
        const searchResult = event.target.value;
    
        if(this.state.selectedIngredients.length === 0) {
            if(this.state.allIngredients.indexOf(searchResult) !== -1 ) {
                this.setState({
                    selectedIngredients: [...this.state.selectedIngredients, searchResult],
                    searchInput: ""
                })
            }
        }
        else if(this.state.allIngredients.indexOf(searchResult) !== -1 && !this.state.selectedIngredients.includes(searchResult)) {
            this.setState({
                selectedIngredients: [...this.state.selectedIngredients, searchResult],
                searchInput: ""
            })
        }
      };
```
 
### Challenges:
One of the biggest challenges I encountered during this project was dealing with the complexity of the Edamam API's response data. I had to parse and filter the data to extract the information I needed to display in the app. Additionally, the API had a limitation that only allowed me to search for recipes with a maximum of 5 ingredients. This posed a significant challenge as I had to find a workaround to retrieve as many recipes as possible and then filter them by all ingredients. Despite this limitation, I was able to find a solution that allowed the app to function as intended.


### Wins:
I am proud of the search functionality I implemented, as it allows users to find recipes quickly and easily. Although not completed I also think the visual design of the app turned out well.

### Key Learnings/Takeaways:
Through working on this project, I gained a deeper understanding of React and Axios, as well as how to integrate them to fetch data from 3rd party APIs. I also learned how to use React-Bootstrap to create a cohesive and visually appealing user interface.


### Bugs:
The app was not completely finished as i ran out of time, so no real bugs to mention as of yet. 


### Future Improvements:
* Implement the changes to be able to filter with more ingredients
* Add further filters i.e. meal type
* Finish and improve styling
* Make the site responsive
*Refactor code to use functional components 
 

