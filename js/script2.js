const apartament = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
    area: 60,
    rooms: 3,
    location: {
        country: "Jamaica",
        city: "Kingston",
    }
    
}

const aptRating = apartament.rating;
const aptDescr = apartament.descr;
const aptPrice = apartament.price;
const aptTags = apartament.tags;

const ownerName = apartament.owner.name;
const ownerPhone = apartament.owner.phone;
const ownerEmail = apartament.owner.email;
const numberOfTags = aptTags.length;
const firstTag = apartament.tags[0];
const lastTag = apartament.tags[numberOfTags - 1];

apartament.price = 5000;
apartament.rating = 4.7;
apartament.owner.name = "Henry Sibola";
apartament.tags.push("trusted");