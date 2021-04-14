# Learn Angular With Express

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.<br>
This contains 2 `package.json` each for Angular and Express (stored in the `server/` directory).<br>
While development in Angular, use proxy config to target the Express server. (Refer to `proxy.conf.json`)<br><br>
This setup will make the Angular build `dist` folder fit with the Express `public/` directory

## Prerequisites
Basic understanding on the following:
- Node
- Angular
- Express

## Getting Started (Application Demo)
1. Run `npm install`. (Also run this in the `server/` directory) to install all dependencies
2. Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. <br>
(<strong>Note:</strong> The outputPath in `angular.json` has been modified to only output in `dist/`)
3. Copy the `index.html` as well as all its siblings
4. Paste on the `server/public/` directory
5. On `server/` directory, run `npm start`

## Development server (Angular) - Front-end

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server (Express) - Back-end

Go to `server/` and run `npm start` for the server. Navigate to `http://localhost:3000/`. 

## About
[URL Navigation and Routers](#URL-Navigation-and-Routers)<br>
[Proxy the API calls to Express during Angular front-end development](#Proxy-the-API-calls-to-Express-during-Angular-front-end-development)<br>
[API Calls in Angular services](#API-Calls-in-Angular-services)<br>
[Catch API calls in Express server](#Catch-API-calls-in-Express-server)<br>
[Subscribe to the Response in Angular Components](#Subscribe-to-the-Response-in-Angular-Components)<br>
[Submit Angular POST and GET Requests to Express](#Submit-Angular-POST-and-GET-Requests-to-Express)<br>

### URL Navigation and Routers
<p>
    Handle the route or URL path to distinguish whether URI is an Angular or Express routing<br>
    <small>localhost:4200/#/home</small><br>
    <small>localhost:3000/#/home</small><br>
    <small>localhost:3000/api</small>
</p>
<p>See <code>providers</code> in <code>app.module.ts</code></p>
<br>

### Proxy the API calls to Express during Angular front-end development
<p>
    You need 2 running server during development build. (Angular and Express)<br>
    And at this point they are not yet merged, you need to redirect API calls to <code>localhost:3000</code> for the Express server<br>
</p>
<p>Do the following:<br>
    CREATE <code>proxy.conf.json</code><br>
    MODIFY <code>package.json</code><br><br>
</p>

<strong>proxy.conf.json</strong>  
```json
{
    "/api": {
        "target": "http://localhost:3000",
        "secure": false,
        "logLevel": "debug"
    }
}
```
<strong>package.json</strong><br>
```javascript
    "start": "ng serve --proxy-config proxy.conf.json",
    "build": "ng build --prod --output-hashing none",
```
<br>

### API Calls in Angular services
<p>
    Import <code>HttpClientModule</code> in <code>app.module.ts</code><br>
    Inject <code>HttpClient</code> in Angular services
</p>
<p>In relation to the <code>/api</code> above, please see the following<br>
    <code>src/app/fibonacci/fibonacci.service.ts</code><br>
    <code>src/app/sample/sample.service.ts</code>
</p>
<br>

### Catch API calls in Express server
<p>In relation to the <code>/api</code> above, please see the following<br>
    <code>server/app.js</code><br>
    <code>server/routes.api.js</code>
</p>
<br>

### Subscribe to the Response in Angular Components
<p>To output the response from the server, Angular needs to subscribe on the services calling it.</p>
<p>See the following<br>
    <code>src/app/fibonacci/fibonacci.component.ts</code><br>
    <code>src/app/sample/sample.component.ts</code>
</p>
<br>

### Submit Angular POST and GET Requests to Express
<p>
    In Angular, see the following<br>
    <code>src/app/fibonacci/fibonacci.component.ts</code><br>
    <code>src/app/fibonacci/fibonacci.service.ts</code>
</p>
<p>
    In Express, see the following<br>
    <code>server/app.js</code>
    <code>server/routes/api.js</code>
</p>