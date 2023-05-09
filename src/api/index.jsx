import { uploaderAPI } from "../config/apiService";

export const api = {
  // Image Uploader
  uploader: (body) => {
    return uploaderAPI.post("/ddqrxmfp9/image/upload", body);
  },
};
