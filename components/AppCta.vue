<script setup>
const active = ref('seek-job');
</script>

<template>
	<section id="cta" class="cta">
		<div class="container">
			<div class="cta__inner">
				<div class="cta__content">
					<ul class="cta__tab-list">
						<li class="cta__tab-item cta__tab-item--seek-employee"
							:class="{ 'is-active': active === 'seek-employee' }"
							@click="active = 'seek-employee'">Ищу сотрудников</li>
						<li class="cta__tab-item cta__tab-item--seek-job"
							:class="{ 'is-active': active === 'seek-job' }"
							@click="active = 'seek-job'">Ищу работу</li>
					</ul>
					<h2 class="cta__title">Заказать <span class="hl">звонок</span></h2>
					<p class="cta__desc">Оставляйте заявку - свяжемся в&nbsp;ближайшее время и&nbsp;ответим на&nbsp;все&nbsp;вопросы</p>
				</div>
				<form @submit.prevent class="cta__form" :class="`cta__form--${active}`">
					<input class="cta__form-input" type="text" name="name" placeholder="Имя" required>
					<input class="cta__form-input" type="email" name="email" placeholder="E-mail">
					<input v-inputmask-tel class="cta__form-input" type="tel" name="phone" placeholder="+ 7 999 999 99 99" required>
					<button class="cta__form-button">Отправить</button>
					<p class="cta__personal-info">Нажимая “Отправить”, вы соглашаетесь с&nbsp;Политикой обработки персональных данных</p>
				</form>
			</div>
		</div>
	</section>
</template>

<style scoped>
.cta {
	margin-bottom: var(--section-space);
}

.cta__inner {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 60px;
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
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0 18px;
	font-size: 30px;
	font-weight: 500;
	text-align: center;
	white-space: nowrap;
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

@media (max-width: 1599.98px) {
	.cta__inner {
		padding: 80px 100px;
	}

	.cta__title {
		font-size: 60px;
		margin-bottom: var(--section-title-mb);
	}

	.cta__desc {
		max-width: 450px;
		font-size: 28px;
	}

	.cta__tab-item {
		font-size: 24px;
	}

	.cta__form {
		gap: 25px;
		max-width: 470px;
	}

	.cta__form-button {
		font-size: 30px;
	}
}

@media (max-width: 1399.98px) {
	.cta__inner {
		padding: 60px 80px;
	}

	.cta__tab-list {
		gap: 20px;
		margin-top: 12px;
		margin-bottom: 50px;
	}

	.cta__tab-item {
		height: 50px;
		font-size: 20px;
	}

	.cta__title {
		font-size: var(--section-title-fz);
	}

	.cta__desc {
		font-size: 26px;
	}

	.cta__form {
		--input-height: 70px;
		gap: 20px;
		max-width: 430px;
	}

	.cta__form-button {
		font-size: 26px;
	}

	.cta__personal-info {
		font-size: 18px;
	}
}

@media (max-width: 1199.98px) {
	.cta__inner {
		gap: 50px;
		padding: 40px 50px;
	}

	.cta__tab-item {
		font-size: 18px;
	}

	.cta__desc {
		font-size: 24px;
	}

	.cta__tab-list {
		margin-top: 10px;
		margin-bottom: 40px;
	}

	.cta__form {
		--input-height: 65px;
		max-width: 360px;
	}

	.cta__form-input {
		font-size: 22px;
	}

	.cta__form-button {
		font-size: 22px;
	}
}

@media (max-width: 991.98px) {
	.cta__inner {
		grid-template-columns: 100%;
		gap: 40px;
		max-width: 460px;
		margin-inline: auto;
		padding: 50px 40px;
		border-radius: 50px;
	}

	.cta__content {
		display: grid;
		justify-content: start;
	}

	.cta__tab-list {
		order: 3;
		gap: 15px;
		margin: 0;
	}

	.cta__tab-item {
		padding: 0 15px;
		font-size: 16px;
		border-width: 2px;
	}

	.cta__desc {
		margin-bottom: 40px;
		font-size: 20px;
	}

	.cta__form {
		--input-height: 60px;
		max-width: none;
	}

	.cta__form-input {
		font-size: 20px;
	}

	.cta__form-button {
		font-size: 20px;
	}

	.cta__personal-info {
		font-size: 16px;
	}
}

@media (max-width: 767.98px) {
	.cta__inner {
		max-width: 420px;
		padding: 40px 30px;
		border-radius: 40px;
	}

	.cta__desc {
		font-size: 18px;
	}

	.cta__tab-item {
		height: 45px;
		font-size: 14px;
	}

	.cta__form-input {
		font-size: 18px;
	}

	.cta__form-button {
		font-size: 18px;
	}

	.cta__personal-info {
		font-size: 14px;
	}
}

@media (max-width: 575.98px) {
	.cta {
		margin-bottom: calc(var(--section-space) / 2);
	}

	.cta__inner {
		gap: 30px;
		max-width: 340px;
		padding: 30px 20px;
		border-radius: 30px;
	}

	.cta__desc {
		margin-bottom: 30px;
		font-size: 15px;
	}

	.cta__tab-list {
		gap: 10px;
	}

	.cta__tab-item {
		height: 40px;
		font-size: 12px;
	}

	.cta__form {
		--input-height: 50px;
		gap: 14px;
	}

	.cta__form-input {
		font-size: 15px;
	}

	.cta__form-button {
		font-size: 15px;
	}

	.cta__personal-info {
		font-size: 12px;
	}
}

@media (max-width: 375.98px) {
	.cta__inner {
		max-width: 282px;
		padding: 30px 15px;
	}

	.cta__title {
		margin-bottom: 8px;
		font-size: 18px;
	}

	.cta__desc {
		font-size: 12px;
	}

	.cta__tab-item {
		height: 35px;
		padding: 0 10px;
		font-size: 11px;
	}

	.cta__form {
		--input-height: 41px;
	}

	.cta__form-input {
		font-size: 11px;
	}

	.cta__form-button {
		font-size: 11px;
	}

	.cta__personal-info {
		font-size: 10px;
	}
}
</style>