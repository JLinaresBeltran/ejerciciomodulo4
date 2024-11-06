const breakfastMenu = ['Huevos', 'Pan', 'Quesito', 'Arepa', 'Bueñuelo'];
const mainCourseMenu = ['Arroz', 'Pollo', 'Carne', 'Verduras', 'Papa'];
const dessertMenu = ['Flan de Maracumango', 'Tres leches','Helado', 'Melocoton', 'Tiramisu'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

        let mainCourseItem = '';
        mainCourseMenu.forEach((item, index) => {
        mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
        document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

        let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;