function playSound (e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    // key.addClass('playing')
    key.classList.add('playing') //changes the CSS class into Playing
    //key.classList.remove('playing') removes the CSS class called playing
    //key.classList.toggle('playing') toggles the class so you can have different classes are the same time if you want

    
  }

  function removeTransition(e){
    if(e.propertyName != 'transform') return ; // skip if it is not a transform
    //console.log(e.propertyName);
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


  window.addEventListener('keydown',playSound);