// imports the list of tags from tags.js
import {
    tags as Tags,
} from '../data/tags'
// imports the list of articles from FetchArticles.js
import {
    articles as A,
} from '../global/FetchArticle'

// Creates a copy of the articles
const Articles = [...A]


// returns nw sets of articles each timeits called
function articleRender () {
    if(Articles.length === 0 ) return "empty";
    // Creates an Array to store the averages from tags IN ORDER
    const averages = [];
    // Creates an Array to store the chosen articles
    const render = [];
    // loops the code 5 times
    while (render.length < 5) {
        // Actually assigns the averages to the averages array
        Tags.forEach(tag => averages.push(tag.getAverage()));

        // Creates a variable to hold the sum of all of the averages
        const sum = averages.reduce((a, b)=> a + b)

        // randomly picks a number between 0 and the sum
        let pick = Math.random() * sum

        // Checks to see if pick is between 0 and averages[0]
        if (pick >= 0 && pick < averages[0]) {
            // adds the first article in Article index 0 to render
            render.push([Articles[0][0].pop(), Tags[0].tag])
        } else {
            // Iterates through all of the array averages except for averages[0] and averages[-1]
            for (let i = 1; i < (averages.length - 1); i++) {
                // Checks if the pick is between the sum of all of the averages up to index i and the sum of all of the averages up to index i + 1
                if (pick >= averages.slice(0,i).reduce((a,b) => a + b) && pick >= averages.slice(0,i + 1).reduce((a,b) => a + b)) {
                    // adds the first article in Article index i to render
                    render.push([Articles[i][0].pop(), Tags[i].tag]);
                    // Breaks out of the for loop
                    break;
                }
            }
            // Checks to see if pick is above the sum of all of the averages up to index -1
            if (pick > Articles.slice(0,-1)) {
                // adds the first article in Article index -1 to render
                render.push([Articles[-1][0].pop(), Tags[-1].tag]);
            }
        }
    }
}

export {articleRender}