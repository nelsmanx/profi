<template>
	<section id="about" class="about">
		<div class="container">
			<div class="about__inner">
				<div class="about__group">
					<div class="about__group-block-1">
						<div class="about__info">Работаем по всей России от&nbsp;Калининграда до&nbsp;Владивостока</div>
						<img class="about__image" src="/public/images/about.svg" alt="" aria-hidden="true">
					</div>
					<div class="about__group-block-2">
						<h2 class="about__title basic-title">О нас</h2>
						<div class="about__desc">
							<p>Profi - компания, основанная экспертами. Уже более 15 лет мы&nbsp;предоставляем услуги по&nbsp;аутсорсингу и аутстаффингу персонала по всей России.</p>
							<p>Выбирая Profi, вы выбираете профессионализм на каждом из&nbsp;этапов найма.</p>
						</div>
					</div>
				</div>
				<ul class="about__list">
					<li class="about__item">Найдем любое количество сотрудников для выполнения задачи</li>
					<li class="about__item about__item--big-text">Более 15<br /> лет опыта</li>
					<li class="about__item">Цены на предоставление персонала от&nbsp;160&nbsp;р</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style scoped>
.about {
	margin-bottom: var(--section-space);
	padding-top: 60px;
}

.about__inner {}

.about__title {
	margin-bottom: 60px;
	color: var(--primary-accent-color);
}

.about__group {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 75px;
	margin-bottom: 87px;
}

.about__group-block-1 {
	margin-top: 120px;
	position: relative;
}

.about__group-block-2 {}

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
	width: 788px;
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
	margin-bottom: 1.35em;
}

.about__list {
	display: grid;
	grid-template-columns: repeat(3, 450px);
	gap: 69px;
}

.about__item {
	display: flex;
	justify-content: center;
	align-items: center;
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

.about__item--big-text {
	font-size: 40px;
}
</style>