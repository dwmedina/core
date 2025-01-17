
export type SettingCategory = {
  name: string;
  key: string;
  subcategories?: SettingCategory[];
};
export const SETTINGS_CATEGORIES: SettingCategory[] = [{
  name: "Main Settings",
  key: "main",
  subcategories: [{
    name: "Shuffle",
    key: "shuffle",
  }, {
    name: "Events",
    key: "events",
  }, {
    name: "Cross-Game",
    key: "cross",
  }, {
    name: "Misc.",
    key: "misc",
  }]
}, {
  name: "Items",
  key: "items",
  subcategories: [{
    name: "Progressive Items",
    key: "progressive",
  }, {
    name: "Shared Items",
    key: "shared",
  }, {
    name: "Item Extensions",
    key: "extensions",
  }],
}, {
  name: "Hints",
  key: "hints",
}, {
  name: "Entrances",
  key: "entrances",
}];
