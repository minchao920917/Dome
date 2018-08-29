var express = require('express');
var router = express.Router();

var BaseModel = require('../model/base_model.js');

/* GET test page. */
router.get('/', function(req, res, next) {

    var baseModel = new BaseModel();
    var tableName = 'node_book';

    /*数据插入验证 */

    // var rowInfo = {};
    // rowInfo.book_name = 'minchao1 book';
    // rowInfo.author = 'minchao1';
    // console.log(tableName+"....."+ JSON.stringify(rowInfo));
    // baseModel.insert(tableName, rowInfo, function(ret){
    //     console.log(JSON.stringify(ret));
    // });

    /* findOneById验证 */

        // var idJson = {'book_id': 1};
        // baseModel.findOneById(tableName, idJson, function(ret){
        //     bookInfo = ret;
        //     console.log(bookInfo);
        // });


    /* modify验证 */

    /*
        var newInfo = {};
        newInfo.book_name = 'nodejs book-by danhuang';
        newInfo.author = 'Jimi';
        var idJson = {'book_id': 2};
        baseModel.modify(tableName, idJson, newInfo, function(ret){
            console.log(JSON.stringify(ret));
        });

     */

    /* remove验证 */


        // var idJson = {'book_id': 3};
        // baseModel.remove(tableName, idJson, function(ret){
        //     console.log(JSON.stringify(ret));//true
        // });



    /* find验证 */

    //book_name 等于nodejs且author等于 danhuang 或者十以内的个数
   var whereJson = {
        'and' : [{'key':'book_name', 'opts':'=', 'value' : '"nodejs"'}, {'key':'author', 'opts':'=', 'value' : '"danhuang"'}],
        'or' : [{'key':'book_id', 'opts':'<', 'value' : 10}]
    };
    var fieldsArr = ['book_id','book_name', 'author', 'time'];//查询结果中显示的字段
    var orderByJson = {'key':'time', 'type':'desc'};//按照时间降序排序
    var limitArr = [0, 3]; //查询结果的前三个
    baseModel.find(tableName, whereJson, orderByJson, limitArr, fieldsArr, function(ret){
        console.log(JSON.stringify(ret));
    });

    res.render('index', { title: 'test mysql' });
});

module.exports = router;
