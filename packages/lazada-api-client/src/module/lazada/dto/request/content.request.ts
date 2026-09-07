export interface ContentGetTaskStatusRequest {
  task_id: string;
}

export interface ContentCancelTaskRequest {
  task_ids: string[];
}

export interface ContentChangeFaceRequest {
  raw_image_url: string;
  model_code: string;
  batch_size?: number;
  ratio?: string;
}

export interface ContentChangeProductBackgroundRequest {
  product_image_url: string;
  background_code: string;
  batch_size: number;
  ratio?: string;
}

export interface ContentFixHandRequest {
  raw_image_url: string;
  batch_size?: number;
  base_ref?: boolean;
  model_reference_image_url: string;
  ratio?: string;
}

export interface ContentProductImageMatchRequest {
  match_num: number;
  image_url: string;
}

export interface ContentTryOnClothRequest {
  keep_model?: boolean;
  additional_cloth_image_url?: string;
  cloth_image_url: string;
  type: string;
  batch_size?: number;
  model_reference_image_url?: string;
  ratio?: string;
}
