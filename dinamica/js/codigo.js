$(document).ready(function() {
    $("#Texto1").keyup(function(event){
        if(event.keyCode == 13){
            $("#Adicionar1").click();
        }
    });
    $("#Texto2").keyup(function(event){
        if(event.keyCode == 13 ){
            $("#Adicionar2").click();
        }
    });

    $('#Adicionar1').click(function() {
        if ($("#Texto1").val().trim().length >= 2){
        $('#list1').append("<tr><td class='box-td'>"+ $("#Texto1").val() + "</td><td><button name='remover' class='btn btn-danger btn-sm'><span class='glyphicon glyphicon-remove'></span> Remover</button><button name='mover1' class='btn btn-primary btn-sm'><span class='glyphicon glyphicon-move'></span> Mover</button></td></tr>");
$("#Texto1").val("");}
    });
	
	$('#Adicionar2').click(function() {
        if ($("#Texto2").val().trim().length >= 2){
        $('#list2').append("<tr><td class='box-td'>"+ $("#Texto2").val() +"</td><td><button name='remover' class='btn btn-danger btn-sm'><span class='glyphicon glyphicon-remove'></span> Remover</button><button name='mover2' class='btn btn-primary btn-sm'><span class='glyphicon glyphicon-move'></span> Mover</button></td></tr>");
$("#Texto2").val("");}      
    });

    $(document).on("click", "button[name='remover']" , function() {

        $(this).parent().parent().remove();

    });
    
    $(document).on("click", "button[name='mover1']" , function() {
        $(this).attr('name','mover2').parent().parent().appendTo('#list2');

    });    
    $(document).on("click", "button[name='mover2']" , function() {
        $(this).attr('name','mover1').parent().parent().appendTo('#list1');

    });

});