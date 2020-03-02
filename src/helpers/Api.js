import memoize from "memoize-one";
import { tvMetadata, tvData, comments } from "./data";

const API_TIMEOUT = 1000;

export const tvMetadataApi = memoize(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(tvMetadata);
    }, API_TIMEOUT);
  });
});

export const tvDataApi = memoize((id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(tvData[id]);
    }, API_TIMEOUT);
  });
});

export const commentsApi = memoize((id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(comments.sort((a, b) => 0.5 - Math.random()));
    }, API_TIMEOUT + 500);
  });
});