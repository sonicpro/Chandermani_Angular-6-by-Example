import { ExercisePlan } from "./exercisePlan";

export class WorkoutPlan {
  constructor(
    public name: string,
    public title: string,
    public restBetweenExercise: number,
    public exercises: ExercisePlan[],
    public description?: string) {
  }

  totalWorkoutDuration(): number {
    if (!this.exercises) {
      return 0;
    }

    const total = this.exercises.map(e => e.duration).reduce((previous, current) => previous + current, 0);
    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
  }
}
