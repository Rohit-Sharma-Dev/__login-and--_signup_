 
// module.exports=(login,knex,jwt)=>{
//     //for login of student and admin
//     login.post('/login',(req,res)=>{
//         let users=req.body;
//         knex
//         .select('*')
//         .from('user')
//         .where('email',users.email)
//         .then(data=>{
//             console.log(data)
//             if(data.length>0){
//                 if(users.password==data[0].password){
//                     let token=jwt.sign({'id':data[0].id,'name':data[0].name,'status':data[0].status,'email':data[0].email},'rohit');
                    
//                     res.send('log in succesfully.......')
//                     console.log(token.toString())
//                 }
//                 else{
//                     res.send('password is wrong..........')
//                 }
//             }
//             else{
//                 res.send('sign up first..........')
//             }
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     })
// }

