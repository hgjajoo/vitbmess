import React, { useState, useEffect } from "react";

const MainContent = ({ menuFile, messName }) => {
  const [menuData, setMenuData] = useState({});
  const [day, setDay] = useState("");
  const [meal, setMeal] = useState("");
  const [mealItems, setMealItems] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`/src/data/${menuFile}`);
        if (!response.ok) throw new Error("Failed to fetch menu data");
        const data = await response.json();
        setMenuData(data);
        const currentDate = new Date();
        const currentDay = currentDate.toLocaleString("en-IN", {
          weekday: "long",
        });
        const currentHour = currentDate.getHours();
        const defaultMeal =
          currentHour >= 0 && currentHour < 10
            ? "Breakfast"
            : currentHour >= 10 && currentHour < 15
            ? "Lunch"
            : currentHour >= 15 && currentHour < 17
            ? "Snacks"
            : "Dinner";

        setDay(currentDay);
        setMeal(defaultMeal);
        updateMealTimetable(currentDay, defaultMeal, data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, [menuFile]);

  const updateMealTimetable = (selectedDay, selectedMeal, data) => {
    setDay(selectedDay);
    setMeal(selectedMeal);
    if (!data[selectedDay]) {
      setMealItems([]);
      return;
    }

    const items = data[selectedDay][selectedMeal] || [];
    setMealItems(items);
  };

  useEffect(() => {
    if (menuData && day && meal) {
      updateMealTimetable(day, meal, menuData);
    }
  }, [menuData, day, meal]);

  const getFormattedDate = () => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString("en-IN", { month: "long" });
    const year = currentDate.toLocaleString("en-IN", { year: "2-digit" });
    return `${month} '${year}`;
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-zinc-900 text-zinc-200">
      <div className="text-center text-white text-3xl font-bold mb-4">
        {messName} Mess Timetable
      </div>
      <div className="text-center text-zinc-400 text-2xl font-semibold mb-6">
        {getFormattedDate()}
      </div>
      <label htmlFor="day" className="block text-zinc-400 mb-2">
        Select Day:
      </label>
      <select
        id="day"
        value={day}
        onChange={(e) => updateMealTimetable(e.target.value, meal, menuData)}
        className="w-full p-3 mb-4 bg-zinc-800 text-white rounded border border-zinc-700"
      >
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      <label htmlFor="meal" className="block text-zinc-400 mb-2">
        Select Meal:
      </label>
      <select
        id="meal"
        value={meal}
        onChange={(e) => updateMealTimetable(day, e.target.value, menuData)}
        className="w-full p-3 mb-4 bg-zinc-800 text-white rounded border border-zinc-700"
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Snacks">Snacks</option>
        <option value="Dinner">Dinner</option>
      </select>

      <div
        id="mealTimetable"
        className="mt-4 p-4 bg-zinc-800 border border-zinc-700 rounded-lg"
      >
        <strong className="text-zinc-400">
          {day} - {meal}:
        </strong>
        {mealItems.length > 0 ? (
          <ul className="list-disc list-inside mt-2">
            {mealItems.map((item, index) => (
              <li key={index} className="text-zinc-200">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-zinc-400">
            No items added yet, will be updated soon!
          </p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
