// const isUserauth =(req,res,next)=>{
//     if (req.originalUrl =='/signup' || req.originalUrl =='/login'){
//         next()
//     }
//     else if (req.headers.cookie !== undefined && req.header.cookie !==""){
//         console.log("hello there.......")
//         next()
//     }
//     else{
//         res.send("need to login first......")
//     }
// }


// module.exports = (isUserauth)