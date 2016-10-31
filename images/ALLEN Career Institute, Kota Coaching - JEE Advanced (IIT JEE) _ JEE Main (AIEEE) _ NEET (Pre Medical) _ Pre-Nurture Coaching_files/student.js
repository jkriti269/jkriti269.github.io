$(document).ready(function()
    {
        $("#hidebuttonOnline").hide();
        errornoticeprofile = $("#profile-error1");//here profile-error to profile-error1 change by navneet
        erronNotice2=$("#errorformail");
        // url2="testType="+2;
        //        $.ajax({
        //            type: "post",
        //            url: "index.php?pageName=dashboard/dashboardAjax",
        //            data: url2 ,
        //            error:
        //            function() {
        //
        //            },
        //            success: function(result){
        //                $("#testStatus").html(result)
        //
        //            }
        //        });
        // $("#hideonlysubmit").hide();
        $("#packageperPage").change(function(){

            var id=$(this).val();

            location.href="index.php?pageName=package&id="+id;


        });
       
        /* This Function For change city according to State */
        /* start */
        /* End */
        //
        // if(need==0)
        // {
               
        //
        // }
        //  else{
        //alert("Amoint is Left");
        // return false;
        // }
       
        $("#submitprofile").click(function(){
            document.submitprofile.submit();
        // window.location.reload();
        //  location.href="index.php?pageName=profile/index";
        });
        $("#openBuyPackage").click(function(){
            alert("hi")
        });
        $("#submitpackage").click(function(){
            alert("yyyyyyyyyy")
            document.packageform.submit();
        });
       

        $("#newsperPage").change(function(){

            var id=$(this).val();

            location.href="index.php?pageName=recentNews&id="+id;


        });
        //coupon code
        $("#couponforhide").click(function(){

           $("#buyonlineforhid").attr("checked",false);
            $("#couponforhide").attr("checked",true);
             $("#hideOffline").show();
            $("#hidebuttonOnline").hide();
            document.getElementById("getSubmitType").value=2;
        })
        //coupon code
        $("#buyonlineforhid").click(function(){
            $("#couponforhide").attr("checked",false);
            $("#buyonlineforhid").attr("checked",true);
            $("#hideOffline").hide();
            $("#hidebuttonOnline").show();
            document.getElementById("getSubmitType").value=3;

        //alert("Payment gateway is not configured.")

        })/* End */
        $("#submitcoupon").click(function(){
            checkcoupon();
            $("#couponmode").focus();
        })
        $("#submit_Online").click(function(){
            /*Add by Gaurav on-4/6 for payment Gateway*/
            if(typeof(document.payment)!=undefined && document.payment!=null){
                 onlineBuyCCavanue();
            }else{
            /*End Add by Gaurav on-4/6 for payment Gateway*/
                 onlineBuy();
            }
            });
        $("#referfriend").click(function(){
            document.friendform.submit();
        });
        $("#control_1").change(function(){
            erronNotice2.fadeOut(750);
        });
        $("#subject").keyup(function(){


            if($("#subject").val()!=""){
                erronNotice2.fadeOut(750);
            }
        });
        $("#sendmail").click(function(){
            
            var to='csat@allen.in';
            var subject=$("#subject").val();
            var editemailid=document.getElementById('edit').value;         
            var msgQta=CKEDITOR.instances.msgQta.getData();                       
            if(editemailid==""){
                if(to==null){
                    $("#errorformail").html("Please select email id")
                    erronNotice2.fadeIn(750);
                    $("#search").focus();
                    return false;
                }
//                else if(isEMaillog(to)){
//                    $("#errorformail").html("Please enter valid email id")
//                    erronNotice2.fadeIn(750);
//                    $("#search").focus();
//                    return false;
//                }
            }
            else{
                if($("#control").val()==""){
                    $("#errorformail").html("Please enter email id")
                    erronNotice2.fadeIn(750);
                    $("#search").focus();
                    return false;
                }
                else if(isEMaillog($("#control").val())){
                    $("#errorformail").html("Please enter valid email id")
                    erronNotice2.fadeIn(750);
                    $("#search").focus();
                    return false;
                }
            }
            if(subject==""){
                $("#errorformail").html("Please  enter Subject")
                erronNotice2.fadeIn(750);
                $("#subject").focus();
                return false;
            }if(trim(msgQta)==""){
                $("#errorformail").html("Please enter Description.")
                erronNotice2.fadeIn(750);
                CKEDITOR.instances.msgQta.setData('');
                $('#cke_msgQta').focus();
                return false;
            }
            
            document.inbox.submit();
            
             
        // return false;
        })
        $("#nextBtn").click(function(){
            alert("hhhhhhhhhhhhh");
        })
        $("#search").blur(function(){
            if($("#search").val()!=""){
                erronNotice2.fadeOut(750);
            }
        });
        //   $("#mail").click(function(){
        //        var l=$("#mail").val();
        //        alert(l)
        //      // alert("fffff");
        //
        //   })
        $("#invoice").click(function(){
            var invoiceno=$("#invoiceno").val();
            var studentid=$("#studentid").val();
            $(this).attr('target','_blank');
            
            window.open("source/util/packageTransaction.php?id="+invoiceno+"&studentid="+studentid); //
         
        })

        /*
        $("#invitefriend").click(function(){
            // alert("hhh");
            
            if($("#username").val()=="Enter Email Id"){
                alert("Please Enter Email Id ")
                return false;
            }
            if($("#password").val()=="Enter Password"){
                alert("Please Enter Password")
                return false;
            }
            $("#preloaderImageOfInvite").show();
            document.invite.submit();
   

        })
        */

        $('#username').click(function() {
            // alert("g")
            //('#username').val('');
            if(this.value=="Enter Email Id")
            {
                this.value='';
            }
            else if(this.value=="")
            {
                this.value='Enter Email Id';
            }
        });
        $('#username').blur(function() {
            // alert("g")
            //('#username').val('');
            if(this.value=="")
            {
                this.value='Enter Email Id';
            }

        });
        $('#password').blur(function() {
            // alert("g")
            //('#username').val('');
            if(this.value=="")
            {
                $('#password').get(0).type = 'text';
                this.value='Enter Password';
            }

        });
        $('#password').focus(function() {
            // alert("g")
            //('#username').val('');

            $('#password').get(0).type = 'password';


        });
        $('#password').click(function() {
            // alert("g")
            //('#username').val('');
            if(this.value=="Enter Password")
            {
                this.value='';
                $('#password').get(0).type = 'password';

              
            }
            else if(this.value!="" && this.value!="Enter Password" ){
              
             

            }
            else if(this.value=="")
            {
                this.value='Enter Password';
            }
        });
       
        /*
	   $("#invitecheckbox").click(function(){
            //alert("hhhhhhhh");inviteform invitecheckbox
            var length1=document.inviteform.inputofcheckbox.length;
         
            if(document.inviteform.invitecheckbox.checked){
                for (index=0; index < length1; index++) {
                    if (!document.inviteform.inputofcheckbox[index].checked) {

                        document.inviteform.inputofcheckbox[index].checked=true;
                    }
                }
            }
            if(!document.inviteform.invitecheckbox.checked){
                for (index=0; index < length1; index++) {
                    if (document.inviteform.inputofcheckbox[index].checked) {

                        document.inviteform.inputofcheckbox[index].checked=false;
                    }
                }
            }
            
        })
        */
		
        $("#control").keypress(function(){
            if($("#control").val()!=""){
                erronNotice2.fadeOut(750);
            }
        });
        $('#testtype').change( function(){

          
            var testType=this.value;
          
          
            //  location.href="index.php?pageName=/dashboard&testType="+testType;
            url2="testType="+testType;
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
         $('#testtype1').change( function(){/*This script add by navneet*/
              var testType=this.value;
              var urlData="testType="+testType;;
              $.ajax({
                type: "post",
                url: "index.php?pageName=dashboard/dashboardTakeTest",
                data: urlData ,
                error:function() {
                //  alert("error")
                },
                success: function(result){
                    $("#testStatus1").html(result)
                }
              });
});
        $("#pass").keyup(function() {
            var pass=$("#pass").val();

            if(pass!=""){
                errornoticeprofile.fadeOut(300);
            }
        })
        $("#conpass").keyup(function() {
            var pass=$("#conpass").val();

            if(pass!=""){
                errornoticeprofile.fadeOut(300);
            }

        });
        $("#savepassword").click(function(){
            
            var pass=$("#pass").val();
            var conpass=$("#conpass").val();

            var passName=$("#passName").val();
            var passConfName=$("#passConfName").val();
           if(pass==""){
                //   alert(errornotice)
                //  errornotice.fadeIn(750);
            
                $("#profile-error1").html("Please Enter "+passName);//here profile-error to profile-error1 change by navneet

                errornoticeprofile.fadeIn(750);
                //alert("please Enter password")
                return false;
            }
           
            if(conpass==""){
                //   alert(errornotice)
                //  errornotice.fadeIn(750);
                $("#profile-error1").html("Please Enter "+passConfName);//here profile-error to profile-error1 change by navneet
                errornoticeprofile.fadeIn(750);
                //alert("please Enter password")
                return false;
            }
            if($("#pass").val().length<=5){
                $("#profile-error1").html("Please Enter "+passName+" Six Characters.");//here profile-error to profile-error1 change by navneet
                errornoticeprofile.fadeIn(750);

                return false;
            }
            if(pass!=conpass){
                $("#profile-error1").html(passName+" and "+passConfName+" is Not Match");//here profile-error to profile-error1 change by navneet
                errornoticeprofile.fadeIn(750);
                return false;
            }
            else{
                var url="pass="+pass+"&mode="+'savepass';
                $.ajax({
                    type: "post",
                    url: "index.php?pageName=profile/saveProfileAjax",
                    data: url ,
                    error: function(data) {
                    },
                    success: function(data)
                    {
                        location.reload();
                        $("#closesecurity").show();
                        security.style.display="none";                  // alert(data)
                    }


              
                })
            }
        });
       
     
             
         
    });
function validation()
{
      
    var url1="";
    var email= $("#loginId").val();
    var password=$("#password").val();
    // var email=email.trim();
    document.loginForm.submit();
/* url1="email="+email+"&password="+password+"&mode="+'login';
         alert(url1)
           // document.loginForm.submit();
          $.ajax({
                type: "post",
                url: "views/logincheck.php",
                data: url1 ,
                error:
                function(e) {
                    
                },
                success: function(result)
                {
                    alert(result)
                   // location.reload();
                }
            }); */
}

function cancel()
{
    
    location.href="index.php?pageName=package";
}

function report(testid)
{
     
    location.href="index.php?pageName=timeManagementReport&testid="+testid;
     

}
var inputs = 0;

function addContact(){
    var count=1;
    
    var table = document.getElementById('contacts');

    var tr    = document.createElement('TR');
    var td1   = document.createElement('TD');
    var td2   = document.createElement('TD');
    var td3   = document.createElement('TD');


    var inp1  = document.createElement('INPUT');
    var inp2  = document.createElement('INPUT');
    //var inp2  = document.createElement('INPUT');

    if(inputs==0){
        var img     = document.createElement('IMG');
        img.setAttribute('src', 'student/images/delete.png');
        img.setAttribute('class','attach_down');
        img.onclick = function(){
            removeContact(tr);
        }
        td3.appendChild(img);

    }
    if(inputs > 0){
        var img = document.createElement('IMG');
        img.setAttribute('src', 'student/images/delete.png');
        img.setAttribute('class','attach_down');
        img.onclick = function(){
            removeContact(tr);
        }
        td3.appendChild(img);

    }

    inp1.setAttribute("type", "text");
    inp1.setAttribute("name", "text[]");
    inp1.setAttribute("class", "refer-textfield1");
    inp1.setAttribute("id", "text"+count);
    inp2.setAttribute("type", "text");
    inp2.setAttribute("name", "text1[]");
    inp2.setAttribute("class", "refer-textfield2");
    inp2.setAttribute("id", "text1"+count);
    //inp2.setAttribute("Name", "Email"+inputs);

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);


    td1.appendChild(inp1);
    td2.appendChild(inp2);
    //d3.appendChild(inp2);

    inputs++;

   
}
function removeContact(tr){
    tr.parentNode.removeChild(tr);
   
   

}
/* This Function is Used check The Valid Coupon */
/* Start */

//        $("#add").click(function(){
//
//
//
//
//            var coupontextbox=$("#couponmode").val();
//
//            if(coupontextbox=="Enter Your Coupon Code" || coupontextbox=="" )
//            {
//                alert("Please Add Coupon");
//                return false;
//            }
//            url2="coupon="+coupontextbox+"&mode="+'couponcheck';
//            $.ajax({
//                type: "post",
//                url: "index.php?pageName=insertAjaxProfile",
//                data: url2 ,
//                error:
//                function() {
//
//                },
//                success: function(result){
//
//                    if(result==0)
//                    {
//                        alert("Coupon is Already Used");
//                        $("#couponmode").focus();
//                        return false;
//
//                    }
//                    else{
//                        addCoupon();
//                    }
//
//                }
//            });
//
//        })
/* This Function For Delete Coupon */
/* start */
//function deletecoupon(couponnohide)
//{
//
//    // var hidediv="rightcoupon-detail"+couponno;
//    var packcost=$("#packagecost").val();
//    var packid=$("#packageid").val();
//    var couponno=$("#couponno").val();
//    var arrayofcouponno=couponno.split(',');
//
//    var indexvalue=searchIndex(arrayofcouponno,couponnohide);
//
//    var removeitem=removeItem(arrayofcouponno,couponnohide);
//
//    document.getElementById("couponno").value=arrayofcouponno
//    // $("#deletecoupon_"+couponnohide).hide();
//    var sum=$("#sumbuttuon").val();
//
//    var need=$("#needbuttuon").val();
//
//    var couponamount=$("#couponamount").val();
//
//    var amountarray = couponamount.split(',');
//
//    var updatetotalprice=sum-amountarray[indexvalue];
//
//    var updateneed=parseInt(need)+parseInt(amountarray[indexvalue]);
//    //alert(updateneed)
//    if(updateneed==packcost){
//
//      //  location.reload();
//        location.href="index.php?pageName=packageBuy&id="+packid;
//    }
//    var afterdelete=removeItem(amountarray,amountarray[indexvalue]);
//    document.getElementById("couponamount").value=amountarray;
//    document.getElementById("sumbuttuon").value=updatetotalprice;
//    // alert(updatetotalprice)
//    document.getElementById("needbuttuon").value=updateneed;
//     var url2="couponnohide="+couponnohide+"&mode="+'changeCouponStatus';
//    $.ajax({
//                type: "post",
//                url: "index.php?pageName=insertAjaxProfile",
//                data: url2 ,
//                error:
//                function() {
//
//                },
//                success: function(result){
//
//            $("#deletecoupon_"+couponnohide).hide();
//             var totalprice=$("#sumbuttuon").val();
//              var cost=$("#packagecost").val();
//
//                if(cost!=totalprice){
//
//                  $("#hideonlysubmit").hide();
//                  $("#hideaddbutton").show();
//
//          }
//
//                }
//    })
//}

/* end */

// var url1="testdelete="+document.getElementById("chekedId").value+"&checkedId="+document.getElementById("chekedId").value;


/* This Function For search item of array */
/* start */
//function removeItem(array, item){
//    var re;
//    for(var i in array){
//        if(array[i]==item){
//            re=array.splice(i,1);
//            return re;
//            break;
//        }
//    }
//}
///* End */
///* This Function For search index of array */
///* start */
//function searchIndex(array, item)
//{
//    var re;
//    for(var i in array){
//        if(array[i]==item){
//            re=i;
//            return re;
//            break;
//        }
//    }
//}
/* End */
/* This Function For Add Coupon  */
/* start */
//function addCoupon()
//{
//
//    var coupon=$("#couponmode").val();
//    var cost=$("#packagecost").val();
//    var hiddenvalue=$("#couponamount").val();
//    var need=$("#needbuttuon").val();
//
//
//
//    if(need==0)
//    {
//        // $("#hideonlysubmit").show();
//        alert("Amount is Completed ! Thanks")
//
//        return false;
//    }
//    if(hiddenvalue==undefined)
//    {
//        hiddenvalue=1;
//    }
//    var couponno=$("#couponno").val();
//    if(couponno==undefined)
//    {
//        couponno=2;
//    }
//
//    url1="coupon="+coupon+"&cost="+cost+"&hiddenvalue="+hiddenvalue+"&couponno="+couponno;
//    // location.href="index.php?pageName=packageBuy&id="+coupon;
//
//    // alert(url1)
//    $.ajax({
//        type: "post",
//        url: "index.php?pageName=insertAjax",
//        data: url1 ,
//        error:
//        function() {
//
//        },
//        success: function(result){
//
//            $("#coupon").html(result);
//            $("#couponmode").val("");
//           var totalprice=$("#sumbuttuon").val();
//              var cost=$("#packagecost").val();
//              if(cost==totalprice){
//
//                  $("#hideonlysubmit").show();
//              $("#hideaddbutton").hide();}
//                if(cost!=totalprice){
//
//                  $("#hideonlysubmit").hide();}
//        }
//    });
//}
///* End */
/* This Function For submit Coupon  */
//        /* start */
//        $("#submit").click(function(){
//
//            var need=$("#needbuttuon").val();
//            // var coupon=$("#couponmode").val();
//
//            var cost=$("#packagecost").val();
//            var hiddenvalue=$("#couponamount").val();
//            var couponno=$("#couponno").val();
//            var packageid=$("#packageid").val();
//            url1="cost="+cost+"&hiddenvalue="+hiddenvalue+"&couponno="+couponno+"&packageid="+packageid+"&mode="+'save';
//            // location.href="index.php?pageName=packageBuy&id="+coupon;
//            if(hiddenvalue==undefined)
//            {
//                alert("Please Add Coupon");
//                return false;
//            }
//            if(need > 0){
//                alert("Please Add Other Coupon")
//                return false;
//            }
//            if(need==0){
//                $("#submitid").hide();
//            }
//            alert(url1)
//            $.ajax({
//                type: "post",
//                url: "index.php?pageName=insertAjax",
//                data: url1 ,
//                error:
//                function() {
//
//                },
//                success: function(result){
//
//                  location.href="index.php?pageName=test/testSummary";
//                }
//            });
//        /* End */

function no_image_change(){
    if($('#no_image').length < 1)return;
    if($('#no_image')[0].checked){
        // hide image block, and remove image url.
        old_image_url = $('#image_url').val();
        $('#image_url').val('');
        $('#images').hide();
        $('#image_nav_left').hide();
        $('#image_nav_right').hide();
    }else{
        if(old_image_url!='')$('#image_url').val(old_image_url);
        $('#images').show();
        $('#image_nav_left').show();
        $('#image_nav_right').show();
    }
}
function images_nav_go(dir){
    current_image_id += dir;
    if(current_image_id<1){
        current_image_id = number_of_images;
    }else if(current_image_id>number_of_images){
        current_image_id = 1;
    }
    $('ul#images li').hide();
    $('ul#images li:nth-child('+current_image_id+')').show();
    $('#image_url').val($('ul#images li:nth-child('+current_image_id+') img').attr('src'));
    return false;
}
function validate_form(){
    var email=$('#your_email').val();
    if(email == '' || !email.match('@')){
        $('#your_email')[0].focus();
        alert('Please enter your email address');
        return false;
    }
    var friend=false;
    $('.friend_email').each(function(){
        var email = $(this).val();
        if(email != '' && email.match('@')){
            friend=true;
        }
    });
    if(!friend){
        $('.friend_email')[0].focus();
        alert('Please enter at least 1 friends email address');
        return false;
    }
    return true;
}
function set_add_del(id){
    $("#"+id+' .remove_addit').show();
    $("#"+id+' .remove_addit:last').hide();
    $("#"+id+' .add_addit').hide();
    $("#"+id+' .add_addit:last').show();
}
function selrem(clickety,id){
    $(clickety).parents('.dynamic_block').remove();
    set_add_del(id);
    return false;
}
function seladd(clickety,id){
    var box = $('#'+id+' .dynamic_block:last').clone(true);
    $('input',box).val('');
    $('#'+id+' .dynamic_block:last').after(
        box);
    set_add_del(id);
    return false;
}
function mail(mailId,date,co,admin){

    url2="mailid="+mailId+"&date="+date+"&admin="+admin+"&mode="+'mail';

  
    $.ajax({
        type: "post",
        url: "index.php?pageName=insertAjaxProfile",
        data: url2 ,
        error:
        function() {
           // alert("error")
        },
        success: function(result){
                    
            $("#subdate"+co).html(result);

        }
    });

}

function questionShowFullText(divid,testid,serialno,testType,testflag){
         
    var url2="testid="+testid+"&serialno="+serialno+"&testType="+testType+"&testflag="+testflag+"&mode="+'questiontext';
    //alert(url2);
    var moveLeft = 20;
    var moveDown = 10;
        
    $("img#triggerA"+divid).hover(function(e) {
        /*start code added by Saurabh Jaiswal.*/
        if(e.pageX==undefined){
        var moveLeft =e.clientX+10;
        var moveDown = e.clientY+1;
    }
    else{
        var moveLeft =e.pageX+10;
        var moveDown = e.pageY+1;
    }
    if(e.pageY>700){
            moveDown=moveDown-$("div#pop-up").height();
    }
        $("div#pop-up").css("top",moveDown).css("left",moveLeft);
        $('div#pop-up').show();
/*end code added by Saurabh Jaiswal.*/
   
//    function() {//commented by Saurabh Jaiswal.
//        $("div#pop-up"+divid).hide();
//    });

//    $("img#trigger"+divid).mousemove(function(e) {//commented by Saurabh Jaiswal.
//
//        $("div#pop-up"+divid).css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
//    });
    $.ajax({
        type: "post",
        url: "index.php?pageName=ajaxReport",
        data: url2 ,
        error:
        function() {
            //alert("error")
        },
        success: function(result){
            //alert("==========="+result);
            $("#questiondetai2").html(result);//questiondetai2 replaced questiondetai2_"+serialno by Saurabh jaiswal.
            /*start code added by Saurabh Jaiswal.*/
            var resultA=$("#questiondetai2").css('height');
	if(parseInt(resultA)>350){
	$("#questiondetai2").css({height:"200px",overflowY:"scroll"});
        }
        /*end code added by Saurabh Jaiswal.*/
        //                         $("#solution"+divid).html(result);
        }
    })
});
}
function showPopUpDiv(){//added by Saurabh Jaiswal.
    $('div#pop-up').show();
}
function hidePopUpDiv(i){//added by Saurabh Jaiswal.
    $('div#pop-up').hide();
}
function profile(profile,studentid){
 
    var profile=document.getElementById(profile);

    if(profile.style.display=="none"){


        $("#closeprofile").hide();
        profile.style.display="block";
       
        url2="studentid="+studentid+"&mode="+'editPro';
        $.ajax({
            type: "post",
            url: "index.php?pageName=profile/profileAjax",
            data: url2 ,
            error:
            function() {
               
            },
            success: function(result){
                $("#editProfile").html(result);
            }
        })

    //	$("#closeprofile").hide();
    //	$("#security").hide();
    //	$("#closesecurity").show();
    //		$("#enrollment").hide();
    //	$("#closeenrollment").show();


    } else  {
        $("#profile-error").fadeOut(300);
        $("#closeprofile").show();
        profile.style.display="none";

    }
    
}




function security5(security){


    var security=document.getElementById(security);

    if(security.style.display=="none"){


        security.style.display="block";


        $("#closesecurity").hide();
          
    //        $("#profile").hide();
    //        $("#closeprofile").show();
    //        $("#enrollment").hide();
    //        $("#closeenrollment").show();

      

    } else {
        errornoticeprofile.fadeOut(300);
        $("#closesecurity").show();
        security.style.display="none";
         
        document.getElementById("conpass").value="";
        document.getElementById("pass").value="";
        return false;

    }
  
   
}


function enrollment(enrollment){


    var enrollment=document.getElementById(enrollment);

    if(enrollment.style.display=="none"){


        enrollment.style.display="block";
        $("#closeenrollment").hide();
        $("#profile").hide();
        $("#closeprofile").show();
        $("#security").hide();
        $("#closesecurity").show();




    } else {
        $("#closeenrollment").show();
        enrollment.style.display="none";

    }
}
function passcancel(){
    errornoticeprofile.fadeOut(300);
    var security=document.getElementById('security');
    security.style.display="none";
    $("#closesecurity").show();
    document.getElementById("conpass").value="";
    document.getElementById("pass").value="";
   

}
function profilecancel(){
    $("#profile-error").fadeOut(300);
    var profile=document.getElementById('profilecol');    
    profile.style.display="none";
    $("#closeprofile").show();

        

}

function searchTest2(){
//          var page1=$("#forTestid1").val(); //unnecessary variable so commented by Gaurav on-8/8 for resolve bug(1601)
          var subid=$("#sub2").val();
          var topicid=$("#topic2").val();
          var subid1=$("#sub1").val();
          var topicid1=$("#topic1").val();

    if($("#sub1").val()==null){
      subid1="";
       }
    if($("#topic1").val()==null){
      topicid1="";
       }



    if($("#sub2").val()==null){
      alert("Please select subject");
       return false;
     }
     else if($("#topic2").val()==null){
alert("Please select topic");
        return false;
     }
     else{
        location.href='index.php?pageName=test/testSummary&id=10&id1=10&exam='+2+'&subid='+subid+'&topicid='+topicid+'&subid1='+subid1+'&topicid1='+topicid1;// &exam1=2 change on place of &exam1=page1 by Gaurav on-8/8 for bug(1601)
     }
    }

function searchTest1(){
//          var page1=$("#forTestid1").val();//unnecessary variable so commented by Gaurav on-8/8 for resolve bug(1601)
          var subid=$("#sub2").val();
          var topicid=$("#topic2").val();
          var subid1=$("#sub1").val();
          var topicid1=$("#topic1").val();
          if($("#sub2").val()==null){
      subid="";
       }
    if($("#topic2").val()==null){
      topicid="";
       }
     if($("#sub1").val()==null){
      alert("Please select subject");
       return false;
     }
     else if($("#topic1").val()==null){
alert("Please select topic");
        return false;
     }
     else{
        location.href='index.php?pageName=test/testSummary&id=10&id1=10&exam='+1+'&subid='+subid+'&topicid='+topicid+'&subid1='+subid1+'&topicid1='+topicid1;// &exam1=1 change on place of &exam1=page1 by Gaurav on-8/8 for bug(1601)
     }
    }


function testTabs(id){

    var elements=["cont-1","cont-2"];
   // for(var a=0;a<2;a++){
//        if(id==elements[a]){
//
//            $("#"+id).attr("class","test-tab-box-1");
//
//        }
//        else{
//            $("#"+elements[a]).attr("class","test-tab-box-active");
//        }
        if(id=="cont-1"){
            $("#exam").attr("style", "display: block;");
            $("#prac").attr("style", "display: none;");
           $("#prac").hide();
            location.href='index.php?pageName=test/testSummary&exam=2';
          
        }
        if(id=="cont-2"){
            $("#exam").attr("style", "display:none ;");
            $("#prac").attr("style", "display:block ;");
//             document.getElementById('forTestid').value=1;
//             document.forTest.submit();
$("#exam").hide();
            location.href='index.php?pageName=test/testSummary&exam=1';
        }
   // }
}
function next(next)
{
    var report=document.getElementById(next);
    if (report.style.display=="none")

    {
        report.style.display="block"

        $("#next1").hide();
        $("#nex").show();
        $("#pre").hide();
    }
    else  {
        report.style.display="none";

        //var topic=document.getElementById('next1');
        // topic.style.display="block";
        $("#next1").show();
        $("#nex").hide();
        $("#pre").show();


    }

}
//coupon code
function checkcoupon(){

    var  coupontext=$.trim($("#couponmode").val());//trim() change by navneet
    var packcost=$("#packagecost").val();
    var packageid=document.getElementById("packageid").value;
    if(coupontext=='' || coupontext=='Enter Your Coupon Code'){
        alert("Please enter Coupon no.");
        return false;
    }else{
        var url2="coupon="+coupontext+"&mode="+'newcouponcheck'+'&packageid='+packageid;
        //alert(url2)

        $.ajax({
            type: "post",
            url: "index.php?pageName=insertAjaxProfile",
            data: url2 ,
            async:false,
            error:function (){


            } ,
            success: function(result){

                $("#tempdiv").html(result)
                var status=document.getElementById('status').value;
                var couponno =document.getElementById('couponNO').value;
                var amount=document.getElementById('couponamount').value;
                var type=document.getElementById('type').value;
                var endDate=document.getElementById('endDate').value;
                var validity=document.getElementById('validity').value;
                var check=document.getElementById('check').value;
                var checkTemp=document.getElementById('tempCheck').value;
                if(type=='P'){check=0;}
                //alert(status);
                var today = new Date();
                if(status=="" && couponno=="" && amount==""){
                    alert("Coupon no is invalid. Please Check");
                    return false;
                }else if(check==1){
                    alert("Coupon has been expired.");
                    return false;
                }else if(status==0){
                    alert("Coupon no. has already been used.");
                    return false;
                }
                else if(packcost!=amount){
                    alert("Amount is not equal to package cost.")
                    return false;
                }else if(checkTemp!=0 && type=='T'){
                    alert("This package is already activated using Temporary Coupon");
                    return false;
                }else{

                  //alert(type);
                 // alert(endDate);
                 //alert(validity);
//                  document.getElementById("couponType").value=type;
//                  document.getElementById("couponEndDate").value=endDate;
//                  document.getElementById("couponValidity").value=validity;
                    var packageid=document.getElementById("packageid").value;
                    var packagecost=document.getElementById("packagecost").value;
                   // var hiddenvalue=document.getElementById("hiddenvalue").value;
                    var couponmode=document.getElementById("couponmode").value;
                  location.href="index.php?pageName=insertAjax&couponType="+type+"&couponEndDate="+endDate+"&couponValidity="+validity+"&packageid="+packageid+"&packagecost="+packagecost+"&couponmode="+couponmode;
                  //document.buypackageform.submit();
                }


            }


        });
    }
}
function onlineBuy(){
    alert("Not activated till now");
//    var packageId=$('#packageId').val();
//    var packageName=$('#packagName').val();
//    location.href="index.php?pageName=packageOnlineBuy&packageId="+packageId+"&packagName="+packageName;

}
function trim(myString)
{
    return myString.replace(/\s/g,'');
}


//function executes over exam test pagination change in Test Summary over pagination
//added by Shobhit Garg
function testSummaryPageChange(id,type){
        var subid = document.getElementById("forsub").value;
        var topicid = document.getElementById("fortopic").value;
        var page = document.getElementById("page").value;
        document.getElementById("perPage").value=id;
        updateSummary(type,page,id);

}

 function isEMaillog(s)
{
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var booleanValue=emailPattern.test(s);
   // alert("validation"+booleanValue);

    if(!booleanValue)
    {
        return true ;
    }else{
        return false;
    }
}
function onlineBuyCCavanue(){
    /*--Add by Gaurav for Payment Gateway on-4/6--*/
    document.payment.submit();

}

function reportsPdf(testId,studentId,testType,merge){
    window.open("index.php?pageName=allChartsForPdf&testId="+testId+"&studentId="+studentId+"&testType="+testType+"&merge="+merge, "reportsPDF", '');
}

function pdfAfterMerge(testId1,studentId1,testType1){
    window.open("index.php?pageName=allChartsForMergePdf&testId="+testId1+"&studentId="+studentId1+"&testType="+testType1, "reportsPDF", '');
}

function printSprReport(studentid){
    window.open("index.php?pageName=allChartsForSpr&sid="+studentid, " ", '');
}