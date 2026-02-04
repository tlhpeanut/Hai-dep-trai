document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionContainer = document.getElementById('questionContainer');
    const successMessage = document.getElementById('successMessage');

    let yesBtnFontSize = 1.2; // Initial font size in rem
    let yesBtnPadding = 15; // Initial padding

    const noTexts = [
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;("
    ];

    noBtn.addEventListener('click', () => {
        // Increase Yes button size
        yesBtnFontSize += 0.5;
        yesBtn.style.fontSize = `${yesBtnFontSize}rem`;
        
        // Optional: Increase padding to keep aspect ratio somewhat nice
        yesBtnPadding += 5;
        yesBtn.style.padding = `${yesBtnPadding}px ${yesBtnPadding * 2}px`;

        // Change No button text randomly
        const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
        noBtn.textContent = randomText;
    });

    yesBtn.addEventListener('click', () => {
        questionContainer.style.display = 'none';
        successMessage.style.display = 'block';
        createConfetti();
    });

    // Background floating hearts
    function createHearts() {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5s
        heart.style.opacity = Math.random();
        heart.style.width = Math.random() * 20 + 10 + 'px';
        heart.style.height = heart.style.width;
        
        // Adjust pseudo-elements size via CSS variable or inline (simplified here just by scale)
        // Since we used fixed pixels in CSS, let's just use transform scale for variety
        const scale = Math.random() * 0.5 + 0.5;
        heart.style.transform = `scale(${scale}) rotate(45deg)`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHearts, 300);

    // Simple Confetti for Success
    function createConfetti() {
        const colors = ['#ff4d6d', '#ffb6c1', '#ffffff', '#ffd700'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '100';
            document.body.appendChild(confetti);

            const destinationX = (Math.random() - 0.5) * window.innerWidth;
            const destinationY = (Math.random() - 0.5) * window.innerHeight;
            
            const animation = confetti.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${destinationX}px, ${destinationY}px)`, opacity: 0 }
            ], {
                duration: 1500 + Math.random() * 1000,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                fill: 'forwards'
            });

            animation.onfinish = () => confetti.remove();
        }
    }
});
