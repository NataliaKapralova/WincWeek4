// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//       console.log(this.brand);
//     }
//   };
   
//   const getCarBrand = car.getBrand;
   
//   getCarBrand();   // output = undefined 

//   const car = {
//     brand: "Nissan",
//     getBrand: function(){
//       console.log(this.brand);
//     }
//   };
  
//   const getCarBrand = car.getBrand;
  
//   console.log(getCarBrand);   // output: Function 

const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  const getCarBrand = car.getBrand.bind(car);
  getCarBrand();   // output: function 