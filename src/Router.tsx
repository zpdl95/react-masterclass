import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={"/"} exact>
          <Coins toggleDark={toggleDark} />
        </Route>
        <Route path={"/:coinId"}>
          <Coin isDark={isDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
