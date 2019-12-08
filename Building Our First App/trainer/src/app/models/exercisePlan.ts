import { Exercise } from "./exercise";

export class ExercisePlan {
  constructor(
    public exercise: Exercise,
    public duration: number) {
  }
}
