/* Russian LANGUAGE 
 ================================================== */
if (typeof VMM != "undefined") {
	VMM.Language = {
		lang:"ru",
		api:{
			wikipedia:"ru"
		},
		date:{
			month:["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
			month_abbr:["Янв.", "Фев.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
			day:["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
			day_abbr:["Вск.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."]
		},
		dateformats:{
			year:"yyyy",
			month_short:"mmm",
			month:"mmmm yyyy",
			full_short:"mmm d",
			full:"mmmm d',' yyyy",
			time_short: "h:MM:ss TT",
			time_no_seconds_short:"h:MM TT",
			time_no_seconds_small_date:"h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long:"mmm d',' yyyy 'at' hh:MM TT",
			full_long_small_date:"hh:MM TT'<br/><small>mmm d',' yyyy'</small>'"
		},
		messages:{
			loading_timeline:"Загрузка... ",
			return_to_title:"Вернуться к заголовку",
			expand_timeline:"Увеличить",
			contract_timeline:"Уменьшить",
			wikipedia:"Из Wikipedia",
			loading_content:"Загрузка контента",
			loading: "Загрузка"
		}
	}
};