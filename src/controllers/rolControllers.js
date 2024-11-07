const express = require('express');
const RolService = require('../services/rolService');
const router = express.Router();

//GET
router.get('/', async (req,res) =>{
    const rols = await rolService.getAllRoles();
    res.json(rols);
});
//GET BY ID
router.get('/:id', async (req,res) =>{
    const user = await rolService.getRolById(req.params.id);
    if(rol){
        resp.status(201).json(rol);
    }else{
        res.status(404).json({message: 'Rol no encontrado'})
    }
});
//CREATE
router.post('/', async (req,res) =>{
    const newRol = await rolService.createRol(req.body);
    if(newRol){
        resp.status(201).json(newRol);
    }else{
        res.status(404).json({message: 'Rol no registrado'})
    }
});
//ACTUALIZAR
router.put('/:id', async (req,res) =>{
    const updateRol = await rolService.updateRol(req.params.id,req.body);
    if(updateRol){
        resp.status(201).json(updateRol);
    }else{
        res.status(404).json({message: 'Rol no actualizado'})
    }
});
//DELETE
router.delete('/:id', async (req,res) =>{
    const deleteRol = await rolService.deleteRol(req.params.id);
    if(deleteRol){
        res.status(200).send();
    }else{
        res.status(404).json({message: 'Rol no eliminado'})
    }
});
//GET USERS BY ROL
router.get('/users/:rolId', async (req, res) => {
    try {
      const result = await rolService.getUsersByRole(req.params.rolId);
      res.json(result);
    } catch (error) {
      if (error.message === 'Rol not found') {
        res.status(404).json({ error: error.message })
      }
      else{
        res.status(500).json({ error: error.message })
      }
    }
  })

  module.exports = router;