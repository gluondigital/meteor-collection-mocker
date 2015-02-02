(function(ctx) {
  var randomDate = function(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  this.CollectionAutofill = function(collection, schema, count) {
    var attrs = schema.objectKeys();

    for (var i = 0; i < count; i++) {
      var row;

      _.each(attrs, function(attr) {
        var definition = schema.getDefinition(attr);

        if (definition.type === String) {
          row[attr] = dimsum.sentence(1);
        } else if (definition.type === Date) {
          row[attr] = randomDate(new Date(2011, 0, 1), new Date());
        } else if (definition.type === Number) {
          row[attr] = _.random(1, 100000);
        }
      });
      collection.insert(row);
    }
  };

})(this);

