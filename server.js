const dotenv = require("dotenv");
const connectDB = require("./helpers/connectDB");
const userModel = require("./schema");

dotenv.config();

//connecting DB
connectDB();

//Create and Save a Record of a Model:
const user = new userModel({
  name: "Isaac",
  age: 25,
  email: "isaac123@isaac.com",
  favoriteFoods: ["Meat", "Pizza", "Seafood", "Pasta"],
});

user
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

//Create Many Records with model.create()

async function createPeople(arrayOfPeople) {
  try {
    const users = await userModel.create(arrayOfPeople);
    console.log(users);
  } catch (error) {
    console.error(erroe);
  }
}

createPeople([
  {
    name: "Alden",
    age: 20,
    email: "alden20@gmail.com",
    favoriteFoods: ["Oatmeal", "Hamburger", "Rice", "Fruits"],
  },
  {
    name: "Calypso",
    age: 21,
    email: "calypso21@gmail.com",
    favoriteFoods: ["Tacos", "Ramen", "Poutine"],
  },
]);

// //Use model.find() to Search Your Database

async function findPerson(nameObj) {
  try {
    const users = await userModel.find(nameObj);
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

findPerson({ name: "Isaac" });

//Use model.findOne() to Return a Single Matching Document from Your Database

async function findOnePerson(food) {
  try {
    const users = await userModel.findOne({ favoriteFoods: { $in: food } });
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

findOnePerson("Rice");

//Use model.findById() to Search Your Database By _id

async function findByID(id) {
  try {
    const users = await userModel.findById(id);
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

findByID("624b3ba0ce1ebc7de638f9a6");

//Perform Classic Updates by Running Find, Edit, then Save

async function findEditSave(id) {
  try {
    const users = await userModel.findById(id);
    users.favoriteFoods.push("Hamburger");
    await users.save();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

findEditSave("624b2e7c5dd65ee330b6b870");

//Perform New Updates on a Document Using model.findOneAndUpdate()

async function findOneAndUpdate(Name) {
  try {
    const users = await userModel.findOneAndUpdate(
      { name: Name },
      { age: 20 },
      { new: true }
    );

    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

findOneAndUpdate("Isaac");

//Delete One Document Using model.findByIdAndRemove

async function findAndRemove(id) {
  try {
    const users = await userModel.findByIdAndRemove(id);

    console.log(users);
  } catch (error) {
    console.log(error);
  }
}
findAndRemove("624b2e7c5dd65ee330b6b870");

//MongoDB and Mongoose - Delete Many Documents with model.remove()

async function deleteDocuments(Name, done) {
  try {
    const users = await userModel.remove({ name: Name });

    done(users);
  } catch (error) {
    console.log(error);
  }
}

deleteDocuments("Alden", (ko) => {
  console.log(ko);
});

//Chain Search Query Helpers to Narrow Search Results

async function searchQuery(done) {
  try {
    const users = await userModel
      .find({ favoriteFoods: { $in: "burritos" } })
      .sort({ name: 1 })
      .limit(2)
      .select({ age: 0 })
      .exec(done);
  } catch (error) {
    console.log(error);
  }
}

searchQuery((err, data) => {
  console.log(data);
});
