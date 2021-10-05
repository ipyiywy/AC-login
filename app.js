const express = require('express')
 const router = express.Router()
 
 const loginPage = require('../../models/loginPage')
 
 //login page
 router.post('/', (req, res) => {
     const email = req.body.email
     const password = req.body.password
 
     loginPage.findOne({email: email, password: password})
         .lean()
         .then(user => {
             if(user) {
                 const userName = user.firstName
                 return res.send(`<h1>Welcome Back, ${userName}</h1>`)
             }else {
                 return res.render('index', {msg: true})
             }   
         })  
         .catch((error) => console.log(error))
         
 })
 
 module.exports = router
