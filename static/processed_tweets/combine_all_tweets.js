    //preprocessing data occurred in /processed_tweets/Preprocessing Tweets without Stemming.ipynb
    //https://pythonhealthcare.org/2018/12/14/101-pre-processing-data-tokenization-stemming-and-removal-of-stop-words/
      const get_data = async () => {
    //  using JavaScript to combine the json files
      let tweets1 = await d3.json('raw_tweets_data/condensed_2018.json')
      let tweets2 = await d3.json('raw_tweets_data/condensed_2017.json')
      let tweets3 = await d3.json('raw_tweets_data/condensed_2016.json')
      let tweets4 = await d3.json('raw_tweets_data/condensed_2015.json')
      let tweets5 = await d3.json('raw_tweets_data/condensed_2014.json')
      let tweets6 = await d3.json('raw_tweets_data/condensed_2013.json')
      let tweets7 = await d3.json('raw_tweets_data/condensed_2012.json')
      let tweets8 = await d3.json('raw_tweets_data/condensed_2011.json')
      let tweets9 = await d3.json('raw_tweets_data/condensed_2010.json')
      let tweets10 = await d3.json('raw_tweets_data/condensed_2009.json')

      finalObj = tweets1.concat(tweets2).concat(tweets3).concat(tweets4).concat(tweets5).concat(tweets6).concat(tweets7).concat(tweets8).concat(tweets9).concat(tweets10);
      beforePrez = tweets3.concat(tweets4).concat(tweets5).concat(tweets6).concat(tweets7).concat(tweets8).concat(tweets9).concat(tweets10);
      duringPrez = tweets1.concat(tweets2)
      // console.log(finalObj.length)
      // console.log(JSON.stringify(finalObj))
      console.log(JSON.stringify(beforePrez))
      console.log(JSON.stringify(duringPrez))
      }
      get_data();