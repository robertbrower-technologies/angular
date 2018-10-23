const express = require('express');
const cors = require('cors');
//
const HTTP_STATUS_CODE_TEXT = require('./http-status-code-text').HTTP_STATUS_CODE_TEXT;
const FILTER = require('./filter');
const SORT = require('./sort');
const PAGE = require('./page');
const MOCK_DATA = require('./mock-data');
//
const GET_ITEMS_URL = '/api/items';
const GET_ITEMS_QUERY_PARAMS = MOCK_DATA.MOCK_DATA_FIELDS.concat(SORT.SORT_QUERY_PARAMS.concat(PAGE.PAGE_QUERY_PARAMS));

const app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};
  
app.use(cors(corsOptions));
app.listen(8000, () => {
    console.log('Server started!');
});

app.route(GET_ITEMS_URL).get((req, res) => {

    console.log(`${GET_ITEMS_URL} GET ${JSON.stringify(req.query)} <-`);
    try {
        
        if (!PAGE.validPageQuery(req.query, GET_ITEMS_QUERY_PARAMS)) {
            res.status(400).send(HTTP_STATUS_CODE_TEXT[400]);
            return;
        }

        var items = MOCK_DATA.MOCK_DATA;

        var filter = FILTER.getFilter(MOCK_DATA.MOCK_DATA_FIELDS, req.query);
        if (Object.keys(filter).length > 0) {
            items = FILTER.filterItems(items, filter);
        }
        
        var sort = SORT.getSort(req.query);
        if (sort.sortColumn) {
            items = SORT.sortItems(items, sort.sortColumn, sort.sortDirection.length > 0 ? sort.sortDirection : SORT.ASCENDING);
        }
        
        var page = PAGE.getPage(req.query);
        items = PAGE.pageItems(items, page.pageIndex, page.pageSize);

        var body = items;
        res.send(body);
    }
    catch(err) {
        console.log(err);
        res.status(500).send(HTTP_STATUS_CODE_TEXT[500]);
        return;
    } 
    finally {
        
    }
});







