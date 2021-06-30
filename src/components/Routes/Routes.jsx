import { Switch, Route } from "react-router-dom";
import { sections } from "../../data/pageSections";
import Landing from "../Landing/Landing";
import Section from "../Section/Section";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      {sections.map(({ path }) => (
        <Route
          exact
          path={path}
          render={(props) => {
            return <Section {...props} />;
          }}
        />
      ))}
    </Switch>
  );
};

export default Routes;
