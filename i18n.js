import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const resources = {
  en: {
    translation: {
      "Напиши что-нибудь...": "Write something down...",
      "Предстоящие поездки": "Upcoming trips",
      "📄 Документы": "📄 Documents",
      "🛫 Регистрация": "🛫 Check-in",
      "🛄 Багаж": "🛄 Baggage",
      "🐾 Перевозка животных": "🐾 Pet Transport",
      "🎒 Утеря багажа": "🎒 Lost Baggage",
      "🚖 Транспорт": "🚖 Transport",
      "🌱 Углеродный след": "🌱 Carbon Footprint",
      Закрыть: "Close",
      documents_text:
        "• Required documents for domestic flights:\nFor flights within Kyrgyzstan, you will need the following documents: ...",
      baggage_text:
        "• Baggage transportation rules:\nIn general, items that may pose a threat to flight safety are prohibited ...",
      checkin_text:
        "• Check-in for the flight:\nPassengers must arrive at the airport for ticket check-in and baggage handling ...",
      pet_transport_text:
        "• General requirements for pet transport:\nAnimals and birds are accepted for air transport ...",
      lost_baggage_text:
        "• What to do if your baggage is lost?\nIf your baggage is lost during a flight, first contact the airline's baggage ...",
      transport_text:
        "• Manas Airport Taxi:\nYou can order a car at the Manas Airport Taxi office on the 1st floor of the terminal ...",
      carbon_footprint_text:
        "• Carbon footprint and flights:\nAir travel significantly contributes to carbon emissions ...",
      "Мой профиль": "My Profile",
      "История Поездок": "Trip History",
      "№ билета": "Ticket Number",
      Вылет: "Departure",
      Прилёт: "Arrival",
      Время: "Time",
      Дата: "Date",
      Выход: "Exit",
      "Стойка регистрации": "Check-in Desk",
      Статус: "Status",
      Ожидается: "Expected",
      "Манас (FRU)": "Manas (FRU)",
      "Стамбул (IST)": "Istanbul (IST)",
      "12 Марта": "March 12",
      "Редактировать профиль": "Edit Profile",
      Выход: "Logout",
      Сохранить: "Save",
      "Код страны": "Country Code",
      "Мобильный телефон": "Mobile Phone",
      Гражданство: "Nationality",
      Страна: "Country",
      Пароль: "Password",
      Профиль: "Profile",
      "История поездок": "Trip History",
      Бишкек: "Bishkek",
      Ош: "Osh",
      "Южная Корея": "South Korea",
      Астана: "Astana",
      Стоимость: "Price",
      Эконом: "Economy",
      Бизнес: "Business",
      "Первый класс": "First Class",
      "Поиск билетов": "Search for Tickets",
      "Найти билеты": "Find Tickets",
      Откуда: "From",
      Куда: "To",
      "Выбрать даты": "Select Dates",
      "пассажир(ов)": "passenger(s)",
      "Выберите класс": "Select Class",
      "Выберите количество пассажиров": "Select Number of Passengers",
      "Рейсов не найдено": "No flights found",
      "Попробуйте изменить параметры поиска.":
        "Try changing your search criteria.",
      От: "From",
      До: "To",
      Стоимость: "Price",
      "12 марта 2025": "March 12, 2025",
      "10 марта 2025": "March 10, 2025",
      "8 марта 2025": "March 8, 2025",
      Бишкек: "Bishkek",
      Ош: "Osh",
      Астана: "Astana",
      "Южная Корея": "South Korea",
      "Код страны": "Country Code",
      "Мобильный телефон": "Mobile Phone",
      Пароль: "Password",
      "Введите новый пароль": "Enter new password",
      Гражданство: "Nationality",
      Страна: "Country",
      Сохранить: "Save",
      Выход: "Logout",
      "Вы уверены, что хотите выйти?": "Are you sure you want to log out?",
      Отмена: "Cancel",
      Выйти: "Logout",
      Сохранение: "Saving",
      "Ваши изменения сохранены!": "Your changes have been saved!",
      "Настройки профиля": "Profile Settings",
      "Редактировать профиль": "Edit Profile",
      Баланс: "Balance",
      Бонусы: "Bonuses",
      Настройки: "Settings",
      "История поездок": "Trip History",
      "Мои билеты": "My Tickets",
      Избранное: "Favorites",
      Поддержка: "Support",
      Выход: "Log Out",
      Откуда: "From",
      Куда: "To",
      "Выбрать даты": "Select Dates",
      "Выберите количество пассажиров": "Select number of passengers",
      "Выберите класс": "Select class",
      Эконом: "Economy",
      Бизнес: "Business",
      "Первый класс": "First Class",
      "Рейсов не найдено": "No flights found",
      "Попробуйте изменить параметры поиска.":
        "Try changing the search parameters.",
      "Найти билеты": "Find Tickets",
      "пассажир(ов)": "passenger(s)",
      Вылет: "Departure",
      Прилет: "Arrival",
      Фильтровать: "Filter",
      Авиалиния: "Airline",
      Рейс: "Flight",
      Город: "City",
      Дата: "Date",
      Статус: "Status",
      "Искать авиакомпанию, город, № рейса...":
        "Search airline, city, flight number...",
      Вовремя: "On Time",
      Задержан: "Delayed",
      Отменен: "Cancelled",
      "Нет рейсов": "No Flights",
      "Не найдено рейсов по вашему запросу.":
        "No flights found for your query.",
      "Результаты найдены": "Results Found",
      "Найдено рейсов": "Flights Found",
      Багаж: "Baggage",
      "Вещи которые можно перевозить в багаже, ручной клади. Вес багажа и ручной клади.":
        "Things that can be carried in luggage, hand luggage. The weight of luggage and hand luggage.",
      Документы: "Documents",
      "Нужные документы для перелетов во внутренних рейсах, визовые  данные для пересечения границ.":
        "Necessary documents for domestic flights, visa data for border crossing.",
      Регистрация: "Registration",
      "Регистрация на рейсы, время для прибытие в аэропорт, расписание когда заканчивается регистрация":
        "Check-in for flights, time for arrival at the airport, schedule when check-in ends",
      Главная: "Home Page",
      Кофейня: "Coffee shop",
      Кафе: "Cafe",
      "Долина вкуса": "Valley of Taste",
      "Поиск кафе...": "Search for cafes...",
      Ювелирка: "Jewelry",
      Сувениры: "Souvenir",
      "Поиск магазинов...": "Search for store",
      Профиль: "Profile",
      "Ваш билет успешно куплен!":
        "Your ticket has been successfully purchased!",
      "Подтверждение покупки билета": "Purchase Ticket",
      "Покупка...": "Purchasing...",
      "Купить билет": "Buy Ticket",
      "Доступные билеты": "Available Tickets",
      Авиалиния: "Airline",
      Рейс: "Flight Code",
      Откуда: "From",
      Куда: "To",
      Дата: "Date",
      Время: "Time",
      "Такси и транспорт": "Taxi and Transport",
      "Такси и Транспорт": "Taxi and Transport",
      "Здесь вы можете заказать такси до аэропорта":
        "Here you can book a taxi to the airport",
      "«Манас»": "Manas",
      "Заказать такси": "Order a Taxi",
      Эконом: "Economy",
      Комфорт: "Comfort",
      Бизнес: "Business",
      "Выберите класс такси": "Select Taxi Class",
      "Применить фильтр": "Apply Filter",
      Настройки: "Settings",
      "Перейти в профиль": "Go to Profile",
      "Настройки уведомлений": "Notification Settings",
      Имя: "Name",
      Фамилия: "Lastname",
      "Электронная почта": "Email",
      "Код страны": "Country Code",
      "Мобильный телефон": "Mobile Phone",
      Пароль: "Password",
      "Повторите пароль": "Repeat Password",
      Зарегистрироваться: "Register",
      "сканирования ~": "Scanning ~",
      "Ваш QR-код": "Your QR code",
      "QR-код для ": "Qr code for ",
      "Показать данные": "Show Data",
      Сохранить: "Save",
      "Редактировать профиль": "Edit Profile",
      "Выйти из аккаунта": "Log out",
      "Разрешение на уведомления не предоставлено.":
        "Notification permission not granted.",
      Подтверждение: "Confirmation",
      Напоминание: "Reminder",
      "У вас осталось 2 часа до рейса!":
        "You have 2 hours left before your flight!",
      "Уведомление успешно запланировано на ":
        "Notification successfully scheduled for ",
      "Все уведомления отключены.": "All notifications are disabled.",
      "Настройка уведомлений": "Notification Settings",
      "Выберите время для напоминания перед рейсом.":
        "Select time for pre-flight reminder.",
      "Выбрать время уведомления": "Select Notification Time",
      "Запланировать напоминание": "Schedule Reminder",
      "Выключить уведомления": "Disable Notifications",
      "Включить уведомления": "Enable Notifications",
      Уведомления: "Notifications",
      включены: "enabled",
      выключены: "disabled",
      "Манас Международный Аэропорт": "Manas International Airport",
      Шереметьево: "Sheremetyevo",
      "Загружаем информацию о билете...": "Loading ticket information...",
      "Мой билет": "My Ticket",
      "Информация о рейсе": "Flight Information",
      "Номер рейса": "Flight Number",
      "Дата и время вылета": "Departure Date and Time",
      "Дата и время прилета": "Arrival Date and Time",
      "Аэропорт вылета": "Departure Airport",
      "Аэропорт прилета": "Arrival Airport",
      Выход: "Gate",
      Место: "Seat",
      "Билет отменен": "Ticket Canceled",
      "Отменить билет": "Cancel Ticket",
      "Этаж 1": "Floor 1",
      "Этаж 2": "Floor 2",
      "Этаж 3": "Floor 3",
      "Вы нажали на": "You pressed on",
      "Фильтр отелей": "Hotel Filter",
      "Введите название, описание или страну":
        "Enter name, description, or country",
      "Применить фильтр": "Apply Filter",
      "Нет доступных отелей": "No available hotels",
      Страна: "Country",
      "Краткое описание": "Short Description",
      "Выбрать даты бронирования": "Select Booking Dates",
      "Дата заезда": "Check-in Date",
      "Дата выезда": "Check-out Date",
      Ошибка: "Error",
      "Пожалуйста, заполните все поля для поиска.":
        "Please fill in all fields for search.",
      "Поиск выполнен": "Search completed",
      "Бронирование отеля": "Hotel Booking",
      "Дата заезда (YYYY-MM-DD)": "Check-in Date (YYYY-MM-DD)",
      "Дата выезда (YYYY-MM-DD)": "Check-out Date (YYYY-MM-DD)",
      "Страна/Город": "Country/City",
      "Найти отели": "Find Hotels",
      "Такси и транспорт": "Taxi and Transport",
      Магазины: "Shops",
      Кафе: "Cafes",
      Информация: "Information",
      "Экологические путешествия": "Eco Travel",
      "Внесите свой вклад для природы, используя меньше вещей в путешествии":
        "Contribute to nature by using fewer things when traveling",
      "Экологические путешествия помогают сократить углеродный след. Используйте меньше пластика, выбирайте экологичные отели, поддерживайте местные инициативы. Например, выбирайте транспорт с меньшими выбросами CO2.":
        "Eco travel helps reduce the carbon footprint. Use less plastic, choose eco-friendly hotels, and support local initiatives. For example, choose transport with lower CO2 emissions.",
      "Скидка 50% на билеты в Ош": "50% Discount on Tickets to Osh",
      "До 25 декабря действует скидка при покупке билетов эконом класса в Ош":
        "Until December 25, get a discount when purchasing economy class tickets to Osh",
      "С 1 по 25 декабря действует скидка 50% на билеты в Ош. Это часть нашей программы поддержки экологичных путешествий. Планируйте поездки заранее и экономьте!":
        "From December 1 to 25, enjoy a 50% discount on tickets to Osh. This is part of our eco travel support program. Plan your trips in advance and save!",
      "Встречайте такси Манас": "Meet Manas Taxi",
      "В аэропорту «Манас» запустился сервис собственного таксопарка":
        "A new taxi service has launched at Manas Airport",
      "В аэропорту «Манас» появился новый сервис для путешественников и жителей города — собственный таксопарк. Теперь, вернувшись из поездки или прибыв в Бишкек, пассажиры смогут воспользоваться комфортными и безопасными поездками прямо из аэропорта.":
        "A new service for travelers and city residents has appeared at Manas Airport — its own taxi fleet. Now, after returning from a trip or arriving in Bishkek, passengers can use comfortable and safe rides directly from the airport.",
      "Добрый день!": "Good afternoon!",
      "Искать услугу": "Search for a service",
      "Аренда машин": "Car Rental",
      "Бронирование отеля": "Hotel Booking",
      "Все услуги": "All Services",
      Автомат: "Automatic",
      "Фильтры применены!": "Filters Applied!",
      Класс: "Class",
      Трансмиссия: "Transmission",
      Цена: "Price",
      "Применить фильтры": "Apply Filters",
      Ошибка: "Error",
      "Пожалуйста, выберите даты.": "Please select dates.",
      "Бронирование подтверждено!": "Booking Confirmed!",
      Отель: "Hotel",
      "Дата заезда (например, 2024-12-01)": "Check-in Date (e.g., 2024-12-01)",
      "Дата выезда (например, 2024-12-05)": "Check-out Date (e.g., 2024-12-05)",
      "Подтвердить бронирование": "Confirm Booking",
      "Пожалуйста, введите имя пользователя и пароль.":
        "Please enter your username and password.",
      "Пользователь зарегистрирован!": "User Registered!",
      "Войти или зарегистрироваться": "Log in or Sign Up",
      "Имя пользователя": "Username",
      "Не зарегистрированы? Создать аккаунт":
        "Not registered? Create an account",
      Такси: "Taxi",
      Еда: "Food",
      Инфо: "Info",
      Все: "All",
      Шопинг: "Shop",
      "Поиск услуг...": "Search for services...",
      Войти: "Login",
      Карта: "Map",
      "Заказ Еды": "Food Delivery",
      Билеты: "Tickets",
      "Доставка еды": "Food Delivery",
      "Закажите вкусную еду прямо сейчас через сервис Glovo!":
        "Order delicious food right now through the Glovo service!",
      "Заказать еду": "Order Food",
      "Не удалось открыть ссылку:": "Failed to open link:",
      QR: "QR",
      Рейсы: "Flights",
      "📄 Документы": "📄 Documents",
      "🛫 Регистрация": "🛫 Check-in",
      "🛄 Багаж": "🛄 Luggage",
      "🐾 Перевозка животных": "🐾 Pet Transport",
      "🎒 Утеря багажа": "🎒 Lost Baggage",
      "🚖 Транспорт": "🚖 Transport",
      "🌱 Углеродный след": "🌱 Carbon Footprint",
      Закрыть: "Close",
      "Камиля Юсуфова": "Kamilya Yusufova",
      "Экологическое путешествие": "Eco-friendly Travel",
      "Создавайте меньше ущерба природе с нашими рекомендациями в экологичном путешествии":
        "Create less harm to nature with our eco-friendly travel recommendations.",
      "Комфорт в аэропорту": "Comfort at the Airport",
      "Сделайте ожидание в аэропорту удобным и приятным с нашими простыми рекомендациями.":
        "Make your airport wait comfortable and pleasant with our simple tips.",
      "Регистрация на рейс": "Flight Check-in",
      "Упростите процесс регистрации и сократите время ожидания с нашими полезными советами!":
        "Make check-in easier and reduce waiting time with our helpful tips!",
      tip_3_title: "Flight Check-in",
      tip_3_desc:
        "Simplify the check-in process and reduce waiting time with our helpful tips!",

      tip_3_content_title: "How to Check In for Your Flight 🛂",
      tip_3_content_str:
        "Simplify the registration process and shorten the waiting time with our helpful tips!",
      tip_3_content_text1:
        "Proper preparation for registration will help to avoid stressful situations and ensure a comfortable start to the trip.",

      tip_3_content_title2: "Recommendations for check-in:",
      tip_3_content_title3: "1. Check online check-in 🖥️",
      tip_3_content_text21: "Many airlines",
      tip_3_content_text3:
        "offer online check-in 24–48 hours before departure.",
      tip_3_content_text4:
        "This allows you to choose a seat and save time at the airport.",
      tip_3_content_text5:
        "After checking in online, save your boarding pass on your phone or print it out.",
      tip_3_content_title4: "2. Prepare your documents 📑",
      tip_3_content_text6:
        "Make sure you have your passport, ticket, and visa or other required documents ready.",
      tip_3_content_text7:
        "If you have an electronic boarding pass, make sure your device is charged and the screen is functional.",
      tip_3_content_title5: "3. Go to the check-in desk ✈️",
      tip_3_content_text8:
        "Check the departure board to find your check-in desk.",
      tip_3_content_text9:
        "Desks usually open 2–3 hours before the flight and close 40–60 minutes before departure.",
      tip_3_content_title6: "4. Drop your baggage and check its ",
      tip_3_content_title9: "weight🧳",
      tip_3_content_text10:
        "Ensure your baggage meets the airline's weight requirements. Overweight may result in extra charges.",
      tip_3_content_text11:
        "Check that the baggage tag contains correct flight information.",
      tip_3_content_title7: "5. Go through passport and security check 🔍",
      tip_3_content_text12:
        "Keep your passport and boarding pass ready. After passport control, proceed to security.",
      tip_3_content_text13:
        "Remove metal items, take out electronics, and follow the liquid rules.",
      tip_3_content_title8: "6. Keep track of time and your gate ⏳",
      tip_3_content_text14:
        "Stay close to the departure area and check the flight info on the screens.",
      tip_3_content_text15:
        "In some airports, gates are far — plan ahead so you don’t miss your flight.",
      tip_3_content_str2:
        "By following these simple steps, you’ll check in smoothly and without any hassle!",
      tip_2_title: "Airport Comfort",
      tip_2_desc:
        "Make your airport wait comfortable and pleasant with our simple recommendations.",

      tip_2_content_title: "Comfortable stay at the airport ✈️",
      tip_2_content_block_title: "Tips for a comfortable wait:",

      tip_2_content_point1: "1. Find a comfortable place to rest 🛋️",
      tip_2_content_point1_li1:
        "Look around the waiting areas and choose a spot where you can relax before boarding.",
      tip_2_content_point1_li2:
        "Some airports offer zones with soft chairs and loungers — perfect for resting.",

      tip_2_content_point2: "2. Use Wi-Fi and workspaces 💻",
      tip_2_content_point2_li1:
        "Most airports offer free Wi-Fi you can use for work or chatting.",
      tip_2_content_point2_li2:
        "If you're traveling for business, look for work zones with power outlets to charge your devices.",

      tip_2_content_point3: "3. Freshen up in rest zones 🚿",
      tip_2_content_point3_li1:
        "Many airports offer shower cabins — a great way to freshen up, especially during long trips.",
      tip_2_content_point3_li2:
        "Some lounges also offer extra services like massage chairs and nap rooms.",

      tip_2_content_point4: "4. Go shopping and explore unique stores 🛍️",
      tip_2_content_point4_li1:
        "Walk through duty-free shops to buy souvenirs or discounted products.",
      tip_2_content_point4_li2:
        "Big airports often have interesting shops with local products, books, electronics, or even art.",

      tip_2_content_point5: "5. Try local cuisine 🍜",
      tip_2_content_point5_li1:
        "Airports often have restaurants serving global dishes. Try local food to make your wait enjoyable.",
      tip_2_content_point5_li2:
        "If you prefer light snacks, you'll also find cafes with sandwiches, salads, and hot drinks.",

      tip_2_content_point6:
        "6. Learn more about the airport and its services 🗺️",
      tip_2_content_point6_li1:
        "Some airports organize tours to learn about their history and architecture.",
      tip_2_content_point6_li2:
        "Information stands usually have terminal maps to help you navigate and plan your time.",

      tip_2_content_final:
        "May your time at the airport be as comfortable and enjoyable as possible!",
      tip_1_title: "Eco-Friendly Travel",
      tip_1_desc:
        "Create less harm to nature with our recommendations for responsible travel",

      tip_1_content_title: "Eco-Friendly Travel 🌍",
      tip_1_content_intro_bold: "Create less harm to nature",
      tip_1_content_intro_text:
        "with our eco travel tips! Traveling can be fun and responsible when we consider its environmental impact. Follow these simple but important steps to minimize your footprint.",

      tip_1_content_block_title: "Tips for sustainable travel:",

      tip_1_point1: "1. Plan transport wisely 🚄✈️",
      tip_1_point1_li1:
        "Choose trains or buses instead of planes when possible — they reduce carbon emissions significantly.",
      tip_1_point1_li2:
        "If flying is necessary, choose direct flights — they save fuel and lower emissions.",

      tip_1_point2: "2. Choose eco-tourism 🏕️",
      tip_1_point2_li1:
        "Visit eco-friendly destinations and support them by using certified ecotourism routes.",
      tip_1_point2_li2:
        "Respect nature and avoid polluting natural areas with trash and waste.",

      tip_1_point3: "3. Support the local economy 🛍️",
      tip_1_point3_li1:
        "Buy goods from local producers and visit small businesses.",
      tip_1_point3_li2:
        "Don't forget souvenirs made in the region you’re visiting.",

      tip_1_point4: "4. Reduce resource consumption 💧💡",
      tip_1_point4_li1:
        "Try to save water and electricity in hotels and other accommodations.",
      tip_1_point4_li2:
        "Use reusable water bottles and avoid single-use plastic packaging.",

      tip_1_point5: "5. Leave places cleaner than you found them 🗑️",
      tip_1_point5_li1:
        "Always pick up your trash and help clean up others’ if you see it in nature.",
      tip_1_point5_li2:
        "Follow the rules of the places you visit to preserve their beauty and environmental integrity.",

      tip_1_final:
        "Support nature — travel responsibly and leave only footprints, not trash!",
      Советы: "Recommendations",
      "Покупка билета": "Ticket Purchase",
      "Поменять язык": "Change language",
      "Чат-бот": "Chatbot",
      Назад: "Back",
      Такси: "Taxi",
    },
  },
  ru: {
    translation: {
      Назад: "Назад",
      Такси: "Такси",
      "Чат-бот": "Чат-бот",
      "Напиши что-нибудь...": "Напиши что-нибудь...",
      "Поменять язык": "Поменять язык",
      "Покупка билета": "Покупка билета",
      Советы: "Советы",
      tip_1_title: "Экологическое путешествие",
      tip_1_desc:
        "Создавайте меньше ущерба природе с нашими рекомендациями в экологичном путешествии",

      tip_1_content_title: "Экологическое путешествие 🌍",
      tip_1_content_intro_bold: "Создавайте меньше ущерба природе",
      tip_1_content_intro_text:
        "с нашими рекомендациями для экологичного путешествия! Путешествия могут быть не только увлекательными, но и ответственными, когда мы учитываем их влияние на окружающую среду. Следуйте простым, но важным шагам, чтобы минимизировать ваш экологический след.",

      tip_1_content_block_title: "Рекомендации для устойчивого путешествия:",

      tip_1_point1: "1. Планируйте транспорт с умом 🚄✈️",
      tip_1_point1_li1:
        "Выбирайте поезд или автобус вместо самолета, если это возможно. Такие виды транспорта значительно сокращают выбросы углерода.",
      tip_1_point1_li2:
        "Если вам необходимо лететь, выбирайте прямые рейсы — они экономят топливо и сокращают выбросы.",

      tip_1_point2: "2. Отдавайте предпочтение экотуризму 🏕️",
      tip_1_point2_li1:
        "Посещайте экологически чистые места и поддерживайте их, используя сертифицированные экотуристические маршруты.",
      tip_1_point2_li2:
        "Помните о природе и избегайте загрязнения природных объектов мусором и отходами.",

      tip_1_point3: "3. Поддерживайте местную экономику 🛍️",
      tip_1_point3_li1:
        "Покупайте товары у местных производителей и посещайте маленькие бизнесы.",
      tip_1_point3_li2:
        "Не забывайте о сувенирах, сделанных в регионе, который вы посещаете.",

      tip_1_point4: "4. Сокращайте потребление ресурсов 💧💡",
      tip_1_point4_li1:
        "Старайтесь экономить воду и электричество в гостиницах и других местах проживания.",
      tip_1_point4_li2:
        "Используйте многоразовые бутылки для воды и избегайте одноразовой пластиковой упаковки.",

      tip_1_point5: "5. Оставляйте места чище, чем они были 🗑️",
      tip_1_point5_li1:
        "Всегда собирайте свой мусор и помогайте убирать за другими, если видите мусор на природе.",
      tip_1_point5_li2:
        "Придерживайтесь правил посещаемых мест, чтобы сохранить их красоту и экологическую целостность.",

      tip_1_final:
        "Поддержите природу — путешествуйте ответственно и оставьте только следы, но не мусор!",

      tip_3_title: "Регистрация на рейс",
      tip_3_desc:
        "Упростите процесс регистрации и сократите время ожидания с нашими полезными советами!",
      tip_3_content_title: "Как пройти регистрацию на рейс 🛂",
      tip_3_content_str:
        "Упростите процесс регистрации и сократите время ожидания с нашими полезными советами!",
      tip_3_content_text1:
        "Правильная подготовка к регистрации поможет избежать стрессовых ситуаций и обеспечить комфортное начало путешествия.",
      tip_3_content_title2: "Рекомендации по прохождению регистрации:",
      tip_3_content_title3: "1. Проверьте онлайн-регистрацию 🖥️",
      tip_3_content_text21: "Многие авиакомпании",
      tip_3_content_text3:
        "предлагают онлайн-регистрацию за 24–48 часов до вылета.",
      tip_3_content_text4:
        "Это позволяет выбрать место и сэкономить время в аэропорту.",
      tip_3_content_text5:
        "После регистрации онлайн сохраните посадочный талон на мобильное устройство или распечатайте его.",
      tip_3_content_title4: "2. Подготовьте документы 📑",
      tip_3_content_text6:
        "Убедитесь, что у вас под рукой паспорт, билет, и, если требуется, виза или другие необходимые документы.",
      tip_3_content_text7:
        "Если у вас есть электронный посадочный талон, проверьте, что устройство заряжено, а экран работает исправно.",
      tip_3_content_title5: "3. Подойдите к стойке регистрации ✈️",
      tip_3_content_text8:
        "Найдите табло вылетов, чтобы определить номер стойки для регистрации вашего рейса.",
      tip_3_content_text9:
        "Обычно стойки открываются за 2–3 часа и закрываются за 40–60 минут до вылета.",
      tip_3_content_title6: "4. Сдайте багаж и проверьте его вес 🧳",
      tip_3_content_title9: "",
      tip_3_content_text10:
        "Убедитесь, что ваш багаж соответствует нормам по весу. Перевес может привести к дополнительным сборам.",
      tip_3_content_text11:
        "Проверьте, что бирка на багаже содержит корректную информацию о вашем рейсе.",
      tip_3_content_title7: "5. Пройдите паспортный и досмотровый контроль 🔍",
      tip_3_content_text12:
        "Держите при себе паспорт и посадочный талон. После паспортного контроля пройдите на досмотр.",
      tip_3_content_text13:
        "Снимите металлические предметы, достаньте электронику и соблюдайте правила по жидкостям.",
      tip_3_content_title8: "6. Следите за временем и воротами на посадку ⏳",
      tip_3_content_text14:
        "Оставайтесь рядом с зоной вылета и проверяйте информацию о рейсе на табло.",
      tip_3_content_text15:
        "В некоторых аэропортах путь до выхода на посадку может быть длинным — рассчитайте время, чтобы не опоздать.",
      tip_3_content_str2:
        "Следуя этим простым шагам, вы сможете пройти регистрацию быстро и без лишних хлопот!",
      tip_2_title: "Комфорт в аэропорту",
      tip_2_desc:
        "Сделайте ожидание в аэропорту удобным и приятным с нашими простыми рекомендациями.",

      tip_2_content_title: "Комфортное пребывание в аэропорту ✈️",
      tip_2_content_block_title: "Рекомендации для комфортного ожидания:",

      tip_2_content_point1: "1. Найдите удобное место для отдыха 🛋️",
      tip_2_content_point1_li1:
        "Осмотрите залы ожидания и выберите место, где будет комфортно провести время до посадки.",
      tip_2_content_point1_li2:
        "В некоторых аэропортах есть зоны с мягкими креслами и лежаками — это отличный выбор для отдыха.",

      tip_2_content_point2: "2. Используйте Wi-Fi и рабочие зоны 💻",
      tip_2_content_point2_li1:
        "Большинство аэропортов предлагают бесплатный Wi-Fi, которым можно воспользоваться для работы или общения.",
      tip_2_content_point2_li2:
        "Если вы путешествуете по делам, поищите рабочие зоны с розетками для подзарядки гаджетов.",

      tip_2_content_point3: "3. Освежитесь в зонах отдыха 🚿",
      tip_2_content_point3_li1:
        "Многие аэропорты предлагают душевые кабины для пассажиров. Это прекрасный способ освежиться, особенно в длительных путешествиях.",
      tip_2_content_point3_li2:
        "Некоторые зоны отдыха предлагают дополнительные удобства, такие как кресла для массажа и комнаты для сна.",

      tip_2_content_point4:
        "4. Займитесь шопингом и найдите интересные магазины 🛍️",
      tip_2_content_point4_li1:
        "Прогуляйтесь по магазинам беспошлинной торговли (Duty Free), чтобы приобрести сувениры или товары со скидками.",
      tip_2_content_point4_li2:
        "В крупных аэропортах часто есть интересные магазины с локальными продуктами, книгами, электроникой и даже искусством.",

      tip_2_content_point5: "5. Попробуйте местную кухню 🍜",
      tip_2_content_point5_li1:
        "Многие аэропорты предлагают рестораны с кухней разных стран мира. Попробуйте блюда местной кухни, чтобы скрасить ожидание.",
      tip_2_content_point5_li2:
        "Для тех, кто предпочитает легкие перекусы, также найдутся кафе с сэндвичами, салатами и горячими напитками.",

      tip_2_content_point6: "6. Узнайте больше об аэропорте и его услугах 🗺️",
      tip_2_content_point6_li1:
        "Некоторые аэропорты организуют экскурсии, где можно узнать об истории аэропорта и его архитектуре.",
      tip_2_content_point6_li2:
        "На информационных стендах можно найти карту терминалов, чтобы лучше ориентироваться и планировать время до посадки.",

      tip_2_content_final:
        "Пусть ваше пребывание в аэропорту будет максимально комфортным и приятным!",

      "Камиля Юсуфова": "Камиля Юсуфова",
      "Предстоящие поездки": "Предстоящие поездки",
      "📄 Документы": "📄 Документы",
      "🛫 Регистрация": "🛫 Регистрация",
      "🛄 Багаж": "🛄 Багаж",
      "🐾 Перевозка животных": "🐾 Перевозка животных",
      "🎒 Утеря багажа": "🎒 Утеря багажа",
      "🚖 Транспорт": "🚖 Транспорт",
      "🌱 Углеродный след": "🌱 Углеродный след",
      Закрыть: "Закрыть",
      documents_text:
        "• Необходимые документы для внутренних рейсов:\n Для перелетов на внутренних рейсах в Кыргызстане вам понадобятся следующие документы:\n 1. Паспорт гражданина Кыргызской Республики или ID-карта.\n 2. Билет на рейс (электронный или бумажный).\n 3. Посадочный талон, который вы получите при регистрации на рейс.\n 4. Документы на багаж (если вы сдаете багаж).\n Правила визового контроля при пересечении кыргызской границы регламентированы соответствующими соглашениями между правительством Кыргызской Республики и другими государствами.\n С перечнем стран, с которыми установлены визовые/безвизовые режимы, можно ознакомиться на официальном сайте Министерства иностранных Дел Кыргызской Республики.\n Для удобства пассажиров в аэропорту 'Манас' круглосуточно работает визовый пункт Департамента Консульской Службы МИД КР. Сотрудниками визового пункта предоставляется бесплатная консультация: \n +996 (550) 770 433 (дежурный консул, круглосуточно)\n Для более полной и достоверной информации о визовых и консульских поддержках в Кыргызской Республике, пожалуйста,\n перейдите по ссылке: http://www.mfa.gov.kg",
      baggage_text:
        "• Правила перевозки багажа:\n В целом, на борту самолета запрещено перевозить предметы, которые могут представлять угрозу для безопасности полета. К таким предметам относятся:\n 1. Оружие, боеприпасы, взрывчатые вещества.\n 2. Легковоспламеняющиеся и горючие жидкости.\n 3. Газы под давлением, токсичные и радиоактивные материалы.\n 4. Острые предметы, такие как ножи, ножницы и шприцы (без медицинского назначения).\n ...",
      checkin_text:
        "• Регистрация на рейс:\n Пассажир должен явиться в аэропорт для регистрации билета и оформления багажа:\n на международные рейсы за 3 часа до вылета рейса\n на рейсы по СНГ и внутри республиканские за 2 часа до вылета рейса\n Регистрация на рейсы авиакомпаний FlyDubai и Тurkish Airlines заканчивается за 1 час до вылета, а на рейсы остальных авиакомпаний – за 40 минут до вылета\n Нахождение в аэропорту:\n Для комфортного и безопасного путешествия следуйте этим рекомендациям при нахождении в аэропорту:\n 1. Приготовьтесь заранее: Проверьте документы, паспорт и билет, чтобы избежать лишних задержек. Имейте при себе ручную кладь и убедитесь, что она соответствует требованиям авиакомпании.\n 2. Приезжайте вовремя: Рекомендуется прибыть в аэропорт за 2-3 часа до вылета, чтобы пройти регистрацию и контроль безопасности без спешки.\n 3. Следуйте правилам безопасности: Следуйте указаниям сотрудников безопасности и предъявляйте документы на проверку. Соблюдайте меры предосторожности и будьте терпеливы.\n 4. Ответственное потребление: Старайтесь не использовать одноразовый пластик, вместо этого возьмите с собой многоразовые органайзеры для хранения вещей. Это поможет уменьшить количество отходов и сохранить окружающую среду.\n 5. Соблюдайте чистоту: Не мусорьте и всегда выбрасывайте отходы в урны. Поддерживайте чистоту в общественных местах и уважайте окружающих.\n 6. Обращение с багажом: Обратите внимание на вес и размер багажа, чтобы избежать дополнительных сборов. Убедитесь, что ваш багаж надежно упакован.\n 7. Питание и напитки: Возьмите с собой многоразовую бутылку для воды, чтобы избегать одноразовых пластиковых бутылок. В аэропортах часто есть питьевые фонтаны, где можно наполнить бутылку.\n 8. Комфорт и расслабление: В ожидании рейса найдите место для отдыха. Можете воспользоваться Wi-Fi, магазинами и ресторанами аэропорта для комфортного времяпрепровождения.\n Следуя этим рекомендациям, вы не только обеспечите себе спокойное и приятное путешествие, но и внесете свой вклад в сохранение окружающей среды. Приятного полета!",
      pet_transport_text:
        "• Общие требования для перевозки:\n Животные и птицы принимаются к воздушной перевозке по предварительному согласованию с авиаперевозчиком.\n Пассажиру необходимо:\n 1. Сообщить авиаперевозчику о количестве перевозимых животных при бронировании билета.\n 2. Предоставить ветеринарный сертификат и другие необходимые документы.\n 3. Разместить животное в крепкий контейнер с доступом воздуха.\n",
      lost_baggage_text:
        "• Что делать в случае утери багажа:\n Если ваш багаж потерялся, первым делом обратитесь к сотрудникам службы розыска багажа авиакомпании (Lost & Found).\n Вам потребуется:\n 1. Предъявить документы и багажный талон.\n 2. Описать содержимое багажа.\n 3. Оставить контактные данные для связи.\n 4. Получить уникальный номер дела для отслеживания статуса поиска.\n",
      transport_text:
        "• Manas Airport Taxi:\n В аэропорту 'Манас' действует служба такси с фиксированными тарифами.\n 1. Из города Бишкек до аэропорта – 800 сомов.\n 2. Из аэропорта в центр Бишкека – 800 сомов, в микрорайоны – 900-1100 сомов.\n 3. Телефон: +(999) 693 000.\n 4. Электронная почта: airporttaximanas@gmail.com.\n ...",
      carbon_footprint_text:
        "• Углеродный след – это показатель количества углекислого газа, выделяемого в атмосферу в результате человеческой деятельности. Авиаперелеты значительно способствуют его увеличению, поскольку самолеты используют большое количество топлива.\n Как снизить углеродный след?\n 1. Выбирайте прямые рейсы без пересадок.\n 2. Минимизируйте вес багажа.\n 3. Используйте электронные билеты вместо бумажных.\n 4. Отдавайте предпочтение общественному транспорту при поездках в аэропорт.\n 5. Рассмотрите возможность компенсации углеродного следа (вкладывайтесь в экологические проекты).\n ...",
      "Мой профиль": "Мой профиль",
      "История Поездок": "История Поездок",
      "№ билета": "№ билета",
      Вылет: "Вылет",
      Прилёт: "Прилёт",
      Время: "Время",
      Дата: "Дата",
      Выход: "Выход",
      "Стойка регистрации": "Стойка регистрации",
      Статус: "Статус",
      Ожидается: "Ожидается",
      "Манас (FRU)": "Манас (FRU)",
      "Стамбул (IST)": "Стамбул (IST)",
      "12 Марта": "12 Марта",
      "Редактировать профиль": "Редактировать профиль",
      Выход: "Выход",
      Сохранить: "Сохранить",
      "Код страны": "Код страны",
      "Мобильный телефон": "Мобильный телефон",
      Гражданство: "Гражданство",
      Страна: "Страна",
      Пароль: "Пароль",
      Профиль: "Профиль",
      "История поездок": "История поездок",
      Бишкек: "Бишкек",
      Ош: "Ош",
      "Южная Корея": "Южная Корея",
      Астана: "Астана",
      Стоимость: "Стоимость",
      Эконом: "Эконом",
      Бизнес: "Бизнес",
      "Первый класс": "Первый класс",
      "Поиск билетов": "Поиск билетов",
      "Найти билеты": "Найти билеты",
      Откуда: "Откуда",
      Куда: "Куда",
      "Выбрать даты": "Выбрать даты",
      "пассажир(ов)": "пассажир(ов)",
      "Выберите класс": "Выберите класс",
      "Выберите количество пассажиров": "Выберите количество пассажиров",
      "Рейсов не найдено": "Рейсов не найдено",
      "Попробуйте изменить параметры поиска.":
        "Попробуйте изменить параметры поиска.",
      От: "From",
      До: "To",
      Стоимость: "Price",
      "12 марта 2025": "March 12, 2025",
      "10 марта 2025": "March 10, 2025",
      "8 марта 2025": "March 8, 2025",
      Бишкек: "Bishkek",
      Ош: "Osh",
      Астана: "Astana",
      "Южная Корея": "South Korea",
      "Код страны": "Код страны",
      "Мобильный телефон": "Мобильный телефон",
      Пароль: "Пароль",
      "Введите новый пароль": "Введите новый пароль",
      Гражданство: "Гражданство",
      Страна: "Страна",
      Сохранить: "Сохранить",
      Выход: "Выйти",
      "Вы уверены, что хотите выйти?": "Вы уверены, что хотите выйти?",
      Отмена: "Отмена",
      Выйти: "Выйти",
      Сохранение: "Сохранение",
      "Ваши изменения сохранены!": "Ваши изменения сохранены!",
      "Настройки профиля": "Настройки профиля",
      "Редактировать профиль": "Редактировать профиль",
      Баланс: "Баланс",
      Бонусы: "Бонусы",
      Настройки: "Настройки",
      "История поездок": "История поездок",
      "Мои билеты": "Мои билеты",
      Избранное: "Избранное",
      Поддержка: "Поддержка",
      Выход: "Выход",
      Откуда: "Откуда",
      Куда: "Куда",
      "Выбрать даты": "Выбрать даты",
      "Выберите количество пассажиров": "Выберите количество пассажиров",
      "Выберите класс": "Выберите класс",
      Эконом: "Эконом",
      Бизнес: "Бизнес",
      "Первый класс": "Первый класс",
      "Рейсов не найдено": "Рейсов не найдено",
      "Попробуйте изменить параметры поиска.":
        "Попробуйте изменить параметры поиска.",
      "Найти билеты": "Найти билеты",
      "пассажир(ов)": "пассажир(ов)",
      Вылет: "Вылет",
      Прилет: "Прилет",
      Фильтровать: "Фильтровать",
      Авиалиния: "Авиалиния",
      Рейс: "Рейс",
      Город: "Город",
      Дата: "Дата",
      Статус: "Статус",
      "Искать авиакомпанию, город, № рейса...":
        "Искать авиакомпанию, город, № рейса...",
      Вовремя: "Вовремя",
      Задержан: "Задержан",
      Отменен: "Отменен",
      "Нет рейсов": "Нет рейсов",
      "Не найдено рейсов по вашему запросу.":
        "Не найдено рейсов по вашему запросу.",
      "Результаты найдены": "Результаты найдены",
      "Найдено рейсов": "Найдено рейсов",
      Рейсы: "Рейсы",
      Багаж: "Багаж",
      "Вещи которые можно перевозить в багаже, ручной клади. Вес багажа и ручной клади.":
        "Вещи которые можно перевозить в багаже, ручной клади. Вес багажа и ручной клади.",
      Документы: "Документы",
      "Нужные документы для перелетов во внутренних рейсах, визовые  данные для пересечения границ.":
        "Нужные документы для перелетов во внутренних рейсах, визовые  данные для пересечения границ.",
      Регистрация: "Регистрация",
      "Регистрация на рейсы, время для прибытие в аэропорт, расписание когда заканчивается регистрация":
        "Регистрация на рейсы, время для прибытие в аэропорт, расписание когда заканчивается регистрация",
      "Искать услугу": "Искать услугу",
      Кофейня: "Кофейня",
      Кафе: "Кафе",
      "Долина вкуса": "Долина вкуса",
      "Поиск кафе...": "Поиск кафе...",
      Ювелирка: "Ювелирка",
      Сувениры: "Сувениры",
      "Поиск магазинов...": "Поиск магазинов...",
      Главная: "Главная",
      QR: "QR",
      Профиль: "Профиль",
      "Ваш билет успешно куплен!": "Ваш билет успешно куплен!",
      "Подтверждение покупки билета": "Подтверждение покупки билета",
      "Покупка...": "Покупка...",
      "Купить билет": "Купить билет",
      "Доступные билеты": "Доступные билеты",
      Авиалиния: "Авиалиния",
      Рейс: "Рейс",
      Откуда: "Откуда",
      Куда: "Куда",
      Дата: "Дата",
      Время: "Время",
      Шопинг: "Шопинг",
      "Такси и Транспорт": "Такси и Транспорт",
      "Такси и транспорт": "Такси и транспорт",
      "Здесь вы можете заказать такси до аэропорта":
        "Здесь вы можете заказать такси до аэропорта",
      "«Манас»": "«Манас»",
      "Заказать такси": "Заказать такси",
      Эконом: "Эконом",
      Комфорт: "Комфорт",
      Бизнес: "Бизнес",
      "Выберите класс такси": "Выберите класс такси",
      "Применить фильтр": "Применить фильтр",
      Настройки: "Настройки",
      "Перейти в профиль": "Перейти в профиль",
      "Настройки уведомлений": "Настройки уведомлений",
      Имя: "Имя",
      Фамилия: "Фамилия",
      "Электронная почта": "Электронная почта",
      "Код страны": "Код страны",
      "Мобильный телефон": "Мобильный телефон",
      Пароль: "Пароль",
      "Повторите пароль": "Повторите пароль",
      Зарегистрироваться: "Зарегистрироваться",
      "сканирования ~": "сканирования ~",
      "Ваш QR-код": "Ваш QR-код",
      "QR-код для  ": "QR-код для ",
      "Показать данные": "Показать данные",
      Сохранить: "Сохранить",
      "Редактировать профиль": "Редактировать профиль",
      "Выйти из аккаунта": "Выйти из аккаунта",
      "Разрешение на уведомления не предоставлено.":
        "Разрешение на уведомления не предоставлено.",
      Подтверждение: "Подтверждение",
      Напоминание: "Напоминание",
      " вас осталось 2 часа до рейса!": "У вас осталось 2 часа до рейса!",
      "Уведомление успешно запланировано на ":
        "Уведомление успешно запланировано на ",
      "Все уведомления отключены.": "Все уведомления отключены.",
      "Настройка уведомлений": "Настройка уведомлений",
      "Выберите время для напоминания перед рейсом.":
        "Выберите время для напоминания перед рейсом.",
      "Выбрать время уведомления": "Выбрать время уведомления",
      "Запланировать напоминание": "Запланировать напоминание",
      "Выключить уведомления": "Выключить уведомления",
      "Включить уведомления": "Включить уведомления",
      Уведомления: "Уведомления",
      включены: "включены",
      выключены: "выключены",
      "Манас Международный Аэропорт": "Манас Международный Аэропорт",
      Шереметьево: "Шереметьево",
      "Загружаем информацию о билете...": "Загружаем информацию о билете...",
      "Мой билет": "Мой билет",
      "Информация о рейсе": "Информация о рейсе",
      "Номер рейса": "Номер рейса",
      "Дата и время вылета": "Дата и время вылета",
      "Дата и время прилета": "Дата и время прилета",
      "Аэропорт вылета": "Аэропорт вылета",
      "Аэропорт прилета": "Аэропорт прилета",
      Выход: "Выход",
      Место: "Место",
      "Билет отменен": "Билет отменен",
      "Отменить билет": "Отменить билет",
      "Этаж 1": "Этаж 1",
      "Этаж 2": "Этаж 2",
      "Этаж 3": "Этаж 3",
      "Вы нажали на": "Вы нажали на",
      "Фильтр отелей": "Фильтр отелей",
      "Введите название, описание или страну":
        "Введите название, описание или страну",
      "Применить фильтр": "Применить фильтр",
      "Нет доступных отелей": "Нет доступных отелей",
      Страна: "Страна",
      "Краткое описание": "Краткое описание",
      "Выбрать даты бронирования": "Выбрать даты бронирования",
      "Дата заезда": "Дата заезда",
      "Дата выезда": "Дата выезда",
      Ошибка: "Ошибка",
      "Пожалуйста, заполните все поля для поиска.":
        "Пожалуйста, заполните все поля для поиска.",
      "Поиск выполнен": "Поиск выполнен",
      "Бронирование отеля": "Бронирование отеля",
      "Дата заезда (YYYY-MM-DD)": "Дата заезда (YYYY-MM-DD)",
      "Дата выезда (YYYY-MM-DD)": "Дата выезда (YYYY-MM-DD)",
      "Страна/Город": "Страна/Город",
      "Найти отели": "Найти отели",
      "Такси и транспорт": "Такси и транспорт",
      Магазины: "Магазины",
      Кафе: "Кафе",
      Информация: "Информация",
      "Экологические путешествия": "Экологические путешествия",
      "Внесите свой вклад для природы, используя меньше вещей в путешествии":
        "Внесите свой вклад для природы, используя меньше вещей в путешествии",
      "Экологические путешествия помогают сократить углеродный след. Используйте меньше пластика, выбирайте экологичные отели, поддерживайте местные инициативы. Например, выбирайте транспорт с меньшими выбросами CO2.":
        "Экологические путешествия помогают сократить углеродный след. Используйте меньше пластика, выбирайте экологичные отели, поддерживайте местные инициативы. Например, выбирайте транспорт с меньшими выбросами CO2.",
      "Скидка 50% на билеты в Ош": "Скидка 50% на билеты в Ош",
      "До 25 декабря действует скидка при покупке билетов эконом класса в Ош":
        "До 25 декабря действует скидка при покупке билетов эконом класса в Ош",
      "С 1 по 25 декабря действует скидка 50% на билеты в Ош. Это часть нашей программы поддержки экологичных путешествий. Планируйте поездки заранее и экономьте!":
        "С 1 по 25 декабря действует скидка 50% на билеты в Ош. Это часть нашей программы поддержки экологичных путешествий. Планируйте поездки заранее и экономьте!",
      "Встречайте такси Манас": "Встречайте такси Манас",
      "В аэропорту «Манас» запустился сервис собственного таксопарка":
        "В аэропорту «Манас» запустился сервис собственного таксопарка",
      "В аэропорту «Манас» появился новый сервис для путешественников и жителей города — собственный таксопарк. Теперь, вернувшись из поездки или прибыв в Бишкек, пассажиры смогут воспользоваться комфортными и безопасными поездками прямо из аэропорта.":
        "В аэропорту «Манас» появился новый сервис для путешественников и жителей города — собственный таксопарк. Теперь, вернувшись из поездки или прибыв в Бишкек, пассажиры смогут воспользоваться комфортными и безопасными поездками прямо из аэропорта.",
      "Добрый день!": "Добрый день!",
      "Искать рейс или услугу": "Искать рейс или услугу",
      "Аренда машин": "Аренда машин",
      "Бронирование отеля": "Бронирование отеля",
      "Все услуги": "Все услуги",
      Автомат: "Автомат",
      "Фильтры применены!": "Фильтры применены!",
      Класс: "Класс",
      Трансмиссия: "Трансмиссия",
      Цена: "Цена",
      "Применить фильтры": "Применить фильтры",
      "Пожалуйста, выберите даты.": "Пожалуйста, выберите даты.",
      "Бронирование подтверждено!": "Бронирование подтверждено!",
      Hotel: "Отель",
      "Дата заезда (например, 2024-12-01)":
        "Дата заезда (например, 2024-12-01)",
      "Дата выезда (например, 2024-12-05)":
        "Дата выезда (например, 2024-12-05)",
      "Подтвердить бронирование": "Подтвердить бронирование",
      "Пожалуйста, введите имя пользователя и пароль.":
        "Пожалуйста, введите имя пользователя и пароль.",
      "Пользователь зарегистрирован!": "Пользователь зарегистрирован!",
      "Войти или зарегистрироваться": "Войти или зарегистрироваться",
      "Имя пользователя": "Имя пользователя",
      "Не зарегистрированы? Создать аккаунт":
        "Не зарегистрированы? Создать аккаунт",
      Такси: "Такси",
      Еда: "Еда",
      Инфо: "Инфо",
      Все: "Все",
      "Поиск услуг...": "Поиск услуг...",
      Войти: "Войти",
      Карта: "Карта",
      "Заказ Еды": "Заказ Еды",
      Билеты: "Билеты",
      "Доставка еды": "Доставка еды",
      "Закажите вкусную еду прямо сейчас через сервис Glovo!":
        "Закажите вкусную еду прямо сейчас через сервис Glovo!",
      "Заказать еду": "Заказать еду",
      "Не удалось открыть ссылку:": "Не удалось открыть ссылку:",
    },
  },
  ky: {
    translation: {
      Главная: "Башкы бет",
      "Мой профиль": "Менин профилим",
      "Редактировать профиль": "Профилди түзөтүү",
      Выход: "Чыгуу",
      "Поиск билетов": "Билет издө",
      "Найти билеты": "Билет табуу",
      Откуда: "Кайдан",
      Куда: "Каякка",
      "Выбрать даты": "Даталарды тандоо",
      "Выберите класс": "Классты тандоо",
      Эконом: "Эконом",
      Бизнес: "Бизнес",
      "Первый класс": "Биринчи класс",
      "Рейсов не найдено": "Каттам табылган жок",
      "Попробуйте изменить параметры поиска.":
        "Издөө параметрлерин өзгөртүп көрүңүз.",
      Профиль: "Профиль",
      Настройки: "Орнотуулар",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru", // язык по умолчанию
  fallbackLng: "en",
  compatibilityJSON: "v3", // важно для React Native
  interpolation: {
    escapeValue: false, // не экранируем текст, иначе будут баги
  },
});

// Загружаем язык из AsyncStorage при запуске
AsyncStorage.getItem("language").then((lang) => {
  if (lang) {
    i18n.changeLanguage(lang);
  }
});

export default i18n;
