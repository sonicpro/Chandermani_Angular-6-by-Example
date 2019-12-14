export class Exercise {
  constructor (
    public name: string,
    public title: string,
    public description: string,
    public image: string,
    public soundFile?: string,
    public procedure?: string,
    public videos?: Array<string>) {
  }
}
