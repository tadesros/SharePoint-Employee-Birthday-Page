<script src="//code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
<script type="text/javascript">

//FUNCTION DELCARATION TAKES 2 PARAMETERS


//Global Variables


 $(document).ready(function () {
 
         
  //ADD HEADERS    
    
    
   //Replace Text Labels with more descriptions    
    $('nobr:contains("Surname")').text('Surname (optional)');    

  //Add spaces after 
       var $fieldTR=$(".ms-standardheader nobr:contains('Location')").closest("tr");
       
       
  //Add After
      $fieldTR.after("<tr><td>&nbsp</td><td &nbsp></td></tr>");    
       
       
//          $fieldTR.before("<tr style='background-color:"+backColor+"'><td colspan='2' class='ms-formbody' style='padding:0; color: "+fontColor+";'><div style='font-size:"+fontSize+"px;margin-top: 10px;margin-bottom: 10px;font-family: "+fontFam+"'padding-left:0.5em; text-decoration:none' ><img id='"+btnTag+"' title='Click to Expand' src='/_layouts/images/plus.gif' align ='center' width='15' height='15' class='expandBtn'>&nbsp&nbsp"+sectionText+"</div></td></tr>");        

});

//******************FUNCTION DEFINNITIONS********************************************************



</script>



