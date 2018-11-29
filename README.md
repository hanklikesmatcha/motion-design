## About 
<img src="./pictures/example.png" width="800">
This is a test designed by Motion Design. To test the candidates have sufficient knowledge of front-end.

## Get Started

### npm run server
*npm run server has been written in package.json*
1. npm run server or java -jar server-1.0.3.jar
2. (optional) Go to http://localhost:8181/openapi.json

### npm start

1. Runs the app in the development mode
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### npm run build

1. Builds the app for production to the `build` folder
2. It correctly bundles React in production mode and optimizes the build for the best performance

*See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.*

## Manual
- Selection Box: Users may click multiple selection boxes
- Add: Creating a new row when the user is clicking ADD button each time
- Delete Rows: By clicking Selection Box, users can delete multiple rows in once
- Save All Changes: Submit client contact and order details to the system

## User Acceptance criteria:
1. The table should support backward and forwards navigation using tab

Done. 

By implementing React Data Grid, users many navigate the form with arrow keys and tab

2. Pressing tab from the last cell in the table should create a new row

To be discussed.

React Data Grid can use arrow keys, tab and enter to let user get the cell they intend to choose

In React Data Grid, I couldn't fetch **Tab** in the table built by React Data Data, so I wasn't able to use **Tab** to create a new row

But I can build a table by myself, or use other third packages, such as React Bootstrap Table

For this task, I think this package might provide a better user experience

3. You must load and display the suburbs, material, and colours from the given server

Done.

Applying **fetch** function, to  get data from back-end

4. There must be a functional save button

Done. 

By clicking the **SAVE ALL CHANGES** users may send the data to the server

5. Saved data must be restored on refresh or page load

Done. 

The page will get the data after refreshing the page automatically by clicking the **SAVE ALL CHANGES**

## Wireframe
<img src="./pictures/wireframe.png" width="350">

## Reference
1. [Motion Design](https://motiondesign.nz/)
2. [Material Design](https://material-ui.com/)
3. [React Data Grid](https://adazzle.github.io/react-data-grid/)
4. [Swagger](https://editor.swagger.io/)
5. [React Bootstrap Table](http://allenfang.github.io/react-bootstrap-table/index.html)
6. [CodeSandbox](https://codesandbox.io/)
