module.exports = (app)=>{
    let controllers = app.controllers.home;

    app.get('/', controllers.index);
    app.post('/', controllers.newItem);
}