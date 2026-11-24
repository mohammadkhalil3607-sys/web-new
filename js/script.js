const page = new URLSearchParams(window.location.search);

if (page.get("view") === "all-supplements") {
    document.getElementById("nutrition-main-view").hidden = true;
    document.getElementById("all-supplements-view").hidden = false;
}


document.getElementById("calculate-bmi").addEventListener("click", function() {

    let weight = Number(document.getElementById("bmi-weight").value);
    let height = Number(document.getElementById("bmi-height").value);

    if (weight <= 0 || height <= 0) {
        alert("Please enter a valid weight and height.");
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Healthy Weight";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obesity";
    }

    document.getElementById("bmi-result").textContent = bmi.toFixed(1);
    document.getElementById("bmi-category").textContent = category;

});



document.getElementById("calculate-calories").addEventListener("click", function() {

    let age = Number(document.getElementById("calorie-age").value);
    let sex = document.getElementById("calorie-sex").value;
    let activity = Number(document.getElementById("activity-level").value);
    let weight = Number(document.getElementById("calorie-weight").value);
    let height = Number(document.getElementById("calorie-height").value);

    if (age < 18 || age > 110 || !Number.isInteger(age) ||
        sex === "" || activity === 0 ||
        weight <= 0 || height <= 0) {

        alert("Please enter valid information.");
        return;
    }

    let bmr;

    if (sex === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories = Math.round(bmr * activity);

    document.getElementById("calorie-result").textContent = calories + " kcal";
    document.getElementById("maintenance-result").textContent = "Maintain Weight";

});
