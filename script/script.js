function chaneTimeline(index, clickedElement) {
    const content = {
        1: {
            title: "Rashidun Caliphate",
            year: "632-661",
            desc: "The first four caliphs after Prophet Muhammad(sm)"
        },
        2: {
            title: "Umayyad Caliphate",
            year: "661-750",
            desc: "Expansion across North Africa and into Spain"
        },
        3: {
            title: "Abbasid Caliphate",
            year: "750-1258",
            desc: "Golden Age of Islamic civilization"
        },
        4: {
            title: "Ottoman Empire",
            year: "1299-1922",
            desc: "One of the longest-lasting empires in history"
        }
    }

    const display = document.getElementById("display-caliphate-info")

    display.innerHTML = `
        <h3 class="text-3xl font-PirataOne font-bold text-blue-900 mb-2">${content[index].title}</h3>
        <p class="text-blue-800 mb-4">${content[index].year}</p>
        <p class="text-gray-700">${content[index].desc}</p>
    `

    document.querySelectorAll(".flex.flex-col.items-center.cursor-pointer div:first-child").forEach(div => {
        div.classList.remove("bg-amber-600", "text-white")
        div.classList.add("bg-blue-100", "text-blue-900")
    })

    clickedElement.querySelector("div:first-child").classList.remove("bg-blue-100", "text-blue-900")
    clickedElement.querySelector("div:first-child").classList.add("bg-amber-600", "text-white")
}


// Image sources
const images = [
    "img/main-image.jpg",
    "img/Erzurumlu ibrahim Hakki’s World Map in his Marifetname book.jpg",
    "img/old mosque.jpg",
    "img/aqsa.jpg"
];

const carouselImage = document.getElementById("carousel-image");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;
let interval;

// Update Image & Indicator
function updateCarousel(index) {
    carouselImage.src = images[index]
    indicators.forEach((dot, i) => {
        dot.classList.toggle("bg-amber-500", i === index)
        dot.classList.toggle("bg-white/50", i !== index)
    })
}

// Next Image
document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length
    updateCarousel(currentIndex)
})
// Previous Image
document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    updateCarousel(currentIndex)
})

// Indicator Click
indicators.forEach((dot, i) => {
    dot.setAttribute("data-index", i)
    dot.addEventListener("click", (event) => {
        currentIndex = parseInt(event.target.getAttribute("data-index"), 10)
        updateCarousel(currentIndex)
    })
})

function startAutoSlider() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length
        updateCarousel(currentIndex)
    }, 2000);
}

function stopAutoSlider() {
    clearInterval(interval)
}

carouselImage.addEventListener("mouseenter", stopAutoSlider)
carouselImage.addEventListener("mouseleave", startAutoSlider)

