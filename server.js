let app = require('./config/express')();
require('./config/database.js')('mongodb://localhost:27017/treinaweb');

app.listen(app.get('port'), (req, res) => {
    console.log(`Servidor escutando na porta ${app.get('port')} `);
});