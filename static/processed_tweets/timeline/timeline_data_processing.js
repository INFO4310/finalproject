let great = [];
let trump = [];
let thank = [];
let president = [];
let obama = [];
let people = [];
let country = [];
let minDate1 = new Date(2025, 11, 17);
let maxDate1 = new Date(1990, 11, 17);

const rawData = await d3.json('processed_tweets/Processed_Tweets_Not_Stemmed.json');

rawData.forEach((d, i) => {
    date = new Date(d.created_at)
    if (date >= maxDate1) {
        maxDate1 = date
    } else if (date <= minDate1) {
        minDate1 = date
    }
    if (d.token_meaningful.includes("great")) {
        great.push(d)
    } else if (d.token_meaningful.includes("great")) {
        great.push(d)
    } else if (d.token_meaningful.includes("thank")) {
        thank.push(d)
    } else if (d.token_meaningful.includes("president")) {
        president.push(d)
    } else if (d.token_meaningful.includes("obama")) {
        obama.push(d)
    } else if (d.token_meaningful.includes("people")) {
        people.push(d)
    } else if (d.token_meaningful.includes("country")) {
        country.push(d)
    }
})

var now = new Date(maxDate1);
var months = [];
for (var d = new Date(minDate1); d <= now; d.setMonth(d.getMonth() + 1)) {
    months.push(new Date(d));
}

let great_data = [];
let trump_data = [];
let thank_data = [];
let president_data = [];
let obama_data = [];
let people_data = [];
let country_data = [];

//summing occurrences and likes per month per topic

months.forEach((d, i) => {
    let like_counter = 0;
    let word_counter = 0;
    country.forEach((e, j) => {
        date = new Date(e.created_at)
        if (date.getMonth() == d.getMonth() && date.getYear() == d.getYear()) {
            word_counter += 1;
        }
    })
    people_data.push(
        word_counter
    )
})
console.log(JSON.stringify(people_data))