export interface Vector2D {
    x: number,
    y: number
}

export enum ViewMode {
  None,
  Marker,
  Config
}

export enum DrivingMode {
  Stop,
  FreeDriving,
  DrivingToDestination,
}