export interface IProject {
  img: string;
  title: string;
  duration: string;
  lastUpdate: string;
}

export interface IProjectProperties {
  duration: number;
  video_content_type: string;
  audio_content_type: null | string;
  frame_width: number;
  frame_height: number;
  size: number;
}

export interface IProjectApiData {
  id: number;
  video_name: string;

  properties: IProjectProperties;
  link: string;
}
