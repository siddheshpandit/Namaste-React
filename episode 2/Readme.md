# What is NPM (NPM does not have a full form(It does not stand for node package manager))
NPM is a package manager for javascript language maintained by npm.

# What is package.json?
It is a configuration file for npm.

# What is bundler?
Bundles(Packages) our application files into a single file so that it can be shipped to production.
Eg: Webpack, Parcel

# How to install any npm package
npm install -flag <name_of_package>
example:
npm install -D parcel

-D - dev dependency(Dependecies needed only during development phase)

# What is package.lock.json?
It keeps the track of the versions and related stuff about all the dependencies in the application.

# What is node_modules?
It is collection of all the modules needed in your project.
It contains the dependency modules and all the transitive modules required by our dependencies.


# What is npx?
npx is used to execute a package.
example: npx parcel index.html

# npm vs npx
npm is for installing a package, while npx is used for executing a installed package.
# What is parcel?
- Creates a Dev Build
- Create a local Server
- HMR - Hot module Replacement (Builds and Reads files changes and reloades)
- Uses file waching algorithm written in c++.
- Faster Builds because of caching
- Image Optimization
- Minification of file
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling- support all type of browsers
- Diagnostic
- Error Handling
- Tree Shaking - removes unused code for us
- Different dev and prod bundles

