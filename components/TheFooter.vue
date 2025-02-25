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
	gap: 30px;
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
	width: 375px;
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
</style>