export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export type CategoryItemTransaction = {
  transactions: number;
  amount: number;
} & Category;
