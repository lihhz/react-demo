
const prefix = 'http://localhost:8080/web-spider/'; // api地址前缀

export default(config => {
    return Object.keys(config).reduce((copy, name) => {
        copy[name] = `${prefix}$config[name]`;
        return copy
    })
})({
    "getUserInfo": "baiduBaikeUserInfo/selectByPrimaryKey"
});