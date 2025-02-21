<script setup></script>

<template>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<img class="header__logo" src="/images/header-logo.svg" alt="Логотип компании">
				<div class="header__nav">
					<ul class="header__nav-list">
						<li class="header__nav-item"><a class="header__nav-link" href="#">О нас</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#">Услуги</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#">Цены</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#">Вопросы</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#">Контакты</a></li>
					</ul>
				</div>
				<a class="header__button button-basic" href="#">Заказать звонок</a>
			</div>
		</div>
	</header>
</template>

<style scoped>
.header {
	margin-bottom: var(--section-space);
	padding: 25px 0;
}

.header__inner {
	display: grid;
	grid-template-columns: auto 1fr auto;
	justify-content: space-between;
	align-items: center;
	gap: 130px;
}

.header__logo {
	width: 171px;
}

.header__nav {
	/* margin-inline: auto; */
	max-width: 845px;
	width: 100%;
}

.header__nav-list {
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
	gap: 30px;
}

.header__nav-item {}

.header__nav-link {
	font-size: 20px;
	font-weight: 400;
	line-height: normal;
	color: #000;
	cursor: pointer;
}

.header__button {}

@media (max-width: 1399.98px) {
	.header__inner {
		gap: 100px;
	}
}

@media (max-width: 1199.98px) {
	.header__logo {
		width: 150px;
	}

	.header__inner {
		gap: 70px;
	}

	.header__nav-link {
		font-size: 18px;
	}

	.header__button {
		font-size: 16px;
	}
}

@media (max-width: 991.98px) {
	.header {
		padding: 20px 0;
	}

	.header__inner {
		gap: 0;
	}

	.header__logo {
		width: 120px;
	}

	.header__nav-list {
		display: none;
	}

	.header__button {
		font-size: 14px;
	}
}

@media (max-width: 767.98px) {
	.header {
		padding: 15px 0;
	}
}

@media (max-width: 575.98px) {
	.header__logo {
		width: 110px;
	}

	.header__button {
		font-size: 12px;
	}
}

@media (max-width: 479.98px) {
	.header {
		padding: 10px 0;
	}

	.header__logo {
		width: 90px;
	}

	.header__button {
		padding: 1em 0.8em;
		font-size: 10px;
	}
}
</style>