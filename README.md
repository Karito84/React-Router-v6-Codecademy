This project was originally a Codecademy exercise to learn React Router v5. Since React Router v6 introduced breaking changes, the starter code was not working, and implementing the lesson instructions for v5 would not make the app work . I did some research and decided to upgrade the project to React Router v6.

## Starting the project
- The starter code was provided by Codecademy. I did not want to go back to previous node version, so in **package.json** I changed the line:<br>
  `"start": "react-scripts start"` to:<br>
  `"start": "react-scripts --openssl-legacy-provider start"`<br>
  NOTE: Normally this would introduce security issues. I only did this to be able to continue the exercise
  
- Installed the React Router in terminal
  `npm install react-router-dom`
  
- In **Search** component replaced *useHistory* with *useNavigate*

- In **Categories** component removed *useRouteMatch* (v6 doesnt have it), in `<Link/>` changed path to:<br>
  `<Link to={category}>{category}</Link>`, for time being commented out the `<Route>`
  
  
## Working with React Router and updating instructions to work with v6

#### Rendering a `<Router>` and basic routing with `<Routes>` and `<Route>`
- In **App.js** imported `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`
    -  added routing to my app by replacing `<div>` with `<BrowserRouter>`
    -  between the `<main>` tags rendered `<Routes>` component ( it is kind of like `Switch` in v5, but a lot more powerful)--> to learn more visit: [React Router Upgrading from v5](https://reactrouter.com/en/v6.3.0/upgrading/v5)
    - inside `<Routes>` added `<Route>`'s to render components: About, SignUp, Articles, Categories, and Profile.<br>
    `<Route>`'s in v6:<br>
      - the paths are relative,
      - the order of `<Route>`'s doesn't matter, 
      - `<Child Component>` in a `<Route>` in v5 app is moved to a named `element` prop.: `<Route element>` . 
    - added an additional `<Route>` to render **Category** component `<Route path="categories/:name" element={<Category />}/>)` (and removed the commented out `<Route>` from **Categories** component). In v6 `<Route>`'s can be nested in one place instead of being spread out in different components. This makes it easier to see all routes at once.  



