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
