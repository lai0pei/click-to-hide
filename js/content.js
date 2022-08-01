
chrome.storage.local.get(['is_action'], async (value) => {

  if (value.is_action) {
    hideInAction();
  } 

});

chrome.runtime.onMessage.addListener(
  function (request,sender,sendResponse) {
    if (request.inAction) {
      hideInAction();
    } else {
      removeAction();
    }
    sendResponse();
  }
);


function hideInAction() {
  document.getElementsByTagName('html')[0].style.setProperty('cursor','crosshair','important');

  window.onmouseover= e => {
    e.target.style.setProperty('background','rgb(1,1,1,0.5)');
    e.target.style.setProperty('transition-duration','1s');
    e.target.style.setProperty('transition-property','1s');
    e.target.style.setProperty('transition-timing-function','linear');
    e.target.style.setProperty('transition-delay','0.2s');
  }

  window.onmouseout = e => {
    e.target.style.removeProperty('background');
    e.target.style.removeProperty('transition-duration');
    e.target.style.removeProperty('transition-property');
    e.target.style.removeProperty('transition-timing-function');
    e.target.style.removeProperty('transition-delay');

  }

  window.onclick = e => {
    smash(e.target);
  }
}

function removeAction() {
  document.getElementsByTagName('html')[0].style.cursor = 'auto';
  window.onclick = null;
  window.onmouseover = null;
  window.onmouseout = null;
}

function smash(target) {
  target.style.setProperty('display','none','important');
}
