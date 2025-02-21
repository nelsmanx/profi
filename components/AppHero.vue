<script setup></script>

<template>
	<section class="hero">
		<div class="container">
			<div class="hero__inner">
				<div class="hero__inner-block">
					<h1 class="hero__title"><span class="hl">Аутсорсинговое</span> агентство с&nbsp;заботой о&nbsp;вашем бизнесе</h1>
					<p class="hero__desc">Узнайте все преимущества сотрудничества и&nbsp;решите проблемы найма и управления с Profi</p>
					<a class="hero__button button-basic" href="#">Подробнее</a>
				</div>
				<div class="hero__inner-block">
					<img class="hero__image" src="/images/hero.svg" alt="" aria-hidden="true">
					<div class="hero__info">Быстро. Качественно. С Профи.</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.hero {
	margin-bottom: var(--section-space);
}

.hero__inner {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 50px;
}

.hero__inner-block {}

.hero__title {
	margin-bottom: 0.72em;
	font-size: 75px;
	font-weight: 500;
	line-height: 1.33;
	color: var(--secondary-accent-color);
}

.hero__title .hl {
	color: var(--primary-accent-color);
}

.hero__desc {
	margin-bottom: 1.15em;
	font-size: 35px;
	font-weight: 400;
	line-height: 1.4;
	color: var(--basic-color);
}

.hero__button {
	padding: 1em 2.8em;
}

.hero__image {
	max-width: 569px;
	width: 100%;
}

.hero__info {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	margin-top: -6px;
	margin-inline: auto;
	padding: 0.68em 2.2em;
	font-weight: 500;
	font-size: 26px;
	color: #fff;
	border-radius: 14px;
	background-color: var(--primary-accent-color);
	box-shadow: 5px -5px 10px 0 rgba(0, 0, 0, 0.25);
}
</style>