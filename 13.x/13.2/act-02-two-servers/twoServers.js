// *02-Two-Servers Instructions*

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// **REDACTED*

// *Bonus*

// * Look for other ways to expand what your server can do. As possibilities:
//  * Generate the good/bad phrase randomly from a list of predefined phrases
//  * Use the `twitter` package inside the response to also return a random tweet

const http = require("http");

const PORT7K = 7000;
const PORT7K5 = 7500;

let server7k = http.createServer( (req, res) => {
    // res.end("It works: ", req.url);
    res.end(`You're awesome! Keep it up`);
    
});

server7k.listen(PORT7K, () => console.log(PORT7K, ": You're awesome! Keep it up!"));

let server7k5 = http.createServer( (req, res) => {
    // res.end("It works: ", req.url);
    // console.log(res);
    res.end(`You're ok. Keep going, I guess.`);
    // res.end(res);
    
});

server7k5.listen(PORT7K5, () => console.log(PORT7K5, ": You're ok. Keep going, I guess."));