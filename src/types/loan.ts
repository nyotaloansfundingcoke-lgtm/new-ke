export interface LoanOption {
  amount: number;
  fee: number;
}

export interface UserData {
  fullName: string;
  phoneNumber: string;
  idNumber: string;
  loanType: string;
}

export interface PaymentResponse {
  success: boolean;
  message?: string;
  transaction_request_id?: string;
  data?: any;
}

export const LOAN_OPTIONS: LoanOption[] = [
  { amount: 5500, fee: 100 },
  { amount: 6800, fee: 130 },
  { amount: 7800, fee: 170 },
  { amount: 9800, fee: 190 },
  { amount: 11200, fee: 230 },
  { amount: 16800, fee: 250 },
  { amount: 21200, fee: 270 },
  { amount: 25600, fee: 400 },
  { amount: 30000, fee: 470 },
  { amount: 35400, fee: 590 },
  { amount: 39800, fee: 730 },
  { amount: 44200, fee: 1010 },
  { amount: 48600, fee: 1600 },
  { amount: 60600, fee: 2050 },
];

export const LOAN_TYPES = [
  "Business Loan",
  "Personal Loan",
  "Education Loan",
  "Medical Loan",
  "Emergency Loan",
] as const;

export type LoanType = typeof LOAN_TYPES[number];
