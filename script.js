
document.querySelector('#click').addEventListener('click',function(){
    document.querySelector('#head').textContent = 'You have clicked the btn';
    setTimeout(function(){
        document.querySelector('#head').textContent = '';
    },1000);
})