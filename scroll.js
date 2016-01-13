$(document).ready(function() {
    
    //controls toggling view of the resume
    var resume = 0;
    
    $("#resume_button").click(function(event){
        
        //if resume currently not showing, show it
        if(resume == 0) {
            resume = 1;
            $("#resume").css("display", "block");
        }
        else { //if resume showing, hide it
            resume = 0;
            $("#resume").css("display", "none");
        }
        
    });
    
});
