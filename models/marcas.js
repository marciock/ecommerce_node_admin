const mongoose=require('mongoose');

let marcaSchema=new mongoose.Schema({

    marca:{type:String},
    descricao:{type:String},
    creation:{type:Date},
    ativo:{type:Boolean}
})

module.exports=mongoose.model('Marcas',marcaSchema);
