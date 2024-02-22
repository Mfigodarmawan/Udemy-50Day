const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Hayabusa',
        position: 'Assasin',
        photo: 'https://blog.unipin.com/wp-content/uploads/2020/10/mengulik-hayabusa-mobile-legend-hero-pembunuh-musuh-tercepat.jpeg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam libero itaque? Voluptatibus quos molestias nemo harum quaerat, perferendis fuga fugiat dolorem quae, deserunt vel nisi id accusamus impedit quo?"
    },
    {
        name: 'Kagura',
        position: 'Mage',
        photo: 'https://dailyspin.id/wp-content/uploads/2021/06/Revamp-Kagura-Mobile-Legends.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam libero itaque? Voluptatibus quos molestias nemo harum quaerat, perferendis fuga fugiat dolorem quae, deserunt vel nisi id accusamus impedit quo?",
    },
    {
        name: 'Hanabi',
        position: 'Marksman',
        photo: 'https://media.hitekno.com/thumbs/2023/01/19/15767-hanabi-mobile-legends-fandom/730x480-img-15767-hanabi-mobile-legends-fandom.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam libero itaque? Voluptatibus quos molestias nemo harum quaerat, perferendis fuga fugiat dolorem quae, deserunt vel nisi id accusamus impedit quo?",
    },
    {
        name: 'Hanzo',
        position: 'Assasin',
        photo: 'https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/06/hanzo-1.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam libero itaque? Voluptatibus quos molestias nemo harum quaerat, perferendis fuga fugiat dolorem quae, deserunt vel nisi id accusamus impedit quo?",
    },
]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)