module.exports = (app) => {
    let Curso = app.models.curso;

    let controller = {
        index: (req, res) => {
            Curso.find({}, [], {sort: {nome: 1}}).exec().then((cursos)=>{
                res.render('index', { cursos });
            })
        },
        newItem: (req, res) => {
            let curso = new Curso(req.body);
            curso.save(function(err, curso){
                if (err){
                    res.status(500).end();
                    console.log(err);
                }
                else{
                    res.json(curso);
                }
            });
        },
        remove: (req, res) => {
            Curso.remove({_id: req.params.id}, function(err){
                if(!err){
                    res.json({message: 'Success'});
                }
                else{
                    res.status(500).end();
                }
            })
        }
    };
    return controller;
}