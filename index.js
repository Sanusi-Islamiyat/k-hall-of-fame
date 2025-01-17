const images = [
    { src: './asset/@byulbaeri.jpg', name: 'Hwasa', debut: '2014' },
    { src: './asset/download (35).jpg', name: 'Yunjin', debut: '2022' },
    { src: './asset/download (36).jpg', name: 'Rose', debut: '2016' },
    { src: './asset/download (37).jpg', name: 'G-Dragon', debut: '2006' },
    { src: './asset/BAEK.jpg', name: 'Baekhyun', debut: '2012' },
    { src: './asset/CHAEYOUNG.jpg', name: 'Chaeyoung', debut: '2015' },
    { src: './asset/(_✿_ ).jpg', name: 'Hyunjin', debut: '2018' },
   
  ];
  
  let currentIndex = 0;
  let autoplayInterval;
  
  const imgElement = document.querySelector('.gallery-image');
  const artistNameElement = document.querySelector('.artist-name');
  const artistDebutElement = document.querySelector('.artist-debut');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  function updateImage() {
    const artist = images[currentIndex];
    imgElement.style.opacity = 0; 
    setTimeout(() => {
      imgElement.src = artist.src;
      artistNameElement.textContent = artist.name;
      artistDebutElement.textContent = `Debut: ${artist.debut}`;
      imgElement.style.opacity = 1; 
    }, 500);
  }
  
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      updateImage();
    }, 3000); 
  }
  
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  
 
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
    stopAutoplay(); 
    startAutoplay(); 
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
    stopAutoplay(); 
    startAutoplay(); 
  });
  
  
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      updateImage();
      stopAutoplay(); 
      startAutoplay(); 
    });
  });
  
  
  updateImage();
  startAutoplay();
  