
const Controller = {
    get: (req, res) => {
            res.send(['Usuarios desde el controlador'])  
    }, 
    getOne: (req, res) =>{
        console.log("Active? ", typeof req.query.active)
        if (req.query.active !== "false"){
            res.send({id: req.params.id});
        } else{
            res.status(404).send();
        }

    },
    create: (req, res)=>{
        res.send('Se creó la tarea');
    }
}

module.exports = Controller;
