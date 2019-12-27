exports.infoNosotros = (req, res) => {
    res.render('nosotros', {
        // Esta variable es una variable local y la uso en la
        // pagina nosotros y en idex como nombre de la pagina
        pagina: 'Sobre Nosotros'
    });
};