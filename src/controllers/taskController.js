function index(req,res) {
    res.render('tasks/index');
}

function create(req,res) {
    res.render('tasks/create');
}

function store(req,res) {
    const data=req.body;

    req.getConnetion((err,conn)=>{
        conn.query('INSERT INTO tasks SET ?',[data],(err,rows)=>{
            console.log(rows);
        });
    });
}

module.exports={
    index:index,
    create:create,
    store:store,
}