import { QuizScore, Quiz, QuizSpanType } from '../../models';

function QuizScoreTiles({scores} : {scores: QuizScore[]}) {

    const tiles = scores.map((x,i) => 
        <div key={i} className="w-full md:w-auto p-4 mb-4 md:mx-2 text-white bg-green-800 rounded">
            <h2 className="text-2xl font-bold">{x.quiz.summary}</h2>
            <span className="text-xl">{x.score}/100</span>
        </div>);

    return (
        <div className="flex flex-wrap justify-start px-24 p-4 bg-green-600">
            {tiles}
        </div>
    );
}

export default QuizScoreTiles;