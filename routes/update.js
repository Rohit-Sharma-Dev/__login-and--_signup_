module.exports =(update,knex,jwt)=>{
        update
        .put("/update/:id",(req,res)=>{
            let users=req.body
            knex
            .from('user')
            // .where('id', req.params.id)
            // .then(data=>{
            //     if (data.length>1){
            //         if (users.password[0]==data[0].password){
            //             jwt.verify(token,'rohit')
            //             res.send('verified....')
            //         }
                    
            //     }

            // })
            .update({users})
            .where('id', req.params.id)
  });

            

    
}




// module.exports =(update,knex,jwt)=>{
//     update.put('/update/:id',(req,res)=>{
//         const {name,email,password} = req.body;
//         const subQuery = knex('user').select('id').where({id})
//         subQuery.then(response=>{
//         if(response.length>0){
//             subQuery.update({password,name})
//             .then(resp=>{
//                 res.json('update done')
//             })
//             .catch(err=>{res.json(err)})
//         }
//         else{
//             res.json('update failed')
//      }
// })
// .catch(err=>{res.json(err)})
//     })

// }

