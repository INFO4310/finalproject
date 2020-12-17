const rawData = await d3.json('processed_tweets/Processed_Tweets_Not_Stemmed.json');
      let beforePrez = [];
      let afterPrez = [];

      rawData.forEach((d,i) => {
        date = new Date(d.created_at)
          if (date.getYear()+1900 <= 2016) {
            beforePrez.push(d)
          }
          // console.log(date.getYear())
          if (date.getYear()+1900 > 2016) {
            afterPrez.push(d)
          }
      })

      console.log(afterPrez)


      var hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

      data = [];

      hours.forEach((d, i) => {
        counter = 0;
        word_occurr = new Map();
        beforePrez.forEach((e, j) => {
          date = new Date(e.created_at)
          if (date.getHours() == d) {
            counter += 1;
            e.token_meaningful.forEach((word) => {
              if (word != "realdonaldtrump") {
              if (word_occurr.has(word)) // if already exists then update count. 
                word_occurr.set(word, word_occurr.get(word) + 1);
              else
                word_occurr.set(word, 1)
            }})
          }
        })
        word_occurr[Symbol.iterator] = function* () {
          yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
        }
        ordered_words = [];
        for (let [key, value] of word_occurr) {
          //shortening list to words occurring 500+ times
            ordered_words.push({ "name": key, "value": Math.round(value/8,1) })
        }
        data.push({
          hour: d,
          frequency: Math.round(counter/8, 1),
          topics: ordered_words.slice(0,10)
        })
      })

      console.log(JSON.stringify(data))
    }

      /const data = await d3.json('processed_tweets/bubble/Bubble_Chart_Hover_Data_Old.json')

      data.forEach((d,i)=>{
        d.tweet_before.id_str = String(d.tweet_before.id_str)
        d.tweet_after.id_str = String(d.tweet_after.id_str)
      })
      console.log(data)
      console.log(JSON.stringify(data))
    }
make_jennifers_data();