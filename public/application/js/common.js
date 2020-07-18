$(function(){
    var href = location.pathname;

    var list = $("#navbarCollapse li");

    var a = list.find("a[href='"+href+"']")
    if (a.length == 1) {
        a.parents("li").addClass("active");
    }
});