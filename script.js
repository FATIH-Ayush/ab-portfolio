// JavaScript to handle the typewriter effect
document.addEventListener('DOMContentLoaded', function() {

    const typewriterText = document.querySelector('.typewriter-text');
    const words = ['Web Developer', 'CopyWriter', 'Video Editor', 'Freelancer']; // Add the words you want to display
    let index = 0;

    function typeNextWord() {
        typewriterText.classList.remove('fade-in');
        
        setTimeout(() => {
            typewriterText.textContent = words[index];
            typewriterText.classList.add('fade-in');
            index = (index + 1) % words.length; // Loop through the array
        }, 500); // Half-second delay to fade out and replace text
    }

    setInterval(typeNextWord, 2000); // Cycle every 2 seconds
});

window.alert = function(message, timeout=null){
    const alert = document.createElement('div');
    const alertButton = document.createElement('button'); 
    alertButton.innerText = 'OK';    
    alert.classList.add('alert');    
    alert.setAttribute('style', ` 
        position:fixed;    
        top: 200px;  
        left: 50%;    
        padding: 20px;   
        border-radius: 10px;    
        box-shadow: 0 10px 5px 0 #00000022;    
        display: flex;   
        flex-direction: column;    
        border: 1px solid #333;
        transform: translateX(-50%);
        background: white;
        font-weight: bold;
        z-index: 1000;
    `);
    alertButton.setAttribute('style',`
        border: 1px solid #333;    
        background: black;
        color: white;   
        border-radius: 5px;    
        padding: 5px;
    `);
    alert.innerHTML = `<span style="padding:10px">${message}</span>`;   
    alert.appendChild(alertButton);
    
    document.body.style.overflow = 'hidden';

    alertButton.addEventListener('click', (e)=>{    
        alert.remove(); 
        document.body.style.overflow = 'auto';
    }); 
    if(timeout != null){ 
        setTimeout(()=>{ 
            alert.remove();
            document.body.style.overflow = 'auto';
        }, Number(timeout))       
    }        
    document.body.appendChild(alert);
}

document.getElementById('chatButton').addEventListener('click', function() {
    var chatMessage = document.getElementById('chatMessage');
    // Display the message when button is clicked
    chatMessage.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if the URL hash is not '#home'
    if (window.location.hash !== '#home' && window.location.hash) {
        // Redirect to home when the page is refreshed
        window.location.hash = '#home';
    }
});
