const getFilter = function getFilter(dataFields, reqQuery) {
    var result = {};

    dataFields.forEach((elm) => {
        if (reqQuery.hasOwnProperty(elm)) {
            result[elm] = reqQuery[elm];
        }
    });

    return result;
}

const filterItems = function filterItems(items, filter) {
    return items.filter((item) => filterItem(item, filter));
}

const filterItem = function filterItem(item, filter) {
    var result = true;

    Object.keys(filter).forEach((key) => {  
        if (filter.hasOwnProperty(key)) {
            if ((item[key] ? true : false) && ((filter[key] ? true : false) && filter[key].toString().length > 0)) {
              result = result && item[key].toString().toLowerCase().startsWith(filter[key].toString().toLowerCase());
            }
        }
    });

    return result;
}

module.exports = {
    getFilter: getFilter,
    filterItems: filterItems,
    filterItem: filterItem
};