tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        inter: ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'infinite-scroll': 'infinite-scroll 25s linear infinite',
                    },
                    keyframes: {
                        'infinite-scroll': {
                            from: { transform: 'translateX(0)' },
                            to: { transform: 'translateX(-100%)' },
                        }
                    }                    
                },
            },
        };

        // JavaScript to handle menu toggle and dropdown

        $(".custom-carousel").owlCarousel({
          autoWidth: true,
          loop: true
        });
        $(document).ready(function () {
          $(".custom-carousel .item").click(function () {
            $(".custom-carousel .item").not($(this)).removeClass("active");
            $(this).toggleClass("active");
          });
        });
        document.addEventListener('DOMContentLoaded', function() {
          new GreenAudioPlayer('.example');
        });


// Nav Bar

const toggleBtn = document.querySelector('.menu');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
  toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};

// Nav Bar Ends
        
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const menuDropdown = document.getElementById('menu-dropdown');

  menuToggle.addEventListener('click', function () {
      menuDropdown.classList.toggle('hidden');
  });

  menuClose.addEventListener('click', function () {
      menuDropdown.classList.add('hidden');
  });
});


VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});


        document.addEventListener('DOMContentLoaded', function () {
    new Splide('#audio-carousel', {
      type       : 'fade',
      heightRatio: 0.5,
      pagination : false,
      cover      : true,
      breakpoints: {
        600: {
          heightRatio: 0.3,
        },
      },
    }).mount();
  });
  const box = document.querySelector('.box');
  

setInterval(setBorderRadius, 300);

window.addEventListener('scroll', () => {
  const section = document.getElementById('animated-section');
  const div = document.getElementById('animated-div');
  const sectionPosition = section.getBoundingClientRect().top;
  const divPosition = div.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionPosition < screenHeight / 2) {
    section.style.animation = 'slide-up 1s ease forwards';
  }
  if (divPosition < screenHeight / 2) {
    div.style.animation = 'slide-up 1s ease forwards';
  }
});

function setBorderRadius() {
	box.style.setProperty('--br-blobby', generateBorderRadiusValue());
	box.style.setProperty('--br-blobby-after', generateBorderRadiusValue());
	box.style.setProperty('--br-blobby-before', generateBorderRadiusValue());
}

function generateBorderRadiusValue() {
	return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
}
	
function getRandomValue() {
	return Math.floor(Math.random() * 50) + 50;
}

document.getElementById('next').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft -= widthItem;
}

