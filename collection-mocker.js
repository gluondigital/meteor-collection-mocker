(function(ctx) {
  var randomDate = function(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  this.CollectionMock = function(collection, schema, count) {
    var attrs = schema.objectKeys();

    for (var i = 0; i < count; i++) {
      var row = {};

      _.each(attrs, function(attr) {
        var definition = schema.getDefinition(attr);

        if (definition.type === String) {
          var max = definition.max || 500;
          var to = _.random(0, max);
          var text = dimsum.sentence(1).substr(0, to);

          row[attr] = text;
        } else if (definition.type === Date) {
          var from = new Date(2011, 0, 1);
          var to = new Date();

          row[attr] = randomDate(from, to);
        } else if (definition.type === Number) {
          var max = definition.max || 999999999;
          var from = _.random(0, max);
          var to = _.random(from, max);

          row[attr] = _.random(from, to);
        }
      });
      collection.insert(row);
    }
  };

})(this);

