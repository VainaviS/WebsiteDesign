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