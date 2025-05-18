
export function scrollDots() {
    const carrossel = document.getElementById('carrosel');
    const prevBtn = document.querySelector('#about-me .carrosel-arrow.left');
    const nextBtn = document.querySelector('#about-me .carrosel-arrow.right');
    const scrollIndicator = document.getElementById('scroll-indicator');
    const dots = document.querySelectorAll('#scroll-indicator .dot');

    if (carrossel && scrollIndicator) {
        const paragraphs = document.querySelectorAll('#carrosel p');
        const totalParagraphs = paragraphs.length;
        let currentIndex = 0;

        function updateDots(index) {
            paragraphs.forEach((p, i) => {
                p.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            updateArrows(index);
        }

        function updateArrows(index) {
            if (prevBtn) {
                prevBtn.disabled = index === 0;
                prevBtn.classList.toggle('disabled', index === 0);
            }
            if (nextBtn) {
                nextBtn.disabled = index === totalParagraphs - 1;
                nextBtn.classList.toggle('disabled', index === totalParagraphs - 1);
            }
        }

        // Avançar e voltar com as setas
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    paragraphs[currentIndex].scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                    updateDots(currentIndex);
                }
            });

            nextBtn.addEventListener('click', () => {
                if (currentIndex < totalParagraphs - 1) {
                    currentIndex++;
                    paragraphs[currentIndex].scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                    updateDots(currentIndex);
                }
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
                    currentIndex = index;
                    updateDots(currentIndex);
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
                updateDots(currentIndex);
            }
        }, { passive: true });

        updateDots(0);

    } else if (scrollIndicator) {
        scrollIndicator.style.display = 'none';
    }
};