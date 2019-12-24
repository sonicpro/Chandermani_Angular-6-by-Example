import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "secondsToTime"
})
export class SecondsToTimePipe implements PipeTransform {

  transform(value: number): string {
    let hours: number = 0;
    let minutes: number = 0;
    if (value >= 3600) {
      hours = Math.floor(value / 3600);
      value = value % 3600;
    }
    if (value >= 60) {
      minutes = Math.floor(value / 60);
      value = value % 60;
    }
    const hoursStr: string = hours.toString().padStart(2, "0");
    const minutesStr: string = minutes.toString().padStart(2, "0");
    const seconds: string = value.toString().padStart(2, "0");
    return `${hoursStr}:${minutesStr}:${seconds}`;
  }

}
