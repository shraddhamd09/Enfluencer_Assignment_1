document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('main-text');
    const text = textElement.innerHTML;
    const newText = text.replace('and personalized guidance', '<br>and personalized guidance');
    textElement.innerHTML = newText;

    document.querySelector('.read-more').addEventListener('click', function() {
        alert('More information coming soon!');
    });
});
