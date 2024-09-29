import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


// export const assets = {
//     appointment_img,
//     header_img,
//     group_profiles,
//     logo,
//     chats_icon,
//     verified_icon,
//     info_icon,
//     profile_pic,
//     arrow_icon,
//     contact_image,
//     about_image,
//     menu_icon,
//     cross_icon,
//     dropdown_icon,
//     upload_icon,
//     stripe_logo,
//     razorpay_logo
// }

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

// export const alldoctors = [
//     {
//       email: "email1@gmail.com",
//       password:"Testing",
//         name: 'Dr. Richard James',
//         image: doc1,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//        email: "email2@gmail.com",
//       password:"Testing",
//         name: 'Dr. Emily Larson',
//         image: doc2,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         email: "email3@gmail.com",
//       password:"Testing",
//         name: 'Dr. Sarah Patel',
//         image: doc3,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//       email: "email4@gmail.com",
//       password:"Testing",
//         name: 'Dr. Christopher Lee',
//         image: doc4,
//         speciality: 'Pediatricians',
//         degree: 'MBBS',
//         experience: '2 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 40,
//         address: {
//             line1: '47th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         email: "email4@gmail.com",
//       password:"Testing",
//         name: 'Dr. Jennifer Garcia',
//         image: doc5,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     { 
//        email: "email5@gmail.com",
//       password:"Testing",
//         name: 'Dr. Andrew Williams',
//         image: doc6,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//        email: "email6@gmail.com",
//       password:"Testing",
//         name: 'Dr. Christopher Davis',
//         image: doc7,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         email: "email7@gmail.com",
//       password:"Testing",
//         name: 'Dr. Timothy White',
//         image: doc8,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         email: "email8@gmail.com",
//       password:"Testing",
//         name: 'Dr. Ava Mitchell',
//         image: doc9,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         email: "email9@gmail.com",
//       password:"Testing",
//         name: 'Dr. Jeffrey King',
//         image: doc10,
//         speciality: 'Pediatricians',
//         degree: 'MBBS',
//         experience: '2 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 40,
//         address: {
//             line1: '47th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//        email: "email11@gmail.com",
//       password:"Testing",
//         name: 'Dr. Zoe Kelly',
//         image: doc11,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         email: "email22@gmail.com",
//       password:"Testing",
//         name: 'Dr. Patrick Harris',
//         image: doc12,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         email: "email33@gmail.com",
//       password:"Testing",
//         name: 'Dr. Chloe Evans',
//         image: doc13,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//       email: "email44@gmail.com",
//       password:"Testing",
//         name: 'Dr. Ryan Martinez',
//         image: doc14,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//          email: "email55@gmail.com",
//       password:"Testing",
//         name: 'Dr. Amelia Hill',
//         image: doc15,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
// ]