function getMealTimetable(day, meal) {
    var timetableData = {
        Monday: {
            Breakfast: ["Idli, Medu Vada/ Masala Vada", "Sambar, Peanut Chutney", "Banana/Fruit Salad", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Salad", "Roti", "Rajma Gharwala", "Jeera Rice/Rice", "Aloo Gobi Sabji", "Rice", " Pepper Rasam", "More Kuzhambu", "Potato Poriyal"],
            Snacks: ["Noodles/Kachori", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Aloo Bhindi Masala", "Egg Gravy", "Dal Fry", "Rice", "Rasam", "Pickle"]
        },
        Tuesday: {
            Breakfast: ["Puri", "Aloo Chana Dal Sabji", "Banana/Fruit Salad", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Salad", "Roti", "Aloo Matar Masala", "Ghee/ Plain Rice", "Dal Tadka", "Sambar", "Ginger Rasam", "Veg Poriyal", "Green Kootu", "Curd"],
            Snacks: ["Pani Puri", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Kuska", "Dry Veg 65", "Masala Dal", "Rasam", "Fruit Custard/ Halwa", "Pickle"]
        },
        Wednesday: {
            Breakfast: ["Onion Veg Uthapam", "Sambar, Chutney", "Boiled Egg,Sprouts", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Salad", "Roti", "Aloo Palak", "Rice", "Mix Dal", "Puli Kuzhambu", "Garlic Rasam", "Boondi/ Payasam", "Pickle"],
            Snacks: ["Samosa/ Sandwich", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Rice", "Plain Dal", "Chicken Masala", "Paneer Masala", "Rasam,Pickle"]
        },
        Thursday: {
            Breakfast: ["Poha", "Jalebi", "Banana/ Fruit Salad", "Pongal-Sambar", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Butter Milk", "Roti", "Veg Kofta", "Tomato Dal", "Veg Pulao", "Plain Rice", "Beetroot Poriyal", "Tomato Rasam", "Sambhar", "Pickle"],
            Snacks: ["Sweet Corn Salad/ Burger", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Seasonal Veg", "Egg Masala", "Rice", "Dal Fry", "Rasam,Pickle", "Soup"]
        },
        Friday: {
            Breakfast: ["Rava Upma, Semiya Upma", "Chutney", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Veg Biryani", "Brinjal Masala", "Roti", "Masoor Dal", "Plain Rice/ Sabar Rice", "Raw Banana Poryial", "Rasam", "Boondi Raiyta"],
            Snacks: ["Pav Bhaji", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Rice", "Dal Tadka", "Butter Chicken", "Kadai Paneer", "Rasam,Pickle"]
        },
        Saturday: {
            Breakfast: ["Bhatura", "Chole", "Banana/Fruit Salad", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Fryums", "Roti", "Channa Dal", "Vegetable Khichdi/Lemon Rice", "Aloo Cabbage Masala", "Veg Karakuzambu", "Rasam", "Lemon Juice"],
            Snacks: ["Cutlet", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Fried Rice", "Sev Tamatar", "Veg Manchurian", "Rice", "Rasam, Pickle", "Soup"]
        },
        Sunday: {
            Breakfast: ["Masala Dosa", "Sambhar, Chutney", "Fruit Salad/ Banana", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: [ "Onion Cucumber Raitha", "Roti", "Chicken Biryani", "Veg Biryani","Masala Dal/ Matar Paneer"],
            Snacks: ["Dhokla/Dahi Vada", "Sauce",  "Milk-Tea-Coffee"],
            Dinner: ["Chapathi", "Rice", "Veg Kolhapuri", "Masoor Dal/ Soya Masala", "Rasam", "Gulab Jamun/Gajar Halwa"]
        }

    };

    return timetableData[day][meal] || [];
}

function updateMealTimetable() {
    var selectedDay = document.getElementById("day").value;
    var selectedMeal = document.getElementById("meal").value;
    var mealItems = getMealTimetable(selectedDay, selectedMeal);

    var mealTimetableDiv = document.getElementById("mealTimetable");
    mealTimetableDiv.innerHTML = "<strong>" + selectedDay + " - " + selectedMeal + ":</strong>";

    if (mealItems && mealItems.length > 0) {
        var itemList = "<ul>";
        mealItems.forEach(function (item) {
            itemList += "<li>" + item + "</li>";
        });
        itemList += "</ul>";
        mealTimetableDiv.innerHTML += itemList;
    } else {
        mealTimetableDiv.innerHTML += "No items added yet, will be updated soon!";
    }
}

// sets default day
document.addEventListener('DOMContentLoaded', function() {
    setDefaultMeal();
});
//conditions for default day/time
function setDefaultMeal() {
    var currentDate = new Date();
    var currentDay = currentDate.toLocaleString('en-us', { weekday: 'long' });
    var currentHour = currentDate.getHours();
    var defaultDay = "";
    var defaultMeal = "";

    switch (currentDay) {
        case 'Monday':
            defaultDay = 'Monday';
            break;
        case 'Tuesday':
            defaultDay = 'Tuesday';
            break;
        case 'Wednesday':
            defaultDay = 'Wednesday';
            break;
        case 'Thursday':
            defaultDay = 'Thursday';
            break;
        case 'Friday':
            defaultDay = 'Friday';
            break;
        case 'Saturday':
            defaultDay = 'Saturday';
            break;
        case 'Sunday':
            defaultDay = 'Sunday';
            break;    
        default:
            defaultDay = 'Monday'; 
    }

    if ((currentHour >= 0 && currentHour < 10) || (currentHour >= 22 && currentHour < 24)) {
        defaultMeal = "Breakfast";
    } else if (currentHour >= 10 && currentHour < 15) {
        defaultMeal = "Lunch";
    } else if (currentHour >= 15 && currentHour < 18) {
        defaultMeal = "Snacks";
    } else if (currentHour >= 18 && currentHour < 22) {
        defaultMeal = "Dinner";
    }

    document.getElementById("day").value = defaultDay;
    document.getElementById("meal").value = defaultMeal;
    updateMealTimetable();
}

/*
        day: {
            Breakfast: ["", "Bread-Butter-Jam","Milk-Coffee-Tea"],
            Lunch: ["",],
            Snacks: ["","Milk-Tea-Coffee"],
            Dinner: ["",]
        }
*/
