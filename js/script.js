document.querySelector('#burger-btn').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('#menu').classList.toggle('open');
})