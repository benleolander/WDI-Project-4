# General Assembly Project 4: Whiskypedia - A Whisky Database App

## Project Brief
To create a full stack app using a SQL database, with a React front-end and a Python back-end.

## Timeframe
7 days

## Technologies Used
* JavaScript (ES 6) & ReactJS
* HTML5
* CSS, SCSS & Bulma
* Python
* Flask
* SQLAlchemy
* PostgreSQL
* Mapbox GL
* JSON Web Token
* Mocha, Chai, Enzyme for testing
* Git & GitHub

## Application Overview
Whiskypedia is an app designed to allow whisky enthusiasts to keep track of whiskies they have tried, distilleries they have visited, and receive recommendations of whiskies they may like.

The user can browse the app's catalog of whiskies & distilleries without registering. When they register, they are able to add whiskies & distilleries to the database, along with accessing the rest of the app's features.

## Process

I chose to create this app as a solo project in order to push myself to create a full-stack application in the allotted time frame.

The app is based around a fairly simple database model, which I began by drawing on on a white board. There are three main models for this app- Whiskies, Distilleries & Users. A Distillery can have many whiskies, and can be visited by many users. A whisky can only have one distillery, but can be tasted by many users.

![Whiskypedia data model](https://user-images.githubusercontent.com/44977343/55811433-09332900-5ae1-11e9-8192-4529b0d745ae.png)

Once this structure was finalised, I build out the initial models in the back end. After that, the API endpoints were written, and I moved on to the front end.

As the app was now displaying the seed data correctly, I then added the Auth controllers for the Register & Login routes. Once the initial MVP was in place, I returned to the back end to add features like the recommendation feature user.

## Wins

-Conditional Rendering (Screenshot of isAuth func)
The app relies heavily on conditional rendering. If a user is logged in, almost every page of the app will display differently, in order to present appropriate options to the user.

I'm particularly pleased with the isAuthenticated function written in src/components/lib/Auth.js.

![isAuthenticated function](https://user-images.githubusercontent.com/44977343/55812126-46e48180-5ae2-11e9-86a2-3870b646fb94.png)

This functions returns True or False, and allows me to quickly check if a user is logged in and render HTML elements appropriately.

![Conditional rendering](https://user-images.githubusercontent.com/44977343/55812364-c40ff680-5ae2-11e9-98d6-e42d47b57f0f.png)

I'm also please with recommendation feature. Although fairly basic, this function returns the most popular whisky in the database that the current user has not already tasted.

![Recommendation engine](https://user-images.githubusercontent.com/44977343/55812199-73000280-5ae2-11e9-8bae-314bcf8de662.png)

## Challenges

One of the main reasons I wanted to work on this project solo was to be able to style the entire app myself. I used Bulma to help me quickly get up and running with a decent looking app, but I didn't have the time to really make the app my own- it is still very obviously built using Bulma.

## Future Features

I'm currently working on making the site mobile responsive. Some initial work was done on this during the timeframe of the project, but there's still a lot more to do.

I had initially planned on users being able to add tasting notes to whiskies when they had tried them, which they would be able to refer back to later. I'd also like to expand the 'Tasted' system into a full Like/Dislike system, which would be taken into account by the recommendation function.
