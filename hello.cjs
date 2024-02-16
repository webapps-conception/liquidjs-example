var { Liquid } = require('liquidjs');
const path = require('path');

var engine = new Liquid({
    root: path.resolve(__dirname, 'views/'),  // root for layouts/includes lookup
    extname: '.liquid'          // used for layouts/includes, defaults ""
});
engine
    .renderFile("hello", {name: 'alice'})   // will read and render `views/hello.liquid`
    .then(console.log)  // outputs "Alice"
