import * as React from "react";
import { Set } from "immutable";

import { ItemRow } from "./item-row";
import { CheckBox } from "./check-box";

interface Props {
  listing: string[];
  selected_entries: Set<string>;
  on_path_click: (path: string) => void;
  on_select: (path: string) => void;
  on_deselect: (path: string) => void;
}

export function FileListing({
  listing,
  selected_entries,
  on_path_click,
  on_select,
  on_deselect
}: Props) {
  const rows: JSX.Element[] = [];

  listing.map(path => {
    const is_selected = selected_entries.has(path);
    rows.push(
      <ItemRow
        onClick={() => {
          on_path_click(path);
        }}
        role={"button"}
        highlight={is_selected}
        key={path}
      >
        <CheckBox
          checked={is_selected}
          on_click={checked => {
            if (checked) {
              on_deselect(path);
            } else {
              on_select(path);
            }
          }}
        />
        {path}
      </ItemRow>
    );
  });

  return <>{rows}</>;
}