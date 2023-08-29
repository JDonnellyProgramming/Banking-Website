const heading = document.querySelector('.title');
        const logoImage = document.querySelector('.logo-image');
        const underlineMessage = document.querySelector('.underline-message');
        const helpBox = document.querySelector('.help-box');
        const contactBox = document.querySelector('.contact-box');
        const fscsBox = document.querySelector('.FSCS-box');
        const Container = document.querySelector('.container');
        const phoneEmail = document.querySelector('.phone-email');
        const forgottenDetails = document.querySelector('.forgotten-details');
        let helpBoxOpen = false;
        let contactBoxOpen = false;
        let oneIsOpen = false;
        var newDiv1;
        var newDiv2;
        var newDiv3;
        var bubbleImage;
        var bubbleMessage;

        window.addEventListener('resize', function() {

        var viewportWidth = window.innerWidth;
        console.log('Viewport width: ' + viewportWidth);
    });
    underlineMessage.addEventListener('click', function() {
        const securityWindow = window.open('security_window.html', '_blank', 'width=800, height=600');
    });

    forgottenDetails.addEventListener('click', function() {
        location.href = 'forgotten_details.html';
    })
    
    helpBox.addEventListener('click', helpBoxFunc);
    contactBox.addEventListener('click', contactBoxFunc);
    
    function helpBoxFunc() {
        console.log('helpBox');
           if (!helpBoxOpen && !contactBoxOpen) {
            helpBox.style.height = 250 + 'px';
            contactBox.style.top = 390 + 'px';
            fscsBox.style.top = 460 + 'px';
            helpBoxOpen = true;
            contactBox.removeEventListener('click', contactBoxFunc);

            newDiv1 = document.createElement('div');
            newDiv1.classList.add('userID-question')
            newDiv1.innerHTML = 'What is a User ID?';
            helpBox.appendChild(newDiv1);

            newDiv2 = document.createElement('div');
            newDiv2.classList.add('trouble-logging-question')
            newDiv2.innerHTML = 'Why am I having trouble logging on?';
            helpBox.appendChild(newDiv2);

            newDiv3 = document.createElement('div');
            newDiv3.classList.add('reset-question')
            newDiv3.innerHTML = 'How do I reset my password?';
            helpBox.appendChild(newDiv3);

            newDiv1.addEventListener('mouseover', newDiv1Bubble);
            newDiv1.addEventListener('mouseleave', loseDiv1Bubble);

            newDiv2.addEventListener('mouseover', newDiv2Bubble);
            newDiv2.addEventListener('mouseleave', loseDiv2Bubble);

            newDiv3.addEventListener('mouseover', newDiv3Bubble);
            newDiv3.addEventListener('mouseleave', loseDiv3Bubble);

           }
           else {
            console.log('else');
            helpBox.style.height = 60 + 'px';
            contactBox.style.top = 200 + 'px';
            fscsBox.style.top = 270 + 'px';
            helpBoxOpen = false;
            contactBox.addEventListener('click', contactBoxFunc);
            
            newDiv1.remove();
            newDiv2.remove();
            newDiv3.remove();
           }
        }
 

    function contactBoxFunc() {
        console.log('contactBox');
        if (!helpBoxOpen && !contactBoxOpen) {
            contactBox.style.height = 350 + 'px';
            fscsBox.style.top = 560 + 'px';
            contactBoxOpen = true;
            helpBox.removeEventListener('click', helpBoxFunc);
            phoneEmail.style.display = 'block';

        }
        else {
            contactBox.style.height = 60 + 'px';
            fscsBox.style.top = 270 + 'px';
            contactBoxOpen = false;
            helpBox.addEventListener('click', helpBoxFunc);
            phoneEmail.style.display = 'none';
           }
        }

        function newDiv1Bubble() {
            console.log('newDiv1 bubble');
              bubbleImage = document.createElement('img');
              bubbleImage.classList.add('bubble-image');
              bubbleImage.src = 'upside_down_bubble_edit.png';
              bubbleMessage = document.createElement('div');
              bubbleMessage.classList.add('bubble-message');
              bubbleMessage.innerHTML = `This is a unique <br> message you will need <br> to run your internet banking`;
              Container.appendChild(bubbleImage);
              Container.appendChild(bubbleMessage);
        }

        function loseDiv1Bubble() {
            bubbleImage.remove();
            bubbleMessage.remove();
        }

        function newDiv2Bubble() {
            console.log('newDiv1 bubble');
              bubbleImage = document.createElement('img');
              bubbleImage.classList.add('bubble-image');
              bubbleImage.src = 'upside_down_bubble_edit.png';
              bubbleMessage = document.createElement('div');
              bubbleMessage.classList.add('bubble-message');
              bubbleMessage.innerHTML = `It could be because <br> our servers are down <br> or you have fogotten you <br> details`;
              bubbleImage.style.top = 270 + 'px';
              bubbleMessage.style.top = 360 + 'px';
              Container.appendChild(bubbleImage);
              Container.appendChild(bubbleMessage);
        }

        function loseDiv2Bubble() {
            bubbleImage.remove();
            bubbleMessage.remove();
        }

        function newDiv3Bubble() {
            console.log('newDiv1 bubble');
              bubbleImage = document.createElement('img');
              bubbleImage.classList.add('bubble-image');
              bubbleImage.src = 'upside_down_bubble_edit.png';
              bubbleMessage = document.createElement('div');
              bubbleMessage.classList.add('bubble-message');
              bubbleMessage.innerHTML = `Click on forgotten <br> your logon details?`;
              bubbleImage.style.top = 360 + 'px';
              bubbleMessage.style.top = 450 + 'px';
              Container.appendChild(bubbleImage);
              Container.appendChild(bubbleMessage);
        }

        function loseDiv3Bubble() {
            bubbleImage.remove();
            bubbleMessage.remove();
        }
    