<script setup>

const faqList = [
	{
		question: 'Вы предоставляете услуги по&nbsp;договору?',
		answer: '<p>Да, с каждым заказчиком мы заключаем договор на услуги, учитывающий его требования и задачи. Этот договор служит юридическим документом, знаменующим начало взаимовыгодного партнерства, в котором мы берем на себя ответственность в качестве подрядчика. В договоре необходимо указать определенную важную информацию, такую как продолжительность срока сотрудничества, стоимость услуг, количество персонала, часы работы и прочие важные моменты.</p>'
	},
	{
		question: 'Из чего складывается стоимость на&nbsp;услуги?',
		answer: '<p>Мы составляем индивидуальный расчет цены для каждого клиента, учитывая необходимое количество сотрудников, их требуемую квалификацию, оплату проезда и проживания, продолжительность работы и наш процент. Если вы отправите нам запрос, наш компетентный менеджер составит смету, исходя из ваших условий, и озвучит вам стоимость.</p>'
	},
	{
		question: 'С какими сферами бизнеса вы&nbsp;работаете?',
		answer: '<p>Profi специализируется на поиске и подборе персонала для различных сфер бизнеса, таких как производственные предприятия, торговые сети, рестораны, складские комплексы и не только. Мы также можем предложить помощь в поиске персонала для сферы услуг на временной или долгосрочной основе.</p>'
	},
	{
		question: 'Какие задачи вы выполняете?',
		answer: '<p>Мы выполняем все задачи по обеспечению вашего предприятия сотрудниками. Организации, использующие услуги, могут получить необходимое количество персонала на любой срок: неделя, месяц, год. Это позволяет экономить на поиске и приёме на работу новых специалистов и гарантирует стабильность для владельцев бизнеса. Наши услуги эффективны в случаях болезни, незапланированного отпуска, неожиданного увольнения, смены персонала и нехватки работников.</p>'
	},
	{
		question: 'Кто занимается всеми кадровыми процессами?',
		answer: '<p>Наша компания занимается поиском, проверкой, обучением и контролем работы персонала. На нас лежит вся ответственность по оформлению работника, включая инструктаж ОТ и ТБ и получение медицинских документов. Наши сотрудники являются неотъемлемой частью команды, и мы занимаемся всеми аспектами управления персоналом, такими как бухгалтерский учет, уплата налогов и отчислений в фонды.</p>'
	},
	{
		question: 'Какие сроки подбора персонала?',
		answer: '<p>Рассчитываются индивидуально, всегда стараемся подобрать персонал для заказчика в самые кратчайшие сроки</p>'
	},
	{
		question: 'Подбираете ли вы персонал по&nbsp;параметрам?',
		answer: '<p>Да. У нас есть услуга подбора персонала по заданному профилю: все параметры вы можете указать при оформлении заявки.</p>'
	},
]

</script>

<template>
	<section id="faq" class="faq">
		<div class="container">
			<h2 class="faq__title basic-title">Вопросы<br /><span class="hl">и ответы</span></h2>
			<ul id="faq-list" class="faq__list">
				<li v-for="(faq, index) in faqList" :key="faq.question"
					class="faq__item">
					<div class="faq__item-question collapsed" data-bs-toggle="collapse" :data-bs-target="`#faq-answer-${index + 1}`">
						<div class="faq__item-question-content">
							<p v-html="faq.question"></p>
						</div>
						<button class="faq__item-question-button"></button>
					</div>
					<div class="faq__item-answer collapse" :id="`faq-answer-${index + 1}`" data-bs-parent="#faq-list">
						<div class="faq__item-answer-content" v-html="faq.answer"></div>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.faq {
	margin-bottom: calc(var(--section-space) + 2px);
}

.faq__title {
	margin-bottom: 102px;
	color: var(--primary-accent-color);
}

.faq__title .hl {
	color: var(--secondary-accent-color);
}

.faq__list {}

.faq__item {}

.faq__item-question {
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	gap: 70px;
	padding: 32px 0 30px;
	border-bottom: 2px solid #d9d9d9;
	cursor: pointer;
}

.faq__item:first-child .faq__item-question {
	padding-top: 0;
}

.faq__item-question-button {
	display: flex;
	justify-content: center;
	align-items: center;
	--scale: 1;
	width: calc(60px * var(--scale));
	height: calc(60px * var(--scale));
	background-color: transparent;
	border: 2px solid var(--primary-accent-color);
	border-radius: 50%;
	cursor: pointer;
}

.faq__item-question-button::before {
	content: "";
	width: calc(33px * var(--scale));
	height: calc(19px * var(--scale));
	background-image: url("data:image/svg+xml,%3Csvg width='34' height='20' viewBox='0 0 34 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.961' fill-rule='evenodd' clip-rule='evenodd' d='M3.28906 0.96875C7.85691 5.49758 12.4272 10.0288 17 14.5625C21.5687 10.0524 26.1195 5.52113 30.6523 0.96875C31.5703 1.88668 32.4883 2.80473 33.4062 3.72266C28.3282 8.80074 23.25 13.8789 18.1719 18.957C17.3906 19.3476 16.6094 19.3476 15.8281 18.957C10.75 13.8789 5.67184 8.80074 0.59375 3.72266C1.5159 2.82008 2.41437 1.90215 3.28906 0.96875Z' fill='%23EC702D' /%3E%3C/svg%3E");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	transform: rotate(180deg) translateY(1px);
	transition: transform 250ms ease-in-out;
}

.faq__item-question.collapsed .faq__item-question-button::before {
	transform: rotate(0) translateY(1px);
}

.faq__item-question-content:deep(p) {
	font-family: var(--secondary-font-family);
	font-size: 45px;
	font-weight: 500;
	color: var(--secondary-accent-color);
}

.faq__item-answer {}

.faq__item-answer-content {
	padding-block: 50px;
}

.faq__item-answer-content:deep(p),
.faq__item-answer-content:deep(li) {
	font-weight: 400;
	font-size: 32px;
	line-height: 1.125;
	color: #000;
}

.faq__item-answer-content:deep(p b) {
	font-weight: 700;
}

.faq__item-answer-content:deep(li:not(:last-child)) {
	margin-bottom: 13px;
}

@media (max-width: 1599.98px) {
	.faq__title {
		margin-bottom: var(--section-title-mb);
	}

	.faq__item-question-content:deep(p) {
		font-size: 40px;
	}

	.faq__item-answer-content {
		padding: 40px 0 15px;
	}

	.faq__item-answer-content:deep(p),
	.faq__item-answer-content:deep(li) {
		font-size: 28px;
	}
}

@media (max-width: 1399.98px) {
	.faq__item-question-button {
		--scale: 0.8;
	}

	.faq__item-question-content:deep(p) {
		font-size: 32px;
	}

	.faq__item-question {
		padding: 25px 0;
	}

	.faq__item-answer-content {
		padding: 35px 0 10px;
	}

	.faq__item-answer-content:deep(p),
	.faq__item-answer-content:deep(li) {
		font-size: 26px;
	}
}

@media (max-width: 1199.98px) {
	.faq__item-question-content:deep(p) {
		font-size: 28px;
	}

	.faq__item-question {
		padding: 20px 0;
	}

	.faq__item-question-button {
		--scale: 0.7;
	}

	.faq__item-answer-content {
		padding: 30px 0 10px;
	}

	.faq__item-answer-content:deep(p),
	.faq__item-answer-content:deep(li) {
		font-size: 24px;
	}
}

@media (max-width: 991.98px) {
	.faq__item-question-content:deep(p) {
		font-size: 20px;
	}

	.faq__item-question {
		gap: 40px;
		padding: 15px 0;
	}

	.faq__item-question-button {
		--scale: 0.6;
	}

	.faq__item-answer-content {
		padding: 20px 0 5px;
	}

	.faq__item-answer-content:deep(p),
	.faq__item-answer-content:deep(li) {
		font-size: 18px;
	}
}

@media (max-width: 767.98px) {
	.faq {
		margin-bottom: calc(var(--section-space));
	}

	.faq__item-question {
		gap: 30px;
	}

	.faq__item-question-content:deep(p) {
		font-size: 16px;
	}

	.faq__item-question-button {
		--scale: 0.5;
	}

	.faq__item-answer-content:deep(p),
	.faq__item-answer-content:deep(li) {
		font-size: 16px;
	}
}

@media (max-width: 575.98px) {
	.faq__item-question-content:deep(p) {
		font-size: 14px;
	}

	.faq__item-question {
		gap: 15px;
		padding: 12px 0;
	}

	.faq__item-question-button {
		--scale: 0.4;
		border-width: 1.5px;
	}

	.faq__item-answer-content {
		padding: 12px 0 0;
	}

	.faq__item-answer-content:deep(p),
	.faq__item-answer-content:deep(li) {
		font-size: 13px;
		line-height: 1.5;
	}
}

@media (max-width: 375.98px) {
	.faq__item-question {
		padding: 9px 0;
	}

	.faq__item-question-content:deep(p) {
		font-size: 11px;
	}

	.faq__item-question-button {
		--scale: 0.35;
	}

	.faq__item-answer-content {
		padding-top: 9px;
	}

	.faq__item-answer-content:deep(p),
	.faq__item-answer-content:deep(li) {
		font-size: 10px;
	}
}
</style>