export interface ImgurResponse {
  status: number;
  success: boolean;
  data: {
    id: string;
    deletehash: string;
    account_id: number;
    account_url: number;
    ad_type: number;
    ad_url: number;
    title: number;
    description: number;
    name: string;
    type: string;
    width: number;
    height: number;
    size: number;
    views: number;
    section: string;
    vote: string;
    bandwidth: number;
    animated: boolean;
    favorite: boolean;
    in_gallery: boolean;
    in_most_viral: boolean;
    has_sound: boolean;
    is_ad: boolean;
    nsfw: boolean;
    link: string;
    tags: string[];
    datetime: number;
    mp4: string;
    hls: string;
  };
}
