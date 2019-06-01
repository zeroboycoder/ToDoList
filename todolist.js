$("input[type='text']").keypress(function(event){
    //when user is pressed enter key
    if(event.which === 13){
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+ $(this).val() +"</li>");
    }
})

$("h1").on("click",".fa-plus",function(){
    $("input[type='text']").fadeToggle(500);
})

// this todo is done
// jQuery have root and listeners when some function is start work
// ul is root and li is listener
$("ul").on("click","li", function(){
    $(this).toggleClass("done");
})

// delete todo list
// jQuery have root and listeners when some function is start work
// ul is root and span is listener
$("ul").on("click","span", function(){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    })
})
