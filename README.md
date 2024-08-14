# My Dynamic Website

## Overview

This is a dynamic one-page website built with React and Node.js, with MySQL as the database. The website includes a banner with a countdown timer, and an internal dashboard that allows you to manage the banner's content, visibility, and link. The project is responsive and styled for a professional look.

## Features

- **Dynamic Banner** : Display a banner with customizable text, link, and countdown timer.
- **Countdown Timer** : A reverse countdown timer that automatically hides the banner when it expires.
- **Dashboard** : A simple internal dashboard to control the banner's visibility, description, link, and countdown timer.
- **Database Integration** : Stores banner settings in a MySQL database and retrieves them for display.


## Project Structure

my-dynamic-website/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Banner.js
│   │   │   ├── Countdown.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   ├── App.js
│   │   ├── App.css
│   ├── package.json
│   ├── ...
├── server/                     # Node.js backend
│   ├── routes/
│   │   ├── banner.js
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   ├── ...
├── README.md                   # Project documentation
├── .env                        # Environment variables
└── ...




## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL database setup and running.

### Steps to Run the Project

 1. Clone the Repository:

  bash
   
    git clone https://github.com/your-username/my-dynamic-website.git
   
    cd my-dynamic-website

 2. Set Up the MySQL Database:

-  Create a database named dynamic_website.
-  Run the following SQL commands:

  CREATE DATABASE dynamic_website;
USE dynamic_website;
CREATE TABLE banner_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255),
  link VARCHAR(255),
  countdown_time INT,
  visible BOOLEAN
);
INSERT INTO banner_settings (description, link, countdown_time, visible) 
VALUES ('Initial Banner', 'https://example.com', 600, true);


3. Configure Environment Variables:

Create a .env file in the server/ directory with the 

following content:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=dynamic_website
PORT=5000


### Install Dependencies:

1. Install backend dependencies:
  ```bash
cd server
npm install


2. Install frontend dependencies:
  ```bash
cd ../client
npm install

3. Run the Project:

 Start the backend server:
 ``bash
cd server
npm start

4. Start the frontend development server:
   ```bash
cd ../client
npm start

The frontend will be available at http://localhost:3000, and 

the backend API will run on http://localhost:5000.


## License
This project is licensed under the MIT License.

## Contributing
Feel free to contribute to this project by opening an issue or submitting a pull request.