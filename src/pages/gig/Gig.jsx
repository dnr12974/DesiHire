import React, { useState } from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

// Sample services data
const services = [
  { //1st service
    title: "I wil provide you with Herbal Remedies and Natural Medicine",
    price: "Rs.500",
    user: "Rama Devi",
    description: "Namaste! I am Rama Devi, a Ayurvedic practitioner with over 10 years of experience.I have learnt the ancient art of Ayurveda from my ancestors and I am here to provide you with chemical-free hrbal and natural remedies for your health issues.Ayurveda is a holistic approach to heath and it focuses on the balance of mind,body and soul.Ayurveda helps in curing the root cause of the disease and not just the symptoms.",
    images: [
      "https://as2.ftcdn.net/v2/jpg/02/13/55/21/1000_F_213552183_aGdO9unZ7rQ0xKLeh1gTMfzCL5tJXqRx.jpg",
      "https://media.istockphoto.com/id/1397899377/photo/herbal-medicine-alternative-heal-nature-pharmacy-and-homeopathy-fresh-herb-in-a-mortar-on.jpg?s=612x612&w=0&k=20&c=5aL1akX9sOnwikYpIfvqhdyvhWwtTiC64uxieMVBNOo=",
      "https://img.freepik.com/premium-photo/blends-herbs-essential-oils-natural-remedies-baths-concept-herbal-remedies-aromatherapy-natural-healing-bath-blends-essential-oils_864588-205151.jpg",
    ],
    sellerInfo: {
      user: "Rama Devi",
      country: "Haryana,India",
      memberSince: "Aug 2022",
      responseTime: "4 hours",
      lastDelivery: "1 day",
      languages: "English,Hindi,Haryanvi",
      bio: "My name is Rama Devi,I am a house-wife and an Ayurvedic practitoner in my village and i have been practicing Ayurveda for over 10 years.Since my childhood I have been fascinated about the ancient art of Ayurveda and I have leanrt it from my ancestors."
    },
    features: [
      { title: " Personalized Ayurvedic Consultations" },
      { title: "Herbal Medicine and Remedies" },
      { title: "Diet and Lifestyle Recommendations" },
      { title: "Traditional Ayurvedic Therapies" },
    ],
    delivery: "2 Days Delivery",
    revisions: "3 Follow-up Consultations",
    image: "https://www.shutterstock.com/image-photo/portrait-indian-rural-woman-smiling-260nw-2249404243.jpg",
  },
  {  //2nd service
    title: "I will provide you with Gardening and Farming Tips and Techniques.",
    price: "Rs.200",
    user: "Balraj Singh",
    description: "Farming and Gardening are the two most important aspects of our lives and they are the backbone of our society.Gardening in cities is a new trend and it is very important to know the basics of gardening and farming.I am here to provide you with the best gardening and home farming tips that will help you to grow your own vegetables and fruits at home.",
    images: [
      "https://www.agrifarming.in/wp-content/uploads/2022/06/Organic-Backyard-Gardening2.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzGF0JQ3d98FSj-eri2iv4pefjLU5lfH50DJgsuX1VoC_dE4rtJYs35Y8JaySUcyifbiWTq6CbWoh19Rci06yBYaQbz5bJS-Og3OXS-v-_KUgSMSUdDkq-Zgioue6jfdVloxqFLwmHGCI/s1600/IMG_9172.jpg",
      "https://www.globalgiving.org/pfil/1891/ph_1891_76181.jpg",
    ],
    sellerInfo: {
      user: "Balraj Singh",
      country: "Punjab,India",
      memberSince: "Jan 2021",
      responseTime: "1.5 hour",
      lastDelivery: "1 days",
      languages: "English,Hindi,Punjabi",
      bio: "Namaste!I am Balraj Singh,a farmer and a gardening enthusiast.I have been farming for over 18 years and I have a vast experience in farming and gardening.I have a small farm in my village and I grow vegetables and fruits in my farm.I have leanrt the art of farming from my father and uncle. "
    },
    features: [
      { title: "Farming Tips and hacks" },
      { title: "Farming/Gardening tools are provided" },
      { title: "Personal monitering and guidance" },
    ],
    delivery: "1 Days Delivery",
    revisions: "2 Follow-up Consultations",
    image: "https://media.istockphoto.com/id/1125873507/photo/indian-farmer-standing-in-agricultural-field.jpg?s=612x612&w=0&k=20&c=xUOD14TAn0JL2vNE84M8VbEl7Yc_PiFupHO0BoQytNc=",
  },
  { //3rd service
    title: "I will provide you with Traditional Jewellary with a modern twist.",
    price: "Rs.799",
    user: "Nandini Rai",
    description: "Jewellary is an important part of our culture and tradition and it is very important to wear the right jewellary for the right occasion.I am here to provide you with the best traditional jewellary with a modern twist that will make you look elegant and stylish.It is handcrafted by the best artisans of my village and it is made with love and care.",
    images: [
      "https://arteastri.com/cdn/shop/files/1_ac932d82-afc2-4c27-8f25-088371d845e1.jpg?v=1694157937",
      "https://cdn.dotpe.in/longtail/store-items/3935401/Co8I5oEe.png",
      "https://www.voylla.com/cdn/shop/products/VMJAI44263_CS_3b30f4bb-62d4-4a8e-b2db-c4e8a413ec7c.jpg?v=1701716475",
    ],
    sellerInfo: {
      user: "Nandini Rai",
      country: "Karnataka,India",
      memberSince: "July 2021",
      responseTime: "3 hour",
      lastDelivery: "4-5 days",
      languages: "English,Hindi,Kannada,Tulu",
      bio:"Namaste!I am Nandini Rai,a house-wife and a have passion for jewellary making.I have been making jewellary for over 5 years and I am doing this as a part-time buisness to support my family financially."
    },
    features: [
      { title: "Customised Jewellary designs" },
      { title: "Extra beeds and threads in case of repair" },
    
    ],
    delivery: "4-5 Days Delivery",
    revisions: "One time replacement in case of damage",
    image: "https://c8.alamy.com/compfr/ej0tad/portrait-d-une-dame-de-l-inde-rurale-en-sari-vert-ej0tad.jpg",
  },
  {  //4th service
    title: "I will provide you with Handicraft products for your home decoration.",
    price: "Rs.599",
    user: "Ramesh Reddy",
    description: "Handicraft products are the best way to decorate your home and make it look beautiful and elegant.Handicraft products are made with love and lots of efforts and they are unique in their own way.I am here to provide you with the best handicraft products that will make your home look beautiful and traditional.",
    images: [
      "https://m.media-amazon.com/images/I/91U632+RMdL.jpg",
      "https://exclusivelane.com/cdn/shop/articles/today_el.png?v=1680262388",
      "https://i.etsystatic.com/24921594/r/il/d859fd/4620150775/il_570xN.4620150775_qu9o.jpg",
    ],
    sellerInfo: {
      user: "Ramesh Reddy",
      country: "Telangana,India",
      memberSince: "Sept 2023",
      responseTime: "2.5 hour",
      lastDelivery: "4-5 days",
      languages: "English,Hindi,Telugu",
      bio: "Namaste!I am Ramesh Reddy,a handicraft artist and I have been making handicraft products for over 12 years.I have a small workshop in my town where I make handicraft products and I sell them in the local market. "
    },
    features: [
      { title: "Customised Handicrafts" },
      { title: "Items with finess for all sections of home" },
      
    ],
    delivery: "4-5 Days Delivery",
    revisions: "One time replacement in case of damage",
    image: "https://media.istockphoto.com/id/1291626016/photo/indian-farmer.jpg?s=612x612&w=0&k=20&c=yT1HlsdyadgOMfMPDDTkYCpJUdKSHFl-Y463UJN2ISM=",
  },
  {  //5th service
    title: "I will provide you with Hnadmade Book Acessories for your reading needs.",
    price: "Rs.99",
    user: "Anthony Dsouza",
    description: "Books are the best friends of a person and it is very important to take care of them.I am here to provide you with the best handmade book accessories that will help you to keep your books safe and secure.",
    images: [
      "https://www.marthastewart.com/thmb/NstqujeD0bNqz1aGhdGRSPMnda0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mld105893_0910_bookmark1_exp_lighter_vert-1968dddc7bd64aeb9a90e81a3371a090.jpg",
      "https://www.mixedmediaart.net/wp-content/uploads/2022/05/MMA-Studio-mini-book-cover-ideas.jpg",
      "https://i5.walmartimages.com/seo/WIRESTER-2pcs-Set-Gray-Leather-Bookmark-Square-Corner-Page-Markers-Book-Accessories-Reading-Lovers-Gifts-Joshua-1-9-She-Believed-Could-So-Did-Blue-Fl_a1d33ba4-22fb-45a1-9655-c7ac14b5684b.acf15d41e2ab6cec0829cb08c570891d.jpeg",
    ],
    sellerInfo: {
      user: "Anthony Dsouza",
      country: "Kerala,India",
      memberSince: "Dec 2020",
      responseTime: "1-2 hour",
      lastDelivery: "1 day",
      languages: "English,Hindi,Malayalam",
      bio: "Namaste!I am Anthony Dsouza,a book lover and a book accesories maker.I have been making book accesories from over 5 years and I have a small shop in my town where I sell book accesories.This platform is a great opportunity for me to showcase my talent and sell my products to a larger audience."
    },
    features: [
      { title: "Customised Book covers" },
      { title: "Book marks with unique designs and special messages" },
      
    ],
    delivery: "1-2 Days Delivery",
    revisions: "Return in case of misplace or damage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1Hbaqe90toIJsxxk08Dq73obylpq98AqcA&s",
  },
  {  //6th service
    title: "Traditional Sarees and Dress Material for your special occasions.",
    price: "Rs.1499",
    user: "Sushma Rao",
    description: "Sarees are cultural attire of India and it is very important to wear right saree or dress material for the right occasion.Sarees are the most beautiful attire and it makes a woman look elegant at the same time traditional.I am here to provide you with the best traditional sarees and premium quality dress material at affordable prices.",
    images: [
      "https://panjavarnam.com/cdn/shop/files/pochampally-silk-saree-ikat-handwoven-pure-silk-pik-353-pochampally-silk-panjavarnam-pik-353-1.jpg?v=1725135208",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29854008/2024/5/30/abc7e446-fd31-46b8-a03d-9306d8de8c4b1717086718943Viscosecottonblendunstitcheddressmaterial1.jpg",
      "https://utsarees.in/cdn/shop/files/WhatsAppImage2024-06-24at11.25.20AM.jpg?v=1719213298",
    ],
    sellerInfo: {
      user: "Sushma Rao",
      country: "Andra Pradesh,India",
      memberSince: "March 2023",
      responseTime: "1-2 hour",
      lastDelivery: "6-7 day",
      languages: "English,Telugu,Hindi",
      bio: "Namaste!I am Sushma Rao,a saree lover and a dress material seller.I have been selling sarees and dress materials from a while now and I sell them in the local market."
    },
    features: [
      { title: "High Quality Sarees" },
      { title: "All kinds of dress materials available" },
      
    ],
    delivery: "6-7 Days Delivery",
    revisions: "Replace in case of misplace or damage",
    image:"https://thumbs.dreamstime.com/b/indian-lady-7221639.jpg",
  },
  {  //7th service
    title: "I will provide you with Customised Pottery.",
    price: "Rs.499",
    user: "Hanumanth S",
    description: "Pottery is an ancient art and it is very impportant to keep this art alive.I am here to provide you with the best customised pottery that will make your home look beautiful and traditional.Pottery is a great way to decorate your home and make it look stylish.It is great for gifting purposes as well.",
    images: [
      "https://www.ruiceramics.co.nz/wp-content/uploads/2023/06/Custom-Pottery-Orders.jpg",
      "https://i.pinimg.com/originals/cb/3c/60/cb3c60490c46c63bdf16659bb19ba5fa.jpg",
      "https://m.media-amazon.com/images/I/81QSrkYQVZL._AC_UF350,350_QL80_.jpg",
    ],
    sellerInfo: {
      user: "Hanumanth S",
      country: "Karnataka,India",
      memberSince: "March 2022",
      responseTime: "1-2 hour",
      lastDelivery: "1-2 day",
      languages: "English,Kannada,Hindi",
      bio: "Namaste!I am Hanumanth S,a  potter and a local buisnessman.I have been making pottery for over 10 years and this is my family buisness.We sell it in the local market.Through this platform,I want to showcase my talent and expand my buisness."
    },
    features: [
      { title: "Customised Pottery" },
      { title: "Any shape,any size,any design!!!Same Price!!!" },
      
    ],
    delivery: "1-2 Days Delivery",
    revisions: "Replace in case of misplace or damage",
    image:"https://img.freepik.com/premium-photo/potter-work-makes-ceramic-dishes-india-rajasthan_564276-178.jpg",
  },
  {  //8th service
    title: "I will provide you with Traditional,Royal Carpets.",
    price: "Rs.999",
    user: "Abdul Rahman Khan",
    description: "Carpets are the best way to decorate your home especially the living room.They are the best way to make your home look royal.I am here to provide you with the best traditional and royal carpets that will make your home look beautiful and neat.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLy0lR3bOPy6Wc6galiQBDHUdqQVEgjX4l0o8Y2u1kcInHS7NXrvT8HuSImNSzdKBQTs&usqp=CAU",
      "https://galicha.com/wp-content/uploads/2023/07/0552B.jpg",
      "https://modeneseinteriors.com/dynimg-ve20240930172226-cr1200x1100-dbParagrafiProgetti/en-5212-b1a3/2_classic-baroque-handmade-carpets-traditional-italian-style-luxury-interior-design-service-best-rugs-design-ideas.jpg",
    ],
    sellerInfo: {
      user: "Abdul Rahman Khan",
      country: "Maharashtra,India",
      memberSince: "March 2023",
      responseTime: "2-3 hour",
      lastDelivery: "1-2 day",
      languages: "English,Marathi,Hindi,Urdu",
      bio: "I am Abdul Rahman Khan,a carpet maker and a local buisnessman.I have been making carpets from a while now and I sell them in the local market and to wholesalers as well.I have a small workshop where I make carpets and I have a team of 5 people who help me in making carpets."
    },
    features: [
      { title: "Traditional Carpets" },
      { title: "Royal look and feel" },
      { title: "High quality at affordable prices" },
      
    ],
    delivery: "1-2 Days Delivery",
    revisions: "Replace in case of misplace or damage",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Old_Muslim_man_1_in_India.jpg/1200px-Old_Muslim_man_1_in_India.jpg",
  },
  // Add other services with similar structure
];

function Gig() {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter services based on search term
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gig">
      <div className="container">
      <h1>Our Market Place's services</h1>
        {/* Search Bar */}
        <div  className="search-bar">
          <input
            type="text"
            placeholder="Search by seller name, service, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Display filtered services */}
        {filteredServices.map((service, index) => (
          <div key={index} className="service">
            <div className="left">
              <span className="breadcrumbs">DESIHIRE</span>
              <h1>{service.title}</h1>
              <div className="user">
                <img
                  className="pp"
                  src={service.image}
                  alt={service.user}
                />
                <span>{service.user}</span>
                <div className="stars">
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <span>5</span>
                </div>
              </div>
              <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                {service.images.map((img, idx) => (
                  <img key={idx} src={img} alt="service" />
                ))}
              </Slider>
              <h2>About This Gig</h2>
              <p>{service.description}</p>
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img
                    src={service.image}
                    alt={service.user}
                  />
                  <div className="info">
                    <span>{service.sellerInfo.user}</span>
                    <div className="stars">
                      <img src="/img/star.png" alt="star" />
                      <img src="/img/star.png" alt="star" />
                      <img src="/img/star.png" alt="star" />
                      <img src="/img/star.png" alt="star" />
                      <img src="/img/star.png" alt="star" />
                      <span>5</span>
                    </div>
                    <button>Contact Me</button>
                  </div>
                </div>
                <p className="bio">{service.sellerInfo.bio}</p>
                  <p className="Languages">Languages:{service.sellerInfo.languages}</p>
                  <p className="LastDelivery">Last Delivery:{service.sellerInfo.lastDelivery}</p>
                  <p className="ResponseTime">Response Time:{service.sellerInfo.responseTime}</p>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{service.sellerInfo.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">{service.sellerInfo.memberSince}</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">{service.sellerInfo.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="price">
                <h2>Price</h2>
                <h3>{service.price}</h3>
              </div>
              <div className="details">
                <div className="item">
                  <span>{service.delivery}</span>
                </div>
                <div className="item">
                  <span>{service.revisions}</span>
                </div>
              </div>
              <div className="features">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="item">
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>
              <button>Continue</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gig;
