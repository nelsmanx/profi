<script setup>
const prices = [
	{
		service: 'Персонал для&nbsp;производства',
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
					<h3 class="prices__item-service-title" v-html="price.service"></h3>
					<ul class="prices__item-position-list">
						<li v-for="position in price.positions" :key="position.title"
							class="prices__item-position">
							<span class="prices__item-position-title">{{ position.title }}</span>
							<span class="prices__item-position-price">{{ position.price }}</span>
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
	margin-bottom: calc(var(--section-space) + 2px);
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
	display: flex;
	flex-direction: column;
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
	flex: 1 1 auto;
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

.prices__item-position-price {
	font-weight: 500;
	font-size: 27px;
	color: var(--primary-accent-color);
}

.prices__button {
	margin-inline: auto;
	padding: 1em 3.5em;
}

@media (max-width: 1599.98px) {
	.prices__title {
		margin-bottom: var(--section-title-mb);
	}

	.price-text:deep(p) {
		font-size: 28px;
	}

	.prices__list {
		gap: 50px;
		margin-bottom: 50px;
	}

	.benefits__item-title {
		font-size: 20px;
	}

	.benefits__item-desc {
		font-size: 16px;
	}

	.prices__item-service-title {
		font-size: 32px;
	}

	.prices__item-position-list {
		gap: 30px;
		padding-right: 0;
	}

	.prices__item-position-title,
	.prices__item-position-price {
		font-size: 24px;
	}
}

@media (max-width: 1399.98px) {
	.price-text:deep(p) {
		font-size: 26px;
	}

	.prices__item {
		padding: 30px 50px 50px 40px;
		border-radius: 40px;
	}

	.prices__item-service-title {
		margin-bottom: 35px;
		font-size: 28px;
	}

	.prices__item-position-list {
		gap: 25px;
	}

	.prices__item-position-title,
	.prices__item-position-price {
		font-size: 22px;
	}
}

@media (max-width: 1199.98px) {

	.price-text--1,
	.price-text--2 {
		margin-bottom: 40px;
	}

	.price-text:deep(p) {
		font-size: 24px;
	}

	.prices__list {
		margin-bottom: 40px;
	}

	.prices__item-service-title {
		margin-bottom: 30px;
		font-size: 26px;
	}

	.prices__item-position-title {
		max-width: 180px;
	}

	.prices__item-position-title,
	.prices__item-position-price {
		font-size: 20px;
	}
}

@media (max-width: 991.98px) {
	.price-text:deep(p) {
		font-size: 20px;
	}

	.prices__list {
		gap: 30px;
	}

	.prices__item {
		padding: 30px;
		border-radius: 30px;
	}

	.prices__item-service-title {
		font-size: 22px;
	}

	.prices__item-position-list {
		gap: 20px;
	}

	.prices__item-position-title {
		max-width: 140px;
	}

	.prices__item-position-title,
	.prices__item-position-price {
		font-size: 16px;
	}
}

@media (max-width: 767.98px) {
	.prices {
		margin-bottom: calc(var(--section-space));
	}

	.price-text--1,
	.price-text--2 {
		margin-bottom: 30px;
	}

	.price-text:deep(p) {
		font-size: 18px;
	}

	.prices__list {
		grid-template-columns: 100%;
		justify-items: center;
		gap: 20px;
		margin-bottom: 30px;
	}

	.prices__item {
		max-width: 420px;
		width: 100%;
	}

	.prices__item-service-title {
		font-size: 20px;
	}

	.prices__item-position-list {
		gap: 16px;
	}

	.prices__item-position-title {
		max-width: 220px;
	}
}

@media (max-width: 575.98px) {
	.price {
		padding-top: 10px;
	}

	.price-text:deep(p) {
		font-size: 15px;
	}

	.prices__list {
		gap: 10px;
	}

	.prices__item {
		max-width: 340px;
		padding: 20px;
		border-radius: 20px;
	}

	.prices__item-service-title {
		margin-bottom: 31px;
		font-size: 18px;
		text-align: center;
	}

	.prices__item-position-title {
		max-width: 155px;
	}

	.prices__item-position-title,
	.prices__item-position-price {
		font-size: 14px;
	}

	.prices__button {
		padding: 0.8em 2.6em;
	}
}

@media (max-width: 375.98px) {

	.price-text--1,
	.price-text--2 {
		margin-bottom: 20px;
	}

	.price-text:deep(p) {
		font-size: 12px;
	}

	.prices__list {
		margin-bottom: 20px;
	}

	.prices__item {
		max-width: 282px;
		padding: 14px 15px 20px;
	}

	.prices__item-service-title {
		font-size: 15px;
	}

	.prices__item-position-title,
	.prices__item-position-price {
		font-size: 12px;
	}
}
</style>