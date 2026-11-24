/* ===================================
   LAPTOP STORE
   PRODUCTS DATABASE
   PART 1 - HP
=================================== */

const laptops = [

{
    id:1,
    brand:"HP",
    name:"HP Victus 15 Gaming Laptop",
    price:65999,
    oldPrice:72999,
    rating:"4.6 ★",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},

{
    id:2,
    brand:"HP",
    name:"HP Pavilion 15",
    price:58999,
    oldPrice:64999,
    rating:"4.5 ★",
    image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600"
},

{
    id:3,
    brand:"HP",
    name:"HP 15s Intel Core i5",
    price:52999,
    oldPrice:57999,
    rating:"4.4 ★",
    image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600"
},

{
    id:4,
    brand:"HP",
    name:"HP Envy x360",
    price:78999,
    oldPrice:85999,
    rating:"4.8 ★",
    image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600"
},

{
    id:5,
    brand:"HP",
    name:"HP Omen Gaming Laptop",
    price:104999,
    oldPrice:112999,
    rating:"4.9 ★",
    image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
},

{
    id:6,
    brand:"HP",
    name:"HP Chromebook 14",
    price:32999,
    oldPrice:36999,
    rating:"4.3 ★",
    image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600"
},
/* ===================================
   PART 2 - DELL
=================================== */

{
    id:7,
    brand:"Dell",
    name:"Dell Inspiron 15",
    price:58999,
    oldPrice:64999,
    rating:"4.5 ★",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},

{
    id:8,
    brand:"Dell",
    name:"Dell Vostro 3520",
    price:54999,
    oldPrice:60999,
    rating:"4.4 ★",
    image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600"
},

{
    id:9,
    brand:"Dell",
    name:"Dell Latitude 3540",
    price:69999,
    oldPrice:75999,
    rating:"4.6 ★",
    image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600"
},

{
    id:10,
    brand:"Dell",
    name:"Dell G15 Gaming Laptop",
    price:84999,
    oldPrice:92999,
    rating:"4.8 ★",
    image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600"
},

{
    id:11,
    brand:"Dell",
    name:"Dell XPS 13",
    price:119999,
    oldPrice:129999,
    rating:"4.9 ★",
    image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
},

{
    id:12,
    brand:"Dell",
    name:"Dell Alienware m16",
    price:169999,
    oldPrice:179999,
    rating:"5.0 ★",
    image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600"
},
/* ===================================
   PART 3 - LENOVO
=================================== */

{
    id:13,
    brand:"Lenovo",
    name:"Lenovo IdeaPad Slim 3",
    price:47999,
    oldPrice:53999,
    rating:"4.4 ★",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},

{
    id:14,
    brand:"Lenovo",
    name:"Lenovo IdeaPad Slim 5",
    price:61999,
    oldPrice:67999,
    rating:"4.6 ★",
    image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600"
},

{
    id:15,
    brand:"Lenovo",
    name:"Lenovo ThinkBook 15",
    price:68999,
    oldPrice:74999,
    rating:"4.7 ★",
    image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600"
},

{
    id:16,
    brand:"Lenovo",
    name:"Lenovo LOQ Gaming",
    price:79999,
    oldPrice:87999,
    rating:"4.8 ★",
    image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600"
},

{
    id:17,
    brand:"Lenovo",
    name:"Lenovo Legion 5",
    price:109999,
    oldPrice:119999,
    rating:"4.9 ★",
    image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
},

{
    id:18,
    brand:"Lenovo",
    name:"Lenovo Yoga 7",
    price:89999,
    oldPrice:96999,
    rating:"4.8 ★",
    image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600"
},
/* ===================================
   PART 4 - ASUS
=================================== */

{
    id:19,
    brand:"ASUS",
    name:"ASUS Vivobook 15",
    price:52999,
    oldPrice:58999,
    rating:"4.5 ★",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},

{
    id:20,
    brand:"ASUS",
    name:"ASUS Vivobook Go 15",
    price:45999,
    oldPrice:51999,
    rating:"4.4 ★",
    image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600"
},

{
    id:21,
    brand:"ASUS",
    name:"ASUS Zenbook 14 OLED",
    price:82999,
    oldPrice:89999,
    rating:"4.8 ★",
    image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600"
},

{
    id:22,
    brand:"ASUS",
    name:"ASUS TUF Gaming F15",
    price:78999,
    oldPrice:85999,
    rating:"4.8 ★",
    image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600"
},

{
    id:23,
    brand:"ASUS",
    name:"ASUS ROG Strix G16",
    price:139999,
    oldPrice:149999,
    rating:"4.9 ★",
    image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
},

{
    id:24,
    brand:"ASUS",
    name:"ASUS ExpertBook B1",
    price:63999,
    oldPrice:69999,
    rating:"4.6 ★",
    image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600"
},
/* ===================================
   PART 5 - ACER
=================================== */

{
    id:25,
    brand:"Acer",
    name:"Acer Aspire 3",
    price:42999,
    oldPrice:48999,
    rating:"4.3 ★",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},

{
    id:26,
    brand:"Acer",
    name:"Acer Aspire 5",
    price:54999,
    oldPrice:60999,
    rating:"4.5 ★",
    image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600"
},

{
    id:27,
    brand:"Acer",
    name:"Acer Aspire 7 Gaming",
    price:67999,
    oldPrice:73999,
    rating:"4.6 ★",
    image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600"
},

{
    id:28,
    brand:"Acer",
    name:"Acer Nitro V 15",
    price:78999,
    oldPrice:85999,
    rating:"4.8 ★",
    image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600"
},

{
    id:29,
    brand:"Acer",
    name:"Acer Predator Helios Neo 16",
    price:124999,
    oldPrice:134999,
    rating:"4.9 ★",
    image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
},

{
    id:30,
    brand:"Acer",
    name:"Acer Swift Go 14",
    price:72999,
    oldPrice:78999,
    rating:"4.7 ★",
    image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600"
}

];