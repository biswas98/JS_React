let player = 'o';

document.querySelector('.b1').addEventListener('click',function(){
    if(player == 'o')
        document.querySelector('.b1').innerHTML = '<img src="./resources/o.png" alt="o.png">';
    else    
        document.querySelector('.b1').innerHTML = '<img src="./resources/x.png" alt="x.png">';
});



