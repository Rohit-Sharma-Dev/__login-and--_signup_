module.exports=(signup,knex,jwt)=>{
    signup.post('/signup',(req,res)=>{
        let users=req.body;
        knex.select('*')
        .from('user')
        .where('email',users.email)
        .then(data=>{
            if(data.length<1){
                knex('user')
                .insert({
                    'name':users.name,
                    'email':users.email,
                    'password':users.password
                })
                .then(result=>{
                    console.log('signup successfully....')
                    res.send('signup successfully....')
                })
                .catch(err=>{
                    console.log(err)
                })
            }
            else{
                res.send('users is login already use another email')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
}