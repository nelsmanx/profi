export const useCompanyInfo = () => {
	const tel = '8 800 800 88 00';
	const mail = 'recruiting@profi.info';

	const formatTel = (tel) => {
		return tel.replace(/[^0-9]/g, "");
	};

	return {
		tel,
		mail,
		formatTel
	};
};