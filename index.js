import express from "express";
import bodyParser from "body-parser"

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))
let todoList = []
let workToDo = []

// function toDoList(req, res, next){

// }

// app.use(toDoList)

app.get("/", (req, res)=>{
    res.render("index.ejs", {todoList})
})
app.get("/work", (req, res)=>{
    res.render("work.ejs", {workToDo})
})

app.post('/add', (req, res)=>{
    const newItem = req.body["newItem"]
    todoList.push(newItem);
    res.redirect('/');
})
app.post('/work', (req, res)=>{
    const workItem = req.body["workItem"]
    workToDo.push(workItem);
    res.redirect('/work');
})
app.post('/deletetoDo/:index', (req, res) => {
    const index = parseInt(req.params.index);
    todoList.splice(index, 1);
    res.redirect('/');
  });
app.post('/deleteWork/:index', (req, res) => {
    const index = parseInt(req.params.index);
    console.log(index)
    workToDo.splice(index, 1);
    res.redirect('/work');
});

app.listen(port, ()=>{
    console.log(`Server in ${port} has started`);
})