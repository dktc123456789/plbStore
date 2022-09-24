exports.getCatalog = (req, res, next) => {
    res.send('Danh sách Catalog');
}

exports.addNew = (req, res, next) => {
    res.send('Form thêm Catalog')
}