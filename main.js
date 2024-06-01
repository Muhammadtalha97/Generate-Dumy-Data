const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Employee = require("./models/employee.js")


const port = 3000

app.set('view engine', 'ejs');

 mongoose.connect('mongodb://127.0.0.1:27017/company');

const getrandom =  (arr)=>{
    let rn = Math.floor(Math.random() * arr.length);
    return arr[rn];
}



app.get('/', (req, res) => {


    res.render('index', {foo: 'FOO'});
})


app.get('/generate', async(req, res) => {

    // Clear the employee
    await Employee.deleteMany({})

    //logice for random data

    let ranname = ["Talha", "Arslan", "shakib", "Haseeb"]
    let ranlang = ["C++", "JAVA", "Python ", "JS"]
    let rancity = ["vehari", "Lahore", "burewala", "malsi", "islamabad"]

    for (let index = 0; index < 10; index++) {
        let e= Employee.create({
            name: getrandom(ranname),
            salary: Math.floor(Math.random() * 30000),
            language: getrandom(ranlang),
            city: getrandom(rancity),
            isManager: Math.random()>0.5?true:false
        })
        console.log(e);
        
        
    }

    res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})