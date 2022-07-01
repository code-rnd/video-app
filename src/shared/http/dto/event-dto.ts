export interface EventDto {
  id: number;
  timestamp: number;
  duration: number;
  zone: ZoneDto;
}

interface ZoneDto {
  left: number;
  top: number;
  width: number;
  height: number;
}
