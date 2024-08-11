var uil = document.querySelector('.uil')

uil.onclick = function () {
    var menuBtn = document.getElementById('myNavMenu')

    if (menuBtn.className == 'nav-menu') {
        menuBtn.className += ' responsive'
    } else {
        menuBtn.className = 'nav-menu'
    }
}

window.onscroll = function() {
    headerShadow()
}

function headerShadow() {
    const navHeader = document.getElementById('header')
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.1)'
        navHeader.style.height = '70px'
        navHeader.style.lineHeight = '70px'
    } else {
        navHeader.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.1)'
        navHeader.style.height = '70px'
        navHeader.style.lineHeight = '70px'
    }
}

var typingEffect = new Typed('.typedText', {
    strings : ['Web Developer', 'Web Designer', 'UX/UI Designer', 'Freelancer'],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

function experince() {
    const year = new Date().getFullYear()

    var htmlYears = document.getElementById('htmlYears')
    var cssYears = document.getElementById('cssYears')
    var jsYears = document.getElementById('jsYears')
    var reactYears = document.getElementById('reactYears')
    var nextYears = document.getElementById('nextYears')
    var angularYears = document.getElementById('angularYears')

    htmlYears.innerHTML = (year - 2019)
    cssYears.innerHTML = (year - 2019)
    jsYears.innerHTML = (year - 2019)
    reactYears.innerHTML = (year - 2022)
    nextYears.innerHTML = (year - 2023)
    angularYears.innerHTML = (year - 2023)
}

sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', {delay: 100})
sr.reveal('.featured-text-info', {delay: 200})
sr.reveal('.social_icons', {delay: 200})
sr.reveal('.download-two', {delay: 200})
sr.reveal('.featured-image', {delay: 300})
sr.reveal('.asset', {delay: 300})

sr.reveal('.top-header', {})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', {delay: 100})
srRight.reveal('.form-control', {delay: 100})

const sections = document.querySelectorAll('section[id')

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

experince()