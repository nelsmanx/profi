<script setup></script>

<template>
	<section class="hero">
		<div class="container">
			<div class="hero__inner">
				<div class="hero__block-content">
					<h1 class="hero__title"><span class="hl">Аутсорсинговое</span> агентство&nbsp;с&nbsp;заботой о&nbsp;вашем&nbsp;бизнесе</h1>
					<p class="hero__desc">Узнайте все преимущества сотрудничества и&nbsp;решите проблемы найма и управления с&nbsp;Profi</p>
					<a class="hero__button basic-button" href="#cta">Подробнее</a>
				</div>
				<div class="hero__block-image">
					<img class="hero__image" src="/images/hero.svg" alt="" aria-hidden="true">
					<div class="hero__info">Быстро.&nbsp;Качественно. С&nbsp;Профи.</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.hero {
	margin-bottom: calc(var(--section-space) + 40px);
}

.hero__inner {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 50px;
}

.hero__block-content {}

.hero__block-image {}

.hero__title {
	margin-bottom: 54px;
	font-size: var(--section-title-fz);
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
	padding: 0.7em 2.2em;
	font-weight: 500;
	font-size: 26px;
	text-align: center;
	color: #fff;
	border-radius: 14px;
	background-color: var(--primary-accent-color);
	box-shadow: 5px -5px 10px 0 rgba(0, 0, 0, 0.25);
}

@media (max-width: 1599.98px) {
	.hero__title {
		margin-bottom: var(--section-title-mb);
	}

	.hero__desc {
		font-size: 32px;
	}

	.hero__info {
		font-size: 24px;
	}

	.hero__image {
		max-width: 550px;
	}
}

@media (max-width: 1599.98px) {
	.hero__desc {
		font-size: 28px;
	}

	.hero__image {
		max-width: 480px;
	}

	.hero__info {
		font-size: 22px;
	}
}

@media (max-width: 1199.98px) {
	.hero__inner {
		gap: 40px;
	}

	.hero__desc {
		font-size: 24px;
	}

	.hero__image {
		max-width: 430px;
	}

	.hero__info {
		font-size: 20px;
	}
}

@media (max-width: 991.98px) {
	.hero__inner {
		grid-template-columns: 100%;
	}

	.hero__title {
		max-width: 600px;
	}

	.hero__desc {
		margin-bottom: 0;
		font-size: 20px;
	}

	.hero__image {
		margin-inline: auto;
	}

	.hero__button {
		display: none;
	}

	.hero__info {
		font-size: 18px;
	}
}

@media (max-width: 767.98px) {
	.hero {
		margin-bottom: calc(var(--section-space));
	}

	.hero__desc {
		font-size: 18px;
	}
}

@media (max-width: 575.98px) {
	.hero__inner {
		gap: 30px;
	}

	.hero__block-content {
		padding-left: 10px;
	}

	.hero__title {
		max-width: 380px;
	}

	.hero__desc {
		font-size: 15px;
	}

	.hero__image {
		max-width: 360px;
	}

	.hero__info {
		font-size: 15px;
	}
}

@media (max-width: 375.98px) {
	.hero:deep(.container) {
		max-width: 340px;
	}

	.hero__inner {
		gap: 25px;
	}

	.hero__desc {
		max-width: 270px;
		font-size: 13px;
	}

	.hero__image {
		max-width: 300px;
	}

	.hero__info {
		max-width: 280px;
		width: 100%;
		margin-top: -1px;
		font-size: 13px;
	}
}
</style>