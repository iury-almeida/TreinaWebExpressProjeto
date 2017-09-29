let cursos = [
    { nome: 'Unity3D', categoria: 'Jogos' },
    { nome: 'Express', categoria: 'Back-End' },
    { nome: 'React', categoria: 'Front-End' },
]
module.exports = (app) => {
    let controller = {
        index: (req, res) => {
            res.render('index', { cursos });
        },
        newItem: (req, res) => {
            cursos.push(req.body);
            res.json(cursos);
        }
    };
    return controller;
}