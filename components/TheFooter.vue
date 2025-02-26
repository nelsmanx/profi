<script setup>
const companyInfo = useCompanyInfo();
</script>

<template>
	<footer id="footer" class="footer">
		<div class="container">
			<div class="footer__contacts">
				<div class="footer__contacts-inner">
					<div class="footer__contacts-block">
						<h2 class="footer__title">Контакты</h2>
						<ul class="footer__contacts-list">
							<li class="footer__contacts-item">Общество с ограниченной ответственностью “Профи”</li>
							<li class="footer__contacts-item">
								<a class="footer__contacts-item-link" :href="`mailto:${companyInfo.mail}`">{{ companyInfo.mail }}</a>
							</li>
							<li class="footer__contacts-item">
								<a class="footer__contacts-item-link" :href="`tel:+${companyInfo.formatTel(companyInfo.tel)}`">{{ companyInfo.tel }}</a>
							</li>
						</ul>
					</div>
					<div class="footer__contacts-block">
						<img class="footer__logo" src="/images/footer-logo.svg" alt="Логотип компании">
					</div>
				</div>
			</div>
			<div class="footer__info">
				<ul class="footer__info-list">
					<li class="footer__info-item">Все права защищены</li>
					<li class="footer__info-item">
						<a class="footer__info-item-link" href="#">Политика конфиденциальности</a>
					</li>
					<li class="footer__info-item">2025</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	padding: 50px 0 65px;
	background-color: #edecec;
}

.footer__contacts {
	margin-bottom: 140px;
}

.footer__contacts-inner {
	display: grid;
	grid-template-columns: 1fr auto;
}

.footer__contacts-block {}

.footer__title {
	margin-bottom: 35px;
	font-size: 55px;
	font-weight: 500;
	color: #000;
}

.footer__contacts-list {
	display: grid;
	gap: 33px;
}

.footer__contacts-item {
	font-size: 30px;
	font-weight: 500;
	color: rgba(0, 0, 0, 0.8);
}

.footer__contacts-item-link {}

.footer__logo {
	--scale: 1;
	width: calc(375px * var(--scale));
}

.footer__info {}

.footer__info-list {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.footer__info-item {
	font-size: 20px;
	font-weight: 500;
	color: rgba(0, 0, 0, 0.5);
}

.footer__info-item-link {}

@media (max-width: 1599.98px) {
	.footer__title {
		font-size: calc(var(--section-title-fz) - 5px);
	}

	.footer__contacts-item {
		font-size: 26px;
	}

	.footer__logo {
		--scale: 0.9;
	}

	.footer__info-item {
		font-size: 18px;
	}
}

@media (max-width: 1399.98px) {
	.footer__title {
		margin-bottom: 30px;
	}

	.footer__contacts {
		margin-bottom: 120px;
	}

	.footer__logo {
		--scale: 0.7;
	}

	.footer__contacts-list {
		gap: 25px;
	}

	.footer__contacts-item {
		font-size: 24px;
	}

	.footer__info-item {
		font-size: 16px;
	}
}

@media (max-width: 1199.98px) {
	.footer {
		padding: 45px 0;
	}

	.footer__contacts {
		margin-bottom: 100px;
	}

	.footer__contacts-list {
		gap: 20px;
	}

	.footer__contacts-item {
		font-size: 20px;
	}

	.footer__logo {
		--scale: 0.6;
	}

	.footer__info-item {
		font-size: 14px;
	}
}

@media (max-width: 991.98px) {
	.footer {
		padding: 30px 0 25px;
	}

	.footer__contacts {
		margin-bottom: 60px;
	}

	.footer__contacts-list {
		gap: 15px;
	}

	.footer__contacts-item {
		font-size: 16px;
	}

	.footer__logo {
		--scale: 0.4;
	}

	.footer__info-item {
		font-size: 12px;
	}
}

@media (max-width: 767.98px) {
	.footer {
		padding: 25px 0 20px;
	}

	.footer__title {
		margin-bottom: 20px;
	}

	.footer__contacts {
		margin-bottom: 40px;
	}

	.footer__contacts-item {
		font-size: 12px;
	}

	.footer__logo {
		--scale: 0.3;
	}

	.footer__info-item {
		font-size: 10px;
	}
}

@media (max-width: 575.98px) {
	.footer {
		padding: 20px 0 15px;
	}

	.footer__contacts-inner {
		gap: 10px;
	}

	.footer__contacts {
		margin-bottom: 30px;
	}

	.footer__contacts-item {
		font-size: 10px;
	}

	.footer__logo {
		--scale: 0.25;
	}

	.footer__info-item {
		font-size: 8px;
	}
}

@media (max-width: 375.98px) {
	.footer {
		padding: 10px 0 8px;
	}

	.footer__contacts {
		margin-bottom: 25px;
	}

	.footer__title {
		margin-top: 3px;
		margin-bottom: 15px;
	}

	.footer__contacts-list {
		gap: 13px;
	}

	.footer__contacts-item {
		font-size: 7px;
	}

	.footer__logo {
		--scale: 0.22;
	}

	.footer__info-item {
		font-size: 5px;
	}

	/* .footer__info-list {
		max-width: 270px;
		margin-inline: auto;
		position: relative;
		left: calc(50% - 30px);
	} */
}
</style>