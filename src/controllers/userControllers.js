const express = require('express');
const userService = require('../services/userService');
const router = express.Router();

router.get('/', async(req,res) => {
    const users = await userService.getAllUsers();
    res.json(users);

})

router.get('/:id', async(req,res) =>{
    const user = await userService.getUserById(req.params.id);
    if(user){
        res.status(201).json(user);
    }else{
        res.status(404).json({message: 'Usuario no encontrado :('});
    }
})
//Insertar
router.post('/',async(req,res)=>{
    const newUser = await userService.createUser(req.body);
    if(newUser){
        res.status(201).json(newUser);
    }else{
        res.status(404).json({message:'User no registrado'});
    }
    
})

//Update
router.put('/:id', async (req,res) =>{
    const updateUser = await userService.updateUser(req.params.id,req.body);
    if (updateUser)
        res.status(201).json(updateUser);
    else
        res.status(404).json({message: 'Usuario no actualizado :('});
});

router.delete('/:id', async(req,res) =>{
    const deleteUser = await userService.deleteUser(req.params.id);
    //204 = Devuelve vacio pero procesado; 200 = ok; 201 = messirve; 
    // 404 = no encontrado; 500 = Error de servidor
    if(deleteUser){
        res.status(200).json('Usuario eliminado');
        
    }else{
        res.status(500).json({message: 'Server F'})
    }
});


module.exports = router;


