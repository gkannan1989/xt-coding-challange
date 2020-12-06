import 'regenerator-runtime/runtime';
export const modifyNewsFeed = (data) => {
  const results = JSON.parse(JSON.stringify(data));
  const feeds = [];
  const {
    title,
    id,
    author,
    url,
    created_at_i,
    points,
    children,
  } = results;
  if (title != null) {
    const date = new Date(created_at_i * 1000);
    const posted_time = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
    const news_results = {
      id,
      title,
      author,
      time: posted_time,
      url,
      vote_count: points,
      comments: children.length
    };
    feeds.push(news_results);  
  }
  return feeds;
}
 