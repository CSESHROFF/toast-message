const showToast =document.querySelector('.show-toast');
const horizontalPosition = document.querySelector('#horizontal-position');
const verticalPosition = document.querySelector('#vertical-position');
const toastContaoner = document.querySelector('.toast-container');
const toastType = document.querySelector('#toast-notice');
const toastmsg = document.querySelector('#input');



showToast.addEventListener('click',()=>{
    // console.log(horizontalPosition.value);
    // console.log(verticalPosition.value);

     // Create Element

     const newToast = document.createElement('div')
     newToast.classList.add('toast');
     
     console.log(toastmsg.value);

     if(toastType.value=== 'success'){
        newToast.innerText= `✔ ${toastmsg.value} ╳`;
     }
     else if(toastType.value=== 'warning'){
        newToast.innerText= `⚠ ${toastmsg.value} ╳`;
     }
     else if(toastType.value=== 'error'){
        newToast.innerText= `╳ ${toastmsg.value} ╳`;
     }
     else if(toastType.value=== 'info'){
        newToast.innerText= `ℹ ${toastmsg.value} ╳`;
     }

     toastContaoner.append(newToast);

    //  change position
    if(horizontalPosition.value === 'right'){
        toastContaoner.classList.add('right');

    }
    else{
        toastContaoner.classList.remove('right');
    }

    if(verticalPosition.value === 'bottom'){
        toastContaoner.classList.add('bottom');
    }
    else{
        toastContaoner.classList.remove('bottom');
    }

   

})