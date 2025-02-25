<script setup>
const active = ref('seek-job');
</script>

<template>
	<section id="cta" class="cta">
		<div class="container">
			<div class="cta__inner">
				<div class="cta__block">
					<ul class="cta__tab-list">
						<li class="cta__tab-item cta__tab-item--seek-employee"
							:class="{ 'is-active': active === 'seek-employee' }"
							@click="active = 'seek-employee'">Ищу сотрудников</li>
						<li class="cta__tab-item cta__tab-item--seek-job"
							:class="{ 'is-active': active === 'seek-job' }"
							@click="active = 'seek-job'">Ищу работу</li>
					</ul>
					<h2 class="cta__title">Заказать <span class="hl">звонок</span></h2>
					<p class="cta__desc">Оставляйте заявку - свяжемся в ближайшее время и ответим на&nbsp;все вопросы</p>
				</div>
				<div class="cta__block">
					<form @submit.prevent class="cta__form" :class="`cta__form--${active}`">
						<input class="cta__form-input" type="text" name="name" placeholder="Имя" required>
						<input class="cta__form-input" type="email" name="email" placeholder="E-mail">
						<input v-inputmask-tel class="cta__form-input" type="tel" name="phone" placeholder="+ 7 999 999 99 99" required>
						<button class="cta__form-button">Отправить</button>
						<p class="cta__personal-info">Нажимая “Отправить”, вы соглашаетесь с&nbsp;Политикой обработки персональных данных</p>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.cta {
	margin-bottom: calc(var(--section-space) + 20px);
	padding-top: 22px;
}

.cta__inner {
	display: grid;
	grid-template-columns: 1fr auto;
	padding: 83px 106px;
	background-color: #edecec;
	border-radius: 60px;
}

.cta__block {}

.cta__tab-list {
	display: inline-grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 26px;
	margin-top: 15px;
	margin-bottom: 70px;
}

.cta__tab-item {
	/* width: 306px; */
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0 18px;
	font-size: 30px;
	font-weight: 500;
	text-align: center;
	color: #fff;
	border-radius: 100px;
	border-width: 3px;
	border-style: solid;
	cursor: pointer;
}

.cta__tab-item.is-active {
	color: #fff;
}

.cta__tab-item--seek-employee {
	color: var(--primary-accent-color);
	border-color: var(--primary-accent-color);
}

.cta__tab-item--seek-employee.is-active {
	background-color: var(--primary-accent-color);
}

.cta__tab-item--seek-job {
	color: var(--secondary-accent-color);
	border-color: var(--secondary-accent-color);
}

.cta__tab-item--seek-job.is-active {
	background-color: var(--secondary-accent-color);
}

.cta__title {
	margin-bottom: 25px;
	font-size: 65px;
	font-weight: 500;
	color: var(--primary-accent-color);
}

.cta__title .hl {
	color: var(--secondary-accent-color);
}

.cta__desc {
	max-width: 570px;
	font-size: 35px;
	font-weight: 500;
	color: var(--basic-color);
}

.cta__form {
	--input-height: 78px;
	--input-border-radius: 35px;
	display: grid;
	gap: 27px;
	max-width: 520px;
	width: 100%;
}

.cta__form-input {
	width: 100%;
	height: var(--input-height);
	padding: 0 20px;
	font-size: 25px;
	font-weight: 500;
	text-align: center;
	color: var(--basic-color);
	border: none;
	background-color: #fff;
	border-radius: var(--input-border-radius);
}

.cta__form--seek-employee .cta__form-input:focus-visible {
	outline: 2px solid var(--primary-accent-color);
}

.cta__form--seek-job .cta__form-input:focus-visible {
	outline: 2px solid var(--secondary-accent-color);
}

.cta__form-input::placeholder {
	text-align: center;
	color: rgba(0 0 0 / 0.4);
}

.cta__form-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: var(--input-height);
	padding: 10px;
	font-size: 35px;
	font-weight: 500;
	color: #fff;
	border: none;
	border-radius: var(--input-border-radius);
	cursor: pointer;
}

.cta__form--seek-employee .cta__form-button {
	background-color: var(--primary-accent-color);
}

.cta__form--seek-job .cta__form-button {
	background-color: var(--secondary-accent-color);
}

.cta__personal-info {
	font-size: 20px;
	font-weight: 500;
	text-align: center;
	color: var(--basic-color);
}
</style>