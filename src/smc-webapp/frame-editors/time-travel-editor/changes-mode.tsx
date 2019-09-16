/* Toggle diff mode */

import { Rendered, Component, React } from "../../app-framework";
import { Checkbox } from "react-bootstrap";
import { TimeTravelActions } from "./actions";

interface Props {
  id: string;
  actions: TimeTravelActions;
  changes_mode: boolean; // whether or not in changes mode.
}

export class ChangesMode extends Component<Props> {
  public render(): Rendered {
    return (
      <Checkbox
        title={
          "Toggle whether or not to show the changes from one point in time to another"
        }
        onClick={() =>
          this.props.actions.set_changes_mode(
            this.props.id,
            !this.props.changes_mode
          )
        }
        checked={this.props.changes_mode}
      >
        Changes
      </Checkbox>
    );
  }
}