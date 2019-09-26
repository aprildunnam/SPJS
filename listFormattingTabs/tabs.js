<style type="text/css">
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab a {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab a:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab a.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript">

$(".tablinks1").click(function(){
            //alert("Finally 1!");
            $('.tablinks1').addClass('active');
            $('.tabcontent1').css("display","block");
            $('.tabcontent2').css("display","none");
            $('.tabcontent3').css("display","none");
            $('.tablinks3').removeClass('active');
            $('.tablinks2').removeClass('active');
});
$(".tablinks2").click(function(){
            //alert("Finally 2!");
             $('.tablinks2').addClass('active');
            $('.tabcontent2').css("display","block");
            $('.tabcontent1').css("display","none");
            $('.tabcontent3').css("display","none");
            $('.tablinks1').removeClass('active');
            $('.tablinks3').removeClass('active');
});
$(".tablinks3").click(function(){
            //alert("Finally 3!");    
            $('.tablinks3').addClass('active');
            $('.tabcontent3').css("display","block");
            $('.tabcontent2').css("display","none");
            $('.tabcontent1').css("display","none");
            $('.tablinks1').removeClass('active');
            $('.tablinks2').removeClass('active');

});

</script>