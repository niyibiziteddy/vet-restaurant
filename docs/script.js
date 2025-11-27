 /* 
        ============================================
        ADD YOUR MENU ITEM IMAGES HERE:
        For each menu item, add an 'image' property with your image filename
        Example: image: 'isombe.jpg'
        Put all your food images in the same folder as this HTML file
        ============================================
        */
        const menuData = [
            {category: 'traditional', name: 'Isombe with boiled plantain & beans', desc: 'Cassava leaves cooked with peanut sauce, served with boiled plantain & beans', price: '9,000', note: 'Local staple dish', image: './images/isombe.jpg'},
            {category: 'traditional', name: 'Akabenz (fried pork) with steamed rice & salad', desc: 'Seasoned grilled pork served with rice and garden salad', price: '11,000', note: 'Popular local meat dish', image: 'akabenz.jpg'},
            {category: 'traditional', name: 'Brochette (mixed meat skewers)', desc: 'Beef, goat or chicken skewers, with chips & kachumbali salad', price: '10,000', note: 'Choice of meat available', image: 'brochette.jpg'},
            {category: 'traditional', name: 'Nyama choma (roasted goat)', desc: 'Grilled goat leg served with banana, plantain or rice & salad', price: '14,000', note: 'Best served with kachumbali', image: 'nyama-choma.jpg'},
            {category: 'traditional', name: 'Ubugali / Uburo (cassava / maize paste)', desc: 'Starchy side dish to accompany stews or sauces', price: '3,000', note: 'Add-on staple side', image: 'ubugali.webp'},
            {category: 'international', name: 'Grilled chicken breast with mushroom sauce', desc: 'Served with mashed potatoes, steamed vegetables', price: '13,500', image: 'grilled-chicken.jpg'},
            {category: 'international', name: 'Beef fillet (steak) with pepper sauce', desc: 'Tender beef fillet, sautéed vegetables & choice of side', price: '17,000', image: 'beef-steak.jpg'},
            {category: 'international', name: 'Pan-fried tilapia fillet', desc: 'Served with garlic butter, rice or potatoes, seasonal vegetables', price: '14,500', image: 'tilapia.jpg'},
            {category: 'international', name: 'Spaghetti Bolognese', desc: 'Al dente spaghetti with rich beef tomato sauce', price: '11,500', image: 'spaghetti.jpg'},
            {category: 'international', name: 'Vegetarian lasagna', desc: 'Layered pasta with vegetables, cheese and tomato sauce', price: '12,000', note: 'For vegetarian guests', image: 'lasagna.jpg'},
            {category: 'international', name: 'Caesar salad (with optional chicken)', desc: 'Romaine lettuce, parmesan, croutons & Caesar dressing', price: '7,500', note: 'Add chicken +2,500 RWF', image: 'caesar-salad.jpg'},
            {category: 'international', name: 'Mushroom & pumpkin soup', desc: 'Creamy soup served with focaccia or bread', price: '6,500', image: 'soup.jpg'},
            {category: 'international', name: 'Margherita pizza (medium)', desc: 'Tomato, mozzarella, basil', price: '9,500', image: 'margherita-pizza.jpg'},
            {category: 'international', name: 'Pepperoni pizza (medium)', desc: 'Tomato, mozzarella, pepperoni', price: '12,000', image: 'pepperoni-pizza.jpg'},
            {category: 'international', name: 'Pizza (large, assorted toppings)', desc: 'Large pizza with choice of toppings', price: '13,000', image: 'large-pizza.jpg'},
            {category: 'international', name: 'Chocolate cake (slice)', desc: 'Homemade chocolate cake with cream', price: '4,000', note: 'Dessert', image: 'chocolate-cake.jpg'},
            {category: 'international', name: 'Ice cream (3 scoops)', desc: 'Selection of flavors', price: '5,600', image: 'ice-cream.jpg'},
            {category: 'beverages', name: 'Fresh orange juice (glass)', desc: 'Freshly squeezed orange juice', price: '10,000', image: 'orange-juice.jpg'},
            {category: 'beverages', name: 'Fresh pineapple juice (glass)', desc: 'Fresh pineapple juice', price: '6,000', image: 'pineapple-juice.jpg'},
            {category: 'beverages', name: 'Soft drink (330 ml)', desc: 'Coca-Cola, Sprite, Fanta etc.', price: '1,500', image: 'soft-drinks.jpg'},
            {category: 'beverages', name: 'Virunga / Inyange bottled water (50 cl)', desc: 'Sparkling or still water', price: '1,000', image: 'water.jpg'},
            {category: 'beverages', name: 'Espresso (single)', desc: 'Strong coffee shot', price: '3,000', image: 'espresso.jpg'},
            {category: 'beverages', name: 'Cappuccino / Café Latte', desc: 'Milk coffee beverage', price: '4,000', image: 'cappuccino.jpg'}
        ];

        function displayMenu(items) {
            const container = document.getElementById('menuItems');
            container.innerHTML = items.map(item => `
                <div class="menu-item">
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22400%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2218%22 fill=%22%23999%22%3EImage not found%3C/text%3E%3C/svg%3E'">
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                        <div class="price">${item.price} RWF</div>
                        ${item.note ? `<p class="note">${item.note}</p>` : ''}
                    </div>
                </div>
            `).join('');
        }
// 
        function filterMenu(category) {
            const buttons = document.querySelectorAll('.category-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const filtered = category === 'all' ? menuData : menuData.filter(item => item.category === category);
            displayMenu(filtered);
        }

        displayMenu(menuData);