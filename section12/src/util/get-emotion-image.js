import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
import emotion3 from "../assets/emotion3.png";
import emotion4 from "../assets/emotion4.png";
import emotion5 from "../assets/emotion5.png";

const emotions = [null, emotion1, emotion2, emotion3, emotion4, emotion5];

/* emotionId가 6일 경우엔 undefined를 반환하고
 * undefined는 falsy 이므로 null을 반환하게 된다.
 */
export function getEmotionImage(emotionId) {
  return emotions[emotionId] || null;
}
