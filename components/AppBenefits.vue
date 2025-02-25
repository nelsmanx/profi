<script setup>
const benefits = [
	{
		title: 'Гарантии и&nbsp;безопасность',
		desc: 'Персонал не заболеет внезапно, не&nbsp;уйдёт в&nbsp;отпуск, не уволится. Если сотрудник не&nbsp;может выйти на работу, наше агентство сразу предоставит другие кадры'
	},
	{
		title: 'Экономия человеческого&nbsp;ресурса',
		desc: 'Снизится нагрузка на бухгалтерский и кадровый отделы, так как всеми процессами займется наше агентство'
	},
	{
		title: 'Экономия средств',
		desc: 'Для организации гарантировано снижение налоговой нагрузки. Премия, бонус и надбавка за выполнение плана внештатным сотрудникам не полагаются.'
	},
];
</script>

<template>
	<section class="benefits">
		<div class="container">
			<h2 class="benefits__title basic-title">Преимущества <br /><span class="hl">аутсорсинга</span>
			</h2>
			<ul class="benefits__list">
				<li v-for="benefit in benefits" :key="benefit.title"
					class="benefits__item">
					<h3 class="benefits__item-title" v-html="benefit.title"></h3>
					<p class="benefits__item-desc" v-html="benefit.desc"></p>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.benefits {
	margin-bottom: var(--section-space);
	padding-top: 60px;
}

.benefits__title {
	margin-bottom: 80px;
	color: var(--secondary-accent-color);
}

.benefits__title .hl {
	color: var(--primary-accent-color);
}

.benefits__list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 26px;
}

.benefits__item {
	padding: 24px 60px 40px 40px;
	background-color: #edecec;
	border-radius: 50px;
}

.benefits__item-title {
	width: min-content;
	margin-bottom: 24px;
	font-family: var(--secondary-font-family);
	font-weight: 500;
	font-size: 30px;
	color: var(--primary-accent-color)
}

.benefits__item-desc {
	font-size: 22px;
	font-weight: 500;
	color: var(--basic-color);
}

@media (max-width: 1599.98px) {
	.benefits__title {
		margin-bottom: var(--section-title-mb);
	}

	.benefits__item {
		padding: 24px 40px 40px;
	}

	.benefits__item-title {
		font-size: 28px;
	}
}

@media (max-width: 1399.98px) {
	.benefits__list {
		gap: 20px;
	}

	.benefits__item {
		border-radius: 40px;
	}

	.benefits__item-title {
		font-size: 24px;
	}

	.benefits__item-desc {
		font-size: 20px;
	}
}

@media (max-width: 1199.98px) {
	.benefits__list {
		grid-template-columns: repeat(4, 1fr);
	}

	.benefits__item {
		grid-column: span 2;
	}

	.benefits__item:last-child {
		grid-column: 2/4;
	}

	.benefits__item:last-child .benefits__item-title {
		width: auto;
	}
}

@media (max-width: 991.98px) {
	.benefits__item {
		padding: 20px 30px 30px;
		border-radius: 30px;
	}

	.benefits__item-title {
		margin-bottom: 20px;
		font-size: 22px;
	}

	.benefits__item-desc {
		font-size: 18px;
	}
}

@media (max-width: 767.98px) {
	.benefits__list {
		grid-template-columns: 100%;
		justify-items: center;
	}

	.benefits__item:nth-child(1n) {
		grid-column: auto;
	}

	.benefits__item {
		max-width: 420px;
	}

	.benefits__item-title {
		font-size: 20px;
	}

	.benefits__item-desc {
		font-size: 16px;
	}
}

@media (max-width: 575.98px) {
	.benefits {
		padding-top: 10px;
	}

	.benefits__item {
		max-width: 340px;
		border-radius: 20px;
	}

	.benefits__item-title {
		margin-bottom: 15px;
		font-size: 18px;
	}

	.benefits__item-desc {
		font-size: 14px;
	}
}

@media (max-width: 375.98px) {
	.benefits__item {
		max-width: 282px;
		padding: 19px 16px 14px;
	}

	.benefits__item-title {
		margin-bottom: 7px;
		font-size: 15px;
	}

	.benefits__item-desc {
		font-size: 11px;
	}
}
</style>