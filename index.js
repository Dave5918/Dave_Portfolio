const buttonss = document.querySelectorAll('.ct');
const allSections = document.querySelector(".main-content");
const sections = document.querySelectorAll("section");
const bttns = document.querySelectorAll(".controlls");

function activeBttn() {
    //button click active class
    for (let i = 0; i < buttonss.length; i++) {
        buttonss[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += (' active-btn');

            icon.classList.remove('agile');
            exit.style.display = "none";
            menu.style.display = "block";
        })

    }
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from other btns
            bttns.forEach((btn) => {
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove("active")
            })
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })
    //theme
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.addEventListener('click', () => {
        themeBtn.style.display = 'none';
        colors.style.display = 'flex';
    })
}
activeBttn();

const menu = document.getElementById('manipulate');
const icon = document.getElementById('icon');
const exit = document.getElementById('exit');
menu.addEventListener('click', function () {
    
    icon.classList.toggle('agile');
    menu.style.display = "none";
    exit.style.display = "block";
})
exit.addEventListener('click', function () {
    exit.style.display = "none";
    menu.style.display = "block";
    icon.classList.remove('agile');
})

//themes
const colors = document.getElementById('colors');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const themeBtn=document.getElementById('theme-btn')
yellow.addEventListener('click', function() {
    let element = document.body;
    element.classList.add('yellow')
    themeBtn.style.display = 'flex';
    colors.style.display = 'none';
    element.classList.remove('green')
    element.classList.remove('blue')
})
green.addEventListener('click', function() {
    let element = document.body;
    element.classList.add('green')
    themeBtn.style.display = 'flex';
    colors.style.display = 'none';
    element.classList.remove('yellow')
    element.classList.remove('blue')
})
blue.addEventListener('click', function() {
    let element = document.body;
    element.classList.add('blue')
    themeBtn.style.display = 'flex';
    colors.style.display = 'none';
    element.classList.remove('green')
    element.classList.remove('yellow')

})