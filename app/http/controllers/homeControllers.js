function homeControllers(){
    return{
        //homepage get
        home(req,res){
            res.render('home',{layout: 'layout/layout', title: 'Home'})
        },

        //aboutpage get
        about(req,res){

        },
        //
    }
}

module.exports = homeControllers