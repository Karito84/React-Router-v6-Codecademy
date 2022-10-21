This project was originally a Codecademy exercise to learn React Router v5. Since React Router v6 introduced breaking changes, the starter code was not working, and implementing the lesson instructions for v5 would not make the app work . I did some research and decided to upgrade the project to React Router v6.

## Starting the project
- The starter code was provided by Codecademy. I did not want to go back to previous node version, so in **package.json** I changed the line:<br>
  `"start": "react-scripts start"` to:<br>
  `"start": "react-scripts --openssl-legacy-provider start"`<br>
  NOTE: Normally this would introduce security issues. I only did this to be able to continue the exercise
  
- Installed the React Router in terminal
  `npm install react-router-dom`
- Opened the page using `npm start`
- In **Search** component replaced *useHistory* with *useNavigate*
- In **Categories** component removed *useRouteMatch* (v6 doesnt have it), in `<Link/>` changed path to:<br>
  `<Link to={category}>{category}</Link>`, for time being commented out the `<Route>`
  
  
## Working with React Router and updating instructions to work with v6

#### Rendering a `<Router>` and basic routing with `<Routes>` and `<Route>`
- In **App.js** imported `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`
    -  added routing to my app by replacing `<div>` with `<BrowserRouter>`
    -  between the `<main>` tags rendered `<Routes>` component ( it is kind of like `Switch` in v5, but a lot more powerful)--> to learn more visit: [React Router Upgrading from v5](https://reactrouter.com/en/v6.3.0/upgrading/v5)
    - inside `<Routes>` added `<Route>`'s to render components: About, SignUp, Articles, Categories, and Profile <br>
    NOTE: `<Route>`s in v6:<br>
      - the paths are relative,
      - the order of `<Route>`s doesn't matter, 
      - `<Child Component>` in a `<Route>` in v5 app is moved to a named `element` prop: `<Route element={< ChildComponent />}>`  

#### Linking to Routes
- in **Articles** component imported `Link` 
  - replaced `<a>` tag with `<Link>` ( paths in `<Link to>` are relative !)
- in **Header** component imported `NavLink`
  - replaced `<a>` tags with `<NavLink>`'s
- in **Categories** component changed the path: `<Link to={${url}/${category}}` to reative path: `<Link to={{category}}>{category}` for the `Link` to work with v6

#### Dynamic Routes 
- in **App.js**:
  - added dynamic routes to `<Article>` and `<Author>` components
  - added an additional dynamic `<Route>` to render **Category** component `<Route path="categories/:name" element={<Category />}/>)` (and removed the commented out earlier `<Route>` from **Categories** component)<br>
NOTE: In v6 `<Route>`s can be nested in one place instead of being spread out in different components. This makes it easier to see all routes at once.  

#### URL parameters (the same in v5 and v6)
- in **Article** component imported `useParams()` hook
- extracted the `:name` URL parameter calling `useParams()`
- updated `author`variable with the variable `name` to display the data correctly

#### `<Switch>` and `exact`
- there is no need for `<Switch>` in v6, the `<Routes>` component is used instead
- `<Route exact>` is gone, instead, routes with descendant routes (defined in other components) use a trailing * in their path to indicate they match deeply <br>
NOTE: For more information check: [React Router Upgrading from v5](https://reactrouter.com/en/v6.3.0/upgrading/v5)

#### Nested Routes
NOTE: In v6 `<Route>`s may be nested in one place instead of being spread out in different components. In small to medium-sized apps, this lets you easily see all your routes at once.
The nested routes build their path by adding to the parent route's path. When using a nested config, routes with children should render an `<Outlet>` in order to render their child routes. This makes it easy to render layouts with nested UI.<br><br>
In **Profile** component the lesson instructions needed to be updated to v6:
  - the `<Route>` for `EditProfileForm` had to be rendered
  - instead of rendering the above route in **Profile** component, I did it in **App.js** to keep all the routes together
  - since `EditProfileForm` component was supposed to render when the URL changed to `/profile/edit`, I created a nested route inside `<Route path="profile" element={ <Profile/>}>` with realtive path to `EditProfile` component
NOTE: Because in v6 `<Route path>` and `<Link to>` are relative, they automatically build on the parent route's path and URL. There is no need to manually interpolate match.url or match.path, there is no `useRouteMatch()` hook from in v6
  - in order to render the child route - `EditProfileForm` from the parent route -`Profile`, I added  an `<Outlet>`in **Profile** component
  
#### `<Redirect>` in v5 , `<Navigate>` in v6
NOTE: To use a declarative API for navigation (ala v5's `<Redirect>` component), v6 provides a `<Navigate>` component.
- in **Profile** component imported `Navigate` component, then updated the return statement, making the `Profile` only viewable if there is a user logged in, otherwise the user is redirected to the `SignUp` page 

#### `useHistory` in v5, `useNavigate` in v6
NOTE: To update the browser location imperatively React Router v6 provides `useNavigate()` hook instead of the `useHistory()` hook in v5.
- in **Footer** component:
  - imported the `useNavigate()` hook from `react-router-dom`,
  - called the `useNavigate()` hook to get the `navigate` object,
  - replaced the `goBack` and `goForward` from `useHistory` (used to navigate backwards and forwards in v5) with `navigate` using a numerical argument indicating where to move the user in the history stack  

#### Query Parameters
The task was to add a *search feature* to the `Articles` page, that would filter the listed articles by whether or not their titles matched the search string.<br>
- in **Articles.js** component:
  - imported `useLocation` hook from `react-router-dom`
  - got access to the current URL’s query string by calling `useLocation()`, and stored it in a variable called `search`
  - used the `URLSearchParams` constructor and passed the search string to it to get the `queryParams` value 
  - replaced the hard-coded `''` value












