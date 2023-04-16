const fs=require('fs')
const path=require('path')

function redfile(cb){
   const p=path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'product.json'
   )
   fs.readFile(p,(err, data)=>{
      if(err){
         return cb([]);
      }
      else{
         cb(JSON.parse(data));
      }
   })
}

module.exports=class product{
   constructor(t){
      this.title=t;
   }

   savedata(){
      const p=path.join(
         path.dirname(process.mainModule.filename),
         'data',
         'product.json'
      )
 redfile((products)=>{
   products.push(this)
   fs.writeFile(p, JSON.stringify(products),(err)=>{
if(err){
   console.log(err)
       }
   })
 })
   }

  static fetchall(cb){
  redfile(cb)
   }
}