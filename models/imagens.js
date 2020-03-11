const mongoose=require('mongoose');
const Produtos=mongoose.model('Produtos');

let imagemSchema=new mongoose.Schema({
    titulo:{type:String},
    produto:{type:mongoose.Schema.Types.ObjectId,
    ref:'Produtos'},
    url:{type:String},
    creation:{type:Date},
    ativo:{type:Boolean}

})

module.exports=mongoose.model('Imagens',imagemSchema);