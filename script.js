function getMealTimetable(day, meal) {
    var timetableData = {
        Monday: {
            Breakfast: ["Idli, Medu Vada", "Sambar, Peanut Chutney", "Fruit", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Salad", "Roti", "Rajma Gharwala", "Jeera Rice/Rice", "Chilli Potato", "Lauki More", "Rasam"],
            Snacks: ["Dal Vada/Kachori", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Seasonal Veg", "Egg Burji Masala", "Dal Fry", "Rice", "Rasam", "Pickle"]
        },
        Tuesday: {
            Breakfast: ["Masala Paratha/Puri", "Veg Kurma", "Banana", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Salad", "Roti/Poori", "Channa Masala", "Ghee Rice", "Dal Tadka", "Sambar", "Rasam", "Veg Poriyal", "Curd"],
            Snacks: ["Onion Aloo Bhajji", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Kuska", "Sev Tamatar", "Masala Dal", "Rasam", "Halwa"]
        },
        Wednesday: {
            Breakfast: ["Onion/Masala Uthapam", "Sambar, Karam Chutney", "Fruit", "Boiled Egg,Sprouts", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Salad", "Roti", "Kadai Veg", "Rice", "Mix Dal", "V.Poriyal", "Rasam", "Butter Milk", "Boondi/Kheer"],
            Snacks: ["Pani Poori/Bread Pakoda", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Rice", "Plain Dal", "Chicken", "Paneer", "Rasam,Pickle"]
        },
        Thursday: {
            Breakfast: ["Indori Poha,Pongal", "Jalebi", "Banana", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Salad", "Roti", "Veg Kofta", "Tomato Dal", "Veg Pulao", "Plain Rice", "Bhindi Fry", "Rasam", "Curd"],
            Snacks: ["Sweet Corn Salad/Channa Masala", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Dum Aloo", "Egg Masala", "Rice", "Dal Fry", "Rasam,Pickle"]
        },
        Friday: {
            Breakfast: ["Pav Bhaji", "Chutney", "Fruit", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Fryums", "Veg Biryani", "Jeera Aloo", "Roti", "Dalcha", "Plain Rice", "Raw Banana Poryial", "Rasam", "Boondi Raiyta"],
            Snacks: ["Samosa, Sauce", "Milk-Tea-Coffee"],
            Dinner: ["Roti", "Rice", "Dal Tadka", "Chicken", "Paneer", "Rasam,Pickle"]
        },
        Saturday: {
            Breakfast: ["Bhatura/Poori", "Chole/Aloo Matar", "Banana", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Salad", "Roti", "Channa Dal", "Khichdi/Coconut Rice", "Began Fry", "Sambhar", "Rasam", "Butter Milk"],
            Snacks: ["Patties/Cream Roll/Bhel Puri/Spring Roll", "Milk-Tea-Coffee"],
            Dinner: ["Chapati", "Fried Rice/Noodles", "Aloo Badi", "Veg Manchurian Gravy", "Rice", "Rasam"]
        },
        Sunday: {
            Breakfast: ["Masala Dosa", "Sambhar, Chutney", "Fruit", "Bread-Butter-Jam", "Milk-Coffee-Tea"],
            Lunch: ["Fryums", "Onion Cucumber Raitha", "Roti", "Hyd Chicken Biryani", "Hyd Veg Biryani", "Masala Dal", "Matar Paneer"],
            Snacks: ["Dhokla/Pasta, Sauce", "Milk-Tea-Coffee"],
            Dinner: ["Chapathi", "Rice", "Veg Korma", "Dal Tadka", "Rasam", "Gulab Jamun"]
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

    if (currentHour >= 0 && currentHour < 10) {
        defaultMeal = "Breakfast";
    } else if (currentHour >= 10 && currentHour < 15) {
        defaultMeal = "Lunch";
    } else if (currentHour >= 15 && currentHour < 16) {
        defaultMeal = "Snacks";
    } else if (currentHour >= 17 && currentHour < 24) {
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
