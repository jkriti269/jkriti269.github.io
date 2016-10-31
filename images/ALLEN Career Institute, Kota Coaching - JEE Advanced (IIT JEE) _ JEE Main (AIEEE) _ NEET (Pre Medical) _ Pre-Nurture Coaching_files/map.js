

		
		jQuery(document).ready(function() {
                    var examid=1//document.getElementById('examcheck').value;
        
         if(examid==0){
            url2="testType="+1;
       
       }
      else{
             url2="testType="+2;
       }
     
        $.ajax({
            type: "post",
            url: "index.php?pageName=dashboard/dashboardAjax",
            data: url2 ,
            error:
            function() {

            },
            success: function(result){
                $("#testStatus").html(result)

            }
        });
			
			
		});
