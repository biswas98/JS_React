let player = 'x';


const x_o_Display = (player) => {

    // Top
    document.querySelector('.t1').addEventListener('click',function(){
        if(player == 'o')
            document.querySelector('.t1').innerHTML = '<img src="./resources/o.png" alt="o.png">';
        else    
            document.querySelector('.t1').innerHTML = '<img src="./resources/x.png" alt="x.png">';
    });

    document.querySelector('.t2').addEventListener('click',function(){
        if(player == 'o')
            document.querySelector('.t2').innerHTML = '<img src="./resources/o.png" alt="o.png">';
        else    
            document.querySelector('.t2').innerHTML = '<img src="./resources/x.png" alt="x.png">';
    });

    document.querySelector('.t3').addEventListener('click',function(){
        if(player == 'o')
            document.querySelector('.t3').innerHTML = '<img src="./resources/o.png" alt="o.png">';
        else    
            document.querySelector('.t3').innerHTML = '<img src="./resources/x.png" alt="x.png">';
    });

    // Middle 
    document.querySelector('.m1').addEventListener('click',function(){
        if(player == 'o')
            document.querySelector('.m1').innerHTML = '<img src="./resources/o.png" alt="o.png">';
        else    
            document.querySelector('.m1').innerHTML = '<img src="./resources/x.png" alt="x.png">';
    });

    document.querySelector('.m2').addEventListener('click',function(){
        if(player == 'o')
            document.querySelector('.m2').innerHTML = '<img src="./resources/o.png" alt="o.png">';
        else    
            document.querySelector('.m2').innerHTML = '<img src="./resources/x.png" alt="x.png">';
    });

    document.querySelector('.m3').addEventListener('click',function(){
        if(player == 'o')
            document.querySelector('.m3').innerHTML = '<img src="./resources/o.png" alt="o.png">';
        else    
            document.querySelector('.m3').innerHTML = '<img src="./resources/x.png" alt="x.png">';
    });

    // end 
    document.querySelector('.e1').addEventListener('click',function(){
        if(player == 'o')
            document.querySelector('.e1').innerHTML = '<img src="./resources/o.png" alt="o.png">';
        else    
            document.querySelector('.e1').innerHTML = '<img src="./resources/x.png" alt="x.png">';
    });

    document.querySelector('.e2').addEventListener('click',function(){
        if(player == 'o')
            document.querySelector('.e2').innerHTML = '<img src="./resources/o.png" alt="o.png">';
        else    
            document.querySelector('.e2').innerHTML = '<img src="./resources/x.png" alt="x.png">';
    });

    document.querySelector('.e3').addEventListener('click',function(){
        if(player == 'o')
            document.querySelector('.e3').innerHTML = '<img src="./resources/o.png" alt="o.png">';
        else    
            document.querySelector('.e3').innerHTML = '<img src="./resources/x.png" alt="x.png">';
    });

}




x_o_Display(player);
