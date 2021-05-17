import { Option } from './option';

export class Explanation {
    id: number;
    name: string;
    questionTypeId: number;
    options: Option[];
    answered: boolean;
    explanation: string;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.explanation = data.explantion;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}
