const rolRepository = require('../repositories/rolRepository');

class rolservice{
    getAllRoles(){
        return rolRepository.findAll();
    }
    
    getRolById(id){
        return rolRepository.findById(id);
    }
    createRol(rolData){
        return rolRepository.create(rolData);
    }

    updateRol(id,rolData){
        return rolRepository.update(id, rolData);
    }

    deleteRol(id){
        return rolRepository.delete(id);
    }

    async getUsersByRole(rolId){
        const rol = await rolRepository.findById(rolId);
        if(!rol){
            throw new Error('Rol no encontrado');
            return;
        }
        const users = await rolRepository.findUsersByIdRol(rolId);
        const userbyrol = {
            data: {
                ...rol,
                usuarios: users
            }
        }
        return userbyrol;
    }
}
module.exports = new rolservice();