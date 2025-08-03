const plural = new Intl.PluralRules(undefined, {
  type: "ordinal",
});

const appPlural = {
  one: "App",
  others: "Apps",
} as const;

const getAppOrPlural = (num: number) =>
  appPlural[plural.select(num) as keyof typeof appPlural] || appPlural.others;

export { getAppOrPlural };
