export interface EarlyBirdPriceEarlyBirdActivityAddSkusResultErrorCode {
  error_code_params: Record<string, unknown>[];
  display_message: string;
  log_message: string;
  key: string;
}

export interface EarlyBirdPriceEarlyBirdActivityAddSkusResult {
  success: boolean;
  module: Record<string, unknown>;
  error_code: EarlyBirdPriceEarlyBirdActivityAddSkusResultErrorCode;
  repeated: boolean;
  retry: boolean;
}

export interface EarlyBirdPriceEarlyBirdActivityAddSkus {
  result: EarlyBirdPriceEarlyBirdActivityAddSkusResult;
}

export type EarlyBirdPriceEarlyBirdActivityAddSkusResponse = EarlyBirdPriceEarlyBirdActivityAddSkus;

export interface EarlyBirdPriceCreateEarlyBirdActivityResultErrorCode {
  error_code_params: Record<string, unknown>[];
  display_message: string;
  log_message: string;
  key: string;
}

export interface EarlyBirdPriceCreateEarlyBirdActivityResult {
  success: boolean;
  module: Record<string, unknown>;
  error_code: EarlyBirdPriceCreateEarlyBirdActivityResultErrorCode;
  repeated: boolean;
  retry: boolean;
}

export interface EarlyBirdPriceCreateEarlyBirdActivity {
  result: EarlyBirdPriceCreateEarlyBirdActivityResult;
}

export type EarlyBirdPriceCreateEarlyBirdActivityResponse = EarlyBirdPriceCreateEarlyBirdActivity;

export interface EarlyBirdPriceEarlyBirdActivityDeactivateSkusResultErrorCode {
  error_code_params: Record<string, unknown>[];
  display_message: string;
  log_message: string;
  key: string;
}

export interface EarlyBirdPriceEarlyBirdActivityDeactivateSkusResult {
  success: boolean;
  module: Record<string, unknown>;
  error_code: EarlyBirdPriceEarlyBirdActivityDeactivateSkusResultErrorCode;
  repeated: boolean;
  retry: boolean;
}

export interface EarlyBirdPriceEarlyBirdActivityDeactivateSkus {
  result: EarlyBirdPriceEarlyBirdActivityDeactivateSkusResult;
}

export type EarlyBirdPriceEarlyBirdActivityDeactivateSkusResponse = EarlyBirdPriceEarlyBirdActivityDeactivateSkus;
