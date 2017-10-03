let app = require('./config/express')();
require('./config/database.js')('mongodb://iury:dbdeathmetal@ds161584.mlab.com:61584/treinaweb');

app.listen(app.get('port'), (req, res) => {
    console.log(`Servidor escutando na porta ${app.get('port')} `);
});