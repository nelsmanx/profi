<script setup>
const prices = [
	{
		service: 'Персонал для производства',
		positions: [
			{
				title: 'Работник конвейера',
				price: 'от 185 р/час'
			},
			{
				title: 'Маркировщик',
				price: 'от 185 р/час'
			},
			{
				title: 'Упаковщик',
				price: 'от 185 р/час'
			},
			{
				title: 'Приемосдатчик',
				price: 'от 180 р/час'
			},
		],
	},
	{
		service: 'Линейный персонал',
		positions: [
			{
				title: 'Продавец',
				price: 'от 185 р/час'
			},
			{
				title: 'Кассир',
				price: 'от 200 р/час'
			},
			{
				title: 'Работник торгового зала',
				price: 'от 170 р/час'
			},
			{
				title: 'Комплектовщик',
				price: 'от 205 р/час'
			},
		],
	},
	{
		service: 'Персонал ресторана',
		positions: [
			{
				title: 'Официант',
				price: 'от 190 р/час'
			},
			{
				title: 'Повар',
				price: 'от 240 р/час'
			},
			{
				title: 'Посудомойщица',
				price: 'от 180 р/час'
			},
			{
				title: 'Кондитер',
				price: 'от 230 р/час'
			},
		],
	},
	{
		service: 'Складской персонал',
		positions: [
			{
				title: 'Разнорабочий',
				price: 'от 180 р/час'
			},
			{
				title: 'Кладовщик',
				price: 'от 200 р/час'
			},
			{
				title: 'Грузчик',
				price: 'от 185 р/час'
			},
			{
				title: 'Карщик',
				price: 'от 230 р/час'
			},
		],
	},
];
</script>

<template>
	<section id="prices" class="prices">
		<div class="container">
			<h2 class="prices__title basic-title">Цены</h2>
			<div class="price-text price-text--1">
				<p>У нас одни из самых выгодных цен на услуги аутсорсинга персонала. Точная стоимость рассчитывается индивидуально после согласования всех моментов, которые могут повлиять на&nbsp;цену. Цены указаны без учета НДС.</p>
			</div>
			<ul class="prices__list">
				<li v-for="price in prices" :key="price.service" class="prices__item">
					<h3 class="prices__item-service-title">{{ price.service }}</h3>
					<ul class="prices__item-position-list">
						<li v-for="position in price.positions" :key="position.title"
							class="prices__item-position">
							<span class="prices__item-position-title">{{ position.title }}</span>
							<span class="prices__item-position-value">{{ position.price }}</span>
						</li>
					</ul>
				</li>
			</ul>
			<div class="price-text price-text--2">
				<p>Не нашли нужного специалиста? Это не весь перечень кадров, доступных к найму. За подробной информацией вы можете обратиться по кнопке ниже.</p>
			</div>
			<a class="prices__button basic-button" href="#cta">Получить консультацию</a>
		</div>
	</section>
</template>

<style scoped>
.prices {
	margin-bottom: var(--section-space);
	padding-top: 43px;
}

.prices__title {
	margin-bottom: 36px;
	color: var(--primary-accent-color);
}

.price-text--1 {
	margin-bottom: 50px;
}

.price-text--2 {
	margin-bottom: 43px;
}

.price-text:deep(p) {
	font-size: 30px;
	font-weight: 500;
	color: var(--basic-color);
}

.prices__list {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 47px 100px;
	margin-bottom: 50px;
}

.prices__item {
	padding: 31px 60px 63px 52px;
	background-color: #edecec;
	border-radius: 50px;
}

.prices__item-service-title {
	margin-bottom: 46px;
	font-family: "Geometria", sans-serif;
	font-size: 40px;
	font-weight: 700;
	color: var(--secondary-accent-color);
}

.prices__item-position-list {
	display: grid;
	gap: 36px;
	padding-right: 7px;
}

.prices__item-position {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.prices__item-position-title {
	margin-right: 20px;
	font-size: 27px;
	font-weight: 500;
	color: var(--basic-color);
}

.prices__item-position-value {
	font-weight: 500;
	font-size: 27px;
	color: var(--primary-accent-color);
}

.prices__button {
	margin-inline: auto;
	padding: 1em 3.5em;
}
</style>