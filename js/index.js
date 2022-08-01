let bgr = document.getElementById('bgr');
let text = document.getElementById('text');
bgr.addEventListener('click', ()=>{
    chrome.storage.local.get(['is_action'],async (value)=>{
    let action = !value.is_action;
    if(action){
        bgr.classList.add("hide");
        bgr.classList.remove("normal");
        text.innerText = 'Awesome Bro! U now have ability to hide. Try click on the webpage';
    }else{
        bgr.classList.add("normal");
        bgr.classList.remove("hide");
        text.innerText = 'U r doing fine Bro! if you need help, click me'
    }
    chrome.storage.local.set({is_action: action});
    chrome.runtime.sendMessage({inAction: action});
    });
});

chrome.storage.local.get(['is_action'],async (value)=>{
    if(value.is_action){
        bgr.classList.add("hide");
        bgr.classList.remove("normal");
        text.innerText = 'Awesome Bro! U now have ability to hide. Try click on the webpage';
    }else{
        bgr.classList.add("normal");
        bgr.classList.remove("hide");
        text.innerText = 'You are doing fine Bro! if you need to hide, click me';
    }
});


