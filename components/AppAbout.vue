<script setup>
const breakpoint = 1200;
const isTextCollapsed = ref(false);

onMounted(() => {
	isTextCollapsed.value = window.innerWidth < breakpoint ? true : false;
	window.addEventListener('resize', () => isTextCollapsed.value = window.innerWidth < breakpoint ? true : false);
});
</script>

<template>
	<section id="about" class="about">
		<div class="container">
			<div class="about__inner">
				<div class="about__block-map">
					<div class="about__info">Работаем по всей России от&nbsp;Калининграда до&nbsp;Владивостока</div>
					<img class="about__image" src="/public/images/about.svg" alt="" aria-hidden="true">
				</div>
				<div class="about__block-content">
					<h2 class="about__title basic-title">О нас</h2>
					<div v-if="!isTextCollapsed" class="about__desc">
						<p>Profi - компания, основанная экспертами. Уже&nbsp;более 15&nbsp;лет мы&nbsp;предоставляем услуги по&nbsp;аутсорсингу и аутстаффингу персонала по&nbsp;всей России.</p>
						<p>Выбирая Profi, вы выбираете профессионализм на каждом из&nbsp;этапов найма.</p>
					</div>
					<div v-else class="about__desc">
						<p>Profi - компания, основанная экспертами. Уже&nbsp;более 15&nbsp;лет мы&nbsp;предоставляем услуги по&nbsp;аутсорсингу и аутстаффингу персонала по&nbsp;всей России. Выбирая Profi, вы выбираете профессионализм на&nbsp;каждом из&nbsp;этапов найма.</p>
					</div>
				</div>
			</div>
			<ul class="about__list">
				<li class="about__item">Найдем любое количество сотрудников для&nbsp;выполнения&nbsp;задачи</li>
				<li class="about__item">Более 15<br /> лет опыта</li>
				<li class="about__item">Цены на предоставление персонала от&nbsp;160&nbsp;р</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.about {
	margin-bottom: calc(var(--section-space) + 30px);
}

.about__inner {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 75px;
	margin-bottom: 87px;
}

.about__block-map {
	margin-top: 120px;
	position: relative;
}

.about__block-content {}

.about__info {
	position: absolute;
	top: 66px;
	left: 47%;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 530px;
	width: 100%;
	padding: 0.45em 1.2em;
	font-weight: 500;
	font-size: 26px;
	text-align: center;
	color: #fff;
	border-radius: 14px;
	background-color: var(--primary-accent-color);
	box-shadow: 5px -5px 10px 0 rgba(0, 0, 0, 0.25);
	transform: translateX(-50%);
}

.about__image {
	max-width: 788px;
	width: 100%;
}

.about__title {
	margin-bottom: 60px;
	color: var(--primary-accent-color);
}

.about__desc {
	padding-right: 110px;
}

.about__desc:deep(p) {
	font-weight: 400;
	font-size: 30px;
	line-height: 1.4;
	color: var(--basic-color);
}

.about__desc:deep(p:not(:last-child)) {
	margin-bottom: 40px;
}

.about__list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-between;
	gap: 40px;
}

.about__item {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 450px;
	width: 100%;
	height: 200px;
	padding: 25px;
	font-family: var(--secondary-font-family);
	font-size: 30px;
	font-weight: 500;
	text-align: center;
	color: #fff;
	border-radius: 30px;
	box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.25);
}

.about__item:nth-child(even) {
	background: var(--primary-accent-color);
}

.about__item:nth-child(odd) {
	background: var(--secondary-accent-color);
}

.about__item:nth-child(2) {
	font-size: 40px;
}

@media (max-width: 1599.98px) {
	.about__title {
		margin-bottom: var(--section-title-mb);
	}

	.about__image {
		max-width: 720px;
	}

	.about__info {
		top: 50px;
		left: 50%;
	}

	.about__desc {
		padding-right: 0;
	}

	.about__item {
		height: 180px;
		font-size: 26px;
	}

	.about__item:nth-child(2) {
		font-size: 34px;
	}
}

@media (max-width: 1399.98px) {
	.about__inner {
		margin-bottom: 80px;
	}

	.about__image {
		max-width: 580px;
	}

	.about__info {
		top: 40px;
		max-width: 470px;
		font-size: 22px;
	}

	.about__desc:deep(p) {
		font-size: 26px;
	}

	.about__desc:deep(p:not(:last-child)) {
		margin-bottom: 30px;
	}

	.about__list {
		gap: 30px;
	}

	.about__item {
		height: 150px;
		font-size: 22px;
	}

	.about__item:nth-child(2) {
		font-size: 28px;
	}
}

@media (max-width: 1199.98px) {
	.about__inner {
		grid-template-columns: 100%;
		gap: 50px;
	}

	.about__block-map {
		order: 2;
		margin-top: 0;
	}

	.about__image {
		max-width: 730px;
		margin-inline: auto;
	}

	.about__info {
		top: 60px;
		max-width: 500px;
		font-size: 24px;
	}

	.about__desc:deep(p) {
		font-size: 24px;
	}

	.about__desc:deep(p:not(:last-child)) {
		margin-bottom: 24px;
	}

	.about__item {
		height: 140px;
		padding: 15px;
		font-size: 20px;
	}

	.about__item:nth-child(2) {
		font-size: 24px;
	}
}

@media (max-width: 991.98px) {
	.about__inner {
		gap: 40px;
		margin-bottom: 60px;
	}

	.about__desc:deep(p) {
		font-size: 20px;
	}

	.about__desc:deep(p:not(:last-child)) {
		margin-bottom: 20px;
	}

	.about__image {
		max-width: 580px;
	}

	.about__info {
		top: 50px;
		max-width: 380px;
		font-size: 18px;
	}

	.about__list {
		grid-template-columns: auto 1fr;
		gap: 12px 20px;
	}

	.about__item:nth-child(1n) {
		max-width: none;
		width: auto;
		height: auto;
		font-size: 18px;
		box-shadow: none;
	}

	.about__item:deep(br) {
		display: none;
	}

	.about__item:nth-child(1) {
		order: 3;
		grid-column: -1/1;
		background: var(--primary-accent-color);
	}

	.about__item:nth-child(2) {
		order: 1;
		background: var(--secondary-accent-color);
	}

	.about__item:nth-child(3) {
		order: 2;
	}
}

@media (max-width: 767.98px) {
	.about {
		margin-bottom: calc(var(--section-space));
	}

	.about__inner {
		margin-bottom: 50px;
	}

	.about__desc:deep(p) {
		font-size: 18px;
	}

	.about__desc:deep(p:not(:last-child)) {
		margin-bottom: 15px;
	}

	.about__info {
		top: 40px;
		max-width: 340px;
		font-size: 16px;
	}

	.about__item:nth-child(1n) {
		font-size: 13px;
	}
}

@media (max-width: 575.98px) {
	.about__desc:deep(p) {
		font-size: 15px;
	}

	.about__desc:deep(p:not(:last-child)) {
		margin-bottom: 0;
	}

	.about__info {
		top: 30px;
		max-width: 290px;
		font-size: 14px;
	}

	.about__item:nth-child(1n) {
		font-size: 11px;
	}
}

@media (max-width: 479.98px) {
	.about__list {
		gap: 12px;
	}

	.about__item:nth-child(1n) {
		padding: 8px 5px;
		font-size: 10px;
		border-radius: 10px;
	}
}

@media (max-width: 375.98px) {
	.about {
		padding-top: 10px;
	}

	.about__inner {
		gap: 5px;
		margin-bottom: 25px;
	}

	.about__block-content {
		max-width: 317px;
		margin-left: auto;
		padding-left: 10px;
	}

	.about__title {
		margin-bottom: 10px;
	}

	.about__image {
		max-width: 320px;
	}

	.about__info {
		top: 20px;
		max-width: 232px;
		padding: 0.35em 1.2em;
		font-size: 11px;
	}

	.about__desc:deep(p) {
		font-size: 13px;
	}

	.about__list {
		gap: 12px 20px;
	}

	.about__item:nth-child(1n) {
		font-size: 9px;
	}
}
</style>