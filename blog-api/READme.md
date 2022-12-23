# Content

- [About](#about)
- [File Structure](#file-structure)
- [Model](#model)
- [Controller](#controller)
- [Route](#route)
- [Features](#features)

# About

So the project is very structural and you can find everything by just taking a look at file strucutre. There are different modules for different work like routes module handle everything related to routes, controller module handle everything related to controller and models module handle everything related with the data model thing.
In model directory there are two files one for blog model and other for review model. In the blog model you will find all the modeling that is related with the blog model and in the reviewModel file you will modeling that is related with the review model.

#### In review model I have included one extra property called blog which takes care about the relation between blog and reviews. It takes care of the reviews that on which blog the user is writing the reviews. If we only talk about backend then at the time when user write a review then it's neccessery to provide a blog id so that blog model can store that review in the database and it will be visible only that time when user ask for that one blog.

<br>
<br>

# File Structure

- ## Model

  - As I have already explained what's in model directary. you will find all the model and model related logic in the model directory.

- ## Controller

  - Controller directory handle the all controll operation of the application.

- ## Routes

  - It handle all the routes apis routes expect basics. like home route and other.
  - It handle only the apis route like all blog and review routes.

<br>
<br>

# Features

It generate created and updated time autometacally with the help of javascript if user do not provide any specific time.

I have also included the api for taking a look at all the reviews and every specific review document store an address of the blog on that it was given.

I have also done some very basic error handling in this project like catching all the try catch blog and about those routes which are not available on this server then at that the server will send a beautiful json response to the client.
