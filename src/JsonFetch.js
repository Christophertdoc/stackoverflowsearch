export const fetchQuestionsByIdUrl = (id) => {
    let url = 'https://api.stackexchange.com/2.2/questions/'+id+'?site=stackoverflow';
    return url;
} 
export const fetchQuestionsByTagUrl = (tag) => {
    // let url = 'https://api.stackexchange.com/2.2/questions?pagesize=30&order=asc&sort=activity&tagged='+tag+'&site=stackoverflow&filter=!-*f(6rc.(Jba';
    // let url = 'https://api.stackexchange.com/2.2/search/advanced?pagesize=50&order=desc&sort=activity&q='+tag+'&site=stackoverflow';
    let url = 'https://api.stackexchange.com/2.2/questions?pagesize=50&order=desc&sort=activity&q='+tag+'&site=stackoverflow&filter=!-*f(6rc.(Jba';
    return url;
}