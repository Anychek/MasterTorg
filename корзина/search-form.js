$(document).ready(function(){
  	$(".fa-search").click(function(){
    	$(".container-form, .form-search, .categories, .fa-search").toggleClass("active");
    	$("input[type='text']").focus();
  	});
  
});