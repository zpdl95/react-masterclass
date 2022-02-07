import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

function Coin() {
  /* useParams() = 현재 이 컴포넌트가 있는 URL의 파라미터값을 가져다줌 */
  /* ↓ 2가지 방법이 오브젝트의 type을 알려주는 방법 */
  const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams<RouteParams>();

  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
