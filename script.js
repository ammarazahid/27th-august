
// function constructor(personName, personGender, meal){
//     return{
//         name: personName,
//         gender: personGender,
//         eat: function(){
//           console.log(meal);
//         },
//         greet: function(){
//             console.log("I m "+ this.name);
//         }
//     }
// }
// let personA = constructor();


// let idCard1 ={
//     name: "Maria Khursheed",
//     gender: "female",
//     age: 120,
//     interests: ["painting", "coding"],
//     bio: function(){
//         console.log(`${this.name} is ${this.age} years old.They like ${this.interests}`);
//     } ,
//     greet: function(){
//         console.log(`hi, i am ${this.name}`);
//     }
// }

// function constructICdard(stdName, stdGender, stdAge, stdInterests){
//  let obj = {
//         name: stdName,
//         gender: stdGender,
//         age: stdAge,
//         interests: stdInterests,
//         bio: function(){
//             console.log(`${this.name} is ${this.age} years old.They like ${this.interests}`);
//         } ,
//         greet: function(){
//             console.log(`hi, i am ${this.name}`);
//         }
//     }
//  return obj;
// }

// function constructCar(carName, carColor, carPlate, carModel, manufacturingDate){
//     let obj = {
//         name: carName,
//         color: carColor,
//         noPlate: carPlate,
//         greet: function(){
//             console.log(`${this.name} was registered on ${this.manufacturedDate}`);
//         },
//         model: carModel,
//         manufacturedDate : manufacturingDate,
//     }
//     return obj;
// }



// function constructBag(bagName, bagColor, bagFeatures, bagPrice){
//     let obj = {
//         name : bagName,
//         color: bagColor,
//         features: bagFeatures,
//         price: bagPrice,
//         greet: function(){
//             console.log(`${this.name}'s color is ${this.color} and its rs.${this.price}/- only.`)
//         },


//     }
// return obj;
// }

// function wendingMachine(money, numb){
//     let items = [
//         {
//             name: "lays",
//             price: 40
//         },
//         {
//             name: "dairy Milk",
//             price: 150
//         },
//         {
//             name: "kurkure",
//             price: 30
//         },
//         {
//             name: "jam heart",
//             price: 20
//         }
//     ]
//     let requestedItem = items[numb];
//     console.log(requestedItem);
//     if(money > items.price){
//         return requestedItem;
//     }else{
//         return null;
//     }
// }

// function constructMobilePhone(mobileName, mobileColor, mobileModel, mobileFeatures, mobileApps, mobilePrice, mobileCamera, mobileVaranty) {
//     let mobile = {
//         name: mobileName,
//         color: mobileColor,
//         model: mobileModel,
//         features: mobileFeatures,
//         apps: mobileApps,
//         price: mobilePrice,
//         camera: mobileCamera,
//         varanty: mobileVaranty,
//         greet: function(){
//             console.log(`${this.name} is a mobile.Its color is ${this.color}.${this.name}'s model is ${this.model}.`);
//         }
        
//         }
//         return mobile;
// }

// ------Shortcuts------

function MobilePhone(mobileName, mobileColor, mobileModel, mobileFeatures, mobileApps, mobilePrice){
    this.name = mobileName;
    this.color = mobileColor;
    this.model = mobileModel;
    this.features = mobileFeatures;
    this.apps = mobileApps;
    this.price = mobilePrice;
}

MobilePhone.prototype.greet = function(){
            console.log(`${this.name} is a mobile.Its color is ${this.color}.${this.name}'s model is ${this.model}.`);
        }