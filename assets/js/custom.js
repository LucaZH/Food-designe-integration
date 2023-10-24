const foodItems = document.querySelectorAll('.food');
const menuImage = document.querySelector('.menu');

foodItems.forEach(foodItem => {
    foodItem.addEventListener('click', function() {
        const foodName = this.querySelector('p').textContent;
        const imageMap = {
            'Miso Ramen': 'Miso Ramen.png',
            'Nasi Goreng Spesial': 'Nasi Goreng Spesial.png',
            'Ra Risol': 'Risol.png',
            'Sop Buntut': 'Sop Buntut.png'
        };
        const imageName = imageMap[foodName];

        let primaryColor = '#756966';
        let secondaryColor = '#9B6354';
        let foodTitle = 'Miso';
        let secondTitle = 'RAMEN';
        imageName.src = './assets/img/Miso Ramen.png'

        if (foodName === 'Sop Buntut') {
            primaryColor = '#C7B1B0';
            secondaryColor = '#CD8885';
            foodTitle = 'Sop';
            secondTitle = 'Buntut';
        } else if (foodName === 'Nasi Goreng Spesial') {
            primaryColor = '#EBB063';
            secondaryColor = '#D78213';
            foodTitle = 'Nasi';
            secondTitle = 'Goreng';
        } else if (foodName === 'Ra Risol') {
            primaryColor = '#92A865';
            secondaryColor = '#7CB40B';
            foodTitle = 'Ra';
            secondTitle = 'Risol';
        }

        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        
        menuImage.src = `./assets/img/${imageName}`;
        menuImage.alt = foodName;

        const activeFoodItem = document.querySelector('.food-active');
        activeFoodItem.classList.remove('food-active');
        this.classList.add('food-active', 'fadeInOutAnimation');

        menuImage.classList.add('menu-opacity-transition');

        setTimeout(() => {
            this.classList.remove('fadeInOutAnimation');
            menuImage.classList.remove('menu-opacity-transition');
        }, 500);

        document.querySelector('#food-title').innerHTML = foodTitle;
        document.querySelector('#second-name').innerHTML = secondTitle;
    });
});
