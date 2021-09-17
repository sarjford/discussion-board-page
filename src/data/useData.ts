import comments from './comments.json';
import discussion from './discussion.json';

// custom hook to mimic using API data in the components
export function useData() {
  return {
    comments,
    discussion
  }
}
