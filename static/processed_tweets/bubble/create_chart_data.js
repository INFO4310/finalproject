//create a hashmap of all word occurrances, key = word, value = occurrances
      word_occurr = new Map();
      tweets.forEach((d) => {
        d.token_meaningful.forEach((word) => {
          if (word_occurr.has(word)) // if already exists then update count. 
            word_occurr.set(word, word_occurr.get(word) + 1);
          else
            word_occurr.set(word, 1)
        })
      })

      //ordering the hashmap based on value
      //https://stackoverflow.com/questions/37982476/how-to-sort-a-map-by-value-in-javascript
      word_occurr[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
      }
      ordered_words = [];
      for (let [key, value] of word_occurr) {
        //shortening list to words occurring 500+ times
        if (value > 500) {
          ordered_words.push({ "name": key, "value": value })
        }
      }
      console.log(word_occurr)
      console.log(ordered_words)

      console.log(JSON.stringify(ordered_words))


      var json = ordered_words
      var fields = Object.keys(json[0])
      var replacer = function (key, value) { return value === null ? '' : value }
      var csv = json.map(function (row) {
        return fields.map(function (fieldName) {
          return JSON.stringify(row[fieldName], replacer)
        }).join(',')
      })
      csv.unshift(fields.join(',')) // add header column
      csv = csv.join('\r\n');
      console.log(csv)