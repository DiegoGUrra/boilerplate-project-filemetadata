import express,{Request,Response} from 'express';
import cors from 'cors';
import multer from 'multer';
const upload = multer({dest: 'uploads'});

const app = express();
const port = 3000;
app.use('/public', express.static(process.cwd() + '/public'))
app.use(cors())

app.get('/', function (_, res: Response) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse',upload.single('upfile'), (req: Request, res: Response) => {
    console.log({body:req.body,req:req.file})
    res.status(200).json({"name":req.file?.originalname, "type": req.file?.mimetype, "size": req.file?.size})
});

app.listen(port, function () {
    console.log('Your app is listening on port ' + port)
});
  