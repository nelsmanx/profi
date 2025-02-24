<script setup>
const services = [
	{
		title: 'Линейный персонал',
		image: '/images/services/1.svg',
		desc: 'Массовый подбор: от курьера до&nbsp;оператора колл-центра. Большой спектр сфер.',
	},
	{
		title: 'Вахтовый персонал',
		image: '/images/services/2.svg',
		desc: 'Набираем бригады для вахт на ваши объекты',
	},
	{
		title: 'Узкопрофильные специалисты',
		image: '/images/services/3.svg',
		desc: 'Просто отправьте нам ваш запрос по форме ниже - и мы найдем нужного специалиста.',
	},
]

</script>

<template>
	<section id="services" class="services">
		<div class="container">
			<h2 class="services__title basic-title">Поможем найти <br /><span class="hl">персонал под любые цели</span>
			</h2>
			<ul class="services__list">
				<li v-for="service in services" :key="service.title"
					class="services__item">
					<h3 class="services__item-title">{{ service.title }}</h3>
					<img class="services__item-image" :src="service.image" :alt="service.title">
					<p class="services__item-desc" v-html="service.desc"></p>
					<a class="services__item-button basic-button" href="#cta">Получить консультацию</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.services {
	margin-bottom: var(--section-space);
	padding-top: 50px;
}

.services__title {
	margin-bottom: 45px;
	color: var(--secondary-accent-color);
}

.services__title .hl {
	color: var(--primary-accent-color);
}

.services__list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-between;
	gap: 30px;
}

.services__item {
	display: grid;
	grid-template-rows: auto auto 1fr auto;
	align-items: start;
	justify-items: center;
	max-width: 450px;
	width: 100%;
	padding: 24px 50px 42px;
	background-color: #edecec;
	border-radius: 60px;
}

.services__item-title {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 80px;
	margin-bottom: 23px;
	font-family: var(--secondary-font-family);
	font-size: 32px;
	font-weight: 500;
	text-align: center;
	color: #000;
}

.services__item-image {
	max-width: 284px;
	width: 100%;
	margin-bottom: 39px;
}

.services__item-desc {
	margin-bottom: 30px;
	font-size: 22px;
	font-weight: 400;
	line-height: 1.3;
	text-align: center;
	color: var(--basic-color);
}

.services__item-button {
	max-width: 320px;
	width: 100%;
}
</style>