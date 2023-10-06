export type MainStackScreensType = {
  home: undefined;
};

export enum StepsCountDurationType {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  SIX_MONTHS = 'sixMonths',
  YEARLY = 'yearly',
}

type CommonTopTabArgType = {
  type: StepsCountDurationType;
};

export type TopTabNavigatorScreensType = {
  daily: CommonTopTabArgType;
  weekly: CommonTopTabArgType;
  monthly: CommonTopTabArgType;
  sixMonths: CommonTopTabArgType;
  yearly: CommonTopTabArgType;
};
