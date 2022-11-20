import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { Link } from "react-router-dom";




export function Lesson(props) {
  const isLessonAva = isPast(props.availableAt);
  // const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm")

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{props.availableAt}</span>

      <div
        className="rounded border border-gray-500 p-4 mt-2 
                      group-hover:border-green-500">
        <header className="flex items-center justify-between">

          {isLessonAva ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />

              Conteudo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />

              Em Breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-1 text-white border border-green-300 font-bold">
            {props.type === "live" ? "Ao vivo" : "Aula Pratica"}
            {console.log(props.lessonType)}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  );
}
