import { Switch, Route } from "react-router-dom";
import { sections } from "../../data/pageSections";
import Landing from "../Landing/Landing";
import Section from "../Section/Section";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      {sections.map((section) =>
        section.noRoute ? null : (
          <Route
            exact
            key={section.label}
            path={section.path}
            render={(props) => {
              return <Section {...props} {...section} />;
            }}
          />
        )
      )}
    </Switch>
  );
};

export default Routes;
