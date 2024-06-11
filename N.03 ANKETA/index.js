const name = prompt("Введите ваше имя");
if (name != false) {
	const surname = prompt("Введите вашу фамилию");
	if (surname != false) {
		const patronymic = prompt("Введите ваше отчество");
		const age = parseInt(prompt("Введите ваш возраст в годах"));
		if (isNaN(age) == false) {
			const sex_confirm = confirm("Ваш пол - женский?");
			const sex = sex_confirm == true ? "женский" : "мужской";
			const pension_check =
				(sex_confirm == true && age >= 55) ||
				(sex_confirm == false && age >= 60)
					? "да"
					: "нет";

			alert(`Ваше ФИО: ${name} ${surname} ${patronymic}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${age * 365}
Через 5 лет вам будет: ${age + 5}
Ваш пол: ${sex}
Вы на пенсии: ${pension_check}`);
		} else console.error(`Введено некорректное число`);
	} else console.error(`Это обязательное поле ${surname}`);
} else console.error(`Это обязательное поле ${name}`);
