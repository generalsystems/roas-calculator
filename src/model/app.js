import { atom } from "recoil";

export const steps = atom({
    key: "steps",
    default: ["industry", "orders", "aov", "traffic"]
})

export const currentstep = atom({
    key: "currentStep",
    default: "industry"
})

export const isnextdisabled = atom({
    key: 'isnextdisabled',
    default: true
})

// Based on estimated figures from travel companies, we recommend:
// $671
//   Adjust Budget
// Monthly advertising budget


//How many orders* does your website get per month?
//*Order can mean a sale, lead, registration, etc. based on what you consider to be your most valuable conversion.

//What is the average value of an order?

//How many website visitors do you have a month?

//What is your industry?


export const industries = atom({
    key: "industries",
    default:["Arts, Entertainment & Education", "Automotive & Sports", "Business & Careers", "Family, Parenting & Society", "Health, Fitness & Food", "Home/Garden, Pets & Hobbies", "News, Politics & Law", "Personal Finance", "Real Estate", "Retail", "Style & Fashion", "Technology & Computing", "Travel", "Other"]
})


export const industry = atom({
    key: "industry",
    default: ""
})

export const orders = atom({
    key: "orders",
    default: ""
})

export const orderavgvalue = atom({
    key: "orderAvgValue",
    default: ""
})

export const visitorsCount = atom({
    key: "orderCount",
    default: ""
})