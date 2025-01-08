const { model } = require('mongoose');
const ToDoModel = require('../model/ToDoModel');

module.exports.getToDO = async(req,res)=>{
    const toDO  = await ToDoModel.find({});
    res.json(toDO);
}

module.exports.saveToDO = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully..");
    console.log(data);
    res.send(data);
  });
};


module.exports.updateToDO = async (req, res) => {

  const {_id, text } = req.body;
  ToDoModel
  .findByIdAndUpdate(_id, {text})
  .then(()=>res.send("Updated Successfully.."))
  .catch((err)=>console.log(err)
  );
}


module.exports.deleteToDO = async(req,res)=>{

  const {_id} = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully.."))
    .catch((err) => console.log(err));

}