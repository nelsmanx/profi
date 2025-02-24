<script setup>
const benefits = [
	{
		title: 'Гарантии и&nbsp;безопасность',
		desc: 'Персонал не заболеет внезапно, не уйдёт в отпуск, не уволится. Если сотрудник не может выйти на работу, наше агентство сразу предоставит другие кадры'
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
					<p class="benefits__item-desc">{{ benefit.desc }}</p>
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
</style>