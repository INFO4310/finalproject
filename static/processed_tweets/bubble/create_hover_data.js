 //producing Bubble Chart Hover Data

        let tweets = await d3.json('processed_tweets/Processed_Tweets_Not_Stemmed.json');
        let keyword = await d3.csv('processed_tweets/Bubble_Chart_Data.csv');
        // console.log(tweets[1].token_meaningful)
        // console.log("abv")
      let Bubble_Chart_Hover_Data = [];
      keyword.forEach((key) => {
        let maxBefore = {};
        let maxLikesBefore = 0;
        let maxAfter = {};
        let maxLikesAfter = 0;
        tweets.forEach((d,i) => {
          if (d.token_meaningful.includes(key['name'])) {
            created_date = new Date(d.created_at)
            presidency = new Date(("November 8, 2016 00:00:00"))
            if (created_date <= presidency) {
              if (d.favorite_count >= maxLikesBefore) {
                maxLikesBefore = d.favorite_count
                maxBefore = d
              }
            } else {
              if (d.favorite_count >= maxLikesAfter) {
                maxLikesAfter = d.favorite_count
                maxAfter = d
              }
            }

          }
        })
        Bubble_Chart_Hover_Data.push({
          name: key['name'],
          tweet_before: maxBefore,
          tweet_after: maxAfter
        })
        // console.log("Before")
        // console.log(JSON.stringify(maxBefore))
        // console.log("After")
        // console.log(JSON.stringify(maxAfter))
      })
      console.log(JSON.stringify(Bubble_Chart_Hover_Data))