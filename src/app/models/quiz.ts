import { QuizConfig } from './quiz-config';
import { Question } from './question';
import { Explanation } from './explanation';
export class Quiz {
    id: number;
    name: string;
    explanation: string;
    description: string;
    config: QuizConfig;
    questions: Question[];
    explanations: Explanation [];

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            this.explanations = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
