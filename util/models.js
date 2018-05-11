var modelFunctions = {
  extractAreas: function(subareas){
    var result = [];
    for (var area in subareas) {
      result.push(subareas[area]);
    }
    return result;
  }
};

export const DataModel = modelFunctions
