import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs", { title: "", content: "" });
  });

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.get("/blog1.ejs", (req, res) => {
    res.render("blog1.ejs")
  });
  
  app.get("/blog2.ejs", (req, res) => {
    res.render("./blog2.ejs")
  });

  app.get("/blog3.ejs", (req, res) => {
    res.render("./blog3.ejs")
  });

  app.get("/post.ejs", (req, res) => {
    res.render("./post.ejs")
  });

  app.get("/", (req, res) => {
    res.render("index.ejs", { title: "", content: "" });
  });

  app.get("/index.ejs", (req, res) => {
    res.render("index.ejs")
  });

  app.get("/about.ejs", (req, res) => {
    res.render("about.ejs")
  });

  app.get("/contact.ejs", (req, res) => {
    res.render("contact.ejs")
  });


  app.post("/submit", (req, res) => {
    const data = {
      title: req.body["title"],
      content: req.body["content"],
    };
    res.render("index.ejs", data);
  });
  

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

