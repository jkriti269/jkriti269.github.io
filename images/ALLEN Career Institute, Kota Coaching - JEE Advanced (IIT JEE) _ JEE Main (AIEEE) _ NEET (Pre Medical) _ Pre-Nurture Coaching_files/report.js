
$(document).ready(function() {
    $("#examperPage").change(function(){

        var id=$(this).val();

        location.href="index.php?pageName=report&id1="+id;


    });
    $("#praceperPage").change(function(){

        var id=$(this).val();
        var hiddenvar = document.getElementById("hiddensortablevariable").value;
        location.href="index.php?pageName=report&ID2="+hiddenvar+"&id2="+id;


    });
    $("#quizperPage").change(function(){
        var id=$(this).val();
        var hiddenvarQuiz = document.getElementById("hiddenvarQuiz").value;
        location.href="index.php?pageName=report&ID4="+hiddenvarQuiz+"&id4="+id;


    });
    $("#omrperPage").change(function(){

        var id=$(this).val();

        location.href="index.php?pageName=report&id3="+id;


    });
    $("#mailperPage").change(function(){
        var id=$(this).val();

        location.href="index.php?pageName=inbox/mailList&id="+id;
    })
    $("#smsperPage").change(function(){
        var id=$(this).val();

        location.href="index.php?pageName=studentSms&id="+id;
    })
    var t=1;
    
    $("#search").keyup(function(eh)
    {
        var searchbox = $(this).val();
        var tt=document.getElementById('idcheck').value;
        var dataString = 'searchword='+ searchbox+'&mode='+'auto';
       var multiple=document.getElementById('formultiple').value;
       
     
        if(searchbox=='')
        {
            document.getElementById('idcheck').value=1;
            t=1
        }
        else if(tt==2){
            if(eh.keyCode==40){
                  var limit=document.getElementById('limit').value;
              if(limit==t-1){
                  t=1;
                  $("#mailid"+limit).removeClass("temp");
                    $("#mailid"+t).addClass("temp");
              }
                if(t>1){
                    var tt1=t;
                    tt1=tt1-1;
                    $("#mailid"+tt1).removeClass("temp");
                    $("#mailid"+t).addClass("temp");
                    document.getElementById('idcheck4').value=$("#mailid"+t).html();
                    document.getElementById('idcheck5').value=t;
                }
                else{
                    $("#mailid"+t).addClass("temp");
                    document.getElementById('idcheck4').value=$("#mailid"+t).html();
                    document.getElementById('idcheck5').value=t;
        
      
                }
                t++;

            }
            else if(eh.keyCode==38){
              
                var tt2=t-1;
                var tt3=t-2;
                t--;
                $("#mailid"+tt2).removeClass("temp");
                $("#mailid"+tt3).addClass("temp");
                document.getElementById('idcheck4').value=$("#mailid"+t).html();
                document.getElementById('idcheck5').value=t;
            }
                    }

        else if(multiple==1 && eh.keyCode!=13 ){
               
            $.ajax({
                type: "POST",
                url: "index.php?pageName=insertAjaxProfile",
                data: dataString,
                cache: false,
                success: function(html)
                {
                    document.getElementById('idcheck').value=2;

                    $("#display").html(html).show();
                }
            });

        }
          else if(eh.keyCode==13 ){
                 $("#display").hide();
                  t=1

        }
        else
        {
            $.ajax({
                type: "POST",
                url: "index.php?pageName=insertAjaxProfile",
                data: dataString,
                cache: false,
                success: function(html)
                {
                    document.getElementById('idcheck').value=2;

                    $("#display").html(html).show();
                   
                }
            });
        }
        return false;
    });
});

function yourTestAnalisis(testid,studentid,temp,testType){ 
    if(temp==2 || temp==8){     
        if(document.getElementById("testAnalysis"+temp).style.display == 'block'){
            document.getElementById("testAnalysis"+temp).style.display = 'none';
            document.getElementById("divId"+temp).style.marginTop='0px';
            $("#simpleTestAnalysisTab"+temp).removeClass("view-report-status-active");
            document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';
            return false;
        }else{
            $("#preLoadImg"+temp).show();
        }
    }
    if(temp==3){
        if(document.getElementById("testAnalysis3").style.display == 'block'){
            document.getElementById("testAnalysis3").style.display = 'none';
            $("#simpleTestAnalysisTab"+temp).removeClass("view-report-status-active");
            document.getElementById("divId"+temp).style.marginTop='0px';
            document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';
            return false;
        }else{
            $("#preLoadImg"+temp).show();
        }
    }
    if(temp==4){         
        if(document.getElementById("testAnalysis4").style.display == 'block'){
            document.getElementById("testAnalysis4").style.display = 'none';
            document.getElementById("divId"+temp).style.marginTop='0px';
            $("#simpleTestAnalysisTab"+temp).removeClass("view-report-status-active");
            document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';
            return false;
        }else{
            $("#preLoadImg"+temp).show();
        }
    }
    if(temp==5){
        if(document.getElementById("testAnalysis5").style.display == 'block'){
            document.getElementById("testAnalysis5").style.display = 'none';
            $("#simpleTestAnalysisTab"+temp).removeClass("view-report-status-active");
            document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';
            return false;
        }else{
            $("#preLoadImg"+temp).show();
        }
    }
    if(temp==6){
        if(document.getElementById("testAnalysis6").style.display == 'block'){
            document.getElementById("testAnalysis6").style.display = 'none';
            $("#simpleTestAnalysisTab"+temp).removeClass("view-report-status-active");
            document.getElementById("divId"+temp).style.marginTop='0px';
            document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';
            return false;
        }else{
            $("#preLoadImg"+temp).show();
        }
    }
    if(temp==7){
        if(document.getElementById("testAnalysis7").style.display == 'block'){
            document.getElementById("testAnalysis7").style.display = 'none';
            $("#simpleTestAnalysisTab"+temp).removeClass("view-report-status-active");
            document.getElementById("divId"+temp).style.marginTop='0px';
            document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';
            return false;
        }else{
            $("#preLoadImg"+temp).show();
        }
    }
    if(temp==9){
        if(document.getElementById("testAnalysis9").style.display == 'block'){
            document.getElementById("testAnalysis9").style.display = 'none';
            $("#simpleTestAnalysisTab"+temp).removeClass("view-report-status-active");
            document.getElementById("divId"+temp).style.marginTop='0px';
            document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';

            return false;
        }else{
            $("#preLoadImg"+temp).show();
        }
    }
    if(temp==10){
        if(document.getElementById("testAnalysis10").style.display == 'block'){
            document.getElementById("testAnalysis10").style.display = 'none';
            $("#simpleTestAnalysisTab"+temp).removeClass("view-report-status-active");
            document.getElementById("divId"+temp).style.marginTop='0px';
            document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';
            return false;
        }else{
            $("#preLoadImg"+temp).show();
        }
    }
    var urldata="testid="+testid+"&testType="+testType+"&studentid="+studentid;
    //alert(urldata);
    $.ajax({
        type: "post",
        url:   'index.php?pageName=reports/yourtTestAnalysis',
        data: urldata ,
        error:
        function() {
            alert("error");
        },
        success: function(result){
            if(document.getElementById("mergeidentify").value !=0){
                if(temp==1 ){
                   if(document.getElementById("testCombineAnalysis1").style.display == 'block'){
                        document.getElementById("testCombineAnalysis1").style.display='none';
                        document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon.png';
                        document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
                        document.getElementById("testAnalysis").style.display = 'block';
                        document.getElementById("mergeOverviewTab").style.display = 'none';
                        document.getElementById("simpleoverview").style.display = 'block';
                        document.getElementById("chartsForMerge").style.display = 'block';
                        $("#mergeTestAnalysisTab"+temp).removeClass("view-report-status-active");
                        $("#simpleTestAnalysisTab"+temp).addClass("view-report-status-active");
                   } else {
                        document.getElementById("testAnalysis").style.display='none';
                        document.getElementById("simpleoverview").style.display = 'none';
                        document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon1.png';
                        document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';
                        document.getElementById("testCombineAnalysis1").style.display = 'block';
                        document.getElementById("mergeOverviewTab").style.display = 'block';
                        document.getElementById("chartsForMerge").style.display = 'none';
                        $("#mergeTestAnalysisTab"+temp).addClass("view-report-status-active");
                        $("#simpleTestAnalysisTab"+temp).removeClass("view-report-status-active");
                   }

                }
            }
            if(temp==2 || temp==8){
                $("#testAnalysis"+temp).html(result);
                $("#testAnalysis"+temp).show();
                $("#testCombineAnalysis2").hide();
                $("#testCombineAnalysis8").hide();
                $("#preLoadImg"+temp).hide();
//                document.getElementById("divId"+temp).style.marginTop='220px';
                $("#mergeTestAnalysisTab"+temp).removeClass("view-report-status-active");
                $("#simpleTestAnalysisTab"+temp).addClass("view-report-status-active");
                document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon.png';
                document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
            }
            if(temp==3){
                $("#testAnalysis3").html(result);
                $("#testAnalysis3").show();
                $("#testCombineAnalysis3").hide();
                $("#preLoadImg"+temp).hide();
                $("#mergeTestAnalysisTab"+temp).removeClass("view-report-status-active");
                $("#simpleTestAnalysisTab"+temp).addClass("view-report-status-active");
//                document.getElementById("divId"+temp).style.marginTop='220px';
                document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon.png';
                document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
            }
            // $("#testAnalysis").html(result);
            if(temp==4){
                //  alert(result);
                $("#testAnalysis4").html(result);
                $("#testAnalysis4").show();
                $("#testCombineAnalysis4").hide();
                $("#preLoadImg"+temp).hide();
                $("#mergeTestAnalysisTab"+temp).removeClass("view-report-status-active");
                $("#simpleTestAnalysisTab"+temp).addClass("view-report-status-active");
//                document.getElementById("divId"+temp).style.marginTop='220px';
                document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon.png';
                document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
            }
            if(temp==5){
                //  alert(result);
                $("#testAnalysis5").html(result);
                $("#testAnalysis5").show();
                $("#testCombineAnalysis5").hide();
                $("#preLoadImg"+temp).hide();
                $("#mergeTestAnalysisTab"+temp).removeClass("view-report-status-active");
                $("#simpleTestAnalysisTab"+temp).addClass("view-report-status-active");
                document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon.png';
                document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
            }
            if(temp==6){
                //  alert(result);
                $("#testAnalysis6").html(result);
                $("#testAnalysis6").show();
                $("#testCombineAnalysis6").hide();
                $("#preLoadImg"+temp).hide();
                $("#mergeTestAnalysisTab"+temp).removeClass("view-report-status-active");
                $("#simpleTestAnalysisTab"+temp).addClass("view-report-status-active");
//                document.getElementById("divId"+temp).style.marginTop='220px';
                document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon.png';
                document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
            }
            if(temp==7){

                $("#testAnalysis7").html(result);
                $("#testAnalysis7").show();
                $("#testCombineAnalysis7").hide();
                $("#preLoadImg"+temp).hide();
                $("#mergeTestAnalysisTab"+temp).removeClass("view-report-status-active");
                $("#simpleTestAnalysisTab"+temp).addClass("view-report-status-active");
//                document.getElementById("divId"+temp).style.marginTop='220px';
                document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon.png';
                document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
            }
            if(temp==9){
                $("#testAnalysis9").html(result);
                $("#testAnalysis9").show();
                $("#testCombineAnalysis9").hide();
                $("#preLoadImg"+temp).hide();
                $("#mergeTestAnalysisTab"+temp).removeClass("view-report-status-active");
                $("#simpleTestAnalysisTab"+temp).addClass("view-report-status-active");
//                document.getElementById("divId"+temp).style.marginTop='220px';
                document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon.png';
                document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
            }
            if(temp==10){
                $("#testAnalysis10").html(result);
                $("#testAnalysis10").show();
                $("#testCombineAnalysis10").hide();
                $("#preLoadImg"+temp).hide();
                $("#mergeTestAnalysisTab"+temp).removeClass("view-report-status-active");
                $("#simpleTestAnalysisTab"+temp).addClass("view-report-status-active");
//                document.getElementById("divId"+temp).style.marginTop='220px';
                document.getElementById("imageId"+temp).src = 'student/images/drop-detail-icon.png';
                document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
            }
        }
    });
}


/*added by navneet for combine report*/
function yourCombineTestAnalisis(testid1,studentid1,temp1,testType1){
    if(temp1==1){

    }
    if(temp1==2){
        if(document.getElementById("testCombineAnalysis2").style.display == 'block'){
            $("#testCombineAnalysis2").hide();
            document.getElementById("imageId2").src = 'student/images/drop-detail-icon.png';
            $("#mergeTestAnalysisTab"+temp1).removeClass("view-report-status-active");
            return false;
        }else{
            $("#preLoadComImg"+temp1).show();
        }
    }
    if(temp1==3){
        if(document.getElementById("testCombineAnalysis3").style.display == 'block'){
            $("#testCombineAnalysis3").hide();
            document.getElementById("imageId3").src = 'student/images/drop-detail-icon.png';
            $("#mergeTestAnalysisTab"+temp1).removeClass("view-report-status-active");
            document.getElementById("divId"+temp1).style.marginTop='0px';
            return false;
        }else{
            $("#preLoadComImg"+temp1).show();
        }
    }
    if(temp1==4){
        if(document.getElementById("testCombineAnalysis4").style.display == 'block'){
            $("#testCombineAnalysis4").hide();
            document.getElementById("imageId4").src = 'student/images/drop-detail-icon.png';
            $("#mergeTestAnalysisTab"+temp1).removeClass("view-report-status-active");
            document.getElementById("divId"+temp1).style.marginTop='0px';
            return false;
        }else{
            $("#preLoadComImg"+temp1).show();
        }
    }
    if(temp1==6){
        if(document.getElementById("testCombineAnalysis6").style.display == 'block'){
            $("#testCombineAnalysis6").hide();
            document.getElementById("divId"+temp1).style.marginTop='0px';
            document.getElementById("imageId6").src = 'student/images/drop-detail-icon.png';
            $("#mergeTestAnalysisTab"+temp1).removeClass("view-report-status-active");
            return false;
        }else{
            $("#preLoadComImg"+temp1).show();
        }
    }
    if(temp1==7){
        if(document.getElementById("testCombineAnalysis7").style.display == 'block'){
            $("#testCombineAnalysis7").hide();
            document.getElementById("divId"+temp1).style.marginTop='0px';
            document.getElementById("imageId7").src = 'student/images/drop-detail-icon.png';
            $("#mergeTestAnalysisTab"+temp1).removeClass("view-report-status-active");
            return false;
        }else{
            $("#preLoadComImg"+temp1).show();
        }
    }
    if(temp1==8){
        if(document.getElementById("testCombineAnalysis8").style.display == 'block'){
            $("#testCombineAnalysis8").hide();
            document.getElementById("divId"+temp1).style.marginTop='0px';
            document.getElementById("imageId8").src = 'student/images/drop-detail-icon.png';
            $("#mergeTestAnalysisTab"+temp1).removeClass("view-report-status-active");
            return false;
        }else{
            $("#preLoadComImg"+temp1).show();
        }
    }
    if(temp1==9){
        if(document.getElementById("testCombineAnalysis9").style.display == 'block'){
            $("#testCombineAnalysis9").hide();
            document.getElementById("divId"+temp1).style.marginTop='0px';
            document.getElementById("imageId9").src = 'student/images/drop-detail-icon.png';
            $("#mergeTestAnalysisTab"+temp1).removeClass("view-report-status-active");
            return false;
        }else{
            $("#preLoadComImg"+temp1).show();
        }
    }
    if(temp1==10){
        if(document.getElementById("testCombineAnalysis10").style.display == 'block'){
            $("#testCombineAnalysis10").hide();
            document.getElementById("divId"+temp1).style.marginTop='0px';
            document.getElementById("imageId10").src = 'student/images/drop-detail-icon.png';
            $("#mergeTestAnalysisTab"+temp1).removeClass("view-report-status-active");
            return false;
        }else{
            $("#preLoadComImg"+temp1).show();
        }
    }

    var urldata1="testid1="+testid1+"&testType1="+testType1+"&studentid1="+studentid1;
   // alert(urldata1);
    $.ajax({
        type: "post",
        url:   'index.php?pageName=reports/yourCombineTestAnalysis',
        data: urldata1 ,
        error:
        function() {
            alert("error");
        },
        success: function(result){ 
            if(temp1==1){
               $("#testCombineAnalysis1").html(result);
               $("#testAnalysisReport1").removeClass("view-report-row view-report-status30");
               $("#testAnalysisReport1").addClass("view-report-row view-report-status27");
               if(document.getElementById("testCombineAnalysis1").style.display == 'block'){
                    document.getElementById("testCombineAnalysis1").style.display='none';
                    document.getElementById("imageId"+temp1).src = 'student/images/drop-detail-icon.png';
                    document.getElementById("imgid"+temp1).src = 'student/images/drop-detail-icon1.png';
                    document.getElementById("testAnalysis").style.display = 'block';
                    document.getElementById("mergeOverviewTab").style.display = 'none';
                    document.getElementById("simpleoverview").style.display = 'block';
                    document.getElementById("chartsForMerge").style.display = 'block';
                    $("#mergeTestAnalysisTab"+temp1).removeClass("view-report-status-active");
                    $("#simpleTestAnalysisTab"+temp1).addClass("view-report-status-active");
               }else{ 
                    document.getElementById("testAnalysis").style.display='none';
                    document.getElementById("simpleoverview").style.display = 'none';
                    document.getElementById("imageId"+temp1).src = 'student/images/drop-detail-icon1.png';
                    document.getElementById("imgid"+temp1).src = 'student/images/drop-detail-icon.png';
                    document.getElementById("testCombineAnalysis1").style.display = 'block';
                    document.getElementById("mergeOverviewTab").style.display = 'block';
                    document.getElementById("chartsForMerge").style.display = 'none';
                    $("#mergeTestAnalysisTab"+temp1).addClass("view-report-status-active");
                    $("#simpleTestAnalysisTab"+temp1).removeClass("view-report-status-active");
               }
            }
            if(temp1==2){
               $("#testCombineAnalysis2").html(result);
               $("#testCombineAnalysis2").show();
               $("#testAnalysis2").hide();
               $("#preLoadImg"+temp1).hide();
               $("#simpleTestAnalysisTab"+temp1).removeClass("view-report-status-active");
               $("#mergeTestAnalysisTab"+temp1).addClass("view-report-status-active");
               document.getElementById("imgid2").src = 'student/images/drop-detail-icon.png';
               document.getElementById("imageId2").src = 'student/images/drop-detail-icon1.png';
//               document.getElementById("divId"+temp1).style.marginTop='220px';
            }
            if(temp1==3){
               $("#testCombineAnalysis3").html(result);
               $("#testCombineAnalysis3").show();
               $("#testAnalysis3").hide();
               $("#preLoadComImg"+temp1).hide();
               $("#simpleTestAnalysisTab"+temp1).removeClass("view-report-status-active");
               $("#mergeTestAnalysisTab"+temp1).addClass("view-report-status-active");
               document.getElementById("imgid3").src = 'student/images/drop-detail-icon.png';
               document.getElementById("imageId3").src = 'student/images/drop-detail-icon1.png';
//               document.getElementById("divId"+temp1).style.marginTop='220px';
            }
            if(temp1==4){
               $("#testCombineAnalysis4").html(result);
               $("#testCombineAnalysis4").show();
               $("#testAnalysis4").hide();
               $("#preLoadComImg"+temp1).hide();
               $("#simpleTestAnalysisTab"+temp1).removeClass("view-report-status-active");
               $("#mergeTestAnalysisTab"+temp1).addClass("view-report-status-active");
               document.getElementById("imgid4").src = 'student/images/drop-detail-icon.png';
               document.getElementById("imageId4").src = 'student/images/drop-detail-icon1.png';
//               document.getElementById("divId"+temp1).style.marginTop='220px';
            }
            if(temp1==6){
               $("#testCombineAnalysis6").html(result);
               $("#testCombineAnalysis6").show();
               $("#testAnalysis6").hide();
               $("#preLoadComImg"+temp1).hide();
               $("#simpleTestAnalysisTab"+temp1).removeClass("view-report-status-active");
               $("#mergeTestAnalysisTab"+temp1).addClass("view-report-status-active");
               document.getElementById("imgid6").src = 'student/images/drop-detail-icon.png';
               document.getElementById("imageId6").src = 'student/images/drop-detail-icon1.png';
//               document.getElementById("divId"+temp1).style.marginTop='220px';
            }
            if(temp1==7){
               $("#testCombineAnalysis7").html(result); 
               $("#testCombineAnalysis7").show();
               $("#testAnalysis7").hide();
               $("#preLoadComImg"+temp1).hide();
               $("#simpleTestAnalysisTab"+temp1).removeClass("view-report-status-active");
               $("#mergeTestAnalysisTab"+temp1).addClass("view-report-status-active");
               document.getElementById("imgid7").src = 'student/images/drop-detail-icon.png';
               document.getElementById("imageId7").src = 'student/images/drop-detail-icon1.png';
//               document.getElementById("divId"+temp1).style.marginTop='220px';
            }
            if(temp1==8){
               $("#testCombineAnalysis8").html(result);                
               $("#testCombineAnalysis8").show();
               $("#testAnalysis8").hide();
               $("#preLoadComImg"+temp1).hide();
               $("#simpleTestAnalysisTab"+temp1).removeClass("view-report-status-active");
               $("#mergeTestAnalysisTab"+temp1).addClass("view-report-status-active");
               document.getElementById("imgid8").src = 'student/images/drop-detail-icon.png';
               document.getElementById("imageId8").src = 'student/images/drop-detail-icon1.png';
//               document.getElementById("divId"+temp1).style.marginTop='220px';
            }
            if(temp1==9){
               $("#testCombineAnalysis9").html(result);
               $("#testCombineAnalysis9").show();
               $("#testAnalysis9").hide();
               $("#preLoadComImg"+temp1).hide();
               $("#simpleTestAnalysisTab"+temp1).removeClass("view-report-status-active");
               $("#mergeTestAnalysisTab"+temp1).addClass("view-report-status-active");
               document.getElementById("imgid9").src = 'student/images/drop-detail-icon.png';
               document.getElementById("imageId9").src = 'student/images/drop-detail-icon1.png';
//               document.getElementById("divId"+temp1).style.marginTop='220px';
            }
            if(temp1==10){
               $("#testCombineAnalysis10").html(result);
               $("#testCombineAnalysis10").show();
               $("#testAnalysis10").hide();
               $("#preLoadComImg"+temp1).hide();
               $("#simpleTestAnalysisTab"+temp1).removeClass("view-report-status-active");
               $("#mergeTestAnalysisTab"+temp1).addClass("view-report-status-active");
//               document.getElementById("divId"+temp1).style.marginTop='220px';
               document.getElementById("imgid10").src = 'student/images/drop-detail-icon.png';
               document.getElementById("imageId10").src = 'student/images/drop-detail-icon1.png';
            }
        }
    });
}
/*added by navneet for combine report*/


function yourTestAnalisisOmr(testid,studentid,temp){            
    if(document.getElementById("testAnalysis"+temp).style.display == 'block'){
        document.getElementById("testAnalysis"+temp).style.display = 'none';
        document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon.png';
        return false;
    }
    var urldata="testid="+testid+"&studentid="+studentid;
    $.ajax({
        type: "post",
        url:   'index.php?pageName=reports/yourTestAnalysisOmr',
        data: urldata ,
        error:
        function() {
            alert("error");
        },
        success: function(result){           
            $("#testAnalysis"+temp).html(result);
            $("#testAnalysis"+temp).show();
            document.getElementById("imgid"+temp).src = 'student/images/drop-detail-icon1.png';
        }
    });
}

check=0;
function showdata(id){

    if(check==0){
        $("#popdata"+id).hide();
        $("#popdata111"+id).hide();
        $("#popdata1111"+id).show();
        $("#popdata11"+id).show();
        document.getElementById('imagechang'+id).src='student/images/news-arrow1.jpg'
        $("#popdata9"+id).html('less more');
        check=id;
    } else if(id==check){
        $("#popdata11"+id).hide();
        $("#popdata"+id).show();
        document.getElementById('imagechang'+id).src='student/images/news-arrow.jpg'
        $("#popdata9"+id).html('read more');
        check=0;
    } else{
        $("#popdata"+check).show();
        $("#popdata11"+check).hide();
        $("#popdata"+id).hide();
        $("#popdata11"+id).show();
        $("#popdata9"+id).html('less more');
        $("#popdata9"+check).html('read more');
        document.getElementById('imagechang'+check).src='student/images/news-arrow.jpg'
        document.getElementById('imagechang'+id).src='student/images/news-arrow1.jpg'
        check=id;
    }
}

function getData(id,count){
    if(document.getElementById('save').value==""){
        document.getElementById('save').value=id;
        var temp=document.getElementById('save').value;
    }
    else{
        var temp= document.getElementById('save').value;
        temp=temp+","+id;
        document.getElementById('save').value=temp;
    }

    if(document.getElementById('idcheck7').value==""){
        document.getElementById('idcheck7').value=$("#mailid11"+count).val();
    }else{
        var temp1=$("#mailid11"+count).val();
        var temp3= document.getElementById('idcheck7').value;
        document.getElementById('idcheck7').value=temp3+","+temp1;
    }
    document.getElementById('formultiple').value=1;
    document.getElementById('idcheck').value=1;
    document.getElementById('search').value=temp;
    $("#display").hide();

// document.getElementById('idcheck7').value=$("#mailid11"+count).val();
}
function reportExamPerPage(sort){
    location.href="index.php?pageName=report"+sort;
}

function insertStudentInfo(testId,type,studentid,typeid,language,merge){ 
    var datavar = "testid="+testId+"&type="+type+"&studentid="+studentid+"&mode=insertStudentInfo";
    $.ajax({
        type: "POST",
        url: "index.php?pageName=insertAjaxProfile",
        data: datavar,
        async:true,
        success: function(html){
            if(typeid == 'b'){
                window.open("index.php?pageName=timeManagementReport&testid="+testId+"&testType=2&merge="+merge);
            }
            if(typeid == 'z'){
                window.open("index.php?pageName=timeManagementReport&testid="+testId+"&testType=3&merge="+merge);
            }
            if(typeid == 'a'){
                window.open("index.php?pageName=solutionReportForUnattempted&testid="+testId+"&t=a&testType=2&language="+language);
            }
        }
    });
}
//**************************ADDED BY SUMIT**********************************//
function studentResponsePdf(testId,studentId,merge,streamIds,masterId){
 window.open("./source/util/ReportsPdf/studentResponseSheetPdf.php?testId="+testId+"&studentId="+studentId+"&merge="+merge+"&streamIds="+streamIds+"&masterId="+masterId,"reportsPDF", '');
}
//*****************************END HERE*************************************//
function showmrkpop(testid,studentid,merge,subjctive,mergeTest){
    var datavar = "mode=subjectwisedata&student_id="+studentid+"&testid="+testid+"&merge="+merge+"&subjective="+subjctive+"&mergeTest="+mergeTest;
    $.ajax({
        type: "POST",
        url: "index.php?pageName=insertAjaxProfile",
        data: datavar,
        async:true,
        success: function(html){
            if(html == 0 || html == '0'){
                alert("Subjective marks not available for this test.");
            } else{
                if(mergeTest=='' || mergeTest==null){
                $("#showSubjectivedata").html(html);
                $("#submarks").css("display" , "block");
            } else{
                $("#showSubjectivedata1").html(html);
                $("#submarks1").css("display" , "block");
            }
            }
        }
    });
}
function hidemrkpop(){
    $("#submarks").css("display" , "none");
    $("#submarks1").css("display" , "none");
}
 $("#videoPerPage").change(function(){
        var id=$(this).val();

        location.href="index.php?pageName=video&id="+id;
    })
    
  function videoPlayerForStudent(id,vname){
    document.getElementById("help-popUp").style.display="block";
    

    document.getElementById("videoContent").style.display="block";

    var urldata="subjectCode="+id+"&mode=videoChange";
    $.ajax({
        type: "post",
        url: "index.php?pageName=ajax",
        data: urldata ,
        error: function(data) {
        // alert("error");
        },
        success: function(data)
        { 
            var st=  JSON.parse(data);
           
            var Re = new RegExp("3452355d9999999","g");
            st = st.replace(Re,id);
           
            document.getElementById("videoheading").innerHTML="Video : "+vname;
            $("#videoChange").html(st);


        // $('#videoEditPopupBox').html(data);

        }

    });

} 
function videoStudenthidePopUp(){
    document.getElementById("help-popUp").style.display="none";
    document.getElementById("videoChange").innerHTML="";
    document.getElementById("videoContent").style.display="none";
  
}