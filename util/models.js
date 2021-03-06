var modelFunctions = {
  extractAreas: function(subareas){
    var result = [];
    if (subareas == null) {
      return result;
    }
    for (var area in subareas) {
      for (var i in subareas[area]) {
        result.push(area + " - " + subareas[area][i]);
      }
    }
    return result;
  }
};

export const DataModel = modelFunctions
