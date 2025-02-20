Browser does not know about react. The first thing is to get react into our project.
-first way to get/injecting react into the project is via CDN.

What is CDN? (Homework research)?
CORS? (Cross Origin Resource Sharing is a way for websites to share the resources across different domains.)

-react is a JavaScript library. At the end of the day, react is just JavaScript. Facebook developers built this.
-react-Dom is a kind of bridge between react and browsers.
-root is the place where all the react code will run/render.
-most important thing in browser is the DOM manipulation. (e.g. on change, putting some nodes inside the DOM and removing some nodes)
-react comes with the philosophy of manipulating DOM using JavaScript/react.
-{} while React.createElement(//element, {}, //content), is used to add attributes to the element.
-react element is nothing but just a js object.
-reactDOM.render() is responsible of converting the object to the actual element.
-react element is just a object at the end.
-the order of scripts in index.html matters. If you change the sequence then it will throw error.
-root.Render() replaces the existing content in that root element not append.
-react is a library because we can use it for a small portion on our page. (can work independently in small portion of your app as well, it is not a full-fledged framework. Framework will come with all load of things) React is just giving us some helper methods that we need to use to develop fast applications.

EPISODE-2 Igniting our App
-to make our app production ready, we have to do a lot of things like bundling, image compression etc.
-when you write create react app, it creates a scaffold for you. It gives a react app that is already production ready.
-there are alot of other packages that makes the production ready app, only react cannot make it but to some extent.

NPM: manages packages it is not stand for node package manager. It is a standard repository for all the packages. It is biggest package manager. All kinds of packages are hosted on it.
-PACKAGE.JSON is basically a configuration file for npm.
-packages on which our project is dependent on are dependencies. NPM will take care of what is the version of that package.
-for our html, css and js files, our files needs to be bundled, compressed, cleaned etc before it can be send to production. (webpack, vite, parcel etc- these are bundlers, there job is to bundle your app to shift to production)

-create-react-app: behinds the scenes uses webpack.
-our app can have 2 types of dependencies.
1)Normal dependencies (used in production also)
2)Dev dependencies (generally required in our development)

-tilda ~ sign upgrades package to major update version
-caret ^ sign upgrades package to minor update version

-package-lock.json keeps the exact version of the package, while package.json keeps the approx. version.
-sometimes our app is running on dev environment but it fails on production. To avoid this. we have a integrity key in our package in package-lock to avoid this. It basically do is, keeps the hash for the package version and ensures the same version for production.
-NODE_MODULES: contains all the code that we fetched from npm. (It is kind of database for all the packages that exists in project. All packages code exists in node_modules)
-i just install parcel in my package.json but there are many folders others than parcel code in node_modules is because the parcel project has its own dependencies (can itself be dependent on many other dependencies) and these dependencies could have their own. These are known as transitive dependencies.
-NM is a collection of dependencies. If you have package and package-lock.json we can regenerate our node_modules.
-Whatever you can regenerate, don't put it on git.

-By using parcel, we ignite our app by following command:
   ...npx parcel {{index.html}}
-It created a server for us and our app by taking ms to build our app and hosted the app on it.

NPX: similar to NPM. 
-NPX means executing the package.
-NPM installs the package and NPX executes the package. (parcel takes index.html and makes a development build for localhost:...).
-Another way to inject react into our app is via NPM.

-we add type="module" in our index.html script tag to tell browser that app.js is not a normal browser file it is a module.

PARCEL:
-DEV build
-Local Server
-HMR = Hot Module Replacement (AS changes are saved, parcel automatically reflects changes on UI) - It is keeping eyes on all files.
-It makes the developer experience so smooth
-Using File watching algorithm - written in C++.
-Faster Build (by caching things for you)
-Image Optimization
-Minification of our file also
-Bundles all the files for us.
-Compress
-Consistent hashing
-Code splitting
-Differential Bundling - support older browsers(so that your app can run on older browsers as well)
-Diagnostic
-Error Handling
-HTTPS (Gives you a way to host your app on https)
-Tree Shaking - remove unused code for you
-Different dev and production bundles (more optimization on production than on dev)

-The most expensive thing in your browser is to load the images in your page.
-React is not the only thing that is making your app fast. We used a lot more things to make it fast like bundlers

-DIST folder: where parcel places the build files in our project.

FOR PRODUCTION BUILD:
npx parcel build index.html

-We have to tell our app that what browsers should our app can support. BROWSERSLIST.dev and configure it in our package.json list. e.g: ["last 2 Chrome version"] that means it can or cannot work on other versions or browsers but it definitely works on the last 2 Chrome version
-can also configure countries specific configuration.

EPISODE-3 - Laying the foundation
-Writing npm scripts to run project is Industry standard.

JSX: Syntax made by facebook developers
-It is not a part of react.
-JSX makes the developers life easy.
-React tries to merge the traditional html and js files.
-JSX is a convention where we merge these html and js files together.
-JSX is not html inside javascript.
-JSX is not html, it is html-like/xml-like syntax.

React.createElement(); ---> creating react element by using core react.

const jsx= <h1>Hi</h1>  ----> creating react element using jsx syntax

-js doesnot comes with jsx build inside it.
-this code is transpiled(converted to the code that browsers can understand) before it goes to the js engine.
-transpilation by Parcel --> Babel(converts this code that is understand by react)

Babel:
-js compiler also known as transpiler. Takes jsx and converts it that js engine can understand.
-can transpile the code that the older brower can also understand.

React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

JSX =====> React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

-JSX at the end of the day is react.createElement (Babel is converting JSX to React.createElement).
-If you have to give attribute to jsx, we write it in camelCase.
-Wrap jsx in parenthesis for multiline for valid jsx for babel. Babel needs to understand.

REACT COMPONENTS:
-The statement "Everything in react is a component" is true.
-There are 2 types of react components:
   ...Class Based Components - OLD way of writing component (uses JS Classes)
   ...Functional Components - NEW way of writing component (uses JS functions)

FUNCTIONAL COMPONENT:
-It is just a normal javascript function.
-Whenever you made component in react name it with capital letter.
-Functional component in react is a js function that returns some piece of JSX element. (A function that returns the react element).
-A functional that is returning some react element is a functional component.













