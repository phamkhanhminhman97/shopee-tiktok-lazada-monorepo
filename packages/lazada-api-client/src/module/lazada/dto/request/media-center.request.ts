export interface MediaCenterGetVideoRequest {
  videoId: number;
}

export type MediaCenterGetVideoQuotaRequest = Record<string, never>;

export interface MediaCenterCompleteCreateVideoRequest {
  uploadId: string;
  parts: string;
  title: string;
  coverUrl: string;
  videoUsage?: string;
}

export interface MediaCenterInitCreateVideoRequest {
  fileName: string;
  fileBytes: number;
}

export interface MediaCenterUploadVideoBlockRequest {
  uploadId: string;
  blockNo: string;
  blockCount: string;
  file: string[];
}

export interface MediaCenterRemoveVideoRequest {
  videoId: number;
}
