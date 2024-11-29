function playVideo() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'flex';
    iframe.src = "https://www.youtube.com/embed/4CuBR9VGDG8?si=7Q-cgCCYu9_LxxNn"; // Thêm autoplay
}

function closeModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'none';
    iframe.src = ''; 
}
