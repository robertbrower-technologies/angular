const SORT_QUERY_PARAMS = ['sortColumn', 'sortDirection'];

const ASCENDING = 'asc';

const getSort = function getSort(reqQuery) {
    var result = {
        sortDirection: ASCENDING
    };

    SORT_QUERY_PARAMS.forEach((elm) => {
        if (reqQuery.hasOwnProperty(elm)) {
            result[elm] = reqQuery[elm];
        }
    });

    return result;
}

// ascending
//  0:  exact match
// -1:  a < b
//  1:  a > b
const sortItems = function sortItems(items, sortColumn, sortDirection) {
    items.sort((a, b) => {
        if (typeof a[sortColumn] === 'number') {
        let n1 = a[sortColumn];
        let n2 = b[sortColumn]
        if (n1 < n2) {
            return -1 * (sortDirection === ASCENDING ? 1 : -1);
        } else if (n1 > n2) {
            return 1 * (sortDirection === ASCENDING ? 1 : -1);
        } else {
            return 0;
        }
        } else if (typeof a[sortColumn] === 'string') {
        let s1 = a[sortColumn];
        let s2 = b[sortColumn]
        return s1.localeCompare(s2) * (sortDirection === ASCENDING ? 1 : -1);
        }
    });

    return items;
}

module.exports = {
    SORT_QUERY_PARAMS: SORT_QUERY_PARAMS,
    ASCENDING: ASCENDING,
    getSort: getSort,
    sortItems: sortItems
};