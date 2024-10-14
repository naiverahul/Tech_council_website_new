// Slider functionality
// let sliderIndex = 0;
// const sliderItems = document.querySelectorAll('.slider-item');
// function toggleMenu() {
//     const menu = document.querySelector('.menu');
//     menu.classList.toggle('active');
// }

// function showNextSlide() {
//     sliderItems.forEach((item, index) => {
//         item.style.transform = `translateX(-${sliderIndex * 100}%)`;
//     });
//     sliderIndex = (sliderIndex + 1) % sliderItems.length;
// }

// setInterval(showNextSlide, 3000);  // Change slides every 3 seconds

// Particles.js Configuration
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 300,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#000000"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#cecece",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            }
        }
    },
    "retina_detect": true
});


// Store data for the carousel
const carouselData = [
    { image: 'images/society1.jpg', description: 'Description of Event 1' },
    { image: 'images/society2.jpg', description: 'Description of Event 2' },
    { image: 'images/society3.jpg', description: 'Description of Event 3' }
];

let currentSlideIndex = 0;

// Show the selected slide with enlarging effect
function showSlide(index) {
    const mainImage = document.getElementById('main-image');
    const mainDescription = document.getElementById('main-description');
    const thumbnails = document.querySelectorAll('.carousel-thumbnails img');

    // Remove active class from previous thumbnail
    thumbnails[currentSlideIndex].classList.remove('active');
    
    // Apply shrinking effect on the previous image
    document.querySelector('.carousel-main').style.transform = 'scale(0.8)';

    // Wait for the shrinking to finish, then switch images and enlarge the new one
    setTimeout(() => {
        mainImage.src = carouselData[index].image;
        mainDescription.textContent = carouselData[index].description;

        // Apply enlarging effect on the new image
        document.querySelector('.carousel-main').style.transform = 'scale(1)';
    }, 300); // Delay to sync with shrink

    // Add active class to the clicked thumbnail
    thumbnails[index].classList.add('active');

    // Set the new slide index
    currentSlideIndex = index;
}

// Initially display the first slide
showSlide(1);
