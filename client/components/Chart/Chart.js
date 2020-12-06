import React from 'react';
import { LineChart } from 'react-chartkick';
import {
  NEWS_STORAGE_KEY,
  NEWS_FEED_SHOW,
  UP_ARROW_ICON,
} from '../../actions/constants';

const Chart = ({ results }) => {
  const statistics = [];

  for (let i = 0; i < results.length; i++) {
    const id = results[i].id && results[i].id.toString();

    const storage_item = localStorage.getItem(NEWS_STORAGE_KEY + id);
    const parse_storage_item = JSON.parse(storage_item);

    const item = {
      [id]: parse_storage_item != null ? parse_storage_item.vote_count : 0,
    };
    statistics.push(item);
  }
  let graph_item = JSON.stringify(statistics);
  graph_item = graph_item.replace(/[{}]/g, '');
  graph_item = graph_item.replace('[', '{');
  graph_item = graph_item.replace(']', '}');

  const data = JSON.parse(graph_item);

  return <LineChart data={data} />;
};

export default Chart;
