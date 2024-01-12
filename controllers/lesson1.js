const kevinRoute = (req, res) => {
    res.send('Kevin Johnson');
};

const katiRoute = (req, res) => {
    res.send('Kati Johnson');
};

module.exports = {
    kevinRoute,
    katiRoute,
};