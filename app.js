const express = require("express");
const app = express();

app.use(express.static('public'));


// Set the views directory correctly
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", (req, resp) => {
    resp.render('index');
});

app.get("/safety", (req, resp) => {
    resp.render('safety');
});

app.get("/about", (req, resp) => {
    resp.render('about');
});

app.get("/services", (req, resp) => {
    resp.render('services');
});

app.get("/privacy_policy", (req, resp) => { // Corrected route name
    resp.render('privacy_policy'); // Corrected template filename
});

app.get("/long_term_user_dashboard", (req, resp) => {
    resp.render('long_term_user_dashboard');
});
app.get("/driver_dashboard", (req, resp) => {
    resp.render('driver_dashboard');
});
app.get("/owner_dashboard", (req, resp) => {
    resp.render('owner_dashboard');
});

app.listen(3002, () => {
    var link = "http://localhost:3002";
    console.log('Server is listening on port 3002 : ' + link);
});
