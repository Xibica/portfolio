
export function scrollDots() {
    const carrossel = document.getElementById('carrosel');
    const scrollIndicator = document.getElementById('scroll-indicator');
    const dots = document.querySelectorAll('#scroll-indicator .dot');
    
    if (carrossel && scrollIndicator) {
        const paragraphs = document.querySelectorAll('#carrosel p');
        const totalParagraphs = paragraphs.length;
        let currentIndex = 0;
        
        function updateDots(index) {
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const paragraphIndex = Array.from(paragraphs).indexOf(entry.target);
                    if (paragraphIndex !== -1 && paragraphIndex !== currentIndex) {
                        currentIndex = paragraphIndex;
                        updateDots(currentIndex);
                        
                        const activeDot = dots[currentIndex];
                        activeDot.animate([
                            { transform: 'scale(1)', opacity: 0.5 },
                            { transform: 'scale(1.3)', opacity: 1 },
                            { transform: 'scale(1.1)', opacity: 1 }
                        ], {
                            duration: 300,
                            easing: 'ease-out'
                        });
                    }
                }
            });
        }, {
            threshold: 0.6, 
            rootMargin: '0px 0px -30% 0px'
        });
        
        paragraphs.forEach(p => observer.observe(p));
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (index < paragraphs.length) {
                    paragraphs[index].scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }
            });
        });
        
        let touchStartX = 0;
        
        carrossel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });
        
        carrossel.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diffX = touchStartX - touchEndX;
            
            if (Math.abs(diffX) > 50) {
                if (diffX > 0 && currentIndex < totalParagraphs - 1) {
                    currentIndex++;
                } else if (diffX < 0 && currentIndex > 0) {
                    currentIndex--;
                }
                
                paragraphs[currentIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        }, { passive: true });
        
        updateDots(0);
    } else if (scrollIndicator) {
        scrollIndicator.style.display = 'none';
    }
};