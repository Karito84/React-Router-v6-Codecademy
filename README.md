This project was originally a Codecademy exercise to learn React Router v5. Since React Router v6 introduced breaking changes, the starter code was not working, and implementing the lesson instructions for v5 would not make the app work . I did some research and decided to upgrade the project to React Router v6.

## Starting
- The starter code was provided by Codecademy. I did not want to go back to previous node version, so in **package.json** I changed the line:<br>
  `"start": "react-scripts start"` to:<br>
  `"start": "react-scripts --openssl-legacy-provider start"`<br>
  NOTE: Normally this would introduce security issues. I only did this to be able to continue the exercise
  
- Installed the React Router in terminal
  `npm install react-router-dom`
  
- In **Search** component replaced *useHistory* with *useNavigate*

- In **Categories** component removed *useRouteMatch* (v6 doesnt have it), in <Link/> changed path to:<br>
  `<Link to={category}>{category}</Link>`, for time being commented out the <Route> component
  
  
  
  
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
