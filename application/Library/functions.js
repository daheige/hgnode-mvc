module.exports = {
    var_dump : function(str,req,res){
        if(typeof req != 'undefined'){
            res.send(''+str);
        }else{
            console.log(str);
        }
    }
};
