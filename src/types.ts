export interface Vector2D {
    x: number,
    y: number
}

export interface MdnsDevice {
  name: string
  addr: string
  port: number
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