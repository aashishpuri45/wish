// Heart rain animation
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

// Heart button surprise
document.getElementById('heart-button').addEventListener('click', function () {
    this.innerHTML = '<i class="fas fa-heart"></i> I Love You!';
    this.classList.add('heart-beat');

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = (this.getBoundingClientRect().left + this.offsetWidth / 2 - 10) + 'px';
            heart.style.top = (this.getBoundingClientRect().top - 10) + 'px';
            heart.style.fontSize = '20px';
            heart.style.color = 'var(--accent-color)';
            heart.style.pointerEvents = 'none';
            heart.style.transform = 'translateY(0)';
            heart.style.transition = 'all 1.5s ease-out';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.transform = `translateY(-${Math.random() * 100 + 50}px) translateX(${Math.random() * 100 - 50}px)`;
                heart.style.opacity = '0';
            }, 10);

            setTimeout(() => {
                heart.remove();
            }, 1500);
        }, i * 100);
    }

    setTimeout(() => {
        this.classList.remove('heart-beat');
        this.innerHTML = '<i class="fas fa-heart"></i> Click for a Surprise!';
    }, 3000);
});

// Countdown
function updateCountdown() {
    const now = new Date();
    const nextDate = new Date();
    nextDate.setMonth(now.getMonth() + 1);

    const diff = nextDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Quiz answer check
const firstDate = '2023-05-10';
const correctHour = '7';
const correctMinute = '48';

document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const dateAnswer = document.getElementById('first-date').value.trim();
    const hourAnswer = document.getElementById('hour').value.trim();
    const minuteAnswer = document.getElementById('minute').value.trim();

    if (!dateAnswer || !hourAnswer || !minuteAnswer) {
        alert('Please answer all questions!');
        return;
    }

    if (dateAnswer === firstDate && hourAnswer === correctHour && minuteAnswer === correctMinute) {
        window.location.href = 'wish.html';
    } else {
        alert('Not quite right! Try again 💕');
    }
});
