const PAGE_QUERY_PARAMS = ['pageIndex', 'pageSize'];

const validPageQuery = function validPageQuery(reqQuery, validQueryParams) {
    var queryParams = Object.keys(reqQuery);
    for (var i=0; i<queryParams.length; i++) {
        var queryParam = queryParams[i];
        if (validPageQueryParam(queryParam, validQueryParams) == false) {
            return false;
        }
    }

    if (!reqQuery.pageIndex || parseInt(reqQuery.pageIndex, 10) == NaN ||
        !reqQuery.pageSize || parseInt(reqQuery.pageSize, 10) == NaN ||
        parseInt(reqQuery.pageSize, 10) > 20) {
        return false;
    }

    return true;
}

const validPageQueryParam = function validPageQueryParam(param, validQueryParams) {
    return (validQueryParams.indexOf(param) > -1) ? true : false;
}

const getPage = function getPage(reqQuery) {
    var result = {
        pageIndex: 0,
        pageSize: 10
    };

    PAGE_QUERY_PARAMS.forEach((elm) => {
        if (reqQuery.hasOwnProperty(elm)) {
            result[elm] = parseInt(reqQuery[elm], 10);
        }
    });

    return result;
}

const pageItems = function pageItems(items, pageIndex, pageSize) {
    return items.slice(
        pageIndex * pageSize,
        pageIndex * pageSize + pageSize);
}


module.exports = {
    validPageQuery: validPageQuery,
    validPageQueryParam: validPageQueryParam,
    PAGE_QUERY_PARAMS: PAGE_QUERY_PARAMS,
    getPage: getPage,
    pageItems: pageItems
};