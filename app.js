let students = [
    "Абуэленин Зиад Мохамед Набиль Мохамед",
    "Авхадиев Альмир Илдарович",
    "Богомолов Степан Александрович",
    "Бородин Марк Сергеевич",
    "Гарифуллин Инсаф Ринатович",
    "Гросс Катарина Виктория",
    "Гунько Леонид Юрьевич",
    "Давоян Масис Сисович",
    "Даминов Тимур Рашидович",
    "Живолуп Григорий Олегович",
    "Зырянова Анна Константиновна",
    "Караев Кирилл Дмитриевич",
    "Ким Дмитрий Вячеславович",
    "Коняшин Георгий Дмитриевич",
    "Михельсон Анастасия Дмитриевна",
    "Муравьев Степан Дмитриевич",
    "Набиуллин Эмиль Айдарович",
    "Рамазанов Ильнур Аликович",
    "Сагдеев Тимур Ринатович",
    "Садыков Хасан Альбертович",
    "Тиняков Валерий Константинович",
    "Фадеев Кирилл Владимирович",
    "Фарафонов Стефан Александрович",
    "Фархетдинова Айгуль Рустамовна",
    "Хаертдинов Ранис Ильнарович",
    "Хотулев Иван Викторович",
    "Шайхутдинова Энже Тагировна",
    "Шумаков Михаил Юрьевич",
    "Щекин Арсений Николаевич",
];
let professors = [
    "Шилов",
    "Икечи",
    "Марчук",
    "Баскаков",
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const makeRandom = () => {
    let list = [
        [],
        [],
        [],
        [],
        [],
    ]

    let count = 0;

    shuffleArray(students);
    shuffleArray(professors);

    for (let i = 0; i < students.length; i ++) {
        list[count].push(students[i]);
        count = (count + 1) % professors.length;
    }

    for(let i = 0; i < 4; i++) {
        document.getElementsByClassName('professor_name')[i].innerText = professors[i];
        for (s of list[i]) {
            let item = document.createElement('li');
            item.innerText = s;
            document.getElementsByClassName('student_list')[i].appendChild(item);
        }
    }
}

document.getElementById('generate').onclick = makeRandom;