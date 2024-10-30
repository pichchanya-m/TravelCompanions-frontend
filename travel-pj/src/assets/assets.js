import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'

import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'


import us from './us.png'
import france from './france.png'
import uk from './uk.png'
import japan from './japan.png'
import netherlands from './netherlands.png'
import russia from './russia.png'

import com1 from './com1.png'
import com2 from './com2.png'
import com3 from './com3.png'
import com4 from './com4.png'
import com5 from './com5.png'
import com6 from './com6.png'
import com7 from './com7.png'
import com8 from './com8.png'
import com9 from './com9.png'
import com10 from './com10.png'
import com11 from './com11.png'
import com12 from './com12.png'
import com13 from './com13.png'
import com14 from './com14.png'
import com15 from './com15.png'

import banner from './banner.png'

export const CountryData = [
    {
        country: 'United States',
        image: us
    },
    {
        country: 'France',
        image: france
    },
    {
        country: 'United Kingdom',
        image: uk
    },
    {
        country: 'Japan',
        image: japan
    },
    {
        country: 'Netherlands',
        image: netherlands
    },
    {
        country: 'Russia',
        image: russia
    },
]
export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    banner,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}


export const staff = [
    {
        _id: 'com1',
        name: 'John Smith',
        image: com1,
        country: 'United States',
        degree: 'Bachelor’s Degree in Hospitality Management',
        experience: '4 Years',
        about: 'John has a deep passion for exploring diverse cultures and immersing himself in the local way of life wherever he goes. He loves trying authentic cuisines, often seeking out local markets and family-owned eateries to get a real taste of each destination. His travels are filled with stories of hidden gems he’s uncovered, from tucked-away cafés to scenic spots off the beaten path. John enjoys sharing these experiences with his travel buddies, always eager to introduce them to unique places and create memorable journeys.',
        fees: 50,
        address: {
            line1: '123 Elm Street',
            line2: 'Suite 400, New York, NY'
        }
    },
    {
        _id: 'com2',
        name: 'Jessica Taylor',
        image: com2,
        country: 'United States',
        degree: 'Master’s Degree in Outdoor Recreation',
        experience: '3 Years',
        about: 'Jessica is an outdoor enthusiast who feels most alive when surrounded by nature. She meticulously plans thrilling excursions, whether it’s a hiking trip up rugged mountains or a serene canoe ride across a lake. Jessica loves to create lasting memories by leading her travel companions to breathtaking viewpoints and secluded trails that few people know about. Her adventurous spirit and dedication to safety make every outing enjoyable and inspiring for everyone involved.',
        fees: 60,
        address: {
            line1: '456 Oak Avenue',
            line2: 'Apt 12B, Los Angeles, CA'
        }
    },
    {
        _id: 'com3',
        name: 'Maxime Durand',
        image: com3,
        country: 'France',
        degree: 'Bachelor’s Degree in Art History',
        experience: '1 Year',
        about: 'Marie has an unwavering love for art and history, often spending her days wandering through museums and historical sites. She is enthusiastic about sharing her knowledge with others, pointing out intricate details in art and offering historical insights that bring exhibits to life. With a deep respect for tradition and an eye for detail, Marie enjoys uncovering lesser-known stories and discussing the cultural impact of art with her travel buddies, making each museum visit both informative and engaging.',
        fees: 30,
        address: {
            line1: '78 Rue de Rivoli',
            line2: 'Paris, Île-de-France'
        }
    },
    {
        _id: 'com4',
        name: 'Henri Moreau',
        image: com4,
        country: 'France',
        degree: 'Diploma in Culinary Arts',
        experience: '2 Years',
        about: 'Henri’s enthusiasm for culinary arts is infectious, making him a delightful companion for any food lover. He delights in visiting local markets, discovering exotic ingredients, and trying unique dishes. Whether dining in hidden restaurants or cooking meals from his favorite recipes, Henri has a knack for bringing people together through food. He always shares the stories behind each dish, helping his friends experience new cultures through their taste buds.',
        fees: 40,
        address: {
            line1: '25 Avenue des Champs-Élysées',
            line2: 'Paris, Île-de-France'
        }
    },
    {
        _id: 'com5',
        name: 'Olivia Brown',
        image: com5,
        country: 'United Kingdom',
        degree: 'Bachelor’s Degree in Environmental Science',
        experience: '4 Years',
        about: 'Olivia’s passion for eco-tourism and environmental preservation shines through in every journey she undertakes. She loves exploring nature reserves, national parks, and untouched landscapes, always with a goal of minimizing her ecological footprint. Her trips often include hiking and birdwatching, allowing her to connect with nature on a deeper level. Olivia enjoys teaching her travel buddies about local ecosystems, making each adventure educational and inspiring.',
        fees: 50,
        address: {
            line1: '89 High Street',
            line2: 'London, Greater London'
        }
    },
    {
        _id: 'com6',
        name: 'William Johnson',
        image: com6,
        country: 'United Kingdom',
        degree: 'Master’s Degree in History',
        experience: '4 Years',
        about: 'William has an avid interest in history, which fuels his desire to explore and understand the world’s most significant landmarks. His trips are often filled with visits to castles, ancient ruins, and historic cities. With his keen insight and passion for storytelling, William is always ready to share intriguing historical facts and tales with fellow travelers. His companions appreciate the way he brings the past to life, transforming each site visit into an unforgettable educational experience.',
        fees: 50,
        address: {
            line1: '32 King’s Road',
            line2: 'London, Greater London'
        }
    },
    {
        _id: 'com7',
        name: 'Sakura Fujimoto',
        image: com7,
        country: 'Japan',
        degree: 'Bachelor’s Degree in Cultural Studies',
        experience: '4 Years',
        about: 'Hiroshi is passionate about Japanese culture and traditions, dedicating his travels to discovering and sharing his country’s unique customs. He enjoys visiting ancient shrines, participating in local festivals, and showing friends the artistic beauty of tea ceremonies. Hiroshi’s knowledge and love for his culture make every journey enlightening for his travel buddies, who gain a deeper appreciation for Japanese heritage through his guidance.',
        fees: 50,
        address: {
            line1: '11 Shinjuku Avenue',
            line2: 'Tokyo, Kanto'
        }
    },
    {
        _id: 'com8',
        name: 'Satoshi Yamamoto',
        image: com8,
        country: 'Japan',
        degree: 'Diploma in Urban Planning',
        experience: '3 Years',
        about: 'Satoshi finds joy in the dynamic energy of Japan’s bustling cities, always ready to introduce his friends to hidden urban gems. Whether exploring food markets, navigating labyrinthine streets, or visiting unique shops, Satoshi delights in showing others what makes city life in Japan so vibrant. He is known for his excellent food recommendations and his skill at discovering places that blend tradition with modernity, giving travel companions an authentic taste of urban Japan.',
        fees: 60,
        address: {
            line1: '88 Shibuya Street',
            line2: 'Tokyo, Kanto'
        }
    },
    {
        _id: 'com9',
        name: 'Emma van Dijk',
        image: com9,
        country: 'Netherlands',
        degree: 'Bachelor’s Degree in Fine Arts',
        experience: '1 Year',
        about: 'Emma’s appreciation for art leads her to the best galleries, exhibitions, and studios wherever she travels. With an eye for creativity and detail, she enjoys discussing her favorite works with her companions and sharing the rich cultural history behind each piece. She has a knack for finding local artists and encouraging her travel friends to support the arts, making each visit a chance to connect with the local creative community.',
        fees: 30,
        address: {
            line1: '15 Damstraat',
            line2: 'Amsterdam, North Holland'
        }
    },
    {
        _id: 'com10',
        name: 'Lucas Jansen',
        image: com10,
        country: 'Netherlands',
        degree: 'Bachelor’s Degree in Sports Science',
        experience: '2 Years',
        about: 'Lucas loves the freedom of exploring the world by bicycle. He leads companions through scenic countryside routes and vibrant city streets, making each cycling trip a memorable experience. With his extensive knowledge of biking trails and cycling safety, Lucas ensures each journey is both exhilarating and safe, leaving his friends with unforgettable views and a newfound appreciation for the Dutch landscape.',
        fees: 40,
        address: {
            line1: '23 Keizersgracht',
            line2: 'Amsterdam, North Holland'
        }
    },
    {
        _id: 'com11',
        name: 'Dmitri Ivanov',
        image: com11,
        country: 'Russia',
        degree: 'Master’s Degree in Travel Writing',
        experience: '4 Years',
        about: 'Dmitri is a seasoned travel writer who has an extraordinary talent for capturing the essence of his journeys in vivid detail. He believes that every place has a story to tell, and he loves sharing those narratives with others through his writing. His experiences range from exploring remote villages to bustling cities, each adventure adding depth to his storytelling. Dmitri finds joy in inspiring others to step out of their comfort zones and discover new perspectives, offering tips on hidden locales and capturing the lesser-known beauty of each destination.',
        fees: 50,
        address: {
            line1: '37 Red Square',
            line2: 'Moscow, Central Federal District'
        }
    },
    {
        _id: 'com12',
        name: 'Alexey Petrov',
        image: com12,
        country: 'Russia',
        degree: 'Bachelor’s Degree in Wildlife Photography',
        experience: '4 Years',
        about: 'Alexey is a passionate wildlife photographer whose lens is always focused on the wonders of the natural world. His goal is to capture rare and beautiful moments, from the delicate play of light on a sunrise landscape to the majestic grace of wild animals. He spends countless hours scouting the best spots for photography and loves sharing tips with fellow travelers on capturing the perfect shot. Alexey’s knowledge of the wilderness and respect for nature shine through in his work, making each adventure an unforgettable experience for those who join him.',
        fees: 50,
        address: {
            line1: '45 Bolshaya Nikitskaya',
            line2: 'Moscow, Central Federal District'
        }
    },
    {
        _id: 'com13',
        name: 'Sarah Thompson',
        image: com13,
        country: 'United States',
        degree: 'Bachelor’s Degree in Cultural Studies',
        experience: '4 Years',
        about: 'Sarah is deeply passionate about connecting with people from all walks of life and learning about their cultures. She thrives on the opportunity to immerse herself in local traditions and values, whether it’s attending festivals, learning traditional crafts, or sampling homemade dishes. Sarah is skilled in organizing cultural exchange experiences that allow her travel companions to truly feel a part of the community. She believes that these interactions create lasting memories and foster meaningful connections that enrich her travels and those of her companions.',
        fees: 50,
        address: {
            line1: '90 Pine Street',
            line2: 'San Francisco, CA'
        }
    },
    {
        _id: 'com14',
        name: 'Emily Taylor',
        image: com14,
        country: 'United Kingdom',
        degree: 'Master’s Degree in Travel and Tourism Management',
        experience: '3 Years',
        about: 'Emily has a knack for crafting perfect travel itineraries that cater to all types of explorers, from thrill-seekers to relaxation enthusiasts. With a background in travel and tourism management, she’s adept at planning trips that combine adventure, culture, and relaxation. Emily’s collaborative spirit shines through as she works closely with her travel buddies to create experiences that leave them with cherished memories. Whether it’s uncovering hidden city gems or exploring scenic countryside landscapes, she takes great pride in making each journey unforgettable.',
        fees: 60,
        address: {
            line1: '67 Oxford Road',
            line2: 'Manchester, Greater Manchester'
        }
    },
    {
        _id: 'com15',
        name: 'Chloe Laurent',
        image: com15,
        country: 'France',
        degree: 'Diploma in Marine Biology',
        experience: '1 Year',
        about: 'Chloe is an ocean enthusiast who loves everything about the sea, from the sound of waves to the vibrant life below the water’s surface. With her background in marine biology, she enjoys educating her travel companions about the ecosystem, from coastal wildlife to coral reefs. Chloe’s travel experiences often include relaxing on pristine beaches, snorkeling in crystal-clear waters, and introducing her friends to hidden coastal paradises. Her passion for the ocean makes every beach outing not just a getaway, but a learning experience filled with appreciation for the natural world.',
        fees: 30,
        address: {
            line1: '100 Rue de la Paix',
            line2: 'Lyon, Auvergne-Rhône-Alpes'
        }
    },
    
   
];



