<script setup>
const stages = [
	{
		title: 'Брифинг',
		desc: 'Обсуждаем проект и его реализацию: когда и какой персонал вам нужен, в&nbsp;каком количестве и на какой срок',
	},
	{
		title: 'Заключение договора',
		desc: 'Все условия указываются в договоре, который затем подписывается в двух экземплярах обеими сторонами',
	},
	{
		title: 'Подбор персонала',
		desc: 'Приступаем к выполнению обязательств и подбираем сотрудников согласно заявке',
	},

	{
		title: 'Проверка кандидатов',
		desc: 'Каждый сотрудник, претендующий на ту или иную вакансию в вашей компании, проходит проверку на профпригодность',
	},
	{
		title: 'Выход сотрудников',
		desc: 'После того, как все сотрудники найдены и проверены, они приступают к работе в вашей организации',
	},
];
</script>

<template>
	<section class="stages">
		<div class="container">
			<h2 class="stages__title basic-title">Этапы работы</h2>
			<ul class="stages__list">
				<li v-for="stage in stages" :key="stage.title"
					class="stages__item">
					<span class="stages__item-counter"></span>
					<h2 class="stages__item-title">{{ stage.title }}</h2>
					<p class="stages__item-desc" v-html="stage.desc"></p>
				</li>
				<li class="stages__cta">
					<p class="stages__cta-title">Остались вопросы?</p>
					<a class="stages__cta-button basic-button" href="#cta">Получить консультацию</a>
				</li>
			</ul>
		</div>
	</section>

</template>

<style scoped>
.stages {
	margin-bottom: var(--section-space);
	padding-top: 77px;
}

.stages__title {
	margin-bottom: 72px;
	color: var(--primary-accent-color);
}

.stages__list {
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-content: space-between;
	gap: 53px;
	counter-reset: list;
}

.stages__item {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-areas:
		"counter title"
		"desc desc";
	justify-content: start;
	align-items: start;
	gap: 43px 75px;
	max-width: 626px;
	width: 100%;
	padding: 20px 50px 45px 55px;
	background-color: #edecec;
	border-radius: 50px;
}

.stages__item-counter {
	align-self: center;
}

.stages__item-counter::before {
	grid-area: counter;
	counter-increment: list;
	content: counter(list, decimal-leading-zero);
	font-family: var(--secondary-font-family);
	font-size: 75px;
	font-weight: 500;
	color: rgba(85 124 202 / 0.5);
}

.stages__item-title {
	grid-area: title;
	align-self: center;
	font-family: var(--secondary-font-family);
	font-size: 40px;
	font-weight: 500;
	color: var(--primary-accent-color);
}

.stages__item-desc {
	grid-area: desc;
	font-size: 25px;
	font-weight: 500;
	color: #000;
}

.stages__cta {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.stages__cta-title {
	margin-bottom: 35px;
	font-size: 35px;
	font-weight: 500;
	text-align: center;
	color: #000;
}

.stages__cta-button {
	padding: 1em 3.5em;
}
</style>