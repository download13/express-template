import * as express from 'express';
import * as exphbs from 'express-handlebars';


const app = express();

app.engine('.hbs', exphbs({defaultLayout: 'main'}));
app.use(express.static(__dirname + '../dist/public'));

app.listen(80);
