# Hyper-Verge
Chrome extension for multiple features like notice board and pomodorotimer
Project Overview
This project is a Pomodoro Timer application built with React. It includes a beautiful spline design integrated into the left section of the page, maintaining a sleek and modern dark theme. The right section of the page features the functional Pomodoro Timer.

Features
Pomodoro Timer: A simple and effective timer to help you manage your work sessions.
Spline Integration: A visually appealing spline design integrated into the application.
Responsive Design: The layout adjusts for different screen sizes.
Dark Mode: Consistent dark mode theme throughout the application.
Technologies Used
React
Spline
CSS
Create React App
Installation and Setup
To get started with the project, follow these steps:

Prerequisites
Node.js (>=14.x.x)
npm (>=6.x.x)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
Build the application for production:

bash
Copy code
npm run build
File Structure
src
components
PomodoroTimer.js: The Pomodoro Timer component.
SparklesPreview.js: The Spline integration component.
App.js: Main application component.
App.css: CSS for styling the application.
public
index.html: Main HTML file.
manifest.json: Configuration for the Chrome extension.
package.json: Project metadata and dependencies.
Usage
Pomodoro Timer
The Pomodoro Timer allows you to start a timer for 25 minutes of focused work. You can start and reset the timer using the buttons provided.

Spline Integration
The left section of the application includes a spline design for a visually engaging experience.

Chrome Extension
This application can also be used as a Chrome extension to transform the new tab page with a dark mode design and widgets.

Setup
Build the project:

bash
Copy code
npm run build
Load the extension in Chrome:

Open Chrome and navigate to chrome://extensions/.
Enable "Developer mode" using the toggle in the top right.
Click "Load unpacked" and select the build folder from your project directory.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
