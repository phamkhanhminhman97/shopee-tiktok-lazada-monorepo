export interface ContentGetTaskStatusResult {
  data: Record<string, unknown>;
  success: boolean;
  result_code: string;
  result_message: string;
  fail_message: string;
  status: string;
}

export interface ContentGetTaskStatus {
  result: ContentGetTaskStatusResult;
}

export type ContentGetTaskStatusResponse = ContentGetTaskStatus;

export interface ContentCancelTaskResult {
  success: boolean;
  result_code: string;
  result_message: string;
  canceled_task_count: number;
}

export interface ContentCancelTask {
  result: ContentCancelTaskResult;
}

export type ContentCancelTaskResponse = ContentCancelTask;

export interface ContentChangeFaceResult {
  success: boolean;
  result_code: string;
  result_message: string;
  task_id: string;
}

export interface ContentChangeFace {
  result: ContentChangeFaceResult;
}

export type ContentChangeFaceResponse = ContentChangeFace;

export interface ContentChangeProductBackgroundResult {
  success: boolean;
  result_code: string;
  result_message: string;
  task_id: string;
}

export interface ContentChangeProductBackground {
  result: ContentChangeProductBackgroundResult;
}

export type ContentChangeProductBackgroundResponse = ContentChangeProductBackground;

export interface ContentFixHandResult {
  success: boolean;
  result_code: string;
  result_message: string;
  task_id: string;
}

export interface ContentFixHand {
  result: ContentFixHandResult;
}

export type ContentFixHandResponse = ContentFixHand;

export interface ContentProductImageMatchResult {
  success: boolean;
  result_code: string;
  result_message: string;
  match_image_urls: string[];
}

export interface ContentProductImageMatch {
  result: ContentProductImageMatchResult;
}

export type ContentProductImageMatchResponse = ContentProductImageMatch;

export interface ContentTryOnClothResult {
  success: boolean;
  result_code: string;
  result_message: string;
  task_id: string;
}

export interface ContentTryOnCloth {
  result: ContentTryOnClothResult;
}

export type ContentTryOnClothResponse = ContentTryOnCloth;
