// ---------------------------------------------------------------BACKGROUND CHANGER ICON----------------------------------------------------------


const shuffleBtn = document.querySelector("#application");
const mainDiv = document.querySelector("main");
var images = ['wallpaper1.png',
                'wallpaper2.jpg',
                'wallpaper3.jpg',
                'wallpaper4.jpg',
                'wallpaper5.jpg',
                'wallpaper6.jpg',
                'wallpaper7.jpg',
                'wallpaper8.jpg',
                'wallpaper9.jpg'];
let currentImageIndex = 0;

// --------------------------------Pre-load images-------------------------------------------

images.forEach((image) => {
    const img = new Image();
    img.src = `../images/${image}`;
});

shuffleBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageUrl = `../images/${images[currentImageIndex]}`;
    mainDiv.style.transition = "background-position-x 0.3s ease-in";
    mainDiv.style.backgroundImage = `url(${imageUrl})`;
    mainDiv.style.backgroundPositionX = "100%";
    setTimeout(() => {
        mainDiv.style.backgroundPositionX = "0%";
    }, 0);
});


// -----------------------------------------------------------------DOCK ICONS HOVER STATE------------------------------------------------------

const first = document.querySelector('.ico1');
const second = document.querySelector('.ico2');
const third = document.querySelector('.ico3');
const fourth = document.querySelector('.ico4');
const fifth = document.querySelector('.ico5');
const sixth = document.querySelector('.ico6');
const seventh = document.querySelector('.ico7');
const eighth = document.querySelector('.ico8');
const ninth = document.querySelector('.ico9');
const tenth = document.querySelector('.ico10');
const bin = document.querySelector('.binIcon');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const img6 = document.querySelector('.img6');
const img7 = document.querySelector('.img7');
const img8 = document.querySelector('.img8');
const img9 = document.querySelector('.img9');
const img10 = document.querySelector('.img10');
const binImg = document.querySelector('.binImg');

second.addEventListener('mouseover', () => {
    img1.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img1.style.margin = '0 0.75rem 3rem 0.75rem';
});

second.addEventListener('mouseout', () => {
    img1.style.transform = '';
    img1.style.margin = '';

});

third.addEventListener('mouseover', () => {
    img2.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img2.style.margin = '0 0.75rem 3rem 0.75rem';
    img1.style.transform = 'scale(1.1) translateY(-0.5rem)';
    img1.style.margin = '0 0.75rem 1rem 0.75rem';
});

third.addEventListener('mouseout', () => {
    img2.style.transform = '';
    img2.style.margin = '';
    img1.style.transform = '';
    img1.style.margin = '';
});

fourth.addEventListener('mouseover', () => {
    img3.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img3.style.margin = '0 0.75rem 3rem 0.75rem';
    img2.style.transform = 'scale(1.1) translateY(-0.5rem)';
    img2.style.margin = '0 0.75rem 1rem 0.75rem';
});

fourth.addEventListener('mouseout', () => {
    img3.style.transform = '';
    img3.style.margin = '';
    img2.style.transform = '';
    img2.style.margin = '';
});

fifth.addEventListener('mouseover', () => {
    img4.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img4.style.margin = '0 0.75rem 3rem 0.75rem';
    img3.style.transform = 'scale(1.1) translateY(-0.5rem)';
    img3.style.margin = '0 0.75rem 1rem 0.75rem';
});

fifth.addEventListener('mouseout', () => {
    img4.style.transform = '';
    img4.style.margin = '';
    img3.style.transform = '';
    img3.style.margin = '';
});

sixth.addEventListener('mouseover', () => {
    img5.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img5.style.margin = '0 0.75rem 3rem 0.75rem';
    img4.style.transform = 'scale(1.1) translateY(-0.5rem)';
    img4.style.margin = '0 0.75rem 1rem 0.75rem';
});

sixth.addEventListener('mouseout', () => {
    img5.style.transform = '';
    img5.style.margin = '';
    img4.style.transform = '';
    img4.style.margin = '';
});

seventh.addEventListener('mouseover', () => {
    img6.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img6.style.margin = '0 0.75rem 3rem 0.75rem';
    img5.style.transform = 'scale(1.1) translateY(-0.5rem)';
    img5.style.margin = '0 0.75rem 1rem 0.75rem';
});

seventh.addEventListener('mouseout', () => {
    img6.style.transform = '';
    img6.style.margin = '';
    img5.style.transform = '';
    img5.style.margin = '';
});

eighth.addEventListener('mouseover', () => {
    img7.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img7.style.margin = '0 0.75rem 3rem 0.75rem';
    img6.style.transform = 'scale(1.1) translateY(-0.5rem)';
    img6.style.margin = '0 0.75rem 1rem 0.75rem';
});

eighth.addEventListener('mouseout', () => {
    img7.style.transform = '';
    img7.style.margin = '';
    img6.style.transform = '';
    img6.style.margin = '';
});

ninth.addEventListener('mouseover', () => {
    img8.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img8.style.margin = '0 0.75rem 3rem 0.75rem';
    img7.style.transform = 'scale(1.1) translateY(-0.5rem)';
    img7.style.margin = '0 0.75rem 1rem 0.75rem';
    binImg.style.transform = 'scale(1.1) translateY(-0.5rem)';
    binImg.style.margin = '0 0.75rem 1rem 0.75rem';
});

ninth.addEventListener('mouseout', () => {
    img8.style.transform = '';
    img8.style.margin = '';
    img7.style.transform = '';
    img7.style.margin = '';
    binImg.style.transform = '';
    binImg.style.margin = '';
});

tenth.addEventListener('mouseover', () => {
    img9.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img9.style.margin = '0 0.75rem 3rem 0.75rem';
    img8.style.transform = 'scale(1.1) translateY(-0.5rem)';
    img8.style.margin = '0 0.75rem 1rem 0.75rem';
    binImg.style.transform = 'scale(1.3) translateY(-0.75rem)';
    binImg.style.margin = '0 0.75rem 3rem 0.75rem';
});

tenth.addEventListener('mouseout', () => {
    img9.style.transform = '';
    img9.style.margin = '';
    img8.style.transform = '';
    img8.style.margin = '';
    binImg.style.transform = '';
    binImg.style.margin = '';
});

bin.addEventListener('mouseover', () => {
    img10.style.transform = 'scale(1.3) translateY(-0.75rem)';
    img10.style.margin = '0 0.75rem 3rem 0.75rem';
    img9.style.transform = 'scale(1.1) translateY(-0.5rem)';
    img9.style.margin = '0 0.75rem 1rem 0.75rem';
});

bin.addEventListener('mouseout', () => {
    img10.style.transform = '';
    img10.style.margin = '';
    img9.style.transform = '';
    img9.style.margin = '';
});


// ------------------------------------------------------------------TRAFFIC LIGHTS FOR WINDOWS----------------------------------------------------------------


function addTrafficLightListener(windows) {
  for (const window of windows) {
    const titleBar = window.querySelector('.titleBar');
    const dots = titleBar.querySelector('.trafficLights');

    dots.addEventListener('click', (event) => {
      const dot = event.target;
      const window = dot.closest('.appWindow');

    const redLight = event.target.classList.contains('tRed');
    const greenLight = event.target.classList.contains('tGreen');
    const yellowLight = event.target.classList.contains('tYellow');

    redLight.addEventListener('click', (event) => {
      window.classList.remove('activeWindow');
      window.classList.add('inactiveWindow');
    });

    greenLight.addEventListener('click', (event) => {
      if (window.classList.contains('maxWindow')) {
        window.classList.remove('maxWindow');
        window.classList.add('activeWindow');
      }
      else if (window.classList.contains('activeWindow')) {
        window.classList.remove('activeWindow');
        window.classList.add('maxWindow');
      }
    });

    yellowLight.addEventListener('click', (event) => {
      window.classList.remove('activeWindow');
      window.classList.add('inactiveWindow');
    });






      // if (dot.classList.contains('tRed')) {
      //   window.classList.remove('activeWindow');
      //   window.classList.add('inactiveWindow');
      // } 
      // else if (dot.classList.contains('tGreen')) {
      //   window.classList.toggle('activeWindow');
      //   window.classList.toggle('maxWindow');
      // } 
      // else if (dot.classList.contains('tYellow')) {
      //   window.classList.remove('activeWindow');
      //   window.classList.add('inactiveWindow');
      // }

    });
  }
}


  const windows = document.querySelectorAll('.appWindow');
    addTrafficLightListener(windows);





// ----------------------------------------------Draggable terminal----------------------------------------------------------------




function makeDraggable(windowElement, topBarElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (topBarElement) {
      topBarElement.onmousedown = dragMouseDown;
    } else {
      windowElement.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      let newTop = windowElement.offsetTop - pos2;
      let newLeft = windowElement.offsetLeft - pos1;
      let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (newTop < 0) {
        newTop = 0;
      }
      if (newTop + windowElement.offsetHeight > viewportHeight) {
        newTop = viewportHeight - windowElement.offsetHeight;
      }
      if (newLeft < 0) {
        newLeft = 0;
      }
      if (newLeft + windowElement.offsetWidth > viewportWidth) {
        newLeft = viewportWidth - windowElement.offsetWidth;
      }
      windowElement.style.top = newTop + 'px';
      windowElement.style.left = newLeft + 'px';
    }
  
    function closeDragElement(e) {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
  // Call the function with the window and top bar elements
  const terminalWindow = document.querySelector('#terminalWindow');
  const tWindowTopBar = document.querySelector('#terminalWindowBar');
  makeDraggable(terminalWindow, tWindowTopBar);
  
  const chatWindow = document.querySelector('#chatWindow');
  const chatWindowTopBar = document.querySelector('#chatWindowBar');
  makeDraggable(chatWindow, chatWindowTopBar);










const appIcons = document.querySelectorAll('.applicationIcon');


for (const appIcon of appIcons) {
  appIcon.addEventListener('click', (event) => {
    const iconName = event.currentTarget.querySelector('.iconName').textContent.toLowerCase();
    const appWindow = document.querySelector(`#${iconName}Window`);

    // Remove "inactiveWindow" and add "activeWindow" to the classList
    appWindow.classList.remove('inactiveWindow');
    appWindow.classList.add('activeWindow');

    openWindow(appWindow, appIcon);
  });
}




// Get all active windows
const activeWindow = document.querySelectorAll('.activeWindow');

// Add click event listener to each active window
activeWindow.forEach(window => {
  window.addEventListener('click', () => {
    // Get the highest z-index among all active windows
    const highestZIndex = Math.max(...Array.from(activeWindow).map(w => Number(w.style.zIndex) || 0));

    // Set the clicked window's z-index to one higher than the highest z-index
    window.style.zIndex = highestZIndex + 100;
  });
});

