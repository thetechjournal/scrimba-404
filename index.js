const ride = document.getElementById('ride');
const cycle = document.getElementById('cycle');
const home = document.getElementById('home');

ride.addEventListener('mouseenter', function(e) {
    cycle.classList.add('animate');
    cycle.classList.remove('grayscale');
    home.classList.remove('grayscale');
})

ride.addEventListener('mouseleave', function(e) {
    cycle.classList.remove('animate');
    cycle.classList.add('grayscale');
    home.classList.add('grayscale');
})