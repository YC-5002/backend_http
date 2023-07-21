const express = require('express');
const app = express();

app.post('/', (req, res) => {
    res.send('Got a POST request')
});
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
}); 

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello there');
});

//HTTP POST Requests
app.post('/api/courses', (req, res) => {
    if(req.body.name.length > 3){
        const course = {
            //we assign an ID and a name property
            id: courses.length + 1,
            name: req.body.name
        }
        courses.push(course);
        res.send(course);
    }
    else{
        res.send("Name is required and it should be a minimum of 3 characters");
    }
});

//HTTP PUT Requests
app.put('/api/courses/:id', (req,res)=>{
    //Write the code in order to look up the course, if not existing return a 404
            //otherwise 
                    //update the course
                    //return the updated course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course with the given ID was not found');
        return
    }
        const position = courses.findIndex(c => c.id === parseInt(req.params.id));
        const change = {
            id: req.params.id,
            name: req.body.name
        };
        courses[position] = change;
        res.send(change);
});

//HTTP DELETE Requests
app.delete('/api/courses/:id', (req,res)=>{
    //code the following logic
    //look up the course by id
        //return 404 if does not exist
        //delete the course by index HINT: use the indexOf() and splice() methods
        // return the response to the client the course that was deleted
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course with the given ID was not found');
        return
    }
    const position = courses.findIndex(c => c.id === parseInt(req.params.id));
    const toDelete = courses[position];
    courses.splice(position, 1);
    res.send(toDelete);
});

    

const courses =[
    {id: 1, name:'Web Development'},
    {id: 2, name:'IT'},
    {id: 3, name: 'Cybersecurity'}
];

//http GET requests route
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

//request course by id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course with the given ID was not found');
        return
    }
        res.send(course);
});
app.listen(3000, () => {
    console.log("Listening on port 3000 ...")
});
//Through the POST PUT and DELETE requests, we can modify, add, and delete songs from the music app by send a request. Together it helps the user navigate and personalize the app based on their preferences. 