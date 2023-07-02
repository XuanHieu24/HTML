
    $('#xe').blur(function(){
        const xe=$('#xe').val();
        const errorXe=$('#erXe');
        if(xe.length==0){
            errorXe.css('color','#e04562');
            errorXe.css('background-color','#f9e4e8')
            errorXe.text('vui lòng nhập trường này');
        }
        else{
            errorXe.css('color','#fff');
            errorXe.css('background-color','#fff')
            errorXe.text('');
        }
    })  

    $('#hangxe').blur(function(){
        const hxe=$('#hangxe').val();
        const errorHXe=$('#erHangXe');
        if(hxe.length==0){
            errorHXe.css('color','#e04562');
            errorHXe.css('background-color','#f9e4e8')
            errorHXe.text('vui lòng nhập trường này');
        }
        else{
            errorHXe.css('color','#fff');
            errorHXe.css('background-color','#fff')
            errorHXe.text('');
        }
    })  
    
    $('#email').blur(function(){
        const email=$('#email').val();
        const errorEmail=$('#erEmail');
        const regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.length==0){
            errorEmail.css('color','#e04562');
            errorEmail.css('background-color','#f9e4e8')
            errorEmail.text('vui lòng nhập trường này');
        }
        else if(!regexEmail.test(email)){
            errorEmail.css('color','#e04562');
            errorEmail.css('background-color','#f9e4e8')
            errorEmail.text('vui lòng nhập đúng định dạng email');
        }
        else{
            errorEmail.css('color','#fff');
            errorEmail.css('background-color','#fff')
            errorEmail.text('')

        }
    })  
    
    $('#lienhe').blur(function(){
        const name=$('#lienhe').val();
        const errorName=$('#erLienHe');
        const regexName=/^[^\d+]*[\d+]{0}[^\d+]*$/;
        if(name.length==0){
            errorName.css('color','#e04562');
            errorName.css('background-color','#f9e4e8')
            errorName.text('vui lòng nhập trường này');
        }
        else if(!regexName.test(name)){
            errorName.css('color','#e04562');
            errorName.css('background-color','#f9e4e8')
            errorName.text('vui lòng nhập đúng định dạng');
        }
        else{
            errorName.css('color','#fff');
            errorName.css('background-color','#fff')
            errorName.text('');
        }
    })  

    $('#sdtlienhe').blur(function(){
        const phone=$('#sdtlienhe').val();
        const errorPhone=$('#erNguoiLienHe');
        const regexPhone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(phone.length==0){
            errorPhone.css('color','#e04562');
            errorPhone.css('background-color','#f9e4e8')
            errorPhone.text('vui lòng nhập trường này');
        }
        else if(!regexPhone.test(phone)){
            errorPhone.css('color','#e04562');
            errorPhone.css('background-color','#f9e4e8')
            errorPhone.text('vui lòng nhập đúng định dạng số điện thoại');
        }
        else{
            errorPhone.css('color','#fff');
            errorPhone.css('background-color','#fff')
            errorPhone.text('')
            
        }
    })    




$(document).ready(function(){
    var stt=0;
    $('#luu').click(function(){
        if($('#xe').val()==''||$('#hangxe').val()=='' ||$('#lienhe').val()=='' ||$('#sdtlienhe').val()=='' || $('#email').val()==''){
            if($('#xe').val()==''){
                $('#erXe').css('color','#e04562');
                $('#erXe').css('background-color','#f9e4e8')
                $('#erXe').text('vui lòng nhập trường này');
            }
            if($('#hangxe').val()==''){
                $('#erHangXe').css('color','#e04562');
                $('#erHangXe').css('background-color','#f9e4e8')
                $('#erHangXe').text('vui lòng nhập trường này');
            }
            if($('#lienhe').val()==''){
                $('#erLienHe').css('color','#e04562');
                $('#erLienHe').css('background-color','#f9e4e8')
                $('#erLienHe').text('vui lòng nhập trường này');
            }
            if($('#sdtlienhe').val()==''){
                $('#erNguoiLienHe').css('color','#e04562');
                $('#erNguoiLienHe').css('background-color','#f9e4e8')
                $('#erNguoiLienHe').text('vui lòng nhập trường này');
            }
            if($('#email').val()==''){
                $('#erEmail').css('color','#e04562');
                $('#erEmail').css('background-color','#f9e4e8')
                $('#erEmail').text('vui lòng nhập trường này');
            }

            return false
        }
        else{
            stt++;
        var hanh = $('#anh').val();
        var xe = $('#xe').val();
        var hang = $('#hangxe').val();
        var gia = $('#giatien').val();
        var lh = $('#lienhe').val();
        var nlh = $('#sdtlienhe').val();
        var em = $('#email').val();
        var THEM = "<tr><td>"+stt+"</td><td>"+hanh+"</td><td>"+xe+"</td><td>"+hang+"</td><td>"+gia+"</td><td>"+lh+"</td><td>"+nlh+"</td><td>"+em+"</td></tr>";
        $('table tbody').append(THEM);
        $('input').val('');
        }
        })
    })

    $(document).ready(function(){
        $('#reset').click(function(){
        $('input').val('');
        })
    })