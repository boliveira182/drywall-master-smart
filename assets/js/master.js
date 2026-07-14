 lucide.createIcons();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('#servicos .rounded-lg, #diferenciais .flex.gap-5, #depoimentos > div > div > div, #portfolio .group').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  document.querySelectorAll('details').forEach(detail => {
    detail.addEventListener('toggle', function () {
      if (this.open) {
        document.querySelectorAll('details').forEach(other => { if (other !== this) other.open = false; });
      }
    });
  });

  // Lógica do Slider da Hero Section
    document.addEventListener('DOMContentLoaded', () => {
        const slider = document.getElementById('hero-slider');
        const slides = slider.children;
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        const dots = document.querySelectorAll('.slider-dot');
        const currentSlideSpan = document.getElementById('current-slide');
        const totalSlidesSpan = document.getElementById('total-slides');
        const progressBar = document.getElementById('slider-progress');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        let slideInterval;
        let isTransitioning = false;

        // Atualiza contador total
        totalSlidesSpan.textContent = totalSlides;

        const updateSlider = () => {
            if (isTransitioning) return;
            isTransitioning = true;
            
            // Move o slider
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Atualiza contador
            currentSlideSpan.textContent = currentSlide + 1;
            
            // Atualiza barra de progresso
            const progress = ((currentSlide + 1) / totalSlides) * 100;
            progressBar.style.width = `${progress}%`;
            
            // Atualiza dots
            dots.forEach((dot, index) => {
                if(index === currentSlide) {
                    dot.classList.add('w-8', 'bg-white');
                    dot.classList.remove('bg-white/50');
                } else {
                    dot.classList.remove('w-8', 'bg-white');
                    dot.classList.add('bg-white/50');
                }
            });

            // Libera a transição após completar
            setTimeout(() => {
                isTransitioning = false;
            }, 700);
        };

        const nextSlide = () => {
            if (isTransitioning) return;
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        };

        const prevSlide = () => {
            if (isTransitioning) return;
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        };

        // Event Listeners dos botões
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        // Event Listeners dos dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (isTransitioning || currentSlide === index) return;
                currentSlide = index;
                updateSlider();
                resetInterval();
            });
        });

        // Suporte a gestos touch/swipe
        let touchStartX = 0;
        let touchEndX = 0;
        
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                nextSlide();
                resetInterval();
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                prevSlide();
                resetInterval();
            }
        };

        // Autoplay a cada 5 segundos
        const startInterval = () => {
            slideInterval = setInterval(nextSlide, 5000);
        };

        const resetInterval = () => {
            clearInterval(slideInterval);
            startInterval();
        };

        // Pausar autoplay quando mouse estiver sobre o slider
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        slider.addEventListener('mouseleave', () => {
            startInterval();
        });

        // Inicializar
        updateSlider();
        startInterval();
    });
