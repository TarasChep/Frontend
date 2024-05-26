function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
// Функція для збереження результатів опитування в LocalStorage
function saveSurveyResult(result) {
    let surveyResults = JSON.parse(localStorage.getItem('surveyResults')) || [];
    surveyResults.push(result);
    localStorage.setItem('surveyResults', JSON.stringify(surveyResults));
}

// Отримати дані з форми та зберегти їх в LocalStorage після відправлення форми
document.getElementById('flowerOrderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупинити дефолтну поведінку форми

    // Отримати дані з форми
    const occasion = document.getElementById('occasion').value;
    const flowers = Array.from(document.querySelectorAll('input[name="flowers"]:checked')).map(checkbox => checkbox.value);
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const deliveryTime = document.getElementById('deliveryTime').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const additionalRequests = document.getElementById('additionalRequests').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const deliveryInstructions = document.getElementById('deliveryInstructions').value;
    const specialRequests = document.getElementById('specialRequests').value;
    const recipientName = document.getElementById('recipientName').value;
    const recipientPhone = document.getElementById('recipientPhone').value;

    // Створити об'єкт з результатами опитування
    const surveyResult = {
        occasion,
        flowers,
        size,
        color,
        deliveryDate,
        deliveryTime,
        deliveryAddress,
        additionalRequests,
        paymentMethod,
        deliveryInstructions,
        specialRequests,
        recipientName,
        recipientPhone
    };

    // Зберегти результати опитування в LocalStorage
    saveSurveyResult(surveyResult);


    // Очистити форму після збереження
    this.reset();

    alert('Ваші дані успішно збережено!');
});
// Функція для отримання результатів опитування з LocalStorage

const surveyResults = getSurveyResults();
console.log(surveyResults);


// Вивести результати опитування у консоль


