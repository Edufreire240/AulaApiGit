const express = require("express")

const APi1 = express()

APi1.get("/dados/:nome/:idade", (req, res) => {
    const {nome, idade} = req.params;
    res.status(250).json({
      mensagem: `Olá ${nome} sua requisção foi um sucesso, idade ${idade}`
    });
  });

APi1.get("/:teste", (req, res) => {
    const {teste} = req.params;
    res.status(200).json({
      mensagem: `Olá ${teste} sua requisção foi um sucesso`
    });
  });

APi1.get("/", (req, res)=>{
    res.send("Funcionando teste /valor apos o link")
})

APi1.listen(3005, ()=>{
    console.log("Eduardo seu servidor esta funcionando")
})