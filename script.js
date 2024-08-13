document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.download-btn');
    downloadButton.addEventListener('mouseover', () => {
        downloadButton.classList.add('bounce');
    });
    downloadButton.addEventListener('mouseout', () => {
        downloadButton.classList.remove('bounce');
    });
});

// Simple CSS animation
const style = document.createElement('style');
style.textContent = `
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px);}
    60% {transform: translateY(-5px);}
}
.bounce {
    animation: bounce 1s;
}`;
document.head.append(style);
