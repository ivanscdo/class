// 2:25 (second link)
// solution: 08-

// app.use("/api", apiRoutes);
// router will mount to route, apiRoutes.js will be /recipes, mounted as /api/recipes

// handleInputChange
// on any input change updated state with name: value syntax, when typing input name of recipe serach, will update recipe seach state variable

// handleFormSubmit
// sending through state value of input, going to server, hitting that api route

// Input tag, line 48
// has value=this.sttate.receipeSearch
// name=receipeSearch so that it maps to that speiif state input, onchange so that when it changes it updates state

// button tag, line 56
// this.handleFormSubmit to actually subit the form

// conditional checks for whether or not recieppes.length exists, if exists render recipelist, if not "no recipees to display"

// utils/api.js
// sending callout to api recipes, getting data, once returned, see we get recipes back, that sets recipes so they display

// 17:45
// solution: 09
// seedsDB.js
// takes obj, inserts them, seeding them, using insertMany method on mongoDB

// server.js
// including  routes: app.use(routes)

// routes/api/index.js
// including book rotes, exporting router, router.use("/books", bookRoutes), /books will prefix all book routes

// routes/api/book.js
// methods used on express router
// define router of /:id, get, put, and delete methods all on route, instead of speficying all individually, here is the route then speficy each method and what it does 

// routes/index.js
// router.use("/api", apiRoutes);
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
// ^ goes in second, any routes not defined will be sent here 

// models/book.js
// basic mogoose models
// when using them in routes, including controllers which use models to do specific things, defining methods in controller, calling them form api routes that call to models

// src/App.js
// rendering nav and books

// src/components/nav.js
// basic display comp saying React Reading List

// src/components/List/List.js
// redngin its children

// src/pages/Books/Book.js
// book whre all state lives
// componentDidMount() loads initial set of books as soon as page loads
// loadBooks() - do API.getBooks() then when it comes back do .then(... res.data) which gets all books
// list component
// rendering all different books, using key so that react knows specific element matches specific data, unique key give react info about what to render or not re-render

// when it loads do API.getBooks() which gets list of books



// 41:10
// solution: 10

// client/src/pages/books/books.js
// handleinputchange() - set it based on the name of the input
// deletebook() runs api.delte book with id, then this.loadbooks()

// handleformsubmit
// this.state.title and this.state.author, running api.savebook() passing in different data collected from form
// once it loads, run this.loadBooks(), want to refresh list of books
// runs .getBooks() and fetches everything, not ideal, everytime load book reloading everything, better way is to return book from route then append it to array, not necessarily having to load entire list, not efficient if working with large data set

// form tag
// 2 inputs and text area, names match state variables, as we type updates state with value of specific fields, setting value to state as well
// formbtn disabled until author and title fields are entered

// onclick={this.handleFormSbmit} runs form submit

// list tag
// looping thorugh books, mapping out list items
// delte button takes on click
// instead of this.deleteBook, definingn anon func, instead of passing deletebook func, passing ref to func that calls deleteBook func with id, why not just:
// DeleteBtn onClick={() => this.deleteBook(book._id)} />
// instead of:
// DeleteBtn onClick={this.deleteBook(book._id)} />
// want ref to func not return value of func

// routes/api/books.js
// delete route and post
// booksController.js
// create, db.book.create pass it req.body, model back, res.json model, 
// remove: db.book.findById (mongoose dont need obejctid), get back db.model.remove, sent db.model

// break:55:xx