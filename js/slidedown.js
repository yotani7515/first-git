$(document).ready(function() {
    
    // work1のsldedown
    $(document).on("click", "#slidedown-btn1", function() {
        if ( $("#work-info1").css("display") == "none" ) {
          $("#work-info1").slideDown();
        } else {
          $("#work-info1").slideUp();
        }
    });
    
    // work2のsldedown
    $(document).on("click", "#slidedown-btn2", function() {
        if ( $("#work-info2").css("display") == "none" ) {
          $("#work-info2").slideDown();
        } else {
          $("#work-info2").slideUp();
        }
    });
});