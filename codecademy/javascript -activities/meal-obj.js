const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      deserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(app) {
      this._courses.appetizers.push(app);
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(main) {
      this._courses.mains.push(main);
    },
    get deserts() {
      return this._courses.deserts;
    },
    set deserts(des) {
      this._courses.deserts.push(des);
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        deserts: this.deserts
      }
    },
    addDishToCourse: function(courseName, dishName, dishPrice) {
      let obj = {
        dishName,
        dishPrice
      };
      this._courses[courseName].push(obj);
    },
    getRandomDishFromCourse: function(courseName){
      let dishes = this._courses[courseName];
      let rand = Math.floor(Math.random() * dishes.length);
      return dishes[rand];
    },
    getRandomMeal: function() {
      let app = this.getRandomDishFromCourse("appetizers");
      let main= this.getRandomDishFromCourse("mains");
      let des = this.getRandomDishFromCourse("deserts");
      let total = app.dishPrice + main.dishPrice + des.dishPrice;
      return `Your meal is ${app.dishName}, ${main.dishName}, and ${des.dishName}, and costs ${total}.`;
    }
  
  
  
  }
  
  
  menu.addDishToCourse("appetizers", "wings", 5);
  menu.addDishToCourse("appetizers", "dogs", 7);
  menu.addDishToCourse("appetizers", "beets", 3);
  console.log(menu.appetizers)
  menu.addDishToCourse("mains","chix", 13);
  menu.addDishToCourse("mains","steak", 24);
  menu.addDishToCourse("mains","salad", 10);
  console.log(menu.mains)
  menu.addDishToCourse("deserts","pie", 4);
  menu.addDishToCourse("deserts","cake", 6);
  menu.addDishToCourse("deserts","ice cream", 7);
  console.log(menu.deserts)
  const meal = menu.getRandomMeal();
  console.log(meal)